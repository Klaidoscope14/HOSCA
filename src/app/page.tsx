import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import YoutubeSection from "@/components/YoutubeSection";
import HomePageLayout from "@/components/HomePageLayout";
import { createPageMetadata, siteConfig } from "@/lib/seo";

const homeMeta = createPageMetadata({
  title: siteConfig.name,
  description:
    "HOSCA — House of Socio-Cultural Affairs at IIT Patna. Explore cultural clubs, events, achievements, and campus creativity.",
  path: "/",
  keywords: ["IIT Patna cultural body", "Gymkhana cultural"],
});

export const metadata: Metadata = {
  ...homeMeta,
  title: {
    absolute: siteConfig.name,
  },
  openGraph: {
    ...homeMeta.openGraph,
    title: siteConfig.name,
  },
  twitter: {
    ...homeMeta.twitter,
    title: siteConfig.name,
  },
};

export default function MainPage() {
  return (
    <HomePageLayout>
      <HeroSection />
      <About />
      <YoutubeSection
        videoId="hRtSw2gYoco"
        title="IIT Patna Band Performance | Inter IIT Cult Meet 6.0 Kharagpur"
      />
    </HomePageLayout>
  );
}
