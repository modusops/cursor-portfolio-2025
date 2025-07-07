import React from 'react';
import { SingleFullWidth, TwoImagesGrid, ThreeImagesGrid, HeroImage } from '@/app/components/layouts/ImageLayouts';

export const creatorProject = {
  title: "Creator",
  description: "Helping creators understand their business",
  coverImage: "/creator-hero.jpg",
  slug: "creator",
  metadata: {
    role: "Lead Designer",
    timeline: "Q1 2024 - Q4 2024",
    team: "Design, Engineering, Product, Marketing, Creator Success, Insights and Analytics, Design Systems, Activation"
  },
  layout: "standard",
  content: (
    <>
      <section>
        {/* <h2>Helping creators understand their business</h2> */}
        <p className="text-sm font-light" style={{ letterSpacing: '-0.03em' }}>
          The Creator app home page is the most heavily trafficked page by an order of magnitude. It is the first page a creator sees when they log in and it is the page they return to most often. It is also the page that is most likely to be shared with other creators. Through interviews with creators and stakeholders, the company knew that the page needed a redesign to help support new business goals while also improving the user experience.
        </p>
      </section>

      <SingleFullWidth 
          src="/one-video-ltk-creator-home.mp4"
          alt="creator home"
          description="The home page of the creator app features a dashboard and modules showing key performance merics for a creator's business. The information can be filtered by the date selectors on the top. In Q1 2024, the company made a strategic bet on improving the creator app experience, beginning with a revamp of the home tab. I was tapped to lead this initiative from the design side 3 months after joining the company.
          The page would be fully rewritten in SwiftUI, where as previously, it was a mix of UIKIT and webviews."
          isVideo={true}
      />

      <SingleFullWidth
        src="/one-image-creator-workshop.jpg"
        alt="creator workshop"
        description="I led workshops at the beginning of Q1 with stakeholders across 5 teams to drive alignment with an ambitious goal to kick off design at the end of Q1 2024 and begin delivering incremental value by start of Q2 2024.
        To build alignment and sustain momentum, one hour workshop sessions were held at least twice a week to gain business context and learn from teams who understood their segment of users the most. 
        I also invited in staff FE and BE engineers and together took a peek under the hood to understand what current issues can be fixed with new SwiftUI stack or where unforseen issues may lie."
        isVideo={false}
      />

      <section>
        <h2 className="font-extrabold" style={{ fontSize: '14px' }}>Design systems</h2>
        <p className="text-sm font-light" style={{ letterSpacing: '-0.03em' }}>
          As one of the first designers to work with the newly formed design system team and implement the new components; my responsibility was to not only define the new components, but also included helping define the workflow between product design and design system team.
          As a result of the redesign, the home tab became the first page to be fully written in SwiftUI utilizing the new library. I helped lay the foundations for how design and design systems team might collaborate in the future.
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
        description="I worked with the design systems team to set up many new processes for creating new components in Figma and how ICs should document their components."
        isVideo={false}
      />

      <SingleFullWidth 
          src="/one-image-creator-loading-state.jpg"
          alt="creator loading"
          description="The loading state component is used to indicate that the app is loading data. I wrote the styleguide for best practices implementing loading state by working closely with engineers. The styleguide eventually became a template for the rest of the design team."
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
          description="I worked with multiple product owners to define the individual modules, how they would fit into the new architecture of the home page, and strategized with them the design that would best serve customers and help the business achieve its goals."
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
          description="After the redesign was launched, a survey was sent to creators to guage their satisfaction with the new design. The results were overwhelmingly positive, with 87% of creators finding the home page extremly or very useful, which represented a +64% difference. We also observed a +27.8% increase in Creators who shared their shop and a +157% lift in creators who created a post. Lastly, we saw a +3.8% increase in the percentage of daily active users who visited the new home page."
          isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-creator-results.jpg"
        alt="results of the redesign"
        description="The redesign was a success made possible by relentless focus on solving creator problems, attention to detail, and focusing on delivering incremental value."
        isVideo={false}
      />

      
    </>
  )
}; 