const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG_FILE = '/Users/dave-chan-sono/Documents/Cursor/v0-portfolio-2025/.cursor/debug.log';
const LOG_ENDPOINT = 'http://127.0.0.1:7242/ingest/cdf8af54-3bc3-43d7-a342-dd94192d256e';

function log(data) {
  const entry = { ...data, timestamp: Date.now(), sessionId: 'debug-session', runId: 'post-fix' };
  const logLine = JSON.stringify(entry) + '\n';
  
  try {
    fs.appendFileSync(LOG_FILE, logLine, 'utf8');
  } catch (e) {}
  
  if (typeof fetch !== 'undefined') {
    fetch(LOG_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry)
    }).catch(() => {});
  }
}

// #region agent log
log({
  location: 'test-build.js:start',
  message: 'Post-fix verification started',
  hypothesisId: 'A',
  data: { fixApplied: 'autoprefixer added to postcss.config.mjs' }
});
// #endregion

const projectRoot = '/Users/dave-chan-sono/Documents/Cursor/v0-portfolio-2025';
const serverDir = path.join(projectRoot, '.next/server');
const manifestPath = path.join(serverDir, 'middleware-manifest.json');
const pagesManifestPath = path.join(serverDir, 'pages-manifest.json');

// #region agent log
log({
  location: 'test-build.js:pre-build-check',
  message: 'Checking state before build',
  hypothesisId: 'A',
  data: {
    serverDirExists: fs.existsSync(serverDir),
    manifestExists: fs.existsSync(manifestPath),
    pagesManifestExists: fs.existsSync(pagesManifestPath)
  }
});
// #endregion

const nextDev = spawn('npm', ['run', 'dev'], {
  cwd: projectRoot,
  stdio: ['ignore', 'pipe', 'pipe'],
  shell: true
});

let readyReported = false;
let checkCount = 0;

// #region agent log
log({
  location: 'test-build.js:spawn',
  message: 'Dev server spawned',
  hypothesisId: 'A',
  data: { pid: nextDev.pid }
});
// #endregion

nextDev.stdout.on('data', (data) => {
  const output = data.toString();
  const lines = output.split('\n').filter(l => l.trim());
  
  lines.forEach(line => {
    // #region agent log
    if (line.includes('Ready') || line.includes('Local:')) {
      readyReported = true;
      log({
        location: 'test-build.js:ready',
        message: 'Server reports ready',
        hypothesisId: 'A',
        data: {
          line,
          serverDirExists: fs.existsSync(serverDir),
          manifestExists: fs.existsSync(manifestPath),
          pagesManifestExists: fs.existsSync(pagesManifestPath)
        }
      });
    }
    
    if (line.includes('error') || line.includes('Error') || line.includes('Failed')) {
      log({
        location: 'test-build.js:error',
        message: 'Error in build output',
        hypothesisId: 'A',
        data: { line: line.substring(0, 200) }
      });
    }
    // #endregion
  });
  
  process.stdout.write(data);
});

nextDev.stderr.on('data', (data) => {
  // #region agent log
  log({
    location: 'test-build.js:stderr',
    message: 'Stderr output',
    hypothesisId: 'A',
    data: { output: data.toString().substring(0, 200) }
  });
  // #endregion
  process.stderr.write(data);
});

const checkInterval = setInterval(() => {
  checkCount++;
  
  // #region agent log
  log({
    location: 'test-build.js:fs-check',
    message: 'File system check',
    hypothesisId: 'A',
    data: {
      checkCount,
      readyReported,
      serverDirExists: fs.existsSync(serverDir),
      manifestExists: fs.existsSync(manifestPath),
      pagesManifestExists: fs.existsSync(pagesManifestPath)
    }
  });
  // #endregion
  
  if (checkCount >= 30 || (readyReported && fs.existsSync(manifestPath) && fs.existsSync(pagesManifestPath))) {
    clearInterval(checkInterval);
    // #region agent log
    log({
      location: 'test-build.js:complete',
      message: 'Build check complete',
      hypothesisId: 'A',
      data: {
        success: fs.existsSync(manifestPath) && fs.existsSync(pagesManifestPath),
        finalCheckCount: checkCount
      }
    });
    // #endregion
    nextDev.kill();
    process.exit(fs.existsSync(manifestPath) && fs.existsSync(pagesManifestPath) ? 0 : 1);
  }
});

nextDev.on('exit', (code) => {
  clearInterval(checkInterval);
  process.exit(code || 0);
});

process.on('SIGINT', () => {
  clearInterval(checkInterval);
  nextDev.kill();
  process.exit(0);
});


