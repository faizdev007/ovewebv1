'use client';
import React from 'react';

const steps = [
    { title: 'Confirm Scope', description: 'This document outlines the compelling reasons why Optimal Virtual Employee (OVE) stands out as the premier choice for businesses seeking virtual assistant services.' },
    { title: 'Select Talent', description: 'This document outlines the compelling reasons why Optimal Virtual Employee (OVE) stands out as the premier choice for businesses seeking virtual assistant services.' },
    { title: 'Go Live', description: 'This document outlines the compelling reasons why Optimal Virtual Employee (OVE) stands out as the premier choice for businesses seeking virtual assistant services.' },
];

export default function VAStapes() {
    return (
        <section className="bg-gradient py-12 dark:py-12 flex flex-col gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
            {/* Main Header */}
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl">
                    Hire Virtual Assistant in
                </h2>
                <div className="mt-4 text-3xl font-bold mb-4">
                    3 Simple Steps
                </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-4'>
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        className="va-card border border-black rounded-lg p-4 relative"
                    >
                        <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: 600 }}>{step.title}</h2>
                        <p style={{ color: '#555', fontSize: '1rem' }}>{step.description}</p>
                        <div className='flex justify-end pt-6'>
                            <div className="va-card-number rounded-full bg-oveblue/50 text-4xl text-white flex items-center transition-transform duration-300 hover:-translate-y-2 justify-center p-4 h-12 w-12">
                                {idx + 1}
                            </div>
                        </div>
                        <style jsx>{`
                            .va-card:hover {
                                box-shadow: 0 8px 32px rgba(0,0,0,0.16);
                            }
                            .va-card:hover .va-card-number {
                                transform: translateX(-50%) scale(1.25);
                            }
                        `}</style>
                    </div>
                ))}
            </div>
        </section>
    );
}