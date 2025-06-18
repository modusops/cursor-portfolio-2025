import React from 'react';
import { SingleFullWidth, TwoImagesGrid, ThreeImagesGrid, HeroImage } from '@/app/components/layouts/ImageLayouts';

export const sonoProject = {
  title: "Sono",
  description: "Modern training platform for startups",
  coverImage: "/placeholder.jpg",
  slug: "sono",
  metadata: {
    role: "Lead Designer",
    timeline: "2023",
    team: "Design, Engineering, Content"
  },
  content: (
    <>
      <section>
        <h2>Overview</h2>
        <p>
          Sono is a modern training platform that helps startups onboard and upskill their teams efficiently.
          By combining interactive learning modules with real-time feedback, Sono makes professional development
          engaging and measurable.
        </p>
      </section>

      <TwoImagesGrid 
        images={[
          {
            src: "/placeholder.jpg",
            alt: "Sono main dashboard interface"
          },
          {
            src: "/placeholder.jpg",
            alt: "Learning analytics dashboard"
          }
        ]}
      />

      <section>
        <h2>The Problem</h2>
        <p>
          Startups often struggle with consistent team training and development. Traditional learning
          management systems are too rigid and enterprise-focused, while ad-hoc solutions lack
          structure and accountability.
        </p>
      </section>

      <SingleFullWidth 
        src="/sono-problem.png"
        alt="Visualization of training challenges in startups"
      />

      <section>
        <h2>Solution</h2>
        <p>
          We created a flexible, modular platform that adapts to each company's unique needs:
        </p>
        <ul>
          <li>Customizable learning paths</li>
          <li>Interactive content creation tools</li>
          <li>Progress tracking and analytics</li>
          <li>Peer learning and mentorship features</li>
        </ul>
      </section>

      <ThreeImagesGrid 
        images={[
          {
            src: "/sono-learning-paths.png",
            alt: "Customizable learning paths interface"
          },
          {
            src: "/sono-content-creation.png",
            alt: "Content creation tools"
          },
          {
            src: "/sono-mentorship.png",
            alt: "Peer learning and mentorship features"
          }
        ]}
      />

      <section>
        <h2>Design Process</h2>
        <p>
          The design process focused on creating an intuitive experience that could scale
          with growing teams. We conducted extensive user research with startup founders,
          HR leaders, and employees to understand their unique challenges and needs.
        </p>
      </section>

      <TwoImagesGrid 
        images={[
          {
            src: "/sono-research.png",
            alt: "User research and insights"
          },
          {
            src: "/sono-iterations.png",
            alt: "Design iterations and prototypes"
          }
        ]}
      />

      <section>
        <h2>Key Features</h2>
        <p>
          The platform includes several innovative features designed specifically for startup teams:
        </p>
      </section>

      <SingleFullWidth 
        src="/sono-features.png"
        alt="Overview of Sono's key features"
      />

      <section>
        <h2>Impact</h2>
        <p>
          Since launch, Sono has helped over 100 startups improve their team development:
        </p>
        <ul>
          <li>70% reduction in onboarding time</li>
          <li>85% employee engagement rate</li>
          <li>3x increase in skill development tracking</li>
          <li>92% team satisfaction rate</li>
        </ul>
      </section>

      <HeroImage 
        src="/sono-results.png"
        alt="Visual representation of Sono's impact metrics"
      />

      <section>
        <h2>Future Development</h2>
        <p>
          We continue to evolve the platform based on user feedback and changing startup needs.
          Upcoming features include AI-powered learning recommendations, advanced analytics,
          and expanded integration capabilities.
        </p>
      </section>
    </>
  )
}; 