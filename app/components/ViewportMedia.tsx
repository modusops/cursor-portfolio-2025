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
  const isInViewRef = useRef(false); // Track if component is currently in view
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const staticMediaTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef(0); // Ref to track current progress without stale closures

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
  const currentIsStatic = !currentIsVideo && !currentIsLottie;
  const hasPlayableMedia = currentIsVideo || currentIsLottie;
  const showPagination = mediaArray.length > 1;

  // Function to stop static media timer (defined first to avoid circular dependency)
  const stopStaticMediaTimer = useCallback(() => {
    if (staticMediaTimerRef.current) {
      clearInterval(staticMediaTimerRef.current);
      staticMediaTimerRef.current = null;
    }
  }, []);

  // Function to advance to next media item (with looping)
  const advanceToNext = useCallback(() => {
    if (showPagination) {
      // Stop all timers first to prevent race conditions
      stopStaticMediaTimer();
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
      
      // Small delay for better UX before advancing
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          // Loop back to first item when reaching the end
          return (prevIndex + 1) % mediaArray.length;
        });
      }, 100);
    }
  }, [showPagination, mediaArray.length, stopStaticMediaTimer]);

  // Function to start static media timer
  const startStaticMediaTimer = useCallback((startFromProgress = 0) => {
    // Clear any existing timer
    if (staticMediaTimerRef.current) {
      clearInterval(staticMediaTimerRef.current);
    }
    
    // Set initial progress value in both state and ref
    progressRef.current = startFromProgress;
    setProgress(startFromProgress);
    
    // Update progress every 50ms (100% over 5000ms = 2% per 50ms)
    staticMediaTimerRef.current = setInterval(() => {
      progressRef.current = Math.min(progressRef.current + 2, 100); // 2% per 50ms = 100% in 5000ms
      setProgress(progressRef.current);
      
      if (progressRef.current >= 100) {
        // Clear timer before advancing to prevent race conditions
        if (staticMediaTimerRef.current) {
          clearInterval(staticMediaTimerRef.current);
          staticMediaTimerRef.current = null;
        }
        // Auto-advance when complete
        setTimeout(() => {
          advanceToNext();
        }, 50); // Small delay to ensure state is updated
      }
    }, 50);
  }, [advanceToNext]);

  // Function to play media
  const playMedia = useCallback((startFromProgress?: number) => {
    setIsPaused(false);
    
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
        const lottiePlayer = container.querySelector(`lottie-player[data-index="${currentIndex}"]`) as any;
        if (lottiePlayer) {
          // Check if animation has completed using getLottie() - if so, reset to beginning
          const lottie = lottiePlayer.getLottie?.();
          if (lottie) {
            const currentFrame = lottie.currentFrame || 0;
            const totalFrames = lottie.totalFrames || 1;
            // Only reset if animation has completed (at or near the end)
            if (totalFrames > 0 && currentFrame >= totalFrames - 1) {
              lottiePlayer.seek(0);
            }
          }
          lottiePlayer.play();
          setIsPlaying(true);
        }
      }
    }
    
    if (currentIsStatic) {
      // Use provided progress or current progress ref value
      const startProgress = startFromProgress !== undefined ? startFromProgress : progressRef.current;
      startStaticMediaTimer(startProgress);
      setIsPlaying(true);
    }
  }, [currentIsVideo, currentIsLottie, currentIsStatic, startStaticMediaTimer, progress]);

  // Function to pause media
  const pauseMedia = useCallback(() => {
    setIsPaused(true);
    
    if (currentIsVideo && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    
    if (currentIsLottie) {
      const container = containerRef.current;
      if (container) {
        const lottiePlayer = container.querySelector(`lottie-player[data-index="${currentIndex}"]`) as any;
        if (lottiePlayer) {
          lottiePlayer.pause();
          setIsPlaying(false);
        }
      }
    }
    
    if (currentIsStatic) {
      stopStaticMediaTimer();
      setIsPlaying(false);
    }
  }, [currentIsVideo, currentIsLottie, currentIsStatic, stopStaticMediaTimer]);

  // Reset playing state and progress when index changes, then auto-play
  useEffect(() => {
    // Stop all timers first
    stopStaticMediaTimer();
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
    
    // Reset state and ref
    progressRef.current = 0;
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
    
    // Determine media type for new index
    const newIsVideo = isVideoArray[currentIndex] || false;
    const newIsLottie = isLottieArray[currentIndex] || false;
    const newIsStatic = !newIsVideo && !newIsLottie;
    
    // Auto-play if component is in view
    if (isInViewRef.current && containerRef.current) {
      setTimeout(() => {
        if (!containerRef.current) return;
        
        if (newIsLottie) {
          const lottiePlayer = containerRef.current.querySelector(`lottie-player[data-index="${currentIndex}"]`) as any;
          if (lottiePlayer) {
            lottiePlayer.stop();
            lottiePlayer.seek(0);
            progressRef.current = 0;
            setProgress(0);
            lottiePlayer.play();
            setIsPlaying(true);
          }
        } else if (newIsVideo) {
          const video = containerRef.current.querySelector('video') as HTMLVideoElement;
          if (video) {
            video.currentTime = 0;
            video.play().catch(console.error);
            setIsPlaying(true);
          }
        } else if (newIsStatic) {
          startStaticMediaTimer(0);
          setIsPlaying(true);
        }
      }, 50);
    } else if (newIsLottie && containerRef.current) {
      // If not in view, just reset the Lottie without playing
      setTimeout(() => {
        if (containerRef.current) {
          const lottiePlayer = containerRef.current.querySelector(`lottie-player[data-index="${currentIndex}"]`) as any;
          if (lottiePlayer) {
            lottiePlayer.stop();
            lottiePlayer.seek(0);
            progressRef.current = 0;
            setProgress(0);
          }
        }
      }, 10);
    }
  }, [currentIndex, stopStaticMediaTimer, isLottieArray, isVideoArray, startStaticMediaTimer]);

  // Cleanup all timers on unmount
  useEffect(() => {
    return () => {
      if (staticMediaTimerRef.current) {
        clearInterval(staticMediaTimerRef.current);
        staticMediaTimerRef.current = null;
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isInViewRef.current = true;
            // Auto-play when coming into view (75% visible)
            if (wasOutOfViewRef.current) {
              // Reset video when coming back into view
              if (currentIsVideo && videoRef.current) {
                videoRef.current.currentTime = 0;
              }
              
              // Reset Lottie animation when coming back into view
              if (currentIsLottie) {
                const lottiePlayer = container.querySelector(`lottie-player[data-index="${currentIndex}"]`) as any;
                if (lottiePlayer) {
                  lottiePlayer.stop();
                  lottiePlayer.seek(0);
                }
              }
              
              // Reset progress for static media and start from 0
              if (currentIsStatic) {
                // Start timer from 0 when coming into view
                playMedia(0);
              } else {
                // Auto-play when 75% visible
                playMedia();
              }
              wasOutOfViewRef.current = false;
            }
          } else {
            isInViewRef.current = false;
            // Reset and pause when out of view
            if (currentIsVideo && videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
              setIsPlaying(false);
            }
            
            if (currentIsLottie) {
              const lottiePlayer = container.querySelector(`lottie-player[data-index="${currentIndex}"]`) as any;
              if (lottiePlayer) {
                lottiePlayer.stop();
                lottiePlayer.seek(0);
                setIsPlaying(false);
              }
            }
            
            if (currentIsStatic) {
              stopStaticMediaTimer();
              progressRef.current = 0;
              setProgress(0);
              setIsPlaying(false);
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
  }, [currentIsVideo, currentIsLottie, currentIsStatic, currentIndex, playMedia, stopStaticMediaTimer]);

  // Handle video play/pause events to update state and track progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !currentIsVideo) return;

    const handlePlay = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };
    
    const handlePause = () => {
      setIsPlaying(false);
      setIsPaused(true);
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      // Auto-advance to next media item if pagination is enabled
      if (showPagination) {
        advanceToNext();
      }
    };
    
    const handleTimeUpdate = () => {
      if (video.duration) {
        const progressPercent = (video.currentTime / video.duration) * 100;
        progressRef.current = progressPercent;
        setProgress(progressPercent);
      }
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [currentIsVideo, currentIndex, showPagination, advanceToNext]);

  // Handle Lottie animation progress tracking with polling
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !currentIsLottie) {
      // Clear interval if not Lottie
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
      return;
    }

    let lottiePlayer: any = null;
    let handlePlay: (() => void) | null = null;
    let handlePause: (() => void) | null = null;
    let handleComplete: (() => void) | null = null;

    // Function to get progress from lottie player
    const getProgress = (player: any): number => {
      if (!player) return 0;
      
      // Try seeker property first (0-100 value)
      const seeker = player.seeker;
      if (typeof seeker === 'number' && seeker >= 0) {
        return seeker;
      }
      
      // Try getLottie() to access underlying animation
      const lottie = player.getLottie?.();
      if (lottie && lottie.totalFrames > 0) {
        const currentFrame = lottie.currentFrame || 0;
        const totalFrames = lottie.totalFrames;
        return Math.min((currentFrame / totalFrames) * 100, 100);
      }
      
      return 0;
    };

    // Start polling immediately - query player each tick
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
    
    progressIntervalRef.current = setInterval(() => {
      const player = container.querySelector(`lottie-player[data-index="${currentIndex}"]`) as any;
      if (player) {
        const currentProgress = getProgress(player);
        progressRef.current = currentProgress;
        setProgress(currentProgress);
      }
    }, 50);

    // Set up event listeners after a short delay for the player to be ready
    const setupTimeoutId = setTimeout(() => {
      lottiePlayer = container.querySelector(`lottie-player[data-index="${currentIndex}"]`) as any;
      if (!lottiePlayer) return;

      handlePlay = () => {
        setIsPlaying(true);
        setIsPaused(false);
      };

      handlePause = () => {
        setIsPlaying(false);
        setIsPaused(true);
        // Update progress immediately on pause
        const currentProgress = getProgress(lottiePlayer);
        progressRef.current = currentProgress;
        setProgress(currentProgress);
      };

      handleComplete = () => {
        setIsPlaying(false);
        progressRef.current = 100;
        setProgress(100);
        // Clear interval on complete
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
          progressIntervalRef.current = null;
        }
        // Auto-advance to next media item if pagination is enabled
        if (showPagination) {
          setTimeout(() => {
            progressRef.current = 0;
            setProgress(0);
            advanceToNext();
          }, 100);
        }
      };

      lottiePlayer.addEventListener('play', handlePlay);
      lottiePlayer.addEventListener('pause', handlePause);
      lottiePlayer.addEventListener('complete', handleComplete);
    }, 100);

    return () => {
      clearTimeout(setupTimeoutId);
      if (lottiePlayer) {
        if (handlePlay) lottiePlayer.removeEventListener('play', handlePlay);
        if (handlePause) lottiePlayer.removeEventListener('pause', handlePause);
        if (handleComplete) lottiePlayer.removeEventListener('complete', handleComplete);
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
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
                    data-index={index}
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
        
        {/* Play/Pause Control - Show for playable media, or static images only when there's pagination */}
        {(hasPlayableMedia || (currentIsStatic && showPagination)) && (
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

      {/* Story-Style Pagination Pills - Centered below container */}
      {showPagination && (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20 items-center px-3 py-2 rounded-full backdrop-blur-md bg-black/30 dark:bg-white/10">
          {mediaArray.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                onClick={() => {
                  // Stop current media first
                  stopStaticMediaTimer();
                  if (progressIntervalRef.current) {
                    clearInterval(progressIntervalRef.current);
                    progressIntervalRef.current = null;
                  }
                  
                  setCurrentIndex(index);
                  progressRef.current = 0;
                  setProgress(0);
                  setIsPaused(false);
                  setIsPlaying(false);
                  
                  // If component is in view, start playing the new media after state updates
                  if (isInViewRef.current) {
                    setTimeout(() => {
                      const newIsVideo = isVideoArray[index] || false;
                      const newIsLottie = isLottieArray[index] || false;
                      const newIsStatic = !newIsVideo && !newIsLottie;
                      
                      if (newIsStatic) {
                        // Start static media timer directly
                        startStaticMediaTimer(0);
                        setIsPlaying(true);
                      } else if (newIsVideo) {
                        // Play video directly
                        if (containerRef.current) {
                          const video = containerRef.current.querySelector('video') as HTMLVideoElement;
                          if (video) {
                            video.currentTime = 0;
                            video.play().catch(console.error);
                            setIsPlaying(true);
                          }
                        }
                      } else if (newIsLottie) {
                        // Play Lottie directly
                        if (containerRef.current) {
                          const lottiePlayer = containerRef.current.querySelector(`lottie-player[data-index="${index}"]`) as any;
                          if (lottiePlayer) {
                            lottiePlayer.stop();
                            lottiePlayer.seek(0);
                            lottiePlayer.play();
                            setIsPlaying(true);
                          }
                        }
                      }
                    }, 150);
                  }
                }}
                className="p-1 cursor-pointer flex items-center justify-center"
                aria-label={`Go to media ${index + 1}`}
                aria-current={isActive ? 'true' : 'false'}
              >
                <div
                  className={`relative h-2 rounded-full transition-all duration-300 overflow-hidden ${
                    isActive ? 'w-8' : 'w-2'
                  } bg-white/30 dark:bg-white/20`}
                >
                  {/* Progress fill for active pill */}
                  {isActive && (
                    <div
                      className="absolute top-0 left-0 h-full bg-white/90 dark:bg-white/90 rounded-full transition-all duration-50"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

