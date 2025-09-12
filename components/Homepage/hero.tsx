'use client';

import useInView from "../useInView";
import TrustedBy from "./trustedby";

export default function Herosection()
{
    const { elementRef, isVisible } = useInView();
    return(<section className="bg-black dark:bg-gray-800 text-white">
    <div ref={elementRef} className="relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
        <div className='flex items-center pt-8'>
            <div className={`w-full mx-auto h-full lg:grid grid-cols-2 items-center`}>  
                <div className='p-4 flex flex-col h-full md:justify-between justify-center gap-3 text-center md:text-start'>
                    <div className="flex flex-col gap-6 2xl:gap-18">
                        <h1 className='text-4xl xl:text-5xl flex flex-col gap-4 font-bold text-oveblue'>
                            <span>Need Developers On Demand? We’re Your Augmentation Partner</span>
                            <span className="hidden">without the search</span>
                        </h1>
                        <p className='text-sm lg:text-md xl:text-xl 2xl:text-2xl'>Reduce your time to hire from months to days. Our remote staff augmentation connects you with pre-vetted developers who onboard quickly and start delivering real value from day one.</p>
                    </div>
                    <div className='text-center max-w-auto'>
                        <div className="flex gap-3 md:flex-row flex-col items-start">
                            {/* Primary CTA */}
                            <div className="w-full">
                                <a
                                href="/contact-us"
                                aria-label="Get Started"
                                className="w-full flex justify-center items-center text-center bg-oveblue text-white 
                                            hover:bg-blue-700 transition-all duration-200 
                                            lg:p-3 p-2 2xl:text-xl text-sm font-bold rounded-lg shadow-md 
                                            hover:shadow-lg"
                                >
                                🚀 Get Started
                                </a>
                                <div className="mt-2 text-sm text-gray-300">👆🏼 $0 until you Hire</div>
                            </div>

                            {/* OR Divider */}
                            <span className="font-bold w-full md:w-auto md:text-2xl text-lg mt-1 md:mt-[1.3%] text-center text-gray-500">
                                OR
                            </span>

                            {/* Secondary CTA */}
                            <a
                                href="/contact-us"
                                aria-label="Book a 15-min Call"
                                className="w-full flex justify-center items-center text-center border-2 border-oveblue text-oveblue 
                                        hover:bg-oveblue hover:text-white transition-all duration-200
                                        lg:p-3 p-2 2xl:text-xl text-sm font-bold rounded-lg shadow-sm hover:shadow-md"
                            >
                                📅 Book a Call
                            </a>
                        </div>
                    </div>
                </div>
                <div className='p-4 flex items-start h-full'>
                    <div style={{ position: 'relative', width:'100%', aspectRatio: '16 / 9' }}>
                        <iframe 
                            loading="lazy" title="Gumlet video player"
                            src="https://play.gumlet.io/embed/68b98b969bce03c1972d9e42?background=false&autoplay=true&loop=true&disableControls=false"
                            style={{border:'3px solid #c8c8c8', borderRadius:'4px', position: 'absolute', top: '0', left: '0', height: '100%', width: '100%'}}
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className=''>
        <TrustedBy/>
    </div>
    </section>);
}