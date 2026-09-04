"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { StarrySkyBackdrop } from "@/components/StarrySkyBackdrop";
import { ArrowRight, ChevronDown, Search, Trophy } from "lucide-react";

type AchievementStory = {
  title: string;
  club: string;
  date: string;
  image: string;
};

type FeaturedAchievement = AchievementStory & {
  description: string;
  cta: string;
};

const featured: FeaturedAchievement[] = [
  {
    title: "Overall 9th Rank at Inter IIT Cult Meet 8.0",
    club: "HoSCA",
    date: "December 2025",
    image: "/gallery/fest/IMG_20250208_223941.jpg",
    description: "A significant performance among 23 prestigious institutes.",
    cta: "View Full Standings",
  },
  {
    title: "Gold — Musical Arts Cup at Inter IIT Cult Meet 8.0",
    club: "Aria",
    date: "December 2025",
    image: "/ClubPages/Aria/Aria_1.jpg",
    description: "A stellar performance that captivated the judges.",
    cta: "Listen to Recording",
  },
  {
    title: "6th in Online Short Film Making at Inter IIT Cult Meet 8.0",
    club: "Pixxel",
    date: "December 2025",
    image: "/ClubPages/Pixxel/Pixxel_3.jpg",
    description: "A highly creative cinematic narrative.",
    cta: "Watch Film",
  },
];

const stories: AchievementStory[] = [
  {
    title: "1st in Band Competition at Inter IIT Cult Meet 8.0",
    club: "Aria",
    date: "December 2025",
    image: "/ClubPages/Aria/Aria_2.jpg",
  },
  {
    title: "1st in Solo Singing at Inter IIT Cult Meet 8.0",
    club: "Aria",
    date: "December 2025",
    image: "/ClubPages/Aria/Aria_3.jpg",
  },
  {
    title: "3rd in Classical Vocal Solo at Inter IIT Cult Meet 8.0",
    club: "Aria",
    date: "December 2025",
    image: "/ClubPages/Aria/Aria_4.jpg",
  },
  {
    title: "4th in Pair on Stage at Inter IIT Cult Meet 8.0",
    club: "Aria",
    date: "December 2025",
    image: "/ClubPages/Aria/Aria_5.jpg",
  },
  {
    title: "2nd in Band Competition at Antaragni'25",
    club: "Aria",
    date: "October 2025",
    image: "/ClubPages/Aria/Aria_6.jpg",
  },
  {
    title: "1st in Screen Writing at Antaragni'25",
    club: "Pixxel",
    date: "October 2025",
    image: "/ClubPages/Pixxel/Pixxel_1.jpg",
  },
  {
    title: "2nd in Photostory at Antaragni'25",
    club: "Pixxel",
    date: "October 2025",
    image: "/ClubPages/Pixxel/Pixxel_2.jpg",
  },
  {
    title: "2nd in Online Modelling — 5th in Fashion Arts Cup at IICM 8.0",
    club: "Ikkatt",
    date: "December 2025",
    image: "/ClubPages/Ikkatt/Ikkatt_1.jpg",
  },
  {
    title: "3rd in Hindi Slam Poetry at Inter IIT Cult Meet 8.0",
    club: "Syahi",
    date: "December 2025",
    image: "/ClubPages/Syahi/Syahi_1.jpg",
  },
  {
    title: "6th in English Poetry Writing & 8th in English Slam Poetry",
    club: "Syahi",
    date: "December 2025",
    image: "/ClubPages/Syahi/Syahi_2.jpg",
  },
  {
    title: "4th in Stage Play at Inter IIT Cult Meet 8.0",
    club: "Yavanika",
    date: "December 2025",
    image: "/ClubPages/Yavanika/Yavanika_1.jpg",
  },
  {
    title: "5th in Charcoal Art at Inter IIT Cult Meet 8.0",
    club: "Vincetroke",
    date: "December 2025",
    image: "/ClubPages/Vincetroke /Vincetroke_1.jpg",
  },
  {
    title: "5th in Design Marathon & 3D Animation — 8th Digital Arts Cup",
    club: "MoodBoard",
    date: "December 2025",
    image: "/gallery/fest/IMG_20250208_223941.jpg",
  },
  {
    title: "8th in Culinary Arts Cup & Cook Off at Inter IIT Cult Meet 8.0",
    club: "Epicurean",
    date: "December 2025",
    image: "/ClubPages/Epicurean /Epicurean_1.jpg",
  },
  {
    title: "3rd in Cosplay at Antaragni'25",
    club: "Anime Club",
    date: "October 2025",
    image: "/ClubPages/Anime club/Anime_club_1.jpg",
  },
];

export default function AchievementPage() {
  const [query, setQuery] = useState("");

  const filteredStories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stories;
    return stories.filter(
      (story) =>
        story.title.toLowerCase().includes(q) ||
        story.club.toLowerCase().includes(q) ||
        story.date.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#02040a] text-white">
      <StarrySkyBackdrop particleQuantity={70} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_28%),radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_80%_100%,rgba(236,72,153,0.14),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.38em] text-slate-400">
              Unveiling Our Legacy
            </p>
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              HOSCA Achievements
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-slate-300 md:text-lg">
              Celebrating our Cultural &amp; Academic Wins
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex w-full max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-5 backdrop-blur-sm"
            >
              <Search className="h-4 w-4 shrink-0 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search our wins"
                className="w-full bg-transparent py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none"
              />
              <a
                href="#all-achievements"
                className="shrink-0 rounded-full bg-amber-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-black transition-colors hover:bg-amber-400"
              >
                Search
              </a>
            </form>
          </div>

          <div className="relative h-[320px] w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_18px_60px_-28px_rgba(0,0,0,0.8)] md:h-[420px]">
            <Image
              src="/gallery/fest/reverb1.jpg"
              alt="HOSCA performers on stage"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </section>

        <a
          href="#featured"
          className="mt-8 flex items-center justify-end gap-2 text-xs uppercase tracking-[0.28em] text-slate-400 transition-colors hover:text-white"
        >
          Scroll down to explore
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15">
            <ChevronDown className="h-4 w-4" />
          </span>
        </a>

        {/* Top Milestones & Featured Wins */}
        <section id="featured" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Top Milestones &amp; Featured Wins
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featured.map((story) => (
              <article
                key={story.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_60px_-28px_rgba(0,0,0,0.8)] backdrop-blur-sm"
              >
                <div className="relative h-64 w-full md:h-72">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.28em] text-slate-400">
                    {story.club}
                  </p>
                  <h3 className="text-lg font-semibold leading-snug text-white">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {story.description}
                  </p>
                  <button
                    type="button"
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-colors hover:bg-amber-300"
                  >
                    {story.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Rest of the achievements — equal-size boxes */}
        <section id="all-achievements" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            All Achievements
          </h2>

          {filteredStories.length === 0 ? (
            <p className="mt-8 text-sm text-slate-400">
              No achievements match &ldquo;{query}&rdquo;.
            </p>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredStories.map((story) => (
                <article
                  key={`${story.club}-${story.title}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_60px_-28px_rgba(0,0,0,0.8)] backdrop-blur-sm"
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-amber-300/30 bg-amber-400/20 text-amber-200 backdrop-blur-md">
                      <Trophy className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <p className="mb-1.5 text-[11px] uppercase tracking-[0.28em] text-slate-400">
                      {story.club}
                    </p>
                    <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-white">
                      {story.title}
                    </h3>
                    <p className="mt-auto pt-3 text-xs text-slate-400">
                      {story.date}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
