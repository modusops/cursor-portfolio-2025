import { CaseStudyWrapper } from '@/app/components/CaseStudyWrapper';
import { CaseStudyScrollSection } from '@/app/components/CaseStudyScrollSection';
import Image from 'next/image';

export default function NewProjectPageTest11162025() {
  const slides = [
    {
      title: 'Scroll-Based Storytelling',
      description: 'How might we create more engaging project presentations that  tell a story through scroll interactions while maintaining performance and accessibility?',
      media: '/chat-hero.jpg',
      isVideo: false,
    },
    {
      title: 'Smooth Transitions',
      description: 'How might we create more engaging project presentations that  tell a story through scroll interactions while maintaining performance and accessibility?',
      media: '/one-image-chat-workshop.jpg',
      isVideo: false,
    },
    {
      title: '16-Column Grid System',
      description: 'How might we create more engaging project presentations that  tell a story through scroll interactions while maintaining performance and accessibility?',
      media: '/one-image-chat-features.jpg',
      isVideo: false,
    },
    {
      title: 'Performance First',
      description: 'How might we create more engaging project presentations that  tell a story through scroll interactions while maintaining performance and accessibility?',
      media: '/one-image-chat-component.jpg',
      isVideo: false,
    },
  ];

  return (
    <CaseStudyWrapper>
      <div className="min-h-screen bg-white dark:bg-black scroll-smooth pt-16 pb-32 transition-colors duration-200">
        <div className="flex flex-col gap-16">
          {/* Hero Section */}
          <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h1 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal font-sans text-black dark:text-white transition-colors duration-200">
                LTK Dashboard Redesign
              </h1>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">
                I've helped build products for the world's top tech companies. As a seasoned product designer with experience building and
              </p>
              {/* Meta Information - 3 columns */}
              <div className="flex gap-0">
                <div className="flex flex-col gap-1 w-[136px]">
                  <p className="text-[14px] leading-[24px] text-gray-500 dark:text-gray-400 transition-colors duration-200">Years</p>
                  <p className="text-[14px] leading-[24px] text-black dark:text-white transition-colors duration-200">2021 - 2024</p>
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

          {/* Image Section */}
          <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-10">
              <div className="relative w-full rounded-[32px] overflow-hidden" style={{ aspectRatio: '1312/421' }}>
                <Image
                  src="/ltk-dashboard-screens.png"
                  alt="LTK Dashboard screens showing Overview, Visits, and Earnings analytics"
                  fill
                  className="object-contain rounded-[32px]"
                  priority
                  sizes="(max-width: 768px) 100vw, 1312px"
                />
              </div>
            </div>
          </section>

          {/* Challenge Section */}
          <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                CHALLENGE
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[28px] md:text-[36px] leading-[34px] md:leading-[42px] font-normal text-black dark:text-white transition-colors duration-200">
                How might we create more engaging project presentations that  tell a story through scroll interactions while maintaining performance and accessibility?
              </p>
            </div>
          </section>

          {/* Solution Section */}
          <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
            <div className="col-span-1 md:col-span-4 flex items-start">
              <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                SOLUTION
              </h2>
            </div>
            <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
              <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">
                How might we create more engaging project presentations that  tell a story through scroll interactions while maintaining performance and accessibility?
              </p>
            </div>
          </section>

          {/* Scroll-Triggered Section with 60/40 split and 100vh images */}
          <CaseStudyScrollSection slides={slides} />

          {/* Outcomes Section */}
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
                  <div className="text-[32px] md:text-[36px] leading-[38px] md:leading-[40px] font-normal text-black dark:text-white transition-colors duration-200">1234</div>
                  <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">Metric 1 goes here</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-[32px] md:text-[36px] leading-[38px] md:leading-[40px] font-normal text-black dark:text-white transition-colors duration-200">1234</div>
                  <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">Metric 1 goes here</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-[32px] md:text-[36px] leading-[38px] md:leading-[40px] font-normal text-black dark:text-white transition-colors duration-200">1234</div>
                  <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">Metric 1 goes here</p>
                </div>
              </div>
              {/* Description Text */}
              <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">
                I've helped build products for the world's top tech companies. As a seasoned product designer with experience building and
              </p>
            </div>
          </section>
        </div>
      </div>
    </CaseStudyWrapper>
  );
}
