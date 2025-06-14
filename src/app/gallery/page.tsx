"use client";

import { FocusCards } from "@/components/ui/focus-cards";
import { Cover } from "@/components/ui/cover";

const festPhotos = [
  {
    title: "Festival Moments 1",
    src: "/gallery/fest/DSC_8732.JPG",
  },
  {
    title: "Festival Moments 2",
    src: "/gallery/fest/DSC_7893.JPG",
  },
  {
    title: "Festival Moments 3",
    src: "/gallery/fest/DSC_0201.JPG",
  },
  {
    title: "Festival Moments 4",
    src: "/gallery/fest/DSC_0127.JPG",
  },
  {
    title: "Festival Moments 5",
    src: "/gallery/fest/51-fz5hcDhs.jpg",
  },
  {
    title: "Festival Moments 6",
    src: "/gallery/fest/45-L1KhcDhs.jpg",
  },
  {
    title: "Festival Moments 7",
    src: "/gallery/fest/41-5NQgcDhs.jpg",
  },
  {
    title: "Festival Moments 8",
    src: "/gallery/fest/4-T5nhcDhs.jpg",
  },
  {
    title: "Festival Moments 9",
    src: "/gallery/fest/37-7johcDhs.jpg",
  },
  {
    title: "Festival Moments 10",
    src: "/gallery/fest/36-dWdhcDhs.jpg",
  },
  {
    title: "Festival Moments 11",
    src: "/gallery/fest/30-UlHgcDhs.jpg",
  },
  {
    title: "Festival Moments 12",
    src: "/gallery/fest/28-To3gcDhs.jpg",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-red-900 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center text-neutral-200 mt-10 transition-colors duration-300 hover:text-yellow-300">
            <Cover>Gallery</Cover>
          </h2>
          <p className="text-lg mt-10 text-center mb-8 max-w-3xl mx-auto bg-gradient-to-r from-pink-400 via-amber-400 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,146,140,0.4)]">
            Step into the rhythm, color, and joy of HOSCA’s most unforgettable moments — a timeless celebration of unity, culture, and spirit.
          </p>
        </div>
        <FocusCards cards={festPhotos} />
      </div>
    </div>
  );
} 