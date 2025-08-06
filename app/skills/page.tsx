import Image from "next/image";
import React from 'react';

async function getskills() {
  const res = await fetch('https://staging.optimalvirtualemployee.com.au/wp-json/wp/v2/skill');
  const data = await res.json();
  return data;
}

export default async function Contact()
{
    const skills = await getskills();
    console.log(skills);
    return(
        <>
            {skills.map((skill: any) => (
                <section className="blackgradiant md:h-screen 2xl:h-[600] pt-16 lg:flex gap-2 dark:bg-gray-800 text-white relative px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="flex w-full flex-col h-full justify-between gap-8 items-center md:items-start py-6">
                        <h1 className="text-blue-700 md:text-6xl text-3xl font-bold">Hire {skill.title.rendered.toUpperCase()}</h1>
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
                    <div className="w-full lg:flex items-center hidden relative justify-center">
                        <div className="aspect-[1/1] md:absolute z-30">
                            <div className="absolute z-20 bottom-0">
                                <Image src={'/assets/hire/devbg.webp'} alt="PBG" width={1000} height={1000} className="rounded-xl"/>
                            </div>
                            <Image src={skill.hero_pic.guid} alt="developer" width={500} height={500} className="relative z-40"/>
                            <div className="absolute border z-40 bg-gray-800 bottom-0 p-4 rounded-xl shadow-sm drop-shadow">
                                <h3 className="md:text-xl font-bold">AnJali</h3>
                                <span className="text-sm">{skill.heropic_title}</span>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}