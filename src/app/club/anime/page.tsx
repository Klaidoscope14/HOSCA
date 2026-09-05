"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { ImageGrid } from "@/components/ui/image-grid";
import Image from "next/image";

interface ClubMember {
  id: number;
  name: string;
  imageUrl?: string;
  email?: string;
  linkedinUrl?: string;
}

const AnimeMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Soyam Bais',
    imageUrl: '/Coordinators/Anime_Club/Soyam_Bais.jpg',
    email: "soyam_2401ec41@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/soyambais?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 2,
    name: 'Adil Khan',
    imageUrl: '/Coordinators/Anime_Club/Adil_Khan.jpg',
    email: "adil_2401ec02@iitp.ac.in",
    linkedinUrl: "https://linkedin.com/in/adil-khan-emu",
  },
  {
    id: 3,
    name: 'Satyam Sinha',
    imageUrl: '/Coordinators/Anime_Club/Satyam_Sinha.jpg',
    email: "satyam_2401ph21@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/satyam-sinha-733801325",
  },
  {
    id: 4,
    name: 'Ansh Sharma',
    imageUrl: '/SubCords/Anime_Club/Ansh_Sharma.png',
    email: "ansh_2501ai11@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/ansh-sharma-435851400/",
  },
  {
    id: 5,
    name: 'Sai Subrat Jena',
    imageUrl: '/SubCords/Anime_Club/Sai_Subrat_Jena.jpg',
    email: "sai_2501cb38@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/sai-subrat-jena-7b160b419?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 6,
    name: 'Angel Mahi Sharma',
    imageUrl: '/SubCords/Anime_Club/Angel_Mahi_Sharma.jpg',
    email: "angel_2501cs59@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/angel-mahi-sharma-2b7b0b411?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 7,
    name: 'Daksh Mittal',
    imageUrl: '/SubCords/Anime_Club/Daksh_Mittal.jpg',
    email: "daksh_2502cs05@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/daksh-mittal-227b87310/",
  },
  {
    id: 8,
    name: 'Bhanu Kiran',
    imageUrl: '/SubCords/Anime_Club/Bhanu_Kiran.jpg',
    email: "bhanu_2501ph31@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/bhanu-kiran-a4b000366?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 9,
    name: 'Chayan Sharma',
    imageUrl: '/SubCords/Anime_Club/Chayan_Sharma.jpg',
    email: "chayan_2502mt04@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/chayan-sharma-ab5081384/",
  },
];

export default function AnimePage() {
  const renderMemberCard = (member: ClubMember) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-white text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-red-500 bg-white flex items-center justify-center">
              {member.imageUrl ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
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
              className="flex items-center justify-center text-xl font-bold text-zinc-900 text-center"
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
    <div className="relative min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <BackgroundBeams className="absolute inset-0 bg-[#672222]" />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">   
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl shadow-2xl border border-white/[0.1]">
                  <Image
                    src="/ClubLogo/anime.png"
                    alt="Art Society"
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(min-width: 1024px) 24rem, 20rem"
                  />
                </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6"
              style={{ color: "#007C91" }}
            >
              Anime Club
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0">
              Whether you&apos;re a seasoned otaku or just getting started with your first series, Anime Club welcomes all with open arms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="w-full">
            <div className="bg-white border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8 text-zinc-900">
              <h2 className="mb-4 text-2xl font-bold text-zinc-900">
                About Anime Club
              </h2>
              <p className="text-zinc-700">
                Anime Club is a hub for everyone from veteran weebs to
                budding enthusiasts and provides a unique platform for people to
                get together, engage in active discussions and showcase their
                emotions and creativity about anything related to the animanga
                world.
              </p>
              <div className="mt-6">
                <h3 className="mb-3 text-xl font-semibold text-zinc-900">
                  What We Do
                </h3>
                <ul className="list-inside list-disc space-y-2 text-zinc-700">
                  <li>Regular watch sessions</li>
                  <li>Animeme showcase</li>
                  <li>Gaming Arcade and Merch stalls</li>
                  <li>Anime Arts</li>
                  <li>Anime themed Quizzes</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="mb-3 text-xl font-semibold text-zinc-900">
                  Our Events
                </h3>
                <ul className="list-inside list-disc space-y-2 text-zinc-700">
                  <li>Animecon</li>
                  <li>Hunter x Hunter</li>
                  <li>Dalgona candy challenge</li>
                  <li>Animake</li>
                  <li>Ramen Rangers</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <ImageGrid
              images={[
  "/ClubPages/Anime club/Anime_club_5.jpg",
  "/ClubPages/Anime club/Anime_club_6.jpg",
  "/ClubPages/Anime club/Anime_club_7.jpg",
  "/ClubPages/Anime club/Anime_club_8.jpg",
  "/ClubPages/Anime club/Anime_club_9.jpg",
  "/ClubPages/Anime club/Anime_club_10.jpg"
]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>

        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
            Our Team
          </h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#4169E1] px-2 md:px-0">
            Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {AnimeMembers.slice(0, 3).map((member) => renderMemberCard(member))}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#4169E1] px-4 md:px-0">
            Sub Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {AnimeMembers.slice(3).map((member) => renderMemberCard(member))}
          </div>
        </section>
        <div className="flex justify-center gap-6 mt-12">
        
          <a
            href="https://www.instagram.com/animeclub_iitp/"
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