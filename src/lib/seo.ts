import type { Metadata } from "next";

const SITE_NAME = "HOSCA - IIT Patna";
const DEFAULT_DESCRIPTION =
  "Official website of the House of Socio-Cultural Affairs (HOSCA) at IIT Patna — clubs, events, gallery, achievements, and cultural life on campus.";

/** Canonical production URL (Vercel). Override with NEXT_PUBLIC_SITE_URL when a custom domain is added. */
export const PRODUCTION_SITE_URL = "https://hosca.vercel.app";

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  return PRODUCTION_SITE_URL;
}

export const siteConfig = {
  name: SITE_NAME,
  shortName: "HOSCA",
  description: DEFAULT_DESCRIPTION,
  url: PRODUCTION_SITE_URL,
  locale: "en_IN",
  organization: "House of Socio-Cultural Affairs, IIT Patna",
  sameAs: [
    "https://www.facebook.com/hosca.iitp",
    "https://www.instagram.com/iitpatna_hosca/",
    "https://www.youtube.com/user/CULTatIITP",
  ],
  ogImagePath: "/home/hosca.png",
} as const;


export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(siteConfig.ogImagePath);

  return {
    title,
    description,
    keywords: [
      "HOSCA",
      "HoSCA",
      "IIT Patna",
      "IITP",
      "cultural clubs",
      "Inter IIT Cultural Meet",
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 512,
          height: 512,
          alt: "HOSCA IIT Patna logo",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
  };
}

export const clubSeo: Record<
  string,
  { name: string; description: string; keywords: string[] }
> = {
  anime: {
    name: "Anime Club",
    description:
      "Anime Club at IIT Patna — screenings, cosplay, fandom, and anime culture under HOSCA.",
    keywords: ["Anime Club IIT Patna", "cosplay", "anime"],
  },
  aria: {
    name: "Aria",
    description:
      "Aria, the music club of IIT Patna — bands, vocals, and musical performances under HOSCA.",
    keywords: ["Aria IIT Patna", "music club", "band"],
  },
  epicurean: {
    name: "Epicurean",
    description:
      "Epicurean, the culinary club of IIT Patna — cook-offs, food culture, and kitchen creativity under HOSCA.",
    keywords: ["Epicurean IIT Patna", "culinary club"],
  },
  exousia: {
    name: "Exousia",
    description:
      "Exousia, the dance club of IIT Patna — choreography, stage energy, and performances under HOSCA.",
    keywords: ["Exousia IIT Patna", "dance club"],
  },
  hexachrome: {
    name: "HexaChrome",
    description:
      "HexaChrome, the puzzle club of IIT Patna — logic, problem-solving, and puzzle events under HOSCA.",
    keywords: ["HexaChrome IIT Patna", "puzzle club"],
  },
  hoot: {
    name: "HOOT",
    description:
      "HOOT, the House of Oratory Talents at IIT Patna — debate, JAM, MUN, and public speaking under HOSCA.",
    keywords: ["HOOT IIT Patna", "debate club", "oratory"],
  },
  ikkatt: {
    name: "Ikkatt",
    description:
      "Ikkatt, the fashion club of IIT Patna — styling, modelling, and design-led expression under HOSCA.",
    keywords: ["Ikkatt IIT Patna", "fashion club"],
  },
  pixxel: {
    name: "Pixxel",
    description:
      "Pixxel, the photography and filmmaking club of IIT Patna — visual storytelling under HOSCA.",
    keywords: ["Pixxel IIT Patna", "photography club", "filmmaking"],
  },
  quiz: {
    name: "Quiz Club",
    description:
      "Quiz Club at IIT Patna — quizzing culture, knowledge events, and competitions under HOSCA.",
    keywords: ["Quiz Club IIT Patna", "quizzing"],
  },
  std: {
    name: "Standup Den",
    description:
      "Standup Den (STD), the stand-up comedy club of IIT Patna — open mics and comedy under HOSCA.",
    keywords: ["Standup Den IIT Patna", "comedy club", "STD"],
  },
  syahi: {
    name: "Syahi",
    description:
      "Syahi, the literary club of IIT Patna — poetry, prose, slam, and writing under HOSCA.",
    keywords: ["Syahi IIT Patna", "literary club", "poetry"],
  },
  vincetroke: {
    name: "Vincetroke",
    description:
      "Vincetroke, the fine arts club of IIT Patna — painting, sketching, and visual art under HOSCA.",
    keywords: ["Vincetroke IIT Patna", "fine arts club"],
  },
  yavanika: {
    name: "Yavanika",
    description:
      "Yavanika, the dramatics club of IIT Patna — stage plays, mime, and theatre under HOSCA.",
    keywords: ["Yavanika IIT Patna", "dramatics club", "theatre"],
  },
};

export const staticRoutes = [
  { path: "/", title: "Home", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/club", title: "Clubs", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/achievement", title: "Achievements", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/gallery", title: "Gallery", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/events", title: "Events", changeFrequency: "weekly" as const, priority: 0.8 },
  {
    path: "/committee/Developers",
    title: "Committee",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  ...Object.keys(clubSeo).map((slug) => ({
    path: `/club/${slug}`,
    title: clubSeo[slug].name,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
];
