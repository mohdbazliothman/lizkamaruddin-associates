"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  imageAlt: string;
  bio: string;
  expertise: string[];
  imagePosition?: string;
  featured?: boolean;
};

const teamMembers: TeamMember[] = [
  {
    id: "liz",
    name: "Liz Kamaruddin",
    role: "Founder and Principal",
    company: "Liz Kamaruddin & Associates",
    image: "/images/team/liz-kamaruddin.png",
    imageAlt: "Liz Kamaruddin executive portrait",
    bio:
      "Liz Kamaruddin is a leading Malaysian communications strategist with more than 30 years of experience across ASEAN, the Middle East, and the Americas. Her career spans the energy, banking, aviation, transportation, telecommunications, and hospitality sectors.\n\nShe advises organisations and senior leaders on reputation management, crisis communications, corporate and government stakeholder engagement, sustainability, branding, media relations, and internal communications. Known for her strategic insight and deep understanding of the geopolitical landscape, Liz has built a strong track record of developing high-impact reputation campaigns and helping organisations navigate complex business challenges, transformation, and crisis.\n\nWidely regarded as a turnaround communications specialist, Liz combines global experience with a pragmatic, outcomes-focused approach to protecting reputation, strengthening stakeholder trust, and advancing organisational priorities.\n\nBeyond advisory work, Liz is deeply passionate about education and professional development. She is committed to developing the next generation of communications professionals and equipping senior leaders with the skills to communicate with clarity, confidence, and credibility. Through teaching, coaching, and executive training, she translates decades of industry experience into practical insights that strengthen leadership and communications capabilities.",
    expertise: ["Reputation Management", "Crisis Communications", "Stakeholder Engagement", "Leadership Coaching"],
    imagePosition: "center top",
    featured: true
  },
  {
    id: "raja-emylia",
    name: "Raja Emylia",
    role: "Partner",
    company: "Liz Kamaruddin & Associates",
    image: "/images/team/raja-emylia.png",
    imageAlt: "Raja Emylia executive portrait",
    bio: "Biography to be provided.",
    expertise: ["Strategic Communications", "Leadership Advisory", "Stakeholder Engagement"],
    imagePosition: "center top",
    featured: true
  },
  {
    id: "reed",
    name: "Reed Samsudin",
    role: "Crisis and Comms Expert",
    company: "Liz Kamaruddin & Associates",
    image: "/images/team/reed-samsudin.png",
    imageAlt: "Reed Samsudin executive portrait",
    bio: "Biography to be provided.",
    expertise: ["Crisis Readiness", "Media Training", "Communications Advisory"],
    imagePosition: "center top"
  },
  {
    id: "bazli",
    name: "Bazli",
    role: "AI, Social Media and Comms Expert",
    company: "Liz Kamaruddin & Associates",
    image: "/images/team/bazli.png",
    imageAlt: "Bazli executive portrait",
    bio: "Biography to be provided.",
    expertise: ["AI for Communications", "Social Media Strategy", "Digital Communications"],
    imagePosition: "center top"
  },
  {
    id: "zul-baba",
    name: "Zul Baba",
    role: "CSR and Comms Expert",
    company: "Liz Kamaruddin & Associates",
    image: "/images/team/zul-baba.png",
    imageAlt: "Zul Baba executive portrait",
    bio: "Biography to be provided.",
    expertise: ["CSR Communications", "Corporate Communications", "Stakeholder Engagement"],
    imagePosition: "center top"
  },
  {
    id: "ilya-harith",
    name: "Ilya Harith",
    role: "Strategy and Comms Expert",
    company: "Liz Kamaruddin & Associates",
    image: "/images/team/ilya-harith.png",
    imageAlt: "Ilya Harith executive portrait",
    bio: "Biography to be provided.",
    expertise: ["Communications Strategy", "Message Development", "Stakeholder Communications"],
    imagePosition: "center top"
  },
  {
    id: "amani",
    name: "Amani",
    role: "Junior Associate",
    company: "Liz Kamaruddin & Associates",
    image: "/images/team/amani.png",
    imageAlt: "Amani executive portrait",
    bio: "Biography to be provided.",
    expertise: ["Research Support", "Programme Support", "Communications Coordination"],
    imagePosition: "center top"
  }
];

export function TeamReveal() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const selectedMember = teamMembers.find((member) => member.id === selectedId);

  const closeProfile = useCallback(() => {
    const previousId = selectedId;
    setSelectedId(null);
    window.setTimeout(() => {
      if (previousId) triggerRefs.current[previousId]?.focus();
    }, 120);
  }, [selectedId]);

  useEffect(() => {
    if (!selectedId) return;

    const timeout = window.setTimeout(() => closeButtonRef.current?.focus(), 120);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProfile();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeProfile, selectedId]);

  return (
    <div className="relative">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => {
          const isSelected = member.id === selectedId;
          const isDimmed = Boolean(selectedId && !isSelected);

          return (
            <button
              key={member.id}
              ref={(node) => {
                triggerRefs.current[member.id] = node;
              }}
              type="button"
              aria-expanded={isSelected}
              aria-controls="expert-profile-panel"
              onClick={() => setSelectedId(member.id)}
              className={[
                "group text-left outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-4 focus-visible:ring-offset-ivory",
                member.featured ? "lg:col-span-2" : "",
                isDimmed ? "opacity-25 grayscale" : "opacity-100"
              ].join(" ")}
            >
              <div className="overflow-hidden border border-line bg-white p-2 shadow-[0_18px_40px_rgba(17,24,39,0.05)] transition duration-300 group-hover:border-gold/60">
                <img
                  src={member.image}
                  alt={member.imageAlt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  style={{ objectPosition: member.imagePosition ?? "center top" }}
                />
              </div>
              <div className="mt-4 border-l border-gold/50 pl-4 transition duration-300 group-hover:border-emerald">
                <p className="font-display text-2xl text-ink">{member.name}</p>
                <p className="mt-1 text-sm font-semibold leading-5 text-navy/[0.68]">{member.role}</p>
              </div>
            </button>
          );
        })}
      </div>

      {selectedMember ? (
        <div
          id="expert-profile-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="expert-profile-name"
          className="fixed inset-x-3 bottom-3 top-20 z-40 animate-[fadeUp_0.36s_ease-out] overflow-y-auto border border-line bg-ivory p-4 shadow-[0_24px_80px_rgba(10,21,32,0.22)] sm:inset-x-8 md:absolute md:inset-x-0 md:bottom-auto md:top-8 md:overflow-visible md:p-6 lg:p-8"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(201,162,91,0.12),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(24,76,69,0.10),transparent_30%)]" />
          <div className="flex justify-end">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeProfile}
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line bg-white text-ink transition hover:border-gold hover:text-emerald focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-2"
              aria-label="Close profile"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-4 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="overflow-hidden border border-line bg-white p-3 shadow-soft">
              <img
                src={selectedMember.image}
                alt={selectedMember.imageAlt}
                className="aspect-[4/5] w-full object-cover"
                style={{ objectPosition: selectedMember.imagePosition ?? "center top" }}
              />
            </div>

            <div className="pb-4">
              <p className="animate-[fadeUp_0.34s_ease-out_0.08s_both] text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                {selectedMember.company}
              </p>
              <h3
                id="expert-profile-name"
                className="mt-3 animate-[fadeUp_0.34s_ease-out_0.14s_both] font-display text-5xl leading-[0.95] text-ink sm:text-6xl"
              >
                {selectedMember.name}
              </h3>
              <p className="mt-4 animate-[fadeUp_0.34s_ease-out_0.2s_both] text-base font-semibold text-emerald">
                {selectedMember.role}
              </p>
              <div className="mt-6 grid animate-[fadeUp_0.34s_ease-out_0.26s_both] gap-4 text-base leading-7 text-navy/[0.72]">
                {selectedMember.bio.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 animate-[fadeUp_0.34s_ease-out_0.32s_both]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Areas of Expertise</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedMember.expertise.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 border border-line bg-white px-3 py-2 text-xs font-semibold text-navy/75"
                    >
                      <Check className="h-3.5 w-3.5 text-emerald" aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={closeProfile}
                className="group mt-8 inline-flex animate-[fadeUp_0.34s_ease-out_0.38s_both] items-center gap-2 text-sm font-semibold text-emerald outline-none transition hover:text-gold focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-4"
              >
                Back to Team
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
