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
        {/* <h2>Helping creators understand their business</h2> */}
        <p>
          The Creator app home page is the most heavily trafficked page by an order of magnitude. It is the first page a creator sees when they log in and it is the page they return to most often. It is also the page that is most likely to be shared with other creators. Through interviews with creators and stakeholders, the company knew that the page needed a redesign to help support new business goals while also improving the user experience.
        </p>
      </section>

      <SingleFullWidth 
          src="/one-video-ltk-creator-home.mp4"
          alt="creator home"
          description="The home page of the creator app features a dashboard and modules showing key performance merics for a creator's business. The information can be filtered by the date selectors on the top."
          isVideo={true}
      />

      <section>
        <h2>Design systems</h2>
        <p>
          Through the early days of the project, I explored many new components and design systems that ultimately contributed to the company design system. Components such as the card and loading state components were built from scratch in Figma and SwiftUI.
        </p>
      </section>

      <SingleFullWidth 
          src="/one-image-creator-layout.jpg"
          alt="creator layout"
          // description="The home page of the creator app"
          isVideo={false}
      />

      <SingleFullWidth 
          src="/one-image-creator-loading-state.jpg"
          alt="creator loading"
          description="The loading state component is used to indicate that the app is loading data. I wrote the styleguide for best practices implementing loading state by working closely with engineers. The styleguide eventually became a template for the rest of the design team."
          isVideo={false}
      />

      <SingleFullWidth 
          src="/one-image-creator-loading-state-detail.jpg"
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
            src: "/two-videos-creator-community-zoom.mp4",
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


      
    </>
  )
}; 