import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Committee & Developers",
  description:
    "Meet the HOSCA committee, Gymkhana cultural leadership, and the web development team at IIT Patna.",
  path: "/committee/Developers",
  keywords: ["HOSCA committee", "Gymkhana cultural"],
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
