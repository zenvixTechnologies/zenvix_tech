export const portfolioProjects = [
  {
    slug: "vk-accountancy",
    eyebrow: "EdTech & LMS Platform",
    title: "VK Accountancy",
    liveUrl: "https://vkaccountancy.com",
    summary:
      "VK Accountancy is a commercial-grade, full-featured Educational Technology (EdTech) platform engineered with Next.js 16 and React 19. It provides a frictionless learning experience through adaptive HLS video streaming, automated video progress tracking with anti-skip forward lock enforcement, dual-mode authentication (OTP Phone + Password), coupon discount system, and an idempotent Razorpay payment integration.",
    image: "/zenvix/vkaccountancy-hero.png",
    alt: "VK Accountancy LMS homepage featuring tax, accounting, and finance courses with HLS video streaming",
    tags: [
      "EdTech LMS",
      "Next.js 16",
      "HLS Streaming",
      "Razorpay SDK",
      "Anti-Skip Lock",
    ],
    overview:
      "Engineered as a production-grade E-Learning web application, VK Accountancy combines multi-bitrate HLS video playback, anti-skip seek lock progress tracking, dual-mode authentication, dynamic coupons, and idempotent Razorpay payments.",
    notes: [
      {
        label: "Product Direction",
        value:
          "Combines adaptive HLS video streaming with anti-skip seek lock enforcement to guarantee student retention and course completion integrity.",
      },
      {
        label: "User Experience",
        value:
          "Dual-mode authentication (Phone OTP + Password) and silent background session restoration reduce friction for mobile and desktop learners.",
      },
      {
        label: "Portfolio Value",
        value:
          "Demonstrates an industrial-grade EdTech platform with custom HLS player, idempotent Razorpay payments, state persistence, and concurrent Axios auth queueing.",
      },
    ],
    stats: [
      { value: "HLS.js", label: "Video Engine" },
      { value: "Razorpay", label: "Payment Gateway" },
      { value: "Next 16", label: "Framework Base" },
    ],
    businessAreas: [
      "Adaptive HLS Video Streaming Player (Hls.js + Native WebKit Fallback)",
      "Automated Video Progress Tracking & Anti-Skip Seek Lock",
      "Sequential Lesson Progression & Gating",
      "Dual-Mode Authentication (OTP Phone + Password)",
      "Password Recovery & Session Bootstrap",
      "E-Commerce Checkout & Razorpay Integration",
      "Idempotency Header Protection & Pending Payment Recovery",
      "Dynamic Coupon Application & Discount System",
      "Course Exploration, Search & Multi-Tier Sorting",
      "User Dashboard & Enrolled Courses Progress Tracking",
    ],
    pages: [
      "Home / Course Catalog",
      "Course Details Page",
      "Interactive HLS Video Player & Lesson Player",
      "My Courses / Student Dashboard",
      "Sign In / Sign Up (OTP Phone + Password)",
      "Checkout & Razorpay Payment Verification",
      "User Profile & Settings",
    ],
    projectCategories: [
      "EdTech / LMS Platform",
      "Adaptive HLS Video Playback",
      "Anti-Skip Progress Integrity",
      "E-Commerce & Razorpay Monetization",
    ],
    routeInfo: {
      title: "Architecture Stack Focus",
      value: "Next.js App Router + Zustand + Axios Interceptors",
      description:
        "Built with Next.js 16 App Router, Zustand state layer with persistent storage middleware, and an Axios service layer featuring concurrent 401 refresh request queuing.",
    },
    features: [
      "Client-Facing E-Learning / LMS Platform built with Next.js 16 and React 19",
      "Adaptive HLS video streaming with quality resolution switching (1080p, 720p, 480p) and native WebKit fallback",
      "Seek Lock Engine strictly preventing forward seeking past unwatched video segments",
      "Automated background progress syncing every 10 seconds, on pause, and on page unload / visibility state change",
      "Sequential lesson progression locking next lessons until current lesson is marked complete",
      "Dual-mode authentication supporting Password login and Phone OTP verification",
      "Password recovery flow backed by OTP tokens (passwordResetToken)",
      "Silent background session bootstrap preventing white-screens during initial page load",
      "Axios request interceptor handling concurrent 401 Unauthorized responses via in-memory queueing during token refresh",
      "Server-driven Razorpay checkout with custom Idempotency-Key header protection",
      "Pending payment recovery handling alreadyPending payloads gracefully",
      "Dynamic coupon application and price deduction logic",
      "Course catalog navigation with debounced search, category filtering, price sliders, and sorting",
      "User dashboard displaying enrolled course progress percentages",
    ],
    technologies: [
      {
        label: "Frontend",
        items: ["Next.js 16.1.6", "React 19.2.3", "JavaScript"],
      },
      {
        label: "Styling / UI",
        items: [
          "Tailwind CSS v4",
          "Framer Motion 12.38",
          "React Icons 5.5",
          "React Hot Toast 2.6",
        ],
      },
      {
        label: "State / Data",
        items: [
          "Zustand 5.0",
          "Axios 1.13",
          "Persistent local storage state",
        ],
      },
      {
        label: "Video & Media",
        items: [
          "hls.js 1.6",
          "video.js 8.23",
          "@videojs/http-streaming",
        ],
      },
      {
        label: "Payments / Security",
        items: [
          "Razorpay SDK",
          "Idempotency-Key headers",
          "Dynamic Coupon Engine",
        ],
      },
      {
        label: "Architecture",
        items: [
          "Next.js App Router",
          "Axios Refresh Queue Interceptor",
          "Next.js Server Middleware Guard",
        ],
      },
    ],
    liveExperience: {
      title: "VK Accountancy",
      summary:
        "The application delivers a smooth, enterprise-grade EdTech experience combining multi-bitrate HLS video streaming, anti-skip learning integrity, phone OTP auth, and Razorpay payment processing.",
      bullets: [
        "Adaptive HLS video playback provides low-latency streaming across varying network bandwidths.",
        "The seek-lock progress engine enforces genuine student learning before unlocking subsequent lessons.",
        "Idempotent Razorpay order handling prevents duplicate charges and safely recovers pending transactions.",
      ],
      ctaLabel: "Explore VK Accountancy",
    },
  },
  {
    slug: "standard-pile-foundation",
    eyebrow: "SPF Project Details",
    title: "Standard Pile Foundation",
    liveUrl: "https://www.standardpilefoundation.com",
    summary:
      "This is a modern company portfolio website built for Standard Pile Foundation. Its primary goal is to present the Kerala-based geotechnical engineering and pile foundation business professionally, explain its services clearly, showcase completed projects, and generate qualified leads.",
    image: "/zenvix/standard-pile-foundation-hero.png",
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
  {
    slug: "oppam-care",
    eyebrow: "Elder & Home Care Services",
    title: "Oppam Care",
    liveUrl: "https://oppamcare.com",
    summary:
      "Oppam Care is a bilingual (English / Malayalam) website for an elder-care and home-care assistance business in Alappuzha, Kerala. It presents a structured catalogue of 24 home-care services across 4 categories, answers family questions through a searchable bilingual FAQ, and turns every enquiry into a ready-to-send WhatsApp message.",
    image: "/zenvix/oppam-care-hero.png",
    alt: "Oppam Care brand banner showing a caregiver supporting an elderly woman inside a leaf-and-home logo, with the tagline Care Today, Comfort Always",
    tags: [
      "Healthcare Services",
      "Next.js 16",
      "Bilingual EN / ML",
      "WhatsApp Enquiry",
      "Structured SEO",
    ],
    overview:
      "Built as a warm, trust-first service website, Oppam Care pairs a typed catalogue of 24 home-care services with remembered English / Malayalam language switching, a searchable FAQ, and WhatsApp-based enquiry forms for families in Alappuzha.",
    notes: [
      {
        label: "Product Direction",
        value:
          "The calm green palette, caregiver imagery, and Kerala backwater visuals give the brand a caring, local, and dependable presence for families choosing elder care.",
      },
      {
        label: "User Experience",
        value:
          "Families can switch between English and Malayalam at any time, browse services by category, search FAQs, and send an enquiry straight to WhatsApp without creating an account.",
      },
      {
        label: "Portfolio Value",
        value:
          "Demonstrates a bilingual, content-rich service website with a typed service catalogue, statically generated service pages, an accessible custom UI, and a broad SEO and structured-data setup.",
      },
    ],
    stats: [
      { value: "24", label: "Care Services" },
      { value: "EN / ML", label: "Bilingual UI" },
      { value: "Next 16", label: "Framework Base" },
    ],
    businessAreas: [
      "Elder Care Assistance",
      "Home Care & Daily Living Support",
      "Non-Medical Caregiver Services",
      "Nurse-Only Clinical Home Services",
      "Companionship & Personal Care",
      "Family Enquiries via WhatsApp",
    ],
    pages: [
      "Home",
      "Services Catalogue",
      "Individual Service pages using dynamic routing (24 pages)",
      "Home Care",
      "FAQ",
      "Enquiry / Contact",
      "Terms",
    ],
    projectCategories: [
      "Elder Care Services",
      "Home Care Assistance",
      "Bilingual Content Experience",
      "WhatsApp Lead Generation",
    ],
    routeInfo: {
      title: "Dynamic Service Routing",
      value: "/services/[slug]",
      description:
        "Each of the 24 services is generated as its own pre-built page from a typed service catalogue, keeping caregiver and nurse-only services clearly separated and easy to extend.",
    },
    features: [
      "Bilingual English / Malayalam website with language preference remembered between visits",
      "Typed catalogue of 24 home-care services organised into 4 categories",
      "Pre-built, statically generated page for every individual service",
      "Clear separation between non-medical caregiver services and nurse-only services",
      "21 bilingual FAQs with live search and category filters",
      "Enquiry forms that compose a structured message and open it directly in WhatsApp",
      "Accessible custom dropdown with full keyboard navigation",
      "Custom-built scroll animation system with no animation library",
      "Animations switch off automatically for users who prefer reduced motion",
      "Per-page titles and descriptions via the Next.js Metadata API",
      "Sitemap, robots file, and Google Search Console verification",
      "Seven types of JSON-LD structured data for search engines",
      "Responsive, mobile-first layout for families browsing on phones",
    ],
    technologies: [
      {
        label: "Frontend",
        items: ["Next.js 16", "React 19", "TypeScript"],
      },
      {
        label: "Styling / UI",
        items: [
          "Tailwind CSS v4",
          "Custom accessible components",
          "Malayalam web typography",
        ],
      },
      {
        label: "Animation / UX",
        items: [
          "Custom scroll-reveal animation system",
          "prefers-reduced-motion support",
          "Keyboard-accessible custom select",
        ],
      },
      {
        label: "Content / i18n",
        items: [
          "English / Malayalam language switching",
          "Persisted language preference",
          "Typed service and FAQ data",
        ],
      },
      {
        label: "Integrations",
        items: ["WhatsApp click-to-chat enquiries"],
      },
      {
        label: "SEO / Web Features",
        items: [
          "Next.js Metadata API",
          "XML sitemap and robots generation",
          "JSON-LD structured data",
          "Google Search Console verification",
        ],
      },
      {
        label: "Routing / Architecture",
        items: [
          "Next.js App Router",
          "Statically generated service detail pages",
          "Component-driven folder structure",
        ],
      },
    ],
    liveExperience: {
      title: "Oppam Care",
      summary:
        "The live website feels calm, local, and reassuring, helping families in Alappuzha understand the care on offer and reach the team in their preferred language.",
      bullets: [
        "The English / Malayalam switch makes every service and FAQ accessible to families and elders alike.",
        "The service catalogue explains exactly what each caregiver or nurse visit includes before anyone gets in touch.",
        "WhatsApp-based enquiries match how local families already communicate, removing friction from the first contact.",
      ],
      ctaLabel: "Open oppamcare.com",
    },
  },
  {
    slug: "thanal-charitable-society",
    eyebrow: "Charity & Community Welfare",
    title: "THANAL Charitable Society",
    liveUrl: "https://thanalcharitabletrust.org",
    summary:
      "THANAL is the official bilingual (Malayalam / English) website of THANAL Charitable Society, Alappuzha, a registered charity serving Kommady and nearby wards since 2004. It presents the society's healthcare, education and community-welfare work and explains its flagship STEP initiative, Sodality for Terminating Extreme Poverty, built on the idea of \"Micro Contribution – Macro Social Benefit\".",
    image: "/zenvix/thanal-hero.png",
    alt: "THANAL Charitable Society homepage hero with the headline Care that reaches people. Change that stays., set over a photo of a community gathering in Alappuzha",
    tags: [
      "Non-Profit Website",
      "Next.js 16",
      "Bilingual ML / EN",
      "Interactive STEP Explainer",
      "Structured SEO",
    ],
    overview:
      "Built as a calm, trust-first community website, THANAL combines a Malayalam-first single-page experience, an interactive five-stage STEP explainer, a photo gallery with a full-screen lightbox, and WhatsApp-led community sign-up for a local charitable society.",
    notes: [
      {
        label: "Product Direction",
        value:
          "Deep forest greens, warm cream backgrounds, a gold accent and editorial serif headings give the society a dignified, credible and locally rooted presence.",
      },
      {
        label: "User Experience",
        value:
          "Visitors land on Malayalam content, can switch to English at any time, step through how STEP verifies cases and transfers funds, and join the WhatsApp community in one tap.",
      },
      {
        label: "Portfolio Value",
        value:
          "Demonstrates a content-rich bilingual NGO website with a typed content dictionary, accessible interactive components, and a full SEO and structured-data foundation for local search.",
      },
    ],
    stats: [
      { value: "14", label: "Homepage Sections" },
      { value: "ML / EN", label: "Bilingual UI" },
      { value: "Next 16", label: "Framework Base" },
    ],
    businessAreas: [
      "Super Speciality Free Medical Camps",
      "Financial Aid for Cancer & Serious Illness",
      "Annual Educational Scholarships",
      "Food Kits & Elderly Home-Care Support",
      "Housing & Marriage Assistance for Families",
      "STEP Micro-Contribution Community",
    ],
    pages: [
      "Home (single page with 14 anchored sections)",
      "About & Office Bearers",
      "Activities",
      "STEP Initiative (slider & grid views)",
      "Photo Gallery with Lightbox",
      "Join STEP / WhatsApp Community",
      "Contact & Google Map",
      "Terms & Conditions",
    ],
    projectCategories: [
      "Non-Profit / Charity",
      "Healthcare & Education Outreach",
      "Bilingual Content Experience",
      "WhatsApp Community Growth",
    ],
    routeInfo: {
      title: "Content Architecture",
      value: "Typed bilingual dictionary (lib/copy.ts)",
      description:
        "All site text lives in one typed Malayalam / English content dictionary that shares a single TypeScript interface, so both languages are checked for completeness and switch instantly on the client.",
    },
    features: [
      "Bilingual Malayalam / English website with Malayalam as the default language",
      "Dedicated Malayalam typography with Noto Sans Malayalam and adjusted line heights",
      "Sticky header with scroll-spy highlighting of the active section",
      "Full-screen mobile navigation menu",
      "Interactive five-stage STEP explainer with slider and grid views, progress bar and keyboard navigation",
      "Photo gallery of three collections (18 photos) with a full-screen, keyboard-accessible lightbox",
      "Terms & Conditions as an accessible modal dialog and a standalone page",
      "Floating animated WhatsApp widget and WhatsApp community calls to action",
      "Contact section with click-to-call, e-mail links and an embedded Google Map",
      "Four JSON-LD schemas: NGO, WebSite, BreadcrumbList and FAQPage",
      "Open Graph and Twitter card metadata with rich English and Malayalam keywords",
      "Generated sitemap, robots file and web app manifest",
      "Responsive layouts tuned from large desktops down to small phones",
    ],
    technologies: [
      {
        label: "Frontend",
        items: ["Next.js 16", "React 19", "TypeScript"],
      },
      {
        label: "Styling / UI",
        items: [
          "Tailwind CSS v4",
          "Custom CSS design tokens",
          "lucide-react icons",
          "DM Sans & Noto Sans Malayalam",
        ],
      },
      {
        label: "Animation / UX",
        items: [
          "CSS keyframe animations",
          "Smooth anchor scrolling",
          "Keyboard-accessible slider and lightbox",
        ],
      },
      {
        label: "Content / i18n",
        items: [
          "Malayalam / English language switching",
          "Typed bilingual content dictionary",
        ],
      },
      {
        label: "Integrations",
        items: [
          "WhatsApp community links",
          "Google Maps embed",
          "Vercel Analytics",
        ],
      },
      {
        label: "SEO / Web Features",
        items: [
          "Next.js Metadata API",
          "Open Graph & Twitter cards",
          "JSON-LD structured data",
          "Sitemap, robots and web manifest",
        ],
      },
      {
        label: "Routing / Architecture",
        items: [
          "Next.js App Router",
          "Single-page anchored layout",
          "Component-driven section structure",
        ],
      },
    ],
    liveExperience: {
      title: "THANAL Charitable Society",
      summary:
        "The live website feels warm, local and trustworthy, helping people in Alappuzha understand THANAL's work and how small contributions through STEP add up to real support.",
      bullets: [
        "Malayalam-first content with an instant English switch makes the site accessible to local residents and wider supporters alike.",
        "The interactive STEP explainer shows how cases are verified and how contributions reach beneficiaries directly.",
        "The gallery and named office bearers give visitors visible proof of the society's work before they join.",
      ],
      ctaLabel: "Open thanalcharitabletrust.org",
    },
  },
  {
    slug: "jj-marine",
    eyebrow: "Maritime Logistics & HR Solutions",
    title: "JJ Marine",
    liveUrl: "https://jjmarinelogistics.com",
    summary:
      "JJ Marine is the official website of JJ Marine Logistics & HR Solutions Pvt. Ltd., a maritime logistics, crewing and HR company based in Kuttanad, Alappuzha, Kerala. The multi-page site presents marine logistics, recruitment, houseboat, dredging and student-placement services, introduces the leadership team, announces the company's Dubai / GCC expansion, and turns job applications and service enquiries into ready-to-send WhatsApp messages.",
    image: "/zenvix/jj-marine-hero.png",
    alt: "JJ Marine Logistics & HR Solutions homepage hero with a container ship at a port at sunset, Apply for Jobs and Request Services buttons, and service highlights",
    tags: [
      "Maritime Website",
      "Next.js 16",
      "WhatsApp Lead Capture",
      "Recruitment Portal",
      "Structured SEO",
    ],
    overview:
      "Built as a credible, conversion-focused corporate website, JJ Marine pairs a deep teal and gold maritime brand with a service accordion, a leadership showcase, a timed Dubai expansion announcement, and two WhatsApp-based forms for candidates and corporate clients.",
    notes: [
      {
        label: "Product Direction",
        value:
          "Deep marine teal, gold accents and port imagery give the brand an established, trustworthy presence for seafarers, job seekers and shipping clients alike.",
      },
      {
        label: "User Experience",
        value:
          "Candidates apply and clients enquire through short forms that compose a structured WhatsApp message, while a floating WhatsApp button keeps the company one tap away on every page.",
      },
      {
        label: "Portfolio Value",
        value:
          "Demonstrates a lean, frontend-only Next.js marketing site with statically rendered pages, a low-cost lead channel that needs no back-office software, and a full SEO and structured-data foundation.",
      },
    ],
    stats: [
      { value: "7", label: "Public Pages" },
      { value: "2", label: "WhatsApp Forms" },
      { value: "Next 16", label: "Framework Base" },
    ],
    businessAreas: [
      "Marine Logistics (Export / Import, Freight Forwarding, Customs Clearance)",
      "Vessel Agency, Weather & Route Advisory, Spare Parts Delivery",
      "Marine Recruitment & Crewing",
      "Corporate HR Solutions & Staffing",
      "Student & Overseas Placements",
      "Houseboat & Dredging Support",
      "Training & Career Development",
    ],
    pages: [
      "Home",
      "About Us",
      "Services",
      "Careers / Job Application Portal",
      "Contact Us / Service Enquiry",
      "Privacy Policy",
      "Terms of Service",
    ],
    projectCategories: [
      "Maritime Logistics",
      "Recruitment & HR",
      "WhatsApp Lead Generation",
      "Corporate Brand Presence",
    ],
    routeInfo: {
      title: "Project Stack Focus",
      value: "Next.js App Router + Server Components",
      description:
        "Pages are React Server Components rendered statically, with interactive pieces such as the navigation drawer, service accordion, announcement modal and forms isolated as small client components.",
    },
    features: [
      "Multi-page responsive corporate website built with Next.js 16 and React 19",
      "Hero with Apply for Jobs, Request Services and Contact Us calls to action",
      "Single-open services accordion covering 7 service lines with sub-services",
      "Director's Message with a Read More / Read Less toggle",
      "Data-driven leadership grid presenting the management team",
      "Dubai / GCC expansion announcement modal with an auto-closing countdown",
      "Job application form that composes a structured WhatsApp message",
      "Service enquiry form covering 12 industries, also sent through WhatsApp",
      "Floating WhatsApp button, click-to-call and email links on every page",
      "Embedded Google Map for the Alappuzha headquarters",
      "Mobile slide-in navigation drawer with body scroll lock",
      "Open Graph, Twitter card and JSON-LD Organization metadata",
      "Generated sitemap, robots file and Google Analytics integration",
      "Optimised AVIF / WebP images through next/image",
    ],
    technologies: [
      {
        label: "Frontend",
        items: ["Next.js 16.2", "React 19.2", "JavaScript JSX"],
      },
      {
        label: "Styling / UI",
        items: [
          "Tailwind CSS v4",
          "Custom theme tokens in globals.css",
          "lucide-react icons",
          "Custom SVG icon set",
        ],
      },
      {
        label: "Animation / UX",
        items: [
          "CSS keyframe animations",
          "Accordion height transitions",
          "Smooth anchor scrolling",
        ],
      },
      {
        label: "Integrations",
        items: [
          "WhatsApp click-to-chat",
          "Google Analytics 4",
          "Google Maps embed",
          "Google Search Console",
        ],
      },
      {
        label: "SEO / Web Features",
        items: [
          "Next.js Metadata API",
          "Open Graph & Twitter cards",
          "JSON-LD structured data",
          "Sitemap and robots generation",
        ],
      },
      {
        label: "Routing / Architecture",
        items: [
          "Next.js App Router",
          "Statically rendered Server Components",
          "Component-driven folder structure",
        ],
      },
    ],
    liveExperience: {
      title: "JJ Marine",
      summary:
        "The live website feels professional and maritime from the first fold, helping seafarers, students and shipping clients understand JJ Marine's services and reach the team directly.",
      bullets: [
        "Clear Apply for Jobs and Request Services paths separate candidate and client journeys from the hero onwards.",
        "WhatsApp-based forms match how the company already works, turning visitors into conversations without any back-office software.",
        "The leadership grid and Director's Message put real maritime experience in front of visitors to build trust.",
      ],
      ctaLabel: "Open jjmarinelogistics.com",
    },
  },
  {
    slug: "news-bullet-kerala",
    eyebrow: "Digital News Platform",
    title: "News Bullet Kerala",
    liveUrl: "https://newsbulletkerala.com",
    summary:
      "News Bullet Kerala is a subscription-enabled digital news platform built for delivering Kerala-focused news updates and curated video content in a clean, mobile-friendly interface. The application supports user authentication, profile management, subscription plans, premium access flow, dynamic news listing, and an admin-side content management experience for handling news and plans.",
    image: "/zenvix/news-bullet-kerala-hero.png",
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
];

export const featuredProject = portfolioProjects[0];

export const portfolioProjectsBySlug = Object.fromEntries(
  portfolioProjects.map((project) => [project.slug, project]),
);
