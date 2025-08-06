'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import FaqSection from "@/components/Homepage/faq";

export default function AboutPage()
{
    const logos = [
        '/assets/companies/company1.webp',
        '/assets/companies/company2.webp',
        '/assets/companies/company3.webp',
        '/assets/companies/company5.webp',
        '/assets/companies/company6.webp',
        '/assets/companies/company7.webp',
        '/assets/companies/company9.webp',
        '/assets/companies/company10.webp',
        '/assets/companies/company12.webp',
        '/assets/companies/company14.webp',
    ];

    const team = [
        {name: 'Dharmesh Shah', linkedin:'https://www.linkedin.com/in/otsdharmeshshah/', role: 'Joint Managing Director', image: '/assets/ove/ds.jpg'},
        {name: 'Shantanu Dublish', linkedin:'https://www.linkedin.com/in/shantanu-dublish-55819233/', role: 'Joint Managing Director', image: '/assets/ove/sd.jpg'},
        {name: 'Kartik Sharma', linkedin:'https://www.linkedin.com/in/kartiksharmaiit/', role: 'Non-Executive Director - IT', image: '/assets/ove/cto.png'},
        // {name: 'Marc Bishop', role: 'General Manager-Operations', image: '/assets/ove/manager.jpg'},
        {name: 'Ragbhendra Kumar Jha', linkedin:'#', role: 'CFO', image: '/assets/ove/cfo.webp'},
        {name: 'Ronnie R Arora', linkedin:'https://www.linkedin.com/in/ronnie-rahul-arora-ba12b26/', role: 'VP-Growth', image: '/assets/ove/ronnie.jpg'},
        {name: 'Samta Sharma', linkedin:'https://www.linkedin.com/in/samtasharma/', role: 'VP-Technology', image: '/assets/ove/samta.webp'},
    ];

    return(
        <>
            <section className="bg-black p-12 justify-between relative flex lg:flex-row flex-col dark:bg-gray-800 text-white px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="relative lg:w-[30%]">
                    <div className="md:p-10 lg:absolute p-4 -end-40 md:top-10 md:rounded-md rounded-t bg-stone-800">
                        <h1 className="xl:text-4xl md:text-2xl text-xl md:mb-10 mb-4">Empowering Global Businesses with Elite Tech Talent</h1>
                        <div className="md:max-h-48 2xl:max-h-full overflow-y-auto">
                            <p className="lg:text-lg text-xs mb-2">At Optimal Virtual Employee, we believe great technology begins with great people. Since our founding in 2008, we’ve been on a mission to bridge the talent gap for startups, growing businesses, and enterprise brands across the globe by offering flexible, reliable, and scalable staff augmentation solutions.</p>
                            <p className="lg:text-lg text-xs mb-2">Whether you're a founder building your first MVP or an enterprise scaling your development team, we help you find highly skilled full-time developers who are committed to your success—just like in-house team members.</p>
                            <p className="lg:text-lg text-xs mb-2">We don’t just fill positions. We help you build the right team, faster—with our unique combination of human vetting and AI-assisted shortlisting to match you with professionals who deliver from day one.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[70%] md:rounded-md rounded-b-md">
                    <Image src={'/assets/about/1.jpg'} alt="aboutimg1" className="object-cover w-full" height={500} width={1000}/>
                </div>
            </section>
            <div className="bg-black py-12">
                <div className="container mx-auto">
                    <section className="relative md:flex md:flex-rows flex-col-reverse dark:bg-gray-800 text-white px-4 sm:px-6 lg:px-8 mx-auto">
                        <div className="md:grid flex flex-col-reverse items-center md:grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col gap-4 justify-center">
                                <div className="mb-10">
                                    <h2 className="xl:text-5xl lg:text-3xl md:text-2xl text-xl font-bold mb-4">Hiring Shouldn’t Slow You Down</h2>
                                    <p className="md:text-lg text-xs">We simplify the hiring process so you can focus on building. With our fast onboarding and deep vetting, we help you hire confident, capable developers—without the wait.</p>
                                </div>
                                <div  className="flex flex-col gap-6">
                                    <ul className="md:text-lg text-xs">
                                        <li className="list-disc list-inside">Full-time, not freelance</li>
                                        <li className="list-disc list-inside">Vetted through AI + human screening</li>
                                        <li className="list-disc list-inside">Time zone and workflow alignment</li>
                                        <li className="list-disc list-inside">No lock-in contracts</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex aspect-[2/1] w-full justify-end items-center">
                                <Image src={'/assets/about/4.webp'} alt="slide" width={500} height={200} className="object-cover"/>
                            </div>
                        </div>
                    </section>
                    <section className="relative md:flex md:flex-rows flex-col-reverse dark:bg-gray-800 text-white px-4 sm:px-6 lg:px-8 mx-auto">
                        <div className="md:grid flex flex-col items-center md:grid-cols-2 gap-4 mb-4">
                            <div className="flex justify-center aspect-[2/1] w-full justify-start items-center">
                                <Image src={'/assets/about/2.webp'} alt="slide" width={500} height={200} className="object-cover"/>
                            </div>
                            <div className="flex flex-col gap-4 justify-center">
                                <div className="mb-10">
                                    <h2 className="xl:text-5xl lg:text-3xl md:text-2xl text-xl font-bold mb-4">We Work Like an Extension of Your Team</h2>
                                    <p className="md:text-lg text-xs">We don’t just support your business—we become part of it. Our developers collaborate with your internal team, take ownership of delivery, and commit long-term.</p>
                                </div>
                                <div  className="flex flex-col gap-6">
                                    <ul className="md:text-lg text-xs">
                                        <li className="list-disc list-inside">Hands-on support from day one</li>
                                        <li className="list-disc list-inside">Shared tools, tasks, and timelines</li>
                                        <li className="list-disc list-inside">Flexible scaling—up or down</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="relative md:flex md:flex-rows flex-col-reverse dark:bg-gray-800 text-white px-4 sm:px-6 lg:px-8 mx-auto">
                        <div className="md:grid flex flex-col-reverse items-center md:grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col gap-4 justify-center">
                                <div className="mb-10">
                                    <h2 className="xl:text-5xl lg:text-3xl md:text-2xl text-xl font-bold mb-4">A Culture That Powers Results</h2>
                                    <p className="md:text-lg text-xs">Great developers thrive in great environments. That’s why we’ve built a workplace that values learning, stability, and long-term commitment.</p>
                                </div>
                                <div  className="flex flex-col gap-6">
                                    <ul className="md:text-lg text-xs">
                                        <li className="list-disc list-inside">Strong employee retention</li>
                                        <li className="list-disc list-inside">Regular skill upgrades</li>
                                        <li className="list-disc list-inside">Focus on team happiness</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex aspect-[2/1] w-full justify-end items-center">
                                <Image src={'/assets/about/3.webp'} alt="slide" width={500} height={333} className="object-cover"/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <section className="dark:bg-gray-800 relative px-4 py-12 sm:px-6 lg:px-8 mx-auto">
                <h2 className="xl:text-6xl md:text-4xl text-3xl font-bold text-center mb-8">Our Executive Team</h2>
                <div className="container mx-auto grid items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {team.map((member, index) => (
                        <div key={index} className="flex flex-col text-white w-full p-6 bg-stone-800 rounded-lg">
                            <div className="mb-4 flex gap-2">
                                <div className="relative">
                                    <div className="aspect-[1/1] flex w-20 h-20 rounded-full overflow-hidden ">
                                        <Image src={member.image} alt={member.name} width={300} height={300} className="w-auto h-auto object-container"/>
                                    </div>
                                    <a href={member.linkedin} aria-label="LinkedIn" className="absolute -bottom-3 -left-3 p-1 overflow-hidden rounded-full">
                                        <Image src={'/assets/sociallinks/linkedin2.png'} width={30} height={30} className="object-cover" alt="LinkedIn"/>
                                    </a>
                                </div>
                                <div className="text-start flex flex-col">
                                    <h3 className="xl:text-lg text-md font-bold">{member.name}</h3>
                                    <p className="text-sm text-gray-300">{member.role}</p>
                                </div>
                            </div>
                            <p></p>
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="p-12 hidden dark:bg-gray-800 text-white px-4 sm:px-6 lg:px-8 mx-auto">
                <h2 className="text-blue-700 mb-10 text-center font-bold text-4xl">
                    Here are a few words shared by our Employees
                </h2>

                <div className="w-full">
                    <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    speed={1000}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="w-full"
                    >
                    {logos.map((src, index) => (
                        <SwiperSlide key={index} className="h-full">
                        <div className="flex flex-col justify-between p-4 h-[300px] w-full bg-stone-700 rounded-md shadow">
                            <p className="text-sm mb-4">
                            Lorem ipsum amet consectetur adipiscing elit eiusmod tempor incididunt ut labore.
                            </p>
                            <div className="flex gap-2 items-center">
                            <Image
                                src="/assets/developer/dev1.webp"
                                alt="dev"
                                height={40}
                                width={40}
                                className="object-cover h-10 w-10 rounded-full"
                            />
                            <div>
                                <h4 className="font-bold text-sm">Jennifer Deoche</h4>
                                <span className="text-xs">Project Manager</span>
                            </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </section>
            <FaqSection/>
        </>
    );
}