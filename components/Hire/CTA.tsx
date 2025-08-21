import Image from "next/image";

type HireType = {
  id: number;
  slug: string;
  title?: { rendered: string };
  content?: { rendered: string };
  _embedded?: any;
};

type CTASectionProps = {
  hire: HireType; // 👈 lower camelCase prop name
};

const CTA = ({hire}:CTASectionProps) => (
    <>   
        <section className="text-white pb-12 flex flex-col items-center gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
            <h2 className="lg:text-3xl text-2xl font-bold">Still Wasting Weeks Recruiting <span dangerouslySetInnerHTML={{ __html: hire.title?.rendered ?? 'Hire Full-Stack Developer' }}/> ?</h2>
            <p>Skip the hiring mess. Get top-tier python talent from us under 48 hours</p>
            <div className="flex gap-3 items-center">
                <a href={'/contact-us'} aria-label="contact" className="rounded-md border-3 flex items-center gap-2 border-black bg-gray-900 px-4 py-2 hover:bg-gray-700">Contact Us
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 font-bold">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </section>
    </>
);

export default CTA;