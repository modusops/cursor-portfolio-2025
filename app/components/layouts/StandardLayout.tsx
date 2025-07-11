'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { AnimatedContent } from '@/components/animated-content';

interface StandardLayoutProps {
  title: string;
  description: string;
  coverImage?: string;
  content: React.ReactNode;
  metadata?: {
    role?: string;
    timeline?: string;
    team?: string;
  };
}

export const StandardLayout: React.FC<StandardLayoutProps> = ({
  title,
  description,
  coverImage,
  content,
  metadata
}) => {
  return (
    <article className="max-w-7xl mx-auto px-4 py-12 relative">
      <Link 
        href="/" 
        className="fixed left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 lg:right-[max(calc((100%-1280px)/2+32px),32px)] top-8 p-2 rounded-full backdrop-blur-lg backdrop-saturate-150 backdrop-brightness-110 bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-800/30 border border-white/30 dark:border-gray-700/30 shadow-lg transition-all duration-200 z-50"
      >
        <X className="h-6 w-6 text-black dark:text-white drop-shadow-sm" />
        <span className="sr-only">Close</span>
      </Link>
      <AnimatedContent>
        <header className="mb-12">
          <h1 className="font-semibold mb-4 text-black dark:text-white transition-colors duration-200 font-sans" style={{ fontSize: '48px', letterSpacing: '-0.03em' }}>{title}</h1>
          {metadata && (
            <div className="grid grid-cols-3 gap-4 mb-8">
              {metadata.role && (
                <div>
                  <h3 className="font-extrabold mb-1" style={{ fontSize: '12px' }}>Role</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-light">{metadata.role}</p>
                </div>
              )}
              {metadata.timeline && (
                <div>
                  <h3 className="font-extrabold mb-1" style={{ fontSize: '12px' }}>Timeline</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-light">{metadata.timeline}</p>
                </div>
              )}
              {metadata.team && (
                <div>
                  <h3 className="font-extrabold mb-1" style={{ fontSize: '12px' }}>Team</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-light">{metadata.team}</p>
                </div>
              )}
            </div>
          )}
          <p className="text-sm font-light text-gray-600 dark:text-gray-300 mb-6" style={{ letterSpacing: '-0.03em' }}>{description}</p>
          {coverImage && (
            <div className="aspect-video relative overflow-hidden mb-8">
              <Image
                src={coverImage}
                alt={`${title} cover image`}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>
      </AnimatedContent>
      <AnimatedContent className="delay-100">
        <div className="prose dark:prose-invert max-w-none">
          {content}
        </div>
      </AnimatedContent>
    </article>
  );
}; 