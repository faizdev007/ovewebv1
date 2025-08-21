import Image from "next/image";

type HTOSectionProps = {
    hire: any;
};

const steps = [
    {
        step: 1,
        title: "Place a free Request",
        description: "Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.",
        imgSrc: "/assets/hire/step1.webp"
    },
    {
        step: 2,
        title: "Tell us about your needs",
        description: "Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.",
        imgSrc: "/assets/hire/step2.webp"
    },
    {
        step: 3,
        title: "Interview the best",
        description: "Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.",
        imgSrc: "/assets/hire/step3.webp"
    },
    {
        step: 4,
        title: "Onboard the choosen one",
        description: "Our dedicated Python developers, skilled at engineering robust web solutions for clients, helped different types and sizes of businesses in diverse industries.",
        imgSrc: "/assets/hire/step4.webp"
    }
];

const HireThroughOVE = ({hire}:HTOSectionProps) => (
    <> 
        <section className="py-20 blackgradiant text-white flex flex-col gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
            <h2 className="md:mb-12 capitalize text-center font-bold md:text-4xl text-3xl">How to Hire <span dangerouslySetInnerHTML={{ __html: hire?.title?.rendered ?? 'Hire Full-Stack Developer' }}/> through OVE</h2>
            <div className="md:grid space-y-4 md:grid-cols-2 2xl:grid-cols-4 gap-6 2xl:gap-4 mb-6">
                {steps.map((step, index) => (
                    <div key={index} className="flex aspect-[1/1] md:max-h-[300] w-full flex-col justify-center items-center relative items-center gap-3 bg-boxFill p-6 rounded-lg border border-oveblue hover:border-oveblue/50 transition-all duration-300">
                        <div className="relative w-max z-10 px-18 flex flex-col justify-center items-center">
                            <span className="text-[150px] z-20 text-oveblue/50 absolute start-0 w-full h-full hover:scale-125 transition-all flex items-center">{step.step}</span>
                            <Image alt="imge" src={step.imgSrc} width={400} height={400} className="w-32 h-auto rounded-md"/>
                        </div>
                        <h3 className="md:text-2xl text-center text-xl font-bold">{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <a href="/contact-us" className="border-4 border-oveblue bg-oveblue hover:bg-blue-700 hover:drop-shadow-lg p-2 rounded-md w-max xl:text-3xl md:text-xl text-white px-6 font-bold cursor-pointer">Hire With Confidence</a>
            </div>
        </section>
    </>
);

export default HireThroughOVE;