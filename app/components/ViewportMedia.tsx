'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { Play, Pause } from 'lucide-react';

interface ViewportMediaProps {
  media: string;
  title: string;
  isVideo?: boolean;
  isLottie?: boolean;
  priority?: boolean;
}

export function ViewportMedia({ media, title, isVideo = false, isLottie = false, priority = false }: ViewportMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wasOutOfViewRef = useRef(true); // Track if media was previously out of view
  const [isPlaying, setIsPlaying] = useState(false);
  const hasPlayableMedia = isVideo || isLottie;

  // Function to play media
  const playMedia = useCallback(() => {
    if (isVideo && videoRef.current) {
      // If video has ended, reset to beginning before playing
      if (videoRef.current.ended) {
        videoRef.current.currentTime = 0;
      }
      videoRef.current.play().catch((error) => {
        console.error('Error playing video:', error);
      });
      setIsPlaying(true);
    }
    
    if (isLottie) {
      const container = containerRef.current;
      if (container) {
        const lottiePlayer = container.querySelector('lottie-player') as any;
        if (lottiePlayer) {
          // Check if animation has completed - if so, reset to beginning
          const currentFrame = lottiePlayer.currentFrame || 0;
          const totalFrames = lottiePlayer.totalFrames || 0;
          if (currentFrame >= totalFrames - 1) {
            lottiePlayer.seek(0);
          }
          lottiePlayer.play();
          setIsPlaying(true);
        }
      }
    }
  }, [isVideo, isLottie]);

  // Function to pause media
  const pauseMedia = useCallback(() => {
    if (isVideo && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    
    if (isLottie) {
      const container = containerRef.current;
      if (container) {
        const lottiePlayer = container.querySelector('lottie-player') as any;
        if (lottiePlayer) {
          lottiePlayer.pause();
          setIsPlaying(false);
        }
      }
    }
  }, [isVideo, isLottie]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Auto-play when coming into view (100% visible)
            if (wasOutOfViewRef.current) {
              // Reset video when coming back into view
              if (isVideo && videoRef.current) {
                videoRef.current.currentTime = 0;
              }
              
              // Reset Lottie animation when coming back into view
              if (isLottie) {
                const lottiePlayer = container.querySelector('lottie-player') as any;
                if (lottiePlayer) {
                  lottiePlayer.stop();
                  lottiePlayer.seek(0);
                }
              }
              
              // Auto-play when 100% visible
              playMedia();
              wasOutOfViewRef.current = false;
            }
          } else {
            // Reset and pause when out of view
            if (isVideo && videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
              setIsPlaying(false);
            }
            
            if (isLottie) {
              const lottiePlayer = container.querySelector('lottie-player') as any;
              if (lottiePlayer) {
                lottiePlayer.stop();
                lottiePlayer.seek(0);
                setIsPlaying(false);
              }
            }
            wasOutOfViewRef.current = true;
          }
        });
      },
      {
        threshold: 1.0, // Trigger when 100% of the element is visible
        rootMargin: '0px',
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [isVideo, isLottie, playMedia]);

  // Handle video play/pause events to update state
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideo) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [isVideo]);

  // Handle Lottie animation play/pause/complete events to update state
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isLottie) return;

    const lottiePlayer = container.querySelector('lottie-player') as any;
    if (!lottiePlayer) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleComplete = () => setIsPlaying(false);

    lottiePlayer.addEventListener('play', handlePlay);
    lottiePlayer.addEventListener('pause', handlePause);
    lottiePlayer.addEventListener('complete', handleComplete);

    return () => {
      lottiePlayer.removeEventListener('play', handlePlay);
      lottiePlayer.removeEventListener('pause', handlePause);
      lottiePlayer.removeEventListener('complete', handleComplete);
    };
  }, [isLottie]);

  return (
    <div ref={containerRef} className="relative w-full h-full rounded-[32px] overflow-hidden transition-colors duration-200" style={{ backgroundColor: '#EDEFF2' }}>
      {isVideo ? (
        <video
          ref={videoRef}
          className={`w-full h-full rounded-[32px] ${media === '/two-videos-experiment-parallax1.mp4' ? 'object-cover' : 'object-contain'}`}
          muted
          playsInline
          preload="auto"
        >
          <source src={media} type="video/mp4" />
        </video>
      ) : isLottie ? (
        <div className={`relative w-full h-full rounded-[32px] overflow-hidden flex ${media === '/scale.json' ? 'items-start' : 'items-center'} justify-center`}>
          <lottie-player
            src={media}
            background="transparent"
            speed="1"
            style={{ 
              width: '100%', 
              height: media === '/scale.json' ? '100%' : '80%', 
              maxWidth: '100%', 
              maxHeight: media === '/scale.json' ? '100%' : '80%',
              display: 'block'
            }}
          />
        </div>
      ) : (
        <div className="relative w-full h-full rounded-[32px] overflow-hidden">
          <Image
            src={media}
            alt={title}
            fill
            className="object-contain"
            priority={priority}
          />
        </div>
      )}
      
      {/* Play/Pause Control - Only show for playable media */}
      {hasPlayableMedia && (
        <button
          onClick={() => {
            if (isPlaying) {
              pauseMedia();
            } else {
              playMedia();
            }
          }}
          className="absolute bottom-4 right-4 p-3 rounded-full backdrop-blur-lg backdrop-saturate-150 backdrop-brightness-110 bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-800/30 border border-white/30 dark:border-gray-700/30 shadow-lg transition-all duration-200 z-10 flex items-center justify-center"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 text-black dark:text-white" />
          ) : (
            <Play className="h-5 w-5 text-black dark:text-white" />
          )}
        </button>
      )}
    </div>
  );
}

