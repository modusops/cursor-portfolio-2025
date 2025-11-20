'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-16 py-0 transition-colors duration-200">
        <div className="flex flex-col gap-6 items-center justify-center max-w-[217px]">
          <div className="flex flex-col gap-2 items-center text-center">
            <p className="text-[20px] leading-[30px] font-medium font-sans text-black dark:text-white transition-colors duration-200">
              This case study is optimized for a desktop experience :)
            </p>
            <div className="relative w-[50px] h-[31px]">
              <Image
                src="/mobile.png"
                alt="Mobile device icon"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[14px] leading-[24px] font-normal font-sans text-gray-500 dark:text-gray-400 transition-colors duration-200">
              To view on mobile devices, please use landscape mode.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
