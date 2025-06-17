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
  year?: string;
  branch?: string;
  imageUrl?: string;
  email?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

const AriaMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Aarsh Sanghavi',
    position: 'Coordinator',
    year: '3rd Year',
    branch: 'Computer Science and Engineering',
    email: 'aarsh_2301cs01@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/aarsh-sanghavi-b61552280/',
    instagramUrl: '#',
    imageUrl: '/Coordinators/Aria/aarsh.jpg',
  },
  {
    id: 2,
    name: 'Rithvik Konidena',
    position: 'Coordinator',
    year: '3rd Year',
    branch: 'Computer Science and Engineering',
    email: 'rithvik_2302cs09@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/rithvik-konidena-01a637317/',
    instagramUrl: '#',
    imageUrl: '/Coordinators/Aria/Rithvik.jpeg',
  },
  {
    id: 3,
    name: 'Dhairya Garg',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Chemical Engineering',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/dhairya-garg-32656024b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagramUrl: '#',
    imageUrl: '/SubCords/Aria/Dhairya.jpg',
  },
  {
    id: 4,
    name: 'Sejal Goel ',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Computer Science and Engineering',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/sejal-goel-6ab186314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagramUrl: '#',
    imageUrl: '/SubCords/Aria/Sejal.jpg',
  },
  {
    id: 5,
    name: 'Sankhanil Chakraborty ',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Artificial Intelligence and Data Science',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/sankhanil-chakraborty-9377a032a/',
    instagramUrl: '#',
    imageUrl: '/SubCords/Aria/Sankhanil.jpg',
  },
  {
    id: 6,
    name: 'Shorya Pratap Singh',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Chemical Engineering',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/shorya-pratap-singh-7aa29b320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagramUrl: '#',
    imageUrl: '/SubCords/Aria/SHORYA.jpg',
  },
  {
    id: 7,
    name: 'Abhinav Datta ',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Computer Science and Engineering',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/abhinav-datta-54795131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagramUrl: '#',
    imageUrl: '/SubCords/Aria/AbhinavDatta.jpg',
  },
  {
    id: 8,
    name: 'Joven Sony',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Chemical Engineering',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/joven-sony-aa0862224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagramUrl: '#',
    imageUrl: '/SubCords/Aria/Joven.jpg',
  }
];

export default function AriaPage() {
const renderMemberCard = (member: ClubMember) => (
  <div key={member.id} className="flex justify-center w-full">
    <CardContainer className="w-[320px] h-[520px]">
      <CardBody className="bg-sky-300 relative group/card border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
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
          className="text-xl font-bold text-black px-2 h-[3em] flex items-center justify-center"
        >
          <div className="line-clamp-2 leading-tight text-center">
            {member.name}
          </div>
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm font-bold px-4 h-[3em] flex items-center justify-center"
        >
          <div className="line-clamp-2 leading-tight text-center">
            {member.position}
          </div>
        </CardItem>

        {member.year && member.branch && (
          <CardItem
            as="p"
            translateZ="60"
            className="text-black text-sm px-2 h-[3em] flex items-center justify-center"
          >
            <div className="line-clamp-2 leading-tight text-center">
              {member.year} - {member.branch}
            </div>
          </CardItem>
        )}

        <div className="flex justify-center gap-3 mt-4">
          {member.email && (
            <CardItem
              translateZ={20}
              as="a"
              href={`mailto:${member.email}`}
              className="p-2 rounded-full bg-white text-black hover:bg-red-500 hover:text-white transition-colors duration-300"
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
              className="p-2 rounded-full bg-white text-black hover:bg-[#0077B5] hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </CardItem>
          )}
          {member.instagramUrl && (
            <CardItem
              translateZ={20}
              as="a"
              href={member.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white text-black hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
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
        {/* Hero Section */}
        {/* Hero Section with Image Left, Content Right */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          {/* Image Section - Left on desktop, top on mobile */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/ClubLogo/aria.jpg" 
                alt="Aria Music Society" 
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border border-white/[0.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          {/* Content Section - Right on desktop, bottom on mobile */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 mb-6">
              Aria
            </h1>
            <p className="text-lg md:text-xl text-orange max-w-2xl mx-auto lg:mx-0">
              The Music Society of IIT Patna - Where melodies come alive and harmonies create magic.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* About Section */}
          <CardContainer className="w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">About Aria</h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Aria, standing for "melody" in Italian, is the music society of IIT Patna. It aims to foster musical talent and bring people together through their love for music. Acoustic nights, concerts and performances are regularly conducted.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">What We Do</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Acoustic nights and concerts</li>
                  <li>Music workshops and training</li>
                  <li>Inter-college music competitions</li>
                  <li>Band performances</li>
                  <li>Cultural event performances</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">Our Events</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Acoustic Nights</li>
                  <li>Battle of Bands</li>
                  <li>Music Workshops</li>
                  <li>Cultural Fest Performances</li>
                  <li>Inter-college Music Competitions</li>
                </ul>
              </div>
            </CardBody>
          </CardContainer>

          {/* Image Gallery */}
          <CardContainer className="w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
              <div className="relative rounded-lg overflow-hidden">
                <Suspense fallback={<div className="w-full h-full bg-gray-800 animate-pulse" />}>
                  <ImageGrid
                    images={[
                      "/ClubPages/Aria/IMG-20250614-WA0146.jpg",
                      "/ClubPages/Aria/IMG-20250614-WA0142.jpg",
                      "/ClubPages/Aria/IMG-20250614-WA0140.jpg",
                      "/ClubPages/Aria/IMG-20250614-WA0136.jpg",
                      "/ClubPages/Aria/IMG-20250614-WA0134.jpg",
                      "/ClubPages/Aria/IMG-20250614-WA0125.jpg",
                      "/ClubPages/Aria/IMG-20250614-WA0119.jpg",
                      "/ClubPages/Aria/IMG-20250614-WA0115.jpg",
                      "/ClubPages/Aria/IMG-20250614-WA0114.jpg",
                      "/ClubPages/Aria/IMG-20250614-WA0113.jpg",
                      "/ClubPages/Aria/IMG-20250614-WA0109.jpg",
                      "/ClubPages/Aria/IMG-20250614-WA0108.jpg",
                      "/ClubPages/Aria/IMG-20250614-WA0107.jpg",
                      "/ClubPages/Aria/IMG-20250210-WA0018.jpg"
                    ]}
                    className="max-w-4xl mx-auto"
                  />
                </Suspense>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        {/* Members Section */}
        <section className="mb-16 mt-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">Our Team</h2>

          {/* Coordinators Section */}
          <h2 className="text-3xl font-semibold text-left mb-6 text-orange-300 px-2 md:px-0" style={{ color: "#4169E1" }}>Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 md:px-0 justify-items-center">
            {AriaMembers.slice(0, 2).map((member) => renderMemberCard(member))}
          </div>

          {/* Sub Coordinators Section */}
          <h2 className="text-3xl font-semibold text-left mt-12 mb-6 text-orange-300 px-4 md:px-0" style={{ color: "#4169E1" }}>Sub Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 md:px-0 justify-items-center">
            {AriaMembers.slice(2).map((member) => renderMemberCard(member))}
          </div>
        </section>
        {/* Social Media Links */}
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