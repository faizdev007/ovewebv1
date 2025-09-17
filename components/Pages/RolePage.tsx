'use client';

import FaqSection from "@/components/main/Homepage/faq";
import Image from "next/image";
import HireBy from "@/components/main/Homepage/hireby";
import DevelopersSlider from "@/components/main/Homepage/developer";
import HeroSection from "@/components/main/Hire/Hero";
import HireThroughOVE from "@/components/main/Hire/HireThroughOVE";
import Expertise from "@/components/main/Hire/Expertise";
import CTA from "@/components/main/Hire/CTA";
import WSF from "@/components/main/Hire/WhySearchFor";
import CTable from "@/components/main/Hire/CompairTable";
import Client from "@/components/main/Hire/Client";

export default function RolePage(PageData:any) {

  if (!PageData) {
    // Loading skeleton or fallback
    return (
      <section className="bg-black py-12 xl:h-full lg:flex gap-6 dark:bg-gray-800 text-white relative px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex lg:w-[60%] flex-col h-full lg:mt-6 justify-between gap-8 items-center md:items-start py-6">
          <div className="h-10 w-3/4 bg-gray-700 rounded animate-pulse" />
          <div className="space-y-2 w-full">
            <div className="h-4 bg-gray-700 rounded animate-pulse w-full" />
            <div className="h-4 bg-gray-700 rounded animate-pulse w-5/6" />
            <div className="h-4 bg-gray-700 rounded animate-pulse w-2/3" />
          </div>
          <div className="h-12 w-48 bg-gray-700 rounded-lg animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <div className="relative 2xl:top-0">
      <HeroSection hire={PageData?.PageData} />
      <DevelopersSlider hire={PageData?.PageData} />
      <HireThroughOVE hiringProcess={PageData?.PageData?.hiringProcess} />

      <div className="relative">
        <div className="bg-lightblack dark:hidden">
          <Image src="/assets/white.png" alt="bg" width={1000} height={1000} className="w-full" />
        </div>
        <Expertise Expertise={PageData?.PageData?.expertise} />
      </div>

      <div className="relative h-full bg-oveblue w-full">
        <div className="bg-white dark:hidden">
          <Image src={'/assets/oveblue.png'} alt="compare" width={1000} height={1000} className="w-full" />
        </div>
        <CTA CTA={PageData?.PageData?.cta?.one} />
      </div>

      <div className="relative">
        <div className="bg-oveblue dark:hidden">
          <Image src={'/assets/white.png'} alt="compare" width={1000} height={1000} className="w-full" />
        </div>
        <WSF WhyHire={PageData?.PageData?.whyHire} />
      </div>

      <div className="relative blackgradiant">
        <div className="bg-white dark:hidden">
          <Image src={'/assets/black.png'} alt="compare" width={1000} height={1000} className="w-full" />
        </div>
        <CTable PriceTable={PageData?.PageData?.priceTable} />
      </div>

      <div className="relative">
        <div className="bg-lightblack dark:hidden">
          <Image src={'/assets/black.png'} alt="compare" width={1000} height={1000} className="w-full" />
        </div>
        <Client Testimonials={PageData?.PageData?.testimonial}/>
      </div>

      <HireBy />

      <div className="relative h-full bg-oveblue w-full">
        <div className="bg-black dark:hidden">
          <Image src={'/assets/oveblue.png'} alt="compare" width={1000} height={1000} className="w-full" />
        </div>
        <CTA CTA={PageData?.PageData?.cta?.two} />
      </div>

      <div className="relative">
        <div className="bg-oveblue dark:hidden">
          <Image src={'/assets/offWhite.png'} alt="compare" width={1000} height={1000} className="w-full" />
        </div>
        <FaqSection FAQ={PageData?.PageData?.faq} />
      </div>
    </div>
  );
}
