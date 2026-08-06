import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Cultural Clubs",
  description:
    "Explore all HOSCA cultural clubs at IIT Patna — music, dance, drama, photography, debate, fashion, and more.",
  path: "/club",
  keywords: ["HOSCA clubs", "IIT Patna clubs"],
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
