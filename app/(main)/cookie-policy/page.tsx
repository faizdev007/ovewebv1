'use client';
// src/app/cookie-policy/page.tsx

import { useEffect, useState } from "react";

export default function CookiePolicyPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    if(loading){
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
        return (
        <div className="mx-auto p-6 text-gray-800">
            <h1 className="text-3xl text-center font-bold mb-2">
            Cookie Policy
            </h1>
            <p className="text-sm text-gray-500 mb-8">
            Last updated: September 8, 2025
            </p>
    
            {/* Section 1 */}
            <h2 className="bg-gray-200 p-3 dark:text-black border-s-3 mb-4 font-bold border-blue-700">1. Introduction</h2>
            <p className="mb-4">
            Optimal Virtual Employee (“we,” “us,” or “our”) uses cookies and similar
            technologies on our website{" "}
            <a
                href="https://optimalvirtualemployee.com"
                className="text-blue-600 underline"
            >
                optimalvirtualemployee.com
            </a>{" "}
            (“Website”) to enhance user experience, analyze usage, and provide
            relevant content and marketing. This Cookie Policy explains:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>What cookies are and how we use them</li>
            <li>The types of cookies we use</li>
            <li>How you can manage or withdraw your cookie consent</li>
            </ul>
            <p className="mb-4">
            Under the GDPR and the ePrivacy Directive, cookies (and similar tracking
            technologies) that are not strictly necessary require your prior,
            informed consent.
            </p>
    
            {/* Section 2 */}
            <h2 className="bg-gray-200 p-3 dark:text-black border-s-3 mb-4 font-bold border-blue-700">2. What Are Cookies?</h2>
            <p className="mb-4">
            Cookies are small text files stored on your device (computer, tablet,
            phone) when you visit a website. They help websites remember your
            preferences, activity, or device details for a specified period of time.
            </p>
    
            {/* Section 3 */}
            <h2 className="bg-gray-200 p-3 dark:text-black border-s-3 mb-4 font-bold border-blue-700">
            3. Types of Cookies We Use
            </h2>
            <table className="w-full border border-gray-300 text-sm mb-6">
            <thead className="bg-gray-100">
                <tr>
                <th className="border px-3 py-2 text-left">Cookie Category</th>
                <th className="border px-3 py-2 text-left">Description & Purpose</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="border px-3 py-2">Strictly Necessary</td>
                <td className="border px-3 py-2">
                    These cookies are essential for the Website to function correctly
                    (e.g., user sessions, core functionality). They do not require
                    your consent.
                </td>
                </tr>
                <tr>
                <td className="border px-3 py-2">Functional</td>
                <td className="border px-3 py-2">
                    Improve the performance of the Website by remembering preferences
                    (e.g., language, display options).
                </td>
                </tr>
                <tr>
                <td className="border px-3 py-2">Analytical/Performance</td>
                <td className="border px-3 py-2">
                    Help us understand how visitors use the Website by collecting
                    anonymized data. Used to improve site functionality.
                </td>
                </tr>
                <tr>
                <td className="border px-3 py-2">Marketing & Third-Party</td>
                <td className="border px-3 py-2">
                    Track user behavior and display relevant content or ads across
                    platforms (e.g., Google Analytics, advertising networks). These
                    cookies require explicit consent.
                </td>
                </tr>
            </tbody>
            </table>
    
            {/* Section 4 */}
            <h2 className="bg-gray-200 p-3 dark:text-black border-s-3 mb-4 font-bold border-blue-700">4. Third-Party Cookies</h2>
            <p className="mb-4">
            Certain services (e.g., Google Analytics, social media platforms) may
            place cookies through our Website. These third parties may use your data
            for tracking and profiling purposes. Where applicable, we link to their
            privacy or cookie policies for your review.
            </p>
    
            {/* Section 5 */}
            <h2 className="bg-gray-200 p-3 dark:text-black border-s-3 mb-4 font-bold border-blue-700">5. Consent & Control</h2>
            <p className="mb-2">Your consent to non-essential cookies is:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>
                <strong>Freely given</strong>, via a clear affirmative action (e.g.,
                “Accept”)
            </li>
            <li>
                <strong>Granular</strong>, enabling you to opt in or out by category
                (essential vs. analytics vs. marketing)
            </li>
            <li>
                <strong>Informed</strong>, with clear explanations and links to this
                policy
            </li>
            </ul>
    
            {/* Section 6 */}
            <h2 className="bg-gray-200 p-3 dark:text-black border-s-3 mb-4 font-bold border-blue-700">
            6. How to Manage or Withdraw Consent
            </h2>
            <p className="mb-4">
            Use our cookie preference panel (accessible via the banner or footer) to
            update, withdraw, or customize cookie settings.
            </p>
            <p className="mb-4">
            You can also manage cookies through your browser settings. However,
            disabling cookies may limit certain functionalities of our Website.
            </p>
    
            {/* Section 7 */}
            <h2 className="bg-gray-200 p-3 dark:text-black border-s-3 mb-4 font-bold border-blue-700">
            7. Blocking Cookies Before Consent
            </h2>
            <p className="mb-4">
            Non-essential cookies (e.g., analytics, marketing) are blocked until you
            give explicit consent. This ensures compliance with GDPR’s requirement
            that consent be obtained before processing begins.
            </p>
    
            {/* Section 8 */}
            <h2 className="bg-gray-200 p-3 dark:text-black border-s-3 mb-4 font-bold border-blue-700">
            8. Retention of Consent
            </h2>
            <p className="mb-4">
            We store cookie consent preferences securely for up to 12 months, in
            compliance with GDPR and ePrivacy guidelines.
            </p>
    
            {/* Section 9 */}
            <h2 className="bg-gray-200 p-3 dark:text-black border-s-3 mb-4 font-bold border-blue-700">
            9. Updates to This Policy
            </h2>
            <p className="mb-4">
            We may update this Cookie Policy periodically to reflect changes in
            cookie usage or legal requirements. We encourage you to revisit this
            page regularly. If we make significant changes, we will notify you via
            our Website or email as appropriate.
            </p>
        </div>
        );
    }
}
