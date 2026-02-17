import { NextRequest, NextResponse } from 'next/server';

// Route segment config for Netlify compatibility
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { projectSlug, password } = body;

    if (!projectSlug || !password) {
      console.error('Missing fields:', { projectSlug: !!projectSlug, password: !!password });
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get password from environment variable
    // Format: PROJECT_PASSWORD_<SLUG_IN_UPPERCASE>
    const envKey = `PROJECT_PASSWORD_${projectSlug.toUpperCase().replace(/-/g, '_')}`;
    const correctPassword = process.env[envKey];

    console.log('Password check:', { 
      projectSlug, 
      envKey, 
      hasPassword: !!correctPassword,
      nodeEnv: process.env.NODE_ENV 
    });

    if (!correctPassword) {
      console.error('Password not configured:', envKey);
      return NextResponse.json(
        { success: false, error: 'Password not configured for this project' },
        { status: 500 }
      );
    }

    if (password === correctPassword) {
      // Use NextResponse to set cookie directly (more reliable on Netlify)
      const response = NextResponse.json({ success: true });
      
      const cookieName = `project_access_${projectSlug}`;
      const isProduction = process.env.NODE_ENV === 'production';
      
      response.cookies.set(cookieName, 'authenticated', {
        httpOnly: false,
        secure: isProduction,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });
      
      console.log('Cookie set successfully:', cookieName);
      return response;
    }

    console.log('Password mismatch');
    return NextResponse.json(
      { success: false, error: 'Incorrect password' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Password verification error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    console.error('Error stack:', errorStack);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error', 
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}
