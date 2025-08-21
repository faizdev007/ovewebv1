'use client';

import '../components/Homepage/customstyle.css';

import DevelopersSlider from "@/components/Homepage/developer";
import FaqSection from "@/components/Homepage/faq";
import Herosection from "@/components/Homepage/hero";
import HireBy from "@/components/Homepage/hireby";
import HiringProcess from "@/components/Homepage/hiringprocess";
import OurProjectsSlider from "@/components/Homepage/projects";
import TrustedBySection from "@/components/Homepage/trustedby2";
import WhyChooseUs from "@/components/Homepage/whyus";
import Image from 'next/image';

export default function Home() {
    
  return (
    <>
      <Herosection/>
      <DevelopersSlider/>
      <HireBy/>
      <div className="relative">
        <div className="bg-black">
            <Image src={'/assets/gray.webp'} alt="compare" width={1000} height={1000} className="w-full"/>
        </div>
        <HiringProcess/>
      </div>
      <div className="relative">
        <div className='bg-gray-100'>
          <Image src={'/assets/black.png'} alt="compare" width={1000} height={1000} className="w-full"/>
        </div>
        <TrustedBySection/>
      </div>
      <div className="relative">
        <div className='bg-black'>
          <Image src={'/assets/gray.webp'} alt="compare" width={1000} height={1000} className="w-full"/>
        </div>
        <WhyChooseUs/>
      </div>
      <div className="relative">
        <div className="bg-gray-100">
          <Image src={'/assets/black.png'} alt="compare" width={1000} height={1000} className="w-full"/>
        </div>
        <OurProjectsSlider/>
      </div>
      <div className="relative">
        <div className='bg-lightblack'>
          <Image src={'/assets/gray.webp'} alt="compare" width={1000} height={1000} className="w-full"/>
        </div>
        <FaqSection/>
      </div>
    </>
  );
}
