import dynamic from "next/dynamic";
import HeroSection from "./HeroSection";
import TopNav from "./TopNav";

const ServicesSection = dynamic(() => import("./ServicesSection"), {
  loading: () => <SectionFallback />,
});

const PortfolioSection = dynamic(() => import("./PortfolioSection"), {
  loading: () => <SectionFallback />,
});

const AboutSection = dynamic(() => import("./AboutSection"), {
  loading: () => <SectionFallback />,
});

const TechStackSection = dynamic(() => import("./TechStackSection"), {
  loading: () => <SectionFallback compact />,
});

const ContactSection = dynamic(() => import("./ContactSection"), {
  loading: () => <SectionFallback />,
});

const Footer = dynamic(() => import("./Footer"), {
  loading: () => <SectionFallback compact />,
});

function SectionFallback({ compact = false }) {
  return (
    <div
      aria-hidden="true"
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 ${
        compact ? "py-12 sm:py-16" : "py-20 sm:py-24"
      }`}
    >
      <div className="glass-card h-28 animate-pulse rounded-3xl sm:h-36" />
    </div>
  );
}

export default function ZenvixPage() {
  return (
    <div
      className="zenvix-theme min-h-screen bg-background font-body text-on-surface selection:bg-primary/30"
      id="top"
    >
      <TopNav />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
