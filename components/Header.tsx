'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropmenuOpen, setdropmenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [darkmod, setdarkmod] = useState(false);
  const [activeIndex, setActiveIndex] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const hiremenu = [{
    menuTitle:'Role Base Hiring',
    icon:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>),
    menuCategory:'Hire',
    urls:[
      {name:'Full-stack Developer',url:'/hire'},
      {name:'Front-End Developer',url:'/front_end_developer'},
      {name:'Back-End Developer',url:'/back_end_developer'},
      {name:'Database Engineer',url:'/database_engineer'},
    ]
  },
  {
    menuTitle:'Skill Base Hiring',
    icon:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
        ),
    menuCategory:'Hire',
    urls:[
      {name:'React Developer',url:'/react_developer'},
      {name:'Laravel Developer',url:'/laravel_developer'},
      {name:'AI Developer',url:'/ai_developer'},
      {name:'Mobile Developer',url:'/mobile_developer'},
    ]
  },{
    menuTitle:'Quick Solution',
    icon:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
          </svg>
        ),
    menuCategory:'',
    urls:[
      {name:'Staff Agumentation',url:'/staff_agumentation'},
      {name:'Project Teams',url:'/project_teams'},
      {name:'Dedicated Teams',url:'/dedicated_teams'},
      {name:'Contact to Hire',url:'/contact-us'},
    ]
  }
];

const companyM = [{
    urls:[
      {name:'Full-stack Developer',url:'/full_stack_developer'},
      {name:'Front-End Developer',url:'/front_end_developer'},
      {name:'Back-End Developer',url:'/back_end_developer'},
      {name:'Database Engineer',url:'/database_engineer'},
    ]
  },
];

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setdarkmod(isDarkMode);
  }, []);

  return (
    <header className="bg-white font-bold dark:bg-gray-700 text-black dark:text-white shadow-md sticky top-0 z-50">
      <div className="mx-auto flex items-center justify-between px-4 py-2 relative">
        {/* Logo */}
        <a href={'/'} className="flex items-center">
          { darkmod ? (
            <Image src={"/assets/logo2.webp"} width={125} height={100} className='h-12 w-auto' alt="OVE" />
          ) : (
            <Image src={"/assets/logo.webp"} width={125} height={100} className='h-12 w-auto' alt="OVE" />
          ) }
        </a>

        {/* Desktop Menu */}
        <nav className="lg:flex gap-6 items-center hidden">
          <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Home
          </a>
          <div className={'p-3 hidden'} onMouseEnter={()=>{setShowDropdown(true); setActiveIndex(true); }} onMouseLeave={() => { setShowDropdown(false); setActiveIndex(false); }}>
            <button className="hover:text-blue-600 dark:hover:text-blue-400 transition flex gap-2">
              <span>Services</span> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={`size-6 transition-transform duration-300 ${
                    activeIndex ? 'rotate-180' : ''
                }`}>
                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div
            className="relative p-3 group"
            onMouseEnter={() => setShowDropdown(false)}
          >
            <button className="hover:text-blue-600 dark:hover:text-blue-400 transition flex gap-2">
              <span>Company</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6 transition-transform duration-300 group-hover:rotate-180">
                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Simple dropdown */}
            <div className="absolute left-0 top-full -top-3 w-48 bg-white dark:bg-gray-800 shadow-md rounded-md hidden overflow-hidden group-hover:block z-40">
              <a href="/about-us" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                About Us
              </a>
              <a href="/privacy-policy" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                Privacy Policy
              </a>
              <a href="/guides" className="hidden px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                Success Stories
              </a>
              <a href="/whitepapers" className="hidden px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                FAQs for Companies
              </a>
              <a href="/whitepapers" className="hidden px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                How We Vet Developers
              </a>
            </div>
          </div>

          <a href="/contact-us" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Contact Us
          </a>
        </nav>
        <div className='lg:flex gap-6 items-center hidden'>
            <a href="/contact-us" className="border-2 border-oveblue hover:bg-blue-700 text-oveblue hover:text-white px-4 py-2 rounded-md transition">
                Schedule A Call
            </a>
            <a href="/contact-us" className="bg-oveblue hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
                Start Hiring
            </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
      {/* Full-width dropdown */}
        {showDropdown && (
          <div className='max-w-5xl grid mx-auto block relative -top-3'>
            <div onMouseEnter={()=>{setShowDropdown(true); setActiveIndex(true); }} onMouseLeave={() => { setShowDropdown(false); setActiveIndex(false); }} className="absolute rounded-md w-full drop-shadow z-50 left-0 top-full bg-white dark:bg-gray-700 shadow-lg z-40 py-4">
              <div className='relative px-4 py-2 grid md:grid-cols-3 gap-4 sm:px-6 lg:px-8 mx-auto' >
                {hiremenu.map((single,key)=>(
                  <div key={key}>
                    <h2 className='border-b-2 font-bold flex gap-2'><span>{single.icon && single.icon}</span>{single.menuTitle}</h2>
                    <div className='grid gap-2 h-[200] overflow-y-hidden py-2'>
                        {single.urls.map((url,key2)=>(
                          <a href={url.url} key={key2} className="hover:text-blue-600 dark:hover:text-blue-300 text-sm block py-2 hover:underline">
                            {url.name}
                          </a>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      {/* Mobile Menu with Dropdown */}
      <div
        className={`transition-all duration-500 lg:hidden overflow-hidden absolute top-full start-0 end-0 ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-2 border-t bg-white dark:bg-gray-800">
          <a href="/" className="block hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </a>
          {/* Services Dropdown - Mobile */}
          <details className="group lg:hidden">
            <summary onClick={() => setServiceOpen(!serviceOpen)} className="cursor-pointer hidden hover:text-blue-600 dark:hover:text-blue-400">
              Services
            </summary>
            <div className='max-h-32 overflow-y-auto'>
              <div className={`ml-4 mt-2 space-y-1 text-sm animate-flip-down animate-ease-in-out overflow-y-auto ${serviceOpen ? 'block' : 'hidden'}`}>
                {hiremenu.map((single, key) => (
                  <div className='relative py-2 sm:px-6 lg:px-8 mx-auto' key={key}>
                    <h2 className='border-b-2 font-bold md:text-2xl text-sm flex gap-2'>
                      <span>{single.icon && single.icon}</span>{single.menuTitle}
                    </h2>
                    <div className='grid gap-2'>
                      {single.urls.map((url, key2) => (
                        <a href={url.name} key={key2} className="block hover:text-blue-600 dark:hover:text-blue-300">
                          <span className='text-black/60'>{single.menuCategory}</span> {url.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </details>

          {/* company area */}
          <details className="group lg:hidden">
            <summary onClick={() => setCompanyOpen(!companyOpen)} className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
              Company
            </summary>
            <div className='max-h-32 overflow-y-auto'>
              <div className={`ml-4 mt-2 space-y-1 text-sm animate-flip-down animate-ease-in-out overflow-y-auto ${companyOpen ? 'block' : 'hidden'}`}>
                <a href="/about-us" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                  About Us
                </a>
                <a href="/privacy-policy" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                  Privacy Policy
                </a>
                <a href="/guides" className="hidden px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                  Success Stories
                </a>
                <a href="/whitepapers" className="hidden px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                  FAQs for Companies
                </a>
                <a href="/whitepapers" className="hidden px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                  How We Vet Developers
                </a>
              </div>
            </div>
          </details>

          <a href="/contact-us" className="block hover:text-blue-600 dark:hover:text-blue-400">
            Contact Us
          </a>
          <a href="/contact-us" className="block text-center border-2 border-oveblue hover:bg-blue-700 hover:dark:bg-gray-700 text-oveblue hover:text-white dark:border-white dark:text-white px-4 py-2 rounded-md transition">
              Get Started
          </a>
          <a href="/contact-us" className="block text-center bg-oveblue hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
              Hire Developer
          </a>
        </div>
      </div>
    </header>
  );
}
