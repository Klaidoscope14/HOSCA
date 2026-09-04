"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaFacebook, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";
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

const VincetrokeMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Riddhesh Dalal',
    position: 'Coordinator',
    imageUrl: '/Coordinators/VinceTroke/Riddhesh_Dalal.jpg',
    email: "riddhesh_2401ct18@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/riddhesh-dalal",
  },
  {
    id: 2,
    name: 'Richa Chaudhary',
    position: 'Coordinator',
    imageUrl: '/Coordinators/VinceTroke/Richa_Chaudhary.jpg',
    email: "richa_2401ce22@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/richa-chaudhary-9a2877349?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 3,
    name: 'Anand Kumar',
    position: 'Coordinator',
    imageUrl: '/Coordinators/VinceTroke/Anand_Kumar.jpg',
    email: "anand_2401mm29@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/anand-kumar-563523342?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 4,
    name: 'Rashi Ranjan',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Vincetroke/Rashi_Rajan.jpg',
    email: "rashi_2502pc03@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/rashi-ranjan-049501362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 5,
    name: 'Samarth Kushe',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Vincetroke/Samarth_Kushe.jpg',
    email: "kushe_2501ee17@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/samarth-kushe-a51054354/",
  },
  {
    id: 6,
    name: 'Aahan Nayak',
    position: 'Sub-Coordinator',
  },
  {
    id: 7,
    name: 'Soni Pal',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Vincetroke/Soni_Pal.jpg',
    email: "pal_2501mm31@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/soni-pal-854300420?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 8,
    name: 'Chetla Pawan Kumar',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Vincetroke/Chetla_Pawan_Kumar.jpg',
    email: "chetla_2501ce21@iitp.ac.in",
  },
  {
    id: 9,
    name: 'Lohitha Kotra',
    position: 'Sub-Coordinator',
    email: "kotra_2052cm06@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/lohitha-kotra-2ba566407?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];

export default function VincetrokePage() {
  const renderMemberCard = (member: ClubMember) => (
    <div key={member.id} className="flex w-full max-w-[320px] justify-center sm:w-[320px]">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-[#D2B48C] text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative mx-auto mb-4 flex h-36 w-36 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white">
              {member.imageUrl ? (
                <Image
                  fill
                  src={member.imageUrl}
                  alt={member.name}
                  sizes="144px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-white">
                  <span className="px-2 text-center text-3xl font-bold text-orange-500">
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
    <div className="relative min-h-screen w-full bg-[url('/club/aria_background.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/[0.6]"></div>
      <BackgroundBeams className="absolute inset-0 bg-[#242003]" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/ClubLogo/Vincetroke.jpg"
                alt="Art Society"
                
                width={384}
                height={384}
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border border-white/[0.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content Section - Right on desktop, bottom on mobile */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-400 mb-6"
              style={{ color: "#007C91" }}
            >
              Vincetroke
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0">
              Letting imagination run wild and giving members the sight to
              see things in a different way.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* About Section */}
          <div className="w-full">
            <div className="border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8 ">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">
                About Vincetroke
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Vincetroke is the fine arts club of IIT Patna. Vincetroke
                encourages practicing artists to express themselves, and their
                inner creativity through various visual art forms. The club
                provides an opportunity for the students to let their
                imagination run wild and provides the sight to see things in a
                different way.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  What We Do
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Charcoal Art</li>
                  <li>Live sketching</li>
                  <li>Wall and Canva paintings</li>
                  <li>Art and Origami sessions</li>
                  <li>Costume Design via Origami</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  Our Events
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Darpan</li>
                  <li>Chakra Bhav</li>
                  <li>Rang Tarang</li>
                  <li>Monochrome Painting</li>
                  <li>DrawVerse</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <ImageGrid
              images={[
  "/ClubPages/Vincetroke /Vincetroke_5.jpg",
  "/ClubPages/Vincetroke /Vincetroke_6.jpg",
  "/ClubPages/Vincetroke /Vincetroke_7.jpg",
  "/ClubPages/Vincetroke /Vincetroke_8.jpg",
  "/ClubPages/Vincetroke /Vincetroke_9.jpg"
]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>
        {/* Members Section */}

        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#207C9A]">
            Our Team
          </h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#4169E1] px-2 md:px-0">
            Coordinators
          </h2>
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-10">
            {VincetrokeMembers.slice(0, 3).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#4169E1] px-4 md:px-0">
            Sub Coordinators
          </h2>
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-10">
            {VincetrokeMembers.slice(3).map((member) =>
              renderMemberCard(member)
            )}
          </div>
        </section>

        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://www.facebook.com/vincetroke.iitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full text-black bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/vincetroke.iitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full text-black bg-gray-100 hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
         
        </div>
      </div>
    </div>
  );
}
