"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
interface CommitteeMember {
  id: number;
  name: string;
  position: string;
  imageUrl?: string;
  email?: string;
  linkedinUrl?: string;
}

const committeeMembers: CommitteeMember[] = [
  {
    id: 1,
    name: "Dr. Ayash Kanto Mukherjee",
    position: "PIC Cultural",
    email: "pic_cultural@iitp.ac.in",
    imageUrl: "/HoscaaCore/Ayash.jpg",
    linkedinUrl: "akm@iitp.ac.in",
  },
  {
    id: 2,
    name: "Kashika Aggarwal",
    position: "General Secretary Cultural",
    email: "kashika_2201cs35@iitp.ac.in",
    imageUrl: "/HoscaaCore/kashika.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/kashika-aggarwal-15b0bb259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 3,
    name: "Nikhil Pandey",
    position: "Junior Year Secretary",
    email: "nikhil_2301cb30@iitp.ac.in",
    imageUrl: "/HoscaaCore/Nikhil.jpeg",
    linkedinUrl:
      "https://www.linkedin.com/in/nikhil-pandey-319b05368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 4,
    name: "Singu Ashwin Manikanta Chowdary",
    position: "Sophomore Year Secretary",
    email: "singu_2401mm09@iitp.ac.in",
    imageUrl: "/HoscaaCore/ashwin.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/ashwin-chowdary-b5306034a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  }
];

export default function GymkhanaCommitteePage() {
  const gymkhanaAdvisor = committeeMembers.find(
    (member) => member.position === "PIC Cultural"
  );
  const generalSecretary = committeeMembers.find(
    (member) => member.position === "General Secretary Cultural"
  );
  const otherMembers = committeeMembers.filter(
    (member) =>
      member.position !== "PIC Cultural" &&
      member.position !== "General Secretary Cultural"
  );

  const renderMemberCard = (member: CommitteeMember) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-50">
        <CardBody className="bg-gray-50 relative group/card hover:shadow-[0_0_20px_5px_rgba(234,179,8,0.5)] dark:hover:shadow-[0_0_25px_7px_rgba(234,179,8,0.2)] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border transition-all duration-300">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-3 border-[#768686] ">
              {member.imageUrl ? (
                <Image
                  fill
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-4xl text-gray-400 dark:text-gray-500 flex items-center justify-center w-full h-full">
                    {member.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </CardItem>

          <div className="flex justify-center gap-5 mt-4">
            <CardItem
              translateZ="50"
              className="flex items-center justify-center text-2xl font-bold text-neutral-600 dark:text-white text-center"
            >
              {member.name}
            </CardItem>
          </div>

          <div className="flex justify-center gap-5 mt-4">
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300 text-center"
            >
              {member.position}
            </CardItem>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            {member.email && (
              <CardItem
                translateZ={20}
                as="a"
                href={`mailto:${member.email}`}
                className="p-2 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-colors duration-300"
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
                className="p-2 rounded-full bg-gray-100 hover:bg-[#0077B5] hover:text-white transition-colors duration-300"
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
      <BackgroundBeams className="absolute inset-0" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Gymkhana Committee
        </h1>

        <section className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-300">
            The Gymkhana Committee is responsible for managing and coordinating
            all student activities at IIT Patna. It works closely with HOSCA and
            other cultural clubs to organize various events and activities
            throughout the year.
          </p>
        </section>

        <section className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-10 text-center">
                Faculty Advisor
              </h3>
              {gymkhanaAdvisor && renderMemberCard(gymkhanaAdvisor)}
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-white mb-10 text-center">
                General Secretary
              </h3>
              {generalSecretary && renderMemberCard(generalSecretary)}
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-white text-center mt-12 mb-10">
            Secretaries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {otherMembers.map((member) => renderMemberCard(member))}
          </div>
        </section>

 <section className="mt-12 bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-white/[0.1]">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">
            Meet the Minds Behind the Magic of HOSCA
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 mb-4">
              From captivating performances to immersive workshops, every cultural endeavor at IIT Patna is driven by the enthusiasm and dedication of a dynamic student team.
Curious about the people steering these vibrant initiatives?</p>
<p className="text-gray-300 mb-4">

Get to know the Coordinators and Sub-Coordinators of HOSCA’s diverse clubs — the creative minds and leaders who infuse campus life with passion, innovation, and spirit.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 opacity-100 transform-none">

  <a
    href="/club"
    className="group relative px-8 py-2 my-1 rounded-full overflow-hidden bg-gradient-to-r from-red-600 to-red-800 text-white text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <span className="relative z-10 flex justify-center">Click Me</span>
  </a>

</div>

        </section>

         <section className="mt-12 bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-white/[0.1]">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">
            About Gymkhana
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 mb-4">
              The Gymkhana Committee at IIT Patna is the apex student body that
              oversees and coordinates all student activities, including
              cultural, technical, and sports events. It works in collaboration
              with various clubs and associations to ensure the holistic
              development of students.
            </p>
            <p className="text-gray-300">The committee is responsible for:</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
              <li>Organizing and managing student activities and events</li>
              <li>Coordinating between different clubs and associations</li>
              <li>Managing student welfare and development programs</li>
              <li>
                Facilitating communication between students and administration
              </li>
            </ul>
          </div>
        </section>

       
      </div>
    </div>
  );
}