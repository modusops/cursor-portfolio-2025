import { CaseStudyWrapper } from '@/app/components/CaseStudyWrapper';
import { CaseStudyScrollSection } from '@/app/components/CaseStudyScrollSection';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { AnimatedContent } from '@/components/animated-content';
import { AnimatedCounter } from '@/app/components/AnimatedCounter';

export default function CaseStudyLTKDashboard() {
  const slides1 = [
    {
      title: 'Coach Cards',
      description: 'Creators are busy and often crave bite-sized information they can understand at a glance. I designed a system of scrollable cards with useful information that was highly interactive and could be repurposed for different use cases.',
      media: '/casestudy-ltk-dashboard-slide1-1.jpg',
      isVideo: false,
    },
    {
      title: 'AI Chatbot',
      description: 'What if creators could chat with the app instead of searching for information? The AI Chatbot leverages LLMs to help creators understand their key business data; lifting insights and business summaries through conversations.',
      media: '/casestudy-ltk-dashboard-slide1-2.jpg',
      isVideo: false,
    },
    {
      title: 'Data Visualization',
      description: 'Business data can be complex to understand. We learned while creators are great at driving sales; they lack business acumen. By highlighting key metrics using charts to visualize data, we could help bridge the gap between insight and knowledge.',
      media: '/casestudy-ltk-dashboard-slide1-3.jpg',
      isVideo: false,
    },
  ];

  const slides2 = [
    {
      title: 'Helping connect users with their data',
      description: 'Creators come in all flavors. Some are comfortable with data while others need a helping hand. In addition, some information is best understood over a period of time. Users can toggle between graphical or numerical representation of key business data.',
      media: '/casestudy-ltk-dashboard-slide2-1.jpg',
      isVideo: false,
    },
    {
      title: 'Always a delightful experience',
      description: 'A business app should be delightful to use. I brought consumer-grade polish through attention to details and experimentation. Different animations were tested and fine-tuned for a highly crafted experience.',
      media: '/casestudy-ltk-dashboard-slide2-2.jpg',
      isVideo: false,
    },
    {
      title: 'Designed for diverse needs',
      description: 'Different creators have different needs. For creators with less followers, post and visit metrics are prioritized. For established creators, earnings and commission data are the default views.',
      media: '/casestudy-ltk-dashboard-slide2-3.jpg',
      isVideo: false,
    },
    {
      title: 'Flexible and editable',
      description: 'Want a specific layout of your business data? Just tap into settings to turn on and off specific charts or reorganize them to fit your needs.',
      media: '/casestudy-ltk-dashboard-slide2-4.jpg',
      isVideo: false,
      },
    {
      title: 'All business and play',
      description: 'Who says you can’t mix business and pleasure?Utilizing my expertise in SwiftUI, I prototyped an immersive experience when the creator shared their storefront.',
      media: '/two-videos-experiment-parallax1.mp4',
      isVideo: true,
      },
    {
      title: 'Designing at scale',
      description: 'Once the design solution was solidified, I evangelized the new component and contributed to scaling it across our ecosystem, helping other teams adopt the new pattern.',
      media: '/casestudy-ltk-dashboard-slide2-5.jpg',
      isVideo: false,
        },
  ];

  return (
    <CaseStudyWrapper>
      <div className="min-h-screen bg-white dark:bg-black scroll-smooth pt-32 pb-32 transition-colors duration-200">
        <Link 
          href="/" 
          className="fixed right-16 top-8 p-2 rounded-full backdrop-blur-lg backdrop-saturate-150 backdrop-brightness-110 bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-800/30 border border-white/30 dark:border-gray-700/30 shadow-lg transition-all duration-200 z-50"
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
              A month after joining the company, I was tasked with leading the redesign of the creator app home experience. I helped launch the MVP in 4 months, introduced two new foundational components to the design system, and was the first designer in company history to ship code to production.
              </p>
              {/* Meta Information - 3 columns */}
              <div className="flex gap-0">
                <div className="flex flex-col gap-1 w-[136px]">
                  <p className="text-[14px] leading-[24px] text-gray-500 dark:text-gray-400 transition-colors duration-200">Years</p>
                  <p className="text-[14px] leading-[24px] text-black dark:text-white transition-colors duration-200">1/2024 - 4/2024</p>
                </div>
                <div className="flex flex-col gap-1 w-[136px]">
                  <p className="text-[14px] leading-[24px] text-gray-500 dark:text-gray-400 transition-colors duration-200">Role</p>
                  <p className="text-[14px] leading-[24px] text-black dark:text-white transition-colors duration-200">Lead designer</p>
                </div>
                <div className="flex flex-col gap-1 w-[200px]">
                  <p className="text-[14px] leading-[24px] text-gray-500 dark:text-gray-400 transition-colors duration-200">Team</p>
                  <div className="flex gap-1">
                    <Image
                      src="/chaitanya.png"
                      alt="Chaitanya"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <Image
                      src="/dave.png"
                      alt="Dave"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <Image
                      src="/jeromy.png"
                      alt="Jeromy"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <Image
                      src="/khalid.png"
                      alt="Khalid"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <Image
                      src="/liz.png"
                      alt="Liz"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <Image
                      src="/maddie.png"
                      alt="Maddie"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <Image
                      src="/nathan.png"
                      alt="Nathan"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </div>
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

          {/* Problem Section */}
          <AnimatedContent className="delay-200">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                PROBLEM
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[28px] md:text-[36px] leading-[34px] md:leading-[42px] font-light text-black dark:text-white transition-colors duration-200">
              The existing home page was focused on motivating creators to post and share links. While that strategy was effective for new users to the platform, it alienated existing Creators who couldn’t easily understand their business. As a result, posting rates declined.
              </p>
            </div>
          </section>
          </AnimatedContent>

          {/* How Might We Section */}
          <AnimatedContent className="delay-300">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                HOW MIGHT WE
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[28px] md:text-[36px] leading-[34px] md:leading-[42px] font-light text-black dark:text-white transition-colors duration-200">
              How might we increase posting rates and help creators understand their business by showing relevant and timely information?
              </p>
            </div>
          </section>
          </AnimatedContent>

          {/* Image Section */}
          <AnimatedContent className="delay-400">
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
          <AnimatedContent className="delay-500">
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

          {/* Scroll-Triggered Section with 60/40 split and 100vh images */}
          <AnimatedContent className="delay-600">
            <CaseStudyScrollSection slides={slides1} />
          </AnimatedContent>

          {/*Context*/}
          <AnimatedContent className="delay-700">
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

          {/* Scroll-Triggered Section with 60/40 split and 100vh images */}
          <AnimatedContent className="delay-800">
            <CaseStudyScrollSection slides={slides2} />
          </AnimatedContent>

          {/* BTS Section */}
          <AnimatedContent className="delay-900">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                BEHIND THE SCENES
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[28px] md:text-[36px] leading-[34px] md:leading-[42px] font-light text-black dark:text-white transition-colors duration-200">
              Team work makes the dream work. The success of this project rested on transparency, trust, and a laser focus on understanding our users and deeply empathizing with them. Our team met multiple times weekly to ensure there was significant progress and momentum.
              </p>
            </div>
          </section>
          </AnimatedContent>

          {/* Outcomes Section */}
          <AnimatedContent className="delay-1000">
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
              We shipped the final solution in just under 6 months and saw a positive lift in post rates after the redesign. In addition users were surveyed before and after the redesign and resulted a signification increase in user satisfaction.
              </p>
            </div>
          </section>
          </AnimatedContent>
        </div>
      </div>
    </CaseStudyWrapper>
  );
}

