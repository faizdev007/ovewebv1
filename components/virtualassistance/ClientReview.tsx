'use client';

import Image from "next/image";
import Rating from "../Rating";
import TestimonialDev from "../TestimonialDev";
import TestimonialArea from "./TestimonialArea";

const ClientReview = (Testimonials:any) => {
    return(
        <>  
            <section className={`pb-12 dark:py-12 flex flex-col gap-6 relative px-4 py-8 sm:px-6 lg:px-8 mx-auto`}>
                <div className="h-20 aspect-[3/1] overflow-hidden">
                    <Image src={'/assets/google.webp'} alt="employee" width={500} height={500} className="mx-auto object-cover flex justify-center items-center w-32 aspect-[3/1]"/>
                    <div className="flex justify-center">
                        <Rating rating={4.5}/>
                    </div>
                </div>
                <TestimonialArea ClientTestimonials={Testimonials?.Testimonials?.clients}/>
            </section>
        </>
    );
};

export default ClientReview;