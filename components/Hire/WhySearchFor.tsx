import Image from "next/image";

type HireType = {
  id: number;
  slug: string;
  title?: { rendered: string };
  content?: { rendered: string };
  _embedded?: any;
};

type WSFSectionProps = {
  hire: HireType; // 👈 lower camelCase prop name
};

const WSF = ({hire}:WSFSectionProps) => (
    <>
        <section className="pb-12 z-20 flex flex-col items-center gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
            <div className="lg:flex gap-4 items-center">
                <div className="flex flex-col gap-6">
                    <h4 className="text-oveblue mb-8 capitalize font-bold text-4xl">Why search for <span dangerouslySetInnerHTML={{ __html: hire.title?.rendered ?? 'Hire Full-Stack Developer' }}/> for hir through Optimal Virtual Employee ?</h4>
                    <p>If you’ve ever tried to hire remote developers you know the struggle. You can’t meet them in person, which makes assessing their real talents almost impossible. So, you end up with a churn rate that’s through the roof. Now, you’re spending all your time policing contractors or finding devs to hire.</p>
                </div>
                <div className="w-full flex justify-center items-center">
                    <Image src={'/assets/hire/choose.webp'} className="" alt="choose" width={300} height={300}/>
                </div>
            </div>
            <div className="">
                <div className="grid md:grid-cols-2 border-t gap-4 py-10">
                    <div className="text-3xl font-bold">Prime your hiring pipeline</div>
                    <div className="">Access a pool of 1300+ vetted, senior engineers so you can hire remote developers easier. Our always-on hiring pipeline means you never have to wait. Tell us your needs and we respond with a list of devs that meet your needs within 48 hours.</div>
                </div>
                <div className="grid md:grid-cols-2 border-t gap-4 py-10">
                    <div className="text-3xl font-bold">Save time on screening</div>
                    <div className="">Skip interviews with unfit devs with our pre-screened engineers. No matter what skill you need on your team, we have a dev who has proven their skills and ability to get things done to our trained vetting team, so you can hire with confidence.</div>
                </div>
                <div className="grid md:grid-cols-2 border-t gap-4 py-10">
                    <div className="text-3xl font-bold">Greatness guaranteed</div>
                    <div className="">You spend months to find the ‘right’ dev. And when they’re a bad fit, you have to start over. Our zero-risk replacement guarantee allows you to switch your dev for any reason. You ask, we deliver a new dev free of charge. It’s that easy.</div>
                </div>
            </div>
        </section>
    </>
);

export default WSF;