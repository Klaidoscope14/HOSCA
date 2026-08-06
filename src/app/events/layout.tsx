import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Events",
  description:
    "Upcoming and flagship HOSCA events at IIT Patna — cultural festivals, competitions, and campus celebrations.",
  path: "/events",
  keywords: ["HOSCA events", "IIT Patna fest"],
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
