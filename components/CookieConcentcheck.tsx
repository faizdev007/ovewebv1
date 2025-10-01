'use client';

import Script from "next/script";
import { getCookieConsentValue } from "react-cookie-consent";

export default function Analytics() {
  const consent = getCookieConsentValue("gdpr-consent");
  
  return (
    <>
      <Script
          dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5K42N2M2');
          `,
          }}
      />
    </>
  );
}
