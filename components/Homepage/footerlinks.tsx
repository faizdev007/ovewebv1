'use client';

import Image from "next/image";

export default function Footerlinks()
{
    const hirebyrole = [
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
    ];

    const hirebyskills = [
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
        {name:'ReactJs Developer',url:'#'},
    ];

    const importantlinks = [
        {name:'Privacy Policy',url:'/privacy_policy'},
        {name:'Sitemap',url:'#'},
        {name:'Contact Us',url:'/contact'},
        {name:'Terms of Use',url:'/use_terms'},
        {name:'Careers',url:'#'},
        {name:'Blog',url:'/blog'},
    ];

    const supportlinks = [
        {name:'Australia', tel:'(+44) 7411118134',flag:'/assets/flags/AUSTRALIA.webp',number:'+447411118134'},
        {name:'UK', tel:'(+61) 489921411',flag:'/assets/flags/UK.webp',number:'+61489921411'},
        {name:'USA', tel:'(+1) 2028499199',flag:'/assets/flags/USA.webp',number:'+12028499199'},
    ];

    const trustedbages = [
        {name:'Award', image:'/assets/trustedbages/award.webp'},
    ];

    return(
        <section className="dark:bg-gray-800 text-white relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
            <div className="grid lg:grid-cols-3 py-10 md:grid-cols-3 md:divide-x-3 divide-gray-300">
                <div className="grid p-4">
                    <div className="mb-6">
                        <h3 className="font-bold text-2xl text-center mb-10">Hire by Role</h3>
                        <div className="grid xl:grid-cols-2 mx-auto px-4 md:gap-x-10 gap-4">
                            {hirebyrole.map((link,key)=>(
                                <a href={link.url} key={key} aria-label={link.name}>{link.name}</a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid p-4">
                    <div className="mb-6">
                        <h3 className="font-bold text-2xl text-center mb-10">Hire by Skill</h3>
                        <div className="grid xl:grid-cols-2 mx-auto px-4 md:gap-x-10 gap-4">
                            {hirebyskills.map((link,key)=>(
                                <a href={link.url} key={key} aria-label={link.name}>{link.name}</a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid p-4">
                    <div className="mb-6">
                        <h3 className="font-bold text-2xl text-center mb-10">Important Links</h3>
                        <div className="grid xl:grid-cols-2 mx-auto px-4 md:gap-x-10 gap-4">
                            {importantlinks.map((link,key)=>(
                                <a href={link.url} key={key} aria-label={link.name}>{link.name}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden items-center py-10 justify-between">
                <div className="mb-6 md:grid md:grid-cols-3 border md:w-max rounded-xl overflow-hidden bg-gray-900">
                    <h3 className="font-bold text-2xl text-center bg-gray-800 flex items-center justify-center border-e p-3 h-full">Dedicated <br></br> Support</h3>
                    <div className="col-span-2 flex flex-col justify-around divide-y divide-gray-500">
                        {supportlinks.map((link,key)=>(
                            <a className="flex gap-2 py-2" href={`tel:${link.number}`} key={key} aria-label={link.name}>
                                <Image alt={'link.name'} className="m-2 w-14 rounded shadow-sm shadow-gray-500" width={100} height={100} src={link.flag}/>
                                <div className="gap-2 text-sm">
                                    <div>{link.name}</div>
                                    <div className="flex gap-2">{link.tel}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="font-bold text-2xl text-center mb-8 hidden">Trusted Badges</h3>
                    <div className="flex flex-wrap justify-center text-center gap-2">
                        {trustedbages.map((link,key)=>(
                            <div key={key}>
                                <Image src={link.image} width={100} height={100} className="h-20 w-20" alt={link.name}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}