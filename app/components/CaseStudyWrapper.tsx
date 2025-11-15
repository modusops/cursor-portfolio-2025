'use client';

import { useEffect, useState } from 'react';

interface CaseStudyWrapperProps {
  children: React.ReactNode;
}

export function CaseStudyWrapper({ children }: CaseStudyWrapperProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent hydration mismatch - don't render anything until client-side
  if (!isClient) {
    return null;
  }

  if (isMobile) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8 bg-[#F8F8F8]">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold mb-6">Desktop Experience</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            This case study is crafted for desktop viewing.
          </p>
          <p className="text-base text-gray-500">
            Please visit on a larger screen for the full interactive experience.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
