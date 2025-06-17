'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FlipText } from "@/components/magicui/flip-text";
import { VideoText } from "@/components/magicui/video-text";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Welcome.jpg"
          alt="HOSCA Welcome Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-red-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
      </div>
      
      <div className=" min-h-screen w-full flex flex-col items-center justify-center text-white px-4 space-y-1">
        
           <div className="w-full max-w-[90vw] flex justify-center pointer-events-none items-center mb-1">
           <VideoText
            className="w-full h-[160px] sm:h-[200px] md:h-[250px] lg:h-[280px] font-bold bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent animate-gradient-x "
           src="/video/hosca-bg.mp4"
           fontSize="clamp(30px, 25vw, 450px)"
          >
             HOSCA
          </VideoText>
          </div>
          <div className="w-full flex justify-center px-1">
              <div className="w-full max-w-[90vw] text-center leading-tight space-y-1 sm:space-y-3 md:space-y-4  mb-5 sm:mb-8 md:mb-10 mt-[-4px]">
                 <FlipText className="text-sm sm:text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-grey-300 via-white to-grey-300 font-medium animate-gradient-x-slow tracking-normal">
    {"The House Of Socio-Cultural"}
  </FlipText>
  <FlipText className="text-sm sm:text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-grey-300 via-white to-grey-300 font-medium animate-gradient-x-slow tracking-normal">
    {"Affairs"}
  </FlipText>
           </div>
           </div>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/events"
              className="group relative px-8 py-4 rounded-full overflow-hidden bg-gradient-to-r from-red-600 to-red-800 text-white text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10">View Events</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/club"
              className="group relative px-8 py-4 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm text-white text-lg font-medium border-2 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        
      </div>
    </section>
  );
}