'use client';

const items = [
  {
    title: 'DEDICATED MANAGER',
    image: '/assets/whyus/vector1.webp',
    description: 'You’ll have a single point of contact to manage onboarding, performance tracking, and communication — making your remote hiring journey smooth and stress-free.',
  },
  {
    title: 'FLAT FEES',
    span: 'NO HIDDEN COST',
    image: '/assets/whyus/vector2.webp',
    description: 'Say goodbye to surprise charges. With our flat AUD 999/month management fee, you get predictable pricing and peace of mind every billing cycle.',
  },
  {
    title: 'CLEAR BILLING',
    image: '/assets/whyus/vector3.webp',
    description: "We provide complete transparency with bank receipts for each developer's payment. What you see is exactly what you pay — no markups, no confusion.",
  },
];

export default function WhyChooseUs({whychooseus}: any) {
  const steps = whychooseus?.steps.length !== 0 ? whychooseus?.steps : items;
  return (
    <section className="relative px-4 pb-12 dark:py-12 sm:px-6 lg:px-8 mx-auto text-center bg-gray-100 dark:bg-gray-700 dark:text-white">
      <h2 className="xl:text-6xl md:text-4xl text-3xl font-bold text-center mb-5">{whychooseus?.title ?? 'Why choose us'}</h2>
      <div className="text-gray-600 dark:text-white max-w-3xl mx-auto mb-12">
        <span dangerouslySetInnerHTML={{__html:whychooseus?.subtitle ?? "We don’t just connect you with developers — we deliver a seamless hiring experience backed by transparency, reliability, and support. Here’s why businesses love working with us"}}/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((item:any, i:number) => (
          <div key={i} className="flex flex-col items-center">
            <div className="rounded-t-full w-full border-2 border-b-0 p-3 border-dashed border-black dark:border-white overflow-hidden">
              <div className={`pt-6 flex flex-col pb-32 justify-center items-center relative aspect-[1/1] px-4 rounded-t-full inset-shadow-xs inset-shadow-white`} style={{backgroundColor:"#1447e6"}}>
                <h3 className="text-white font-bold text-2xl lg:text-4xl text-shadow-lg">{item.title}</h3>
                {item.span && (
                  <p className="text-white text-sm tracking-widest mt-1">{item.span}</p>
                )}
                <img
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={400}
                  className="mx-auto object-container h-auto w-100 px-5 absolute drop-shadow-sm shadow-white -bottom-6 start-0 end-0 mt-4"
                />
              </div>
            </div>
            <p className="text font-bold text-gray-700 dark:text-white mt-4 max-w-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
