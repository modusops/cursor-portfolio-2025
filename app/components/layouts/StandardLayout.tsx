'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { AnimatedContent } from '@/components/animated-content';

interface StandardLayoutProps {
  title: string;
  description: string;
  coverImage: string;
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
    <article className="max-w-5xl mx-auto px-4 py-12 relative">
      <Link 
        href="/" 
        className="fixed left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 lg:right-[max(calc((100%-1280px)/2+32px),32px)] top-8 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-50"
      >
        <X className="h-6 w-6" />
        <span className="sr-only">Close</span>
      </Link>
      <AnimatedContent>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-medium mb-4 text-black dark:text-white transition-colors duration-200 font-sans">{title}</h1>
          {metadata && (
            <div className="grid grid-cols-3 gap-4 mb-8">
              {metadata.role && (
                <div>
                  <h3 className="font-medium mb-1">Role</h3>
                  <p className="text-gray-600 dark:text-gray-300">{metadata.role}</p>
                </div>
              )}
              {metadata.timeline && (
                <div>
                  <h3 className="font-medium mb-1">Timeline</h3>
                  <p className="text-gray-600 dark:text-gray-300">{metadata.timeline}</p>
                </div>
              )}
              {metadata.team && (
                <div>
                  <h3 className="font-medium mb-1">Team</h3>
                  <p className="text-gray-600 dark:text-gray-300">{metadata.team}</p>
                </div>
              )}
            </div>
          )}
          <div className="relative w-full h-[60vh] overflow-hidden mb-8">
            <Image
              src={coverImage}
              alt={`${title} cover image`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{description}</p>
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