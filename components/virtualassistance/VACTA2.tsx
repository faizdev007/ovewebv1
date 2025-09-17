'use client';

const VACTA2 = (CTA:any) => (
    <>   
        <section className="text-black py-12 dark:py-12 flex flex-col items-center relative px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="w-full flex flex-col items-center p-8 rounded-3xl gap-6 bg-oveblue/30 border mx-auto">
                <h2 className="lg:text-3xl text-2xl font-bold text-center"><span dangerouslySetInnerHTML={{ __html: CTA?.CTA?.title ?? "From launch to legacy, we’ve built a model that scales with you. No matter where you are in the journey, we’ll make growth predictable, transparent, and frustration-free." }}/></h2>
                <div className="flex gap-3 items-center">
                    <a href={'/contact-us'} aria-label="contact" className="rounded-full border-3 text-white flex items-center gap-2 border-black bg-gray-900 px-4 py-2 hover:bg-gray-700"><span dangerouslySetInnerHTML={{ __html: CTA?.CTA?.buttonText ?? 'Start Saving Time. Get a Assistant'}}/>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 font-bold">
                            <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    </>
);

export default VACTA2;