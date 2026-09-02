"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { StarrySkyBackdrop } from "@/components/StarrySkyBackdrop";

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
    name: "Dr. Chandra Shekhar Prajapati",
    position: "PIC Cultural",
    imageUrl: "/HoscaaCore/CSP.jpeg",
    email: "pic_cultural@iitp.ac.in",
  },
  {
    id: 2,
    name: "Viraj Kulkarni",
    position: "General Secretary Cultural",
    imageUrl: "/HoscaaCore/Viraj.jpeg",
    email: "gensec_cult@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/viraj-kulkarni-097869312/",
  },
  {
    id: 3,
    name: "Ashwin Chowdary",
    position: "Junior Year Secretary",
    imageUrl: "/HoscaaCore/Ashwin_Chowdary.jpg",
    email: "singu_2401mm09@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/ashwin-chowdary-b5306034a/",
  },
  {
    id: 4,
    name: "Shivansh Srivashtava",
    position: "Sophomore Year Secretary",
    imageUrl: "/HoscaaCore/Shivansh.jpeg",
    email: "shivansh_2501ce20@iitp.ac.in",
    linkedinUrl: "https://www.linkedin.com/in/shivansh-srivastava-893a93368/",
  },
];

export default function GymkhanaCommitteePage() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 px-4 py-12 backdrop-blur-sm sm:px-6 lg:px-10">
      <StarrySkyBackdrop className="absolute inset-0" intensity="subtle" particleQuantity={42} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(148,163,184,0.12),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.10),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.38em] text-slate-400">
            HOSCA Committee
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Leadership
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
            The leadership team guiding cultural life at IIT Patna, presented in a
            cleaner profile-first layout that fits the site&apos;s starry visual language.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {committeeMembers.map((member) => (
            <article
              key={member.id}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-300/30 hover:shadow-[0_20px_70px_-30px_rgba(56,189,248,0.45)]"
            >
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-[2rem] border border-white/12 bg-slate-900/80 p-1">
                <div className="relative h-full w-full overflow-hidden rounded-[1.7rem]">
                  {member.imageUrl ? (
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-800 text-4xl text-slate-400">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="mt-2 text-sm italic tracking-wide text-sky-200/75">
                  {member.position}
                </p>
              </div>

              <div className="mt-5 flex justify-center gap-4">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300/35 hover:bg-sky-400/15 hover:text-white"
                    aria-label={`Email ${member.name}`}
                  >
                    <FaEnvelope className="h-4 w-4" />
                  </a>
                )}
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300/35 hover:bg-sky-400/15 hover:text-white"
                    aria-label={`LinkedIn ${member.name}`}
                  >
                    <FaLinkedin className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

