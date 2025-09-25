'use client';

import { RoleBaseSlug } from '@/app/(main)/utils/CategorySlug';
import Image from 'next/image';
import { use, useEffect, useState } from 'react';
import Modal from './VAModal';
import ModalForm from './ModalForm';

export default function ServiceHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropmenuOpen, setdropmenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [darkmod, setdarkmod] = useState(false);
  const [activeIndex, setActiveIndex] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [roleSlugs, setRoleSlugs] = useState<string[]>([]);

  useEffect(() => { 
    // Fetch role-based slugs on component mount
    (async () => {
      try {
        const data = await RoleBaseSlug();
        const slugs = data?.category?.hires?.nodes.map(node => node.slug) || [];
        setRoleSlugs(slugs);
      }
      catch (e) {
        console.error('Failed to fetch role-based slugs', e);
      }
    })();
  }, []);

  const hiremenu = [{
    menuTitle:'Role Base Hiring',
    icon:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>),
    menuCategory:'Hire',
    urls:roleSlugs.length > 0 ? roleSlugs.map(slug => {
      const name = slug.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      return { name, url: `/hire/${slug}` };
    }) : [
      {name:'Full-stack Developer',url:'/full_stack_developer'},
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
    <>
      <header className="bg-white text-sm dark:bg-gray-700 text-black dark:text-white shadow-md sticky top-0 z-50">
        <div className="mx-auto flex items-center justify-between px-4 py-2 relative">
          {/* Logo */}
          <a href={'#'} className="flex items-center">
            { darkmod ? (
              <Image loading='eager' priority src={"/assets/logo2.webp"} width={125} height={100} className='h-12 w-auto' alt="OVE" />
            ) : (
              <Image loading='eager' priority src={"/assets/logo.webp"} width={500} height={450} className='h-12 w-auto' alt="OVE" />
            ) }
          </a>

          {/* Desktop Menu */}
          <nav className="lg:flex gap-6 items-center hidden">
            <a href="#WWS" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Who we serve
            </a>

            <a href="/privacy-policy" className="hidden hover:text-blue-600 dark:hover:text-blue-400 transition">
              Privacy Policy
            </a>

            <a href="#SS" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Success stories
            </a>

            <a href="#IWS" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Industries we serve
            </a>
            
            <a href="#FAQ" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              FAQ
            </a>
            
          </nav>
          <div className='lg:flex gap-6 items-center hidden'>
              <a href='tel:+44 7411118134' className='flex gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                </svg>
                <span className=''>+44 7411118134</span>
              </a>
              <button onClick={() => setIsOpen(true)} className="border-2 border-oveblue hover:bg-blue-700 text-oveblue hover:text-white  cursor-pointer px-4 py-2 rounded-md transition">
                Hire My First VA!
              </button>
          </div>

          {/* Mobile Hamburger */}
          <div className='lg:hidden text-2xl focus:outline-none flex gap-4'>
            <a href='tel:+44 7411118134' className='flex gap-2 items-center lg:hidden text-2xl focus:outline-none'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-oveblue border border-oveblue rounded-full h-8 w-8 p-1">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
              </svg>
            </a>
            <button
              className="lg:hidden text-2xl focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </div>
        {/* Full-width dropdown */}
          {showDropdown && (
            <div className='max-w-5xl hidden mx-auto relative -top-3'>
              <div onMouseEnter={()=>{setShowDropdown(true); setActiveIndex(true); }} onMouseLeave={() => { setShowDropdown(false); setActiveIndex(false); }} className="absolute rounded-md w-full drop-shadow z-50 left-0 top-full bg-white dark:bg-gray-700 shadow-lg z-40 py-4">
                <div className='relative px-4 py-2 grid md:grid-cols-3 gap-4 sm:px-6 lg:px-8 mx-auto' >
                  {hiremenu.map((single,key)=>(
                    <div key={key}>
                      <h2 className='border-b-2 font-bold flex gap-2'><span>{single.icon && single.icon}</span>{single.menuTitle}</h2>
                      <div className='grid gap-2 h-[400] overflow-y-hidden py-2'>
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


        {/* hidden section for mobile */}
          {/* company area */}
            <details className="group lg:hidden hidden">
              <summary onClick={() => setCompanyOpen(!companyOpen)} className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                Company
              </summary>
              <div className='max-h-32 overflow-y-auto'>
                <div className={`ml-4 mt-2 space-y-1 text-sm`}>
                  <a href="#WWS" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                    Who we serve
                  </a>
                  <a href="/privacy-policy" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                    Privacy Policy
                  </a>
                  <a href="/guides" className="hidden px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                    Our Story
                  </a>
                  <a href="/whitepapers" className="hidden px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                    Careers
                  </a>
                  <a href="#FAQ" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                    FAQ
                  </a>
                </div>
              </div>
            </details>

            {/* Services Dropdown - Mobile */}
            <details className="group hidden">
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
        {/* mobile hidden section end here */}
        <div
          className={`transition-all duration-500 lg:hidden overflow-hidden absolute top-full start-0 end-0 ${
            menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 flex flex-col gap-2 border-t bg-white dark:bg-gray-800">
              <a href="#WWS" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                  Who we serve
              </a>
              <a href="/privacy-policy" className="hidden px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                  Privacy Policy
              </a>
              <a href="#SS" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                  Success Story
              </a>
              <a href="#IWS" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                  Industries we serve
              </a>
              <a href="/whitepapers" className="hidden px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                  Careers
              </a>
              <a href="#FAQ" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700">
                  FAQ
              </a>

              <hr className='my-2 border-2 rounded border-gray-600'></hr>
              
              <button type='button' onClick={() => setIsOpen(true)} className="block text-center  cursor-pointer border-2 border-oveblue hover:bg-blue-700 hover:dark:bg-gray-700 text-oveblue hover:text-white dark:border-white dark:text-white px-4 py-2 rounded-md transition">
                  Hire My First VA!
              </button>
          </div>
        </div>
      </header>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalForm/>
      </Modal>
    </>
  );
}
