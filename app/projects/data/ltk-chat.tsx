import React from 'react';
import { SingleFullWidth, TwoImagesGrid, ThreeImagesGrid, HeroImage } from '@/app/components/layouts/ImageLayouts';

export const ltkChatProject = {
  title: "LTK Chat",
  description: "I served as lead product designer on LTK Chat, a real-time messaging platform enabling creators to build stronger communities through broadcast channels and engagement tools. Collaborating with a lead product manager and engineering manager, I helped deliver this strategic initiative aimed at driving consumer daily active users while providing creators dedicated audience reach capabilities. We successfully executed an aggressive Q1-Q2 2025 timeline, leading cross-functional strategy alignment, benefits-risk analysis, roadmap sequencing, backend architecture collaboration, and executive presentations to founders/CEO.",
  coverImage: "/chat-hero.jpg",
  slug: "ltk-chat",
  metadata: {
    role: "Lead Product Designer",
    timeline: "Q2 2025 - Present",
    team: "Product Design, Engineering, Product Management, Marketing, Insights and Analytics, Design Systems, Consumer Growth, Creator Growth"
  },
  layout: "standard",
  content: (
    <>
 
      <SingleFullWidth
        src="/one-image-chat-workshop.jpg"
        alt="chat workshop"
        description="I developed comprehensive end-to-end user journey maps alongside competitive flow analysis that served as the team's primary reference for feature prioritization and strategic positioning. This artifact identified key differentiation opportunities and became a living document that guided decision-making throughout the entire development lifecycle."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-chat-comment-service.jpg"
        alt="commenting service"
        description="I collaborated with commenting service teams to validate API reuse strategy for chat's development. My discovery work included comprehensive UX analysis and PM interviews that revealed service gaps, allowing the team to make informed build-vs-enhance decisions that accelerated time-to-market while ensuring user experience quality."
        isVideo={false}
      />

      <section>
        <h2 className="font-extrabold" style={{ fontSize: '14px' }}>MVP features</h2>
        <p className="text-sm font-light" style={{ letterSpacing: '-0.03em' }}>
        I advocated for a deliberately constrained MVP that prioritized speed-to-market over feature parity. We selected 50 beta creators based on cross-platform strength and algorithmic pain points, betting that rapid iteration would outweigh initial limitations. I personally championed emoji reactions as essential creator motivation and demonstrated user psychology understanding over metrics-driven features.
        </p>
      </section>


      <TwoImagesGrid 
        images={[
          {
            src: "/two-images-ltk-creator-emoji.jpg",
            alt: "creator emoji",
            description: "Emojis allow both users to express and receive support in a 1-to-many setting."
          },
          {
            src: "/two-images-ltk-reaction.jpg",
            alt: "reactions",
            description: "Users can react to messages with a limited set of emojis for MVP."
          }
        ]}
      />

      <SingleFullWidth
        src="/one-image-chat-features.jpg"
        alt="features"
        description="Some features on LTK Chat supporting the beta launch."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-chat-surfaces.jpg"
        alt="surfaces"
        description="I architected chat as a foundational social feature that created unprecedented interaction opportunities between creators and their communities. By designing end-to-end user experiences including notification systems and collaborated across teams to integrate chat discovery touchpoints throughout the product, I drove adoption and sustained engagement."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-chat-component.jpg"
        alt="surfaces"
        description="I created a modular message component that maintained visual consistency while adapting to different contexts - from text-only messages in Daily Drops to media-rich posts and simplified versions in the Watch tab. The core Message Component with multiple variants seamlessly integrates across different product surfaces while maintaining the same interaction patterns and visual hierarchy. This unified approach reduced design debt, accelerated feature development, and created a cohesive user experience across the platform's messaging ecosystem. "
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-chat-reactions.jpg"
        alt="reactions"
        description="I designed a floating emoji menu system that streamlined quick reactions using the most frequently used emojis. This interaction pattern became a foundational design primitive, successfully scaling beyond chat to enhance engagement on videos and Daily Drops and maximized development efficiency."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-chat-reactions-scaled.jpg"
        alt="reactions scaled"
        description="The emoji reaction experience on posts, collections, and post commenting."
        isVideo={false}
      />


      <section>
        <h2 className="font-extrabold" style={{ fontSize: '14px' }}>Design details</h2>
        <p className="text-sm font-light" style={{ letterSpacing: '-0.03em' }}>
        I crafted purposeful micro-interactions in SwiftUI that reinforced social engagement behaviors. Thoughtful details like emoji confetti animations and self-triggered loading states enhanced user delight while encouraging continued social interaction. These polished micro-interactions served dual purposes: creating moments of joy that reinforced positive behaviors and providing clear interaction affordances that simplified complex social patterns. 
        </p>
      </section>

      <TwoImagesGrid 
        images={[
          {
            src: "/two-videos-ltk-emoji-confetti2.mp4",
            alt: "emoji confetti",
            description: "Emoji confetting I coded in SwiftUI",
            isVideo: true
          },
          {
            src: "/two-videos-ltk-pull-to-refresh-zoom.mp4",
            alt: "pull to refresh zoom",
            description: "Self-triggered loading state to create affordance I wrote in SwiftUI",
            isVideo: true
          }
        ]}
      />

      <section>
        <h2 className="font-extrabold" style={{ fontSize: '14px' }}>Delightful animations</h2>
        <p className="text-sm font-light" style={{ letterSpacing: '-0.03em' }}>
        I conducted multiple SwiftUI prototyping experiments to identify optimal animation and interaction patterns for chat reactions. This prototype-first approach to experiential design successfully translated user delight into sustained behavioral engagement, demonstrating how strategic attention to micro-interactions drives measurable product success.
        </p>
      </section>

      <SingleFullWidth 
          src="/one-video-ltk-lightleak.mp4"
          alt="emoji confetti"
          description="I prototyped an interactive achievement card using gyroscopic and parallax effects in SwiftUI to commemorate creators' Chat debut, strategically positioned in profiles as a social showcase element. This celebration mechanism transformed first-time usage into a shareable moment, driving both creator pride and organic discovery through social proof among friend networks."
          isVideo={true}
      />

      <SingleFullWidth 
          src="/one-video-ltk-confetti.mp4"
          alt="emoji confetti"
          description="I created a unique confetti celebration for first reactions to Chat messages, leveraging scarcity psychology and reward mechanics to motivate follower engagement. This intentional gamification transformed routine liking behaviors into competitive social experiences, encouraging active community participation through positive behavioral reinforcement."
          isVideo={true}
            />

      <SingleFullWidth
        src="/one-image-chat-company-contribution.jpg"
        alt="contribution"
        description="I supported design leadership's engineering collaboration goals by becoming the first designer in company history to ship production code, contributing directly to chat's development while demonstrating new possibilities for cross-functional partnership. This novel approach earned our CTO's recognition and established a mentorship pipeline for other designers seeking to strengthen their technical skills."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-chat-demos.jpg"
        alt="demo"
        description="Responding to the executive team's AI exploration mandate, I created comprehensive designer-focused AI workflows, demonstrating practical applications through company-wide demo's. I developed an end-to-end prototyping processes that successfully transitioned from demo concepts to production implementation, establishing scalable methodologies that influenced broader team AI adoption strategies."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-chat-final.jpg"
        alt="final screens"
        description="Some screens from the final product experience in public beta."
        isVideo={false}
      />

      <section>
        <h2 className="font-extrabold" style={{ fontSize: '14px' }}>Results</h2>
        <p className="text-md font-light" style={{ letterSpacing: '-0.03em' }}>
        I helped lead chat's development that became the company's most important OKR driver and most successful 2025 product launch. Currently in public beta with sustained 125%+ increase in daily direct users following a second creator cohort expansion. My contributions directly influenced additional project funding allocation, while ongoing user research and feedback synthesis continues to refine the experience toward official September 2025 launch.
        </p>
      </section>

    </>
  )
}; 