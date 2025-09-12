'use client';

import { useState } from 'react';
import Image from 'next/image';

type Sfaq = {
  hire?:{
    faqQuestion?:string;
    faqAnswer?:string;
  }
}

const faqs = {
  0:{
    faqQuestion: 'How quickly can I hire a developer?',
    faqAnswer: 'We can share vetted developer profiles within 48 hours. Most clients finalize and onboard talent within 3–5 business days.',
  },
  2:{
    faqQuestion: 'What tech stacks do you support?',
    faqAnswer: 'We cover all major stacks — including MERN, MEAN, LAMP, Python, Java, .NET, mobile (iOS/Android/Flutter), DevOps, and cloud (AWS, Azure, GCP).',
  },
  3:{
    faqQuestion: 'Are your developers full-time employees or freelancers?',
    faqAnswer: 'All our resources are full-time, committed team members working exclusively on your project — not freelancers juggling multiple clients.',
  },
  4:{
    faqQuestion: 'Can I interview and test the developer before hiring?',
    faqAnswer: 'Absolutely. You can conduct interviews, assign test tasks, and choose only the developers who meet your expectations.',
  },
  5:{
    faqQuestion: 'How do I communicate with my developer?',
    faqAnswer: 'Directly via Slack, Zoom, or your preferred tools. You’re in full control — we’re here to support, not interfere.',
  },
  6:{
    faqQuestion: 'How do you ensure code quality and accountability?',
    faqAnswer: 'We provide access to Git repos, regular code reviews, and project management tools like Jira, Trello, or ClickUp for full transparency.',
  },
  7:{
    faqQuestion: 'Can I scale the team up or down anytime?',
    faqAnswer: 'Yes — our model allows you to scale on demand with no penalties or long-term contracts.',
  },
  8:{
    faqQuestion: 'Do you sign NDAs and contracts?',
    faqAnswer: 'Of course. We sign NDAs, MoUs, and project-specific agreements to ensure full confidentiality and legal compliance.',
  },
  9:{
    faqQuestion: 'Where are your developers located?',
    faqAnswer: 'Our talent is based across India and Southeast Asia — fluent in English and overlapping your working hours.',
  }
};  

export default function FaqSection({hire}:Sfaq) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqlist = hire ?? faqs;

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='pb-12 dark:py-12 relative bg-gray-100 dark:bg-gray-700'>
        <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <section className="relative px-4 py-6 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full hidden lg:w-1/3 justify-center">
            <Image
            src="/assets/faqvector.webp"
            alt="FAQ Character"
            width={400}
            height={400}
            className="object-contain"
            />
        </div>

        {/* Right FAQ */}
        <div className="w-full">
            <div className="space-y-4">
            {Object.values(faqlist).map((item, index) => (
                <div
                key={index}
                className={`border-2 bg-white border-oveblue hover:border-oveblue/50 px-4 rounded-2xl py-4 shadow-sm transition-all duration-20 cursor-pointer ${
                    activeIndex === index ? 'border-b-5' : ''
                }`}
                onClick={() => toggle(index)}
                >
                <div className="flex justify-between items-center gap-2">
                    <p className="font-bold md:text-xl text-black">{item.faqQuestion}</p>
                    <div className=''>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-7 text-oveblue font-bold transition-transform duration-300 ${
                          activeIndex === index ? 'rotate-135' : ''
                      }`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                </div>
                
                <div
                    className={`overflow-hidden transition-all border-t border-gray-400 duration-500 ease-in-out ${
                        activeIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                    >
                    <p className="text-gray-600 pt-2 md:text-lg text-sm">
                      <span dangerouslySetInnerHTML={{__html: item.faqAnswer || ""}}/>
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    </div>
  );
}
