import React from 'react';
import { SingleFullWidth, TwoImagesGrid, ThreeImagesGrid, HeroImage } from '@/app/components/layouts/ImageLayouts';

export const creatorProject = {
  title: "Creator",
  description: "Personalized creator coach powered by AI",
  coverImage: "/creator-hero.png",
  slug: "creator",
  metadata: {
    role: "Product Design Lead",
    timeline: "2024",
    team: "Solo Project"
  },
  layout: "standard", // Using standard layout instead of split
  content: (
    <>
      <HeroImage 
        src="/creator-hero.png" 
        alt="Creator AI coaching platform interface"
      />

      <section>
        <h2>Project Overview</h2>
        <p>
          Creator is an AI-powered coaching platform that helps content creators optimize their
          content strategy, improve engagement, and grow their audience. By analyzing trends
          and performance data, Creator provides personalized recommendations and actionable insights.
        </p>
      </section>

      <ThreeImagesGrid 
        images={[
          {
            src: "/creator-analytics.png",
            alt: "Analytics dashboard showing content performance"
          },
          {
            src: "/creator-insights.png",
            alt: "AI-generated insights and recommendations"
          },
          {
            src: "/creator-planning.png",
            alt: "Content planning calendar"
          }
        ]}
      />

      <section>
        <h2>Design Philosophy</h2>
        <p>
          The design focuses on making complex data and AI insights accessible and actionable.
          We used a clean, minimalist interface with clear hierarchy and intuitive navigation
          to help creators focus on what matters most.
        </p>
      </section>

      <SingleFullWidth 
        src="/creator-workflow.png"
        alt="Creator workflow and user journey"
      />

      <section>
        <h2>Key Features</h2>
        <ul>
          <li>Real-time content performance analytics</li>
          <li>AI-powered content optimization suggestions</li>
          <li>Audience engagement tracking</li>
          <li>Automated content scheduling</li>
          <li>Competitor analysis and benchmarking</li>
        </ul>
      </section>

      <TwoImagesGrid 
        images={[
          {
            src: "/creator-mobile.png",
            alt: "Creator mobile app interface"
          },
          {
            src: "/creator-desktop.png",
            alt: "Creator desktop dashboard"
          }
        ]}
      />

      <section>
        <h2>Technical Implementation</h2>
        <p>
          Built using Next.js and TypeScript, Creator leverages advanced machine learning
          models to analyze content performance and generate personalized recommendations.
          The platform integrates with major social media APIs to gather real-time data
          and provide actionable insights.
        </p>
      </section>

      <SingleFullWidth 
        src="/creator-architecture.png"
        alt="Creator technical architecture diagram"
      />

      <section>
        <h2>Results</h2>
        <p>
          Early beta testing with a group of 100 creators showed promising results:
        </p>
        <ul>
          <li>45% increase in content engagement rates</li>
          <li>3x faster content planning and scheduling</li>
          <li>85% of users reported more consistent posting schedules</li>
          <li>60% improvement in audience growth rate</li>
        </ul>
      </section>

      <TwoImagesGrid 
        images={[
          {
            src: "/creator-results.png",
            alt: "Performance metrics and results"
          },
          {
            src: "/creator-testimonials.png",
            alt: "User testimonials and feedback"
          }
        ]}
      />
    </>
  )
}; 