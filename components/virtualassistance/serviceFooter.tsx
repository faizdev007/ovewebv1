'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ServiceFooter() {
    const [loading, setLoading] = useState(true);
    const [darkmod, setdarkmod] = useState(false);

    useEffect(() => {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setdarkmod(isDarkMode);
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
         <div className={`relative ${loading ? ' hidden' : ''}`}>
            <div className="gird divide-y-2 divide-gray-300 relative">
                <div className="px-4 py-2">
                    <div className="container mx-auto grid gap-10 lg:grid-cols-5">
                        {/* Left Section */}
                        <div className="lg:col-span-2">
                            {/* Logo */}
                            <div className="flex items-center gap-2 mb-4">
                                <a href={'/'} className="flex items-center">
                                    { darkmod ? (
                                    <Image loading='eager' priority src={"/assets/logo2.webp"} width={125} height={100} className='h-12 w-auto' alt="OVE" />
                                    ) : (
                                    <Image loading='eager' priority src={"/assets/logo.webp"} width={500} height={450} className='h-12 w-auto' alt="OVE" />
                                    ) }
                                </a>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-600 mb-4">
                                At Optimal Virtual Employee, we specialize in providing top-notch virtual assistance services tailored to meet the unique needs of businesses worldwide. From administrative support to customer service, research, and more, our dedicated virtual assistants help you save time, cut costs, and boost productivity. With a focus on reliability, efficiency, and confidentiality, we act as an extension of your team — empowering you to focus on growth while we handle the rest.
                            </p>

                        </div>

                        {/* Right Section - Links */}
                        <div className="lg:col-span-3 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                        {/* Discover more */}
                        <div>
                            <h3 className="font-semibold mb-4">Discover more</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Industries We Serve</a></li>
                            <li><a href="#" className="hover:text-gray-900">Why DonnaPro</a></li>
                            <li><a href="#" className="hover:text-gray-900">Services</a></li>
                            <li><a href="#" className="hover:text-gray-900">Countries</a></li>
                            <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
                            <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-900">Affiliate</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Our Story</a></li>
                            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-900">FAQs</a></li>
                            <li><a href="#" className="hover:text-gray-900">Press</a></li>
                            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                            <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 text-center md:text-start justify-between items-center text-black relative px-4 py-6 sm:px-6 lg:px-8 mx-auto">
                    <div className="text-xs">
                        @ Copywrite {new Date().getUTCFullYear()} Optimal Virtual Employee. All Rights Reserved.
                    </div>
                    <div>
                        <nav className="flex gap-3">
                            <a href="https://www.facebook.com/Optimal-virtual-Employee-2093585584194627/" aria-label="facebook"><Image src={'/assets/virtualassistance/facebook.svg'} width={100} className="transform transition-all duration-300 hover:scale-105 object-container h-8 w-8" height={100} alt="facebook"/></a>
                            <a href="https://www.linkedin.com/company/optimal-virtual-employee-ove/" aria-label="linkedin"><Image src={'/assets/virtualassistance/linkedin.svg'} className="transform transition-all duration-300 hover:scale-105 object-container h-8 w-8" width={100} height={100} alt="linkedin"/></a>
                            <a href="https://twitter.com/OptimalVE" aria-label="X"><Image src={'/assets/virtualassistance/twitter.svg'} className="transform transition-all duration-300 hover:scale-105 object-container h-8 w-8" width={100} height={100} alt="youtube"/></a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}