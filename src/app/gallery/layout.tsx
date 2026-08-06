import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Gallery",
  description:
    "Photo gallery of HOSCA events, festivals, and cultural moments at IIT Patna.",
  path: "/gallery",
  keywords: ["HOSCA gallery", "IIT Patna cultural events"],
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
