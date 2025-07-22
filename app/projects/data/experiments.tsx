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
            description: "AI music prompt interface created with Bolt.",
            isVideo: true

          },
          {
            src: "/two-videos-experiment-gyroscopic.mp4",
            alt: "Gyroscopic metal card",
            description: "Card with light leak and gyroscopic effect. [View code](https://github.com/DaveChan-ux/membership-card-gyroscope-effect)",
            isVideo: true
          }
        ]}
      />

      <TwoImagesGrid
        images={[
          {
            src: "/two-videos-experiment-parallax1.mp4",
            alt: "Parallax effect",
            description: "An experiment with parallax meant to create the illusion of elements that seem to be hovering on top of the screen.",
            isVideo: true

          },
          {
            src: "/two-videos-experiment-parallax2.mp4",
            alt: "Parallax effect",
            description: "Using parallax to create the illusion that there is hidden content behind the user's viewport. [View code](https://github.com/DaveChan-ux/ShopTemplateParallax4)",
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

      <SingleFullWidth
        src="/one-video-experiment-blur.mp4"
        alt="Blur"
        description="For pillarboxed or letterboxed images, I created an algorithm that detects the luminance of any image, applying the material api and the correct thickness optimized for visual symmetry. For example on extremely dark or light images, applying the incorrect material thickness might result in too much contrast between the image and the empty spaces on each side. [View code](https://github.com/DaveChan-ux/post-background-blur-effect-06162025)"
        isVideo={true}
      />

    </>
  )
}; 