import FaqSection from "@/components/main/Homepage/faq";
import HeroSection from "@/components/virtualassistance/HeroSection";
import ImagineTask from "@/components/virtualassistance/ImagineTask";
import Modal from "@/components/virtualassistance/modal";
import ServicessArea from "@/components/virtualassistance/ServicessArea";
import SkillsVA from "@/components/virtualassistance/SkillsVA";
import VACTA from "@/components/virtualassistance/VACTA";
import VACTA2 from "@/components/virtualassistance/VACTA2";
import VAStapes from "@/components/virtualassistance/VAStapes";
import VAWork from "@/components/virtualassistance/VAWork";
import ServiceWhyChooseUs from "@/components/virtualassistance/WhyChooseUs";
import WhyYourShouldChoose from "@/components/virtualassistance/WhyYouShoudChoose";

// src/app/(services)/services/page.tsx
export default function ServicesPage() {
  return (
    <>
      <HeroSection/>
      <VAStapes/>
      <VACTA/>
      <ServicessArea/>
      <ServiceWhyChooseUs/>
      <ImagineTask/>
      <ServicessArea/>
      <VACTA/>
      <SkillsVA/>
      <WhyYourShouldChoose/>
      <VAWork/>
      <VACTA2/>
      <FaqSection/>
      <Modal isOpen={false} onClose={() => {}}/>
    </>
  );
}
