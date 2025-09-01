import Image from "next/image";

type HeroSectionProps = {
    hire: any;
};

const HeroSection = ({hire}:HeroSectionProps) => (
    <>
        <section className="bg-black xl:h-max lg:flex gap-2 dark:bg-gray-800 text-white relative px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="flex lg:w-[60%] flex-col h-full lg:mt-6 justify-between gap-8 items-center md:items-start py-6">
                <h1 className="text-oveblue md:text-6xl text-4xl font-bold">Hire <span dangerouslySetInnerHTML={{ __html: hire?.title ?? 'Full-Stack Developer' }}/></h1> 
                <div dangerouslySetInnerHTML={{ __html: hire?.content ?? '' }}  className="md:text-xl"/>
                <button className="bg-oveblue p-2 rounded w-max md:text-xl hover:bg-blue-700 px-6 font-bold border-5 border-oveblue/90 cursor-pointer flex gap-2 items-center hover:border-oveblue/50">Hire <span dangerouslySetInnerHTML={{ __html: hire?.title ?? 'Full-Stack Developer' }}/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 font-bold">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className="grid md:grid-cols-3 gap-2 w-full">
                    <div className="bg-boxFill flex md:block items-center gap-4 p-4 rounded-xl border border-oveblue drop-shadow-sm shadow-white">
                        <h3 className="text-xl font-bold">1.5K+</h3>
                        <p className="text-sm capitalize text-gray-400">fully vetted developers</p>
                    </div>
                    <div className="bg-boxFill flex md:block items-center gap-4 p-4 rounded-xl border border-oveblue drop-shadow-sm shadow-white">
                        <h3 className="text-xl font-bold">24 hours</h3>
                        <p  className="text-sm capitalize text-gray-400">average matching time</p>
                    </div>
                    <div className="bg-boxFill flex md:block items-center gap-4 p-4 rounded-xl border border-oveblue drop-shadow-sm shadow-white">
                        <h3 className="text-xl font-bold">2.3M hours</h3>
                        <p  className="text-sm capitalize text-gray-400">worked since 2015</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-[40%] lg:flex hidden relative mb-5 justify-center">
                <div className="z-30 flex flex-col justify-end">
                    <div className="absolute z-20 bottom-0">
                        <Image src={'/assets/hire/bg2.webp'} alt="PBG" width={500} height={500} className="rounded-r-xl"/>
                    </div>
                    <img loading="eager" src={hire?.featuredImage?.node?.sourceUrl ?? '/assets/hire/anjali.png'} alt={hire?.featuredImage?.node.title} width={500} height={500} className="relative z-40"/>
                    <div className="absolute border border-oveblue z-40 bg-boxFill bottom-0 end-0 p-4 rounded-xl shadow-sm drop-shadow">
                        <h3 className="md:text-xl font-bold">{ hire?.featuredImage?.node?.title ?? 'Anjali'}</h3>
                        <span className="text-xs font-bold md:text-sm">Senior <span dangerouslySetInnerHTML={{ __html: hire?.title ?? 'Full-Stack Developer' }} /></span>
                        <p className="text-xs flex gap-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-oveblue">
                                <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                            </svg>
                            Verified Profile
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default HeroSection;