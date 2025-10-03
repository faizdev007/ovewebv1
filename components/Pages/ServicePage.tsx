'use client';
import FaqSection from "@/components/main/Homepage/faq";
import HeroSection from "@/components/virtualassistance/HeroSection";
import ImagineTask from "@/components/virtualassistance/ImagineTask";
import ServicessArea from "@/components/virtualassistance/ServicessArea";
import SkillsVA from "@/components/virtualassistance/SkillsVA";
import VACTA from "@/components/virtualassistance/VACTA";
import VACTA2 from "@/components/virtualassistance/VACTA2";
import VAStapes from "@/components/virtualassistance/VAStapes";
import VAWork from "@/components/virtualassistance/VAWork";
import ServiceWhyChooseUs from "@/components/virtualassistance/WhyChooseUs";
import WhyYourShouldChoose from "@/components/virtualassistance/WhyYouShoudChoose";
import { useState } from "react";
import Modal from "../virtualassistance/VAModal";
import ClientSuccessStories from "../virtualassistance/ClientSuccessStories";
import RoleWeHired from "../virtualassistance/RoleWeHired";
import ImageSteps from "../virtualassistance/ImageSteps";
import ClientReview from "../virtualassistance/ClientReview";
import ClientScroll from "../virtualassistance/ClientScroll";

// src/app/(services)/services/page.tsx
export default function ServicePage(pageData:any) {
  
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="">
      <HeroSection HeroData={pageData?.pageData?.HeroSection}/>
      <ClientScroll/>
      <ImageSteps StepsBlock={pageData?.pageData?.stepCard}/>
      <div id="SWS" className="scroll-mt-18 scroll-smooth">
        <ServicessArea ServicessArea={pageData?.pageData?.hoverCards?.group2}/>
      </div>
      <VACTA CTA={pageData?.pageData?.cta?.one}/>
      <SkillsVA Skills={pageData?.pageData?.cursorBlock}/>
      <div id="SS" className="scroll-mt-18 scroll-smooth bg-oveblue/10">
        <ClientSuccessStories ClientStories={pageData?.pageData?.clientStories}/>
        <ClientReview Testimonials={pageData?.pageData?.testimonial}/>
      </div>
      <VACTA CTA={pageData?.pageData?.cta?.two}/>
      <div id="WWS" className="scroll-mt-18 scroll-smooth">
        <ServiceWhyChooseUs WhyChooseUs={pageData?.pageData?.whyChoose}/>
      </div>
      <ImagineTask Information={pageData?.pageData?.infoCards}/>
      <div id="IWS" className="scroll-mt-18 scroll-smooth">
        <RoleWeHired RoleBaseHired={pageData?.pageData?.hoverCards?.group1}/>
      </div>
      <WhyYourShouldChoose/>
      <VAWork StoryBlock={pageData?.pageData?.storyBlock}/>
      <VACTA2 CTA2={pageData?.pageData?.cta?.three}/>
      <div id="FAQ" className="scroll-mt-18 scroll-smooth">
        <FaqSection FAQ={pageData?.pageData?.faq}/>
      </div>
    </div>
  );
}
