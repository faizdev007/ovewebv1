'use client';
import React from "react";
import Rating from "../Rating";
import { onlyNumber } from '@/app/globals'; // adjust path if needed

const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-between md:px-6 px-2 py-12 bg-[#eaeaea]">
            {/* Text Content */}
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
                <div className="mx-auto max-w-3xl">
                    <div className="mb-5 font-bold hidden">FULLY MANAGED</div>
                    <h1 className="text-4xl font-bold mb-4">
                        OVE Virtual Assistance to Help You Get Things Done
                    </h1>
                    <p className="text-lg mb-6">
                        Get expert help for your business needs. Fill out the form to get started with our virtual assistance services.
                    </p>
                    <ul className="list-disc hidden pl-5">
                        <li>Professional support</li>
                        <li>Flexible plans</li>
                        <li>24/7 availability</li>
                    </ul>
                    <div className="">
                        <h2 className="flex gap-1 items-center md:justify-start justify-center font-bold text-md"><span>RATED </span><Rating rating={5}/><span> ON</span></h2>
                        <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-start gap-2 mt-4">
                            <img className="bg-oveblue/30 rounded p-1" src={'/assets/virtualassistance/brandlogo/googlelogo.webp'} width={80} height={50} alt="Google"/>
                            <img className="bg-oveblue/40 rounded p-1" src={'/assets/virtualassistance/brandlogo/goodfirmslogo.webp'} width={80} height={50} alt="GoodFirms"/>
                            <img className="bg-oveblue/30 rounded p-1" src={'/assets/virtualassistance/brandlogo/clutchlogo.webp'} width={80} height={50} alt="Clutch"/>
                            <img className="bg-oveblue/40 rounded p-1" src={'/assets/virtualassistance/brandlogo/productlogo.webp'} width={80} height={50} alt="Product Hunt"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="lg:w-1/2 w-full">
                <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="text-center flex text-white flex-col gap-4 bg-oveblue/60 p-6">
                        <h2 className="text-4xl font-bold">Get In Touch</h2>
                        <p>Same-Day Response | Strict NDA, 100% Confidential</p>
                    </div>
                    <hr className=""></hr>
                    <form className="space-y-4 md:p-8 p-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name *
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter Your Full Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address *
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Phone No (Optional)
                            </label>
                            <input type="tel" name="phone" onInput={onlyNumber} maxLength={15} placeholder="Enter Your Phone Number" className="p-2 border border-gray-300 rounded w-full"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Your Requirements *
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter Your Requirements"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 p-4 text-white uppercase cursor-pointer rounded-md font-semibold hover:bg-blue-700 transition"
                        >
                            Book Your Free Consultation
                        </button>
                        <p className="text-center text-xs">*No strings attached, just actionable insights.</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;