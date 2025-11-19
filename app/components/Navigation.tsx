'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  hideOnScroll?: boolean;
}

export function Navigation({ hideOnScroll = false }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    if (!hideOnScroll) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 200;

      // Always show nav when near top of page
      if (currentScrollY <= threshold) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down - hide nav
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up - show nav
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hideOnScroll]);

  // Determine active link based on pathname
  const isHomeActive = pathname === '/';
  const isAboutActive = pathname === '/about';
  const isContactActive = pathname === '/contact';

  return (
    <nav
      className={`fixed bottom-6 md:top-6 md:bottom-auto left-1/2 -translate-x-1/2 z-40 flex items-center md:justify-between justify-center backdrop-blur-lg backdrop-saturate-150 backdrop-brightness-110 bg-white/20 dark:bg-gray-800/20 py-2 px-3 rounded-full shadow-lg border border-white/30 dark:border-gray-700/30 transition-all duration-300 w-max md:w-[90%] lg:w-1/2 ${
        hideOnScroll && !isVisible
          ? '-translate-y-full opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100'
      }`}
    >
      <h1 className="text-xl font-medium text-black dark:text-white font-sans pl-2 drop-shadow-sm hidden md:block">
        Dave Chan
      </h1>

      <div className="flex items-center space-x-4">
        <Link
          href="/"
          className={`nav-item px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 relative drop-shadow-sm ${
            isHomeActive
              ? 'bg-black dark:bg-white backdrop-blur-sm text-white dark:text-black border border-black dark:border-white hover:bg-gray-800 dark:hover:bg-gray-100 hover:border-gray-800 dark:hover:border-gray-100'
              : 'text-black/90 dark:text-white/90 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-black/20 dark:hover:border-white/20'
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`nav-item px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 relative drop-shadow-sm ${
            isAboutActive
              ? 'bg-black dark:bg-white backdrop-blur-sm text-white dark:text-black border border-black dark:border-white hover:bg-gray-800 dark:hover:bg-gray-100 hover:border-gray-800 dark:hover:border-gray-100'
              : 'text-black/90 dark:text-white/90 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-black/20 dark:hover:border-white/20'
          }`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`nav-item px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 relative drop-shadow-sm ${
            isContactActive
              ? 'bg-black dark:bg-white backdrop-blur-sm text-white dark:text-black border border-black dark:border-white hover:bg-gray-800 dark:hover:bg-gray-100 hover:border-gray-800 dark:hover:border-gray-100'
              : 'text-black/90 dark:text-white/90 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-black/20 dark:hover:border-white/20'
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

