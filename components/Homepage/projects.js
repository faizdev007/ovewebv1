'use client';

import React, { useEffect } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 

import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='absolute z-20 h-full top-0 p-3 -end-5 flex justify-end items-center'>
      <div
        className={`bg-oveblue/80 w-12 h-12 rounded-full !flex !justify-center !items-center hover:bg-oveblue/90 border-3 border-white cursor-pointer font-bold`}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 text-white drop-shadow-lg">
          <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='absolute z-20 h-full top-0 p-3 -start-5 flex justify-end items-center'>
      <div
        className={`bg-oveblue/80 w-12 h-12 rounded-full opacity-90 !flex !justify-center !items-center hover:!bg-blue-600 border-3 border-white cursor-pointer font-bold`}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 text-white drop-shadow-lg">
          <path fillRule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

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
  const [settings, setSettings] = React.useState(null);

  const defaultSettings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 1,  // Default value for every screen size
      slidesToScroll: 1,
      swipeToSlide: true,
      initialSlide: 0,
      className: "center",
      centerPadding: "60px",
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
  };


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 480) {
        setSettings({ ...defaultSettings, slidesToShow: 1, slidesToScroll: 1 });
      } else {
        setSettings({ ...defaultSettings, slidesToShow: 1, slidesToScroll: 1, dots: true, arrows: false });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially to set the correct state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative blackgradiant px-4 pb-12 sm:px-6 lg:px-8 mx-auto dark:bg-gray-800 text-center">
      {/* Heading */}
      <h2 className="xl:text-6xl md:text-4xl text-3xl font-bold text-center mb-5 text-white">Things We’ve Shipped</h2>
      <p className="max-w-4xl mx-auto text-white mb-12">
        From rapid MVPs to enterprise-grade systems—here’s what happens when great teams build right.
      </p>

      <div className="relative container mx-auto">
        {settings ? 
          <Slider {...settings}>
            {projects.map((project, index) => (
                <div key={index} className="relative md:px-4 px-1">
                  <div className="lg:flex flex-col md:flex-row gap-6 items-stretch justify-center">
                    {/* Left Box */}
                    <div className="border border-gray-100 bg-white text-black rounded-md p-3 mb-2 lg:mb-0 w-full lg:w-[40%] aspect-[1/1] md:aspect-auto text-left">
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
                    <div className="bg-white lg:w-[60%] border border-black flex font-bold items-center justify-center overflow-hidden rounded-md">
                      <Image loading='lazy' src={project.image} width={1000} height={800} alt={project.tag} className="object-contain h-full w-full" />
                    </div>
                  </div>
                </div>
            ))}
          </Slider> 
        : 
          <div className="flex flex-col items-center justify-center p-4">
            <div className="loading-text">Loading...</div>
            <div className="loading-spinner"></div>
          </div>
        }
      </div>
    </section>
  );
}
