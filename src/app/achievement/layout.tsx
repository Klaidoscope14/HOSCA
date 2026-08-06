import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Achievements",
  description:
    "HOSCA achievements at Inter IIT Cultural Meet, Antaragni, and other cultural festivals — cups, medals, and rankings.",
  path: "/achievement",
  keywords: ["Inter IIT Cult Meet", "Antaragni", "HOSCA achievements"],
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
