import LegalPage from "@/components/zenvix/LegalPage";
import { site } from "@/components/zenvix/siteConfig";
import { canonical } from "@/components/zenvix/seo";

export const metadata = { title: "Privacy Policy", ...canonical("/privacy-policy") };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what information you may share when you visit Zenvix or contact us, and how it is handled."
      sections={[
        { heading: "Information you provide", body: "If you fill in the project inquiry form, the details you enter are used to prepare a message in WhatsApp. The form does not send your details to a Zenvix server. You choose whether to send the message in WhatsApp, and WhatsApp then handles it under its own privacy terms. You may also contact us directly by email, phone, or WhatsApp." },
        { heading: "Information collected by the site", body: "The site uses session storage in your browser to remember whether its introduction animation has already played during your current session. We do not use that value to identify you. Our hosting provider may process standard technical request data to deliver and secure the site." },
        { heading: "Third-party services", body: "Links and communications may take you to services operated by others, including WhatsApp. Their handling of information is governed by their own policies. The site also loads typefaces through Google Fonts." },
        { heading: "Your choices and contact", body: `You can choose not to submit an inquiry and can contact us through another channel. For privacy questions or requests about information you have sent to us, email ${site.email}.` },
        { heading: "Changes", body: "We may update this policy as the site or our practices change. The date above shows when this page was last updated." },
      ]}
    />
  );
}
