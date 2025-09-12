'use client';

import Image from "next/image";

type WSFSectionProps = {
  hire?:{
        whyHireTitle?:string;
        whyHireDiscription?:string;
        whyHireImage?: {
            title?:string;
            sourceUrl?: string;
            node?: { title?: string; sourceUrl?: string }; // to match your JSX usage
        };
        whyHireQna?: {
            question?: string;
            answer?: string;
        }[];
    }
};

const WSF = ({hire}:WSFSectionProps) => {
    const qnalist = hire?.whyHireQna ?? {
        0 : {question: 'Prime your hiring pipeline', answer: 'Access a pool of 1300+ vetted, senior engineers so…ist of devs that meet your needs within 48 hours.'},
        1 : {question: 'Save time on screening', answer: 'Skip interviews with unfit devs with our pre-scree…ed vetting team, so you can hire with confidence.'},
        2 : {question: 'Greatness guaranteed', answer: 'You spend months to find the ‘right’ dev. And when…deliver a new dev free of charge. It’s that easy.'}
    };

    return (
        <>
            <section className="pb-12 dark:py-12 z-20 flex flex-col items-center gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                <div className="lg:flex gap-4 items-center">
                    <div className="flex flex-col gap-6">
                        <h4 className="text-oveblue mb-8 capitalize font-bold text-4xl"><span dangerouslySetInnerHTML={{ __html: hire?.whyHireTitle ?? 'Why search for Hire Full-Stack Developer for hir through Optimal Virtual Employee ?' }}/></h4>
                        <p><span dangerouslySetInnerHTML={{ __html: hire?.whyHireDiscription ?? 'If you’ve ever tried to hire remote developers you know the struggle. You can’t meet them in person, which makes assessing their real talents almost impossible. So, you end up with a churn rate that’s through the roof. Now, you’re spending all your time policing contractors or finding devs to hire.' }}/></p>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <img src={hire?.whyHireImage?.node?.sourceUrl ?? '/assets/hire/choose.webp'} className="" alt="choose" width={300} height={300}/>
                    </div>
                </div>
                <div className="">
                    {Object.values(qnalist).map((value,index)=>(
                        <div key={index} className="grid md:grid-cols-2 border-t gap-4 py-10">
                            <div className="text-3xl font-bold">{value?.question ?? 'Prime your hiring pipeline'}</div>
                            <div className="">{value?.answer ?? 'Access a pool of 1300+ vetted, senior engineers so you can hire remote developers easier. Our always-on hiring pipeline means you never have to wait. Tell us your needs and we respond with a list of devs that meet your needs within 48 hours.'}</div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default WSF;