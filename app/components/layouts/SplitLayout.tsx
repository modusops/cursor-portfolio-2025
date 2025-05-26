'use client';

import React from 'react';
import Image from 'next/image';

interface SplitLayoutProps {
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

export const SplitLayout: React.FC<SplitLayoutProps> = ({
  title,
  description,
  coverImage,
  content,
  metadata
}) => {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-1/2 h-screen">
        <div className="relative h-full">
          <Image
            src={coverImage}
            alt={`${title} cover image`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="ml-[50%] min-h-screen bg-white dark:bg-gray-900">
        <article className="max-w-2xl mx-auto px-8 py-16">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{description}</p>
            {metadata && (
              <div className="grid grid-cols-1 gap-4 mb-8">
                {metadata.role && (
                  <div>
                    <h3 className="font-semibold mb-1">Role</h3>
                    <p className="text-gray-600 dark:text-gray-300">{metadata.role}</p>
                  </div>
                )}
                {metadata.timeline && (
                  <div>
                    <h3 className="font-semibold mb-1">Timeline</h3>
                    <p className="text-gray-600 dark:text-gray-300">{metadata.timeline}</p>
                  </div>
                )}
                {metadata.team && (
                  <div>
                    <h3 className="font-semibold mb-1">Team</h3>
                    <p className="text-gray-600 dark:text-gray-300">{metadata.team}</p>
                  </div>
                )}
              </div>
            )}
          </header>
          <div className="prose dark:prose-invert max-w-none">
            {content}
          </div>
        </article>
      </div>
    </div>
  );
}; 