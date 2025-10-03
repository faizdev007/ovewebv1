// src/app/(services)/services/layout.tsx
import type { ReactNode } from "react";
import Analytics from "@/components/CookieConcentcheck";
import ServiceHeader from "@/components/virtualassistance/serviceHeader";
import ServiceFooter from "@/components/virtualassistance/serviceFooter";
import "@/components/main/Homepage/customstyle.css";
import "../services/VAStyle.css";


export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5K42N2M2"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      
      {/* ✅ Custom Header */}
      <ServiceHeader/>

      {/* ✅ Page Content */}
      <main className="mx-auto manrope">
        {children}
      </main>

      {/* ✅ Custom Footer */}
      <ServiceFooter/>
    </>
  );
}
