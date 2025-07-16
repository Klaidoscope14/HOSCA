'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Cover = dynamic(() => import('@/components/ui/cover').then(mod => mod.Cover), { ssr: false });
const InfiniteMovingCards = dynamic(() => import('@/components/ui/infinitemovingcards').then(mod => mod.InfiniteMovingCards), { ssr: false });
const CardDemo = dynamic(() => import('@/components/ui/Carddemo').then(mod => mod.CardDemo), { ssr: false });

function AchievementBackgroundDecor() {
  return (
    <>
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-400 opacity-30 rounded-full filter blur-3xl animate-blob1"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-pink-400 opacity-30 rounded-full filter blur-3xl animate-blob2"></div>
        <div className="absolute top-1/2 left-1/2 w-[35vw] h-[35vw] bg-yellow-300 opacity-20 rounded-full filter blur-2xl animate-blob3" style={{ transform: 'translate(-50%, -50%)' }}></div>
      </div>

      <style jsx global>{`
        @keyframes blob1 {
          0% { transform: scale(1) translate(0, 0) rotate(0deg);}
          33% { transform: scale(1.22) translate(120px, -80px) rotate(32deg);}
          66% { transform: scale(0.88) translate(-80px, 120px) rotate(-28deg);}
          100% { transform: scale(1) translate(0, 0) rotate(0deg);}
        }
        @keyframes blob2 {
          0% { transform: scale(1) translate(0, 0) rotate(0deg);}
          33% { transform: scale(1.18) translate(-110px, 110px) rotate(-30deg);}
          66% { transform: scale(1.12) translate(80px, -120px) rotate(24deg);}
          100% { transform: scale(1) translate(0, 0) rotate(0deg);}
        }
        @keyframes blob3 {
          0% { transform: scale(1) translate(0, 0) rotate(0deg);}
          33% { transform: scale(1.25) translate(-70px, 80px) rotate(38deg);}
          66% { transform: scale(0.82) translate(110px, -90px) rotate(-32deg);}
          100% { transform: scale(1) translate(0, 0) rotate(0deg);}
        }
        .animate-blob1 { animation: blob1 7s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 9s ease-in-out infinite; }
        .animate-blob3 { animation: blob3 11s ease-in-out infinite; }
      `}</style>
    </>
  );
}

export default function AchievementPage() {
  const testimonials = [
    {
      quote: "Victory at the National Robotics Championship. Gears, glory, and grit all the way.",
      name: "Robotics Club",
      title: "TechFest 2025",
    },
    {
      quote: "Secured 1st place in Inter IIT Cultural Meet — where talent met triumph.",
      name: "Dramatics Society",
      title: "IIT Hyderabad",
    },
    {
      quote: "Published groundbreaking paper on AI in chemical synthesis. Future? Ours.",
      name: "AI Research Group",
      title: "Springer Journal 2024",
    },
    {
      quote: "Broke previous footfall records with our flagship event ‘Ignite’. Crowd went wild.",
      name: "HOSCA",
      title: "Ignite 2025",
    },
    {
      quote: "Turned caffeine into code and clinched the top prize at Hack36.",
      name: "Web Dev Cell",
      title: "Hackathon 2025",
    },
  ];

   const clubCards = [
  {
    title: "Aria",
    link: "/clubs/aria",
    staticImage: "/ClubLogo/aria.jpg",
    achievement: [
  "Won Crescendo at IIT Bombay",
  "Acapella performance — pitch perfect.",
  "IIT Bombay was left speechless."
],
  },
  
  {
    title: "Yavanika",      
    link: "/clubs/yavanika",
    staticImage: "/ClubLogo/yavanika.png",
    achievement: "inter IIT",
  },
  {
    title: "Epicurean",
    link: "/clubs/epicurean",
    staticImage: "/ClubLogo/epicurean.png",
    achievement: "Won Crescendo at IIT Bombay for their acapella performance.",
  },

  {
    title: "Exousia",
    link: "/clubs/aria",
    staticImage: "/ClubLogo/exousia.jpg",
     achievement: "Won Crescendo at IIT Bombay for their acapella performance.",
  },
  {
    title: "Anime",
    link: "/clubs/yavanika",
    staticImage: "/ClubLogo/anime.png",
    achievement: "Won Crescendo at IIT Bombay for their acapella performance.",
  },
  {
    title: "Hoot",
    link: "/clubs/epicurean",
    staticImage: "/ClubLogo/hoot.jpg",
    achievement: "Won Crescendo at IIT Bombay for their acapella performance.",
  },
  
  {
    title: "Pixxel",
    link: "/clubs/aria",
    staticImage: "/ClubLogo/Pixxel.jpeg",
    achievement: "Won Crescendo at IIT Bombay for their acapella performance.",
  },
  {
    title: "Hexachrome",
    link: "/clubs/yavanika",
    staticImage: "/ClubLogo/Hexachrome.jpg",
    achievement: "Won Crescendo at IIT Bombay for their acapella performance.",
  },
  {
    title: "Quiz",
    link: "/clubs/epicurean",
    staticImage: "/ClubLogo/quiz.jpg",
    achievement: "Won Crescendo at IIT Bombay for their acapella performance.",
  },
  
  {
    title: "Syahi",
    link: "/clubs/aria",
    staticImage: "/ClubLogo/syahi.jpg",
    achievement: "Won Crescendo at IIT Bombay for their acapella performance.",
  },
  {
    title: "Vincetroke",
    link: "/clubs/yavanika",
    staticImage: "/ClubLogo/Vincetroke.jpg",
    achievement: "Won Crescendo at IIT Bombay for their acapella performance.",
  },
  {
    title: "ikkatt",
    link: "/clubs/epicurean",
    staticImage: "/ClubLogo/ikkatt.png",
    achievement: "Won Crescendo at IIT Bombay for their acapella performance.",
  },
   {
    title: "STD",
    link: "/clubs/epicurean",
    staticImage: "/ClubLogo/std.png",
    achievement: "Won Crescendo at IIT Bombay for their acapella performance.",
  }
  
];

  return (
    <div className="relative mt-10 min-h-screen text-white">
      <AchievementBackgroundDecor />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-800 via-white to-black bg-clip-text text-transparent animate-gradient-x">
            <Cover>Achievements</Cover>
          </h2>
          <p className="text-lg mt-6 mb-12 max-w-2xl mx-auto bg-gradient-to-r from-gray-900 via-orange-600 to-red-700 bg-clip-text text-transparent">
            Celebrate the outstanding accomplishments of our clubs and students at HOSCA, IIT Patna.
          </p>
        </div>

        <div className="my-10">
          <InfiniteMovingCards items={testimonials} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center mt-20">
          {clubCards.slice(0, clubCards.length - 1).map((club) => (
            <CardDemo
              key={club.title}
              title={club.title}
              link={club.link}
              staticImage={club.staticImage}
              achievement={club.achievement}
            />
          ))}

        <div className="col-span-full flex justify-center mb-10">
          <CardDemo
            key={clubCards[clubCards.length - 1].title}
            title={clubCards[clubCards.length - 1].title}
            link={clubCards[clubCards.length - 1].link}
            staticImage={clubCards[clubCards.length - 1].staticImage}
            achievement={clubCards[clubCards.length - 1].achievement}
          />
        </div>
      </div>
      </div>
    </div>
  );
}