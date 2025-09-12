'use client';

import useInView from "@/components/useInView";
import Image from "next/image";

export default function HiringProcess()
{
    const { elementRef, isVisible } = useInView();
    const stepsdata = [
        {step:'01',title:'Share Your Requirements',info:"Tell us what you're looking for — from tech stack to experience level. Whether it’s a frontend developer, DevOps engineer, or full-stack team, we tailor the search to your exact needs.",color:'#77BEF0',svg:'#'},
        {step:'02',title:'Get Vetted Profiles',info:'Within 48 hours, receive a shortlist of handpicked, pre-vetted developers who meet your criteria — assessed for technical skill, communication, and cultural fit.',color:'#FFCB61',svg:'#'},
        {step:'03',title:'Interview & Assess',info:'You interview the shortlisted candidates directly. Test their skills, evaluate their mindset, and ensure they align with your team dynamics and vision.',color:'#FF894F',svg:'#'},
        {step:'04',title:'Onboard & Scale',info:'Once you’ve selected your resource(s), onboarding is swift and supported by us. Scale up or down flexibly — no long-term contracts, just results-driven collaboration.',color:'#EA5B6F',svg:'#'},
    ];
    const steps = [
        {
        step: '01',
        title: 'Share Your Requirements',
        color:'#2562eb',
        description: `Tell us what you're looking for — from tech stack to experience level. Whether it’s a frontend developer, DevOps engineer, or full-stack team, we tailor the search to your exact needs.`,
        },
        {
        step: '02',
        title: 'Get Vetted Profiles',
        color:'#2562eb',
        description: `Within 48 hours, receive a shortlist of handpicked, pre-vetted developers who meet your criteria — assessed for technical skill, communication, and cultural fit.`,
        },
        {
        step: '03',
        title: 'Interview & Assess',
        color:'#2562eb',
        description: `You interview the shortlisted candidates directly. Test their skills, evaluate their mindset, and ensure they align with your team dynamics and vision.`,
        },
        {
        step: '04',
        title: 'Onboard & Scale',
        color:'#2562eb',
        description: `Once you’ve selected your resource(s), onboarding is swift and supported by us. Scale up or down flexibly — no long-term contracts, just results-driven collaboration.`,
        },
    ];
    return(
    <>
        <section className="bg-gray-100 relative dark:bg-gray-900 pb-12 dark:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Comprehensive Hiring Process
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                We make hiring remote IT talent seamless, fast, and transparent. Our structured 4-step process ensures you get the right developer with the right skills at the right time — without the guesswork or hidden costs.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                {steps.map((stepItem, index) => (
                <div
                    key={index}
                    className="relative overflow-hidden bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
                        style={{ borderBottom: `3px solid ${stepItem.color}` }}
                    >
                    <div className="absolute top-4 right-4 text-5xl font-bold text-oveblue opacity-70">
                        {stepItem.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {stepItem.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {stepItem.description}
                    </p>
                    <div className="absolute -top-3 -start-3 rounded-full h-10 w-10" style={{'background':stepItem.color}}></div>
                </div>
                ))}
            </div>
            <div className='w-full flex justify-center mt-10'>  
                <a href={'/contact-us'} className='md:w-1/3 w-1/2 cursor-pointer text-center hover:bg-blue-700 drop-shadow shadow hover:shadow-xl bg-oveblue text-white lg:p-3 p-2 xl:text-3xl text-nowarp font-bold rounded'>Hire a talent</a>
            </div>
        </section>
    </>
    );
}