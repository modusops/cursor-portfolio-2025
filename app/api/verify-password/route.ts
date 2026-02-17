import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const { projectSlug, password } = await request.json();

    if (!projectSlug || !password) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get password from environment variable
    // Format: PROJECT_PASSWORD_<SLUG_IN_UPPERCASE>
    const envKey = `PROJECT_PASSWORD_${projectSlug.toUpperCase().replace(/-/g, '_')}`;
    const correctPassword = process.env[envKey];

    if (!correctPassword) {
      return NextResponse.json(
        { success: false, error: 'Password not configured for this project' },
        { status: 404 }
      );
    }

    if (password === correctPassword) {
      const cookieStore = await cookies();
      cookieStore.set(`project_access_${projectSlug}`, 'authenticated', {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, error: 'Incorrect password' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Password verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
