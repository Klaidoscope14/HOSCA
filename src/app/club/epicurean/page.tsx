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

const EpicureanMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Devesh Yadav',
    position: 'Coordinator',
    imageUrl: '/Coordinators/Epicurean/Devesh_Yadav.jpg',
    email: "devesh_2401ec08@iitp.ac.in",
  },
  {
    id: 2,
    name: 'Shashank Mishra',
    position: 'Coordinator',
    imageUrl: '/Coordinators/Epicurean/Shashank_mishra.png',
    email: "shashank_2401ec36@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/shashank-mishra-72b495326?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 3,
    name: 'Aditi Yadav',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Epicurean/Aditi_Yadav.jpg',
    email: "aditi_2501mc30@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/aditi-yadav-ba8097381?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 4,
    name: 'Varnika Srivastava',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Epicurean/Varnika_Srivastava.jpg',
    email: "varnika_2501ce13@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/varnika-srivastava-055280372?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    id: 5,
    name: 'Aryan Dev',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Epicurean/Aryan_Dev.jpg',
    email: "aryan_2501cb26@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/aryan-dev-3a7617273?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 6,
    name: 'Yash Jhamb',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Epicurean/Yash_Jhamb.jpg',
    email: "2501es06@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/yash-jhamb-b01146380?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 7,
    name: 'Yashvardhan Shaktawat',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Epicurean/Yashvardhan_Shaktawat.jpg',
    email: "yashvardhan_2501es12@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/yashvardhan-shaktawat?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    id: 8,
    name: 'Emin Philip Saji',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Epicurean/Emin_Philip_Saji.jpg',
    email: "emin_2501cb04@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/emin-philip-saji-ab420a30b",
  },
];

export default function EpicureanPage() {
  const renderMemberCard = (member: ClubMember, index: number) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-[#E5AD01] text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white bg-white flex items-center justify-center">
              {member.imageUrl ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority={index < 3}
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
      <div className="absolute inset-0 bg-white/[0.6] " />
      <BackgroundBeams className="absolute inset-0 bg-[#421704]" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/ClubLogo/epicurean.png"
                alt="Epicurean"
                fill
                className="rounded-2xl shadow-2xl border border-white/[0.1] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#b5c902] mb-6">Epicurean</h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0">
              The art of articulation and this is where team bonding is celebrated.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="w-full">
            <div className="border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">About Epicurean</h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Where flavors ignite curiosity and passion simmers with every stir.
                Epicurean isn’t just about food—it’s a journey of taste, technique, and togetherness.
                From spontaneous dorm recipes to exquisite culinary experiments, we celebrate the joy of creating and sharing.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">What We Do</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Learning new recipes and techniques</li>
                  <li>Bonding over shared meals</li>
                  <li>Celebrating the Joy of Cooking</li>
                  <li>Hands-On Cooking workshops</li>
                  <li>Exploring Culinary and Beverage Arts</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">Our Events</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Culinary Competitions</li>
                  <li>Mixology Events</li>
                  <li>Weekly Cooking Sessions</li>
                  <li>What&apos;s in the pot?</li>
                  <li>Cooking and Beverage Workshops</li>
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
          <h2 className="text-4xl font-bold text-center mb-12 text-[#FFDB58]">Our Team</h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#4169E1] px-2 md:px-0">Coordinators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {EpicureanMembers.slice(0, 2).map((member, index) => renderMemberCard(member, index))}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#4169E1] px-4 md:px-0">Sub Coordinators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {EpicureanMembers.slice(2).map((member, index) => renderMemberCard(member, index + 2))}
          </div>
        </section>

        <div className="flex justify-center gap-6 mt-12">
         
          <a
            href="https://www.instagram.com/culinary_club_iitpatna/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 text-black hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}