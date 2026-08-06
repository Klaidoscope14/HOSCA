import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  absoluteUrl,
  getSiteUrl,
  siteConfig,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.organization }],
  creator: siteConfig.organization,
  publisher: siteConfig.organization,
  keywords: [
    "HOSCA",
    "HoSCA",
    "IIT Patna",
    "IITP cultural",
    "House of Socio-Cultural Affairs",
    "Inter IIT Cultural Meet",
    "IIT Patna clubs",
  ],
  category: "organization",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 512,
        height: 512,
        alt: "HOSCA IIT Patna logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/home/hosca.png", type: "image/png" }],
    apple: [{ url: "/home/hosca.png" }],
  },
};

function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.organization,
    alternateName: ["HOSCA", "HoSCA", "HOSCA IIT Patna"],
    url: absoluteUrl("/"),
    logo: absoluteUrl(siteConfig.ogImagePath),
    description: siteConfig.description,
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Technology Patna",
      url: "https://www.iitp.ac.in/",
    },
    sameAs: siteConfig.sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} min-h-screen bg-[#030508] text-zinc-100 antialiased`}
      >
        <OrganizationJsonLd />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
