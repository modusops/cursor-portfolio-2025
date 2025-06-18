import React from 'react';
import { SingleFullWidth, TwoImagesGrid, ThreeImagesGrid, HeroImage } from '@/app/components/layouts/ImageLayouts';

export const shopifyProject = {
  title: "Shopify",
  description: "Making commerce better for everyone",
  coverImage: "/shopify-hero.png",
  slug: "shopify",
  metadata: {
    role: "Senior Product Designer",
    timeline: "2023-2024",
    team: "Design Systems, Platform"
  },
  content: (
    <>
      <HeroImage 
        src="/shopify-hero.png"
        alt="Shopify platform redesign overview"
      />

      <ThreeImagesGrid 
        images={[
          {
            src: "/shopify-mobile.png",
            alt: "Mobile commerce experience"
          },
          {
            src: "/shopify-tablet.png",
            alt: "Tablet interface"
          },
          {
            src: "/shopify-desktop.png",
            alt: "Desktop dashboard"
          }
        ]}
      />

      <section>
        <h2>Project Overview</h2>
        <p>
          Led the redesign of Shopify's core commerce platform, focusing on improving
          merchant experience across devices while maintaining the platform's powerful
          capabilities. The goal was to simplify complex workflows without sacrificing
          functionality.
        </p>
      </section>

      <SingleFullWidth 
        src="/shopify-workflow.png"
        alt="Merchant workflow optimization"
      />

      <section>
        <h2>Design System Evolution</h2>
        <p>
          A key part of this project was evolving Shopify's design system to support
          new use cases while maintaining consistency across the platform. We introduced:
        </p>
        <ul>
          <li>Adaptive components for different device sizes</li>
          <li>New interaction patterns for complex workflows</li>
          <li>Enhanced accessibility features</li>
          <li>Performance-optimized UI components</li>
        </ul>
      </section>

      <TwoImagesGrid 
        images={[
          {
            src: "/shopify-components.png",
            alt: "Design system components"
          },
          {
            src: "/shopify-patterns.png",
            alt: "Interaction patterns"
          }
        ]}
      />

      <section>
        <h2>Key Improvements</h2>
        <p>
          The redesign focused on several critical areas of the merchant experience:
        </p>
      </section>

      <ThreeImagesGrid 
        images={[
          {
            src: "/shopify-inventory.png",
            alt: "Inventory management"
          },
          {
            src: "/shopify-analytics.png",
            alt: "Business analytics"
          },
          {
            src: "/shopify-orders.png",
            alt: "Order processing"
          }
        ]}
      />

      <section>
        <h2>Mobile-First Approach</h2>
        <p>
          With an increasing number of merchants managing their businesses on mobile,
          we prioritized a responsive, mobile-first design that works seamlessly across
          all devices.
        </p>
      </section>

      <SingleFullWidth 
        src="/shopify-responsive.png"
        alt="Responsive design showcase"
      />

      <section>
        <h2>Research & Testing</h2>
        <p>
          Our design process involved extensive research and testing with merchants:
        </p>
      </section>

      <TwoImagesGrid 
        images={[
          {
            src: "/shopify-research.png",
            alt: "User research sessions"
          },
          {
            src: "/shopify-testing.png",
            alt: "Usability testing"
          }
        ]}
      />

      <section>
        <h2>Results</h2>
        <p>
          The redesign led to significant improvements in merchant satisfaction and efficiency:
        </p>
        <ul>
          <li>32% reduction in time spent on common tasks</li>
          <li>47% increase in mobile platform usage</li>
          <li>89% positive feedback on new interface</li>
          <li>28% decrease in support tickets related to UI</li>
        </ul>
      </section>

      <HeroImage 
        src="/shopify-impact.png"
        alt="Impact metrics visualization"
      />

      <section>
        <h2>Looking Forward</h2>
        <p>
          This redesign sets the foundation for Shopify's next generation of commerce tools.
          The modular design system and improved architecture allow for faster iteration
          and easier implementation of new features.
        </p>
      </section>
    </>
  )
}; 