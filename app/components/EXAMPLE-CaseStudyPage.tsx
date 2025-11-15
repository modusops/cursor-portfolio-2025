// EXAMPLE: How to use CaseStudyWrapper and CaseStudyScrollSection
// Copy this pattern to create your case study pages

import { CaseStudyWrapper } from './CaseStudyWrapper';
import { CaseStudyScrollSection } from './CaseStudyScrollSection';
import Image from 'next/image';

export default function ExampleCaseStudy() {
  // Define your slides for each scroll section
  const introSlides = [
    {
      title: 'Project Overview',
      description: 'This is the first slide introducing the project...',
      media: '/your-image-1.jpg',
      isVideo: false,
    },
    {
      title: 'The Challenge',
      description: 'Here we explain the problem we were solving...',
      media: '/your-image-2.jpg',
      isVideo: false,
    },
    {
      title: 'Our Solution',
      description: 'This is how we approached the solution...',
      media: '/your-video-1.mp4',
      isVideo: true,
    },
  ];

  const processSlides = [
    {
      title: 'Research Phase',
      description: 'We started with user research and analysis...',
      media: '/research-image.jpg',
      isVideo: false,
    },
    {
      title: 'Design Iteration',
      description: 'Multiple rounds of prototyping and testing...',
      media: '/design-process.jpg',
      isVideo: false,
    },
  ];

  return (
    <CaseStudyWrapper>
      {/* Hero Section - regular content */}
      <section className="min-h-screen flex items-center justify-center px-16 bg-[#F8F8F8]">
        <div className="max-w-4xl text-center">
          <h1 className="text-8xl font-bold mb-8">Case Study Title</h1>
          <p className="text-2xl text-gray-600">
            A brief tagline about your project
          </p>
        </div>
      </section>

      {/* First Scroll Hijacking Section */}
      <CaseStudyScrollSection slides={introSlides} />

      {/* Regular Text Section - no hijacking */}
      <section className="min-h-screen flex items-center px-16">
        <div className="grid grid-cols-10 gap-12 w-full">
          <div className="col-start-1 col-end-5">
            <h2 className="text-sm uppercase text-gray-500 mb-4">The Context</h2>
          </div>
          <div className="col-start-5 col-end-11">
            <p className="text-4xl font-light leading-relaxed">
              Some important context about the project that doesn't need
              scroll hijacking...
            </p>
          </div>
        </div>
      </section>

      {/* Second Scroll Hijacking Section */}
      <CaseStudyScrollSection slides={processSlides} />

      {/* Results Section - regular content */}
      <section className="min-h-screen flex items-center px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold mb-12">Results</h2>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-5xl font-bold mb-4">50%</h3>
              <p className="text-lg text-gray-600">Increase in engagement</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-4">2x</h3>
              <p className="text-lg text-gray-600">Faster load times</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-4">95%</h3>
              <p className="text-lg text-gray-600">User satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </CaseStudyWrapper>
  );
}

// NOTES:
// - Wrapper handles mobile blocking automatically
// - Each CaseStudyScrollSection can have different number of slides
// - Mix scroll sections with regular sections as needed
// - 60/40 split and 100vh images are automatic in CaseStudyScrollSection
// - Pagination dots appear automatically on the right
