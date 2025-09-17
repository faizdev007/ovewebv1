'use client';
import React from 'react';

const steps = [
    { title: 'Confirm Scope', description: 'This document outlines the compelling reasons why Optimal Virtual Employee (OVE) stands out as the premier choice for businesses seeking virtual assistant services.' },
    { title: 'Select Talent', description: 'This document outlines the compelling reasons why Optimal Virtual Employee (OVE) stands out as the premier choice for businesses seeking virtual assistant services.' },
    { title: 'Go Live', description: 'This document outlines the compelling reasons why Optimal Virtual Employee (OVE) stands out as the premier choice for businesses seeking virtual assistant services.' },
];

export default function VAWork() {
    return (
        <section className="bg-gradient py-12 dark:py-12 flex flex-col gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
            {/* Main Header */}
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Why Do Our Virtual Executive Assistants Work With?
                </h2>
                <p>OVE's commitment to excellence begins with its meticulous selection process. Unlike some providers who simply hire anyone with basic skills, OVE employs a multi-stage screening process to identify the most talented and qualified candidates. </p>
            </div>

            <div className='grid md:grid-cols-3 gap-4'>
                <div className=''>
                    <img src={''} alt={'story1'}/>
                    <h3>Big dreams, lean teams</h3>
                    <p>Every founder knows the rush of chasing an idea that feels bigger than life itself. But the reality? Resources are thin, time is even thinner, and you’re juggling everything from product to pitches. That’s where we step in — providing skilled developers who integrate seamlessly, with clear costs and zero surprises. You stay focused on building momentum, while we make sure your vision doesn’t get slowed down by hiring headaches.</p>
                </div>
                <div className=''>
                    <img src={''} alt={'story1'}/>
                    <h3>From scrappy to scalable</h3>
                    <p>Growth is exciting, but let’s be honest — it’s also messy. More customers, more responsibilities, and suddenly, a small misstep can cost big. You need a team that grows as quickly and reliably as your company does. Our flat-fee model and transparent developer salaries give you predictability, so you can invest in scaling with confidence instead of bracing for hidden costs. We help you turn growth chaos into sustainable progress.</p>
                </div>
                <div className=''>
                    <img src={''} alt={'story1'}/>
                    <h3>Orchestrating across ventures</h3>
                    <p>Running one business is challenging enough; running several demands clarity and control. Whether it’s managing teams in different industries or keeping track of multiple moving parts, you can’t afford distractions like surprise invoices or opaque pricing. That’s why we keep things simple: one flat management fee, clear bank receipts, and talent you can trust. You get complete visibility into your resources, freeing you up to focus on strategy across all your ventures.</p>
                </div>
            </div>
        </section>
    );
}