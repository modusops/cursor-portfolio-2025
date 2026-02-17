import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Route segment config for Netlify compatibility
export const runtime = 'nodejs';
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
      try {
        const cookieStore = await cookies();
        cookieStore.set(`project_access_${projectSlug}`, 'authenticated', {
          httpOnly: false,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 30,
          path: '/',
        });
        console.log('Cookie set successfully');
      } catch (cookieError) {
        console.error('Cookie setting error:', cookieError);
        // Continue anyway - cookie might still work
      }

      return NextResponse.json({ success: true });
    }

    console.log('Password mismatch');
    return NextResponse.json(
      { success: false, error: 'Incorrect password' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Password verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
