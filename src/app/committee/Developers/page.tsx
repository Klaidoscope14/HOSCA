"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

interface Developer {
  id: number;
  name: string;
  department: string;
  imageUrl?: string;
  email?: string;
  linkedinUrl?: string;
}

const mainDevelopers: Developer[] = [
  {
    id: 1,
    name: 'Developer 1',
    department: 'Computer Science',
    email: 'dev1@example.com',
    imageUrl: '/committee/gymkhana-advisor.jpg', 
    linkedinUrl: 'https://linkedin.com/in/dev1', 
  },
  {
    id: 2,
    name: 'Developer 2',
    department: 'Computer Science',
    email: 'dev2@example.com',
    imageUrl: '/committee/cultural-secretary.jpg', 
    linkedinUrl: 'https://linkedin.com/in/dev2', 
  },
  {
    id: 3,
    name: 'Developer 3',
    department: 'Computer Science',
    email: 'dev3@example.com',
    imageUrl: '/committee/technical-secretary.jpg', 
    linkedinUrl: 'https://linkedin.com/in/dev3', 
  },
  {
    id: 4,
    name: 'Developer 4',
    department: 'Design',
    email: 'dev4@example.com',
    imageUrl: '/committee/sports-secretary.jpg',
    linkedinUrl: 'https://linkedin.com/in/dev4',
  },
  {
    id: 5,
    name: 'Developer 5',
    department: 'Computer Science',
    email: 'dev5@example.com',
    imageUrl: '/committee/literary-secretary.jpg',
    linkedinUrl: 'https://linkedin.com/in/dev5',
  },
  {
    id: 6,
    name: 'Developer 6',
    department: 'Computer Science',
    email: 'dev6@example.com',
    imageUrl: '/committee/social-secretary.jpg',
    linkedinUrl: 'https://linkedin.com/in/dev6',
  },
  {
    id: 7,
    name: 'Developer 7',
    department: 'Computer Science',
    email: 'dev7@example.com',
    imageUrl: '/committee/academic-secretary.jpg',
    linkedinUrl: 'https://linkedin.com/in/dev7',
  },
  {
    id: 8,
    name: 'Developer 8',
    department: 'Computer Science',
    email: 'dev8@example.com',
    imageUrl: '/committee/gymkhana-advisor.jpg',
    linkedinUrl: 'https://linkedin.com/in/dev8',
  },
  {
    id: 9,
    name: 'Developer 9',
    department: 'Computer Science',
    email: 'dev9@example.com',
    imageUrl: '/committee/cultural-secretary.jpg',
    linkedinUrl: 'https://linkedin.com/in/dev9',
  }
];

const contributors: Developer[] = [
  {
    id: 10,
    name: 'Contributor 1',
    department: 'English',
    email: 'cont1@example.com',
    imageUrl: '/committee/technical-secretary.jpg',
    linkedinUrl: 'https://linkedin.com/in/cont1',
  },
  {
    id: 11,
    name: 'Contributor 2',
    department: 'Design',
    email: 'cont2@example.com',
    imageUrl: '/committee/sports-secretary.jpg',
    linkedinUrl: 'https://linkedin.com/in/cont2',
  },
  {
    id: 12,
    name: 'Contributor 3',
    department: 'Computer Science',
    email: 'cont3@example.com',
    imageUrl: '/committee/literary-secretary.jpg',
    linkedinUrl: 'https://linkedin.com/in/cont3',
  },
  {
    id: 13,
    name: 'Contributor 4',
    department: 'Computer Science',
    email: 'cont4@example.com',
    imageUrl: '/committee/social-secretary.jpg',
    linkedinUrl: 'https://linkedin.com/in/cont4',
  }
];

export default function DevelopersPage() {
  const renderMemberCard = (member: Developer) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-50">
        <CardBody className="bg-gray-50 relative group/card hover:shadow-[0_0_20px_5px_rgba(234,179,8,0.5)] dark:hover:shadow-[0_0_25px_7px_rgba(234,179,8,0.2)] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border transition-all duration-300">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-3 border-[#768686] ">
              
              {member.imageUrl ? (
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-4xl text-gray-400 dark:text-gray-500">
                    {member.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </CardItem>

          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white text-center"
          >
            {member.name}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
          >
            {member.department}
          </CardItem>

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
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Web Developers</h1>
      
        <section className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-300">
            The following individuals have contributed to the development of this website:
          </p>
        </section>
        
        {/* Main Developers Section - 3x3 Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-white mb-8">Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainDevelopers.map(developer => (
              <div key={developer.id}>
                {renderMemberCard(developer)}
              </div>
            ))}
          </div>
        </section>
        
        {/* Contributors Section - 2x2 Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-white mb-8">Sub Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contributors.map(contributor => (
              <div key={contributor.id}>
                {renderMemberCard(contributor)}
              </div>
            ))}
          </div>
        </section>
{/* 
        <section className="mt-12 bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-white/[0.1]">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">About The Project</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 mb-4">
              This website was developed to showcase HOSCA activities and events at IIT Patna. 
              The development team worked collaboratively to create a modern, responsive, and 
              user-friendly platform for students and faculty.
            </p>
            <p className="text-gray-300">
              Technologies used in this project:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
              <li>Next.js for the frontend framework</li>
              <li>Tailwind CSS for styling</li>
              <li>TypeScript for type-safe code</li>
              <li>React for interactive UI components</li>
            </ul>
          </div>
        </section> */}
      </div>
    </div>
  );
}