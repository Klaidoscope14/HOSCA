"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { ImageGrid } from "@/components/ui/image-grid";
import Image from "next/image";

interface ClubMember {
  id: number;
  name: string;
  position: string;
  imageUrl?: string;
  email?: string;
  linkedinUrl?: string;
}

const SyahiMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Tanushkumar Yadav',
    position: 'Coordinator',
    imageUrl: '/Coordinators/Syahi/Tanushkumar_Yadav.jpg',
    email: "tanushkumar_2401ph25@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/tanushkumar-yadav-9126812b8?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 2,
    name: 'Choudhary Lucky',
    position: 'Coordinator',
    imageUrl: '/Coordinators/Syahi/Choudhary_Lucky.jpg',
    email: "choudhary_2401mm31@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/choudharyluckyezxs?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 3,
    name: 'Rajnandani Singh',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Syahi/Rajnandani_Singh.jpg',
    email: "rajnandani_2501ce63@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/rajnandani-singh-513b04378?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 4,
    name: 'Shorya Pratap Singh',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Syahi/Shorya_Pratap_Singh.jpg',
    email: "shorya_2501cb64@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/shorya-pratap-singh-7b7b3b384/",
  },
  {
    id: 5,
    name: 'Rudransh Mittal',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Syahi/Rudransh_Mittal.webp',
    email: "rudransh_2501me10@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/rudransh-mittal-140100394?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 6,
    name: 'Lohitha Kotra',
    position: 'Sub-Coordinator',
    email: "kotra_2052cm06@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/lohitha-kotra-2ba566407?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 7,
    name: 'Sameer Kumar',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Syahi/Sameer_Kumar.jpg',
    email: "sameer_2501ec02@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/sameer-kumar-8a815437b/?skipRedirect=true",
  },
  {
    id: 8,
    name: 'Sankalp Singh',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Syahi/Sankalp_Singh.jpg',
    email: "sankalp_2501ec22@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/sankalp-singh-886287326?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];

export default function SyahiPage() {
  const renderMemberCard = (member: ClubMember) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-blue-200 text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white bg-white flex items-center justify-center">
              {member.imageUrl ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={144}
                  height={144}
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

                                        <div className="flex justify-center gap-4 mt-4 pb-4">
            {member.email && (
              <CardItem
                translateZ={20}
                as="a"
                href={`mailto:${member.email}`}
                className="p-2.5 rounded-full bg-white/90 text-black shadow-sm border border-black/10 hover:bg-red-500 hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300"
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
                className="p-2.5 rounded-full bg-white/90 text-black shadow-sm border border-black/10 hover:bg-[#0077B5] hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300"
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
    <div className="relative min-h-screen bg-[#10064b] w-full bg-[url('/club/aria_background.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/[0.6]"></div>
      <BackgroundBeams className="absolute inset-0" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/ClubLogo/syahi.jpg"
                alt="Syahi Club Logo"
                width={384}
                height={384}
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border border-white/[0.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8f4607] mb-6">
              Syahi Club
            </h1>
            <p className="text-lg md:text-xl text-black max-w-2xl mx-auto lg:mx-0">
              express what one feels, introspect it and grow as a human in the
              process.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* About Section */}
          <div className="w-full">
            <div className="border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8 ">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                About Syahi Club
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Syahi is the literary club of IIT Patna. Syahi aims to provide a
                platform to nurture the writing talents of people and help them
                grow in their journeys. It organizes various on-campus as
                well as inter-college competitions for people to connect through
                their writing talents with a wider audience.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  What We Do
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Poetic performances</li>
                  <li>Word games and scrabble</li>
                  <li>Creative Writing</li>
                  <li>Slams</li>
                  <li>Literary Workshops</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  Our Events
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Kavyarangam</li>
                  <li>Abhivyakti</li>
                  <li>Cult fest Performances</li>
                  <li>Ink Heart</li>
                  <li>Broken Board</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <ImageGrid
              images={[
  "/ClubPages/Syahi/Syahi_5.jpg",
  "/ClubPages/Syahi/Syahi_6.jpg",
  "/ClubPages/Syahi/Syahi_7.jpg"
]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>
        {/* Members Section */}

        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#E6A14C]">
            Our Team
          </h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#4169E1] px-2 md:px-0">
            Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {SyahiMembers.slice(0, 2).map((member) => renderMemberCard(member))}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#4169E1] px-4 md:px-0">
            Sub Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {SyahiMembers.slice(2).map((member) => renderMemberCard(member))}
          </div>
        </section>
        
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://www.facebook.com/syahi_iitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 text-black hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/syahi.iitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 text-black hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/c/SyahiLiteraryAssociationIITP"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100  text-black hover:bg-[#FF0000] hover:text-white transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
