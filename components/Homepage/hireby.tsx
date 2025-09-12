'use client';

import { RoleBaseSlug } from '@/app/utils/CategorySlug';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const roles = [
    { name: 'Hire Full-Stack Developer', logo: '/assets/hireby/roles/computer.webp', slug: '/hire/full-stack-developer'},
    { name: 'Hire Back-End Developer', logo: '/assets/hireby/roles/backend.webp', slug: '/hire/back-end-developers'},
    { name: 'Hire Front-End Developer', logo: '/assets/hireby/roles/ux.webp', slug: '/hire/front-end-developers'},
    { name: 'Hire Cloud Engineer', logo: '/assets/hireby/roles/configuration.webp', slug: '/hire/cloud-engineers'},
    { name: 'Hire Mobile Developer', logo: '/assets/hireby/roles/app-settings.webp', slug: '/hire/mobile-developer'},
    { name: 'Hire AI Engineers', logo: '/assets/hireby/roles/cloud.webp', slug: '/hire/ai-engineers'},
    { name: 'Hire Blockchain Developer', logo: '/assets/hireby/roles/blockchain.webp', slug: '/hire/blockchain-developers'},
    { name: 'Hire Data Analyst', logo: '/assets/hireby/roles/analistics.webp', slug: '/hire/data-analysts'},
    { name: 'Hire Automation QA Engineers', logo: '/assets/hireby/roles/automation.webp', slug: '/hire/automation-qa-engineers'},
    { name: 'Hire Mechine Learning Engineers', logo: '/assets/hireby/roles/coding.webp', slug: '/hire/machine-learning-engineers'},
    { name: 'Hire Data Scientists', logo: '/assets/hireby/roles/computer-scientist.webp', slug: '/hire/data-scientists'},
    { name: 'Hire Data Engineers', logo: '/assets/hireby/roles/data-management.webp', slug: '/hire/data-engineers'},
    { name: 'Hire DevOps', logo: '/assets/hireby/roles/devops.webp', slug: '/hire/devops-engineers'},
    { name: 'Hire Game Developer', logo: '/assets/hireby/roles/game-development.webp', slug: '/hire/game-developers'},
];


const hirebyskill = [
  { name: 'React', logo: '/assets/hireby/skills/React.webp', slug: '#' },
  { name: 'Go', logo: '/assets/hireby/skills/golangimg.webp', slug: '#' },
  { name: 'GraphQL', logo: '/assets/hireby/skills/graphQLimg.webp', slug: '#' },
  { name: 'HTML5', logo: '/assets/hireby/skills/HTML5.webp', slug: '#' },
  { name: 'Java', logo: '/assets/hireby/skills/Java.webp', slug: '#' },
  { name: 'JavaScript', logo: '/assets/hireby/skills/JavaScript.webp', slug: '#' },
  { name: 'Jest', logo: '/assets/hireby/skills/Jest.webp', slug: '#' },
  { name: 'Jupyter', logo: '/assets/hireby/skills/Jupyter.webp', slug: '#' },
  { name: 'Laravel', logo: '/assets/hireby/skills/Laravel.webp', slug: '#' },
  { name: 'Node.js', logo: '/assets/hireby/skills/Node.js.webp', slug: '/hire/node-js-developers' },
  { name: 'Python', logo: '/assets/hireby/skills/Python.webp', slug: '#' },
  { name: 'Alpine.js', logo: '/assets/hireby/skills/Alpine.js.webp', slug: '#' },
  { name: 'Apache Maven', logo: '/assets/hireby/skills/Apache-Maven.webp', slug: '#' },
  { name: 'BitBucket', logo: '/assets/hireby/skills/BitBucket.webp', slug: '#' },
  { name: 'Blender', logo: '/assets/hireby/skills/Blender.webp', slug: '#' },
  { name: 'Angular', logo: '/assets/hireby/skills/Angular.webp', slug: '#' },
  { name: 'Fedora', logo: '/assets/hireby/skills/Fedora.webp', slug: '#' },
  { name: 'Docker', logo: '/assets/hireby/skills/Docker.webp', slug: '#' },
  { name: 'Kotlin', logo: '/assets/hireby/skills/Kotlin.webp', slug: '#' },
  { name: 'Django', logo: '/assets/hireby/skills/Django.webp', slug: '#' },
  { name: 'Linux', logo: '/assets/hireby/skills/Linux.webp', slug: '#' },
];

export default function HireBy() {
    const [SkillCards, setSkillCards] = useState(hirebyskill);
    const [RoleCards, setRoleCards] = useState<null | Array<{ name: string; slug: string; logo: string }>>(null);;
    
    useEffect(() => {
        (async () => {
            // Fetch data or perform any side effects here if needed
            const rolelist = await RoleBaseSlug(14); // Fetch 14 roles
            setRoleCards(rolelist?.category?.services?.nodes.map((role) => ({
                name: role.title,
                slug: `/hire/${role.slug}`,
                logo: role.cardicon?.icon?.node?.sourceUrl || '/assets/hireby/roles/computer.webp',
            })) || []);
        })();
    }, []);

    if(!RoleCards){
        return(
            <section className="bg-black dark:bg-gray-800 text-white relative px-4 py-12 sm:px-6 lg:px-8 mx-auto flex flex-col gap-10">
                <div className="container mx-auto">
                    {/* Heading Skeleton */}
                    <div className="h-8 w-64 bg-gray-700 rounded mb-4 animate-pulse"></div>

                    {/* Role Cards Skeleton */}
                    <div className="gap-4 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 md:text-sm space-2 text-xs">
                    {[...Array(9)].map((_, i) => (
                        <div
                        key={i}
                        className="bg-boxFill rounded shadow-md flex flex-col p-6 text-center justify-center items-center gap-4 animate-pulse"
                        >
                        <div className="aspect-[1/1] flex items-center justify-center">
                            <div className="h-12 w-12 bg-gray-600 rounded"></div>
                        </div>
                        <div className="h-4 w-20 bg-gray-600 rounded"></div>
                        </div>
                    ))}
                    <div className="bg-boxFill rounded shadow-md flex flex-col p-6 text-center justify-center items-center gap-4 animate-pulse">
                        <div className="h-4 w-40 bg-gray-600 rounded"></div>
                        <div className="h-8 w-28 bg-gray-600 rounded"></div>
                    </div>
                    </div>
                </div>

                <div className="container mx-auto">
                    {/* Heading Skeleton */}
                    <div className="h-8 w-72 bg-gray-700 rounded mb-4 animate-pulse"></div>

                    {/* Skill Cards Skeleton */}
                    <div className="gap-4 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 md:text-sm space-2 text-xs">
                    {[...Array(9)].map((_, i) => (
                        <div
                        key={i}
                        className="bg-boxFill rounded shadow-md flex flex-col p-6 text-center justify-center items-center gap-4 animate-pulse"
                        >
                        <div className="aspect-[1/1] flex items-center justify-center">
                            <div className="h-12 w-12 bg-gray-600 rounded"></div>
                        </div>
                        <div className="h-4 w-20 bg-gray-600 rounded"></div>
                        </div>
                    ))}
                    <div className="bg-boxFill rounded shadow-md flex flex-col p-6 text-center justify-center items-center gap-4 animate-pulse">
                        <div className="h-4 w-40 bg-gray-600 rounded"></div>
                        <div className="h-8 w-28 bg-gray-600 rounded"></div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-black dark:bg-gray-800 text-white relative px-4 py-12 sm:px-6 lg:px-8 mx-auto flex flex-col gap-10">
            <div className='container mx-auto'> 
                {/* Heading */}
                <h2 className="text-3xl font-bold mb-4">
                    <span>Hire Developers by role</span>
                </h2>
                {/* Logos */}
                <div className="gap-4 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 md:text-sm space-2 text-xs">
                    {RoleCards?.map((role, i) => (
                        <a href={role.slug} key={i} className="bg-boxFill hover:bg-oveblue rounded shadow-md">
                            <div className='flex flex-col p-6 text-center justify-center items-center gap-4'>
                                <div className='aspect-[1/1] flex items-center justify-center'>
                                    <img src={role.logo} alt={role.name} width={60} height={60} className="grayscale object-container h-12 w-auto" />
                                </div>
                                <h2 className='capitalize font-bold'>{role.name}</h2>
                            </div>
                        </a>
                    ))}
                    <div key='action1' className="bg-boxFill rounded shadow-md">
                        <div className='flex flex-col p-6 text-center justify-center items-center gap-4'>
                            <h2 className='font-bold uppercase'>Looking for Other role?</h2>
                            <a href='/contact-us' className='border-2 border-oveblue text-oveblue hover:bg-oveblue hover:text-white font-bold md:text-lg text-sm rounded px-2 py-1 cursor-pointer'>Place Request</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto'> 
                {/* Heading */}
                <h2 className="text-3xl font-bold mb-4">
                    <span>Hire Developers by skill</span>
                </h2>
                {/* Logos */}
                <div className="gap-4 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 md:text-sm space-2 text-xs">
                    {hirebyskill.map((skill, i) => (
                        <a href={skill.slug} key={i} className="bg-boxFill hover:bg-oveblue rounded shadow-md">
                            <div className='flex flex-col p-6 text-center justify-center items-center gap-4'>
                                <div className='aspect-[1/1] flex items-center justify-center hover:grayscale'>
                                    <Image src={skill.logo} alt={skill.name} width={60} height={60} className="object-container h-12 w-auto" />
                                </div>
                                <h2 className='capitalize font-bold'>{skill.name}</h2>
                            </div>
                        </a>
                    ))}
                    <div key='action2' className="bg-boxFill rounded shadow-md">
                        <div className='flex flex-col p-6 text-center justify-center items-center gap-4'>
                            <h2 className='font-bold uppercase'>Looking for Other Skill?</h2>
                            <a href='/contact-us' className='border-2 border-oveblue text-oveblue hover:bg-oveblue hover:text-white font-bold md:text-lg text-sm rounded px-2 py-1 cursor-pointer'>Place Request</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
