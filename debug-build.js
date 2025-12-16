const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG_ENDPOINT = 'http://127.0.0.1:7242/ingest/cdf8af54-3bc3-43d7-a342-dd94192d256e';
const LOG_FILE = '/Users/dave-chan-sono/Documents/Cursor/v0-portfolio-2025/.cursor/debug.log';

function log(data) {
  const logEntry = JSON.stringify({
    ...data,
    timestamp: Date.now(),
    sessionId: 'debug-session',
  }) + '\n';
  
  // Write to file
  try {
    fs.appendFileSync(LOG_FILE, logEntry, 'utf8');
  } catch (e) {
    // Ignore file write errors
  }
  
  // Also send via HTTP (non-blocking)
  if (typeof fetch !== 'undefined') {
    fetch(LOG_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, timestamp: Date.now(), sessionId: 'debug-session' })
    }).catch(() => {});
  }
}

// #region agent log
log({
  location: 'debug-build.js:start',
  message: 'Debug script started',
  hypothesisId: 'ALL',
  data: { cwd: process.cwd() }
});
// #endregion

const projectRoot = '/Users/dave-chan-sono/Documents/Cursor/v0-portfolio-2025';
const nextDir = path.join(projectRoot, '.next');
const serverDir = path.join(nextDir, 'server');

// #region agent log
log({
  location: 'debug-build.js:check-dirs',
  message: 'Checking directory existence before build',
  hypothesisId: 'D',
  data: {
    nextDirExists: fs.existsSync(nextDir),
    serverDirExists: fs.existsSync(serverDir),
    nextDirWritable: fs.existsSync(nextDir) ? true : (() => {
      try {
        fs.mkdirSync(nextDir, { recursive: true });
        return true;
      } catch (e) {
        return false;
      }
    })()
  }
});
// #endregion

// Check postcss config
const postcssConfig = path.join(projectRoot, 'postcss.config.mjs');
// #region agent log
if (fs.existsSync(postcssConfig)) {
  const postcssContent = fs.readFileSync(postcssConfig, 'utf8');
  log({
    location: 'debug-build.js:check-postcss',
    message: 'PostCSS config content',
    hypothesisId: 'A',
    data: {
      hasAutoprefixer: postcssContent.includes('autoprefixer'),
      hasTailwindcss: postcssContent.includes('tailwindcss'),
      content: postcssContent
    }
  });
}
// #endregion

// Start Next.js dev server
const nextDev = spawn('npm', ['run', 'dev'], {
  cwd: projectRoot,
  stdio: ['ignore', 'pipe', 'pipe'],
  shell: true
});

let buildStarted = false;
let buildReady = false;
let firstRequestTime = null;

// #region agent log
log({
  location: 'debug-build.js:spawn',
  message: 'Next.js dev server spawned',
  hypothesisId: 'B',
  data: { pid: nextDev.pid }
});
// #endregion

// Monitor stdout
nextDev.stdout.on('data', (data) => {
  const output = data.toString();
  const lines = output.split('\n').filter(l => l.trim());
  
  lines.forEach(line => {
    // #region agent log
    if (line.includes('Starting') || line.includes('Compiling')) {
      buildStarted = true;
      log({
        location: 'debug-build.js:stdout',
        message: 'Build started',
        hypothesisId: 'B',
        data: { line, buildStarted }
      });
    }
    
    if (line.includes('Ready') || line.includes('Local:')) {
      buildReady = true;
      log({
        location: 'debug-build.js:stdout',
        message: 'Server reports ready',
        hypothesisId: 'B',
        data: { 
          line, 
          buildReady,
          serverDirExists: fs.existsSync(serverDir),
          manifestExists: fs.existsSync(path.join(serverDir, 'middleware-manifest.json')),
          pagesManifestExists: fs.existsSync(path.join(serverDir, 'pages-manifest.json'))
        }
      });
    }
    
    if (line.includes('error') || line.includes('Error') || line.includes('Failed')) {
      log({
        location: 'debug-build.js:stdout',
        message: 'Error detected in output',
        hypothesisId: 'C',
        data: { line, buildStarted, buildReady }
      });
    }
    // #endregion
  });
  
  process.stdout.write(data);
});

// Monitor stderr
nextDev.stderr.on('data', (data) => {
  const output = data.toString();
  // #region agent log
  log({
    location: 'debug-build.js:stderr',
    message: 'Stderr output',
    hypothesisId: 'C',
    data: { output: output.substring(0, 500) }
  });
  // #endregion
  process.stderr.write(data);
});

// Monitor file system changes
let checkInterval;
let checkCount = 0;

function checkBuildStatus() {
  checkCount++;
  const manifestPath = path.join(serverDir, 'middleware-manifest.json');
  const pagesManifestPath = path.join(serverDir, 'pages-manifest.json');
  
  // #region agent log
  log({
    location: 'debug-build.js:fs-check',
    message: 'File system check',
    hypothesisId: 'B',
    runId: `check-${checkCount}`,
    data: {
      checkCount,
      serverDirExists: fs.existsSync(serverDir),
      manifestExists: fs.existsSync(manifestPath),
      pagesManifestExists: fs.existsSync(pagesManifestPath),
      buildReady,
      elapsed: firstRequestTime ? Date.now() - firstRequestTime : null
    }
  });
  // #endregion
  
  // After server reports ready, check if manifests exist
  if (buildReady && !firstRequestTime) {
    firstRequestTime = Date.now();
    // Make a test request after a delay
    setTimeout(() => {
      // #region agent log
      log({
        location: 'debug-build.js:test-request',
        message: 'Making test request to trigger build',
        hypothesisId: 'B',
        data: { 
          timeSinceReady: Date.now() - firstRequestTime,
          serverDirExists: fs.existsSync(serverDir),
          manifestExists: fs.existsSync(manifestPath)
        }
      });
      // #endregion
      
      if (typeof fetch !== 'undefined') {
        fetch('http://localhost:3000').catch(err => {
          // #region agent log
          log({
            location: 'debug-build.js:request-error',
            message: 'Test request error',
            hypothesisId: 'B',
            data: { error: err.message }
          });
          // #endregion
        });
      } else {
        // Fallback to http module if fetch not available
        const http = require('http');
        http.get('http://localhost:3000', () => {}).on('error', (err) => {
          log({
            location: 'debug-build.js:request-error',
            message: 'Test request error',
            hypothesisId: 'B',
            data: { error: err.message }
          });
        });
      }
    }, 2000);
  }
  
  if (checkCount > 60) { // Stop after 60 checks (1 minute)
    clearInterval(checkInterval);
  }
}

checkInterval = setInterval(checkBuildStatus, 1000);

// Cleanup on exit
process.on('SIGINT', () => {
  clearInterval(checkInterval);
  nextDev.kill();
  // #region agent log
  log({
    location: 'debug-build.js:exit',
    message: 'Debug script exiting',
    hypothesisId: 'ALL',
    data: { finalCheckCount: checkCount }
  });
  // #endregion
  process.exit(0);
});

nextDev.on('exit', (code) => {
  clearInterval(checkInterval);
  // #region agent log
  log({
    location: 'debug-build.js:process-exit',
    message: 'Next.js process exited',
    hypothesisId: 'ALL',
    data: { exitCode: code }
  });
  // #endregion
  process.exit(code || 0);
});

