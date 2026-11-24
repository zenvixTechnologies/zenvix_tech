import LegalPage from "@/components/zenvix/LegalPage";
import { site } from "@/components/zenvix/siteConfig";
import { canonical } from "@/components/zenvix/seo";

export const metadata = { title: "Terms of Service", ...canonical("/terms-of-service") };

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These terms apply to your use of the Zenvix website. By using the site, you agree to use it lawfully and respectfully."
      sections={[
        { heading: "Website information", body: "The site shares general information about Zenvix's services and work. It is provided for information only and does not create a client or service agreement. Project scope, pricing, timelines, deliverables, and other commitments must be agreed separately in writing." },
        { heading: "Using this site", body: "You agree not to misuse the site, attempt to disrupt its operation or security, or use its content in a way that violates applicable law or another person's rights." },
        { heading: "Ownership", body: "Unless otherwise stated, the site design, text, branding, and original materials belong to Zenvix or their respective rights holders. You may view the site for personal or business evaluation; reuse or republication requires prior permission from the relevant rights holder." },
        { heading: "External services and links", body: "The site may link to third-party services, including WhatsApp. Zenvix does not control those services and is not responsible for their content, availability, or terms." },
        { heading: "Availability and liability", body: "We work to keep the site useful and available, but it is provided without a promise that it will always be uninterrupted or error-free. To the extent permitted by applicable law, Zenvix is not liable for losses arising solely from use of, or inability to use, this informational website." },
        { heading: "Updates and contact", body: `We may revise these terms by updating this page. Questions can be sent to ${site.email}.` },
      ]}
    />
  );
}
