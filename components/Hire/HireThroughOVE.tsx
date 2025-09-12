'use client';

import Image from "next/image";

type HTOSectionProps = {
    hire?: {
        hiring_process_title?: { rendered?: string };
        hiringProcessSteps?: {
            step1?: Step;
            step2?: Step;
            step3?: Step;
            step4?: Step;
        }
    };
};

type Step = {
    stepTitle?: string;
    stepDescribtion?: string;
    stepImage?: {
        title?: string;
        sourceUrl?: string;
        node?: { title?: string; sourceUrl?: string }; // to match your JSX usage
    };
};

const steps = {
    step1:{
        stepTitle: "Place a free Request",
        stepDescribtion: "Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.",
        node: { title: 'step1', sourceUrl:"/assets/hire/step1.webp"}
    },
    step2:{
        stepTitle: "Tell us about your needs",
        stepDescribtion: "Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.",
        node: { title: 'step2', sourceUrl:"/assets/hire/step2.webp"}
    },
    step3:{
        stepTitle: "Interview the best",
        stepDescribtion: "Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.",
        node: { title: 'step3', sourceUrl:"/assets/hire/step3.webp"}
    },
    step4:{
        stepTitle: "Onboard the choosen one",
        stepDescribtion: "Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.",
        node: { title: 'step4', sourceUrl:"/assets/hire/step4.webp"}
    }
};

const HireThroughOVE = ({hire}:HTOSectionProps) => {
    const processSteps = hire?.hiringProcessSteps ?? steps;
    return (
        <> 
            <section className="py-20 blackgradiant text-white flex flex-col gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
                <h2 className="md:mb-12 capitalize text-center font-bold md:text-4xl text-3xl"><span dangerouslySetInnerHTML={{ __html: hire?.hiring_process_title ?? '' }}/></h2>
                <div className="md:grid space-y-4 md:grid-cols-2 2xl:grid-cols-4 gap-6 2xl:gap-4 mb-6">
                    {Object.values(processSteps).map((step, index) => (
                        <div key={index} className="flex aspect-[1/1] md:max-h-[300] w-full flex-col justify-center relative items-center gap-3 bg-boxFill p-6 rounded-lg border border-oveblue hover:border-oveblue/50 transition-all duration-300">
                            <div className="relative w-max z-10 px-18 flex flex-col justify-center items-center">
                                <span className="text-[150px] z-20 text-oveblue/50 absolute start-0 w-full h-full hover:scale-125 transition-all flex items-center">{index+1}</span>
                                {step?.stepImage?.node?.sourceUrl &&
                                    <img alt={step?.stepImage?.node?.title ?? ''} src={step?.stepImage?.node?.sourceUrl ?? ''} width={400} height={400} className="w-32 h-auto rounded-md"/>
                                }
                            </div>
                            <h3 className="md:text-2xl text-center text-xl font-bold">{step?.stepTitle}</h3>
                            <p>{step?.stepDescribtion}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <a href="/contact-us" className="border-4 border-oveblue bg-oveblue hover:bg-blue-700 hover:drop-shadow-lg p-2 rounded-md w-max xl:text-3xl md:text-xl text-white px-6 font-bold cursor-pointer">Hire With Confidence</a>
                </div>
            </section>
        </>
    );
};

export default HireThroughOVE;