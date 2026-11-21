import dynamic from "next/dynamic";
import BrandMarquee from "./BrandMarquee";
import HeroSection from "./HeroSection";
import JsonLd from "./JsonLd";
import MobileShowcase from "./MobileShowcase";
import { portfolioProjects, portfolioProjectsBySlug } from "./portfolioData";
import ShowcaseStage from "./ShowcaseStage";
import { organizationJsonLd } from "./seo";
import TopNav from "./TopNav";

// Only the fields the home page renders cross into client components;
// the full case-study data stays on the server.
const toPortfolioCard = ({ slug, title, eyebrow, overview, tags, image, alt }) => ({
  slug,
  title,
  eyebrow,
  overview,
  tags: tags.slice(0, 4),
  image,
  alt,
});

const toShot = ({ image, alt }) => ({ image, alt });

const portfolioCards = portfolioProjects.map(toPortfolioCard);

const showcaseShots = {
  left: toShot(portfolioProjectsBySlug["vk-accountancy"]),
  center: toShot(portfolioProjectsBySlug["oppam-care"]),
  right: toShot(portfolioProjectsBySlug["standard-pile-foundation"]),
};

// Below-the-fold sections are code-split; their placeholders reserve space to avoid layout shift.
const ServicesSection = dynamic(() => import("./ServicesSection"), {
  loading: () => <SectionFallback tone="paper" />,
});

const PortfolioSection = dynamic(() => import("./PortfolioSection"), {
  loading: () => <SectionFallback />,
});

// const AboutSection = dynamic(() => import("./AboutSection"), {
//   loading: () => <SectionFallback />,
// });

const TechStackSection = dynamic(() => import("./TechStackSection"), {
  loading: () => <SectionFallback compact />,
});

const ContactSection = dynamic(() => import("./ContactSection"), {
  loading: () => <SectionFallback />,
});

const Footer = dynamic(() => import("./Footer"), {
  loading: () => <SectionFallback compact />,
});

const WhatsAppButton = dynamic(() => import("./WhatsAppButton"));

function SectionFallback({ compact = false, tone = "ink" }) {
  return (
    <div
      aria-hidden="true"
      className={`${tone === "paper" ? "bg-paper" : "bg-ink"} ${compact ? "min-h-[40vh]" : "min-h-[90vh]"}`}
    />
  );
}

export default function ZenvixPage() {
  return (
    <div className="relative min-h-screen bg-ink font-sans text-fg" id="top">
      <JsonLd data={organizationJsonLd()} />
      <a
        className="sr-only z-[110] rounded-full bg-fg px-5 py-3 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        href="#main"
      >
        Skip to content
      </a>
      <TopNav />
      <main className="relative isolate" id="main">
        <HeroSection />
        <ShowcaseStage shots={showcaseShots} />
        <MobileShowcase shots={showcaseShots} />
        <BrandMarquee />
        <ServicesSection />
        <PortfolioSection projects={portfolioCards} />
        {/* <AboutSection /> */}
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
