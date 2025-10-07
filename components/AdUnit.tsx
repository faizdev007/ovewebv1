// export const triggerConversion = (sendTo: string) => {
//   if (typeof window === "undefined") return;
//   window.dataLayer = window.dataLayer || [];
//   function gtag(...args: any[]) {
//     window.dataLayer.push(args);
//   }
//   gtag("event", "conversion", { send_to: sendTo });
// };