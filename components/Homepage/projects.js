'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRef, useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    tag: 'BUSINESS INTELLIGENCE',
    features: [
      { heading: 'The President’s Club" BI System for Flow', text: 'Flow, a major Caribbean telco operating across 15 markets, lacked visibility into retail performance following its merger. We developed a smart Business Intelligence platform' },
    ],
    lists:[
      'Unified KPIs across 200+ retail locations',
      'Executive BI dashboard for real-time insights',
      'Store & staff performance tracking',
      'Visual reports for faster decisions',
      'Data-driven coaching & resource allocation',
    ],
    image: '/assets/projects/mapleware.webp',
  },
  {
    tag: 'ENTERPRISE DEVOPS',
    features: [
      { heading: 'End-to-End Software Delivery Hub for Global Enterprises', text: 'We helped Plutora build a robust enterprise DevOps platform to unify release management, deployment planning, and test environment oversight. Designed for large-scale organizations' },
    ],
    lists:[
      'Centralized release & deployment',
      'Real-time dashboards & insights',
      'Automated testing with Cypress',
      'CI/CD integrated (Git, Jira, Jenkins)',
      'Cloud-native (AWS, Docker, K8s)',
      '2.5× releases, 85% faster coordination',
    ],
    image: '/assets/projects/plutora.webp',
  },
];

export default function OurProjectsSlider() {
  const prevProj = useRef(null);
  const nextProj = useRef(null);
  const [isSectionVisible, setIsSectionVisible] = useState(true);

  return (
    <section className="relative blackgradiant px-4 py-12 sm:px-6 lg:px-8 mx-auto dark:bg-gray-800 text-center">
      {/* Heading */}
      <h2 className="xl:text-6xl md:text-4xl text-3xl font-bold text-center mb-5 text-white">Things We’ve Shipped</h2>
      <p className="max-w-4xl mx-auto text-white mb-12">
        From rapid MVPs to enterprise-grade systems—here’s what happens when great teams build right.
      </p>

      <div className="relative container mx-auto">
        <Swiper
          modules={[Navigation,Autoplay]}
          autoplay={{ delay: 4000 }}
          navigation={{ prevEl: prevProj.current, nextEl: nextProj.current }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevProj.current;
            swiper.params.navigation.nextEl = nextProj.current;
            swiper.navigation.init();
            swiper.navigation.update();
            setIsSectionVisible(swiper.allowSlideNext);
          }}
          loop={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="lg:flex flex-col md:flex-row gap-6 items-stretch justify-center">
                {/* Left Box */}
                <div className="border border-gray-100 bg-white text-black rounded-md p-3 mb-2 lg:mb-0 w-full lg:w-1/3 aspect-[1/1] md:aspect-auto text-left">
                  <div className="h-full overflow-auto">
                    <span className="text-sm font-semibold bg-blue-600 text-white px-3 py-1 rounded-full inline-block mb-6">
                      {project.tag}
                    </span>
                    <div className=''>
                      {project.features.map((feature, i) => (
                        <div key={i} className="mb-4 flex flex-col gap-4">
                          <h3 className="font-semibold text-md mb-1">
                            {feature.icon} {feature.heading}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-black">{feature.text}</p>
                          <div className=''>
                            <ul className="list-disc ml-6 space-y-2">
                              {project.lists.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="bg-white w-full lg:w-2/3 aspect-[2/1] flex items-center justify-center rounded-md border border-black text-2xl font-bold text-black">
                  <Image src={project.image} width={1000} height={800} alt={project.tag} className="object-contain h-full w-full" />
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Arrows */}
          {isSectionVisible && 
          <div className="hidden md:flex relative justify-center z-20 items-center text-white gap-6 mt-6">
            <button ref={prevProj} aria-label='prevproj'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
              </svg>
            </button>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 20.247 6-16.5" />
              </svg>
            </div>
            <button ref={nextProj} aria-label='nextproj'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>
          }
        </Swiper>

      </div>
    </section>
  );
}
