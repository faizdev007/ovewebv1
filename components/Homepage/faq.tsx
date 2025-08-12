'use client';

import { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: 'How quickly can I hire a developer?',
    answer: 'We can share vetted developer profiles within 48 hours. Most clients finalize and onboard talent within 3–5 business days.',
  },
  {
    question: 'What tech stacks do you support?',
    answer: 'We cover all major stacks — including MERN, MEAN, LAMP, Python, Java, .NET, mobile (iOS/Android/Flutter), DevOps, and cloud (AWS, Azure, GCP).',
  },
  {
    question: 'Are your developers full-time employees or freelancers?',
    answer: 'All our resources are full-time, committed team members working exclusively on your project — not freelancers juggling multiple clients.',
  },
  {
    question: 'Can I interview and test the developer before hiring?',
    answer: 'Absolutely. You can conduct interviews, assign test tasks, and choose only the developers who meet your expectations.',
  },
  {
    question: 'How do I communicate with my developer?',
    answer: 'Directly via Slack, Zoom, or your preferred tools. You’re in full control — we’re here to support, not interfere.',
  },
  {
    question: 'How do you ensure code quality and accountability?',
    answer: 'We provide access to Git repos, regular code reviews, and project management tools like Jira, Trello, or ClickUp for full transparency.',
  },
  {
    question: 'Can I scale the team up or down anytime?',
    answer: 'Yes — our model allows you to scale on demand with no penalties or long-term contracts.',
  },
  {
    question: 'Do you sign NDAs and contracts?',
    answer: 'Of course. We sign NDAs, MoUs, and project-specific agreements to ensure full confidentiality and legal compliance.',
  },
  {
    question: 'Where are your developers located?',
    answer: 'Our talent is based across India and Southeast Asia — fluent in English and overlapping your working hours.',
  },
];

// {
//     question: 'What’s included in the AUD 999 management fee?',
//     answer: 'Everything: dedicated support, performance reviews, developer retention, reporting, time tracking',
//   },
// {
//     question: 'What happens if I’m not satisfied with a developer?',
//     answer: 'No problem — we offer a free replacement within 7 days, no questions asked.',
//   },

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='py-10 bg-gray-100 dark:bg-gray-700 py-12'>
        <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <section className="relative px-4 py-6 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full hidden lg:w-1/3 flex justify-center">
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
            {faqs.map((item, index) => (
                <div
                key={index}
                className={`border-2 bg-white border-oveblue hover:border-oveblue/50 px-4 rounded-2xl py-4 shadow-sm transition-all duration-20 cursor-pointer ${
                    activeIndex === index ? 'border-b-5' : ''
                }`}
                onClick={() => toggle(index)}
                >
                <div className="flex justify-between items-center gap-2">
                    <p className="font-bold md:text-xl text-black">{item.question}</p>
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
                    <p className="text-gray-600 pt-2 md:text-lg text-sm">{item.answer}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    </div>
  );
}
