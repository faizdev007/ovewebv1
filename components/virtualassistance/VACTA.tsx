'use client';

import { useEffect, useState } from "react";
import ModalForm from "./ModalForm";
import Modal from "./VAModal";

const VACTA = (CTA:any) => {
    const [darkmod, setdarkmod] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setdarkmod(isDarkMode);
      }, []);
    return (
        <>   
            <section className="bg-oveblue/10 py-12 dark:py-12 flex flex-col items-center gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
                <h2 className="lg:text-3xl text-2xl font-bold text-center"><span dangerouslySetInnerHTML={{ __html: CTA?.CTA?.title ?? "Still Wasting Time Recruiting Now ?" }}/></h2>
                <div className="flex gap-3 items-center">
                    <button type="button" onClick={() => setIsOpen(true)} aria-label="contact" className="rounded-md text-white cursor-pointer flex items-center gap-2 bg-oveblue px-4 py-2 hover:bg-gray-700"><span dangerouslySetInnerHTML={{ __html: CTA?.CTA?.buttonText ?? 'Book A Free Consultation Now'}}/>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 font-bold md:block hidden">
                            <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </section>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalForm/>
            </Modal>
        </>
    );
}

export default VACTA;