'use client';

import useInView from "@/components/useInView";

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
        color:'#FFCB61',
        description: `Within 48 hours, receive a shortlist of handpicked, pre-vetted developers who meet your criteria — assessed for technical skill, communication, and cultural fit.`,
        },
        {
        step: '03',
        title: 'Interview & Assess',
        color:'#FF894F',
        description: `You interview the shortlisted candidates directly. Test their skills, evaluate their mindset, and ensure they align with your team dynamics and vision.`,
        },
        {
        step: '04',
        title: 'Onboard & Scale',
        color:'#EA5B6F',
        description: `Once you’ve selected your resource(s), onboarding is swift and supported by us. Scale up or down flexibly — no long-term contracts, just results-driven collaboration.`,
        },
    ];
    return(
    <>
    <section className='bg-white hidden relative px-4 py-10 sm:px-6 lg:px-8 mx-auto dark:bg-gray-700'>
        <div className={`animate-fade-left animate-ease-in animate-alternate animate-fill-both flex items-center`}>
            <div className='mx-auto w-full h-full grid md:grid-cols-2'>  
                <div className='mb-6 flex flex-col justify-center 2xl:gap-15 lg:gap-10 gap-5 text-center md:text-start'>
                    <h1 className='flex xl:text-4xl 2xl:text-5xl text-3xl 2xl:gap-6 gap-3 2xl:text-5xl font-bold flex-col'>
                        <span>Our Comprehensive</span>
                        <span>Hiring Process</span>
                    </h1>
                    <p>We make hiring remote IT talent seamless, fast, and transparent. Our structured 4-step process ensures you get the right developer with the right skills at the right time — without the guesswork or hidden costs.</p>
                    <div className='max-w-auto'>  
                        <button className='w-1/2 bg-green-600 text-white lg:p-3 p-2 xl:text-3xl font-bold rounded'>Hire a talent</button>
                    </div>
                </div>
                <div className="hidden aspect-[1/1] flex items-center justify-center">
                    <img loading="lazy" src={'/assets/hirprocess.webp'} className="object-cover md:h-1/2 md:w-1/2" alt="steps"/>
                </div>
                <div className='md:p-4 md:w-100 2xl:w-130 w-auto h-auto mx-auto'>
                    <div className="aspect-[1/1] w-full h-full grid grid-cols-2 gap-6">
                        {stepsdata.map((item,key)=>(
                            <div key={key} className={`rounded-lg relative aspect-[1/1] ${key == 2 ? 'order-last':''} relative`} style={{ transform: `rotate(${90 * key}deg)`, 'background':item.color }}>
                                <div className='bg-white relative overflow-hidden dark:bg-gray-700 border border-gray-500 rounded-lg object-container absolute w-full h-full top-2 start-2'>
                                    <div className='flex flex-col gap-2 justify-between h-full w-full md:p-2 p-1' style={{ transform: `rotate(${90 * (stepsdata.length-key)}deg)` }}>
                                        <div className="flex h-full justify-between" style={{ flexDirection: key > 1 ? 'column-reverse' : 'column' }}>
                                            <div>
                                                <h4 className='font-bold 2xl:text-lg lg:text-sm text-xs'>{item.title}</h4>
                                                <p className='2xl:text-sm text-xs'>{item.info}</p>
                                            </div>
                                            <div className="flex" style={{'color':item.color , justifyContent: key === 1 || key ===  2 ? 'end' : 'start'}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 z-40 w-full">
                                        <div className='absolute -bottom-16.5 -end-16.5 flex flex-col text-center rounded-full w-32 h-32 items-center justify-center' style={{'background':item.color}}>
                                            <div className='absolute top-5 start-6 md:text-sm text-xs flex flex-col items-center' style={{ transform: `rotate(${90 * (stepsdata.length-key)}deg)` }}>
                                                <span>Step</span>
                                                <strong className='font-bold'>{item.step}</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
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
                className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
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