'use client';

import '@/components/main/Homepage/customstyle.css';

import DevelopersSlider from "@/components/main/Homepage/developer";
import FaqSection from "@/components/main/Homepage/faq";
import Herosection from "@/components/main/Homepage/hero";
import HireBy from "@/components/main/Homepage/hireby";
import HiringProcess from "@/components/main/Homepage/hiringprocess";
import Loader from '@/components/main/Homepage/loader';
import OurProjectsSlider from "@/components/main/Homepage/projects";
import TrustedBySection from "@/components/main/Homepage/trustedby2";
import WhyChooseUs from "@/components/main/Homepage/whyus";
import Image from 'next/image';
import { useEffect, useState } from 'react';

type DeveloperItem = {
  id: number;
  slug: string;
  type: string;
  title: { rendered: string };
  content?: { rendered: string };
  featured_media: number;   // ✅ correct spelling
  roles: number[];          // usually array of term IDs
  _links?: any;
  acf?: any;
};

export default function Home() {
  const [developers, setDevelopers] = useState<DeveloperItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    const ac = new AbortController();

    (async () => {
      try {
        const res = await fetch(`/api/developers`, {
          signal: ac.signal,
          cache: 'no-store', // or remove to respect the route’s revalidate
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: DeveloperItem[] = await res.json();
        setDevelopers(data);
      } catch (e: any) {
        if (e.name !== 'AbortError') setError(e.message || 'Failed to load');
      }
    })();

    return () => ac.abort();
  }, []);

  if (loading){ 
    return (
    <>
      <Loader />
      <DevelopersSlider/>
    </>
    )
  };
  
  return (
    <>
      <Herosection/>

      {/* Render when data is ready */}
      <DevelopersSlider/>

      <HireBy/>
      <div className="relative">
        <div className="bg-black">
          <Image src={'/assets/gray.webp'} alt="compare" width={1000} height={1000} className="w-full dark:hidden"/>
        </div>
        <HiringProcess/>
      </div>
      <div className="relative">
        <div className='bg-gray-100'>
          <Image src={'/assets/black.png'} alt="compare" width={1000} height={1000} className="w-full dark:hidden"/>
        </div>
        <TrustedBySection/>
      </div>
      <div className="relative">
        <div className='bg-black'>
          <Image src={'/assets/gray.webp'} alt="compare" width={1000} height={1000} className="w-full dark:hidden"/>
        </div>
        <WhyChooseUs/>
      </div>
      <div className="relative">
        <div className="bg-gray-100">
          <Image src={'/assets/black.png'} alt="compare" width={1000} height={1000} className="w-full dark:hidden"/>
        </div>
        <OurProjectsSlider/>
      </div>
      <div className="relative">
        <div className='bg-lightblack'>
          <Image src={'/assets/gray.webp'} alt="compare" width={1000} height={1000} className="w-full dark:hidden"/>
        </div>
        <FaqSection/>
      </div>
    </>
  );
}
