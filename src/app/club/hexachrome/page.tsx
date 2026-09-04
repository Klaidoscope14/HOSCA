"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";
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

const HexachromeMembers: ClubMember[] = [
  {
    id: 1,
    name: 'K. Anantha Akash',
    position: 'Coordinator',
    email: "kota_2401ph23@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/akash-kota-a3538a323?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 2,
    name: 'Lavanya Bhadani',
    position: 'Coordinator',
    imageUrl: '/Coordinators/HexaChrome/Lavanya_Bhadani.jpg',
    email: "lavanya_2401ai31@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/lavanya-bhadani-1834b1313/",
  },
  {
    id: 3,
    name: 'Vaibhav Dalmia',
    position: 'Coordinator',
    imageUrl: '/Coordinators/HexaChrome/Vaibhav_Dalmia.jpg',
    email: "vaibhav_2402cs06@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/vaibhav-dalmia-2b1b84325/",
  },
  {
    id: 4,
    name: 'Pachava Shalini',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/HexaChrome/Pachava_Shalini.jpg',
    email: "pachava_2501mm24@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/shalini-pachava-495ba0375",
  },
  {
    id: 5,
    name: 'Thanmayi Potanapalli',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/HexaChrome/Thanmayi_Potanapalli.jpg',
    email: "potanapalli_2503me08@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/thanmayi-potanapalli-b61005397?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 6,
    name: 'Shivani Parmar',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/HexaChrome/Shivani_Parmar.jpg',
    email: "shivani_2501CE50@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/shivani-parmar-809ba237a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 7,
    name: 'Patel Arya Prakashbhai',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/HexaChrome/Patel_arya_prakashbhai.jpg',
    email: "patel_2503me14@iitp.ac.in",
  },
  {
    id: 8,
    name: 'Aritro Ghosh',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/HexaChrome/ARITRO_GHOSH.jpg',
  },
  {
    id: 9,
    name: 'Guda Manaswini',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/HexaChrome/Guda_Manaswini.png',
    email: "guda_2501ct09@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/manaswini-reddy-guda-5b85a93b2?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];

export default function HexaChromePage() {
  const renderMemberCard = (member: ClubMember) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-[#ADDAEA] text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
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
    <div className="relative min-h-screen w-full bg-[url('/club/aria_background.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/60 "></div>
      <BackgroundBeams className="absolute inset-0 bg-[#050157]" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/ClubLogo/Hexachrome.jpg"
                alt="HexaChrome"
                width={384}
                height={384}
                className="object-cover rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-400 mb-6">
              HexaChrome
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0">
              Aims to provide a platform for students to learn and improve in
              solving puzzles such as Rubik&apos;s Cube, Cryptograms,
              Crosswords, Scrabble.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="w-full">
            <div className="border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8 ">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">
                About HexaChrome
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                The HexaChrome Club aims to provide a platform for students to
                learn and improve in solving puzzles such as Rubik&apos;s Cube,
                Cryptograms, Crosswords, Scrabble. It fosters a problem-solving
                mindset and builds a community of puzzle enthusiasts driven by
                logic, creativity, and speed.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  What We Do
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Sudo-Clash</li>
                  <li>Playing Games</li>
                  <li>Cryptogram learning workshops</li>
                  <li>Sudoku Solving sessions</li>
                  <li>Rubik&apos;s cube learning sessions</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  Our Events
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Escape Room</li>
                  <li>Sudoku Solving</li>
                  <li>Unscramble</li>
                  <li>Tambola Night</li>
                  <li>Cryptogram</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <ImageGrid
              images={[]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>

        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E90FF]">
            Our Team
          </h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#4169E1] px-2 md:px-0">
            Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {HexachromeMembers.slice(0, 3).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#4169E1] px-4 md:px-0">
            Sub Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {HexachromeMembers.slice(3).map((member) =>
              renderMemberCard(member)
            )}
          </div>

        </section>
        <div className="flex justify-center gap-6 mt-12">
          
          <a
            href="https://www.instagram.com/hexachrome_iitp/"
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