import React from 'react';
import { SingleFullWidth, TwoImagesGrid, ThreeImagesGrid, HeroImage } from '@/app/components/layouts/ImageLayouts';

export const ltkChatProject = {
  title: "LTK Chat",
  description: "Creators build stronger communities with LTK Chat through real-time messaging and engagement tools in a broadcast channel setting. I was the lead product designer on this 0 to 1 initiative and worked with an incredibly small but talented engineering team to build and launch the feature. Chat is a strategic initiative to drive consumer daily direct active users to LTK while ensuring Creators have a consistent and dedicated channel to reach their audience.The project kicked at the end of Q1 2025 with an aggressive target of delivering the MVP by end of Q2 2025. I collaborated with a senior product manager and an engineeering manager driving leadership alignment on the strategy, performing benefits-risk analysis, roadmap sequencing, working with BE on architectural designs, and presentation to the leadership team including the founders/CEO. ",
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
        description="One of the most important artifacts I created mapped our proposed end-to-end and competitor flows, which helped with feature prioritization and defining our areas of differentiation. We kept coming back to this artifacts throughout the development lifecycle."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-chat-comment-service.jpg"
        alt="commenting service"
        description="I worked closely with the post commenting service backend team as a result of the decision to utilize their API to build out the new Chat feature. As a part of discovery, I mapped out the end-to-end commenting UX, spoke with their product manager to understand where the commenting service fell short to ensure Chat's success."
        isVideo={false}
      />

      <section>
        <h2 className="font-extrabold" style={{ fontSize: '14px' }}>MVP features</h2>
        <p className="text-sm font-light" style={{ letterSpacing: '-0.03em' }}>
          For the MVP, creators could only post text and link messages. Followers could send an emoji reply, but not send text replies to form threads yet. Fifty creators were selected to be a part of the initial beta launch and were given white glove support. The strategic (but risky) bet to release the Chat feature with only text support was one that we held conviction. We believed that in the short-term, Creators would be eager to bring their audience from Instagram given their algorithmic fluctuations. Furthermore, upon analyzing the fifty creators, we selected the ones who had strong followings on competitive platforms and we were sure we could deliver the next set of feature quickly. For Consumers, I fought hard to make emoji reactions a priority (over analytics). I reasoned that Consumers needed an expression mechanism that motivated Creators to continue posting in Chat.
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
        description="The chat feature opens up new avenues for users to interact socially with creators and with each other. Aside from the chat surface, I also designed the chat notifications, worked with other teams to prioritize chat content discovery throughout the app."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-chat-reactions.jpg"
        alt="reactions"
        description="An emoji floating menu was designed to let creators quickly react using the most common emojis. The floating menu simplifies the interaction and allows the pattern to be used as a primitive outside of chat on places like videos and Daily Drops (our version of Reels)."
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
          Subtle design details were thoughtfully included for polish while driving simplicity and new social behaviors on LTK.
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
          One of the core goals of the LTK Chat experience was to create a sense of delight and engagement through
          thoughtful animations and interactions. I protoyped a number of experiments in SwiftUI that resulted in sustained
          user engagement with the reactions feature.
        </p>
      </section>

      <SingleFullWidth 
          src="/one-video-ltk-lightleak.mp4"
          alt="emoji confetti"
          description="To give members a sense of achievement upon creating their first Chat post, I prototyped a concept of a special sharable card with gyroscopic and parallax effects.
          This card would be displayed in the profile section of the Chat experience as something a creator could show off to friends."
          isVideo={true}
      />

      <SingleFullWidth 
          src="/one-video-ltk-confetti.mp4"
          alt="emoji confetti"
          description="The first follower to react to a Chat message triggers an emoji confetti animation. This unique detail was meant to gamify the social experience of liking a message and rewarding that behavior."
          isVideo={true}
            />

      <SingleFullWidth
        src="/one-image-chat-company-contribution.jpg"
        alt="contribution"
        description="Prior to this project, I had been regularly contributing to the company repo and used the Chat project to further design leadership's team effort to evangelize strong ties between design and engineering. I was the only designer in the history of the company to ever ship code to production, received recognition from our CTO, and mentored other designers eager to do the same."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-chat-demos.jpg"
        alt="demo"
        description="I demo’d to the company how I leveraged AI in my workflows given leadership mandated teams try to embrace AI and explore ways to benefit from the technology. I demo'd the end-to-end process of creating AI-powered prototypes, some of which were incorporated into production code."
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
        <p className="text-sm font-light" style={{ letterSpacing: '-0.03em' }}>
          Chat is still in public beta with an official launch date of late August 2025. The team is shoring up the user experience, learning, synthesizing and incorporating feedback from beta creators into the product. The project is currently driving the most important company OKR and slated to receive additional funding directly due to my contributions to the project. In a recent second batch of creator invitations to the feature, we're seeing sustained growth at 125%+ increase in daily direct users. This has been the company's most successful product launch in 2025.
        </p>
      </section>

    </>
  )
}; 