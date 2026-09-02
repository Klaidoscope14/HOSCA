"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";
import { StarrySkyBackdrop } from "@/components/StarrySkyBackdrop";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

type ClubCard = {
  name: string;
  slug: string;
  logo: string;
  description: string;
  glow: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  images: string[];
};

const clubs: ClubCard[] = [
  {
    "name": "Yavanika",
    "slug": "yavanika",
    "logo": "/ClubLogo/yavanika.png",
    "description": "Dramatics, stagecraft, and performances that own the spotlight.",
    "glow": "rgba(244, 114, 182, 0.45)",
    "facebook": "https://www.facebook.com/yavanika.iitp/",
    "instagram": "https://www.instagram.com/yavanika_iitp/?hl=en",
    "images": ["/ClubPages/Yavanika/Yavanika_1.jpg","/ClubPages/Yavanika/Yavanika_2.jpg","/ClubPages/Yavanika/Yavanika_3.jpg","/ClubPages/Yavanika/Yavanika_4.jpg"]
  },
  {
    "name": "Exousia",
    "slug": "exousia",
    "logo": "/ClubLogo/exousia.jpg",
    "description": "The dance collective bringing rhythm, energy, and stage presence.",
    "glow": "rgba(250, 204, 21, 0.42)",
    "facebook": "https://www.facebook.com/DanceClubIITPatna/",
    "instagram": "https://www.instagram.com/exousia_iitp/",
    "images": ["/ClubPages/Exousia /Exousia_5.jpg","/ClubPages/Exousia /Exousia_6.jpg","/ClubPages/Exousia /Exousia_7.jpg","/ClubPages/Exousia /Exousia_8.jpg"]
  },
  {
    "name": "Aria",
    "slug": "aria",
    "logo": "/ClubLogo/aria.jpg",
    "description": "Music, vocals, bands, and sonic experiences across campus.",
    "glow": "rgba(59, 130, 246, 0.45)",
    "facebook": "https://www.facebook.com/musicclubiitpatna/",
    "instagram": "https://www.instagram.com/aria_iitp/",
    "youtube": "https://www.youtube.com/@musicclubiitpatna",
    "images": ["/ClubPages/Aria/Aria_1.jpg","/ClubPages/Aria/Aria_2.jpg","/ClubPages/Aria/Aria_3.jpg","/ClubPages/Aria/Aria_4.jpg"]
  },
  {
    "name": "STD",
    "slug": "std",
    "logo": "/ClubLogo/std.png",
    "description": "Stand-up, wit, and the funniest stories from campus life.",
    "glow": "rgba(251, 146, 60, 0.42)",
    "instagram": "https://www.instagram.com/standup_club.iitp/",
    "images": ["/ClubPages/STD/STD_2.jpg","/ClubPages/STD/STD_3.jpg","/ClubPages/STD/STD_4.jpg","/ClubPages/STD/STD_5.jpg"]
  },
  {
    "name": "Pixxel",
    "slug": "pixxel",
    "logo": "/ClubLogo/Pixxel.jpeg",
    "description": "Photography and visual storytelling that frame every memory.",
    "glow": "rgba(56, 189, 248, 0.42)",
    "facebook": "https://www.facebook.com/pixxeliitp/",
    "instagram": "https://www.instagram.com/pixxel_iitp/?hl=en",
    "images": ["/ClubPages/Pixxel/Pixxel_1.jpg","/ClubPages/Pixxel/Pixxel_2.jpg","/ClubPages/Pixxel/Pixxel_3.jpg","/ClubPages/Pixxel/Pixxel_4.jpg"]
  },
  {
    "name": "HOOT",
    "slug": "hoot",
    "logo": "/ClubLogo/hoot.jpg",
    "description": "Debate, JAM, MUN, and a home for voices with conviction.",
    "glow": "rgba(168, 85, 247, 0.42)",
    "facebook": "https://www.facebook.com/hootiitp/",
    "instagram": "https://www.instagram.com/hoot.iitp/",
    "images": ["/ClubPages/Hoot/Hoot_1.jpeg","/ClubPages/Hoot/Hoot_2.jpeg","/ClubPages/Hoot/Hoot_3.jpeg","/ClubPages/Hoot/Hoot_4.jpeg"]
  },
  {
    "name": "Quiz Club",
    "slug": "quiz",
    "logo": "/ClubLogo/quiz.jpg",
    "description": "Curiosity, knowledge, and high-voltage quizzing culture.",
    "glow": "rgba(34, 197, 94, 0.42)",
    "facebook": "https://www.facebook.com/quizclubTO/",
    "instagram": "https://www.instagram.com/qc_iitp/",
    "images": ["/ClubPages/QC/QC_2.jpg","/ClubPages/QC/QC_3.jpg","/ClubPages/QC/QC_4.jpg","/ClubPages/QC/QC_5.jpg"]
  },
  {
    "name": "Syahi",
    "slug": "syahi",
    "logo": "/ClubLogo/syahi.jpg",
    "description": "Poetry, prose, spoken word, and writing with a strong voice.",
    "glow": "rgba(248, 113, 113, 0.42)",
    "images": ["/ClubPages/Syahi/Syahi_1.jpg","/ClubPages/Syahi/Syahi_2.jpg","/ClubPages/Syahi/Syahi_3.jpg","/ClubPages/Syahi/Syahi_4.jpg"]
  },
  {
    "name": "Epicurean",
    "slug": "epicurean",
    "logo": "/ClubLogo/epicurean.png",
    "description": "Culinary creativity, flavor, and hands-on food culture.",
    "glow": "rgba(234, 179, 8, 0.42)",
    "instagram": "https://www.instagram.com/culinary_club_iitpatna/",
    "images": ["/ClubPages/Epicurean /Epicurean_1.jpg","/ClubPages/Epicurean /Epicurean_3.jpg","/ClubPages/Epicurean /Epicurean_1.jpg","/ClubPages/Epicurean /Epicurean_3.jpg"]
  },
  {
    "name": "HexaChrome",
    "slug": "hexachrome",
    "logo": "/ClubLogo/Hexachrome.jpg",
    "description": "Puzzles, problem-solving, and a playground for sharp minds.",
    "glow": "rgba(99, 102, 241, 0.42)",
    "instagram": "https://www.instagram.com/hexachrome_iitp/",
    "images": []
  },
  {
    "name": "Vincetroke",
    "slug": "vincetroke",
    "logo": "/ClubLogo/Vincetroke.jpg",
    "description": "Painting, sketching, and visual art with bold expression.",
    "glow": "rgba(236, 72, 153, 0.42)",
    "facebook": "https://www.facebook.com/vincetroke.iitp/community/",
    "instagram": "https://www.instagram.com/vincetroke.iitp/",
    "images": ["/ClubPages/Vincetroke /Vincetroke_1.jpg","/ClubPages/Vincetroke /Vincetroke_2.jpg","/ClubPages/Vincetroke /Vincetroke_3.jpg","/ClubPages/Vincetroke /Vincetroke_4.jpg"]
  },
  {
    "name": "Anime Club",
    "slug": "anime",
    "logo": "/ClubLogo/anime.png",
    "description": "Screenings, fandom, cosplay, and a shared love for anime.",
    "glow": "rgba(14, 165, 233, 0.42)",
    "instagram": "https://www.instagram.com/animeclub_iitp/",
    "images": ["/ClubPages/Anime club/Anime_club_1.jpg","/ClubPages/Anime club/Anime_club_2.jpg","/ClubPages/Anime club/Anime_club_3.jpg","/ClubPages/Anime club/Anime_club_4.jpg"]
  },
  {
    "name": "Ikkatt",
    "slug": "ikkatt",
    "logo": "/ClubLogo/ikkatt.png",
    "description": "Fashion, styling, and design-led expression on and off stage.",
    "glow": "rgba(217, 70, 239, 0.42)",
    "instagram": "https://www.instagram.com/ikkatt_iitp/",
    "images": ["/ClubPages/Ikkatt/Ikkatt_1.jpg","/ClubPages/Ikkatt/Ikkatt_2.jpg","/ClubPages/Ikkatt/Ikkatt_3.jpg","/ClubPages/Ikkatt/Ikkatt_4.jpg"]
  }
];

export default function ClubsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Add extra scroll blocks so the last element remains on screen longer
  const extraScrollBlocks = 2;
  const totalBlocks = clubs.length + extraScrollBlocks;
  const scrollHeight = `${totalBlocks * 50}vh`;

  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Map scroll progress (0 to 1) to the active index (0 to clubs.length - 1). 
  // We complete the transitions before reaching the bottom to create a pause effect.
  const transitionFraction = (clubs.length - 1) / (totalBlocks - 1);
  const smoothIndex = useTransform(scrollYProgress, [0, transitionFraction], [0, clubs.length - 1]);
  
  // Scroll indicator for the extra scroll padding at the end
  const isAtEnd = useTransform(scrollYProgress, (v) => v >= transitionFraction ? 1 : 0);
  const endScrollProgress = useTransform(scrollYProgress, [transitionFraction, 1], ["0%", "100%"]);

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(smoothIndex, "change", (latest) => {
    setActiveIndex(Math.round(latest));
  });

  return (
    <div ref={containerRef} style={{ height: scrollHeight }} className="relative bg-[#02040a]">
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row">
        
        {/* End Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 md:left-[30%] -translate-x-1/2 flex flex-col items-center gap-2 z-50 pointer-events-none transition-opacity duration-300"
          style={{ opacity: isAtEnd }}
        >
          <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-medium">Keep Scrolling</span>
          <div className="w-[1px] h-12 bg-white/10 overflow-hidden relative">
             <motion.div 
               className="w-full bg-white absolute top-0 left-0" 
               style={{ height: endScrollProgress }}
             />
          </div>
        </motion.div>

        <StarrySkyBackdrop particleQuantity={78} />
        
        {/* Left Section: The Wheel */}
        <div 
          className="relative w-full md:w-[60%] h-[50vh] md:h-full flex items-center z-20"
          style={{ 
            maskImage: "linear-gradient(to bottom, transparent 5%, black 20%, black 80%, transparent 95%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 5%, black 20%, black 80%, transparent 95%)" 
          }}
        >
          
          {/* Wheel Boundaries */}
          {/* Pivot is at left: -32vw. Inner radius = 41vw, Outer radius = 59vw. Cards at 50vw. */}
          <div className="absolute left-[-32vw] top-1/2 w-[82vw] h-[82vw] -translate-y-1/2 -translate-x-1/2 rounded-full border border-white/5 pointer-events-none hidden md:block" />
          <div className="absolute left-[-32vw] top-1/2 w-[118vw] h-[118vw] -translate-y-1/2 -translate-x-1/2 rounded-full border border-white/5 pointer-events-none hidden md:block" />
          
          {/* The glow on the boundary for the active area */}
          <div className="absolute left-[-32vw] top-1/2 w-[118vw] h-[118vw] -translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none hidden md:block" 
               style={{ 
                 background: `radial-gradient(circle at right, ${clubs[activeIndex]?.glow.replace(/, [\d.]+\)$/, ", 0.05)")} 0%, transparent 20%)`
               }} 
          />

          {/* The Wheel Pivot */}
          <div className="absolute left-[-32vw] top-1/2 w-0 h-0 hidden md:block">
            {clubs.map((club, i) => (
              <ClubWheelItem 
                key={club.slug} 
                club={club} 
                i={i} 
                activeIndex={activeIndex} 
                smoothIndex={smoothIndex} 
              />
            ))}
          </div>

          {/* Mobile Fallback */}
          <div className="md:hidden flex flex-col gap-4 px-6 mt-32 h-[calc(100%-8rem)] overflow-y-auto w-full no-scrollbar">
            {clubs.map((club, i) => (
               <div key={club.slug} className="flex gap-4 items-center bg-black/40 p-4 rounded-2xl border border-white/10">
                 <WheelSquareCard club={club} isActive={activeIndex === i} />
                 <div>
                   <h3 className="text-xl font-bold text-white">{club.name}</h3>
                   <p className="text-xs text-white/50 line-clamp-2">{club.description}</p>
                 </div>
               </div>
            ))}
          </div>

        </div>

        {/* Right Section: The Syncing Carousel */}
        <div className="relative w-full md:w-[40%] h-[50vh] md:h-full z-10 overflow-hidden border-t md:border-t-0 md:border-l border-white/10 pause-on-hover flex flex-col bg-black/40">
          {clubs.map((club, i) => (
            <ClubCarouselItem
              key={club.slug}
              club={club}
              i={i}
              activeIndex={activeIndex}
              smoothIndex={smoothIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ClubWheelItem({ club, i, activeIndex, smoothIndex }: { club: ClubCard; i: number; activeIndex: number; smoothIndex: MotionValue<number> }) {
  // Minimal spacing: just enough for a square box + gap. 
  const angleStep = 9; // Degrees between each club
  
  // Rotate the "arm" of the wheel
  const rotate = useTransform(smoothIndex, (current) => (i - current) * angleStep);
  
  // Counter-rotate the card so it stays upright
  const counterRotate = useTransform(rotate, (r) => -r);
  
  // Text fade based on distance from active
  const textOpacity = useTransform(smoothIndex, [i - 1, i, i + 1], [0, 1, 0]);
  const lineOpacity = useTransform(smoothIndex, [i - 2, i, i + 2], [0, 0.8, 0]);
  const isActive = activeIndex === i;

  return (
    <motion.div
      className="absolute top-0 left-0 w-0 h-0 flex items-center justify-center"
      style={{ rotate }}
    >
      {/* Square Logo Box */}
      <motion.div
        className="absolute z-20 flex items-center justify-center"
        style={{ 
          x: "50vw", // Placed exactly between inner (41vw) and outer (59vw) boundaries
          rotate: counterRotate 
        }}
      >
        <WheelSquareCard club={club} isActive={isActive} />
      </motion.div>
      
      {/* Radial Line */}
      <motion.div 
        className="absolute left-[54vw] h-[1px] bg-gradient-to-r from-white/30 to-transparent" 
        style={{ width: "8vw", opacity: lineOpacity }}
      />

      {/* Club Info Text Box (Counter-rotated to stay upright) */}
      <motion.div
        className="absolute left-[64vw] w-96 flex flex-col justify-center"
        style={{ 
          rotate: counterRotate,
          opacity: textOpacity,
          pointerEvents: isActive ? "auto" : "none"
        }}
      >
        <h2 
          className="text-4xl font-bold text-white mb-3 tracking-tight" 
          style={{ textShadow: `0 2px 20px ${club.glow}` }}
        >
          {club.name}
        </h2>
        <p className="text-sm text-slate-300 mb-5 leading-relaxed">
          {club.description}
        </p>
        
        <div className="flex gap-3">
          {club.instagram && (
            <SocialIcon 
              href={club.instagram} 
              label={`${club.name} Instagram`}
              hoverColorClass="hover:border-pink-500 hover:text-pink-500 hover:bg-pink-500/20"
            >
              <FaInstagram className="h-4 w-4" />
            </SocialIcon>
          )}
          {club.facebook && (
            <SocialIcon 
              href={club.facebook} 
              label={`${club.name} Facebook`}
              hoverColorClass="hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/20"
            >
              <FaFacebookF className="h-4 w-4" />
            </SocialIcon>
          )}
          {club.youtube && (
            <SocialIcon 
              href={club.youtube} 
              label={`${club.name} YouTube`}
              hoverColorClass="hover:border-red-500 hover:text-red-500 hover:bg-red-500/20"
            >
              <FaYoutube className="h-4 w-4" />
            </SocialIcon>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ClubCarouselItem({ club, i, activeIndex, smoothIndex }: { club: ClubCard; i: number; activeIndex: number; smoothIndex: MotionValue<number> }) {
  const opacity = useTransform(smoothIndex, [i - 1, i, i + 1], [0, 1, 0]);
  const scale = useTransform(smoothIndex, [i - 1, i, i + 1], [1.05, 1, 1.05]);
  
  // To animate left-to-right properly, we reverse the images and start halfway through the duplicated array
  const reversedImages = [...(club.images || [])].reverse();
  const trackImages = [...reversedImages, ...reversedImages];

  // Use the original (non-reversed) array for the bottom track.
  // This elegantly solves the "duplicate images above each other" issue 
  // especially for clubs like Epicurean that have an [A, B, A, B] pattern.
  const bottomBase = [...(club.images || [])];
  const bottomTrackImages = [...bottomBase, ...bottomBase];

  return (
    <motion.div
      className="absolute inset-0 flex flex-col"
      style={{ opacity, scale, zIndex: activeIndex === i ? 10 : 1 }}
    >
       {/* Top Track */}
       <div className="relative w-full h-1/2 overflow-hidden">
          <div 
              className="flex h-full w-[800%] absolute top-0 left-[-700%] animate-scroll-ltr"
          >
              {trackImages.map((img, idx) => (
                 <div key={`t1-${idx}`} className="relative w-[12.5%] h-full flex-shrink-0">
                     <Image 
                       src={img} 
                       alt={`${club.name} ${idx}`} 
                       fill 
                       className="object-contain p-4"
                       priority={i === 0 && idx > 3}
                     />
                 </div>
              ))}
          </div>
       </div>

       {/* Bottom Track */}
       <div className="relative w-full h-1/2 overflow-hidden">
          <div 
              className="flex h-full w-[800%] absolute top-0 left-[-700%] animate-scroll-ltr"
          >
              {bottomTrackImages.map((img, idx) => (
                 <div key={`t2-${idx}`} className="relative w-[12.5%] h-full flex-shrink-0">
                     <Image 
                       src={img} 
                       alt={`${club.name} bottom ${idx}`} 
                       fill 
                       className="object-contain p-4"
                     />
                 </div>
              ))}
          </div>
       </div>
       
       <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#02040a]/80 pointer-events-none" />
    </motion.div>
  );
}

function WheelSquareCard({ club, isActive }: { club: ClubCard; isActive: boolean }) {
  return (
    <Link 
      href={`/club/${club.slug}`}
      className={`
        relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl border transition-all duration-500 overflow-hidden
        ${isActive ? "bg-black/60 z-20 scale-110" : "bg-black/40 border-white/10 opacity-60 hover:opacity-100 z-10 scale-90"}
      `}
      style={{
        boxShadow: isActive ? `0 0 30px -5px ${club.glow}` : "none",
        borderColor: isActive ? club.glow.replace(/[\d.]+\)$/, "0.8)") : "rgba(255,255,255,0.1)"
      }}
    >
      <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
         <Image src={club.logo} alt={club.name} fill className="object-contain" />
      </div>
    </Link>
  );
}

function SocialIcon({ href, label, hoverColorClass, children }: { href: string; label: string; hoverColorClass?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={(e) => e.stopPropagation()}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${hoverColorClass ? hoverColorClass : 'hover:border-white/30 hover:bg-white/20 hover:text-white'}`}
    >
      {children}
    </a>
  );
}
