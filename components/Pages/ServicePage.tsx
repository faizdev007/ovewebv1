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
    // console.log(pageData?.pageData);
    // return;
  return (
    <div className="">
      <HeroSection HeroData={pageData?.pageData?.HeroSection}/>
      <ClientScroll/>
      <ImageSteps StepsBlock={pageData?.pageData?.stepCard}/>
      <div id="SWS" className="overflow-y-scroll scroll-mt-18 scroll-smooth">
        <ServicessArea ServicessArea={pageData?.pageData?.hoverCards?.group2}/>
      </div>
      <VACTA CTA={pageData?.pageData?.cta?.one}/>
      <SkillsVA Skills={pageData?.pageData?.cursorBlock}/>
      <div id="SS" className="overflow-y-scroll scroll-mt-18 scroll-smooth bg-oveblue/10">
        <ClientSuccessStories ClientStories={pageData?.pageData?.clientStories}/>
        <ClientReview Testimonials={pageData?.pageData?.testimonial}/>
      </div>
      <VACTA CTA={pageData?.pageData?.cta?.two}/>
      <div id="WWS" className="overflow-y-scroll scroll-mt-18 scroll-smooth">
        <ServiceWhyChooseUs WhyChooseUs={pageData?.pageData?.whyChoose}/>
      </div>
      <ImagineTask Information={pageData?.pageData?.infoCards}/>
      <div id="IWS" className="overflow-y-scroll scroll-mt-18 scroll-smooth">
        <RoleWeHired RoleBaseHired={pageData?.pageData?.hoverCards?.group1}/>
      </div>
      <WhyYourShouldChoose/>
      <VAWork StoryBlock={pageData?.pageData?.storyBlock}/>
      <VACTA2 CTA2={pageData?.pageData?.cta?.three}/>
      <div id="FAQ" className="overflow-y-scroll scroll-mt-18 scroll-smooth">
        <FaqSection FAQ={pageData?.pageData?.faq}/>
      </div>
      
      {/* Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Hello from Modal 🎉</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This is a reusable modal component in Next.js.
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}
