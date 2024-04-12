import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import clsx from "clsx";
import { createClient, repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";

const urbanist = Urbanist({ subsets: ["latin"] });
const metadata = {
  title: "Yasir Nawaz - Portfolio",
  description: "Welcome to Yasir Nawaz's portfolio website. Explore my projects and learn more about my skills and experience in web development.",
  keywords: ["Yasir Nawaz", "portfolio", "web development", "JavaScript", "React", "projects", "skills", "experience"],
  authors: [{ name: "Yasir Nawaz", url: "https://linkedin.com/in/yasirnawaz24" }],
  referrer: "origin",
  themeColor: "#0070f3",
  colorScheme: "light",
  canonical: new URL("https://yasirnawaz.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://yasirnawaz.vercel.app",
    title: "Yasir Nawaz - Portfolio",
    description: "Welcome to Yasir Nawaz's portfolio website. Explore my projects and learn more about my skills and experience in web development.",
    siteName: "Yasir Nawaz - Portfolio",
    images: [{ url: "https://drive.google.com/file/d/16dkNyroFXYq2AdEIRp4iHNnXggYckfnz/view?usp=sharing", alt: "Yasir Nawaz - Portfolio" }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@stfuyasir",
    creator: "@stfuyasir"
  }
};

export async function generateMetaData(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return {
    title: settings.data.meta_title,
    description: settings.data.meta_description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100">
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
