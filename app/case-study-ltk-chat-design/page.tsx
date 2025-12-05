import { CaseStudyWrapper } from '@/app/components/CaseStudyWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { AnimatedContent } from '@/components/animated-content';
import { AnimatedCounter } from '@/app/components/AnimatedCounter';
import { Navigation } from '@/app/components/Navigation';
import { TeamAvatars, type TeamMember } from '@/app/components/TeamAvatars';
import { ViewportMedia } from '@/app/components/ViewportMedia';

export default function CaseStudyLTKChatDesign() {
  const teamMembers: TeamMember[] = [
    { name: 'Chaitanya Kola', image: '/chaitanya.png', alt: 'Chaitanya' },
    { name: 'Dave Chan', image: '/dave.png', alt: 'Dave' },
    { name: 'Jeromy Ko', image: '/jeromy.png', alt: 'Jeromy' },
    { name: 'Khalid', image: '/khalid.png', alt: 'Khalid' },
    { name: 'Liz Fox', image: '/liz.png', alt: 'Liz' },
    { name: 'Maddie Pelton', image: '/maddie.png', alt: 'Maddie' },
    { name: 'Nathan Fulkerson', image: '/nathan.png', alt: 'Nathan' },
  ];

  const slides1 = [
    {
      title: 'UX Audit',
      description: 'I conducted extensive end-to-end user flows of community building tools and interviewed creators to identify gaps and areas of opportunities.',
      media: '/swipeablecards.json',
      isVideo: false,
      isLottie: true,
    },
    {
      title: 'Creating a familiar experience',
      description: 'The information architecture leverages familiar community platform patterns to support user adoption, while optimizing the layout for conversation flow and content discoverability.',
      media: '/chatbot.json',
      isVideo: false,
      isLottie: true,
    },
    {
      title: 'Identity & discovery',
      description: 'The design includes creator badges to help members distinguish the community owner from followers. Avatars appear within threads to surface other members, encouraging new connections and drive conversations.',
      media: '/datavisualization.json',
      isVideo: false,
      isLottie: true,
    },
  ];

  const slides2 = [
    {
      title: 'Surfacing activity',
      description: 'I exposed replies on the feed to convey community vibrancy, while removing reply backgrounds to strengthen information hierarchy and reduce clutter.',
      media: '/togglenumberchart.json',
      isVideo: false,
      isLottie: true,
    },
    // {
    //   title: 'Always a delightful experience',
    //   description: 'A business app should be delightful to use. I brought consumer-grade polish through attention to details and experimentation. Different animations were tested and fine-tuned for a highly crafted experience.',
    //   media: '/casestudy-ltk-dashboard-slide2-2.jpg',
    //   isVideo: false,
    // },
    {
      title: 'Overcoming input constraints',
      description: 'During the development phase, we learned there were technical issues preventing users from uploading multiple images in one message. We also discovered it wasn’t possible to create new messages while a message was being sent. I redesigned the input experience to overcome these limitations.',
      media: '/diversecharts.json',
      isVideo: false,
      isLottie: true,
    },
    {
      title: 'Reacting with emojis',
      description: "Followers can express their support through emoji reactions. I chose five positive emojis for the MVP, creating a supportive environment aligned with LTK's brand values.",
      media: '/flexible.json',
      isVideo: false,
      isLottie: true,
      },
    {
      title: 'Sharing links',
      description: "Users can share any link in messages, but only LTK links are hyperlinked. This strategic choice creates instant monetization opportunities for creators while protecting users from accidentally tapping malicious external links.",
      media: '/two-videos-experiment-parallax1.mp4',
      isVideo: true,
      },
    // {
    //   title: 'Designing at scale',
    //   description: 'Once the design solution was solidified, I evangelized the new component and contributed to scaling it across our ecosystem, helping other teams adopt the new pattern.',
    //   media: '/scale.json',
    //   isVideo: false,
    //   isLottie: true,
    //     },
  ];

  return (
    <CaseStudyWrapper>
      <Navigation hideOnScroll={true} />
      <div className="min-h-screen bg-white dark:bg-black scroll-smooth pt-32 pb-32 transition-colors duration-200">
        <Link 
          href="/" 
          className="fixed right-16 top-8 p-2 rounded-full backdrop-blur-lg backdrop-saturate-150 backdrop-brightness-110 bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-800/30 border border-white/30 dark:border-gray-700/30 shadow-lg transition-all duration-200 z-50 hidden"
        >
          <X className="h-6 w-6 text-black dark:text-white drop-shadow-sm" />
          <span className="sr-only">Close</span>
        </Link>
        <div className="flex flex-col gap-[104px]">
          {/* Hero Section */}
          <AnimatedContent>
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16 stagger-children">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h1 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal font-sans text-black dark:text-white transition-colors duration-200">
                LTK Chat Design
              </h1>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">
              LTK helps creators build and grow their social commerce business by providing monetization tools, analytics, and brand collaboration management in one platform.
              </p>
              {/* Meta Information - 3 columns */}
              <div className="flex gap-8">
                <div className="flex flex-col gap-[2px]">
                  <p className="text-[14px] leading-[24px] text-gray-500 dark:text-gray-400 transition-colors duration-200">Timeline</p>
                  <p className="text-[14px] leading-[24px] text-black dark:text-white transition-colors duration-200">Q1 2025 - Q3 2025</p>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="text-[14px] leading-[24px] text-gray-500 dark:text-gray-400 transition-colors duration-200">Role</p>
                  <p className="text-[14px] leading-[24px] text-black dark:text-white transition-colors duration-200">Lead designer</p>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="text-[14px] leading-[24px] text-gray-500 dark:text-gray-400 transition-colors duration-200">Team</p>
                  <TeamAvatars members={teamMembers} />
                </div>
              </div>
            </div>
          </section>
          </AnimatedContent>

          {/* Image Section */}
          <AnimatedContent className="delay-100">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-10">
              <div className="relative w-full rounded-[32px] overflow-hidden" style={{ aspectRatio: '1312/421' }}>
                <Image
                  src="/casestudy-ltk-dashboard-hero.jpg"
                  alt="LTK Dashboard screens showing Overview, Visits, and Earnings analytics"
                  fill
                  className="object-contain rounded-[32px]"
                  priority
                  sizes="(max-width: 768px) 100vw, 1312px"
                />
              </div>
            </div>
          </section>
          </AnimatedContent>

          {/* Overview Section */}
          <AnimatedContent className="delay-200">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16 stagger-children">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                OVERVIEW
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-light text-black dark:text-white transition-colors duration-200">
              In early 2025, I led the design of a 0-to-1 project helping creators build community on LTK while enabling followers to develop deeper bonds with the creators they love. I worked closely with product, engineering, creative, research and data science teams to bring LTK Chat to life which positively impacted business KPI’s.
For this project, I led research and design to support a successful launch that helped creators form stronger connections with their followers. The feature went live and has seen strong traction since launch, strengthening LTK’s engagement and retention metrics by providing users the ability to connect on LTK.
              </p>
            </div>
          </section>
          </AnimatedContent>

          {/* Old Problem Section */}
          {/* <AnimatedContent className="delay-300">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                PROBLEM
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[28px] md:text-[36px] leading-[34px] md:leading-[42px] font-light text-black dark:text-white transition-colors duration-200">
              The home page prioritized motivating users to create their first post and sharing it. However we learned through research that while creators needed motivation early on, once they started posting it was difficult finding data and understanding the overall health of their business. As a result, user satisfaction and posting rates both declined.
              </p>
            </div>
          </section>
          </AnimatedContent> */}

          {/* Problem Section */}
          <AnimatedContent className="delay-350">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16 items-center min-h-[400px] md:min-h-[700px] stagger-children">
              {/* LEFT COLUMN: Text content - 4 columns (40%) */}
              <div className="col-span-1 md:col-span-4 flex flex-col gap-3">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                PROBLEM
              </h2>
                <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-[200] text-black dark:text-white break-words transition-colors duration-200">
                Creators post consistently to build their following on LTK, but have few ways to foster loyal relationships with followers. Through research, we learned they had no choice but to grow their communities off-platform. This meant to communicate with each other, creators and their followers suffered from a disjointed experience.                </p>
              </div>

              {/* RIGHT COLUMN: Media content - 6 columns (60%), reduced height to fit viewport */}
              <div className="col-span-1 md:col-span-6 relative h-[400px] md:h-[700px]">
                <ViewportMedia
                  media="/creatorhomeold.json"
                  title="Coach Cards"
                  isVideo={false}
                  isLottie={true}
                  priority={false}
                />
              </div>
            </section>
          </AnimatedContent>

          {/* Opportunity Section */}
          <AnimatedContent className="delay-400">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16 stagger-children">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
              OPPORTUNITY
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[28px] md:text-[36px] leading-[34px] md:leading-[42px] font-light text-black dark:text-white transition-colors duration-200">
              This was an opportunity to help creators deepen relationships with their most engaged followers through a dedicated community space, while driving engagement and platform stickiness.
              </p>
            </div>
          </section>
          </AnimatedContent>

          {/* Image Section */}
          <AnimatedContent className="delay-500">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-10">
              <div className="relative w-full rounded-[32px] overflow-hidden" style={{ aspectRatio: '1312/421' }}>
                <Image
                  src="/casestudy-ltk-dashboard-image.jpg"
                  alt="LTK Dashboard screens showing Overview, Visits, and Earnings analytics"
                  fill
                  className="object-contain rounded-[32px]"
                  priority
                  sizes="(max-width: 768px) 100vw, 1312px"
                />
              </div>
            </div>
          </section>
          </AnimatedContent>

          {/*Context*/}
          <AnimatedContent className="delay-600">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16 stagger-children">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
              DISCOVERY
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-light text-black dark:text-white transition-colors duration-200">
              Research revealed creators were already hacking existing surfaces like post comments and using off-platform community tools to build deeper connections with followers. Interviews with 20 creators confirmed this was a critical unmet need on both sides. Using AI to accelerate prototyping, I tested multiple concepts with users and iterated toward the final solution.
              </p>
            </div>
          </section>
          </AnimatedContent>

          {/* Individual Slide Sections - slides1 */}
          {slides1.map((slide, index) => {
            const delayClasses = ['delay-700', 'delay-800', 'delay-900'];
            return (
            <AnimatedContent key={index} className={delayClasses[index] || 'delay-700'}>
              <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16 items-center min-h-[400px] md:min-h-[700px] stagger-children">
                {/* LEFT COLUMN: Text content - 4 columns (40%) */}
                <div className="col-span-1 md:col-span-4 flex flex-col gap-3">
                  <h2 className="text-[28px] md:text-[36px] leading-[34px] md:leading-[40px] font-normal break-words text-black dark:text-white transition-colors duration-200">
                    {slide.title}
                  </h2>
                  <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-[200] text-black dark:text-white break-words transition-colors duration-200">
                    {slide.description}
                  </p>
                </div>

                {/* RIGHT COLUMN: Media content - 6 columns (60%), reduced height to fit viewport */}
                <div className="col-span-1 md:col-span-6 relative h-[400px] md:h-[700px]">
                  <ViewportMedia
                    media={slide.media}
                    title={slide.title}
                    isVideo={slide.isVideo}
                    isLottie={slide.isLottie}
                    priority={index === 0}
                  />
                </div>
              </section>
            </AnimatedContent>
            );
          })}

          {/*Context*/}
          {/* <AnimatedContent className="delay-800">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16 stagger-children">
            <div className="col-span-1 md:col-span-4 flex items-start">
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-light text-black dark:text-white transition-colors duration-200">
              I rapidly iterated on various chart designs, collaborating with multiple teams who were significantly invested in the project such as the design system team, the business platform and creator success team. Through multiple workshop meetings, stakeholders were aligned quickly through a series of design walkthroughs of different concepts, user research and iterations based on feedback. I presented to the founders of the company, getting their approval without any major pushback.
              </p>
            </div>
          </section>
          </AnimatedContent> */}

          {/* Individual Slide Sections - slides2 */}
          {slides2.map((slide, index) => {
            const delayClasses = ['delay-900', 'delay-1000', 'delay-1100', 'delay-1200', 'delay-1300'];
            return (
            <AnimatedContent key={index} className={delayClasses[index] || 'delay-900'}>
              <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16 items-center min-h-[400px] md:min-h-[700px] stagger-children">
                {/* LEFT COLUMN: Text content - 4 columns (40%) */}
                <div className="col-span-1 md:col-span-4 flex flex-col gap-3">
                  <h2 className="text-[28px] md:text-[36px] leading-[34px] md:leading-[40px] font-normal break-words text-black dark:text-white transition-colors duration-200">
                    {slide.title}
                  </h2>
                  <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-[200] text-black dark:text-white break-words transition-colors duration-200">
                    {slide.description}
                  </p>
                </div>

                {/* RIGHT COLUMN: Media content - 6 columns (60%), reduced height to fit viewport */}
                <div className="col-span-1 md:col-span-6 relative h-[400px] md:h-[700px]">
                  <ViewportMedia
                    media={slide.media}
                    title={slide.title}
                    isVideo={slide.isVideo}
                    isLottie={slide.isLottie}
                    priority={index === 0}
                  />
                </div>
              </section>
            </AnimatedContent>
            );
          })}

          {/* BTS Section */}
          <AnimatedContent className="delay-1000">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16 stagger-children">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                BEHIND THE SCENES
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[28px] md:text-[36px] leading-[34px] md:leading-[42px] font-light text-black dark:text-white transition-colors duration-200">
              This project had its share of challenges;engineers reassigned mid-sprint, last-minute feature renaming, and shifting timelines. I kept the team focused by regularly reconnecting the team to our user problems and business goals, ensuring we didn't lose sight of why we were building this.
              </p>
            </div>
          </section>
          </AnimatedContent>

          {/* Retrospective Section */}
          <AnimatedContent className="delay-1100">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16 stagger-children">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                RETROSPECTIVE
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-light text-black dark:text-white transition-colors duration-200">
              This project taught me that community design is as much about psychology as interface. The choices that mattered most weren't flashy features but subtle signals: badges that establish hierarchy, visible conversations that suggest vibrancy, and interaction patterns that make contributing feel safe and rewarding.
              </p>
            </div>
          </section>
          </AnimatedContent>

          {/* Outcomes Section */}
          <AnimatedContent className="delay-1200">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16 stagger-children">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                OUTCOMES
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              {/* Metrics Grid - 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="text-[32px] md:text-[36px] leading-[38px] md:leading-[40px] font-light text-black dark:text-white transition-colors duration-200">
                    <AnimatedCounter value={64} suffix="%" />
                    <span className="text-[#8ECE72] text-[1em] inline-block -translate-y-[2px]">+</span>
                  </div>
                  <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">User satisfaction</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-[32px] md:text-[36px] leading-[38px] md:leading-[40px] font-light text-black dark:text-white transition-colors duration-200">
                    <AnimatedCounter value={5} suffix="%" />
                    <span className="text-[#8ECE72] text-[1em] inline-block -translate-y-[2px]">+</span>
                  </div>
                  <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">Creators who post</p>
                </div>
                {/* <div className="flex flex-col gap-2">
                  <div className="text-[32px] md:text-[36px] leading-[38px] md:leading-[40px] font-normal text-black dark:text-white transition-colors duration-200">
                    1234<span className="text-[#adf98c]">↗</span>
                  </div>
                  <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">Metric 1 goes here</p>
                </div> */}
              </div>
              {/* Description Text */}
              <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-light text-black dark:text-white transition-colors duration-200">
              LTK Chat became one of the company's most significant KPI driver in 2025. My contributions led to additional company investment on the project. Ongoing user research and feedback synthesis continues to uncover new opportunities to provide the best community experience for users.
              </p>
            </div>
          </section>
          </AnimatedContent>
        </div>
      </div>
    </CaseStudyWrapper>
  );
}

