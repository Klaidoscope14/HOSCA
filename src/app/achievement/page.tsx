"use client";

import Image from "next/image";
import { Cover } from "@/components/ui/cover";
import { StarrySkyBackdrop } from "@/components/StarrySkyBackdrop";
import { InfiniteMovingCards } from "@/components/ui/infinitemovingcards";
import { Trophy } from "lucide-react";

type AchievementStory = {
  title: string;
  club: string;
  date: string;
  image: string;
  span?: string;
};

const stories: AchievementStory[] = [
  {
    title: "Overall 9th among 23 IITs at Inter IIT Cult Meet 8.0",
    club: "HoSCA",
    date: "December 2025",
    image: "/gallery/fest/IMG_20250208_223941.jpg",
    span: "lg:col-span-2",
  },
  {
    title: "Gold — Musical Arts Cup at Inter IIT Cult Meet 8.0",
    club: "Aria",
    date: "December 2025",
    image: "/ClubPages/Aria/IMG-20250614-WA0115.jpg",
    span: "md:row-span-2",
  },
  {
    title: "1st in Band Competition at Inter IIT Cult Meet 8.0",
    club: "Aria",
    date: "December 2025",
    image: "/ClubPages/Aria/IMG-20250614-WA0107.jpg",
  },
  {
    title: "1st in Solo Singing at Inter IIT Cult Meet 8.0",
    club: "Aria",
    date: "December 2025",
    image: "/ClubPages/Aria/IMG-20250614-WA0140.jpg",
  },
  {
    title: "3rd in Classical Vocal Solo at Inter IIT Cult Meet 8.0",
    club: "Aria",
    date: "December 2025",
    image: "/ClubPages/Aria/IMG-20250614-WA0119.jpg",
  },
  {
    title: "4th in Pair on Stage at Inter IIT Cult Meet 8.0",
    club: "Aria",
    date: "December 2025",
    image: "/ClubPages/Aria/IMG-20250614-WA0134.jpg",
  },
  {
    title: "2nd in Band Competition at Antaragni'25",
    club: "Aria",
    date: "October 2025",
    image: "/ClubPages/Aria/IMG-20250210-WA0018.jpg",
    span: "lg:col-span-2",
  },
  {
    title: "1st in Screen Writing at Antaragni'25",
    club: "Pixxel",
    date: "October 2025",
    image: "/ClubPages/Pixxel/1000062866.jpg",
    span: "md:row-span-2",
  },
  {
    title: "2nd in Photostory at Antaragni'25",
    club: "Pixxel",
    date: "October 2025",
    image: "/ClubPages/Pixxel/IMG_20241213_154530.jpg",
  },
  {
    title: "6th in Online Short Film Making at Inter IIT Cult Meet 8.0",
    club: "Pixxel",
    date: "December 2025",
    image: "/ClubPages/Pixxel/1000125976.jpg",
  },
  {
    title: "2nd in Online Modelling — 5th in Fashion Arts Cup at IICM 8.0",
    club: "Ikkatt",
    date: "December 2025",
    image: "/ClubPages/Ikkatt/ikkat1.jpg",
    span: "lg:col-span-2",
  },
  {
    title: "3rd in Hindi Slam Poetry at Inter IIT Cult Meet 8.0",
    club: "Syahi",
    date: "December 2025",
    image: "/ClubPages/Syahi/Syahi-1.JPG",
  },
  {
    title: "6th in English Poetry Writing & 8th in English Slam Poetry",
    club: "Syahi",
    date: "December 2025",
    image: "/ClubPages/Syahi/Syahi-3.JPG",
  },
  {
    title: "4th in Stage Play at Inter IIT Cult Meet 8.0",
    club: "Yavanika",
    date: "December 2025",
    image: "/ClubPages/Yavanika/Picture1.jpg",
    span: "md:row-span-2",
  },
  {
    title: "5th in Charcoal Art at Inter IIT Cult Meet 8.0",
    club: "Vincetroke",
    date: "December 2025",
    image: "/ClubPages/Vincetroke/im 1.jpg",
  },
  {
    title: "5th in Design Marathon & 3D Animation — 8th Digital Arts Cup",
    club: "MoodBoard",
    date: "December 2025",
    image: "/ClubPages/Hexachrome/IMG-20241028-WA0001.jpg",
  },
  {
    title: "8th in Culinary Arts Cup & Cook Off at Inter IIT Cult Meet 8.0",
    club: "Epicurean",
    date: "December 2025",
    image: "/ClubPages/Epicurean/IMG-20250126-WA0040.jpg",
  },
  {
    title: "3rd in Cosplay at Antaragni'25",
    club: "Anime Club",
    date: "October 2025",
    image: "/ClubPages/Anime-club/1.jpg",
  },
];

const marqueeItems = stories.map((story) => ({
  quote: story.title,
  name: story.club,
  title: story.date,
}));

export default function AchievementPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#02040a] text-white">
      <StarrySkyBackdrop particleQuantity={70} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_28%),radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_80%_100%,rgba(236,72,153,0.14),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.38em] text-slate-400">
            HOSCA Milestones
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            <Cover>Achievements</Cover>
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-300 md:text-lg">
            A more cinematic view of the performances, rankings, and creative wins
            that define HOSCA across campus and beyond.
          </p>
        </div>

        <div className="mt-10">
          <InfiniteMovingCards items={marqueeItems} />
        </div>

        <div className="mt-12 grid auto-rows-[240px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story) => (
            <article
              key={`${story.club}-${story.title}`}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_18px_60px_-28px_rgba(0,0,0,0.8)] backdrop-blur-sm ${story.span ?? ""}`}
            >
              <Image
                src={story.image}
                alt={story.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/30 bg-amber-400/20 text-amber-200 backdrop-blur-md">
                <Trophy className="h-5 w-5" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="mb-2 text-xs uppercase tracking-[0.32em] text-slate-300">
                  {story.club}
                </p>
                <h2 className="max-w-[26rem] text-xl font-semibold leading-tight text-white">
                  {story.title}
                </h2>
                <p className="mt-3 text-sm text-slate-200/90">{story.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
