'use client';

import { useState, useEffect } from 'react';
import { PasswordPrompt } from './PasswordPrompt';

interface PasswordGateProps {
  projectSlug: string;
  children: React.ReactNode;
}

export function PasswordGate({ projectSlug, children }: PasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check cookie for access
    const cookieName = `project_access_${projectSlug}`;
    const cookies = document.cookie.split(';');
    const accessCookie = cookies.find(c => 
      c.trim().startsWith(`${cookieName}=`)
    );
    
    if (accessCookie) {
      const cookieValue = accessCookie.split('=')[1];
      if (cookieValue === 'authenticated') {
        setIsAuthenticated(true);
      }
    }
    setIsChecking(false);
  }, [projectSlug]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-gray-500 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <PasswordPrompt
        projectSlug={projectSlug}
        onSuccess={() => setIsAuthenticated(true)}
      />
    );
  }

  return <>{children}</>;
}
