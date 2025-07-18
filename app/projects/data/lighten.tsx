import React from 'react';
import { SingleFullWidth, TwoImagesGrid, ThreeImagesGrid, HeroImage } from '@/app/components/layouts/ImageLayouts';

export const lightenProject = {
  title: "Lighten AI",
  description: "I was a contract founding designer for the Lighten AI founding team, helping them bring their product idea to life. I worked closely ith the CEO and co-founders, designing all aspects of the product and partnered with a visual designer to bring the idea to life. Lighten AI successfully raised their seed funding in early late 2024.",
  coverImage: "/lighten-hero.jpg",
  slug: "lighten",
  metadata: {
    role: "Founding Product Designe (Contract)",
    timeline: "Q2 2024",
    team: "Product Design, Engineering, Product Management, Marketing"
  },
  layout: "standard",
  content: (
    <>
 
      <SingleFullWidth
        src="/one-image-lighten-editor.jpg"
        alt="lighten Editor"
        description="The Lighten AI editor is the core of the product experience, used by human-in-the-loop to review and ultimately train Lighten's proprietary LLM."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-lighten-labeling.jpg"
        alt="labeling"
        description="Lighten AI's users are medical professionals used to viewing large amounts of unstructured data in complex enterprise software. The vision was to create a new class of software made for medical professionals balanced with great user experience typical of consumer product experiences."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-lighten-labeling-instructions.jpg"
        alt="labeling instructions"
        description="Unstructured medical documents are tedious to review. Making content and instructions from Lighten AI easy to read was important. A careful balance of information density and usability was key to meeting the founders' vision."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-lighten-review.jpg"
        alt="reviews"
        // description="I collaborated with image processing service teams to validate API reuse strategy for Lighten's development. My discovery work included comprehensive UX analysis and PM interviews that revealed service gaps, allowing the team to make informed build-vs-enhance decisions that accelerated time-to-market while ensuring user experience quality."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-lighten-variable.jpg"
        alt="variable"
        description="Progressive disclosure and being meticulous about showing information at the right place and time made the product feel both polished and easy to use."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-lighten-review-variables.jpg"
        alt="review variables"
        // description="I collaborated with image processing service teams to validate API reuse strategy for Lighten's development. My discovery work included comprehensive UX analysis and PM interviews that revealed service gaps, allowing the team to make informed build-vs-enhance decisions that accelerated time-to-market while ensuring user experience quality."
        isVideo={false}
      />

      <section>
        <h2 className="font-extrabold" style={{ fontSize: '14px' }}>Design system</h2>
        <p className="text-sm font-light" style={{ letterSpacing: '-0.03em' }}>
        Lighten's brand exploration relied on a simple design system made of a couple reusable desktop components purpose built for high density working environments typical of the healthcare industry balanced with the simplicity of consumer product experiences.
        </p>
      </section>


      <TwoImagesGrid 
        images={[
          {
            src: "/two-images-lighten-design-colors.jpg",
            alt: "colors",
            // description: "Creators can quickly enhance their content with intelligent editing suggestions in a streamlined workflow."
          },
          {
            src: "/two-images-lighten-design-components.jpg",
            alt: "design components",
            // description: "Users can apply professional-grade enhancements with a limited set of one-tap filters for MVP."
          }
        ]}
      />

  

    </>
  )
}; 