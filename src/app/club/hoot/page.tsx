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

const HootMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Aviral Awasthi ',
    position: 'Coordinator',
    year: '3rd Year',
    branch: 'Metallurgical and Materials Engineering',
    email: 'aviral_2301mm29@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/aviral-awasthi-86943528a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagramUrl: '#',
    imageUrl: '/Coordinators/HOOT/Aviral.jpg',
  },
  {
    id: 2,
    name: 'Venkatesh Mishra',
    position: 'Coordinator',
    year: '3rd Year',
    branch: 'Mechanical Engineering',
    email: 'venkatesh_2301me66@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/venkatesh-mishra-399317288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    instagramUrl: '#',
    imageUrl: '/Coordinators/HOOT/Venkatesh.jpg',
  },
  {
    id: 3,
    name: 'Aanushka Saha',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Chemical Engineering',
    email: '#',
    linkedinUrl: 'https://www.linkedin.com/in/aanushka-saha-a2b78a322/',
    instagramUrl: '#',
    imageUrl: '/SubCords/HOOT/aanushka_hoot.jpg',
  },
  {
    id: 4,
    name: 'Shashwat Tiwari',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Chemical Engineering',
    email: '#',
    linkedinUrl: 'hhttps://www.linkedin.com/in/shashwat-tiwari-2920852bb?utm_source=share&utm_campaign=share_via&utm_co',
    instagramUrl: '#',
    imageUrl: '/SubCords/HOOT/Shashwat.jpg',
  },
  {
    id: 5,
    name: 'Ankit Basu',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Mathematics and Computing',
    email: '#',
    linkedinUrl: 'https://www.linkedin.com/in/ankit-basu-32295931a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    instagramUrl: '#',
    imageUrl: '/SubCords/HOOT/AnkitBasu.jpg',
  },
  {
    id: 6,
    name: 'Shreyas Das',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Mechanical Engineering',
    email: '#',
    linkedinUrl: 'https://www.linkedin.com/in/shreyas-das-3a979b316/',
    instagramUrl: '#',
    imageUrl: '/SubCords/HOOT/ShreyasDas.jpg',
  },
  {
    id: 7,
    name: 'Nirmit Chaurasia',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Artificial Intelligence and Data Science',
    email: '#',
    linkedinUrl: 'https://in.linkedin.com/in/nirmit-chaurasia-678781191',
    instagramUrl: '#',
    imageUrl: '/SubCords/HOOT/nirmitphoto.png',
  },
  {
    id: 8,
    name: 'Gopal',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Economics',
    email: '#',
    linkedinUrl: 'https://www.linkedin.com/in/gopal-ramanathan-76173b306/',
    instagramUrl: '#',
    imageUrl: '/SubCords/HOOT/Gopal.jpg',
  }
];

export default function HootPage() {
const renderMemberCard = (member: ClubMember) => (
  <div key={member.id} className="flex justify-center w-full">
    <CardContainer className="w-[320px] h-[520px]">
      <CardBody className="bg-[#CCAC89] text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">


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
          className="text-xl font-bold text-green-900 px-2 h-[3em] flex items-center justify-center"
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
            className="text-green-700 text-sm px-2 h-[3em] flex items-center justify-center"
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
                src="/ClubLogo/hoot.jpg" 
                alt="Hoot Literature Society" 
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border border-white/[0.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          {/* Content Section - Right on desktop, bottom on mobile */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 mb-6">
              HOOT
            </h1>
            <p className="text-lg md:text-xl text-black max-w-2xl mx-auto lg:mx-0">
              The House of Oratory Talents - Where words come alive and ideas take flight.
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center text-center mb-16 mt-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">HOOT</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            The House of Oratory Talents - Where words come alive and ideas take flight.
          </p>
        </div> */}

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* About Section */}
          <CardContainer className="w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">About HOOT</h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                The House of Oratory Talents is the speaking arts club of IIT Patna. HOOT is an engaging club where an individual finds his way to speak his mind out. We at HOOT deal with current affairs, get to know where the world is going and ponder on how we can improvise our thought process too.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">What We Do</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Debate competitions</li>
                  <li>Model United Nations (MUN)</li>
                  <li>Just A Minute (JAM) sessions</li>
                  <li>Public speaking workshops</li>
                  <li>Group discussions</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">Our Events</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>PD (Public Debate)</li>
                  <li>MUN (Model United Nations)</li>
                  <li>JAM (Just A Minute)</li>
                  <li>Group Discussions</li>
                  <li>Speaking Workshops</li>
                </ul>
              </div>
            </CardBody>
          </CardContainer>

          {/* Gallery Section */}
          <div className="mb-16">
            <ImageGrid 
              images={[
                "/ClubPages/HOOT/HOOT1.jpg",
                "/ClubPages/HOOT/HOOT2.jpg",
                "/ClubPages/HOOT/HOOT3.jpg",
                "/ClubPages/HOOT/HOOT4.jpg",
                "/ClubPages/HOOT/HOOT5.jpg",
                "/ClubPages/HOOT/HOOT6.jpg",
                "/ClubPages/HOOT/HOOT7.jpg",
                "/ClubPages/HOOT/HOOT8.jpg",
                "/ClubPages/HOOT/HOOT9.jpg",
                "/ClubPages/HOOT/HOOT10.jpg",
                "/ClubPages/HOOT/HOOT11.jpg",
                "/ClubPages/HOOT/HOOT12.jpg",
                "/ClubPages/HOOT/HOOT13.jpg"
              ]} 
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>
        {/* Members Section */}
        <section className="mb-16 mt-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Our Team</h2>

          {/* Coordinators Section */}
          <h2 className="text-3xl font-semibold text-left mb-6 text-orange-300 px-2 md:px-0" style={{ color: "#4169E1" }}>Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 md:px-0 justify-items-center">
            {HootMembers.slice(0, 2).map((member) => renderMemberCard(member))}
          </div>

          {/* Sub Coordinators Section */}
          <h2 className="text-3xl font-semibold text-left mt-12 mb-6 text-orange-300 px-4 md:px-0" style={{ color: "#4169E1" }}>Sub Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 md:px-0 justify-items-center">
            {HootMembers.slice(2).map((member) => renderMemberCard(member))}
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