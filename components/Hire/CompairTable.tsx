
type HireType = {
  id: number;
  slug: string;
  title?: { rendered: string };
  content?: { rendered: string };
  _embedded?: any;
};

type CTSectionProps = {
  hire: HireType; // 👈 lower camelCase prop name
};

const data = {
    headers: ['Factors', 'Optimal Virtual Employee', 'Arc.dev', 'Uplers', 'Toptal'],
    badge: 'BEST VALUE',
    rows: [
        ['Starting Salary (Monthly)', '$1,500–$3,000', '$6,000–$10,000', '$4,000–$8,000', '$8,000–$12,000'],
        ['Licensing Cost\n(Hardware/Software)', 'Zero', 'Extra Cost', 'Extra Cost', 'Extra Cost'],
        ['Project Management Fee', 'Free', '$20–$35/hour', '$15–$30/hour', '$25–$45/hour'],
        ['Timesheet/Proof of Work', 'Advanced timesheet with screenshots', 'Advanced timesheet with screenshots', 'Advanced timesheet with screenshots', 'Advanced timesheet with screenshots'],
        ['AI & Human Vetting', 'AI screening + human evaluation', 'AI screening + human review', 'AI screening + human review', 'AI screening + human review'],
        ['Support & Timezone', 'Business hours support', 'Business hours support', 'Business hours support', 'Business hours support'],
        ['Time to Hire', '1–2 weeks', '2–4 weeks', '2–3 weeks', '1–3 weeks'],
        ['Management Fee', '$799 (Fixed Fee)', '15–30% of total bill', '10–25% of total bill', '20–40% of total bill']
    ]
};

const CTable = ({hire}:CTSectionProps) => (
    <>
        <section className="z-20 pb-12 text-white flex flex-col items-center gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
            <h2 className="text-[42px] font-bold">Still Wasting Weeks Recruiting <span dangerouslySetInnerHTML={{ __html: hire.title?.rendered ?? 'Hire Full-Stack Developer' }}/> ?</h2>
            <p className="text-[16px]">Skip the hiring mess. Get top-tier python talent from us under 48 hours</p>
            <div className="overflow-x-hidden w-full table-auto">
                <div className="overflow-x-auto bg-gray-900 text-white p-6 rounded-lg shadow">
                    <table className="min-w-[900px] w-full table-auto border-collapse">
                        <thead>
                        <tr>
                            {data.headers.map((header, i) => (
                            <th
                                key={i}
                                className={`py-4 px-6 text-left text-lg font-bold ${
                                i === 0
                                ? 'text-white relative border-gray-800 bg-gray-700 rounded-t-md'
                                :
                                i === 1 ? 'bg-oveblue text-white border-blue-700 rounded-t-lg relative' : 'border-x rounded-t-lg relative bg-gray-700 border-gray-800'
                                }`}
                            >
                                {i === 1 && (
                                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-xs px-2 py-1 rounded-full text-white font-semibold">
                                    {data.badge}
                                </span>
                                )}
                                {header}
                            </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {data.rows.map((row, idx) => (
                            <tr key={idx} className="border-t">
                            {row.map((col, i) => (
                                <td
                                key={i}
                                className={`py-4 px-6 align-top text-sm whitespace-pre-line ${
                                    i === 0
                                    ? ' font-semibold border-s border-b border-gray-700'
                                    : i === 1
                                    ? 'text-md border-x-2 border-oveblue border-b font-bold'
                                    : 'border-x border-b border-gray-700'
                                } ${
                                    idx === data.rows.length - 1
                                    ? 'bg-gray-100 text-black font-bold'
                                    : ''
                                }`}
                                >
                                {col}
                                </td>
                            ))}
                            </tr>
                        ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="font-semibold border-s border-b text-white border-gray-700"></td>
                                <td className="text-black border-x-2 border-oveblue border-b-2 font-medium rounded-b">
                                    <div className="p-4 flex justify-center">
                                        <button className="hover:bg-oveblue border-2 border-oveblue cursor-pointer rounded text-white text-sm font-semibold px-4 py-2">
                                            Build Your Team!
                                        </button>
                                    </div>
                                </td>
                                <td className="text-white border-x border-b border-gray-700"></td>
                                <td className="text-white border-x border-b border-gray-700"></td>
                                <td className="text-white border-x border-b border-gray-700"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    </>
);

export default CTable;