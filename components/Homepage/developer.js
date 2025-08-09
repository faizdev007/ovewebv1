'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='absolute z-20 h-full top-0 p-3 end-0 flex justify-end items-center' style={{background: `linear-gradient(270deg,rgba(2, 0, 36, 1) 0%, rgba(0, 0, 0, 0) 100%)`}}>
      <div
        className={`bg-oveblue/70 w-11 h-11 rounded-full !flex !justify-center !items-center hover:bg-oveblue/90 !border border-blue-800 text-white cursor-pointer`}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 text-white">
          <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className='absolute z-20 h-full top-0 p-3 start-0 flex justify-end items-center' style={{background: `linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(0, 0, 0, 0) 100%)`}}>
      <div
        className={`bg-oveblue/70 w-11 h-11 rounded-full opacity-90 !flex !justify-center !items-center hover:!bg-blue-600 !border !border-blue-800 text-white cursor-pointer`}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export default function DevelopersSlider() {

  const [settings, setSettings] = useState(null);

  const developers = [
    { name: 'Aisha', profile:'Full-Stack Developer', describe:'Expert in serverless full-stack application development, focusing on real-time interactive apps.', previous:'/assets/previous/idp.webp', image: '/assets/developer/Aisha.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/MongoDB.webp','/assets/hireby/skills/Express.webp','/assets/hireby/skills/React.webp'] },
    { name: 'Ethan', profile:'AI RESEARCH ENG', describe:'Develops cloud-native, containerized backend services.', previous:'/assets/previous/linktree.webp', image: '/assets/developer/Ethan.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/Python.webp','/assets/hireby/skills/Scikit-Learn.webp','/assets/hireby/skills/MLflow.webp','/assets/hireby/skills/Docker.webp'] },
    { name: 'Tanvi', profile:'BACK-END DEVELOPER', describe:'Develops cloud-native, containerized backend services.', previous:'/assets/previous/gamma.webp', image: '/assets/developer/Tanvi.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/Go.webp','/assets/hireby/skills/Kubernetes.webp','/assets/hireby/skills/PostgreSQL.webp'] },
    { name: 'Renu', profile:'ML ENGINEER', describe:'Fine-tunes LLMs for advanced NLP use cases.', previous:'/assets/previous/airwallex.webp', image: '/assets/developer/Renu.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/Python.webp','/assets/hireby/skills/PyTorch.webp','/assets/hireby/skills/Hugging Face.webp'] },
    { name: 'Alexander', profile:'Full-Stack Developer', describe:'Builds scalable full-stack apps with modern JS frameworks.', previous:'/assets/previous/afterplay.webp', image: '/assets/developer/Alexander.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/Ruby on Rails.webp','/assets/hireby/skills/React.webp','/assets/hireby/skills/PostgreSQL.webp'] },
    { name: 'Miguel', profile:'FULL-STACK DEVELOPER', describe:'Full-stack engineer with deep Ruby on Rails expertise.', previous:'/assets/previous/tesco.webp', image: '/assets/developer/Miguel.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/Ruby on Rails.webp','/assets/hireby/skills/React.webp','/assets/hireby/skills/PostgreSQL.webp'] },
    { name: 'Jose', profile:'ML OPS ENGINEER', describe:'Automates ML pipelines and deploys models at scale.', previous:'/assets/previous/atlassian.webp', image: '/assets/developer/Jose.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/Python.webp','/assets/hireby/skills/Kubeflow.webp','/assets/hireby/skills/MLflow.webp'] },
    { name: 'Ella', profile:'FRONT-END DEVELOPER', describe:'Creates pixel-perfect UI with seamless user experience.', previous:'/assets/previous/kainos.webp', image: '/assets/developer/Ella.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/React.webp','/assets/hireby/skills/Vue.js.webp','/assets/hireby/skills/SASS.webp'] },
    { name: 'Karthik', profile:'AI ENGINEER', describe:'Designs and deploys deep learning pipelines for computer vision in production.', previous:'/assets/previous/canva.webp', image: '/assets/developer/Karthik.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/Python.webp','/assets/hireby/skills/TensorFlow.webp','/assets/hireby/skills/Keras.webp'] },
    { name: 'Preeda', profile:'ML ENGINEER', describe:'Optimizes deep learning models for edge devices.', previous:'/assets/previous/bhp.webp', image: '/assets/developer/Preeda.webp', color: '#3AA0FF', techstack: ['/assets/hireby/skills/Python.webp','/assets/hireby/skills/Lightning.webp','/assets/hireby/skills/ONNX.webp'] },
  ];

  const defaultSettings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 5,  // Default value for larger screens
      slidesToScroll: 1,
      swipeToSlide: true,
      initialSlide: 0,
      className: "center",
      centerPadding: "60px",
      centerMode: true,
      pauseOnHover: true,
      waitForAnimate: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 2080) {
        setSettings({ ...defaultSettings, slidesToShow: 9, slidesToScroll: 1 });
      } else if (width >= 1680) {
        setSettings({ ...defaultSettings, slidesToShow: 7, slidesToScroll: 1 });
      } else if (width >= 1590) {
        setSettings({ ...defaultSettings, slidesToShow: 6, slidesToScroll: 1 });
      } else if (width >= 1280) {
        setSettings({ ...defaultSettings, slidesToShow: 5, slidesToScroll: 1 });
      } else if (width >= 1080) {
        setSettings({ ...defaultSettings, slidesToShow: 4, slidesToScroll: 1 });
      } else if (width >= 769) {
        setSettings({ ...defaultSettings, slidesToShow: 3, slidesToScroll: 1 });
      } else if (width >= 426) {
        setSettings({ ...defaultSettings, slidesToShow: 2, slidesToScroll: 1 });
      } else if (width >= 350) {
        setSettings({ ...defaultSettings, slidesToShow: 1, slidesToScroll: 1 });
      } else {
        setSettings({ ...defaultSettings, slidesToShow: 1, slidesToScroll: 1, centerMode: false});
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially to set the correct state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  return (
    <section className={`bg-white dark:bg-gray-700 relative px-4 py-12 sm:px-6 lg:px-8 mx-auto`}>
      <Image loading='lazy' width={100} height={100} className='absolute hidden object-cover bottom-0 w-full start-0 end-0' src={'/assets/cloudbg.webp'} alt="cloudbg"/>
      <h2 className="xl:text-6xl md:text-4xl text-3xl font-bold text-center mb-12">Meet Our Developers</h2>
      <div className={`transform relative bg-black/90 rounded overflow-hidden dark:bg-gray-800 rounded-md mx-auto`}>
        <div className='slider-container relative z-10'>
          {settings ? 
          <Slider {...settings}>
              {developers.map((dev, index) => (
                <div key={index} className='px-1 py-2'>
                  <div className={`bg-oveblue gap-4 flex flex-col justify-between mt-25 aspect-[1/1.2] text-white relative rounded-xl shadow-md animate-fade-up animate-once animate-ease-linear animate-delay-${index}00 hover:shadow-lg`} style={{border:`3px solid ${dev.color}`}}>
                    <div className="relative w-2/3 flex items-center justify-center aspect-[3/1] mx-auto">
                      <div className='overflow-hidden absolute -top-20 border border-gray-800 z-20 rounded-full absolute aspect-[1/1]'>
                        {/* Profile Image with Border and Hover Effect */}
                        <Image
                          loading="eager"
                          src={dev.image}
                          alt={dev.name}
                          width={300}
                          height={300}
                          decoding="async"
                          className="w-38 h-38 mx-auto object-cover transform transition-all duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className='p-2 flex flex-col gap-3'>
                      <div className='space-y-2'>
                        <div className='hidden text-center gap-2 md:gap-0 justify-center'>
                          <div className='border border-white flex gap-2 items-center px-4 rounded-full py-1 bg-white text-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                            </svg>
                            <span className='text-sm font-semibold uppercase'>
                              {dev.previous}
                            </span>
                          </div>
                        </div>
                        <div className='flex flex-col text-center gap-0'>
                          <h3 className="font-semibold text-xl text-ellipsis overflow-hidden text-clip">{dev.name}</h3>
                          <p className="text-sm overflow-hidden text-ellipsis text-clip text-white/80">{dev.profile}</p>
                        </div>
                        <div className='overflow-hidden'>
                          <div className="flex flex-wrap w-full gap-1 h-[60px] text-xs items-center justify-center">
                            {dev.techstack.length > 0 && dev.techstack.map((items, index)=>(
                              <span key={index} className='border border-gray-100 rounded-full px-2 py-1'>{items.split('/').pop().replace('.webp', '')}</span>
                            ))}
                          </div>
                        </div>
                        <div className='flex flex-col text-center'>
                          <p className="text-white/60 mb-1 font-bold">PREVIOUSLY</p>
                          <div className='flex justify-center items-center aspect-[4/1] h-12'>
                            <Image loading="eager" fetchPriority="high" decoding="async" width={300} height={300} className="object-container w-auto h-12 mb-2" src={dev.previous} alt={dev.previous.split('/').pop().replace('.webp', '')}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider> 
          : 
          <div className="flex flex-col items-center justify-center p-4">
            <div className="loading-text">Loading...</div>
            <div className="loading-spinner"></div>
          </div>}
        </div>
      </div>
    </section>
  );
}
