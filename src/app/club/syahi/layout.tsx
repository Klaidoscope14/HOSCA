import type { Metadata } from "next";
import { clubSeo, createPageMetadata } from "@/lib/seo";

const club = clubSeo["syahi"];

export const metadata: Metadata = createPageMetadata({
  title: club.name,
  description: club.description,
  path: "/club/syahi",
  keywords: club.keywords,
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
