'use client';

import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

interface ImageProps {
  src: string;
  alt: string;
  isVideo?: boolean;
  description?: string;
}

export const SingleFullWidth: React.FC<ImageProps> = ({ src, alt, isVideo, description }) => (
  <div className="single-full-width my-12 md:my-20">
    <div className="aspect-video relative overflow-hidden rounded-2xl">
      {isVideo ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      )}
    </div>
    {description && (
      <div className="mt-2 text-gray-500 dark:text-gray-400 text-sm font-light" style={{ letterSpacing: '-0.03em' }}>
        <ReactMarkdown 
          components={{
            a: (props) => (
              <a 
                {...props}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
              />
            ),
            p: (props) => <span {...props} />
          }}
        >
          {description}
        </ReactMarkdown>
      </div>
    )}
  </div>
);

export const TwoImagesGrid: React.FC<{ images: ImageProps[] }> = ({ images }) => (
  <div className="two-images-grid my-12 md:my-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {images.slice(0, 2).map((image, index) => (
        <div key={index}>
          <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
            {image.isVideo ? (
              <video
                src={image.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            )}
          </div>
          {image.description && (
            <div className="mt-2 text-gray-500 dark:text-gray-400 text-sm font-light" style={{ letterSpacing: '-0.03em' }}>
              <ReactMarkdown 
                components={{
                  a: (props) => (
                    <a 
                      {...props}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                    />
                  ),
                  p: (props) => <span {...props} />
                }}
              >
                {image.description}
              </ReactMarkdown>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export const ThreeImagesGrid: React.FC<{ images: ImageProps[] }> = ({ images }) => (
  <div className="three-images-grid my-12 md:my-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {images.slice(0, 3).map((image, index) => (
        <div key={index}>
          <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
          {image.description && (
            <div className="mt-2 text-gray-500 dark:text-gray-400 text-sm font-light" style={{ letterSpacing: '-0.03em' }}>
              <ReactMarkdown 
                components={{
                  a: (props) => (
                    <a 
                      {...props}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                    />
                  ),
                  p: (props) => <span {...props} />
                }}
              >
                {image.description}
              </ReactMarkdown>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export const HeroImage: React.FC<ImageProps> = ({ src, alt, description }) => (
  <div className="mb-12 md:mb-20">
    <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] relative overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 80vw"
        className="object-cover"
        priority
      />
    </div>
    {description && (
      <div className="mt-2 text-gray-500 dark:text-gray-400 text-sm font-light" style={{ letterSpacing: '-0.03em' }}>
        <ReactMarkdown 
          components={{
            a: (props) => (
              <a 
                {...props}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
              />
            ),
            p: (props) => <span {...props} />
          }}
        >
          {description}
        </ReactMarkdown>
      </div>
    )}
  </div>
); 