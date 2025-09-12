'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { onlyNumber } from '@/app/globals'; // adjust path if needed

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        phone: '',
        message: ''
    });

    const [resMessage, setresMessage] = useState('');
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(true);
    const [MessageBlock, setMessageBlock] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const trustedbages = [
        {name:'Award', image:'/assets/trustedbages/award.webp'},
    ];

    const contactinfo = [
        {name:'UK',flag:'/assets/flags/UK.webp',numbers: [
            { number: '+44 7411118134', label: 'Sales' },
        ],},
        {name:'Australia',flag:'/assets/flags/AUSTRALIA.webp',numbers: [
            { number: '+61 489921411', label: 'Sales' },
        ],},
        {name:'USA',flag:'/assets/flags/USA.webp',numbers: [
            { number: '+1 2028499199', label: 'Sales' },
        ],},
        {name:'India',flag:'/assets/flags/INDIA.webp',numbers: [
            { number: '+91 9999979934', label: 'Sales' },
        ],},
    ];

    const logos = [
        '/assets/companies/company1.webp',
        '/assets/companies/company2.webp',
        '/assets/companies/company3.webp',
        '/assets/companies/company5.webp',
        '/assets/companies/company7.webp',
        '/assets/companies/company9.webp',
        '/assets/companies/company25.webp',
        '/assets/companies/company12.webp',
        '/assets/companies/company14.webp',
    ];

    const officelocation = [
        {
            name:'Australia',
            image:'/assets/offices/AUSTRALIA.webp',
            address: 'Level 15, 333 Collins St, Melbourne 3000, Victoria, Australia'
        },
        {
            name:'USA',
            image:'/assets/offices/USA.webp',
            address: '109 Mojonera Court, Los Gatos, CA, USA 95032'
        },
        {
            name:'UK',
            image:'/assets/offices/UK.webp',
            address: '4TH Floor, Rex House, 4-12 Regent Street, London SW1Y 4PE(UK)'
        },
        {
            name:'India',
            image:'/assets/offices/INDIA.webp',
            address: 'B27, Images Tower, Sector 132, Noida,  Uttar Pradesh 201301.'
        }
    ];



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(true);
        try {
        const res = await fetch('/api/ContactFormSend', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
            'Content-Type': 'application/json',
            },
        });

        const result = await res.json();
            if (res.ok) {
                setresMessage('Message Send Successfully!');
                setMessageBlock(true);
                setStatus(false);
                setFormData({ name: '', email: '', country: '', phone: '', message: '' });
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
        console.log('Form Submitted:', formData);
    };

    useEffect(() => {
        if(logos.length > 0 && contactinfo.length > 0 && officelocation.length > 0) {
            setLoading(false);
            return;
        }
    },[]);

    if(loading) return (
        <>
            <main className="bg-black/90 h-full dark:bg-gray-800 text-white grid lg:grid-cols-2 gap-8 lg:px-4 px-2 py-12 animate-pulse">
                {/* Left Panel */}
                <div className="bg-white text-black w-full max-w-6xl lg:p-8 p-3 rounded-xl shadow-md space-y-6">
                    {/* Header */}
                    <div>
                    <div className="h-8 bg-gray-300 rounded w-1/3 mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    </div>

                    {/* Trusted Badges (hidden on small screens) */}
                    <div className="hidden md:flex flex-wrap gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="h-20 w-20 bg-gray-300 rounded-md"></div>
                    ))}
                    </div>

                    {/* Contact links */}
                    <div className="flex gap-4">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                    <div className="h-4 bg-gray-300 rounded w-32"></div>
                    </div>

                    {/* Form */}
                    <div className="space-y-4">
                    {/* 2 inputs */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="h-10 bg-gray-300 rounded"></div>
                        <div className="h-10 bg-gray-300 rounded"></div>
                    </div>
                    {/* 2 inputs */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="h-10 bg-gray-300 rounded"></div>
                        <div className="h-10 bg-gray-300 rounded"></div>
                    </div>
                    {/* textarea */}
                    <div className="h-24 bg-gray-300 rounded"></div>
                    {/* button */}
                    <div className="h-10 bg-gray-400 rounded-full w-40"></div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="flex flex-col space-y-6">
                    {/* Title */}
                    <div className="h-6 bg-gray-500 rounded w-2/3"></div>

                    {/* List */}
                    <ul className="space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <li key={i}>
                        <div className="h-4 bg-gray-500 rounded w-1/2 mb-2"></div>
                        <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                        </li>
                    ))}
                    </ul>

                    {/* Logos grid */}
                    <div className="grid grid-cols-3 xl:grid-cols-4 gap-3 mt-8">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div
                        key={i}
                        className="lg:h-20 h-16 bg-gray-600 rounded-md shadow-inner"
                        ></div>
                    ))}
                    </div>
                </div>
            </main>
            <div className="relative animate-pulse">
                <section className="py-12 dark:py-12 bg-gray-100 dark:bg-black/90">
                    <div className="text-center">
                    <div className="h-8 w-2/3 mx-auto bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
                    <div className="h-4 w-1/2 mx-auto bg-gray-200 dark:bg-gray-600 rounded mb-8"></div>
                    </div>

                    <div className="md:flex gap-6 justify-center items-center p-2">
                    {/* Countries Table Placeholder */}
                    <div className="border bg-white dark:bg-gray-800 lg:w-auto w-full border-gray-300 p-3 rounded-xl mb-2">
                        <table className="w-full">
                        <tbody>
                            {[...Array(4)].map((_, i) => (
                            <tr key={i} className={`${i < 3 ? 'border-b' : ''} border-gray-300`}>
                                <td className="border-e border-gray-300">
                                <div className="lg:flex gap-3 p-2 items-center">
                                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-600 rounded"></div>
                                </div>
                                </td>
                                <td>
                                <div className="flex flex-col gap-2 p-4">
                                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-600 rounded"></div>
                                    <div className="h-4 w-28 bg-gray-200 dark:bg-gray-600 rounded"></div>
                                </div>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>

                    {/* Office Locations Table Placeholder */}
                    <div className="border bg-white dark:bg-gray-800 lg:w-auto w-full border-gray-300 p-3 rounded-xl">
                        <table className="w-full">
                        <tbody>
                            {[...Array(3)].map((_, i) => (
                            <tr key={i} className={`${i < 2 ? 'border-b' : ''} border-gray-300`}>
                                <td>
                                <div className="md:flex gap-2 p-2 items-center">
                                    <div className="w-16 h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
                                    <div className="flex flex-col gap-2">
                                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-600 rounded"></div>
                                    <div className="h-3 w-48 bg-gray-200 dark:bg-gray-600 rounded"></div>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </section>
                </div>
        </>
    );

    return (
        <>
            <main className="bg-black/90 dark:bg-gray-800 text-white grid lg:grid-cols-2 gap-8 lg:px-4 px-2 py-12">
                <div className="bg-white text-black w-full max-w-6xl lg:p-8 p-3 rounded-xl shadow-md relative">
                    {/* Left Panel */}
                    <div>
                    <div className='md:flex justify-between'>
                        <div className=''>
                            <h1 className="text-3xl lg:text-5xl font-bold mb-2">Let’s Talk!</h1>
                            <p className="text-gray-600 mb-4">Fill in your details and We’ll reach out to you shortly.</p>
                        </div>
                        <div className='hidden flex-wrap justify-center'>
                            {trustedbages.map((link,key)=>(
                                <div key={key} className='aspect-[1/1] '>
                                    <Image src={link.image} width={120} height={120} className="h-20 object-container w-20" alt={link.name}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-4 mb-6 text-blue-600 font-bold md:text-sm text-xs mt-4">
                        <a href={'tel:+12028499199'} aria-label={"12028499199"} className="hover:underline">📞 Book A Call</a>
                        <a href={'mailto:enquiry@optimalvirtualemployee.com'} aria-label={"enquiry@optimalvirtualemployee.com"} className="hover:underline">✉️ Email us</a>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {MessageBlock &&
                            <div className='absolute top-0 bottom-0 start-0 end-0 bg-white rounded-xl text-center'>
                                <div className='text-center capitalize animate-jump-in animate-once h-full flex flex-col gap-4 items-center justify-center animate-ease-linear'>
                                    {error ?
                                        <>
                                            <span className='border rounded-full p-1 ms-2 bg-red-100 text-red-500 h-14 w-14 flex items-center justify-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 font-bold">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </span>
                                            <span className='text-red-500'>{error}</span>
                                        </>
                                    : 
                                        <>
                                            <span className='border rounded-full p-1 ms-2 bg-green-100 text-green-500 h-14 w-14 flex items-center justify-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 font-bold">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <span className='text-green-500'>{resMessage}</span>
                                        </>
                                    }
                                </div>
                            </div>
                        }
                        <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} className="p-3 border rounded w-full" required />
                        <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} className="p-3 border rounded w-full" required />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" name="country" placeholder="Country (Optional)" value={formData.country} onChange={handleChange} className="p-3 border rounded w-full" />
                        <input type="tel" name="phone" onInput={onlyNumber} maxLength={15} placeholder="Phone Number *" value={formData.phone} onChange={handleChange} className="p-3 border rounded w-full" required/>
                        </div>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Please share your requirements *" className="p-3 border rounded w-full" required />
                        <input type="file" className="w-full hidden border rounded p-2 text-sm" disabled={true} />
                        <button type="submit" className="bg-oveblue text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-all cursor-pointer" disabled={status}>
                            {status ? (
                                <span className="flex items-center gap-2">
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
                                'Send Your Query'
                                )}
                        </button>
                    </form>
                    </div>
                </div>
                {/* Right Panel */}
                <div className="flex flex-col">
                    <div className="space-y-6">
                        <div>
                        <h3 className="text-xl lg:text-3xl font-semibold text-white/60">Trusted by startups and Fortune 500 companies</h3>
                        </div>
                        <ul className="space-y-4 text-white text-sm lg:text-lg">
                        <li>🏆 <strong className='text-white/80'>17+ Years of Experience</strong><br /><span className='text-white/60'>We can handle projects of all complexities.</span></li>
                        <li>👍 <strong className='text-white/80'>150+ Satisfied Customer</strong><br /><span className='text-white/60'>Startups to Fortune 500, we have worked with all.</span></li>
                        <li>👨‍💻 <strong className='text-white/80'>400+ Developers</strong><br /><span className='text-white/60'>Top 1% industry talent to ensure your digital success.</span></li>
                        </ul>
                    </div>

                    {/* Logo List */}
                    <div className="grid grid-cols-3 xl:grid-cols-4 gap-3 mt-8">
                        {logos.map((logo, i) => (
                            <div key={i} className="lg:h-20 md:p-4 overflow-hidden bg-white rounded-md p-2 shadow border border-gray-900 shadow-gray-800 flex items-center justify-center">
                                <Image
                                    src={logo}
                                    alt="logo"
                                    width={200}
                                    height={200}
                                    className="object-container grayscale w-auto h-auto opacity-80 rounded-md overflow-hidden hover:opacity-100 transition"
                                />
                                <span className="text-xs hidden font-medium">{logo}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <div className="relative">
                <div className="bg-black/90 dark:hidden">
                    <Image
                        src="/assets/gray.webp"
                        alt="compare"
                        width={1000}
                        height={1000}
                        priority                // 👈 disables lazy loading, preloads in <head>
                        fetchPriority="high"    // 👈 tells browser to fetch immediately
                        decoding="async"
                        className="w-full"
                    />
                </div>
                <section className='pb-12 dark:py-12 bg-gray-100 dark:bg-black/90'>
                    <div className='text-center'>
                        <h2 className='text-3xl lg:text-5xl font-bold mb-4'>Serving Clients in 38+ Countries</h2>
                        <p className='text-gray-600 mb-8'>We are making an impact worldwide with our global presence and exceptional software solutions.</p>
                    </div>
                    <div className='md:flex gap-6 justify-center items-center p-2'>
                        <div className='border bg-white dark:text-black lg:w-auto w-full border-gray-300 p-3 rounded-xl mb-2'>
                            <table className="">
                                <tbody>
                                    {contactinfo.map((country, index) => (
                                    <tr key={index} className={`${contactinfo.length > index+1 ? 'border-b' : ''} border-gray-300`}>
                                        <td className="border-e border-gray-300">
                                            <div className='lg:flex gap-3 p-2 items-center'>
                                                <Image
                                                    src={country.flag}
                                                    alt={country.name}
                                                    width={150}
                                                    height={150}
                                                    className="rounded-full w-8 h-8 object-cover"
                                                />
                                                <span className="font-bold">{country.name}</span>
                                            </div>
                                        </td>
                                        <td className="">
                                            <div className='flex flex-col gap-2 p-4'>
                                                {country.numbers.map((item, i) => (
                                                    <a
                                                    key={i}
                                                    href={`tel:${item.number.replace(/\s+/g, '')}`}
                                                    className="text-blue-900 font-semibold dark:text-black hover:underline"
                                                    aria-label={item.number}
                                                    >
                                                    {item.number}{' '}
                                                    <span className="text-gray-500 dark:text-black font-normal">
                                                        ({item.label})
                                                    </span>
                                                    </a>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='border bg-white lg:w-auto w-full dark:text-black border-gray-300 p-3 rounded-xl'>
                            <table className="">
                                <tbody>
                                    {officelocation.map((location, index) => (
                                    <tr key={index} className={`${officelocation.length > index+1 ? 'border-b' : ''} border-gray-300`}>
                                        <td className="">
                                            <div className='md:flex gap-2 p-2 items-center'>
                                                <Image src={location.image} width={100} height={100} className='object-container w-16 h-10 rounded' alt={location.name}/>
                                                <div className=''>
                                                    <h3>{location.name} :</h3>
                                                    <p>{location.address}</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
