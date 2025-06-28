import React from 'react';
import { SingleFullWidth, TwoImagesGrid, ThreeImagesGrid, HeroImage } from '@/app/components/layouts/ImageLayouts';

export const ltkChatProject = {
  title: "LTK Chat",
  description: "LTK Chat enables creators to build stronger communities through real-time messaging and engagement tools. I was the lead product designer and worked with a small engineering team to launch LTK's first social product. ",
  coverImage: "/chat-hero.jpg",
  slug: "ltk-chat",
  metadata: {
    role: "Lead Product Designer",
    timeline: "2023 - Present",
    team: "Product Design, Engineering, Product Management"
  },
  layout: "standard",
  content: (
    <>
 
      <TwoImagesGrid 
        images={[
          {
            src: "/two-images-ltk-creator-emoji.jpg",
            alt: "creator emoji",
            description: "The emoji picker allows creators to express themselves in conversations with their community members"
          },
          {
            src: "/two-images-ltk-reaction.jpg",
            alt: "reactions",
            description: "Users can react to messages with custom emojis, making conversations more engaging and interactive"
          }
        ]}
      />

      <ThreeImagesGrid 
        images={[
          {
            src: "/three-images-ltk-creator-input.jpg",
            alt: "Creator input",
            description: "The message input interface supports rich text formatting and media attachments"
          },
          {
            src: "/three-images-ltk-creator-image-preview.jpg",
            alt: "Creator image preview",
            description: "Real-time image preview helps creators ensure their content looks perfect before sending"
          },
          {
            src: "/three-images-ltk-creator-video-preview.jpg",
            alt: "Creator video preview",
            description: "Video preview functionality allows creators to review their video messages before sharing"
          }
        ]}
      />

      <section>
        <h2>Design details</h2>
        <p>
          The subtle animations appear throughout the chat experience to educate the user and add a sense of wonder and delight.
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
          description="Followers who react first to a comment trigger an emoji confetti animation."
          isVideo={true}
            />

    </>
  )
}; 