
'use client';

const data = {
    heading: ['Factors', 'Optimal Virtual Employee', 'Arc.dev', 'Uplers', 'Toptal'],
    badge: 'BEST VALUE',
    rows:[ 
        {
            tableData: {
            data1: "Starting Salary (Monthly)",
            data2: "$1,500–$3,000",
            data3: "$6,000–$10,000",
            data4: "$4,000–$8,000",
            data5: "$8,000–$12,000",
            }
        },
        {
            tableData: {
            data1: "Licensing Cost (Hardware/Software)",
            data2: "Zero",
            data3: "Extra Cost",
            data4: "Extra Cost",
            data5: "Extra Cost",
            }
        },
        {
            tableData: {
            data1: "Project Management Fee",
            data2: "Free",
            data3: "$20–$35/hour",
            data4: "$15–$30/hour",
            data5: "$25–$45/hour",
            }
        },
        {
            tableData: {
            data1: "Timesheet/Proof of Work",
            data2: "Advanced timesheet with screenshots",
            data3: "Advanced timesheet with screenshots",
            data4: "Advanced timesheet with screenshots",
            data5: "Advanced timesheet with screenshots",
            }
        },
        {
            tableData: {
            data1: "AI & Human Vetting",
            data2: "AI screening + human evaluation",
            data3: "AI screening + human review",
            data4: "AI screening + human review",
            data5: "AI screening + human review",
            }
        },
        {
            tableData: {
            data1: "Support & Timezone",
            data2: "Business hours support",
            data3: "Business hours support",
            data4: "Business hours support",
            data5: "Business hours support",
            }
        },
        {
            tableData: {
            data1: "Time to Hire",
            data2: "1–2 weeks",
            data3: "2–4 weeks",
            data4: "2–3 weeks",
            data5: "1–3 weeks",
            }
        },
        {
            tableData: {
            data1: "Management Fee",
            data2: "$799 (Fixed Fee)",
            data3: "15–30% of total bill",
            data4: "10–25% of total bill",
            data5: "20–40% of total bill",
            }
        }
    ]
};

const CTable = (PriceTable:any) =>{
    const headers = PriceTable?.PriceTable?.heading ?? data.heading;
    const rowsdata = PriceTable?.PriceTable?.rows ?? data.rows;
    return (
        <>
            <section className="z-20 pb-12 dark:py-12 text-white flex flex-col items-center gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                <h2 className="text-[42px] font-bold"><span dangerouslySetInnerHTML={{ __html: PriceTable?.PriceTable?.title ?? 'Still Wasting Weeks Recruiting Hire Full-Stack Developer ?' }}/></h2>
                <p className="text-[16px]"><span dangerouslySetInnerHTML={{__html:PriceTable?.PriceTable?.subtitle ?? 'Skip the hiring mess. Get top-tier python talent from us under 48 hours'}}/></p>
                <div className="overflow-x-hidden w-full table-auto">
                    <div className="overflow-x-auto bg-gray-900 text-white p-6 rounded-lg shadow">
                        <table className="min-w-[900px] w-full table-auto border-collapse">
                            <thead>
                            <tr>
                                {headers.map((header:string, index:number) => (
                                    header !== null && 
                                    <th
                                        key={index}
                                        className={`py-4 px-6 text-left text-lg font-bold ${
                                        index === 0
                                        ? 'text-white relative border-gray-800 bg-gray-700 rounded-t-md'
                                        :
                                        index === 1 ? 'bg-oveblue text-white border-blue-700 rounded-t-lg relative' : 'border-x rounded-t-lg relative bg-gray-700 border-gray-800'
                                        }`}
                                    >
                                        {index === 1 && (
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
                            {rowsdata.map((row:any, idx:number) => (
                                <tr key={idx} className="border-t">
                                    {row.map((colValue:string, i:number) => (
                                        colValue !== null &&
                                        <td
                                        key={i}
                                        className={`py-4 px-6 align-top text-sm whitespace-pre-line ${
                                            i === 0
                                            ? ' font-semibold border-s border-b border-gray-700'
                                            : i === 1
                                            ? 'text-md border-x-2 border-oveblue border-b font-bold'
                                            : 'border-x border-b border-gray-700'
                                        }`}
                                        >
                                        {colValue}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CTable;