// Import necessary modules
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import clsx from "clsx";
import { createClient, repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";

// Import types for metadata
import type { Metadata } from "next";

// Initialize Urbanist font
const urbanist = Urbanist({ subsets: ["latin"] });

// Define your own metadata object
const metadata: Metadata = {
  title: "Yasir Nawaz - Portfolio",
  description:
    "Welcome to Yasir Nawaz's portfolio website. Explore my projects and learn more about my skills and experience in web development.",
  keywords: [
    "Yasir Nawaz",
    "portfolio",
    "web development",
    "JavaScript",
    "React",
    "projects",
    "skills",
    "experience",
  ],
  authors: [
    { name: "Yasir Nawaz", url: "https://linkedin.com/in/yasirnawaz24" },
  ],
  referrer: "origin",
  themeColor: "#0070f3",
  colorScheme: "light",
  canonical: new URL("https://yasirnawaz.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://yasirnawaz.vercel.app",
    title: "Yasir Nawaz - Portfolio",
    description:
      "Welcome to Yasir Nawaz's portfolio website. Explore my projects and learn more about my skills and experience in web development.",
    siteName: "Yasir Nawaz - Portfolio",
    images: [
      {
        url: "https://drive.google.com/file/d/16dkNyroFXYq2AdEIRp4iHNnXggYckfnz/view?usp=sharing",
        alt: "Yasir Nawaz - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@stfuyasir",
    creator: "@stfuyasir",
  },
  applicationName: "Yasir Nawaz Portfolio",
  generator: "Next.js",
  publisher: "Yasir Nawaz",
  robots: "index, follow",
  alternates: {
    canonical: "https://yasirnawaz.vercel.app",
    hreflang: {
      "en-US": "https://yasirnawaz.vercel.app/en-US",
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
};

// Export default function
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100">
      <head>
        {/* Populate metadata fields */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.authors[0].name} />
        <meta name="referrer" content={metadata.referrer} />
        <meta name="theme-color" content={metadata.themeColor} />
        <meta name="color-scheme" content={metadata.colorScheme} />
        <link rel="canonical" href={metadata.canonical.toString()} />
        {/* Add other metadata fields as needed */}
        {metadata.openGraph && (
          <>
            <meta property="og:type" content={metadata.openGraph.type} />
            <meta property="og:url" content={metadata.openGraph.url} />
            <meta property="og:title" content={metadata.openGraph.title} />
            <meta
              property="og:description"
              content={metadata.openGraph.description}
            />
            <meta
              property="og:site_name"
              content={metadata.openGraph.siteName}
            />
            {metadata.openGraph.images &&
              metadata.openGraph.images.map(
                (image: { url: string; alt?: string }, index: number) => (
                  <meta property="og:image" content={image.url} key={index} />
                ),
              )}
          </>
        )}

        {metadata.twitter && (
          <>
            <meta name="twitter:card" content={metadata.twitter.card} />
            <meta name="twitter:site" content={metadata.twitter.site} />
            <meta name="twitter:creator" content={metadata.twitter.creator} />
          </>
        )}
        {metadata.applicationName && (
          <meta name="application-name" content={metadata.applicationName} />
        )}
        {metadata.generator && (
          <meta name="generator" content={metadata.generator} />
        )}
        {metadata.publisher && (
          <meta name="publisher" content={metadata.publisher} />
        )}
        {metadata.robots && <meta name="robots" content={metadata.robots} />}
        {metadata.alternates && (
          <>
            <link
              rel="alternate"
              href={metadata.alternates.canonical}
              hrefLang="x-default"
            />
            {metadata.alternates.hreflang &&
              Object.entries<string>(metadata.alternates.hreflang).map(
                ([lang, url]) => (
                  <link rel="alternate" href={url} hrefLang={lang} key={lang} />
                ),
              )}
          </>
        )}
        {metadata.icons &&
          metadata.icons.map(
            (icon: { rel: string; url: string }, index: number) => (
              <link rel={icon.rel} href={icon.url} key={index} />
            ),
          )}
      </head>
      <body className={clsx(urbanist.className, "relative min-h-screen")}>
        <Header />
        {children}
        <Footer />
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen"></div>
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
