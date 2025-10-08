'use client';

import useInView from "@/components/useInView";
import Image from "next/image";

export default function HiringProcess({hiringprocessdata}: any)
{
    const { elementRef, isVisible } = useInView();
    
    const steps = [
        {
        title: 'Share Your Requirements',
        description: `Tell us what you're looking for — from tech stack to experience level. Whether it’s a frontend developer, DevOps engineer, or full-stack team, we tailor the search to your exact needs.`,
        },
        {
        title: 'Get Vetted Profiles',
        description: `Within 48 hours, receive a shortlist of handpicked, pre-vetted developers who meet your criteria — assessed for technical skill, communication, and cultural fit.`,
        },
        {
        title: 'Interview & Assess',
        description: `You interview the shortlisted candidates directly. Test their skills, evaluate their mindset, and ensure they align with your team dynamics and vision.`,
        },
        {
        title: 'Onboard & Scale',
        description: `Once you’ve selected your resource(s), onboarding is swift and supported by us. Scale up or down flexibly — no long-term contracts, just results-driven collaboration.`,
        },
    ];

    const hiresteps = hiringprocessdata?.steps ?? steps;

    return(
    <>
        <section className="bg-gray-100 relative dark:bg-gray-900 pb-12 dark:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    <span dangerouslySetInnerHTML={{__html:hiringprocessdata?.title ?? 'Our Comprehensive Hiring Process'}}/>
                </h2>
                <div className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                    <span dangerouslySetInnerHTML={{__html:hiringprocessdata.subtitle ?? "We make hiring remote IT talent seamless, fast, and transparent. Our structured 4-step process ensures you get the right developer with the right skills at the right time — without the guesswork or hidden costs"}}/>
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                {hiresteps.map((stepItem:any, index:number) => (
                <div
                    key={index}
                    className="relative overflow-hidden bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
                        style={{ borderBottom: `3px solid #2562eb` }}
                    >
                    <div className="absolute top-4 right-4 text-5xl font-bold text-oveblue opacity-70">
                        {index+1}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {stepItem.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {stepItem.description}
                    </p>
                    <div className="absolute -top-3 -start-3 rounded-full h-10 w-10" style={{'background':"#2562eb"}}></div>
                </div>
                ))}
            </div>
            <div className='w-full flex justify-center mt-10'>  
                <a href={'/contact-us'} className='md:w-1/3 w-1/2 cursor-pointer text-center hover:bg-blue-700 drop-shadow shadow hover:shadow-xl bg-oveblue text-white lg:p-3 p-2 xl:text-3xl text-nowarp font-bold rounded'>{hiringprocessdata?.ctaTitle ?? 'Hire a talent'}</a>
            </div>
        </section>
    </>
    );
}