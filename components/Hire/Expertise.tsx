'use client';

// import Image from "next/image";
import { useState } from "react";

type HireType = {
  id: number;
  slug: string;
  title?: { rendered: string };
  content?: { rendered: string };
  _embedded?: any;
};

type ExpertiseSectionProps = {
  hire: HireType; // 👈 lower camelCase prop name
};

const listinfos = [
  { title: "Data Science", description: "Data analysis, processing, ML, and more." },
  { title: "Custom Python Web Application Development", description: "Scalable apps using Django/Flask." },
  { title: "Enterprise Python Applications", description: "Workflow automation & business processes." },
  { title: "Python Support and Maintenance", description: "Ongoing support, optimization, maintenance." },
  { title: "Machine Learning with Python", description: "Build & deploy ML models in production." },
  { title: "Python Migration & Integration", description: "Migrate to Python and integrate systems." },
];

export default function Expertise({ hire }: ExpertiseSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const roleTitleHTML = hire?.title?.rendered ?? "Full-Stack Developer";

  return (
    <section className="bg-gradient pb-12 flex flex-col gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
        {/* Main Header */}
        <div className="lg:flex relative z-20 gap-2 justify-between">
            <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold">
                Expertise Of Our{" "}
                <span dangerouslySetInnerHTML={{ __html: roleTitleHTML }} />
            </h2>
            <span dangerouslySetInnerHTML={{ __html: hire }} />
            <p className="mt-4 text-lg mb-4">
                Our dedicated Python developers engineer robust web solutions across industries. Here’s a quick overview of the breadth of expertise our team brings.
            </p>
            </div>

            <div className="lg:w-1/2 w-full blackgradiant text-white md:p-6 p-2 rounded-lg shadow-md">
            <div className="w-full space-y-4">
                {listinfos.map((item, index) => {
                const open = activeIndex === index;
                return (
                    <div
                    key={index}
                    className={`border-oveblue bg-boxFill rounded py-2 px-4 shadow-sm shadow-oveblue transition-all cursor-pointer ${open ? "border-b-4" : ""}`}
                    onClick={() => toggle(index)}
                    aria-expanded={open}
                    >
                    <div className="flex justify-between items-center gap-2">
                        <p className="font-bold md:text-xl">{item.title}</p>
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

                    <div className={`overflow-hidden transition-all border-t border-white duration-500 ease-in-out ${open ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                        <p className="text-gray-300 dark:text-white pt-2 md:text-lg text-sm">
                        {item.description}
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
