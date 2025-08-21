'use client';

export default function PrivacyPolicy()
{
    const pplist =[
        {title:'',contect:['This policy explains how Optimal Virtual Employee handles personal information and complies with the requirements of the Australian Privacy Act 1988 (Cth) (“Privacy Act”) and the rules made thereunder and for purposes as may be required under the laws.',
            'By accessing Optimal Virtual Employee website at optimalvirtualemployee.com, including all related pages (“Site”), you are accepting the practices outlined in this Policy.']},
        {title:'INFORMATION TO BE COLLECTED',contect:['Optimal Virtual Employee gathers personal data about current and prospective customers, and to a degree, anonymous visitors to our Site. Our essential objective in gathering data is to give you a an effective experience. The primary types of personal data we gather identify with the contact details and business roles of our customers and different business contacts. Normally, this data includes names, company names, addresses, phone numbers, email addresses and job titles.',
            'When you at first express interest acquiring extra information about us, we may likewise request personal information, for example, name, phone number, email, or extra organization data.']},
        {title:'COOKIES AND OTHER DATA',
            contect:[
            'Optimal Virtual Employee stores certain kinds of data at whatever point you connect with us via our website using cookies. We record certain "traffic information" on our server logs including your IP address, marketing automation cookies data, the page you requested, and your correspondences and connections with other site registrants. We utilize this traffic information to assist diagnose issues to have the server and analyse trends.',
            'We track numbers and frequency of guests to our Site. We use the data for research and benchmarking purposes.'
        ]},
        {title:'DATA USED BY THIRD PARTIES',
            contect:[
            'Optimal Virtual Employee does not send visitor data to any third party. However, our visitor data is accessed by third party online tools like Google Analytics and Google Webmasters. We may also reveal data to a government agency or regulatory body if the revelation is required by law.',
        ]},
        {title:'USE OF INFORMATION',
            contect:[],
            lists:[
                'To provide our services',
                'To maintain contact with clients and prospect clients',
                'To Send Information about and related to our services',
                'For general management purposes like invoicing',
                'Other business related purposes',
            ],
            note:'Optimal Virtual Employee will not disclose personal information to other organisations unless it is required by the law'
        },
        {title:'SECURITY OF DATA',
            contect:[
            'We take every single sensible step to guarantee all information held by us is protected and secure. Such security measures incorporate physical assurance and electronic encryption to keep any unauthorized access.',
        ]},
        {title:'RETENTION AND DESTRUCTION OF DATA',
            contect:[
            'We keep data for a long time. If you wish, on your request, we can will permanently destroy or de-identify your information.',
        ]},
        {title:'CHANGE IN PRIVACY POLICY',
            contect:[
            'We may now and again amend this Privacy Policy. You are advised to check our site frequently for an up-to-date version of our Privacy Policy.',
        ]},
        {title:'FURTHER INFORMATION',
            contect:[
            'Any enquiries in connection with this Privacy Policy ought to be coordinated to enquiry@optimalvirtualemployee.com',
        ]},

    ];
    return(
        <div className="relative bg-gray-100 px-4 py-12 sm:px-6 lg:px-8 mx-auto">
            {pplist.map((single,key)=>(
                <div key={key} className="mb-6 text-base/6 text-justify">
                    {single.title ? <div className="bg-gray-200 p-3 dark:text-black border-s-3 mb-4 font-bold border-blue-700">{single.title && single.title}</div> : ''}
                    {single.contect.length > 0 && single.contect.map((para,key2)=>(
                        <p className="mb-2" key={key2}>{para}</p>
                    ))}
                    <ul className="list-disc list-inside text-base/7 mb-4">
                        {single.lists?.length && single.lists?.length > 0 && single.lists?.map((litem,key3)=>(
                            <li key={key3}>{litem}</li>
                        ))}
                    </ul>
                    {single.note ? <p>{single.note && single.note}</p> : ''}
                </div>
            ))}
        </div>
    );
}