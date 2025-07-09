"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

interface ClubMember {
  id: number;
  name: string;
  position: string;
  imageUrl?: string;
  email?: string;
  linkedinUrl?: string;
}

const StdMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Abhitesh Shukla',
    position: 'Coordinator',
    email: 'abhitesh_2301ee52@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/abhitesh-shukla-bb8053294/',
    imageUrl: '/Coordinators/STD/Abhitesh.jpg',
  },
  {
    id: 2,
    name: 'Archita Shuchi',
    position: 'Coordinator',
    email: 'archita_2301ce06@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/archita-shuchi-a88143326/',
    imageUrl: '/Coordinators/STD/Archita.jpeg',
  },
  {
    id: 3,
    name: 'Shiva Gupta',
    position: 'Sub-Coordinator',
    email: 'standup_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/shiva-gupta-iit-patna/',
    imageUrl: '/SubCords/STD/Shiva.jpeg',
  },
  {
    id: 4,
    name: 'Pratyush Chandra',
    position: 'Sub-Coordinator',
    email: 'standup_club@iitp.ac.in',
    linkedinUrl: 'https://in.linkedin.com/in/pratyush-chandra-',
    imageUrl: '/SubCords/STD/Pratyush.jpg',
  },
  {
    id: 5,
    name: 'Vaibhav Shrivastava ',
    position: 'Sub-Coordinator',
    email: 'standup_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/vaibhav-srivastava-13737a321/',
    imageUrl: '/SubCords/STD/Vaibhav.jpg',
  },
  {
    id: 6,
    name: 'Monika Poonia',
    position: 'Sub-Coordinator',
    email: 'standup_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/monika-poonia-b52025324',
    imageUrl: '/SubCords/STD/monika.jpg',
  }
];

export default function AnimePage() {
  const renderMemberCard = (member: ClubMember) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-[#7AE8E6] text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-red-500 bg-white flex items-center justify-center">
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

          <div className="flex justify-center gap-5 mt-4">
            <CardItem
              translateZ="50"
              className="flex items-center justify-center text-xl font-bold text-neutral-600 dark:text-white text-center"
            >
              {member.name}
            </CardItem>
          </div>

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
            {/* {member.instagramUrl && (
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
            )} */}
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
  return (
    <div className="relative min-h-screen w-full bg-white/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <BackgroundBeams className="absolute inset-0" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/ClubLogo/std.png"
                alt="Stand Up Comedy Society"
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border border-white/[0.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-400 mb-6"
              style={{ color: "#D4AF37" }}
            >
              STD
            </h1>
            <p className="text-lg md:text-xl text-black max-w-2xl mx-auto lg:mx-0">
              IITP’s unofficial therapy session where students turn awkwardness,
              engineering pain, and hostel horrors into stand-up gold. Laughter
              guaranteed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="w-full">
            <div className="border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">
                About STD Club
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Got jokes? STD’s the stage. IITP’s unofficial therapy session
                where students turn awkwardness, engineering pain, and hostel
                horrors into stand-up gold. Laughter guaranteed.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  What We Do
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>quirks & gimmicks</li>
                  <li>critical thinking skills(MUN)</li>
                  <li>Quest-ion</li>
                  <li>Pan India Quizzing fest PARAKH annually</li>
                  <li>Group discussions</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  Our Events
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>PD (Public Debate)</li>
                  <li>MUN (Model United Nations)</li>
                  <li>JAM (Just A Minute)</li>
                  <li>Group Discussions</li>
                  <li>Speaking Workshops</li>
                </ul>
              </div>
            </div>
          </div>

          <CardContainer className="w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">
                Gallery
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <img src="/ClubPages/STD/IMG_20250614_162431.jpg" alt="std Debate" className="rounded-lg w-full h-54 object-cover" />
                <img src="/ClubPages/STD/IMG_20250614_163131.jpg" alt="std MUN" className="rounded-lg w-full h-54 object-cover" />
                <img src="/ClubPages/STD/IMG-20240810-WA0024.jpg" alt="std Event" className="rounded-lg w-full h-54 object-cover" />
                <img src="/ClubPages/STD/IMG-20250614-WA0006.jpg" alt="std Team" className="rounded-lg w-full h-54 object-cover" />
                <img src="/ClubPages/STD/IMG-20250614-WA0011.jpg" alt="std Team" className="rounded-lg w-full h-54 object-cover" />
                <img src="/ClubPages/STD/IMG-20250614-WA0014.jpg" alt="std Team" className="rounded-lg w-full h-54 object-cover" />
                <img
                  src="/ClubLogo/std.png"
                  alt="std Debate"
                  className="rounded-lg w-full h-54 object-cover"
                />
                <img
                  src="/ClubLogo/std.png"
                  alt="std MUN"
                  className="rounded-lg w-full h-54 object-cover"
                />
                <img
                  src="/ClubLogo/std.png"
                  alt="std Event"
                  className="rounded-lg w-full h-54 object-cover"
                />
                <img
                  src="/ClubLogo/std.png"
                  alt="std Team"
                  className="rounded-lg w-full h-54 object-cover"
                />
              </div>
            </CardBody>
          </CardContainer>
        </div>

        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#6A0DAD]">
            Our Team
          </h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#191970] px-2 md:px-0">
            Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {StdMembers.slice(0, 2).map((member) => renderMemberCard(member))}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#191970] px-4 md:px-0">
            Sub Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {StdMembers.slice(2).map((member) => renderMemberCard(member))}
          </div>
        </section>
        
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://www.instagram.com/standup_club.iitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>

        </div>
      </div>
    </div>
  );
}
