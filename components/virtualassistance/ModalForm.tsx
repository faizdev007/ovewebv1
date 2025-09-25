import React, { useEffect, useState } from "react";
import Rating from "../Rating";
import { onlyNumber } from '@/app/globals'; // adjust path if needed
import Image from "next/image";
import { useRouter } from "next/navigation";

const ModalForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const pointdata = [
        '60% saving on labour cost',
        'No recruitment cost',
        'No upfront Capital cost. We provide the infrastructure.',
        'One invoice. No hidden costs.',
    ]

    const [resMessage, setresMessage] = useState('');
    const [status, setStatus] = useState(false);
    const [darkmod, setdarkmod] = useState(false);
    const [loading, setLoading] = useState(true);
    const [MessageBlock, setMessageBlock] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(true);
        try {
        const res = await fetch('/api/VirtualAssistant', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
            'Content-Type': 'application/json',
            },
        });

        const result = await res.json();
            if (res.ok) {
                sessionStorage.setItem("thankyoucall", "true");
                router.push('/thank-you');
                setresMessage('Message Send Successfully!');
                setMessageBlock(true);
                setStatus(false);
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setError('Failed to send message. Please try again later.');
                setMessageBlock(true);
                setStatus(false);
            }
        } catch ({err}:any) {
            setError(err.response?.data?.message || 'Failed to send message. Please try again later.');
            setMessageBlock(true);
            setStatus(false);
        }

        setTimeout(()=>{
            setresMessage('');
            setMessageBlock(false);
        },2000)
    };

     useEffect(() => {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setdarkmod(isDarkMode);
    }, []);
    return (
        <section className="flex flex-col lg:flex-row justify-between">
            {/* Text Content */}
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0 md:block hidden">
                <a href={'/'} className="flex items-center">
                    { darkmod ? (
                        <Image loading='eager' priority src={"/assets/logo2.webp"} width={125} height={100} className='h-12 w-auto' alt="OVE" />
                    ) : (
                        <Image loading='eager' priority src={"/assets/logo.webp"} width={500} height={450} className='h-12 w-auto' alt="OVE" />
                    ) }
                </a>
                <div className="mb-10">
                    <ul className="mt-5 space-y-3">
                        {pointdata.map((item,number)=>(
                            <li key={number} className="flex items-start gap-3">
                                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 bg-green-500 ring-green-400/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 12.75l6 6 9-13.5"/>
                                    </svg>
                                </span>
                                <span className="text-gray-800">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mx-auto max-w-3xl">
                    <div className="">
                        <h2 className="flex gap-1 items-center md:justify-start justify-center font-bold text-md"><span>RATED </span><Rating rating={5}/><span> ON</span></h2>
                        <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-start gap-2 mt-4">
                            <img className="rounded" src={'/assets/virtualassistance/brandlogo/googlelogo.webp'} width={80} height={50} alt="Google"/>
                            <img className="rounded" src={'/assets/virtualassistance/brandlogo/goodfirmslogo.webp'} width={80} height={50} alt="GoodFirms"/>
                            <img className="rounded" src={'/assets/virtualassistance/brandlogo/clutchlogo.webp'} width={80} height={50} alt="Clutch"/>
                            <img className="rounded" src={'/assets/virtualassistance/brandlogo/productlogo.webp'} width={80} height={50} alt="Product Hunt"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="lg:w-1/2 w-full">
                <div className="mx-auto overflow-hidden">
                    <h2 className="text-3xl md:text-nowrap text-center font-bold mb-2">Book Your Free Consultation</h2>
                    <p className="text-center">Get 3 Shortlisted VAs in Just 24 Hours</p>
                    <form onSubmit={handleSubmit}  className="space-y-4">
                        <div className="mt-1 flex w-full border overflow-hidden border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                            <label htmlFor="name" className="hidden text-sm font-medium text-gray-700">
                                Full Name *
                            </label>
                            <span className="bg-white border-e border-gray-300 flex items-center justify-center w-12">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                                </svg>
                            </span>
                            <input
                                name="name"
                                id="name"
                                type="text"
                                className="p-2 w-full rounded-e-md"
                                placeholder="Enter Full Name"
                                value={formData.name} onChange={handleChange}
                                required
                                autoComplete="false"
                            />
                        </div>
                        <div className="mt-1 flex w-full border overflow-hidden border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                            <label htmlFor="email" className="hidden text-sm font-medium text-gray-700">
                                Email Address *
                            </label>
                            <span className="bg-white border-e border-gray-300 flex items-center justify-center w-12">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                                    <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                                </svg>
                            </span>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                className="p-2 w-full rounded-e-md"
                                placeholder="you@example.com"
                                value={formData.email} onChange={handleChange}
                                required
                                autoComplete="false"
                            />
                        </div>
                        <div className="mt-1 flex w-full border overflow-hidden border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                            <label htmlFor="phone" className="hidden text-sm font-medium text-gray-700">
                                Phone No (Optional)
                            </label>
                            <span className="bg-white border-e border-gray-300 flex items-center justify-center w-12">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <input type="tel" id="phone" value={formData.phone} onChange={handleChange} name="phone" onInput={onlyNumber} maxLength={15} placeholder="Enter Phone Number" className="p-2 w-full rounded-e-md" autoComplete="false"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="hidden text-sm font-medium text-gray-700">
                                Your Requirements *
                            </label>
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 absolute top-2.5 start-2">
                                    <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" clipRule="evenodd" />
                                </svg>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="mt-1 ps-8 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter Your Requirements"
                                    value={formData.message} onChange={handleChange}
                                    required
                                    autoComplete="false"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 p-4 text-white uppercase cursor-pointer rounded-md font-semibold hover:bg-blue-700 transition"
                            disabled={status}
                            >
                            {status ? (
                                <span className="flex items-center text-center justify-center gap-2">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 animate-spin"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                                    />
                                    </svg>
                                    Sending...
                                </span>
                                ) : (
                                'Book Your Free Consultation'
                                )}
                        </button>
                        <p className="text-center text-xs">*No strings attached, just actionable insights.</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ModalForm;