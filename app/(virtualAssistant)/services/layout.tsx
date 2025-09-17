// src/app/(services)/services/layout.tsx
import type { ReactNode } from "react";
import Analytics from "@/components/CookieConcentcheck";
import ServiceHeader from "@/components/virtualassistance/serviceHeader";
import ServiceFooter from "@/components/virtualassistance/serviceFooter";
import "@/components/main/Homepage/customstyle.css";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* ✅ Custom Analytics */}
      <Analytics />

      {/* ✅ Custom Header */}
      <ServiceHeader/>

      {/* ✅ Page Content */}
      <main className="mx-auto">
        {children}
      </main>

      {/* ✅ Custom Footer */}
      <ServiceFooter/>
    </>
  );
}
