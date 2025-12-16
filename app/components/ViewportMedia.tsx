'use client';

import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { Play, Pause } from 'lucide-react';

interface ViewportMediaProps {
  media: string | string[];
  title: string;
  isVideo?: boolean | boolean[];
  isLottie?: boolean | boolean[];
  priority?: boolean;
}

export function ViewportMedia({ media, title, isVideo = false, isLottie = false, priority = false }: ViewportMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wasOutOfViewRef = useRef(true); // Track if media was previously out of view
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Normalize media to array format for easier handling
  const mediaArray = useMemo(() => {
    return Array.isArray(media) ? media : [media];
  }, [media]);

  // Normalize isVideo and isLottie to arrays
  const isVideoArray = useMemo(() => {
    if (Array.isArray(isVideo)) {
      return isVideo;
    }
    return mediaArray.map(() => isVideo as boolean);
  }, [isVideo, mediaArray]);

  const isLottieArray = useMemo(() => {
    if (Array.isArray(isLottie)) {
      return isLottie;
    }
    return mediaArray.map(() => isLottie as boolean);
  }, [isLottie, mediaArray]);

  // Get current media properties
  const currentMedia = mediaArray[currentIndex];
  const currentIsVideo = isVideoArray[currentIndex] || false;
  const currentIsLottie = isLottieArray[currentIndex] || false;
  const hasPlayableMedia = currentIsVideo || currentIsLottie;
  const showPagination = mediaArray.length > 1;

  // Function to advance to next media item
  const advanceToNext = useCallback(() => {
    if (showPagination) {
      // Small delay for better UX before advancing
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          // Only advance if not already on the last item
          if (prevIndex < mediaArray.length - 1) {
            return prevIndex + 1;
          }
          return prevIndex;
        });
      }, 500);
    }
  }, [showPagination, mediaArray.length]);

  // Function to play media
  const playMedia = useCallback(() => {
    if (currentIsVideo && videoRef.current) {
      // If video has ended, reset to beginning before playing
      if (videoRef.current.ended) {
        videoRef.current.currentTime = 0;
      }
      videoRef.current.play().catch((error) => {
        console.error('Error playing video:', error);
      });
      setIsPlaying(true);
    }
    
    if (currentIsLottie) {
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
  }, [currentIsVideo, currentIsLottie]);

  // Function to pause media
  const pauseMedia = useCallback(() => {
    if (currentIsVideo && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    
    if (currentIsLottie) {
      const container = containerRef.current;
      if (container) {
        const lottiePlayer = container.querySelector('lottie-player') as any;
        if (lottiePlayer) {
          lottiePlayer.pause();
          setIsPlaying(false);
        }
      }
    }
  }, [currentIsVideo, currentIsLottie]);

  // Reset playing state when index changes
  useEffect(() => {
    setIsPlaying(false);
  }, [currentIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Auto-play when coming into view (75% visible)
            if (wasOutOfViewRef.current) {
              // Reset video when coming back into view
              if (currentIsVideo && videoRef.current) {
                videoRef.current.currentTime = 0;
              }
              
              // Reset Lottie animation when coming back into view
              if (currentIsLottie) {
                const lottiePlayer = container.querySelector('lottie-player') as any;
                if (lottiePlayer) {
                  lottiePlayer.stop();
                  lottiePlayer.seek(0);
                }
              }
              
              // Auto-play when 75% visible
              playMedia();
              wasOutOfViewRef.current = false;
            }
          } else {
            // Reset and pause when out of view
            if (currentIsVideo && videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
              setIsPlaying(false);
            }
            
            if (currentIsLottie) {
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
        threshold: 0.75, // Trigger when 75% of the element is visible
        rootMargin: '0px',
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [currentIsVideo, currentIsLottie, currentIndex, playMedia]);

  // Handle video play/pause events to update state
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !currentIsVideo) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      // Auto-advance to next media item if pagination is enabled
      if (showPagination) {
        advanceToNext();
      }
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [currentIsVideo, currentIndex, showPagination, advanceToNext]);

  // Handle Lottie animation play/pause/complete events to update state
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !currentIsLottie) return;

    const lottiePlayer = container.querySelector('lottie-player') as any;
    if (!lottiePlayer) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleComplete = () => {
      setIsPlaying(false);
      // Auto-advance to next media item if pagination is enabled
      if (showPagination) {
        advanceToNext();
      }
    };

    lottiePlayer.addEventListener('play', handlePlay);
    lottiePlayer.addEventListener('pause', handlePause);
    lottiePlayer.addEventListener('complete', handleComplete);

    return () => {
      lottiePlayer.removeEventListener('play', handlePlay);
      lottiePlayer.removeEventListener('pause', handlePause);
      lottiePlayer.removeEventListener('complete', handleComplete);
    };
  }, [currentIsLottie, currentIndex, showPagination, advanceToNext]);

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="relative w-full h-full rounded-[32px] overflow-hidden transition-colors duration-200" style={{ backgroundColor: '#EDEFF2' }}>
        {mediaArray.map((mediaItem, index) => {
          const itemIsVideo = isVideoArray[index] || false;
          const itemIsLottie = isLottieArray[index] || false;
          const isActive = index === currentIndex;

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-300 ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {itemIsVideo ? (
                <video
                  ref={index === currentIndex ? videoRef : null}
                  className={`w-full h-full rounded-[32px] ${mediaItem === '/two-videos-experiment-parallax1.mp4' ? 'object-cover' : 'object-contain'}`}
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={mediaItem} type="video/mp4" />
                </video>
              ) : itemIsLottie ? (
                <div className={`relative w-full h-full rounded-[32px] overflow-hidden flex ${mediaItem === '/scale.json' ? 'items-start' : 'items-center'} justify-center`}>
                  <lottie-player
                    src={mediaItem}
                    background="transparent"
                    speed="1"
                    style={{ 
                      width: '100%', 
                      height: mediaItem === '/scale.json' ? '100%' : '80%', 
                      maxWidth: '100%', 
                      maxHeight: mediaItem === '/scale.json' ? '100%' : '80%',
                      display: 'block'
                    }}
                  />
                </div>
              ) : (
                <div className="relative w-full h-full rounded-[32px] overflow-hidden">
                  <Image
                    src={mediaItem}
                    alt={`${title} - ${index + 1}`}
                    fill
                    className="object-contain"
                    priority={priority && index === 0}
                  />
                </div>
              )}
            </div>
          );
        })}
        
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
            className="absolute bottom-4 right-4 p-3 rounded-full backdrop-blur-lg backdrop-saturate-150 backdrop-brightness-110 bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-800/30 border border-white/30 dark:border-gray-700/30 shadow-lg transition-all duration-200 z-20 flex items-center justify-center"
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

      {/* Pagination Dots - Centered below container */}
      {showPagination && (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {mediaArray.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="group cursor-pointer"
              aria-label={`Go to media ${index + 1}`}
            >
              <span
                className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-black dark:bg-white'
                    : 'bg-gray-200 dark:bg-gray-700 group-hover:bg-gray-300 dark:group-hover:bg-gray-600'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

