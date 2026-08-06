import type { Metadata } from "next";
import { clubSeo, createPageMetadata } from "@/lib/seo";

const club = clubSeo["anime"];

export const metadata: Metadata = createPageMetadata({
  title: club.name,
  description: club.description,
  path: "/club/anime",
  keywords: club.keywords,
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
