"use client";

import CookieConsent from "react-cookie-consent";
import Link from "next/link";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="gdpr-consent"
      style={{
        background: "#2B373B",
        width: "350px",
        textAlign: "left",
        fontSize: "14px",
        borderRadius: "8px",
        padding: "16px",
        position: "fixed",
        margin: "4px",
        bottom: "20px",
        right: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
      buttonStyle={{
        background: "#2562eb",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        padding: "6px 12px",
        fontSize: "14px",
        marginRight: "8px",
      }}
      declineButtonStyle={{
        color: "#2562eb",
        borderRadius: "4px",
        border: "1px solid #2562eb",
        background: "#fff",
        padding: "6px 12px",
        fontSize: "14px",
      }}
      expires={365}
    >
      <p className="mb-2 text-wrap">
        We use cookies to improve your experience.{" "}
        <Link href="/cookie-policy" className="underline text-blue-400">
          Learn more
        </Link>
      </p>
    </CookieConsent>
  );
}
