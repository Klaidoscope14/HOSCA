'use client';

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {FaLinkedin,FaEnvelope} from "react-icons/fa";
import { ImageGrid } from "@/components/ui/image-grid";

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
    name: 'Devanshu Kumar',
    position: 'Coordinator',
    email: 'devanshu_2301ct22@iitp.ac.in',
    linkedinUrl: 'https://linkedin.com/in/devanshu-kumar-08139b298',
    imageUrl: '/Coordinators/Syahi/DevanshuKumar.jpeg',
  },
  {
    id: 2,
    name: 'Kaustuv Anand',
    position: 'Coordinator',
    email: 'kaustuv_2301ce44@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/kaustuv-anand-1981982a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/Coordinators/Syahi/Kaustuv.jpg',
  },
  {
    id: 3,
    name: 'Huzaim Zaoraiz',
    position: 'Sub-Coordinator',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/huzaim-zaoraiz-a03216335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Syahi/huzaimZaoraiz.JPG',
  },
  {
    id: 4,
    name: 'Choudhary Lucky',
    position: 'Sub-Coordinator',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/choudhary-lucky-139484330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Syahi/choudharyLucky.jpg',
  },
  {
    id: 5,
    name: 'Tanush Kumar',
    position: 'Sub-Coordinator',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/tanushkumar-yadav-9126812b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Syahi/tanush.jpg',
  },
  {
    id: 6,
    name: 'Shatadrumi Dey',
    position: 'Sub-Coordinator',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/shatadrumi-dey-07933031a/',
    imageUrl: '/SubCords/Syahi/shatadrumiDey.jpg',
  },
  {
    id: 7,
    name: 'Anshika Singh',
    position: 'Sub-Coordinator',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/anshika-singh-764830365',
    imageUrl: '/SubCords/Syahi/anshikaSingh.jpg',
  },
  {
    id: 8,
    name: 'Anand Kumar',
    position: 'Sub-Coordinator',
    email: 'Add Email',
    linkedinUrl: 'https://www.linkedin.com/in/anand-kumar-563523342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Syahi/anand.jpg',
  }
];

export default function SyahiPage() {
const renderMemberCard = (member: ClubMember) => (
  <div key={member.id} className="flex justify-center w-full">
    <CardContainer className="w-[320px] h-[320px]">
      <CardBody className="bg-blue-200 text-black border-white border relative group/card dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[280px] h-[320px] rounded-xl p-6 border flex flex-col justify-between">
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white bg-white flex items-center justify-center">
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

        <CardItem
          translateZ="50"
          className="text-xl font-bold text-blue-950 px-2 h-[3em] flex items-center justify-center -mt-20"
        >
          <div className="line-clamp-2 leading-tight text-center">
            {member.name}
          </div>
        </CardItem>

        <div className="flex justify-center gap-3 -mt-3">
          {member.email && (
            <CardItem
              translateZ={20}
              as="a"
              href={`mailto:${member.email}`}
              className="w-15 h-8 p-2 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-colors duration-300 flex items-center justify-center -mt-10"
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
              className="w-15 h-8 p-2 rounded-full bg-gray-100 hover:bg-[#0077B5] hover:text-white transition-colors duration-300 flex items-center justify-center -mt-10"
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
      <BackgroundBeams className="absolute inset-0" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/ClubLogo/syahi.jpg" 
                alt="Litracy Society" 
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border border-white/[0.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-300 mb-6">
              Syahi Club
            </h1>
            <p className="text-lg md:text-xl text-black max-w-2xl mx-auto lg:mx-0">
              express what one feels, introspect it and grow as a human in the process.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <CardContainer className="w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">About Syahi Club</h2>
              <p className="text-black-700 dark:text-neutral-300">
                  Syahi is the literary club of IIT Patna. Syahi aims to provide a platform to nurture the writing talents of people and help them to grown in their journies.It organizes various on-campus as well as inter-college Compitions for people to connect through their writing talents with a major audience.              
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-black-700 dark:text-white mb-3">What We Do</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>express what one feels, introspect it and grow as a human in the process.</li>
                  <li>Essay Writting (MUN)</li>
                  <li>Quest-ion</li>
                  <li>Pan India Quizzing fest PARAKH annually</li>
                  <li>Group discussions</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-black-700 dark:text-white mb-3">Our Events</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>PD (Public Debate)</li>
                  <li>MUN (Model United Nations)</li>
                  <li>JAM (Just A Minute)</li>
                  <li>Group Discussions</li>
                  <li>Speaking Workshops</li>
                </ul>
              </div>
            </CardBody>
          </CardContainer>

          <div className="mb-16">
            <ImageGrid 
              images={[
                "/ClubPages/Syahi/Syahi-1.JPG",
                "/ClubPages/Syahi/Syahi-2.JPG",
                "/ClubPages/Syahi/Syahi-3.JPG",
                "/ClubPages/Syahi/Syahi-4.JPG",
                "/ClubPages/Syahi/Syahi-5.jpg",
                "/ClubPages/Syahi/Syahi-6.jpg",
                "/ClubPages/Syahi/Syahi-7.jpg",
                "/ClubPages/Syahi/Syahi-8.jpg"
              ]} 
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>
        <section className="mb-16 mt-16">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#E6A14C" }}>Our Team</h2>


          <h2 className="text-3xl font-semibold text-center mb-6 text-orange-300 px-2 md:px-0" style={{ color: "#4169E1" }}>Coordinators</h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4 md:px-0 mb-6">
            {SyahiMembers.slice(0, 2).map((member) => (
              <div className="flex justify-center">{renderMemberCard(member)}</div>
            ))}
          </div>

          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-orange-300 px-4 md:px-0" style={{ color: "#4169E1" }}>Sub Coordinators</h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4 md:px-0 mb-6">
            {SyahiMembers.slice(2).map((member) => (
              <div className="flex justify-center">{renderMemberCard(member)}</div>
            ))}
          </div>
        </section>
        
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://www.facebook.com/syahi_iitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/syahi.iitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/c/SyahiLiteraryAssociationIITP"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#FF0000] hover:text-white transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
} 