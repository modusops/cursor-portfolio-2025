import React from 'react';
import { SingleFullWidth, TwoImagesGrid, ThreeImagesGrid, HeroImage } from '@/app/components/layouts/ImageLayouts';

export const creatorProject = {
  title: "Creator",
  description: "Helping creators understand their business",
  coverImage: "/creator-hero.jpg",
  slug: "creator",
  metadata: {
    role: "Lead Designer",
    timeline: "2023",
    team: "Design, Engineering, AI"
  },
  layout: "standard",
  content: (
    <>
      <section>
        <h2>Overview</h2>
        <p>
          Creator is an AI-powered platform that helps content creators optimize their workflow,
          improve their content strategy, and grow their audience through personalized coaching and analytics.
        </p>
      </section>

      <SingleFullWidth 
          src="/one-video-ltk-creator-home.mp4"
          alt="creator home"
          description="The home page of the creator app"
          isVideo={true}
      />

      <SingleFullWidth 
          src="/one-image-creator-layout.jpg"
          alt="creator layout"
          description="The home page of the creator app"
          isVideo={false}
      />

      <SingleFullWidth 
          src="/one-image-creator-loading-state.jpg"
          alt="creator loading"
          description="The home page of the creator app"
          isVideo={false}
      />

      <SingleFullWidth 
          src="/one-image-creator-loading-state-detail.jpg"
          alt="creator loading detail"
          description="The home page of the creator app"
          isVideo={false}
      />

      <SingleFullWidth 
          src="/one-image-creator-performance-goal.jpg"
          alt="creator performance goal"
          description="The home page of the creator app"
          isVideo={false}
      />

      <SingleFullWidth 
          src="/one-image-creator-before-after.jpg"
          alt="creator before and after"
          description="The home page of the creator app"
          isVideo={false}
      />

<TwoImagesGrid 
        images={[
          {
            src: "/two-videos-ltk-emoji-confetti2.mp4",
            alt: "emoji confetti",
            isVideo: true
          },
          {
            src: "/two-videos-ltk-pull-to-refresh-zoom.mp4",
            alt: "pull to refresh zoom",
            isVideo: true
          }
        ]}
      />
      
    </>
  )
}; 