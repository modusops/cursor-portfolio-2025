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
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-16 transition-colors duration-200">
        <div className="grid grid-cols-5 gap-0 w-full max-w-md">
          <div className="col-span-1"></div>
          <div className="col-span-3 flex flex-col gap-6 items-center text-center">
            <h1 className="text-[36px] leading-[40px] font-normal font-sans text-black dark:text-white transition-colors duration-200">
              Mobile not supported
            </h1>
            <p className="text-[20px] leading-[30px] font-normal font-sans text-gray-400 dark:text-gray-500 transition-colors duration-200">
              This case study is crafted for desktop viewing
            </p>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
