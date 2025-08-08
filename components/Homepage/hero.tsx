'use client';

import useInView from "../useInView";
import TrustedBy from "./trustedby";

export default function Herosection()
{
    const { elementRef, isVisible } = useInView();
    return(<section className="bg-black dark:bg-gray-800 text-white relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
    <div ref={elementRef}>
        <div className='flex items-center pt-8'>
            <div className={`w-full mx-auto h-full lg:grid grid-cols-2 items-center`}>  
                <div className='p-4 flex flex-col h-full md:justify-between justify-center gap-3 text-center md:text-start'>
                    <div className="flex flex-col gap-6 2xl:gap-18">
                        <h1 className='text-4xl xl:text-5xl flex flex-col gap-8 font-bold text-white'>
                            <span>Need Developers On Demand?</span>
                            <span className='text-oveblue'>We’re Your Augmentation Partner</span>
                            <span className="hidden">without the search</span>
                        </h1>
                        <p className='text-sm lg:text-md xl:text-xl 2xl:text-2xl'>Reduce your time to hire from months to days. Our remote staff augmentation connects you with pre-vetted developers who onboard quickly and start delivering real value from day one.</p>
                    </div>
                    <div className='text-center max-w-auto'>
                        <div className="flex gap-2 md:flex-row flex-col-reverse items-start">
                            <div className="w-full">
                                <a href="/contact" className='w-full flex text-center justify-center bg-oveblue hover:bg-blue-700 hover:inset-shadow-sm inset-shadow-oveblue/60 lg:p-3 p-2 2xl:text-xl text-sm font-bold rounded cursor-pointer' aria-label='Get Started'>🚀 Get Started </a>
                                <div className='mt-2 text-sm'>👆🏼 $0 until you Hire</div>
                            </div>
                            <span className="font-bold md:text-2xl text-lg mt-[1.3%] w-full flex-1">OR</span>
                            <a href="/contact" className='w-full bg-gray-600 hover:bg-gray-700 lg:p-3 p-2 2xl:text-xl text-sm font-bold rounded cursor-pointer' aria-label='Book a 15-min Call'>📅 Book a Call</a>
                        </div>
                    </div>
                </div>
                <div className='p-4 flex items-start h-full'>
                    <div style={{ position: 'relative', width:'100%', aspectRatio: '16 / 9' }}>
                        <iframe 
                            loading="lazy" title="Gumlet video player"
                            src="https://play.gumlet.io/embed/682435ae1eaff0ba85e6bd2c?background=false&autoplay=true&loop=true&disableControls=false"
                            style={{border:'3px solid #c8c8c8', borderRadius:'4px', position: 'absolute', top: '0', left: '0', height: '100%', width: '100%'}}
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
        <div className=''>
            <TrustedBy/>
        </div>
    </div>
    </section>);
}