export const featuredProject = {
  slug: "standard-pile-foundation",
  eyebrow: "SPF Project Details",
  title: "Standard Pile Foundation",
  liveUrl: "https://www.standardpilefoundation.com",
  summary:
    "This is a modern company portfolio website built for Standard Pile Foundation. Its primary goal is to present the Kerala-based geotechnical engineering and pile foundation business professionally, explain its services clearly, showcase completed projects, and generate qualified leads.",
  image: "/zenvix/standard-pile-foundation.png",
  alt: "Standard Pile Foundation homepage featuring soil investigation services with a blue overlay and construction background",
  tags: ["Engineering Website", "Next.js", "Dynamic Projects", "SEO"],
  overview:
    "This case study is designed to reflect the polished feel of the live website while fitting naturally into the Zenvix portfolio experience. It highlights brand credibility, structured service communication, project discovery, and lead generation in a balanced way.",
  notes: [
    {
      label: "Visual Direction",
      value:
        "The white navigation, bold blue hero overlays, and large industrial imagery give the site a dependable and well-established presence.",
    },
    {
      label: "Business Goal",
      value:
        "The main conversion goal is to explain the company’s services, build trust through completed projects, and capture qualified inquiries.",
    },
    {
      label: "Portfolio Value",
      value:
        "It is a strong portfolio piece for demonstrating a production-ready multi-page website and dynamic project showcase built for a corporate engineering client.",
    },
  ],
  stats: [
    { value: "8", label: "Core Services" },
    { value: "3", label: "Project Categories" },
    { value: "Next 16", label: "Framework Base" },
  ],
  businessAreas: [
    "Soil Investigation",
    "Pile Foundation Work",
    "Pile Load & Integrity Testing",
    "Hydraulic Rotary Piling",
    "DMC Method / DMC Chiseling",
    "Under-reamed Piles",
    "Granular Piles",
    "Sand Piles",
  ],
  pages: [
    "Home",
    "About",
    "Services",
    "Projects",
    "Individual Project Details pages using dynamic routing",
    "Contact",
    "Privacy Policy",
    "Terms of Service",
  ],
  projectCategories: [
    "Churches Under Changanacherry Diocese",
    "Other Churches",
    "Buildings",
  ],
  routeInfo: {
    title: "Dynamic Project Routing",
    value: "/projects/[slug]",
    description:
      "Individual project pages are generated using a dynamic route, making the project showcase easy to scale and maintain.",
  },
  features: [
    "Multi-page responsive company website for an engineering/foundation business",
    "App Router based Next.js architecture",
    "Dynamic project showcase with dedicated detail pages",
    "Lazy-loaded sections for better performance",
    "Animated UI sections using Framer Motion",
    "Contact inquiry form integrated with EmailJS",
    "Embedded Google Maps location section",
    "SEO-focused metadata setup for every major page",
    "robots.js and sitemap.js implementation",
    "Structured data / JSON-LD schema for business SEO",
    "Social sharing metadata with Open Graph and Twitter cards",
    "Reusable component-based frontend structure",
    "Portfolio/gallery-based visual presentation of projects and services",
  ],
  technologies: [
    {
      label: "Frontend",
      items: ["Next.js 16.2.1", "React 19.2.4", "React DOM 19.2.4", "JavaScript JSX"],
    },
    {
      label: "Styling / UI",
      items: [
        "Tailwind CSS v4",
        "Custom CSS in globals.css",
        "Google Fonts",
        "Material Symbols icons",
        "Lucide React icons",
      ],
    },
    {
      label: "Animation / UX",
      items: [
        "Framer Motion",
        "Dynamic imports with next/dynamic",
        "Custom loading experience with AppLoader",
      ],
    },
    {
      label: "Forms / Integrations",
      items: ["EmailJS browser SDK", "Google Maps embed"],
    },
    {
      label: "SEO / Web Features",
      items: [
        "Next.js Metadata API",
        "Open Graph metadata",
        "Twitter metadata",
        "JSON-LD structured data",
        "robots.txt generation via robots.js",
        "XML sitemap generation via sitemap.js",
      ],
    },
    {
      label: "Routing / Architecture",
      items: [
        "Next.js App Router",
        "Dynamic route pages for project details",
        "Component-driven folder structure",
      ],
    },
    {
      label: "Assets",
      items: [
        "Local image assets from public/",
        "Project gallery images",
        "PDF asset in public/SPF.pdf",
      ],
    },
  ],
};
