'use client';

// import Image from "next/image";
import { useState } from "react";


const listinfos = [
  { question: "Data Science", answer: "Data analysis, processing, ML, and more." },
  { question: "Custom Python Web Application Development", answer: "Scalable apps using Django/Flask." },
  { question: "Enterprise Python Applications", answer: "Workflow automation & business processes." },
  { question: "Python Support and Maintenance", answer: "Ongoing support, optimization, maintenance." },
  { question: "Machine Learning with Python", answer: "Build & deploy ML models in production." },
  { question: "Python Migration & Integration", answer: "Migrate to Python and integrate systems." },
];

export default function ServiceWhyChooseUs( WhyChooseUs : any) {

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const roleTitleHTML = WhyChooseUs?.WhyChooseUs?.title ?? "Why You Should Choose OVE";

  const features = WhyChooseUs?.WhyChooseUs?.features ?? listinfos;

  return (
    <section className="bg-gradient py-12 dark:py-12 flex flex-col gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Main Header */}
        <div className="text-center hidden max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold">
                <span dangerouslySetInnerHTML={{ __html: roleTitleHTML }} />
            </h2>
            <div className="mt-4 text-lg mb-4">
                <span dangerouslySetInnerHTML={{ __html: WhyChooseUs?.WhyChooseUs?.description  as string ?? 'This is text will'}} />
            </div>
        </div>
        <div className="lg:flex relative z-20 gap-2 justify-between">
            <div className="lg:w-1/2 flex flex-col justify-center items-center">
                <div className="">
                    <h2 className="text-2xl font-bold">
                        <span dangerouslySetInnerHTML={{ __html: roleTitleHTML }} />
                    </h2>
                    <div className="mt-4 text-lg mb-4">
                        <span dangerouslySetInnerHTML={{ __html: WhyChooseUs?.WhyChooseUs?.description  as string ?? 'This is text will'}} />
                    </div>
                </div>
                <img src={WhyChooseUs?.WhyChooseUs?.sideImage ?? '/assets/virtualassistance/WhyOVE.webp'} alt="why block Image" className="w-2/3 h-auto"/>
            </div>

            <div className="lg:w-1/2 w-full text-black md:p-6 p-2">
                <div className="w-full space-y-4">
                    {features.map((item:any, index:number) => {
                    const open = activeIndex === index;
                    return (
                        <div
                            key={index}
                            className={`border-oveblue bg-oveblue/10 rounded py-2 px-4 shadow-sm shadow-oveblue transition-all cursor-pointer ${open ? "border-b-4" : ""}`}
                            onClick={() => toggle(index)}
                            aria-expanded={open}
                            >
                            <div className="flex justify-between items-center gap-2">
                                <p className="font-bold md:text-xl">{item?.question}</p>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className={`size-6 text-oveblue transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>

                            <div className={`overflow-hidden transition-all border-t border-black duration-500 ease-in-out ${open ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                                <p className="pt-2 md:text-lg text-sm">
                                <span dangerouslySetInnerHTML={{__html: item?.answer || ""}}/>
                                </p>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
  );
}
