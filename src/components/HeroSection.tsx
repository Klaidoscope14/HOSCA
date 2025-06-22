'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FlipText } from "@/components/magicui/flip-text";
import { VideoText } from "@/components/magicui/video-text";
import { Particles } from "@/components/magicui/particles";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden text-white">
      <Particles className="absolute inset-0 z-0" quantity={90} color="#999999" size={0.4} />

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-white/10 via-white/5 to-white/10 blur-3xl opacity-40" />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center px-4 py-24 min-h-screen space-y-8">
        <div className="w-full max-w-[90vw] flex justify-center items-center">
          <VideoText
            className="w-full h-[160px] sm:h-[200px] md:h-[250px] lg:h-[280px] font-bold text-transparent animate-gradient-x"
            src="/video/hosca-bg.mp4"
            fontSize="clamp(30px, 25vw, 200px)"
            style={{
              WebkitTextStroke: "1px white",
              filter: "drop-shadow(0 0 6px white)",
            }}
          >
            HOSCA
          </VideoText>
        </div>

        <div className="text-center leading-tight space-y-2">
          <FlipText className="text-sm sm:text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-300 font-medium animate-gradient-x-slow tracking-normal">
            The House Of Socio-Cultural
          </FlipText>
          <FlipText className="text-sm sm:text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-300 font-medium animate-gradient-x-slow tracking-normal">
            Affairs
          </FlipText>
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