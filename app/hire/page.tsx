'use client';

import FaqSection from "@/components/Homepage/faq";
import Image from "next/image";
import { useState } from 'react';
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hire()
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
    return(
        <>
            <div className="relative -top-15 2xl:top-0">
                <section className="blackgradiant min-h-screen 2xl:h-max 2xl:h-[600] pt-16 lg:flex gap-2 dark:bg-gray-800 text-white relative px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="flex w-full flex-col h-full justify-between gap-8 items-center md:items-start py-6">
                        <h1 className="text-oveblue md:text-6xl text-3xl font-bold">Hire Full-Stack Developer</h1>
                        <p className="md:text-xl text-sm">Lorem ipsum dolor sit amete consectetur adipiscing elit seedo eiusmod tempor incididunt labore dolore magna aliqua eneom minim veniam quos nostrud exercitation ullamco laboris nisi ut aliquip. </p>
                        <button className="bg-blue-600 p-2 rounded w-max md:text-xl px-6 font-bold border-5 border-blue-100/0 cursor-pointer flex gap-2 items-center hover:border-blue-500/90">Hire Full-Stack Developer
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 font-bold">
                                <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="grid md:grid-cols-3 gap-2 w-full">
                            <div className="bg-gray-800 p-4 rounded-md border border-white">
                                <h3 className="xl:text-4xl text-3xl font-bold">1.5+</h3>
                                <p>Fully vetted Developer</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-md border border-white">
                                <h3 className="xl:text-4xl text-3xl font-bold">1.5+</h3>
                                <p>Fully vetted Developer</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-md border border-white">
                                <h3 className="xl:text-4xl text-3xl font-bold">1.5+</h3>
                                <p>Fully vetted Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:flex hidden relative justify-center">
                        <div className="aspect-[1/1] md:absolute z-30">
                            <div className="absolute z-20 bottom-0">
                                <Image src={'/assets/hire/devbg.webp'} alt="PBG" width={1000} height={1000} className="rounded-xl"/>
                            </div>
                            <Image loading="lazy" src={'/assets/hire/anjali.png'} alt="developer" width={500} height={500} className="relative z-40"/>
                            <div className="absolute border z-40 bg-gray-800 bottom-0 p-4 rounded-xl shadow-sm drop-shadow">
                                <h3 className="md:text-xl font-bold">AnJali</h3>
                                <span className="text-sm">Senior Full-Stack Developer</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 flex flex-col gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                    <h2 className="text-oveblue mb-18 capitalize text-center font-bold text-4xl">How to Hire Python developer through OVE</h2>
                    <div className="grid 2xl:grid-cols-4 md:grid-cols-2 gap-6 mb-6">
                        <div className="flex relative flex-col items-center gap-3">
                            <div className="relative z-10 w-max px-18 flex flex-col justify-center items-center">
                                <span className="text-[170px] z-20 text-gray-300/70 absolute start-0 w-full h-full flex items-center ">1</span>
                                <Image alt="imge" src={'/assets/hire/step1.webp'} width={400} height={400} className="w-auto h-auto"/>
                            </div>
                            <h3 className="md:text-2xl text-center text-xl font-bold">Place a free Request</h3>
                            <p>Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.</p>
                        </div>
                        <div className="flex flex-col relative items-center gap-3">
                            <div className="relative w-max z-10 px-18 flex flex-col justify-center items-center">
                                <span className="text-[170px] z-20 text-gray-300/90 absolute start-0 w-full h-full flex items-center ">2</span>
                                <Image alt="imge" src={'/assets/hire/step2.webp'} width={400} height={400} className="w-auto h-auto"/>
                            </div>
                            <h3 className="md:text-2xl text-center text-xl font-bold">Tell us about your needs</h3>
                            <p>Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.</p>
                        </div>
                        <div className="flex flex-col relative items-center gap-3">
                            <div className="relative w-max z-10 px-18 flex flex-col justify-center items-center">
                                <span className="text-[170px] z-20 text-gray-300/90 absolute start-0 w-full h-full flex items-center ">3</span>
                                <Image alt="imge" src={'/assets/hire/step3.webp'} width={400} height={400} className="w-auto h-auto"/>
                            </div>
                            <h3 className="md:text-2xl text-center text-xl font-bold">Interview the best</h3>
                            <p>Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.</p>
                        </div>
                        <div className="flex flex-col relative items-center gap-3">
                            <div className="relative w-max z-10 px-18 flex flex-col justify-center items-center">
                                <span className="text-[170px] z-20 text-gray-300/90 absolute start-0 w-full h-full flex items-center ">4</span>
                                <Image alt="imge" src={'/assets/hire/step4.webp'} width={400} height={400} className="w-auto h-auto"/>
                            </div>
                            <h3 className="md:text-2xl text-center text-xl font-bold">Onboard the choosen one</h3>
                            <p>Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <a href="/contact-us" className="bg-oveblue p-2 rounded w-max xl:text-3xl md:text-xl text-white px-6 font-bold cursor-pointer">Hire With Confidence</a>
                    </div>
                </section>

                <section className="py-12 flex flex-col gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                    {/* Main Header */}
                    <div className="lg:flex gap-2 justify-between">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold">Expertise Of Our Python Web Developers</h2>
                            <p className="mt-4 text-lg">
                                Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped
                                different types and sizes of businesses in diverse industries. You can have an overview of the broad
                                range of expertise our Python developers in India possess.
                            </p>
                        </div>
                        <div className="lg:w-1/2 w-full blackgradiant text-white p-6 rounded-lg shadow-md">
                            <div className="w-full">
                                <div className="space-y-4">
                                {listinfos.map((item, index) => (
                                    <div
                                    key={index}
                                    className={` border-white rounded-2xl py-2 px-4 shadow-sm shadow-gray-800 transition-all duration-20 cursor-pointer ${
                                        activeIndex === index ? 'border-b-4' : ''
                                    }`}
                                    onClick={() => toggle(index)}
                                    >
                                    <div className="flex justify-between items-center gap-2">
                                        <p className="font-bold md:text-xl">{item.title}</p>
                                        <div className=''>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-6 transition-transform duration-300 ${
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

                <section className="blackgradiant text-white py-12 flex flex-col items-center gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                    <h2 className="text-3xl font-bold">Still Wasting Weeks Recruiting Python Developer ?</h2>
                    <p>Skip the hiring mess. Get top-tier python talent from us under 48 hours</p>
                    <div className="flex gap-3 items-center">
                        <a href={'/contact-us'} aria-label="contact" className="rounded-full border px-4 py-2 hover:bg-blue-700">Contact Us</a>
                        /
                        <a href="">Book A Call</a>
                    </div>
                </section>

                <section className="py-12 flex flex-col items-center gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                    <div className="md:flex gap-4 items-center">
                        <div className="flex flex-col gap-6">
                            <h4 className="text-oveblue mb-8 capitalize font-bold text-4xl">Why search for Python programmers for hir through Lemon.io ?</h4>
                            <p>If you’ve ever tried to hire remote developers you know the struggle. You can’t meet them in person, which makes assessing their real talents almost impossible. So, you end up with a churn rate that’s through the roof. Now, you’re spending all your time policing contractors or finding devs to hire.</p>
                        </div>
                        <Image src={'/assets/hire/choose.webp'} alt="choose" width={300} height={300}/>
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

                <section className="blackgradiant text-white py-12 flex flex-col items-center gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
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
                                        i === 1 ? 'bg-oveblue text-white border-blue-700 rounded-t-lg relative' : 'border-x border-t rounded-t-lg relative bg-gray-700 border-gray-800'
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
                                                <button className="bg-oveblue text-white text-sm font-semibold px-4 py-2">
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
                <FaqSection/>
            </div>
        </>
    );
}