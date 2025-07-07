import React from 'react';
import { SingleFullWidth, TwoImagesGrid, ThreeImagesGrid, HeroImage } from '@/app/components/layouts/ImageLayouts';

export const creatorProject = {
  title: "Creator",
  description: "The creator app home tab is the most heavily trafficked page on LTK's creator iOS app. Through interviews with creators and research of the underlying data, LTK found opportunities in a redesign of the page. The goal of the redesign included a re-architecture of the page using SwiftUI, a renewed focus on the core JTBD's, and support mission-critical objectives for the business, and most importantly improving the user experience.",
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
          description="The home page of the creator app features a dashboard of modules showing key performance metrics and insights for all parts of a creator's business ranging from visits, earnings, following count, commissions, click rates, and more. In Q1 2024, LTK made a strategic bet to improve the creator app experience, beginning with a revamp of the home tab. I was tapped to lead this initiative 3 months after joining the company.
          The page was fully rewritten in SwiftUI (previously it was a mix of UIKit and web views)."
          isVideo={true}
      />

      <SingleFullWidth
        src="/one-image-creator-workshop.jpg"
        alt="creator workshop"
        description="I led workshops at the beginning of Q1 with stakeholders across 5 teams to drive alignment with the ambitious goal to kick off design at the end of Q1 2024 and begin delivering incremental value by start of Q2 2024.
        To build alignment and sustain momentum, one hour workshop sessions were held at least twice a week to gain business context and learn from teams who understood the problem space the most. 
        I also invited in staff frontend and backend engineers and together took a peek under the hood to understand what current issues could be fixed with new SwiftUI stack or where unforseen issues may lie. The project was staged in 4 milestones to ensure we were delivering value to creators as quickly as possible."
        isVideo={false}
      />

      <section>
        <h2 className="font-extrabold" style={{ fontSize: '14px' }}>Design systems</h2>
        <p className="text-sm font-light" style={{ letterSpacing: '-0.03em' }}>
          As one of the first designers to work with the newly formed design system team and implement new components; my responsibility was to not only define the new components, but to also help define the workflows between product design and design system team.
          The home tab became the first page to be fully written in SwiftUI utilizing the new library. I helped lay the foundations for how designers might interface with the system team in the future.
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
        description="I worked with the design system team to set up many new processes for creating new components in Figma and how ICs should document their components."
        isVideo={false}
      />

      <SingleFullWidth 
          src="/one-image-creator-loading-state.jpg"
          alt="creator loading"
          description="I led the design of the loading state component and wrote the usage guideline with the support of iOS engineers. The style guide became the template for all component guidelines."
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
          description="I worked with multiple product owners to define the individual modules; how they fit into the new architecture of the home page and strategized with them on the design that would best serve customers while helping the business achieve its goals."
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
            description: "User receives a light haptic feedback when the module opens. Haptic feedback is again given as they drag their finger across the chart.",
            isVideo: true
          }
        ]}
      />

      <SingleFullWidth 
          src="/one-image-creator-before-after.jpg"
          alt="creator before and after"
          description="After the redesign was launched, a survey was sent to creators to guage their satisfaction with the new design. The results were overwhelmingly positive with 87% of creators finding the home page extremly or very useful representing a +64% difference. We also observed a +27.8% increase in creators who shared their shop and a +157% lift in creators who created a post. Lastly, we saw a +3.8% increase in the percentage of daily active users who visited the new home page."
          isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-creator-results.jpg"
        alt="results of the redesign"
        description="The success of the redesign was made possible by a relentless focus on solving creator problems, attention to detail, and focusing on delivering value."
        isVideo={false}
      />

      
    </>
  )
}; 