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

const EpicureanMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Ananya Maldyar',
    position: 'Coordinator',
    year: '3rd Year',
    branch: 'Electrical and Electronics Engineering',
    email: 'ananya_2301ee06@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/ananya-maldyar-132505298/',
    instagramUrl: '#',
    imageUrl: '/Coordinators/Epicurean/ananya.jpg',
  },
  {
    id: 2,
    name: 'Shibanshu Soubhagya Das',
    position: 'Coordinator',
    year: '3rd Year',
    branch: 'Civil Engineering',
    email: 'shibanshu_2302gt08@iitp.ac.in',
    linkedinUrl: 'https://in.linkedin.com/in/shibanshu-soubhagya-das-46a5342b5',
    instagramUrl: '#',
    imageUrl: '/Coordinators/Epicurean/Shibhanshu.png',
  },
  {
    id: 3,
    name: 'Aditi Lohiya',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Chemical Engineering',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/aditi-lohiya-395532321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagramUrl: '#',
    imageUrl: '/SubCords/Epicurean/AditiLohiya.jpg',
  },
  {
    id: 4,
    name: 'Avi Bharti',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Computer Science and Engineering',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/avi-bharti-029b1833b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    instagramUrl: '#',
    imageUrl: '/SubCords/Epicurean/Avi.jpg',
  },
  {
    id: 5,
    name: 'Shailja Brijendra Mathuria ',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Metallurgical and Materials Engineering',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/shailja-mathuria-739834312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagramUrl: '#',
    imageUrl: '/SubCords/Epicurean/ShailjaMathuria.jpg',
  },
  {
    id: 6,
    name: 'Krittika Kiran Das',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Electronics and Communication Engineering',
    email: 'Add Email',
    linkedinUrl: 'https://in.linkedin.com/in/krittika-das-4704b2327',
    instagramUrl: '#',
    imageUrl: '/SubCords/Epicurean/Kritika.HEIC',
  },
  {
    id: 7,
    name: 'Kumari Shikha ',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Electrical and Electronics Engineering',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/kumari-shikha-a1506a327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagramUrl: '#',
    imageUrl: '/SubCords/Epicurean/KumariShikha.jpg',
  },
  {
    id: 8,
    name: 'Shashank Mishra ',
    position: 'Sub-Coordinator',
    year: '2nd Year',
    branch: 'Electronics and Communication Engineering',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/shashank-mishra-72b495326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagramUrl: '#',
    imageUrl: '/SubCords/Epicurean/Shashank.jpg',
  }
];

export default function EpicureanPage() {
const renderMemberCard = (member: ClubMember) => (
  <div key={member.id} className="flex justify-center w-full">
    <CardContainer className="w-[320px] h-[520px]">
      <CardBody className="bg-[#E5AD01] text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">


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
          className="text-xl font-bold text-indigo-950 px-2 h-[3em] flex items-center justify-center"
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
            className="text-indigo-950 text-sm px-2 h-[3em] flex items-center justify-center"
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
                src="/ClubLogo/epicurean.png" 
                alt="Litracy Society" 
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border border-white/[0.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          {/* Content Section - Right on desktop, bottom on mobile */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-300 mb-6">
              Epicurean 
            </h1>
            <p className="text-lg md:text-xl text-black max-w-2xl mx-auto lg:mx-0">
              the art of articulation and this is where team bonding is celebrated.
            </p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* About Section */}
          <CardContainer className="w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">About Epicurean</h2>
              <p className="text-black-700 dark:text-neutral-300">
                  The House of Oratory Talents is the speaking arts club of IIT Patna.The club practices the art of articulation and this is where team bonding is celebrated.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-black-700 dark:text-white mb-3">What We Do</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>The club conducts events running from PD,MUN,JAM and lots more to allow the young minds to see the world through a better perspective</li>
                  <li>Essay Writting (MUN)</li>
                  <li>Quest-ion</li>
                  <li>Pan India Quizzing fest PARAKH annually</li>
                  <li>Group discussions</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-black-700 dark:text-white mb-3">Our Events</h3>
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

          {/* Image Gallery */}
          <div className="mb-16">
            <ImageGrid
              images={[
                "/ClubPages/Epicurean/IMG-20250126-WA0040.jpg",
                "/ClubPages/Epicurean/IMG-20250126-WA0042.jpg",
                "/ClubPages/Epicurean/IMG-20250126-WA0045.jpg",
                "/ClubPages/Epicurean/IMG-20250126-WA0046.jpg",
                "/ClubPages/Epicurean/IMG-20250126-WA0047.jpg",
                "/ClubPages/Epicurean/IMG-20250126-WA0049.jpg",
                "/ClubPages/Epicurean/IMG-20250126-WA0050.jpg",
                "/ClubPages/Epicurean/IMG-20250126-WA0051.jpg"
              ]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>
        {/* Members Section */}
        <section className="mb-16 mt-16">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#FFDB58" }}>Our Team</h2>


          {/* Coordinators Section */}
          <h2 className="text-3xl font-semibold text-center mb-6 text-orange-300 px-2 md:px-0" style={{ color: "#4169E1" }}>Coordinators</h2>
<div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4 md:px-0 mb-6">
  {EpicureanMembers.slice(0, 2).map((member) => (
    <div className="flex justify-center">{renderMemberCard(member)}</div>
  ))}
</div>

          {/* Sub Coordinators Section */}
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-orange-300 px-4 md:px-0" style={{ color: "#4169E1" }}>Sub Coordinators</h2>
<div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4 md:px-0 mb-6">
  {EpicureanMembers.slice(2).map((member) => (
    <div className="flex justify-center">{renderMemberCard(member)}</div>
  ))}
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