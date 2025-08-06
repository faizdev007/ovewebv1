'use client';

import Image from "next/image";
import Footerlinks from "./Homepage/footerlinks";
import { lazy } from "react";

export default function Footer()
{
    const officelocation = [
        {
            name:'Australia',
            image:'/assets/offices/AUSTRALIA.webp',
            address: 'Level 15, 333 Collins St, Melbourne 3000, Victoria, Australia',
            tel:'+44 7411118134'
        },
        {
            name:'USA',
            image:'/assets/offices/USA.webp',
            address: '109 Mojonera Court, Los Gatos, CA, USA 95032',
            tel:'+1 2028499199'
            
        },
        {
            name:'UK',
            image:'/assets/offices/UK.webp',
            address: '4TH Floor, Rex House, 4-12 Regent Street, London SW1Y 4PE(UK)',
            tel:'+61 489921411'
        },
        {
            name:'India',
            image:'/assets/offices/INDIA.webp',
            address: 'B27, Sector 132, Noida, Uttar Pradesh 201301.',
            tel:'+98 9999979934'
        }
    ];
    return(
        <div className="gird divide-y-2 footerbg divide-gray-300">
            <Footerlinks/>
            <section className="dark:bg-gray-800 text-white relative px-4 md:py-10 py-2 sm:px-6 lg:px-8 mx-auto pt-10">
                <div className="">
                    <h3 className="text-center hidden text-2xl md:text-3xl lg:text-4xl xl-text-5xl 2xl:text-6xl font-bold mb-8">OUR OFFICE LOCATIONS</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-gray-600 md:divide-y-0 px-4">
                        {/* lg:divide-x-2 divide-y-2 */}
                        {officelocation.map((location,key)=>(
                            <div key={key} className="flex flex-col justify-between px-4 py-6 gap-2" aria-labelledby={location.name}>
                                <div className="flex gap-2 mb-4 items-center">
                                    <Image loading="lazy" width={100} height={50} src={location.image} alt={location.name} className="aspect-[2/1] w-12 object-cover"/>
                                    <h2 className="xl:text-xl font-bold">{location.name}</h2>
                                </div>
                                <p className="text-sm">{location.address}</p>
                                <a className="flex gap-2 items-center hover:underline" href={`tel:${location.tel}`} aria-label={location.tel}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                        <path fillRule="evenodd" d="m3.855 7.286 1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.012 9.012 0 0 0 6.7 6.7A9.024 9.024 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859Z" clipRule="evenodd" />
                                    </svg>
                                    {location.tel}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="blackgradiant dark:bg-gray-800 flex flex-col md:flex-row gap-4 text-center md:text-start justify-between items-center text-white relative px-4 py-6 sm:px-6 lg:px-8 mx-auto">
                <div className="text-xs">
                    @ Copywrite {new Date().getUTCFullYear()} Optimal Virtual Employee. All Rights Reserved.
                </div>
                <div className="">
                    <nav className="flex gap-3">
                        <a href="" aria-label="facebook"><Image src={'/assets/sociallinks/facebook.png'} width={100} className="transform transition-all duration-300 hover:scale-105 object-container h-8 w-8" height={100} alt="facebook"/></a>
                        <a href="" aria-label="linkedin"><Image src={'/assets/sociallinks/linkedin.png'} className="transform transition-all duration-300 hover:scale-105 object-container h-8 w-8" width={100} height={100} alt="linkedin"/></a>
                        <a href="" aria-label="youtube"><Image src={'/assets/sociallinks/youtube.png'} className="transform transition-all duration-300 hover:scale-105 object-container h-8 w-8" width={100} height={100} alt="youtube"/></a>
                    </nav>
                </div>
            </div>
        </div>
    );
}