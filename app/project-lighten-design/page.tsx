'use client';

import { CaseStudyWrapper } from '@/app/components/CaseStudyWrapper';
import Image from 'next/image';
import { AnimatedContent } from '@/components/animated-content';
import { Navigation } from '@/app/components/Navigation';
import { AnimatedCounter } from '@/app/components/AnimatedCounter';
import './image-container.module.css';

export default function NewProjectPageTest11192025() {
  return (
    <CaseStudyWrapper>
      <Navigation hideOnScroll={true} />
      <div className="lightenProjectPage min-h-screen bg-white dark:bg-black scroll-smooth pt-32 pb-32 transition-colors duration-200">
        <div className="flex flex-col gap-[104px]">
          {/* Hero Section */}
          <AnimatedContent>
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
              <div className="col-span-1 md:col-span-4 flex items-start">
                <h1 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal font-sans text-black dark:text-white transition-colors duration-200">
                  Lighten AI
                </h1>
              </div>
              <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
                <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">
                Lighten is a healthcare AI platform that helps clinical teams extract critical patient data from medical records; enabling faster care decisions, cohort identification for clinical trials, and preventive care interventions. I was a contract founding designer for the Lighten AI founding team, helping them bring their product idea to life. I worked closely with the CEO and co-founders, designing all aspects of the product to bring the idea to life. Lighten AI successfully raised their seed funding in early late 2024.
                </p>
                {/* Meta Information */}
                <div className="flex gap-0">
                  <div className="flex flex-col gap-[2px] w-[136px]">
                    <p className="text-[14px] leading-[24px] text-gray-500 dark:text-gray-400 transition-colors duration-200">Timeline</p>
                    <p className="text-[14px] leading-[24px] text-black dark:text-white transition-colors duration-200">2024-2025</p>
                  </div>
                  <div className="flex flex-col gap-[2px] w-[152px]">
                    <p className="text-[14px] leading-[24px] text-gray-500 dark:text-gray-400 transition-colors duration-200">Role</p>
                    <p className="text-[14px] leading-[24px] text-black dark:text-white transition-colors duration-200">Founding designer</p>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedContent>

          {/* Image Section */}
          {/* <AnimatedContent className="delay-100">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
              <div className="col-span-1 md:col-span-10">
                <div className="relative w-full max-w-[1312px] mx-auto h-[525px] rounded-[32px] overflow-hidden">
                  <Image
                    src="/casestudy-ltk-dashboard-hero.jpg"
                    alt="Lighten AI interface"
                    fill
                    className="object-contain rounded-[32px]"
                    priority
                    sizes="(max-width: 768px) 100vw, 1312px"
                  />
                </div>
              </div>
            </section>
          </AnimatedContent> */}

          {/* Problem Section */}
          {/* <AnimatedContent className="delay-200">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
              <div className="col-span-1 md:col-span-4 flex items-start">
                <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                  PROBLEM
                </h2>
              </div>
              <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
                <p className="text-[28px] md:text-[36px] leading-[34px] md:leading-[42px] font-light text-black dark:text-white transition-colors duration-200">
                  Through user research, we learned the user experience was confusing with lots of friction leading to slower review time, increased labeling errors, lower model confidence scores. The human stakes were high; the issues were leading to slower clinical decision cycles, cohort identification delay and missed preventative care.
                </p>
              </div>
            </section>
          </AnimatedContent> */}

          {/* Business Goals Section */}
          {/* <AnimatedContent className="delay-300">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
              <div className="col-span-1 md:col-span-4 flex items-start">
                <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                  BUSINESS GOALS
                </h2>
              </div>
              <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
                <p className="text-[28px] md:text-[36px] leading-[34px] md:leading-[42px] font-light text-black dark:text-white transition-colors duration-200">
                  From a business perspective, the friction and model outputs were concerning. Our founders were unable to close deals as quickly as they'd like with ICPs (ideal customer profiles).
                </p>
              </div>
            </section>
          </AnimatedContent> */}

          {/* How Might We Section */}
          {/* <AnimatedContent className="delay-400">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
              <div className="col-span-1 md:col-span-4 flex items-start">
                <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                  HOW MIGHT WE
                </h2>
              </div>
              <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
                <p className="text-[28px] md:text-[36px] leading-[34px] md:leading-[42px] font-light text-black dark:text-white transition-colors duration-200">
                  How might we speed up the reviewer's workflow; reduce labeling errors, and improve confidence in the model outputs from better training data in the long run.
                </p>
              </div>
            </section>
          </AnimatedContent> */}

          {/* Image + Text Grouping 1 */}
          <div className="flex flex-col gap-[36px]">
            {/* Image Section */}
            <AnimatedContent className="delay-500">
              <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
                <div className="col-span-1 md:col-span-10">
                  <div className="relative w-full max-w-[1312px] mx-auto h-[525px] rounded-[16px] md:rounded-[32px] overflow-hidden">
                    <Image
                      src="/project-lighten-image-1.jpg"
                      alt="Lighten AI editor interface"
                      fill
                      className="object-cover rounded-[16px] md:rounded-[32px]"
                      sizes="(max-width: 768px) 100vw, 1312px"
                    />
                  </div>
                </div>
              </section>
            </AnimatedContent>

            {/* The Editor Section */}
            <AnimatedContent className="delay-600">
              <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
                <div className="col-span-1 md:col-span-10 flex flex-col items-center">
                  <div className="flex flex-col gap-1 max-w-[768px]">
                    <h3 className="text-[18px] leading-[24px] md:leading-[28px] font-medium text-black dark:text-white transition-colors duration-200">
                      THE EDITOR
                    </h3>
                    <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-light text-black dark:text-white transition-colors duration-200">
                      The Lighten AI editor is the core of the product experience, used by human-in-the-loop to review and ultimately train Lighten's proprietary LLM.
                    </p>
                  </div>
                </div>
              </section>
            </AnimatedContent>
          </div>

          {/* Image + Text Grouping 2 */}
          <div className="flex flex-col gap-[36px]">
            {/* Image Section */}
            <AnimatedContent className="delay-700">
              <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
                <div className="col-span-1 md:col-span-10">
                  <div className="relative w-full max-w-[1312px] mx-auto h-[525px] rounded-[16px] md:rounded-[32px] overflow-hidden">
                    <Image
                      src="/project-lighten-image-2.jpg"
                      alt="Consumer grade experience"
                      fill
                      className="object-cover rounded-[16px] md:rounded-[32px]"
                      sizes="(max-width: 768px) 100vw, 1312px"
                    />
                  </div>
                </div>
              </section>
            </AnimatedContent>

            {/* Consumer Grade Experience Section */}
            <AnimatedContent className="delay-800">
              <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
                <div className="col-span-1 md:col-span-10 flex flex-col items-center">
                  <div className="flex flex-col gap-1 max-w-[768px]">
                    <h3 className="text-[18px] leading-[24px] md:leading-[28px] font-medium text-black dark:text-white transition-colors duration-200">
                      CONSUMER GRADE EXPERIENCE FOR ENTERPRISE
                    </h3>
                    <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-light text-black dark:text-white transition-colors duration-200">
                      Lighten AI's users are medical professionals who are used to viewing large amounts of unstructured data in cumbersome enterprise software. The vision was to create a new class of software made for medical professionals balanced with great user experience typical of consumer products.
                    </p>
                  </div>
                </div>
              </section>
            </AnimatedContent>
          </div>

          {/* Image + Text Grouping 3 */}
          <div className="flex flex-col gap-[36px]">
            {/* Image Section */}
            <AnimatedContent className="delay-900">
              <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
                <div className="col-span-1 md:col-span-10">
                  <div className="relative w-full max-w-[1312px] mx-auto h-[525px] rounded-[16px] md:rounded-[32px] overflow-hidden">
                    <Image
                      src="/project-lighten-image-3.jpg"
                      alt="Managing information density"
                      fill
                      className="object-cover rounded-[16px] md:rounded-[32px]"
                      sizes="(max-width: 768px) 100vw, 1312px"
                    />
                  </div>
                </div>
              </section>
            </AnimatedContent>

            {/* Managing Information Density Section */}
            <AnimatedContent className="delay-1000">
              <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
                <div className="col-span-1 md:col-span-10 flex flex-col items-center">
                  <div className="flex flex-col gap-1 max-w-[768px]">
                    <h3 className="text-[18px] leading-[24px] md:leading-[28px] font-medium text-black dark:text-white transition-colors duration-200">
                      MANAGING INFORMATION DENSITY
                    </h3>
                    <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-light text-black dark:text-white transition-colors duration-200">
                      Unstructured medical documents are tedious to review. Making content and instructions from Lighten AI easy to read was important. A careful balance of information density and usability was key to meeting the founders' vision and user needs.
                    </p>
                  </div>
                </div>
              </section>
            </AnimatedContent>
          </div>

          {/* Image + Text Grouping 4 */}
          <div className="flex flex-col gap-[36px]">
            {/* Image Section */}
            <AnimatedContent className="delay-1100">
              <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
                <div className="col-span-1 md:col-span-10">
                  <div className="relative w-full max-w-[1312px] mx-auto h-[525px] rounded-[16px] md:rounded-[32px] overflow-hidden">
                    <Image
                      src="/project-lighten-image-4.jpg"
                      alt="Progressive disclosure"
                      fill
                      className="object-cover rounded-[16px] md:rounded-[32px]"
                      sizes="(max-width: 768px) 100vw, 1312px"
                    />
                  </div>
                </div>
              </section>
            </AnimatedContent>

            {/* Progressive Disclosure Section */}
            <AnimatedContent className="delay-1200">
              <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
                <div className="col-span-1 md:col-span-10 flex flex-col items-center">
                  <div className="flex flex-col gap-1 max-w-[768px]">
                    <h3 className="text-[18px] leading-[24px] md:leading-[28px] font-medium text-black dark:text-white transition-colors duration-200">
                      PROGRESSIVE DISCLOSURE
                    </h3>
                    <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-light text-black dark:text-white transition-colors duration-200">
                      I often leveraged progressive disclosure and was extra meticulous about showing information at the right place and time to ensure the product was both polished and easy to use.
                    </p>
                  </div>
                </div>
              </section>
            </AnimatedContent>
          </div>

          {/* Lessons Learned Section */}
          <AnimatedContent className="delay-1300">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
              <div className="col-span-1 md:col-span-4 flex items-start">
                <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                  LESSONS LEARNED
                </h2>
              </div>
              <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
                <p className="text-[28px] md:text-[36px] leading-[34px] md:leading-[42px] font-light text-black dark:text-white transition-colors duration-200">
                  My biggest takeaway from this project was that unlike consumer products, simplicity in healthcare takes on a different meaning. Priority should be placed on user confidence and comprehension. Design solutions in this sector often require adapting consumer design patterns to fit healthcare's higher stakes and information density.
                </p>
              </div>
            </section>
          </AnimatedContent>

          {/* Outcomes Section */}
          <AnimatedContent className="delay-1400">
            <section className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16">
              <div className="col-span-1 md:col-span-4 flex items-start">
                <h2 className="text-[18px] leading-[24px] md:leading-[28px] font-medium uppercase text-black dark:text-white transition-colors duration-200">
                  OUTCOMES
                </h2>
              </div>
              <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="text-[32px] md:text-[36px] leading-[38px] md:leading-[40px] font-light text-black dark:text-white transition-colors duration-200">
                      <AnimatedCounter value={8} suffix="%" />
                      <span className="text-[#8ECE72] text-[1em] inline-block -translate-y-[2px]">+</span>
                    </div>
                    <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">Abstraction accuracy</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[32px] md:text-[36px] leading-[38px] md:leading-[40px] font-light text-black dark:text-white transition-colors duration-200">
                      <AnimatedCounter value={30} suffix="%" />
                      <span className="text-[#8ECE72] text-[1em] inline-block -translate-y-[2px]">↓</span>
                    </div>
                    <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">Human abstraction time</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[32px] md:text-[36px] leading-[38px] md:leading-[40px] font-light text-black dark:text-white transition-colors duration-200">
                      <AnimatedCounter value={15} suffix="%" />
                      <span className="text-[#8ECE72] text-[1em] inline-block -translate-y-[2px]">+</span>
                    </div>
                    <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-normal text-black dark:text-white transition-colors duration-200">Deal closing rates</p>
                  </div>
                </div>
                {/* Description Text */}
                <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-light text-black dark:text-white transition-colors duration-200">
                  The redesign received positive feedback from users, helping the business reach its goals and fundraising milestone.
                </p>
              </div>
            </section>
          </AnimatedContent>
        </div>
      </div>
    </CaseStudyWrapper>
  );
}

