'use client';
import React from 'react';

const steps = [
    {
        "title": "Accounting and Finance",
        "description": "<p data-start=\"75\" data-end=\"305\">Virtual Assistants are well-versed in bookkeeping, managing accounts, processing invoices, and organizing financial records. They help streamline financial operations, saving time and ensuring accuracy.</p>\n<p data-start=\"307\" data-end=\"541\">\n",
        "bgImage": "https://admin.optimalvirtualemployee.com/wp-content/uploads/2025/09/pexels-artempodrez-5716001-scaled.webp"
    },
    {
        "title": "Healthcare & Life Sciences",
        "description": "<p data-start=\"307\" data-end=\"541\">From managing patient appointments to processing medical records and handling administrative tasks, Virtual Assistants offer seamless support, allowing healthcare professionals to focus on patient care.</p>\n<p data-start=\"543\" data-end=\"778\">\n",
        "bgImage": "https://admin.optimalvirtualemployee.com/wp-content/uploads/2025/09/pexels-chevanon-317157-scaled.webp"
    },
    {
        "title": "Education & EdTech",
        "description": "<p data-start=\"543\" data-end=\"778\">Virtual Assistants assist with managing online classrooms, scheduling lessons, preparing materials, and handling communication. They free up educators to focus on what matters most—teaching and guiding students.</p>\n",
        "bgImage": "https://admin.optimalvirtualemployee.com/wp-content/uploads/2025/09/edu-scaled.webp"
    },
    {
        "title": "Information Technology ",
        "description": "<p data-start=\"780\" data-end=\"1012\">Tech Virtual Assistants are skilled in managing IT project schedules, assisting with coding tasks, handling system troubleshooting, and providing general IT support, ensuring smooth technology operations.</p>\n",
        "bgImage": "https://admin.optimalvirtualemployee.com/wp-content/uploads/2025/09/pexels-pixabay-270557.webp"
    },
    {
        "title": "Legal Services",
        "description": "<p data-start=\"1014\" data-end=\"1213\">Virtual Assistants support legal firms with case management, legal research, drafting documents, and managing client communications, ensuring that legal practices run efficiently.</p>\n",
        "bgImage": "https://admin.optimalvirtualemployee.com/wp-content/uploads/2025/09/pexels-sora-shimazaki-5668473-scaled.webp"
    },
    {
        "title": "Logistics & Transport",
        "description": "<p data-start=\"1215\" data-end=\"1417\">Virtual Assistants help manage inventory, track shipments, coordinate schedules, and handle customer inquiries, improving the efficiency of logistics and transport operations.</p>\n",
        "bgImage": "https://admin.optimalvirtualemployee.com/wp-content/uploads/2025/09/logistic-scaled.webp"
    },
    {
        "title": "Real Estate",
        "description": "<p data-start=\"1419\" data-end=\"1628\">From handling client inquiries to managing property listings and scheduling viewings, Virtual Assistants keep real estate businesses running smoothly, allowing teams to focus on closing deals.</p>\n",
        "bgImage": "https://admin.optimalvirtualemployee.com/wp-content/uploads/2025/09/pexels-binyaminmellish-106399-scaled.webp"
    },
    {
        "title": "Insurance ",
        "description": "<p data-start=\"1630\" data-end=\"1825\">Virtual Assistants assist with customer service, managing claims, processing documents, and handling data entry, ensuring that insurance operations remain organized and responsive.</p>\n",
        "bgImage": "https://admin.optimalvirtualemployee.com/wp-content/uploads/2025/09/pexels-karolina-grabowska-4021810-scaled.webp"
    },
    {
        "title": "Marketing & Media",
        "description": "<p data-start=\"1827\" data-end=\"2031\">Marketing Virtual Assistants help with content creation, social media management, email marketing, and campaign analytics, freeing up teams to focus on strategy and creative output.</p>\n",
        "bgImage": "https://admin.optimalvirtualemployee.com/wp-content/uploads/2025/09/pexels-artempodrez-5716001-scaled.webp"
    },
    {
        "title": "Professional Services & Consulting",
        "description": "<p data-start=\"2033\" data-end=\"2251\">Virtual Assistants support consultants with administrative tasks, research, client communication, and scheduling, allowing them to focus on providing top-tier service to clients.</p>\n",
        "bgImage": "https://admin.optimalvirtualemployee.com/wp-content/uploads/2025/09/pexels-pixabay-327540-scaled.webp"
    }
];

export default function RoleWeHired(RoleBaseHired:any) {
    let rolesteps = RoleBaseHired?.RoleBaseHired?.cardText ?? steps;
    return (
        <section className="bg-gradient py-12 dark:py-12 flex flex-col gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
            {/* Main Header */}
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-2">
                    {RoleBaseHired?.RoleBaseHired?.title ?? "Industries We've Served"}
                </h2>
                <p>{RoleBaseHired?.RoleBaseHired?.description ?? "In today's fast-paced business environment, efficiency and cost-effectiveness are paramount. Many businesses, from startups to established enterprises, are turning to virtual assistants (VAs) to streamline operations, reduce overhead, and free up valuable time for core business activities. However, the quality and reliability of VA services can vary significantly."}</p>
            </div>

            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4'>
                {rolesteps.map((step:any, idx:number) => (
                !step?.bgImage ? 
                    <div
                        key={idx}
                        className="va-card border border-black rounded-lg p-4 text-center relative"
                    >
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{step.title}</h2>
                        <style jsx>{`
                            .va-card:hover {
                                box-shadow: 0 8px 32px rgba(0,0,0,0.16);
                            }
                            .va-card:hover .va-card-number {
                                transform: translateX(-50%) scale(1.25);
                            }
                        `}</style>
                    </div>
                : 
                    <div key={idx} className="va-card text-center group relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                        <div className='relative'>
                            {/* Image */}
                            <img
                                src={step.bgImage ?? "https://source.unsplash.com/random/400x400?nature"}
                                alt="Card Image"
                                className="h-full z-10 aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className='absolute bottom-0 group-hover:hidden bg-black/50 w-full h-full'>
                                <h2 className='absolute z-20 bottom-0 py-8 px-2 text-lg text-white font-bold'>{step.title}</h2>
                            </div>
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-oveblue/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                        {/* Text Content */}
                        <div className="absolute inset-x-0 bottom-0 translate-y-full p-2 text-start text-white transition-transform duration-500 group-hover:translate-y-0">
                            <h3 className="text-xl mb-3 font-bold">{step.title ?? 'Beautiful Nature'}</h3>
                            <div className="text-sm max-h-32 overflow-auto">
                                <span dangerouslySetInnerHTML={{__html:step.description ?? "Experience the beauty of the outdoors."}}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}