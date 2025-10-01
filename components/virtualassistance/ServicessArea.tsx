'use client';
import React from 'react';

const steps = [
    'Accounting and Finance',
    'Education',
    'Information Technology',
    'Insurance',
    'Legal Services',
    'Logistic and Transport',
    'Professional Services',
    'Real Estate',
    'Retail and E-commerce',
];

export default function ServicessArea(ServicessArea:any) {
    let services = ServicessArea?.ServicessArea?.cardText ?? steps;
    return (
        <section className="bg-oveblue/10 py-12 dark:py-12 flex flex-col gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
            {/* Main Header */}
            <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-2">
                    {ServicessArea?.ServicessArea?.title ?? "Industries We've Served"}
                </h2>
                <p>{ServicessArea?.ServicessArea?.description ?? "In today's fast-paced business environment, efficiency and cost-effectiveness are paramount. Many businesses, from startups to established enterprises, are turning to virtual assistants (VAs) to streamline operations, reduce overhead, and free up valuable time for core business activities. However, the quality and reliability of VA services can vary significantly."}</p>
            </div>

            <div className='grid md:grid-cols-3 gap-10'>
                {services.map((step:string, idx:number) => (
                    <div
                        key={idx}
                        className="va-card shadow-lg rounded-lg p-4 text-center relative"
                    >
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{step}</h2>
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