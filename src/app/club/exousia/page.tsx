'use client';

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {FaLinkedin,FaEnvelope} from "react-icons/fa";
import { ImageGrid } from "@/components/ui/image-grid";
import { Suspense } from "react";

interface ClubMember {
  id: number;
  name: string;
  position: string;
  imageUrl?: string;
  email?: string;
  linkedinUrl?: string;
}

const ExousiaMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Vibhuti Gupta',
    position: 'Coordinator',
    email: 'vibhuti_2301mm18@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/vibhuti-gupta-186776262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/Coordinators/Exousia/Vibhuti.jpg',
  },
  {
    id: 2,
    name: 'Ghanishth Attrey',
    position: 'Coordinator',
    email: 'ghanishth_2301ce12@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/ghanishth-attrey-364930351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/Coordinators/Exousia/Ghanisth.jpg',
  },
  {
    id: 3,
    name: 'Antriksha Aman',
    position: 'Sub-Coordinator',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/antriksha-aman-320383327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Exousia/Antariksha.jpg',
  },
  {
    id: 4,
    name: 'Karan Jarupala',
    position: 'Sub-Coordinator',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/karan-jarupulavath-6546212a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Exousia/KaranJarupala.jpg',
  },
  {
    id: 5,
    name: 'Gaganasadrush G',
    position: 'Sub-Coordinator',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/gaganasadrush-g-1199b9332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '',
  },
  {
    id: 6,
    name: 'Vennela Jangiti',
    position: 'Sub-Coordinator',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/vennela-jangiti-492264352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '',
  },
  {
    id: 7,
    name: 'Tanvi Begari',
    position: 'Sub-Coordinator',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/tanvi-begari-30ab1036a/',
    imageUrl: '/SubCords/Exousia/TanviBegari.jpg',
  },
  {
    id: 8,
    name: 'Chathurya',
    position: 'Sub-Coordinator',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/chathurya0311',
    imageUrl: '',
  }
];

export default function ExousiaPage() {
const renderMemberCard = (member: ClubMember) => (
  <div key={member.id} className="flex justify-center w-full">
    <CardContainer className="w-[320px] h-[320px]">
      <CardBody className="bg-orange-400 relative group/card border-white border dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[280px] h-[400px] rounded-xl p-6 border flex flex-col justify-between">
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white bg-white flex items-center justify-center">
            {member.imageUrl ? (
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-white flex items-center justify-center">
                <span className="text-3xl font-bold text-orange-500 text-center px-2">
                  {member.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </CardItem>

        <CardItem
          translateZ="50"
          className="text-xl font-bold text-black dark:text-white px-2 h-[3em] flex items-center justify-center -mt-20"
        >
          <div className="line-clamp-2 leading-tight text-center">
            {member.name}
          </div>
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm font-bold px-2 h-[3em] flex items-center justify-center -mt-25"
        >
          <div className="line-clamp-2 leading-tight text-center">
            {member.position}
          </div>
        </CardItem>

        <div className="flex justify-center gap-3 mt-4">
          {member.email && (
            <CardItem
              translateZ={20}
              as="a"
              href={`mailto:${member.email}`}
              className="w-10 h-10 p-2 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-colors duration-300 flex items-center justify-center -mt-15"
              aria-label="Email"
            >
              <FaEnvelope className="w-4 h-4" />
            </CardItem>
          )}
          {member.linkedinUrl && (
            <CardItem
              translateZ={20}
              as="a"
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 p-2 rounded-full bg-gray-100 hover:bg-[#0077B5] hover:text-white transition-colors duration-300 flex items-center justify-center -mt-15"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  </div>
);

  return (
    <div className="relative min-h-screen w-full bg-[url('/club/aria_background.jpeg')] bg-cover bg-center bg-no-repeat">

      <div className="absolute inset-0 bg-white/[0.6]"></div> 
      <BackgroundBeams className="absolute inset-0" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/ClubLogo/exousia.jpg" 
                alt="Exousia Dance Society" 
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border border-white/[0.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400 mb-6">
              Exousia
            </h1>
            <p className="text-lg md:text-xl text-orange max-w-2xl mx-auto lg:mx-0">
              The Official Dance Club of IIT Patna - Where rhythm meets passion and movement tells stories.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <CardContainer className="w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">About Exousia</h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Exousia is the official dance club of IIT Patna. Initiated as a platform to promote dance culture in students, it has bloomed into a full-fledged society of dancers skilled in various dance styles ranging from classical to fusion to western.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">What We Do</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Classical dance performances</li>
                  <li>Western dance competitions</li>
                  <li>Fusion dance events</li>
                  <li>Street dance battles</li>
                  <li>Dance workshops and training</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">Our Events</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>FlipToe</li>
                  <li>HeelTurn</li>
                  <li>Beat It Off</li>
                  <li>Hookstep</li>
                  <li>Rhythm</li>
                </ul>
              </div>
            </CardBody>
          </CardContainer>

          <div className="mb-16">
            <ImageGrid 
              images={[
                "/ClubPages/Exousia/IMG-20250613-WA0026.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0027.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0029.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0030.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0031.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0032.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0033.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0034.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0035.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0036.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0037.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0038.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0039.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0040.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0041.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0042.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0043.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0044.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0045.jpg",
                "/ClubPages/Exousia/IMG-20250613-WA0046.jpg"
              ]} 
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>
        <section className="mb-16 mt-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Our Team</h2>

          <h2 className="text-3xl font-semibold text-center mb-6 text-orange-300 px-2 md:px-0" style={{ color: "#4169E1" }}>Coordinators</h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4 md:px-0 mb-6">
            {ExousiaMembers.slice(0, 2).map((member) => (
              <div className="flex justify-center">{renderMemberCard(member)}</div>
            ))}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-orange-300 px-4 md:px-0" style={{ color: "#4169E1" }}>
            Sub Coordinators
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4 md:px-0 mb-6">
            {ExousiaMembers.slice(2).map((member) => (
              <div className="flex justify-center">{renderMemberCard(member)}</div>
            ))}
          </div>
          
        </section>
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://facebook.com/hosca.iitp"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/hosca_iitp"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com/user/CULTatIITP"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#FF0000] hover:text-white transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
} 