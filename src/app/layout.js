import { Instrument_Serif, Inter, Manrope } from "next/font/google";
import Providers from "@/components/zenvix/Providers";
import { siteDescription } from "@/components/zenvix/seo";
import { site, siteUrl } from "@/components/zenvix/siteConfig";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Only the italic cut is used anywhere on the site; skipping "normal" saves a preloaded font file.
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
  display: "swap",
});

const defaultTitle = "Zenvix | Premium Web Development & UI/UX Agency";

export const metadata = {
  ...(siteUrl && { metadataBase: new URL(siteUrl) }),
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: siteDescription,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: false, email: false, address: false },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    title: defaultTitle,
    description: siteDescription,
    ...(siteUrl && { images: [{ url: "/zenvix/logo.png", width: 1024, height: 1024, alt: "Zenvix logo" }] }),
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: siteDescription,
  },
};

export const viewport = {
  themeColor: "#07070a",
};

// Runs before paint: skips the intro curtain if it already played this session.
const introScript = `try{if(sessionStorage.getItem("zx-intro"))document.documentElement.dataset.intro="seen"}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${instrument.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body className="min-h-full overflow-x-clip">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
