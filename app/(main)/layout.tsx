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
        {/* page layout data */}
        <Header/>
        {children}
        <Footer/>
        {/* End page layout data */}
        <CookieBanner/>
      </>

  );
}
