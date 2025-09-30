'use client';
import { useState } from "react";

const steps = [
  {
    title: "Principle 1: Transparency",
    description: `Achieve transparency in your team's productivity — without compromising privacy. That’s why Hubstaff offers the option to blur apps, URLs, and screenshots. Plus:
- No keystroke logging
- No email monitoring
- No access to cameras and webcams`,
    image: "/images/step1.png",
  },
  {
    title: "Principle 2: Access",
    description: "Description for Principle 2...",
    image: "/images/step2.png",
  },
  {
    title: "Principle 3: Control",
    description: "Description for Principle 3...",
    image: "/images/step3.png",
  },
];

export default function ImageSteps(StepsBlock:any) {
    let stepdata = StepsBlock?.StepsBlock?.cards ?? steps;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-12 dark:py-12 flex flex-col gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Main Header */}
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl">
                {StepsBlock?.StepsBlock?.title ?? 'Hire Virtual Assistant in'}
            </h2>
            <div className="mt-4 text-3xl font-bold mb-4">
                {StepsBlock?.StepsBlock?.subtitle ?? '3 Simple Steps'}
            </div>
        </div>
        <div className="md:flex gap-2">
            {/* Left Side - Steps */}
            <div className="md:w-1/2 flex items-center">
                <div className="w-full space-y-4">
                    {stepdata.map((item:any, index:number) => {
                    const open = activeIndex === index;
                    return (
                        <div
                            key={index}
                            className={`border-oveblue rounded py-2 px-4 shadow-sm shadow-oveblue transition-all cursor-pointer ${open ? "border-b-4" : ""}`}
                            onClick={() => {
                                toggle(index);
                                setOpenIndex(openIndex === index ? null : index);
                            }}
                            aria-expanded={open}
                            >
                            <div className="flex justify-between items-center gap-2">
                                <div className="font-bold md:text-xl flex gap-2"><span className="text-oveblue" dangerouslySetInnerHTML={{__html:item?.svg ?? ''}}/> Step {index+1} : {item?.title}</div>
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

                            <div className={`overflow-hidden transition-all border-t border-black duration-500 ease-in-out ${open ? "opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                                <div className="pt-2 md:text-md text-gray-700 text-sm">
                                    <span dangerouslySetInnerHTML={{__html: item?.info || ""}}/>
                                </div>
                                {/* Image inside tab on small screens */}
                                <div className="mt-4 md:hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="rounded-lg w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>

            {/* Right Side - Image for large screens */}
            <div className="hidden md:block md:w-1/2 relative rounded-lg">
                <div className="flex h-full w-full items-center justify-center">
                    {openIndex !== null && (
                        <img
                        key={openIndex} // 👈 important: forces React to remount the image on index change
                        src={stepdata[openIndex].image}
                        alt={stepdata[openIndex].title}
                        className="rounded-lg w-full p-1 object-contain aspect-video opacity-0 animate-fadeIn"
                        />
                    )}
                </div>
            </div>
        </div>
    </section>
  );
}
