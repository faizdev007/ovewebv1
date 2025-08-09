'use client';

import Image from 'next/image';

const companies = [
  { name: 'Barclays', logo: '/assets/companies/company3.webp'},
  { name: 'sky', logo: '/assets/companies/company5.webp'},
  { name: 'gsk', logo: '/assets/companies/company7.webp'},  
  { name: 'cadbury', logo: '/assets/companies/company9.webp'},
  { name: 'deliveroo', logo: '/assets/companies/company2.webp'},
  { name: 'astraZeneca', logo: '/assets/companies/company8.webp'},
  { name: 'Qantas', logo: '/assets/companies/company14.webp'},
];

const stats = [
  { count: '17+', label: 'Years of Experience' },
  { count: '400+', label: 'Developers' },
  { count: '50+', label: 'Industries Served' },
  { count: '97%', label: 'Client Retention Rate' },
];

export default function TrustedBySection() {
  return (
    <section className="bg-black dark:bg-gray-800 text-white relative px-4 py-12 sm:px-6 lg:px-8 mx-auto text-center flex flex-col gap-10">
      {/* Heading */}
      <h2 className="xl:text-6xl md:text-4xl text-3xl font-bold text-center">
        <span className="gradiantorg text-4xl lg:text-6xl md:text-5xl font-bold mb-4">Trusted by</span>
      </h2>
      <p className="max-w-4xl mx-auto text-white dark:text-white">
        Trusted by Companies That Shape the Future
From Fortune 500 leaders to next-gen disruptors, our developers power innovation across industries — with speed, skill, and accountability at the core
      </p>

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-10 items-center">
        {companies.map((company, i) => (
          <div key={i} className="aspect-[4/1] flex justify-center items-center">
            <Image src={company.logo} alt={company.name} width={120} height={120} className="object-container w-auto" />
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {stats.map((stat, i) => (
          <div key={i} className="md:border-l-3 pl-4 border-blue-500 text-center md:text-start">
            <h3 className="text-3xl font-bold text-white">{stat.count}</h3>
            <p className="text-sm text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
