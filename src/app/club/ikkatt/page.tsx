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

const IkkattMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Aditi Lohiya',
    position: 'Coordinator',
    imageUrl: '/Coordinators/Ikkatt/Aditi_Lohiya.jpg',
    email: "aditi_2401cb04@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/aditi-lohiya",
  },
  {
    id: 2,
    name: 'Prince',
    position: 'Coordinator',
    imageUrl: '/Coordinators/Ikkatt/Prince.jpg',
    email: "prince_2401ph24@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/prince-narayan-7618b6278?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 3,
    name: 'Anshika Sharma',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Ikkatt/Anshika_Sharma.jpg',
    email: "anshika_2501mm04@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/anshika-sharma-b183ab318?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 4,
    name: 'Eklavya Kumar',
    position: 'Sub-Coordinator',
    email: "eklavya_2502mt10@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/eklavya-kumar-33616441a",
  },
  {
    id: 5,
    name: 'Oshi Malviya',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Ikkatt/Oshi_Malviya.jpg',
    email: "oshi_2501cb20@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/oshi-malviya-47226a3a6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 6,
    name: 'Kartik Vijaywergiya',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Ikkatt/Kartik_Vijaywergiya.jpg',
    email: "kartik_2501ai31@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/kartikvijaywergiya22?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 7,
    name: 'Sai Subrat Jena',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Ikkatt/Sai_Subrat_Jena.jpg',
    email: "sai_2501cb38@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/sai-subrat-jena-7b160b419?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 8,
    name: 'Ragul Raagav',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Ikkatt/Ragul_Raagav.jpg',
    email: "s_2503ph02@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/ragul-raagav-s-782913369?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];

export default function AnimePage() {
  const renderMemberCard = (member: ClubMember) => (
    <div key={member.id} className="flex w-full max-w-[320px] justify-center sm:w-[320px]">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-[#F5D7A1] text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative mx-auto mb-4 flex h-36 w-36 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-red-500 bg-white">
            {member.imageUrl ? (
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={500} 
                height={500}
                className="h-full w-full object-cover"
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
              className="flex items-center justify-center text-center text-xl font-bold text-zinc-900"
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
    <div className="relative min-h-screen w-full bg-white/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <BackgroundBeams className="absolute inset-0 bg-[#e0789b]" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
                <Image
                  src="/ClubLogo/ikkatt.png"
                  alt="Designing Society"
                  width={384} 
                  height={384} 
                  className="rounded-2xl shadow-2xl border border-white/[0.1] object-cover"
                  priority 
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-400 mb-6"
              style={{ color: "#D4AF37" }}
            >
              Ikkatt
            </h1>
            <p className="text-lg md:text-xl text-black max-w-2xl mx-auto lg:mx-0">
              Style isn&apos;t just worn—it&apos;s designed. Ikkatt gives you the ramp and
              the sketchpad. From fashion shows to DIY workshops, this club
              turns creativity into couture.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="w-full">
            <div className="border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">
                About Ikkatt Club
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Style isn&apos;t just worn—it&apos;s designed. Ikkatt gives you the ramp
                and the sketchpad. From fashion shows to DIY workshops, this
                club turns creativity into couture. It celebrates
                self-expression through design, empowering students to wear
                their imagination with pride.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  What We Do
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Fashion and makeup workshops</li>
                  <li>Rampwalks</li>
                  <li>Upcycling and thrifting clothes</li>
                  <li>Online / offline photoshoot and modelling workshops</li>
                  <li>Performances at college fests</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  Our Events
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Mr and Ms Freshers</li>
                  <li>Reverb Fashion</li>
                  <li>Inter-College fashion events</li>
                  <li>StyleSpill</li>
                  <li>Verve</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <ImageGrid
              images={[
  "/ClubPages/Ikkatt/Ikkatt_5.jpg",
  "/ClubPages/Ikkatt/Ikkatt_6.jpg",
  "/ClubPages/Ikkatt/Ikkatt_7.jpg",
  "/ClubPages/Ikkatt/Ikkatt_8.jpg",
  "/ClubPages/Ikkatt/Ikkatt_9.jpg",
  "/ClubPages/Ikkatt/Ikkatt_10.jpg"
]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>

        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#4169E1]">
            Our Team
          </h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#191970] px-2 md:px-0">
            Coordinators
          </h2>
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-10">
            {IkkattMembers.slice(0, 2).map((member) => renderMemberCard(member))}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#191970] px-4 md:px-0">
            Sub Coordinators
          </h2>
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-10">
            {IkkattMembers.slice(2).map((member) => renderMemberCard(member))}
          </div>
        </section>
        
        <div className="flex justify-center gap-6 mt-12">
          
          <a
            href="https://www.instagram.com/ikkatt_iitp/"
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