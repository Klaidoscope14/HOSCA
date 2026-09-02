export const dynamic = 'force-static';

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { ImageGrid } from "@/components/ui/image-grid";
import Image from "next/image";
import React, { Suspense } from "react";

interface ClubMember {
  id: number;
  name: string;
  position: string;
  imageUrl?: string;
  email?: string;
  linkedinUrl?: string;
}

const QuizMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Joven Sony',
    position: 'Coordinator',
    imageUrl: '/Coordinators/Quiz_Club/Joven_Sony.jpg',
    email: "joven_2401cb41@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/joven-sony",
  },
  {
    id: 2,
    name: 'Sarthak Poddar',
    position: 'Coordinator',
    imageUrl: '/Coordinators/Quiz_Club/Sarthak_Poddar.jpg',
    email: "sarthak_2401cs25@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/sarthak-poddar-66038b305/",
  },
  {
    id: 3,
    name: 'Heet',
    position: 'Coordinator',
  },
  {
    id: 4,
    name: 'Divya Thakur',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Quiz_Club/Divya_Thakur.jpg',
    email: "divya_2501mc28@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/divya-thakur-aa7b9a367",
  },
  {
    id: 5,
    name: 'Pranay Bansal',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Quiz_Club/Pranay_Bansal.jpg',
    email: "pranay_2501cs46@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/pranay-bansal-086278367?",
  },
  {
    id: 6,
    name: 'Ansh Sharma',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Quiz_Club/Ansh_Sharma.png',
    email: "ansh_2501ai11@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/ansh-sharma-435851400/",
  },
  {
    id: 7,
    name: 'Mahi Garg',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Quiz_Club/Mahi_Garg.jpg',
    email: "mahi_2501ee06@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/mahi-garg-976511379",
  },
  {
    id: 8,
    name: 'Poojan Dave',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Quiz_Club/Poojan_Dave.jpeg',
    email: "poojan_2503ee02@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/poojan-dave-53456540b",
  },
  {
    id: 9,
    name: 'Bhaskar Gangopadhyay',
    position: 'Sub-Coordinator',
    imageUrl: '/SubCords/Quiz_Club/Bhaskar_Gangopadhyay.jpg',
    email: "bhaskar_2501mm40@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/bhaskar-gangopadhyay-b70a75428?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];

export default function QuizPage() {
  const renderMemberCard = (member: ClubMember) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-[#E6A14C] text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
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
      <div className="absolute inset-0 bg-white/[0.6]"></div>
      <BackgroundBeams className="absolute inset-0 bg-[#8a4242]" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/ClubLogo/quiz.jpg"
                alt="Knowledge Society"
                fill
                className="object-cover rounded-2xl shadow-2xl border border-white/[0.1]"
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-600 mb-6">
              Quiz Club
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0">
              One doesn&apos;t need to mug up random nerdy facts to attend quizzes,
              all one needs is a keen eye for the things that surround us
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="w-full ">
            <div className="border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">
                About Quiz Club
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                The Quiz Club, IIT Patna believes that the most important thing
                is having fun (and ofc quizzing xd). One doesn&apos;t need to mug up
                random nerdy facts to attend quizzes, all one needs is a keen
                eye for the things that surround us. The club turns everyday
                knowledge into thrilling quiz battles and brainy banter.{" "}
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  What We Do
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Debunk myths about quizzing</li>
                  <li>Regular weekly sets</li>
                  <li>Traditional and Buzzer Quizzes</li>
                  <li>General Quizzes with topics of India and Sports </li>
                  <li>Quizzes on diverse topics including MELA, TLC, and SBT</li>
                 
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  Our Events
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Parakh</li>
                  <li>QC101</li>
                  <li>Celest-ion</li>
                  <li>Knockout</li>
                  <li>Reverb Quizzes(TLC and Bihtawood)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <ImageGrid
              images={[
  "/ClubPages/QC/QC_6.jpg",
  "/ClubPages/QC/QC_7.jpg",
  "/ClubPages/QC/QC_8.jpg",
  "/ClubPages/QC/QC_9.jpg",
  "/ClubPages/QC/QC_10.jpg"
]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>

        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#E6A14C]">
            Our Team
          </h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-yellow-400 px-2 md:px-0">
            Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {QuizMembers.slice(0, 3).map((member) => renderMemberCard(member))}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-yellow-400 px-4 md:px-0">
            Sub Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {QuizMembers.slice(3).map((member) => (
              <Suspense key={member.id} fallback={<div>Loading...</div>}>
                {renderMemberCard(member)}
              </Suspense>
            ))}
          </div>
        </section>
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://www.facebook.com/QCIITP/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 text-black hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/qc_iitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 text-black hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/c/QuizClubIITPatna"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 text-black hover:bg-[#FF0000] hover:text-white transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}