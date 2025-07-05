import React from 'react';
import { SingleFullWidth, TwoImagesGrid, ThreeImagesGrid, HeroImage } from '@/app/components/layouts/ImageLayouts';

export const ltkChatProject = {
  title: "LTK Chat",
  description: "LTK Chat enables creators to build stronger communities through real-time messaging and engagement tools in a broadcast channel. I was the lead product designer on this 0 to 1 initiative and worked with a small engineering team to launch the feature. Chat is a strategic initiative to drive consumer dDAUs while ensuring Creators have a consistent and dedicated channel to reach their audience.",
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
        description="The project kicked at the end of Q1 2025 with an aggressive target of an MVP to be delivered by end of Q2 2025. I collaborated with a senior product manager and an engineeering manager driving 
        leadership alignment on the strategy, performing benefits-risk assessment, roadmap sequencing, and working with BE on architectural designs. One of the most important artifacts I created mapped our proposed end-to-end flows and analyzed competitor flows which helped with features prioritization and defining our areas of differentiation. We kept coming back to this artifacts throughout the development lifescycle."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-chat-comment-service.jpg"
        alt="commenting service"
        description="I worked closely with the post commenting service backend team as a result of the decision to utilize their API to build out the new Chat feature. As a part of discovery, I mapped out the end-to-end commenting UX, spoke with the product managr to understand where the commenting service fell short to ensure Chat's success."
        isVideo={false}
      />

      <section>
        <h2>MVP features</h2>
        <p>
          For the MVP, creators could only post text and link messages. Followers could send an emoji reply, but not send text replies to form threads yet. 50 creators were selected to be a part of the initial beta launch and were given white glove support. The strategic bet to release the Chat feature with only text support was that Creators in the short-term, Creators would be eager to bring their audience from Instagram. For Consumers, I fought hard to make emoji reactions a priority (over analytics). I reasoned that Consumers needed an expression mechanism that in turn drove motivated Creators to continue posting.
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

      <ThreeImagesGrid 
        images={[
          {
            src: "/three-images-ltk-creator-input.jpg",
            alt: "Creator input",
            description: "Media attachment"
          },
          {
            src: "/three-images-ltk-creator-image-preview.jpg",
            alt: "Creator image preview",
            description: "Image preview"
          },
          {
            src: "/three-images-ltk-creator-video-preview.jpg",
            alt: "Creator video preview",
            description: "Video preview"
          }
        ]}
      />

      <section>
        <h2>Design details</h2>
        <p>
          Subtle design details were thoughtfully added for polish and simplicity while driving new social behaviors on LTK.
        </p>
      </section>

      <TwoImagesGrid 
        images={[
          {
            src: "/two-videos-ltk-emoji-confetti2.mp4",
            alt: "emoji confetti",
            isVideo: true
          },
          {
            src: "/two-videos-ltk-pull-to-refresh-zoom.mp4",
            alt: "pull to refresh zoom",
            isVideo: true
          }
        ]}
      />

      <section>
        <h2>Delightful animations</h2>
        <p>
          One of the core goals of the LTK Chat experience was to create a sense of delight and engagement through
          thoughtful animations and interactions. I protoyped a number of experiments in SwiftUI that resulted in sustained
          user engagement with the reactions feature.
        </p>
      </section>

      <SingleFullWidth 
          src="/one-video-ltk-lightleak.mp4"
          alt="emoji confetti"
          description="To give members a sense of achievement on completing their first shop share and to emphasize the social nature of the product, I prototyped a special membership card with gyroscopic and parallax effect.
          This card would be displayed in the profile section of the chat experience as something a creator could show off to friends."
          isVideo={true}
      />

      <SingleFullWidth 
          src="/one-video-ltk-confetti.mp4"
          alt="emoji confetti"
          description="The first follower to react to a channel message trigger an emoji confetti animation. This unique detail was meant to gamify the social experience of liking a message and rewarding that behavior."
          isVideo={true}
            />

      <SingleFullWidth
        src="/one-image-chat-company-contribution.jpg"
        alt="contribution"
        description="Prior to this project, I had been regularly contributing to the company repo and used that Chat project to further the design leadership's team effort to evangelize strong ties between design and engineering. I was the only designer in the history of the company to ever ship code to production and mentored other designers who wished to do the same."
        isVideo={false}
      />

      <SingleFullWidth
        src="/one-image-chat-demos.jpg"
        alt="demo"
        description="I demo’d to the company how I leveraged AI in my workflows since leadership mandated teams embrace AI and explore ways to benefit from the technology. I demo'd the end-to-end process of creating AI-powered prototypes, some of which were incorporated into production code."
        isVideo={false}
      />

    </>
  )
}; 