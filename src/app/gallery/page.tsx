"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Cover } from "@/components/ui/cover";
import { StarrySkyBackdrop } from "@/components/StarrySkyBackdrop";

type GalleryItem = {
  title: string;
  src?: string;
  images?: string[];
  href?: string;
};

const featuredMoments: GalleryItem[] = [
  { title: "Reverberance", src: "/gallery/fest/reverb1.jpg" },
  { title: "Anwesha Nights", src: "/gallery/fest/IMG_20250208_223941.jpg" },
  { title: "Festive Energy", src: "/gallery/fest/IMG20250209221311.jpg" },
  { title: "Campus Celebration", src: "/gallery/fest/DSC_8732.JPG" },
  { title: "Durga Puja", src: "/gallery/fest/durgapuja7.jpg" },
  { title: "HOSCA Lights", src: "/gallery/fest/WhatsApp Image 2025-06-17 at 21.42.09_6507d602.jpg" },
];

const clubHighlights: GalleryItem[] = [
  { title: "Yavanika", images: ["/ClubPages/Yavanika/Yavanika_1.jpg","/ClubPages/Yavanika/Yavanika_2.jpg","/ClubPages/Yavanika/Yavanika_3.jpg","/ClubPages/Yavanika/Yavanika_4.jpg"], href: "/club/yavanika" },
  { title: "Exousia", images: ["/ClubPages/Exousia /Exousia_5.jpg","/ClubPages/Exousia /Exousia_6.jpg","/ClubPages/Exousia /Exousia_7.jpg","/ClubPages/Exousia /Exousia_8.jpg"], href: "/club/exousia" },
  { title: "Aria", images: ["/ClubPages/Aria/Aria_1.jpg","/ClubPages/Aria/Aria_2.jpg","/ClubPages/Aria/Aria_3.jpg","/ClubPages/Aria/Aria_4.jpg"], href: "/club/aria" },
  { title: "Pixxel", images: ["/ClubPages/Pixxel/Pixxel_1.jpg","/ClubPages/Pixxel/Pixxel_2.jpg","/ClubPages/Pixxel/Pixxel_3.jpg","/ClubPages/Pixxel/Pixxel_4.jpg"], href: "/club/pixxel" },
  { title: "HOOT", images: ["/ClubPages/Hoot/Hoot_1.jpeg","/ClubPages/Hoot/Hoot_2.jpeg","/ClubPages/Hoot/Hoot_3.jpeg","/ClubPages/Hoot/Hoot_4.jpeg"], href: "/club/hoot" },
  { title: "Quiz Club", images: ["/ClubPages/QC/QC_2.jpg","/ClubPages/QC/QC_3.jpg","/ClubPages/QC/QC_4.jpg","/ClubPages/QC/QC_5.jpg"], href: "/club/quiz" },
  { title: "Epicurean", images: ["/ClubPages/Epicurean /Epicurean_1.jpg","/ClubPages/Epicurean /Epicurean_3.jpg","/ClubPages/Epicurean /Epicurean_1.jpg","/ClubPages/Epicurean /Epicurean_3.jpg"], href: "/club/epicurean" },
  { title: "Vincetroke", images: ["/ClubPages/Vincetroke /Vincetroke_1.jpg","/ClubPages/Vincetroke /Vincetroke_2.jpg","/ClubPages/Vincetroke /Vincetroke_3.jpg","/ClubPages/Vincetroke /Vincetroke_4.jpg"], href: "/club/vincetroke" },
  { title: "Ikkatt", images: ["/ClubPages/Ikkatt/Ikkatt_1.jpg","/ClubPages/Ikkatt/Ikkatt_2.jpg","/ClubPages/Ikkatt/Ikkatt_3.jpg","/ClubPages/Ikkatt/Ikkatt_4.jpg"], href: "/club/ikkatt" },
];

function CardCarousel({ item, onEnlarge }: { item: GalleryItem, onEnlarge: (item: GalleryItem, index: number) => void }) {
  const images = item.images || (item.src ? [item.src] : []);

  return (
    <div 
      className="group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-left h-[300px] cursor-pointer"
      onClick={() => onEnlarge(item, 0)}
    >
      <Image
        src={images[0]}
        alt={`${item.title}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 pointer-events-none">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Club Spotlight</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
        </div>
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-auto">
          Enlarge
        </span>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ images: string[], currentIndex: number, title: string, href?: string } | null>(null);

  const nextModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage) {
      setSelectedImage({
        ...selectedImage,
        currentIndex: (selectedImage.currentIndex + 1) % selectedImage.images.length
      });
    }
  };

  const prevModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage) {
      setSelectedImage({
        ...selectedImage,
        currentIndex: (selectedImage.currentIndex - 1 + selectedImage.images.length) % selectedImage.images.length
      });
    }
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = selectedImage ? "hidden" : "auto";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#02040a] text-white">
      <StarrySkyBackdrop particleQuantity={72} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.12),transparent_24%),radial-gradient(circle_at_25%_30%,rgba(250,204,21,0.10),transparent_22%),radial-gradient(circle_at_90%_100%,rgba(59,130,246,0.12),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.38em] text-slate-400">
            Visual Archive
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            <Cover>Gallery</Cover>
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-300 md:text-lg">
            A richer and more cinematic gallery, now expanded with standout moments
            from individual clubs alongside your existing festival collection.
          </p>
        </div>

        <section className="mb-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">Featured Moments</h2>
              <p className="mt-2 text-slate-400">Hero shots from HOSCA celebrations and campus culture.</p>
            </div>
          </div>
          <div className="grid auto-rows-[230px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredMoments.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setSelectedImage({ images: [item.src!], currentIndex: 0, title: item.title, href: item.href })}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-left shadow-[0_18px_60px_-28px_rgba(0,0,0,0.82)] ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <Image
                  src={item.src!}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">Club Highlights</h2>
              <p className="mt-2 text-slate-400">Selected frames from club galleries to make the page feel fuller and sharper.</p>
            </div>
            <Link
              href="/club"
              className="hidden rounded-full border border-white/12 bg-white/6 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-white/25 hover:bg-white/10 md:inline-flex"
            >
              Explore Clubs
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clubHighlights.map((item) => (
              <CardCarousel 
                key={item.title} 
                item={item} 
                onEnlarge={(item, idx) => setSelectedImage({ images: item.images || [item.src!], currentIndex: idx, title: item.title, href: item.href })} 
              />
            ))}
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#050913]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white transition-colors duration-300 hover:bg-white/10"
                aria-label="Close image"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative h-[60vh] max-h-[600px] w-full group">
                <Image
                  src={selectedImage.images[selectedImage.currentIndex]}
                  alt={`${selectedImage.title} ${selectedImage.currentIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
                
                {selectedImage.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevModalImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white opacity-0 transition-all duration-300 hover:bg-white/20 group-hover:opacity-100 z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button 
                      onClick={nextModalImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white opacity-0 transition-all duration-300 hover:bg-white/20 group-hover:opacity-100 z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
              </div>

              <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Gallery Preview</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{selectedImage.title}</h3>
                </div>
                {selectedImage.href && (
                  <Link
                    href={selectedImage.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                  >
                    Visit Club Page
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
