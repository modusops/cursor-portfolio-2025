import Link from 'next/link';
import Image from 'next/image';
import { CaseStudyWrapper } from '@/app/components/CaseStudyWrapper';
import { CaseStudyScrollSection } from '@/app/components/CaseStudyScrollSection';

export default function NewProjectPageTest11142025() {
  const slides = [
    {
      title: 'Scroll-Based Storytelling',
      description: 'This project page demonstrates a new approach to presenting work using scroll-triggered animations and sticky positioning. As you scroll, content seamlessly transitions creating an immersive narrative experience.',
      media: '/chat-hero.jpg',
      isVideo: false,
    },
    {
      title: 'Smooth Transitions',
      description: 'Using the IntersectionObserver API and CSS transforms, we achieve smooth fade-in effects without heavy animation libraries. Each section tells its own story while maintaining visual cohesion.',
      media: '/one-image-chat-workshop.jpg',
      isVideo: false,
    },
    {
      title: '16-Column Grid System',
      description: 'The layout is built on a flexible 16-column grid system that provides precise control over element positioning. This approach, inspired by high-end portfolio sites, creates sophisticated layouts with minimal complexity.',
      media: '/one-image-chat-features.jpg',
      isVideo: false,
    },
    {
      title: 'Performance First',
      description: 'No external animation libraries means faster load times and smoother animations. Everything is powered by native browser APIs and GPU-accelerated CSS transforms for optimal performance.',
      media: '/one-image-chat-component.jpg',
      isVideo: false,
    },
  ];

  return (
    <CaseStudyWrapper>
      <div className="min-h-screen bg-[#F8F8F8] scroll-smooth">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-16">
          <div className="max-w-6xl">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-black transition-colors mb-6 inline-block"
            >
              ← Back to Home
            </Link>
            <h1 className="text-[27px] lg:text-[29px] font-bold mb-8">
              New Project Page Test
            </h1>
            <p className="text-[15px] lg:text-[16px] text-gray-600 leading-relaxed mb-12">
              This is a test implementation using the new CaseStudyWrapper and
              CaseStudyScrollSection components with 60/40 split and 100vh images.
            </p>

            {/* Meta Information */}
            <div className="grid grid-cols-3 gap-12 mt-16">
              <div>
                <p className="text-[14px] uppercase text-gray-500 mb-2">Timeline</p>
                <p className="text-[14px] font-medium">November 2025</p>
              </div>
              <div>
                <p className="text-[14px] uppercase text-gray-500 mb-2">Role</p>
                <p className="text-[14px] font-medium">Design & Development</p>
              </div>
              <div>
                <p className="text-[14px] uppercase text-gray-500 mb-2">Technology</p>
                <p className="text-[14px] font-medium">Next.js, Tailwind, Scroll Hijacking</p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="min-h-screen flex items-center px-16">
          <div className="grid grid-cols-10 gap-12 w-full">
            <div className="col-start-1 col-end-5">
              <h2 className="text-[14px] lg:text-[15px] uppercase text-gray-500 tracking-wider">
                The Challenge
              </h2>
            </div>
            <div className="col-start-5 col-end-11">
              <p className="text-[27px] lg:text-[45px] font-light leading-relaxed">
                How might we create more engaging project presentations that tell
                a story through scroll interactions while maintaining performance
                and accessibility?
              </p>
            </div>
          </div>
        </section>

        {/* Scroll-Triggered Section with 60/40 split and 100vh images */}
        <CaseStudyScrollSection slides={slides} />

        {/* Approach Section */}
        <section className="min-h-screen flex items-center px-16 bg-white">
          <div className="grid grid-cols-10 gap-12 w-full">
            <div className="col-start-1 col-end-5">
              <h2 className="text-[14px] lg:text-[15px] uppercase text-gray-500 tracking-wider">
                The Approach
              </h2>
            </div>
            <div className="col-start-5 col-end-11">
              <p className="text-[15px] lg:text-[20px] text-gray-700 leading-relaxed mb-8">
                This implementation combines modern web technologies with careful
                attention to user experience. By leveraging the IntersectionObserver
                API and CSS transforms, we create smooth animations without relying
                on heavy JavaScript libraries.
              </p>
              <p className="text-[15px] lg:text-[20px] text-gray-700 leading-relaxed">
                The layout uses a consistent 60/40 split with images always filling
                100% of the viewport height, creating an immersive scroll experience
                optimized for desktop viewing.
              </p>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="min-h-screen flex items-center px-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[14px] lg:text-[15px] uppercase text-gray-500 tracking-wider mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h3 className="text-[27px] lg:text-[45px] font-semibold mb-4">Desktop-Optimized</h3>
                <p className="text-[15px] lg:text-[20px] text-gray-600 leading-relaxed">
                  Designed specifically for desktop viewing with mobile users
                  receiving a clear message about the optimal experience.
                </p>
              </div>
              <div>
                <h3 className="text-[27px] lg:text-[45px] font-semibold mb-4">60/40 Layout</h3>
                <p className="text-[15px] lg:text-[20px] text-gray-600 leading-relaxed">
                  Consistent split across all breakpoints with images taking
                  60% and always filling the viewport height.
                </p>
              </div>
              <div>
                <h3 className="text-[27px] lg:text-[45px] font-semibold mb-4">Scroll Hijacking</h3>
                <p className="text-[15px] lg:text-[20px] text-gray-600 leading-relaxed">
                  Smooth center-point activation that locks scrolling while
                  transitioning through slides.
                </p>
              </div>
              <div>
                <h3 className="text-[27px] lg:text-[45px] font-semibold mb-4">Reusable Components</h3>
                <p className="text-[15px] lg:text-[20px] text-gray-600 leading-relaxed">
                  Wrapper and ScrollSection components can be mixed and matched
                  for different case study pages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <section className="py-20 border-t border-gray-200 px-16">
          <div className="text-center">
            <Link
              href="/"
              className="inline-block text-lg font-medium hover:underline"
            >
              View More Projects →
            </Link>
          </div>
        </section>
      </div>
    </CaseStudyWrapper>
  );
}
