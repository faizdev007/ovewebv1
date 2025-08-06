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

export default function Home() {
    
  return (
    <>
      <Herosection/>
      <DevelopersSlider/>
      <HireBy/>
      <HiringProcess/>
      <TrustedBySection/>
      <WhyChooseUs/>
      <OurProjectsSlider/>
      <FaqSection/>
    </>
  );
}
