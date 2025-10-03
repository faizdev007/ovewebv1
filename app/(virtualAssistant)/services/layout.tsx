import "@/components/main/Homepage/customstyle.css";
import "../services/VAStyle.css";
import type { ReactNode } from "react";
import ServiceHeader from "@/components/virtualassistance/serviceHeader";
import ServiceFooter from "@/components/virtualassistance/serviceFooter";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
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
