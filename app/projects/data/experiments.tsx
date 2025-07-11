import React from 'react';
import { SingleFullWidth, TwoImagesGrid, ThreeImagesGrid, HeroImage } from '@/app/components/layouts/ImageLayouts';

export const experimentsProject = {
  title: "Experiments",
  description: "In my spare time, I enjoy experimenting with new technologies to further my understanding of parts of my craft which I want to hone. I also use these experiments when asked by my company leadership team for proof-of-concepts or when junior to mid-level designers are seeking guidance or inspiration.",
  slug: "experiments",
  layout: "standard",
  content: (
    <>
 
      <TwoImagesGrid
        images={[
          {
            src: "/two-videos-experiment-music.mp4",
            alt: "AI music",
            description: "Created with Bolt.",
            isVideo: true

          },
          {
            src: "/two-videos-experiment-gyroscopic.mp4",
            alt: "Gyroscopic metal card",
            description: "Created with Lovable, Claude, Xcode.",
            isVideo: true
          }
        ]}
      />

      <TwoImagesGrid
        images={[
          {
            src: "/two-videos-experiment-parallax1.mp4",
            alt: "Parallax effect",
            description: "Created with Claude, Xcode",
            isVideo: true

          },
          {
            src: "/two-videos-experiment-parallax2.mp4",
            alt: "Parallax effect",
            description: "Created with Claude, Xcode",
            isVideo: true
          }
        ]}
      />

      <SingleFullWidth
        src="/one-video-experiment-silent.mp4"
        alt="Silent"
        description="Created with Claude, Cursor using shader effect."
        isVideo={true}
      />

    </>
  )
}; 