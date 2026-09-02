"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaFacebook, FaInstagram } from "react-icons/fa";
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

const HootMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Ankit Basu',
    position: 'Coordinator',
    imageUrl: '/Coordinators/HOOT/Ankit_Basu.jpeg',
  },
  {
    id: 2,
    name: 'Shreyas Das',
    position: 'Coordinator',
    imageUrl: '/Coordinators/HOOT/Shreyas_Das.jpg',
  },
  {
    id: 3,
    name: 'Gaurav Choudhury',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/HOOT/Gaurav_Choudhury.jpg',
  },
  {
    id: 4,
    name: 'Chitra Sandilya',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/HOOT/Chitra_Sandilya.jpg',
  },
  {
    id: 5,
    name: 'Vaarunya Tomer',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/HOOT/Vaarunya_Tomer.jpg',
  },
  {
    id: 6,
    name: 'Aditi Yadav',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/HOOT/Aditi_Yadav.jpg',
  },
  {
    id: 7,
    name: 'Pratyaksha Prasad',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/HOOT/Pratyaksha_Prasad.jpg',
  },
  {
    id: 8,
    name: 'Kirti Chandra',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/HOOT/Kirti_Chandra.jpeg',
  },
];

export default function HootPage() {
  const renderMemberCard = (member: ClubMember) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-[#CCAC89] text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
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

          <div className="flex justify-center gap-3 mt-4">
            {/*
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
            */}
            {/*
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
            */}
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
    <div className="relative min-h-screen w-full bg-[url('/club/aria_background.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-[#f0fdf4]"></div>
      <BackgroundBeams className="absolute inset-0" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/ClubLogo/hoot.jpg"
                alt="Hoot Literature Society"
                width={384}
                height={384}
                className="object-cover rounded-2xl shadow-2xl border border-white/[0.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 mb-6">
              HOOT
            </h1>
            <p className="text-lg md:text-xl text-black max-w-2xl mx-auto lg:mx-0">
              The House of Oratory Talents - Where words come alive and ideas
              take flight.
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center text-center mb-16 mt-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">HOOT</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            The House of Oratory Talents - Where words come alive and ideas take flight.
          </p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
  {/* About Section */}
  <div className="w-full">
    <div className="border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8">
      <h2 className="text-2xl font-bold text-black mb-4">
        About HOOT
      </h2>
      <p className="text-black">
        The House of Oratory Talents is the speaking arts club of IIT
        Patna. HOOT is a vibrant space for exploring ideas, public speaking and expressing thoughts with clarity. Through debates,
        discussions and performance arts, it fosters confidence, critical thinking and creative expression.
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-black mb-3">
          What We Do
        </h3>
        <ul className="list-disc list-inside text-black space-y-2">
          <li>Debate competitions</li>
          <li>Improv Battles</li>
          <li>Just A Minute (JAM) sessions</li>
          <li>Public speaking workshops</li>
          <li>Group discussions</li>
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-black mb-3">
          Our Events
        </h3>
        <ul className="list-disc list-inside text-black space-y-2">
          <li>PD (Public Debate)</li>
          <li>MUN (Model United Nations)</li>
          <li>Just A Minute (JAM)</li>
          <li>Verbal Voyage</li>
          <li>Asian Parliamentary Debate</li>
        </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <ImageGrid
              images={[
  "/ClubPages/Hoot/Hoot_5.jpeg",
  "/ClubPages/Hoot/Hoot_6.jpeg",
  "/ClubPages/Hoot/Hoot_7.jpeg",
  "/ClubPages/Hoot/Hoot_8.jpeg",
  "/ClubPages/Hoot/Hoot_9.jpeg",
  "/ClubPages/Hoot/Hoot_10.jpeg"
]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>
        {/* Members Section */}

        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800">
            Our Team
          </h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#4169E1] px-2 md:px-0">
            Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {HootMembers.slice(0, 2).map((member) => renderMemberCard(member))}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#4169E1] px-4 md:px-0">
            Sub Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {HootMembers.slice(2).map((member) => renderMemberCard(member))}
          </div>
        </section>
        <div className="flex justify-center gap-6 mt-12">
  <a
    href="https://www.facebook.com/hootiitp/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-gray-100 text-black hover:bg-gray-300 transition-colors duration-300"
    aria-label="Facebook"
  >
    <FaFacebook className="w-6 h-6" />
  </a>
  <a
    href="https://www.instagram.com/hoot.iitp/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-gray-100 text-black hover:bg-gray-300 transition-colors duration-300"
    aria-label="Instagram"
  >
    <FaInstagram className="w-6 h-6" />
  </a>
</div>
      </div>
    </div>
  );
}
