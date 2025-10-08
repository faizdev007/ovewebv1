'use client';

const companies = [
  { title: 'Barclays', url: '/assets/companies/company3.webp'},
  { title: 'sky', url: '/assets/companies/company5.webp'},
  { title: 'gsk', url: '/assets/companies/company7.webp'},  
  { title: 'cadbury', url: '/assets/companies/company9.webp'},
  { title: 'deliveroo', url: '/assets/companies/company2.webp'},
  { title: 'astraZeneca', url: '/assets/companies/company8.webp'},
  { title: 'Qantas', url: '/assets/companies/company14.webp'},
];

const stats = [
  { number: '17+', title: 'Years of Experience' },
  { number: '400+', title: 'Developers' },
  { number: '50+', title: 'Industries Served' },
  { number: '97%', title: 'Client Retention Rate' },
];

export default function TrustedBySection({trustedbysection}: any) {
  const logos = trustedbysection?.logos.length !== 0 ? trustedbysection?.logos : companies;
  const keymetrics = trustedbysection?.keyMetrics ?? stats;
  const states = stats;
  return (
    <section className="bg-black dark:bg-gray-800 text-white relative px-4 pb-12 dark:py-12 sm:px-6 lg:px-8 mx-auto text-center flex flex-col gap-10">
      {/* Heading */}
      <h2 className="xl:text-6xl md:text-4xl text-3xl font-bold text-center">
        <span className="gradiantorg text-4xl lg:text-6xl md:text-5xl font-bold mb-4">{trustedbysection?.title ?? 'Trusted by'}</span>
      </h2>
      <div className="max-w-4xl mx-auto text-white dark:text-white animate-fade">
        <span dangerouslySetInnerHTML={{__html:trustedbysection?.subtitle ?? 'Trusted by Companies That Shape the Future From Fortune 500 leaders to next-gen disruptors, our developers power innovation across industries — with speed, skill, and accountability at the core'}}/>
      </div>
      {/* Logos */}
      <div className="flex flex-wrap justify-center sm:gap-10 gap-4 items-center">
        {logos.map((company:any, i:number) => (
          <div key={i} className="aspect-[4/1] flex justify-center items-center">
            <img src={company.url} alt={company.title} width={120} height={120} className="object-container hover:grayscale w-auto md:h-12 lg:h-14 2xl:h-18" />
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {keymetrics.map((stat:any, i:any) => (
          <div key={i} className="md:border-l-3 pl-4 border-blue-500 text-center md:text-start">
            <h3 className="text-3xl font-bold text-white animate-fade-left">{stat.number}</h3>
            <p className="text-sm text-gray-300 animate-fade">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
