export const portfolioProjects = [
  {
    slug: "news-bullet-kerala",
    eyebrow: "Digital News Platform",
    title: "News Bullet Kerala",
    liveUrl: "https://newsbulletkerala.com",
    summary:
      "News Bullet Kerala is a subscription-enabled digital news platform built for delivering Kerala-focused news updates and curated video content in a clean, mobile-friendly interface. The application supports user authentication, profile management, subscription plans, premium access flow, dynamic news listing, and an admin-side content management experience for handling news and plans.",
    image: "/zenvix/news-bullet-kerala.png",
    alt: "News Bullet Kerala homepage showing the brand header, hero banner, and featured report cards",
    tags: [
      "News Platform",
      "Next.js 16",
      "Subscription Flow",
      "Admin CMS",
    ],
    overview:
      "Built as a responsive media experience, this project combines fast content browsing, subscription conversion, protected user flows, and an admin-facing management layer in one production-ready frontend.",
    notes: [
      {
        label: "Product Direction",
        value:
          "The interface balances fast news discovery with premium conversion, giving the platform a clear editorial feel while still supporting subscription-focused business goals.",
      },
      {
        label: "User Experience",
        value:
          "Authentication, profile access, premium plans, and protected content flows were designed to stay simple and mobile-friendly for repeat daily usage.",
      },
      {
        label: "Portfolio Value",
        value:
          "This project demonstrates a real-world content product with payments, state persistence, protected routes, API integration, and admin-oriented management capabilities.",
      },
    ],
    stats: [
      { value: "10+", label: "Core Features" },
      { value: "Razorpay", label: "Payment Flow" },
      { value: "Next 16", label: "Framework Base" },
    ],
    businessAreas: [
      "User registration and login flow",
      "Persistent authentication state",
      "News listing and detailed news pages",
      "Video feed with infinite scroll loading",
      "Subscription plan display and premium access flow",
      "Profile page with subscription status",
      "Protected routes for authenticated users",
      "Admin dashboard for news and plan management",
    ],
    pages: [
      "Home",
      "Sign Up",
      "Sign In",
      "News Listing",
      "News Details",
      "Video Feed",
      "Subscription Plans",
      "Profile",
      "Admin News Management",
      "Admin Plan Management",
    ],
    projectCategories: [
      "News Delivery",
      "Premium Subscription UX",
      "Video Content Experience",
      "Admin Content Management",
    ],
    routeInfo: {
      title: "Project Stack Focus",
      value: "Next.js App Router + Zustand + Axios",
      description:
        "The frontend uses a component-driven App Router structure, client-side persisted state with Zustand, and organized API communication through Axios with authenticated request handling.",
    },
    features: [
      "Responsive news and media platform built with Next.js and React",
      "User sign up, sign in, and persistent authentication experience",
      "News listing pages with detailed article views",
      "Video content feed with infinite-scroll style loading",
      "Subscription plan discovery and premium user flow",
      "Razorpay payment and subscription integration",
      "Protected routes for authenticated sections",
      "Profile experience with subscription visibility",
      "Reusable UI components for navigation, cards, and loaders",
      "Admin-oriented pages for managing news and subscription plans",
      "Axios-based API layer with token-aware authenticated requests",
      "Refresh-token based session continuity",
    ],
    technologies: [
      {
        label: "Frontend",
        items: ["Next.js 16", "React 19", "JavaScript"],
      },
      {
        label: "Styling / UI",
        items: ["Tailwind CSS 4", "react-icons", "lucide-react", "react-hot-toast"],
      },
      {
        label: "State / Data",
        items: ["Zustand", "Axios", "Persisted auth state"],
      },
      {
        label: "Payments / Access",
        items: ["Razorpay", "Premium access flow", "Protected routes"],
      },
      {
        label: "Architecture",
        items: [
          "Next.js App Router",
          "Reusable component-based frontend architecture",
          "Admin-oriented page flows",
        ],
      },
      {
        label: "Technical Highlights",
        items: [
          "Axios interceptors for authenticated requests",
          "Refresh-token based session continuity",
          "Production API integration for news, videos, auth, and payments",
        ],
      },
    ],
    liveExperience: {
      title: "News Bullet Kerala",
      summary:
        "The live product feels like a practical digital news service, combining fast editorial browsing, premium upsell moments, and a straightforward user account experience.",
      bullets: [
        "The home and listing experience keep content discovery clear across both desktop and mobile layouts.",
        "Authentication and subscription flows are integrated into the product journey instead of feeling bolted on.",
        "The admin-facing sections make the platform more than a brochure site by supporting ongoing content and plan operations.",
      ],
      ctaLabel: "Open newsbulletkerala.com",
    },
  },
  {
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
    liveExperience: {
      title: "Standard Pile Foundation",
      summary:
        "The live website immediately communicates a professional engineering brand presence, clear service positioning, project credibility, and a strong lead-generation focus.",
      bullets: [
        "The hero section establishes trust and authority from the very first fold.",
        "The multi-page structure makes service discovery, project browsing, and inquiry flow straightforward.",
        "The dynamic project architecture is ready for future content expansion.",
      ],
      ctaLabel: "Open standardpilefoundation.com",
    },
  },
];

export const featuredProject = portfolioProjects[0];

export const portfolioProjectsBySlug = Object.fromEntries(
  portfolioProjects.map((project) => [project.slug, project]),
);
