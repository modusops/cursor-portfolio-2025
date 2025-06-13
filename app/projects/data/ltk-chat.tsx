import React from 'react';
import { SingleFullWidth, TwoImagesGrid, ThreeImagesGrid, HeroImage } from '@/app/components/layouts/ImageLayouts';

export const ltkChatProject = {
  title: "LTK Chat",
  description: "Building stronger creator-led communities",
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
      <section>
        <h2>Overview</h2>
        <p>
          LTK Chat is a new platform feature that enables creators to build stronger connections with their community
          through real-time messaging and engagement tools.
        </p>
      </section>

      <TwoImagesGrid 
        images={[
          {
            src: "/two-images-ltk-creator-emoji.jpg",
            alt: "creator emoji"
          },
          {
            src: "/two-images-ltk-reaction.jpg",
            alt: "reactions"
          }
        ]}
      />

<ThreeImagesGrid 
        images={[
          {
            src: "/three-images-ltk-creator-input.jpg",
            alt: "Creator input"
          },
          {
            src: "/three-images-ltk-creator-image-preview.jpg",
            alt: "Creator image preview"
          },
          {
            src: "/three-images-ltk-creator-video-preview.jpg",
            alt: "Creator video preview"
          }
        ]}
      />

      <section>
        <h2>Image and video uploads</h2>
        <p>
          I designed the image and video upload experience to be simple and intuitive. 
          The main feed media cards were crafted to allow a great viewing experience 
          while ensuring users could still easily tap or swipe down to dismiss the keyboard with ease.
          The expanded views were triggered by a single tap which would open the media in a full screen view of 
          the media with iOS's blur material layered beneath it to create a sense of depth, hierarchy and immersion. 
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
          user engagement with the reactions feature. Another experiment was the pull up to refresh interaction design.
          This design was necessary due to the nature of the app and how the data gets refreshed. The subtle animation is triggered
          when new content is available while the user is in-feed. Subtle animations that educate the user is carefully considered
          throughout the entire chat experience.
        </p>
      </section>

      <SingleFullWidth 
          src="/one-video-ltk-cardlightleak-test.mp4"
          alt="emoji confetti"
          isVideo={true}
      />

      <section>
        <h2>Social proof</h2>
        <p>
          As we were building the chat feature, we wanted to emphasize the social nature of the product by adding
          a social proof element to the chat experience. I prototyped a special membership card with gyroscopic and parallax effect.
          This card would be displayed in the profile section of the chat experience as something a creator could show off to a friend.
          While experienes like these may not always lead to growth in observed metrics, they are a great way to create a memorable experience for the user. 
        </p>
      </section>

    </>
  )
}; 