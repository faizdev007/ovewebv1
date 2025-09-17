'use client';

import useInView from '../useInView';

const logos = [
  '/assets/companies/company1.webp',
  '/assets/companies/company2.webp',
  '/assets/companies/company3.webp',
  '/assets/companies/company4.webp',
  '/assets/companies/company5.webp',
  '/assets/companies/company6.webp',
  '/assets/companies/company7.webp',
  '/assets/companies/company8.webp',
  '/assets/companies/company9.webp',
  '/assets/companies/company10.webp',
  '/assets/companies/company11.webp',
  '/assets/companies/company12.webp',
  '/assets/companies/company13.webp',
  '/assets/companies/company15.webp',
  '/assets/companies/company16.webp',
  '/assets/companies/company17.webp',
  '/assets/companies/company18.webp',
  '/assets/companies/company19.webp',
  '/assets/companies/company20.webp',
  '/assets/companies/company21.webp',
  '/assets/companies/company22.webp',
  '/assets/companies/company23.webp',
  '/assets/companies/company24.webp',
  '/assets/companies/company25.webp',
];

export default function SkillsVA() {
  const { elementRef, isVisible } = useInView();
  return (
    <section ref={elementRef} className="py-12 dark:py-12 flex flex-col gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
      <div className={`flex items-center overflow-hidden animate-fade animate-once animate-ease-linear`}>
        {/* Left Static Text */}
        <div className="min-w-[150px] pe-2">
          <h2 className='text-lg md:text-2xl font-bold'>Our OVE Come</h2>
          <p className="md:text-sm text-sm text-gray-400">Fully Traind In:</p>
        </div>

        {/* Marquee Section */}
        <div className="flex-1 pe-4 border-s-2 border-gray-300 overflow-hidden relative">
          <div className="relative flex-1 gap-4 overflow-hidden px-4 sm:px-6 lg:px-8 mx-auto ">
              <div className="logo-slider flex w-max md:space-x-8 space-x-4">
                  {logos.map((logo, index) => (
                      <img key={index} src={logo} className="h-16 p-2 border-black bg-white shadow w-auto border rounded" alt={`Logo ${index + 1}`} />
                  ))}
                  {logos.map((logo, index) => (
                      <img key={index} src={logo} className="h-16 p-2 border-black bg-white shadow w-auto border rounded" alt={`Logo ${index + 1}`} />
                  ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
