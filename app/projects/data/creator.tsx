import React from 'react';
import { SingleFullWidth, TwoImagesGrid, ThreeImagesGrid, HeroImage } from '@/app/components/layouts/ImageLayouts';

export const creatorProject = {
  title: "Creator",
  description: "I led a strategic redesign of the creator app home tab, LTK's highest-traffic creator iOS experience, based on comprehensive creator interview insights and data research findings. I orchestrated a complete experience re-architecture using SwiftUI while realigning interface design with core Jobs-To-Be-Done and mission-critical business objectives, resulting in significant user experience improvements.",
  coverImage: "/creator-hero.jpg",
  slug: "creator",
  metadata: {
    role: "Lead Product Designer",
    timeline: "Q1 2024 - Q4 2024",
    team: "Design, Engineering, Product, Marketing, Creator Success, Insights and Analytics, Design System, Activation"
  },
  layout: "standard",
  content: (
    <>
    
      <SingleFullWidth 
          src="/one-video-ltk-creator-home.mp4"
          alt="creator home"
          description="I led the strategic redesign of LTK's creator dashboard—a comprehensive performance hub displaying critical business metrics including visits, earnings, commissions, click rates, and following analytics. Following LTK's Q1 2024 strategic commitment to elevate the creator app experience, I was chosen to drive this foundational initiative, collaborating with engineering to completely rewrite the platform from mixed UIKit/web view architecture to native SwiftUI implementation."
          isVideo={true}
      />

      <SingleFullWidth
        src="/one-image-creator-workshop.jpg"
        alt="creator workshop"
        description="I designed and facilitated stakeholder alignment workshops spanning 5 teams to support aggressive Q1-Q2 delivery timeline, ensuring shared understanding of project goals and constraints. I conducted bi-weekly collaborative sessions to synthesize business context and domain expertise while building sustained project momentum. Partnering with senior engineering staff to perform comprehensive technical assessment, I evaluated SwiftUI migration opportunities and potential implementation challenges. By establishing 4-milestone delivery framework, we prioritized rapid creator value delivery and iterative improvement cycles."
        isVideo={false}
      />

      <section>
        <h2 className="font-extrabold" style={{ fontSize: '14px' }}>Design systems</h2>
        <p className="text-sm font-light" style={{ letterSpacing: '-0.03em' }}>
        I served as one of the first product designers to partner with LTK's newly established design system team, taking dual responsibility for defining new component specifications and establishing collaborative workflows between product design and system teams. I led the home tab as the inaugural SwiftUI implementation utilizing the new component library, creating foundational processes and interface patterns that would guide future designer-system team collaboration across the organization.
        </p>
      </section>

      <SingleFullWidth 
          src="/one-image-creator-layout.jpg"
          alt="creator layout"
          // description="The home page of the creator app"
          isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-creator-documentation.jpg"
        alt="creator documentation"
        description="I partnered with the design system team to develop structured processes governing component creation in Figma and establishing documentation standards for individual contributors. I built foundational workflows that ensured design system quality and consistency while enabling efficient cross-team collaboration."
        isVideo={false}
      />

      <SingleFullWidth 
          src="/one-image-creator-loading-state.jpg"
          alt="creator loading"
          description="I co-led the comprehensive design and documentation of the loading state component, collaborating closely with iOS engineers to create detailed usage guidelines. This work became the organizational template for all subsequent component documentation, establishing design system standards that scaled across the entire component library and team workflows."
          isVideo={false}
      />

      <SingleFullWidth 
          src="/one-image-creator-loading-state-detail2.jpg"
          alt="creator loading detail"
          // description="The loading state component is used to indicate that the app is loading data. I wrote the styleguide for best practices implementing loading state by working closely with engineers. The styleguide eventually became a template for the rest of the design team."
          isVideo={false}
      />

      <SingleFullWidth 
          src="/one-image-creator-performance-goal.jpg"
          alt="creator performance goal"
          description="I collaborated with multiple product owners to define individual module specifications, architectural integration within the new home page framework, and strategic design approaches that optimized customer experience while advancing key business goals. I led alignment sessions that balanced diverse stakeholder priorities through user-centered design strategy."
          isVideo={false}
      />

    <TwoImagesGrid 
        images={[
          {
            src: "/two-videos-creator-community.mp4",
            alt: "community module",
            description: "The community module repesents the percentage change in the number of followers a creator has gained or lost in any given time period.",
            isVideo: true
          },
          {
            src: "/two-videos-creator-community-zoom2.mp4",
            alt: "community module zoom",
            description: "I implemented a haptic feedback that provides users with subtle tactile confirmation when modules open, followed by continuous feedback during chart exploration gestures. This interaction design creates intuitive physical connection between user actions and interface responses, improving data engagement and accessibility.",
            isVideo: true
          }
        ]}
      />

      <SingleFullWidth 
          src="/one-image-creator-before-after.jpg"
          alt="creator before and after"
          description="Post-launch creator satisfaction survey revealed overwhelming positive response with 87% of creators rating the new home page extremely or very useful—representing a substantial +64% improvement over the previous design. This user satisfaction translated into significant behavioral changes including +27.8% increase in creators sharing their shops, +157% lift in post creation activity, and +3.8% growth in daily active users engaging with the redesigned home page experience."
          isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-creator-results.jpg"
        alt="results of the redesign"
        description="The project's success originated from maintaining a dedication to creator problem-solving, meticulous commitment to design quality and detail execution, and strategic focus on value delivery that meaningfully improved creator workflows. This approach to user advocacy and quality-driven design created the conditions for product satisfaction and engagement improvements."
        isVideo={false}
      />

      
    </>
  )
}; 