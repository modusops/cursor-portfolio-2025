import React from 'react';
import { SingleFullWidth, TwoImagesGrid, ThreeImagesGrid, HeroImage } from '@/app/components/layouts/ImageLayouts';

export const ltkChatProject = {
  title: "LTK Chat",
  description: "Building stronger creator-led communities",
  coverImage: "/feature-thumbnail-1.png",
  slug: "ltk-chat",
  metadata: {
    role: "Lead Product Designer",
    timeline: "2023 - Present",
    team: "Product Design, Engineering, Product Management"
  },
  layout: "standard",
  content: (
    <>
      <section>
        <h2>Overview</h2>
        <p>
          LTK Chat revolutionizes how creators interact with their communities. 
          This platform enables direct, meaningful conversations between creators and their followers,
          fostering stronger relationships and more engaged communities.
        </p>
      </section>

      <HeroImage 
        src="/ltk-chat-hero.png" 
        alt="LTK Chat platform overview"
      />

      <section>
        <h2>The Challenge</h2>
        <p>
          Creators needed a more direct way to connect with their audience beyond traditional social media platforms.
          The challenge was to build a communication tool that maintained the professional boundary while enabling
          personal connections.
        </p>
      </section>

      <TwoImagesGrid 
        images={[
          {
            src: "/ltk-chat-wireframes.png",
            alt: "Early wireframes and sketches"
          },
          {
            src: "/ltk-chat-research.png",
            alt: "User research findings"
          }
        ]}
      />

      <section>
        <h2>Key Features</h2>
        <ul>
          <li>Real-time messaging with advanced moderation tools</li>
          <li>Customizable chat rooms for different topics</li>
          <li>Integration with LTK's existing creator tools</li>
          <li>Analytics dashboard for engagement metrics</li>
        </ul>
      </section>

      <ThreeImagesGrid 
        images={[
          {
            src: "/ltk-chat-feature-1.png",
            alt: "Real-time messaging interface"
          },
          {
            src: "/ltk-chat-feature-2.png",
            alt: "Moderation tools dashboard"
          },
          {
            src: "/ltk-chat-feature-3.png",
            alt: "Analytics visualization"
          }
        ]}
      />

      <section>
        <h2>Process & Approach</h2>
        <p>
          The design process involved extensive research with creators and their audiences.
          We conducted multiple rounds of user interviews, prototyping, and testing to ensure
          the platform met both creators' and followers' needs.
        </p>
      </section>

      <SingleFullWidth 
        src="/ltk-chat-process.png"
        alt="Design process and iterations"
      />

      <section>
        <h2>Impact</h2>
        <p>
          Since launch, LTK Chat has seen:
        </p>
        <ul>
          <li>50% increase in creator-follower engagement</li>
          <li>30% higher retention rates for participating creators</li>
          <li>Positive feedback from both creators and followers</li>
        </ul>
      </section>

      <TwoImagesGrid 
        images={[
          {
            src: "/ltk-chat-metrics.png",
            alt: "Engagement metrics dashboard"
          },
          {
            src: "/ltk-chat-testimonials.png",
            alt: "User testimonials and feedback"
          }
        ]}
      />
    </>
  )
}; 