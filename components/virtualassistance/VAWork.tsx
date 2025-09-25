'use client';
import React from 'react';

const steps = [
    { title: 'Confirm Scope', description: 'This document outlines the compelling reasons why Optimal Virtual Employee (OVE) stands out as the premier choice for businesses seeking virtual assistant services.' },
    { title: 'Select Talent', description: 'This document outlines the compelling reasons why Optimal Virtual Employee (OVE) stands out as the premier choice for businesses seeking virtual assistant services.' },
    { title: 'Go Live', description: 'This document outlines the compelling reasons why Optimal Virtual Employee (OVE) stands out as the premier choice for businesses seeking virtual assistant services.' },
];

export default function VAWork(StoryBlock:any) {
    let stories = StoryBlock?.StoryBlock?.stories ?? steps;
    return (
        <section className="bg-gradient py-12 dark:py-12 flex flex-col gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
            {/* Main Header */}
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                    {StoryBlock?.StoryBlock?.title ?? 'Why Do Our Virtual Executive Assistants Work With?'}
                </h2>
                <div className=''>
                    <span dangerouslySetInnerHTML={{__html:StoryBlock?.StoryBlock?.description ?? "OVE's commitment to excellence begins with its meticulous selection process. Unlike some providers who simply hire anyone with basic skills, OVE employs a multi-stage screening process to identify the most talented and qualified candidates."}}/>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {stories.map((info:any,key:number)=>(
                    <div key={key} className='md:p-4 p-2 border rounded-2xl shadow-xl !items-center'>
                        <div className=''>
                            <img className='aspect-video' src={info?.image ?? ''} alt={'story1'}/>
                            <h3 className='font-bold my-2 text-xl'>{info?.title ?? 'Big dreams, lean teams'}</h3>
                        </div>
                        <div className='overflow-auto max-h-32 md:max-h-full'>
                            <span dangerouslySetInnerHTML={{__html:info?.description ?? "Every founder knows the rush of chasing an idea that feels bigger than life itself. But the reality? Resources are thin, time is even thinner, and you’re juggling everything from product to pitches. That’s where we step in — providing skilled developers who integrate seamlessly, with clear costs and zero surprises. You stay focused on building momentum, while we make sure your vision doesn’t get slowed down by hiring headaches."}}/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}