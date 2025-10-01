import CookieBanner from "@/components/CookieConsentBanner";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        {/* page layout data */}
        <Header/>
        {children}
        <Footer/>
        {/* End page layout data */}
        <CookieBanner/>
      </>

  );
}
