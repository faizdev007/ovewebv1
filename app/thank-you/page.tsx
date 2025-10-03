import { Metadata } from "next";
import { generateMetadataFromSeo } from "../(main)/utils/seo";
import Script from "next/script";

const defaultSeo = {
  title: "Thank You",
  robots: {
      index: false,
      follow: false,
  },
};

export const metadata: Metadata = generateMetadataFromSeo(defaultSeo);

export default function ThankYouPage() {

  return (
    <>
      {/* ✅ GTM script */}
      <Script id="gtm-script" strategy="beforeInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5K42N2M2');
        `}
      </Script>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5K42N2M2"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <main className="min-h-screen flex flex-col items-center justify-center bg-oveblue p-6">
        <div className="bg-white shadow-xl rounded-2xl max-w-lg w-full text-center p-10">
          {/* Check Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#2562eb]/10">
            <svg
              className="h-10 w-10 text-[#2562eb]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-2xl font-bold text-gray-900">Thank You!</h1>

          {/* Message */}
          <p className="mt-4 text-gray-600">
            Your form has been submitted successfully. We’ll get back to you soon.
          </p>

          {/* Back to Home Button */}
          <a
            href="/"
            className="mt-8 hidden rounded-lg bg-[#2562eb] px-6 py-3 text-white font-medium hover:bg-[#1e4fc9] transition"
          >
            Back to Home
          </a>
        </div>
      </main>
    </>
  );
}
