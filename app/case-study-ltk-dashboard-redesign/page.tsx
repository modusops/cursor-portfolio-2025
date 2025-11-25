import { CaseStudyWrapper } from '@/app/components/CaseStudyWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { AnimatedContent } from '@/components/animated-content';
import { AnimatedCounter } from '@/app/components/AnimatedCounter';
import { Navigation } from '@/app/components/Navigation';
import { TeamAvatars } from '@/app/components/TeamAvatars';
import { ViewportMedia } from '@/app/components/ViewportMedia';

export default function CaseStudyLTKDashboard() {
  const slides1 = [
    {
      title: 'Coach Cards',
      description: 'Creators are busy and often crave bite-sized information they can understand at a glance. I designed a system of scrollable cards with useful information that was highly interactive and could be repurposed for different use cases.',
      media: '/swipeablecards.json',
      isVideo: false,
      isLottie: true,
    },
    {
      title: 'AI Chatbot',
      description: 'What if creators could chat with the app instead of searching for information? The AI Chatbot leverages LLMs to help creators understand their key business data; lifting insights and business summaries through conversations.',
      media: '/chatbot.json',
      isVideo: false,
      isLottie: true,
    },
    {
      title: 'Data Visualization',
      description: 'Business data can be complex to understand. We learned while creators are great at driving sales; they lack business acumen. By highlighting key metrics using charts to visualize data, we could help bridge the gap between insight and knowledge.',
      media: '/datavisualization.json',
      isVideo: false,
      isLottie: true,
    },
  ];

  const slides2 = [
    {
      title: 'Connecting users with their data',
      description: 'Creators come in all flavors. Some are comfortable with data while others need a helping hand. In addition, some information is best understood over a period of time. Users can toggle between graphical or numerical representation of key business data.',
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
      title: 'Designed for diverse needs',
      description: 'Different creators have different needs. For creators with less followers, post and visit metrics are prioritized. For established creators, earnings and commission data are the default views.',
      media: '/diversecharts.json',
      isVideo: false,
      isLottie: true,
    },
    {
      title: 'Flexible and editable',
      description: 'Want a specific layout of your business data? Just tap into settings to turn on and off specific charts or reorganize them to fit your needs.',
      media: '/flexible.json',
      isVideo: false,
      isLottie: true,
      },
    {
      title: 'All business and play',
      description: "Who says you can't mix business and pleasure? Utilizing my expertise in SwiftUI, I prototyped an immersive experience when the creator shared their storefront.",
      media: '/two-videos-experiment-parallax1.mp4',
      isVideo: true,
      },
    {
      title: 'Designing at scale',
      description: 'Once the design solution was solidified, I evangelized the new component and contributed to scaling it across our ecosystem, helping other teams adopt the new pattern.',
      media: '/scale.json',
      isVideo: false,
      isLottie: true,
        },
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
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h1 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal font-sans text-black dark:text-white transition-colors duration-200">
                LTK Dashboard Redesign
              </h1>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">
              LTK is a creator commerce platform that enables content creators to monetize their product recommendations by making them instantly shoppable for their followers through the LTK shopping app.
              </p>
              {/* Meta Information - 3 columns */}
              <div className="flex gap-8">
                <div className="flex flex-col gap-[2px]">
                  <p className="text-[14px] leading-[24px] text-gray-500 dark:text-gray-400 transition-colors duration-200">Timeline</p>
                  <p className="text-[14px] leading-[24px] text-black dark:text-white transition-colors duration-200">Q1 2024 - Q2 2024</p>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="text-[14px] leading-[24px] text-gray-500 dark:text-gray-400 transition-colors duration-200">Role</p>
                  <p className="text-[14px] leading-[24px] text-black dark:text-white transition-colors duration-200">Lead designer</p>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="text-[14px] leading-[24px] text-gray-500 dark:text-gray-400 transition-colors duration-200">Team</p>
                  <TeamAvatars />
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
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                OVERVIEW
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[22px] leading-[28px] font-medium text-black dark:text-white transition-colors duration-200">
              LTK helps creator's build and grow their social commerce business by providing monetization tools, analytics, and brand collaboration management in one platform.
              </p>
              <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-light text-black dark:text-white transition-colors duration-200">
              During the winter of 2024, I worked with the creator success, marketing, engineering and data science team to improve the iOS creator app home page experience and drive growth. For this project, I restructured the page information architecture and introduced data visualization to give users a snapshot of their business in a simplified way. The page was launched successfully and helped strengthen LTK's growth metrics by helping creators easily understand their commerce data and take actions to grow their business.
              </p>
            </div>
          </section>
          </AnimatedContent>

          {/* Problem Section */}
          <AnimatedContent className="delay-300">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                PROBLEM
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[28px] md:text-[36px] leading-[34px] md:leading-[42px] font-light text-black dark:text-white transition-colors duration-200">
              The home page prioritized motivating users to create their first post and sharing it. However through research we learned creators were actually more interested in understanding their business and using data to inform their business decisions. As a result, user satisfaction and posting rates both declined.
              </p>
            </div>
          </section>
          </AnimatedContent>

          {/* How Might We Section */}
          <AnimatedContent className="delay-400">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                HOW MIGHT WE
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[28px] md:text-[36px] leading-[34px] md:leading-[42px] font-light text-black dark:text-white transition-colors duration-200">
              How might we help creators understand their business and increase posting and sharing rates by showing relevant and timely information?
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
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-4 flex items-start">
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">
              Through research of creators on the platform and embracing an iterative design process, I conceived several design solutions that were tested with users. I worked closely with engineers and members of the design system team, taking advantage of a re-architecture of the mobile app leveraging native capabilities that were previously unavailable and helped create the design system intake model that the rest of the design team used.
              </p>
            </div>
          </section>
          </AnimatedContent>

          {/* Individual Slide Sections - slides1 */}
          {slides1.map((slide, index) => {
            const delayClasses = ['delay-700', 'delay-800', 'delay-900'];
            return (
            <AnimatedContent key={index} className={delayClasses[index] || 'delay-700'}>
              <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16 items-center min-h-[700px]">
                {/* LEFT COLUMN: Text content - 4 columns (40%) */}
                <div className="col-span-1 md:col-span-4 flex flex-col gap-3">
                  <h2 className="text-[28px] md:text-[36px] leading-[34px] md:leading-[40px] font-normal break-words text-black dark:text-white transition-colors duration-200">
                    {slide.title}
                  </h2>
                  <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] text-black dark:text-white break-words transition-colors duration-200">
                    {slide.description}
                  </p>
                </div>

                {/* RIGHT COLUMN: Media content - 6 columns (60%), reduced height to fit viewport */}
                <div className="col-span-1 md:col-span-6 relative h-[700px]">
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
          <AnimatedContent className="delay-800">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-4 flex items-start">
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">
              I rapidly iterated on various chart designs, collaborating with multiple teams who were significantly invested in the project such as the design system team, the business platform and creator success team. Through multiple workshop meetings, stakeholders were aligned quickly through a series of design walkthroughs of different concepts, user research and iterations based on feedback. I presented to the founders of the company, getting their approval without any major pushback.
              </p>
            </div>
          </section>
          </AnimatedContent>

          {/* Individual Slide Sections - slides2 */}
          {slides2.map((slide, index) => {
            const delayClasses = ['delay-900', 'delay-1000', 'delay-1100', 'delay-1200', 'delay-1300'];
            return (
            <AnimatedContent key={index} className={delayClasses[index] || 'delay-900'}>
              <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16 items-center min-h-[700px]">
                {/* LEFT COLUMN: Text content - 4 columns (40%) */}
                <div className="col-span-1 md:col-span-4 flex flex-col gap-3">
                  <h2 className="text-[28px] md:text-[36px] leading-[34px] md:leading-[40px] font-normal break-words text-black dark:text-white transition-colors duration-200">
                    {slide.title}
                  </h2>
                  <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] text-black dark:text-white break-words transition-colors duration-200">
                    {slide.description}
                  </p>
                </div>

                {/* RIGHT COLUMN: Media content - 6 columns (60%), reduced height to fit viewport */}
                <div className="col-span-1 md:col-span-6 relative h-[700px]">
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
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                BEHIND THE SCENES
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[28px] md:text-[36px] leading-[34px] md:leading-[42px] font-light text-black dark:text-white transition-colors duration-200">
              Team work makes the dream work. The success of this project rested on transparency, trust, and a laser focus on understanding our users and deeply empathizing with them. Our team met multiple times weekly to ensure progress and momentum.
              </p>
            </div>
          </section>
          </AnimatedContent>

          {/* Retrospective Section */}
          <AnimatedContent className="delay-1100">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                RETROSPECTIVE
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">
              This experience reinforces for me why crafting a great product experience isn't just about showing users information—it's also about when and how information is delivered. By balancing business and user needs through research and effective collaboration, teams can craft product experiences that are useful without overwhelming users with too much data.
              </p>
            </div>
          </section>
          </AnimatedContent>

          {/* Outcomes Section */}
          <AnimatedContent className="delay-1200">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
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
              <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">
              We shipped the final solution in just under 6 months and saw a positive lift in post rates after the redesign. In addition the redesign resulted an increase in user satisfaction.
              </p>
            </div>
          </section>
          </AnimatedContent>
        </div>
      </div>
    </CaseStudyWrapper>
  );
}

