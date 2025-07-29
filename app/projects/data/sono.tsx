import React from 'react';
import { SingleFullWidth, TwoImagesGrid, ThreeImagesGrid, HeroImage } from '@/app/components/layouts/ImageLayouts';

export const sonoProject = {
  title: "Sono",
  description: "As founding designer at Sono, I partnered directly with the CEO and co-founders to transform their knowledge management vision into a comprehensive product experience. Working in a fast-paced seed-stage environment, I designed the complete interface while rapidly iterating based on user feedback to guide the product toward product-market fit. The designs prioritize speed and functionality over polish, reflecting the urgency required in early-stage product development.",
  coverImage: "/sono-hero.jpg",
  slug: "sono",
  metadata: {
    role: "Founding Product Designer",
    timeline: "2022-2023",
    team: "CEO-Cofounder, CTO-Cofounder, Founding Software Engineer"
  },
  layout: "standard",
  content: (
    <>

      <SingleFullWidth
        src="/one-image-sono-prompt.jpg"
        alt="Sono Prompt Interface"
        description="The Sono prompt interface serves as the central hub for document creation, empowering users to generate comprehensive knowledge management materials through an intuitive, AI-driven experience. This core feature transforms how teams capture, organize, and share institutional knowledge by providing a streamlined interface that adapts to diverse content creation needs."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-prompt-design.jpg"
        alt="Prompt Design System"
        description="Advanced prompt design system that enables users to create sophisticated knowledge management workflows."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-sono-data.jpg"
        alt="data"
        description="Sono integrates seamlessly with diverse internal data sources, enabling users to create targeted content that serves both employee needs and HR deployment strategies across the organization."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-sono-builder.jpg"
        alt="node based workflow builder"
        description="I developed a node-based workflow builder with conditional logic capabilities, featuring an integrated prompt interface for dynamic content creation. The visual editor enables users to construct automated deployment processes while maintaining flexibility through AI-assisted content generation."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-sono-collaboration.jpg"
        alt="Collaboration"
        description="Multiplayer mode."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-sono-chat.jpg"
        alt="Sono Chat"
        description="I designed an integrated conversational interface that enables users to collaboratively build and refine workflows through natural language interaction with Sono AI. The chat UI seamlessly integrates with the visual workflow builder, allowing users to describe their automation needs and receive intelligent suggestions for workflow structure and content generation."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-sono-onboarding.jpg"
        alt="Modify editor"
        description="Users can modify content within the editor."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-sono-template.jpg"
        alt="Workflows"
        // description="Settings and configuration made simple and intuitive."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-sono-preview.jpg"
        alt="Settings"
        // description="Settings and configuration made simple and intuitive."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-sono-workflow.jpg"
        alt="Settings"
        // description="Settings and configuration made simple and intuitive."
        isVideo={false}
      />



    </>
  )
}; 