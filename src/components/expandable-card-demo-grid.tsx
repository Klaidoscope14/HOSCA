"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/components/hooks/ExpandableCard";
import { JSX } from "react/jsx-runtime";

export function ExpandableCardDemo() {
const [active, setActive] = useState<{
  title: string;
  src: string;
  content: () => JSX.Element;
} | null>(null);

  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null)); 


  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                   
                  </div>

                  
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
   {/* Club Grid without STD */}
<ul className="mx-auto w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-100 items-start">
  {cards
    .filter((card) => card.title !== "STD")
    .map((card, index) => (
      <motion.div
        layoutId={`card-${card.title}-${id}`}
        key={card.title}
        onClick={() => setActive(card)}
        className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
      >
        <div className="flex gap-4 flex-col w-full">
          <motion.div layoutId={`image-${card.title}-${id}`}>
            <img
              width={100}
              height={100}
              src={card.src}
              alt={card.title}
              className="h-60 w-full rounded-lg object-cover object-top"
            />
          </motion.div>
          <div className="flex justify-center items-center flex-col">
            <motion.h3
              layoutId={`title-${card.title}-${id}`}
              className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
            >
              {card.title}
            </motion.h3>
          </div>
        </div>
      </motion.div>
    ))}
</ul>

{/* STD Card - Centered on Its Own Line */}
<div className="w-full flex justify-center mt-16">
  <motion.div
    layoutId={`card-STD-${id}`}
    onClick={() => setActive(cards.find((c) => c.title === "STD")??null)}
    className="w-full max-w-xs p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
  >
    <div className="flex gap-4 flex-col w-full">
      <motion.div layoutId={`image-STD-${id}`}>
        <img
          width={100}
          height={100}
          src={"/ClubLogo/std.png"}
          alt={"STD"}
          className="h-60 w-full rounded-lg object-cover object-top"
        />
      </motion.div>
      <div className="flex justify-center items-center flex-col">
        <motion.h3
          layoutId={`title-STD-${id}`}
          className="font-medium text-neutral-800 dark:text-neutral-200 text-center text-base"
        >
          STD
        </motion.h3>
      </div>
    </div>
  </motion.div>
</div>

    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  
   {
  title: "Yavanika",
  src: "/ClubLogo/yavanika.png",
  content: () => (
    <div>
    
      <div className="rounded-xl shadow-md p-6 bg-white dark:bg-zinc-900">
  <h3 className="text-xl font-semibold mb-4">Yavanika</h3>
  <div className="max-h-48 overflow-y-auto pr-2">
    <ul className="list-disc list-inside text-sm space-y-2">
      <li>Kaizen 2024 (Nukkad Natak) - Bronze</li>
      <li>AN College (InnoAdExpo Inter College Competition 2024) - Gold</li>
      <li>INTER IIT CULT MEET 7.0 - Bronze (Stage Play)</li>
      <li>INTER IIT CULT MEET 6.0 - Silver (Mime)</li>
    </ul>
  </div>
</div>

    </div>
  )


  },
  {
  
    title: "Exousia",
    src: "/ClubLogo/exousia.jpg",
    
    content: () => (<p></p>
      
    ),
  },
  {
    
    title: "Aria",
    src: "/ClubLogo/aria.jpg",
   
    content: () => (<p></p>
     
    ),
  },
  {

    title: "Pixxel",
    src: "/ClubLogo/Pixxel.jpeg",
   
    content: () => (<p></p>
    
    ),
  },
  {
    
    title: "HOOT",
    src: "/ClubLogo/hoot.jpg",
    
    content: () => (<p></p>
     
    ),
  },
  
 
  {
  title: "Quiz Club",
  src: "/ClubLogo/quiz.jpg",

  content: () => (
   <div className="max-h-96 overflow-y-auto p-4 bg-white rounded-xl border border-[#2c2c2c]">
  <ul className="list-disc list-inside space-y-4 text-sm leading-relaxed text-black">
    <li>
      <strong>Inter IIT Cult 7.0:</strong> TLC Quiz – Runner-up<br />
      Team IIT Patna - 1: Abhimanyu Singh Bisht (2001CB04), Aryan Dabad (2101AI36), Shibanshu Das (2302GT08)
    </li>
    <li>
      <strong>Inter IIT Cult 7.0:</strong> Sports Quiz – Qualified Prelims, 5th in Finals<br />
      Team IIT Patna - 1: Abhimanyu Singh Bisht (2001CB04), Siddhant Senapati (2101AI38), Prakhar Shukla (2201CS54)
    </li>
    <li>
      <strong>Inter IIT Cult 7.0:</strong> General Quiz – Qualified Prelims, 6th in Finals<br />
      Team IIT Patna - 1: Abhimanyu Singh Bisht (2001CB04), Aryan Dabad (2101AI36), Prakhar Shukla (2201CS54)
    </li>
    <li>
      <strong>Kaizen:</strong> Pop-Culture Quiz – Qualified Prelims, 2nd in Finals<br />
      Aryan Dabad (2101AI36), Siddhant Senapati (2101AI38), Kirtan Jain (2101CS38), Prakhar Shukla (2201CS54)
    </li>
    <li>
      <strong>Kaizen:</strong> General Quiz – Qualified Prelims, 2nd in Finals<br />
      Aryan Dabad (2101AI36), Siddhant Senapati (2101AI38), Kirtan Jain (2101CS38), Prakhar Shukla (2201CS54)
    </li>
    <li>
      <strong>Kaizen:</strong> General Quiz – Qualified Prelims, 4th in Finals<br />
      Shibanshu Das (2302GT08), Shivang Rayat (2301PH17), Aditya Gupta (2301PH03), Ashmit Verma (2301PH07)
    </li>
    <li>
      <strong>NTPC Electron:</strong> Ranked 1st in Eastern Zonals and qualified for the finals among top 8 teams in India<br />
      Team IIT Patna - I: Kirtan Jain (2101CS38), Aryan Dabad (2101AI36)
    </li>
    <li>
      <strong>Kashiyatra:</strong> Sports Quiz – Qualified Prelims, 4th in Finals<br />
      Siddhant Senapati (2101AI38), Aryan Dabad (2101AI36), Kirtan Jain (2101CS38)
    </li>
  </ul>
</div>

  )
},

    
  
  {

     title: "Syahi",
  src: "/ClubLogo/syahi.jpg",
  
  content: () => (
    <div>
    
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>🥇 <strong>Gold</strong> – English Poetry Slam</li>
        <li>🥈 <strong>Silver</strong> – Hindi Poetry Writing</li>
        <li>🥈 <strong>Silver</strong> – Hindi Creative Writing</li>
        <li>🥉 <strong>Bronze</strong> – English Poetry Writing</li>
        <li>🔹 <strong>5th Rank</strong> – English Slam Poetry (Second Entry)</li>
      </ul>
      
    </div>
  )

  },
  {
  
    title: "Epicurean",
    src: "/ClubLogo/epicurean.png",
    
    content: () => (<p></p>
   
    ),
  },
  {
  
    title: "HexaChrome",
    src: "/ClubLogo/Hexachrome.jpg",
  
    content: () => (<p></p>
      
    ),
  },
  {

    title: "Vincetroke",
    src: "/ClubLogo/Vincetroke.jpg",

    content: () => (<p></p>
     
    ),
  },
  {
  
    title: "Anime Club",
    src: "/ClubLogo/anime.png",
   
    content: () => (<p></p>
      
    ),
  },
  {
   
    title: "Ikkatt",
    src: "/ClubLogo/ikkatt.png",
   
    content: () => (<p></p>
      
    ),
  },
  {
  
    title: "STD",
    src: "/ClubLogo/std.png",
  
    content: () => (<p></p>
    
    ),
  },
];
