'use client';

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

interface ClubMember {
  id: number;
  name: string;
  position: string;
  year: string;
  branch: string;
  imageUrl: string;
  email: string;
  linkedinUrl: string;
  instagramUrl: string;
}

const renderMemberCard = (member: ClubMember) => (
  <CardContainer key={member.id} className="w-full">
    <CardBody className="bg-white dark:bg-black relative border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 shadow-xl">
      <CardItem translateZ="100" className="w-full mt-4">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
            <img
              src={member.imageUrl || '/club/members/default.jpg'}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{member.position}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{member.year} Year</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{member.branch}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{member.email}</p>
          <div className="flex space-x-4 mt-4">
            <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={20} />
            </a>
            <a href={member.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </CardItem>
    </CardBody>
  </CardContainer>
);

const DramaticsMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Add Name',
    position: 'Coordinator',
    year: 'Add Year',
    branch: 'Add Branch',
    email: 'Add Email',
    linkedinUrl: '#',
    instagramUrl: '#',
    imageUrl: '',
  },
  {
    id: 2,
    name: 'Add Name',
    position: 'Coordinator',
    year: 'Add Year',
    branch: 'Add Branch',
    email: 'Add Email',
    linkedinUrl: '#',
    instagramUrl: '#',
    imageUrl: '',
  },
  {
    id: 3,
    name: 'Add Name',
    position: 'Sub-Coordinator',
    year: 'Add Year',
    branch: 'Add Branch',
    email: 'Add Email',
    linkedinUrl: '#',
    instagramUrl: '#',
    imageUrl: '',
  },
  {
    id: 4,
    name: 'Add Name',
    position: 'Sub-Coordinator',
    year: 'Add Year',
    branch: 'Add Branch',
    email: 'Add Email',
    linkedinUrl: '#',
    instagramUrl: '#',
    imageUrl: '',
  },
  {
    id: 5,
    name: 'Add Name',
    position: 'Sub-Coordinator',
    year: 'Add Year',
    branch: 'Add Branch',
    email: 'Add Email',
    linkedinUrl: '#',
    instagramUrl: '#',
    imageUrl: '',
  },
  {
    id: 6,
    name: 'Add Name',
    position: 'Sub-Coordinator',
    year: 'Add Year',
    branch: 'Add Branch',
    email: 'Add Email',
    linkedinUrl: '#',
    instagramUrl: '#',
    imageUrl: '',
  }
];

export default function DramaticsPage() {
  return (
    <div className="relative min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <BackgroundBeams className="absolute inset-0" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16 mt-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dramatics Club</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Where stories come alive on stage and emotions find their voice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <CardContainer className="w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">About Dramatics Club</h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                The Dramatics Club of IIT Patna is a vibrant platform for theatrical expression and performance arts. We bring together passionate actors, directors, and theater enthusiasts to create memorable performances that entertain and inspire.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">What We Do</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Stage plays and skits</li>
                  <li>Street plays</li>
                  <li>Acting workshops</li>
                  <li>Script writing</li>
                  <li>Theater competitions</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">Our Events</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Annual Theater Festival</li>
                  <li>Street Play Competitions</li>
                  <li>One-Act Play Competitions</li>
                  <li>Acting Workshops</li>
                  <li>Inter-College Theater Festivals</li>
                </ul>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                <img src="/club/dramatics.jpg" alt="Stage Play" className="rounded-lg w-full h-48 object-cover" />
                <img src="/club/dramatics.jpg" alt="Street Play" className="rounded-lg w-full h-48 object-cover" />
                <img src="/club/dramatics.jpg" alt="Workshop" className="rounded-lg w-full h-48 object-cover" />
                <img src="/club/dramatics.jpg" alt="Dramatics Team" className="rounded-lg w-full h-48 object-cover" />
              </div>
            </CardBody>
          </CardContainer>
        </div>

        <h2 className="text-3xl font-semibold text-left mb-6 text-orange-300 px-2 md:px-0" style={{ color: "#4169E1" }}>Coordinators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 md:px-0 justify-items-center">
          {DramaticsMembers.slice(0, 2).map((member) => renderMemberCard(member))}
        </div>

        <h2 className="text-3xl font-semibold text-left mt-12 mb-6 text-orange-300 px-4 md:px-0" style={{ color: "#4169E1" }}>Sub Coordinators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 md:px-0 justify-items-center">
          {DramaticsMembers.slice(2).map((member) => renderMemberCard(member))}
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://facebook.com/hosca.iitp"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/hosca_iitp"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com/user/CULTatIITP"
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