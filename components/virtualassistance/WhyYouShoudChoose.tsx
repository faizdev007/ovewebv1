'use client';
import React from "react";
import Rating from "../Rating";

const WhyYourShouldChoose = () => {
    return (
        <section className="flex-col hidden md:flex-row items-center justify-between md:px-6 px-2 py-12 bg-oveblue">
            {/* Text Content */}
            <div className="md:w-1/2 w-full mb-8 md:mb-0 text-white">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold mb-4">
                        OVE Virtual Assistance to Help You Get Things Done
                    </h1>
                    <p className="text-lg mb-6">
                        Get expert help for your business needs. Fill out the form to get started with our virtual assistance services.
                    </p>
                    <ul className="list-disc pl-5">
                        <li>Professional support</li>
                        <li>Flexible plans</li>
                        <li>24/7 availability</li>
                    </ul>
                    <div className="">
                        <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-start gap-2 mt-4">
                            <img className="bg-[#0b235c91]/60 rounded p-1" src={'/assets/virtualassistance/brandlogo/googlelogo.webp'} width={80} height={50} alt="Google"/>
                            <img className="bg-[#0b235c91]/60 rounded p-1" src={'/assets/virtualassistance/brandlogo/goodfirmslogo.webp'} width={80} height={50} alt="GoodFirms"/>
                            <img className="bg-[#0b235c91]/60 rounded p-1" src={'/assets/virtualassistance/brandlogo/clutchlogo.webp'} width={80} height={50} alt="Clutch"/>
                            <img className="bg-[#0b235c91]/60 rounded p-1" src={'/assets/virtualassistance/brandlogo/productlogo.webp'} width={80} height={50} alt="Product Hunt"/>
                        </div>
                    </div>
                    <div className="flex gap-3 text-white items-center mt-6">
                        <a href={'/contact-us'} aria-label="contact" className="rounded-full border-3 flex items-center gap-2 border-black bg-gray-900 px-4 py-2 hover:bg-gray-700">
                            Book a Demo
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 font-bold">
                                <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="md:w-1/2 w-full">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg md:p-8 p-4">
                    
                </div>
            </div>
        </section>
    );
};

export default WhyYourShouldChoose;