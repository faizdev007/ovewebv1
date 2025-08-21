'use client';

import FaqSection from "@/components/Homepage/faq";
import TestimonialDev from "@/components/TestimonialDev";
import Image from "next/image";
import { useState } from 'react';
import Rating from "@/components/Rating";
import HireBy from "@/components/Homepage/hireby";
import DevelopersSlider from "@/components/Homepage/developer";
import HowItWorks from "@/components/HowItWorksSkillsPage";

export default function Skill()
{
    const [activeSection, setActiveSection] = useState(null);

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    
    const toggle = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const toggleSection = (section:any) => {
        setActiveSection(activeSection === section ? null : section);
    }

    const listinfos = [
        {
        "title": "Data Science",
        "description": "Data science with Python includes data analysis, data processing, machine learning, and more."
        },
        {
        "title": "Custom Python Web Application Development",
        "description": "Building scalable and high-performance web apps using Python web frameworks such as Django or Flask."
        },
        {
        "title": "Enterprise Python Applications",
        "description": "Development of enterprise-level applications for business processes and workflow automation."
        },
        {
        "title": "Python Support and Maintenance",
        "description": "Ongoing support, optimization, and maintenance for existing Python applications."
        },
        {
        "title": "Machine Learning with Python",
        "description": "Building machine learning models and deploying them in production using Python."
        },
        {
        "title": "Python Migration & Integration",
        "description": "Migrating applications to Python and integrating with other systems and platforms."
        }
    ];
    
    const data = {
        headers: ['Factors', 'Optimal Virtual Employee', 'Arc.dev', 'Uplers', 'Toptal'],
        badge: 'BEST VALUE',
        rows: [
        ['Starting Salary (Monthly)', '$1,500–$3,000', '$6,000–$10,000', '$4,000–$8,000', '$8,000–$12,000'],
        ['Licensing Cost\n(Hardware/Software)', 'Zero', 'Extra Cost', 'Extra Cost', 'Extra Cost'],
        ['Project Management Fee', 'Free', '$20–$35/hour', '$15–$30/hour', '$25–$45/hour'],
        ['Timesheet/Proof of Work', 'Advanced timesheet with screenshots', 'Advanced timesheet with screenshots', 'Advanced timesheet with screenshots', 'Advanced timesheet with screenshots'],
        ['AI & Human Vetting', 'AI screening + human evaluation', 'AI screening + human review', 'AI screening + human review', 'AI screening + human review'],
        ['Support & Timezone', 'Business hours support', 'Business hours support', 'Business hours support', 'Business hours support'],
        ['Time to Hire', '1–2 weeks', '2–4 weeks', '2–3 weeks', '1–3 weeks'],
        ['Management Fee', '$799 (Fixed Fee)', '15–30% of total bill', '10–25% of total bill', '20–40% of total bill']
        ]
    };

    const steps = [
        {
        step: 1,
        title: "Place a free Request",
        description: "Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.",
        imgSrc: "/assets/hire/step1.webp"
        },
        {
        step: 2,
        title: "Tell us about your needs",
        description: "Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.",
        imgSrc: "/assets/hire/step2.webp"
        },
        {
        step: 3,
        title: "Interview the best",
        description: "Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.",
        imgSrc: "/assets/hire/step3.webp"
        },
        {
        step: 4,
        title: "Onboard the choosen one",
        description: "Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.",
        imgSrc: "/assets/hire/step4.webp"
        }
    ];

    return(
        <>
            <div className="relative 2xl:top-0">
                <section className="bg-black xl:h-max lg:flex gap-2 dark:bg-gray-800 text-white relative px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="flex lg:w-[60%] flex-col h-full lg:mt-6 justify-between gap-8 items-center md:items-start py-6">
                        <h1 className="text-oveblue md:text-6xl text-4xl font-bold">Hire Full-Stack Developer</h1>
                        <p className="md:text-xl">Lorem ipsum dolor sit amete consectetur adipiscing elit seedo eiusmod tempor incididunt labore dolore magna aliqua eneom minim veniam quos nostrud exercitation ullamco laboris nisi ut aliquip. </p>
                        <button className="bg-oveblue p-2 rounded w-max md:text-xl hover:bg-blue-700 px-6 font-bold border-5 border-oveblue/90 cursor-pointer flex gap-2 items-center hover:border-oveblue/50">Hire Full-Stack Developer
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 font-bold">
                                <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="grid md:grid-cols-3 gap-2 w-full">
                            <div className="bg-boxFill flex md:block items-center gap-4 p-4 rounded-xl border border-oveblue drop-shadow-sm shadow-white">
                                <h3 className="text-xl font-bold">1.5K+</h3>
                                <p className="text-sm capitalize text-gray-400">fully vetted developers</p>
                            </div>
                            <div className="bg-boxFill flex md:block items-center gap-4 p-4 rounded-xl border border-oveblue drop-shadow-sm shadow-white">
                                <h3 className="text-xl font-bold">24 hours</h3>
                                <p  className="text-sm capitalize text-gray-400">average matching time</p>
                            </div>
                            <div className="bg-boxFill flex md:block items-center gap-4 p-4 rounded-xl border border-oveblue drop-shadow-sm shadow-white">
                                <h3 className="text-xl font-bold">2.3M hours</h3>
                                <p  className="text-sm capitalize text-gray-400">worked since 2015</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[40%] lg:flex hidden relative mb-5 justify-center">
                        <div className="z-30 flex flex-col relative justify-end">
                            <div className="absolute z-20 bottom-0">
                                <Image src={'/assets/hire/bg1.webp'} alt="PBG" width={500} height={500} className="rounded-e-2xl"/>
                            </div>
                            <div className="absolute top-50 start-0 w-24 h-24 z-40 rounded-full z-40 bg-white">
                                <Image loading="lazy" src={'/assets/hire/angular.webp'} alt="developer" width={500} height={500} className="object-container"/>
                            </div>
                            <Image loading="lazy" src={'/assets/hire/anjali.png'} alt="developer" width={500} height={500} className="relative z-30"/>
                            <div className="absolute border border-oveblue z-40 bg-boxFill bottom-0 end-0 p-4 rounded-xl shadow-sm drop-shadow">
                                <h3 className="md:text-xl font-bold">Anjali</h3>
                                <span className="text-xs font-bold md:text-sm">Senior Full-Stack Developer</span>
                                <p className="text-xs flex gap-1 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-oveblue">
                                        <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                                    </svg>
                                    Verified Profile
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <DevelopersSlider/>
                <HowItWorks/>
                <section className="hidden py-20 blackgradiant text-white flex flex-col gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                    <h2 className="md:mb-12 capitalize text-center font-bold md:text-4xl text-3xl">How to Hire Python developer through OVE</h2>
                    <div className="md:grid space-y-4 md:grid-cols-2 2xl:grid-cols-4 gap-6 2xl:gap-4 mb-6">
                        {steps.map((step, index) => (
                            <div key={index} className="flex aspect-[1/1] md:max-h-[300] w-full flex-col justify-center items-center relative items-center gap-3 bg-boxFill p-6 rounded-lg border border-oveblue hover:border-oveblue/50 transition-all duration-300">
                                <div className="relative w-max z-10 px-18 flex flex-col justify-center items-center">
                                    <span className="text-[150px] z-20 text-oveblue/50 absolute start-0 w-full h-full hover:scale-125 transition-all flex items-center">{step.step}</span>
                                    <Image alt="imge" src={step.imgSrc} width={400} height={400} className="w-32 h-auto rounded-md"/>
                                </div>
                                <h3 className="md:text-2xl text-center text-xl font-bold">{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <a href="/contact-us" className="border-4 border-oveblue bg-oveblue hover:bg-blue-700 hover:drop-shadow-lg p-2 rounded-md w-max xl:text-3xl md:text-xl text-white px-6 font-bold cursor-pointer">Hire With Confidence</a>
                    </div>
                </section>
                <div className="relative">
                    <div className="bg-black">
                        <Image src={'/assets/white.png'} alt="compare" width={1000} height={1000} className="w-full"/>
                    </div>
                    <section className="bg-gradient pb-12 flex flex-col gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                        {/* Main Header */}
                        <div className="lg:flex relative gap-2 justify-between">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold">Expertise Of Our Python Web Developers</h2>
                                <p className="mt-4 text-lg mb-4">
                                    Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped
                                    different types and sizes of businesses in diverse industries. You can have an overview of the broad
                                    range of expertise our Python developers in India possess.
                                </p>
                            </div>
                            <div className="lg:w-1/2 w-full blackgradiant text-white md:p-6 p-2 rounded-lg shadow-md">
                                <div className="w-full">
                                    <div className="space-y-4">
                                    {listinfos.map((item, index) => (
                                        <div
                                        key={index}
                                        className={` border-oveblue bg-boxFill rounded py-2 px-4 shadow-sm shadow-oveblue transition-all duration-20 cursor-pointer ${
                                            activeIndex === index ? 'border-b-4' : ''
                                        }`}
                                        onClick={() => toggle(index)}
                                        >
                                        <div className="flex justify-between items-center gap-2">
                                            <p className="font-bold md:text-xl">{item.title}</p>
                                            <div className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-6 text-oveblue transition-transform duration-300 ${
                                                activeIndex === index ? 'rotate-135' : ''
                                            }`}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                            </div>
                                        </div>
                                        
                                        <div
                                            className={`overflow-hidden transition-all border-t border-white duration-500 ease-in-out ${
                                                activeIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                            }`}
                                            >
                                            <p className="text-gray-300 dark:text-white pt-2 md:text-lg text-sm">{item.description}</p>
                                        </div>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                </div>
                <div className="relative h-full bg-oveblue w-full">
                    <div className="bg-white">
                        <Image src={'/assets/oveblue.png'} alt="compare" width={1000} height={1000} className="w-full"/>
                    </div>
                    <section className="text-white py-20 flex flex-col items-center gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                        <h2 className="lg:text-3xl text-2xl font-bold">Still Wasting Weeks Recruiting Python Developer ?</h2>
                        <p>Skip the hiring mess. Get top-tier python talent from us under 48 hours</p>
                        <div className="flex gap-3 items-center">
                            <a href={'/contact-us'} aria-label="contact" className="rounded-md border-3 flex items-center gap-2 border-black bg-gray-900 px-4 py-2 hover:bg-gray-700">Contact Us
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 font-bold">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </section>
                </div>
                <div className="relative">
                    <div className="bg-oveblue">
                        <Image src={'/assets/white.png'} alt="compare" width={1000} height={1000} className="w-full"/>
                    </div>
                    <section className="pb-12 z-20 flex flex-col items-center gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
                        <div className="lg:flex gap-4 items-center">
                            <div className="flex flex-col gap-6">
                                <h4 className="text-oveblue mb-8 capitalize font-bold text-4xl">Why search for Python programmers for hir through Optimal Virtual Employee ?</h4>
                                <p>If you’ve ever tried to hire remote developers you know the struggle. You can’t meet them in person, which makes assessing their real talents almost impossible. So, you end up with a churn rate that’s through the roof. Now, you’re spending all your time policing contractors or finding devs to hire.</p>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <Image src={'/assets/hire/choose.webp'} className="" alt="choose" width={300} height={300}/>
                            </div>
                        </div>
                        <div className="">
                            <div className="grid md:grid-cols-2 border-t gap-4 py-10">
                                <div className="text-3xl font-bold">Prime your hiring pipeline</div>
                                <div className="">Access a pool of 1300+ vetted, senior engineers so you can hire remote developers easier. Our always-on hiring pipeline means you never have to wait. Tell us your needs and we respond with a list of devs that meet your needs within 48 hours.</div>
                            </div>
                            <div className="grid md:grid-cols-2 border-t gap-4 py-10">
                                <div className="text-3xl font-bold">Save time on screening</div>
                                <div className="">Skip interviews with unfit devs with our pre-screened engineers. No matter what skill you need on your team, we have a dev who has proven their skills and ability to get things done to our trained vetting team, so you can hire with confidence.</div>
                            </div>
                            <div className="grid md:grid-cols-2 border-t gap-4 py-10">
                                <div className="text-3xl font-bold">Greatness guaranteed</div>
                                <div className="">You spend months to find the ‘right’ dev. And when they’re a bad fit, you have to start over. Our zero-risk replacement guarantee allows you to switch your dev for any reason. You ask, we deliver a new dev free of charge. It’s that easy.</div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="relative blackgradiant">
                    <div className="bg-white">
                        <Image src={'/assets/black.png'} alt="compare" width={1000} height={1000} className="w-full"/>
                    </div>
                    <section className="z-20 pb-12 text-white flex flex-col items-center gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                        <h2 className="text-[42px] font-bold">Still Wasting Weeks Recruiting Python Developer ?</h2>
                        <p className="text-[16px]">Skip the hiring mess. Get top-tier python talent from us under 48 hours</p>
                        <div className="overflow-x-hidden w-full table-auto">
                            <div className="overflow-x-auto bg-gray-900 text-white p-6 rounded-lg shadow">
                                <table className="min-w-[900px] w-full table-auto border-collapse">
                                    <thead>
                                    <tr>
                                        {data.headers.map((header, i) => (
                                        <th
                                            key={i}
                                            className={`py-4 px-6 text-left text-lg font-bold ${
                                            i === 0
                                            ? 'text-white relative border-gray-800 bg-gray-700 rounded-t-md'
                                            :
                                            i === 1 ? 'bg-oveblue text-white border-blue-700 rounded-t-lg relative' : 'border-x rounded-t-lg relative bg-gray-700 border-gray-800'
                                            }`}
                                        >
                                            {i === 1 && (
                                            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-xs px-2 py-1 rounded-full text-white font-semibold">
                                                {data.badge}
                                            </span>
                                            )}
                                            {header}
                                        </th>
                                        ))}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.rows.map((row, idx) => (
                                        <tr key={idx} className="border-t">
                                        {row.map((col, i) => (
                                            <td
                                            key={i}
                                            className={`py-4 px-6 align-top text-sm whitespace-pre-line ${
                                                i === 0
                                                ? ' font-semibold border-s border-b border-gray-700'
                                                : i === 1
                                                ? 'text-md border-x-2 border-oveblue border-b font-bold'
                                                : 'border-x border-b border-gray-700'
                                            } ${
                                                idx === data.rows.length - 1
                                                ? 'bg-gray-100 text-black font-bold'
                                                : ''
                                            }`}
                                            >
                                            {col}
                                            </td>
                                        ))}
                                        </tr>
                                    ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td className="font-semibold border-s border-b text-white border-gray-700"></td>
                                            <td className="text-black border-x-2 border-oveblue border-b-2 font-medium rounded-b">
                                                <div className="p-4 flex justify-center">
                                                    <button className="hover:bg-oveblue border-2 border-oveblue cursor-pointer rounded text-white text-sm font-semibold px-4 py-2">
                                                        Build Your Team!
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="text-white border-x border-b border-gray-700"></td>
                                            <td className="text-white border-x border-b border-gray-700"></td>
                                            <td className="text-white border-x border-b border-gray-700"></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="relative">
                    <div className="bg-lightblack">
                        <Image src={'/assets/black.png'} alt="compare" width={1000} height={1000} className="w-full"/>
                    </div>
                    <section className="pb-12 bg-black flex flex-col gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                        <h2 className="text-3xl xl:text-5xl mb-4 font-bold text-center text-white">Here are a few words shared by our Clients</h2>
                        <div className="h-20 aspect-[3/1] overflow-hidden">
                            <Image src={'/assets/google.webp'} alt="employee" width={500} height={500} className="mx-auto object-cover flex justify-center items-center w-32 aspect-[3/1] rounded-lg shadow-lg"/>
                            <div className="flex justify-center">
                                <Rating rating={4.5}/>
                            </div>
                        </div>
                        <TestimonialDev/>
                    </section>
                </div>
                <div className="py-12 bg-black">
                    <HireBy/>
                </div>
                <div className="relative h-full bg-oveblue w-full">
                    <div className="bg-black">
                        <Image src={'/assets/oveblue.png'} alt="compare" width={1000} height={1000} className="w-full"/>
                    </div>
                    <section className="text-white pb-20 flex flex-col items-center gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                        <h2 className="lg:text-3xl text-2xl font-bold">Still Wasting Weeks Recruiting Python Developer ?</h2>
                        <p>Skip the hiring mess. Get top-tier python talent from us under 48 hours</p>
                        <div className="flex gap-3 items-center">
                            <a href={'/contact-us'} aria-label="contact" className="rounded-md border-3 flex items-center gap-2 border-black bg-gray-900 px-4 py-2 hover:bg-gray-700">Contact Us
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 font-bold">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </section>
                </div>
                <div className="relative">
                    <div className="bg-oveblue">
                        <Image src={'/assets/offWhite.png'} alt="compare" width={1000} height={1000} className="w-full"/>
                    </div>
                    <div className="relative">
                        <FaqSection/>
                    </div>
                </div>
            </div>
        </>
    );
}