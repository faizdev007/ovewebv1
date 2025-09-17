'use client';

import { fetchGraphQL } from "@/lib/graphqlClient";
import { useEffect, useState } from "react";
import './style.css';

type PolicyBlock = {
  policyTitle?: string | null;
  policyContent?: string | null; // HTML string, not HTMLAreaElement
};

type PrivacyPolicyType = {
  pageTitle?: string;
  policyPage?: {
    policyBlock?: PolicyBlock[];
  };
};

export default function PrivacyPolicy()
{
    const [policyContent, setPolicyContent] = useState<PrivacyPolicyType>();
    
    useEffect(() => {
        (async () => {
        const QUERY = `
        {
            privacyPolicy {
            pageTitle
            policyPage {
                policyBlock {
                    policyTitle
                    policyContent
                }
            }
            }
        }
        `;

        try {
            const data = await fetchGraphQL(QUERY);
            setPolicyContent(data.privacyPolicy);
        } catch (e) {
            console.error("GraphQL fetch failed", e);
        }
        })();
    }, []);

    const pplist = {
        0:{policyTitle: null, policyContent: '<p>This policy explains how Optimal Virtual Employ…pting the practices outlined in this Policy.</p>\n'},
        1:{policyTitle: 'INFORMATION TO BE COLLECTED', policyContent: '<p>Optimal Virtual Employee gathers personal data …e number, email, or extra organization data.</p>\n'},
        2:{policyTitle: 'COOKIES AND OTHER DATA', policyContent: '<p>Optimal Virtual Employee stores certain kinds o…data for research and benchmarking purposes.</p>\n'},
        3:{policyTitle: 'DATA USED BY THIRD PARTIES', policyContent: '<ul>\n<li>To provide our service</li>\n<li>To mainta…ganisations unless it is required by the law</p>\n'},
        4:{policyTitle: 'SECURITY OF DATA', policyContent: '<p>We take every single sensible step to guarantee… encryption to keep any unauthorized access.</p>\n'},
        5:{policyTitle: 'RETENTION AND DESTRUCTION OF DATA', policyContent: '<p>We keep data for a long time. If you wish, on y…tly destroy or de-identify your information.</p>\n'},
        6:{policyTitle: 'CHANGE IN PRIVACY POLICY', policyContent: '<p>We may now and again amend this Privacy Policy.…an up-to-date version of our Privacy Policy.</p>\n'},
        7:{policyTitle: 'FURTHER INFORMATION', policyContent: '<p>Any enquiries in connection with this Privacy P…inated to enquiry@optimalvirtualemployee.com</p>\n'},
    };

    const PPContent = policyContent?.policyPage?.policyBlock;
    
    if(!PPContent || !PPContent.length){
        return (
            <section className="bg-gray-100 xl:h-max flex flex-col gap-6 dark:bg-gray-800 text-white relative px-4 sm:px-6 lg:px-8 mx-auto py-8">
                {/* Heading */}
                <div className="h-8 w-3/4 bg-gray-700 rounded animate-pulse" />

                {/* Section Blocks */}
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                    key={i}
                    className="bg-gray-700 rounded-lg p-6 border border-gray-600 drop-shadow-sm animate-pulse space-y-4">
                    {/* Section Title */}
                    <div className="h-6 w-40 bg-gray-600 rounded" />
                        {/* Section Content */}
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-600 rounded w-full" />
                            <div className="h-4 bg-gray-600 rounded w-5/6" />
                            <div className="h-4 bg-gray-600 rounded w-2/3" />
                        </div>
                    </div>
                ))}
            </section>
        );
    }else{
        return(
            <>
                <div className="relative ppstyle bg-gray-100 dark:bg-black/90 px-4 py-12 sm:px-6 lg:px-8 mx-auto">
                    <h1 className="text-3xl text-center font-bold mb-2">
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-gray-500 mb-8">
                        Last updated: September 8, 2025
                    </p>
                    {Object.values(PPContent).map((single,key)=>(
                        <div key={key} className="mb-6 text-base/6">
                            {single?.policyTitle && 
                                <div className="bg-gray-200 p-3 dark:text-black border-s-3 mb-4 font-bold border-blue-700">
                                    <span dangerouslySetInnerHTML={{__html: single?.policyTitle}}/>
                                </div>
                            }
                            <div>
                                <span dangerouslySetInnerHTML={{ __html: single.policyContent ?? "" }} />
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}