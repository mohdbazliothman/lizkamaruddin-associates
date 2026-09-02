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
  recognition?: string[];
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
    recognition: [
      "Adjunct Professor at Multimedia University Malaysia's Faculty of Applied Communication since 2022",
      "Industry adviser and architect of MMU's Bachelor of Communication (Strategic Communication) programme from 2016 to 2024",
      "Member of the Board of Studies for MMU's Master of Communication programme since 2024",
      "Namesake of MMU's Permata Liz Kamaruddin Communications Excellence Award, presented to outstanding students since 2019",
      "Named among PRWeek Asia's 50 Most Influential People in PR in 2014",
      "Recognised as Internationalist of the Year by The Internationalist, New York, in 2014",
      "Listed in the global PRWeek Power Book in 2014 and 2015",
      "Keynote speaker at leading communications conferences in Malaysia, Singapore, the United Kingdom, Abu Dhabi, and Dubai"
    ],
    expertise: [
      "Reputation Management",
      "Crisis Communications",
      "Leadership Communications",
      "Stakeholder Engagement",
      "Transformation",
      "Executive Coaching"
    ],
    imagePosition: "center top",
    featured: true
  },
  {
    id: "raja-emylia",
    name: "Raja Emylia",
    role: "Associate",
    company: "Liz Kamaruddin & Associates",
    image: "/images/team/raja-emylia.png",
    imageAlt: "Raja Emylia executive portrait",
    bio:
      "Raja Emylia is a communications practitioner with over 25 years of experience. She began her career as a news journalist before transitioning into corporate communications across diverse industries, including infrastructure, services, property and banking.\n\nHer areas of expertise include reputation and crisis management, strategic communications and branding.\n\nShe has developed a strong understanding of the media and corporate landscape, and is passionate about building strong brands and shaping meaningful narratives that connect with the right audience.",
    expertise: ["Reputation and Crisis Management", "Strategic Communications", "Branding"],
    imagePosition: "center top",
    featured: true
  },
  {
    id: "reed",
    name: "Reed Samsudin",
    role: "Crisis & Communications Specialist",
    company: "Liz Kamaruddin & Associates",
    image: "/images/team/reed-samsudin.png",
    imageAlt: "Reed Samsudin executive portrait",
    bio:
      "Reed Samsudin is a senior communications professional with more than 20 years of experience spanning corporate communications, journalism, media training, reputation management, and crisis communications.\n\nHe specialises in communications advisory, executive media preparedness, crisis and reputation management, helping organisations and senior leaders communicate effectively in complex and high-stakes environments.\n\nThroughout his career, Reed has prepared and supported senior leadership teams at major organisations including TM, FGV, TNB, Hess, Prasarana and EPF in media handling, executive communications and reputation management.\n\nHis sector experience spans financial services, energy and FMCG, with professional exposure across ASEAN, the Middle East, North America and Africa.\n\nEarlier in his career, Reed held a senior role at a Washington-based business consultancy and worked as a business journalist and producer with Bloomberg, The Edge Weekly and ASTRO. He subsequently moved into senior corporate communications roles, including positions with Standard Chartered and PETRONAS.\n\nThis combination of newsroom experience, corporate leadership exposure and advisory work gives Reed a strong understanding of how organisations, leaders and the media operate during periods of heightened scrutiny, change and crisis.",
    expertise: [
      "Crisis Communications",
      "Reputation Management",
      "Media Training",
      "Executive Communications",
      "Issues Management",
      "Media Relations",
      "Communications Advisory"
    ],
    imagePosition: "center top"
  },
  {
    id: "bazli",
    name: "Mohd Bazli Othman",
    role: "AI, Social Media and Comms Expert",
    company: "Liz Kamaruddin & Associates",
    image: "/images/team/bazli.png",
    imageAlt: "Mohd Bazli Othman executive portrait",
    bio:
      "Mohd Bazli is a strategic communications and digital specialist with 15 years of experience spanning Fortune 500 corporations, consulting and entrepreneurship. Trained in software engineering, he brings a distinctive combination of technology, communications and data-driven thinking to complex business and reputational challenges.\n\nHis areas of expertise include strategic communications, digital and social media strategy, analytics, reputation management and stakeholder engagement. He has advised and supported corporate leaders, business owners and political strategists in strengthening reputation, shaping narratives and making more informed decisions in increasingly complex information environments.\n\nWith a strong interest in data, emerging technology and artificial intelligence, Bazli explores how technology and analytics can be translated into practical strategic advantage, particularly in understanding audiences, identifying emerging risks and improving communication effectiveness.\n\nHis experience spans both corporate and entrepreneurial environments, giving him an appreciation of strategy from multiple perspectives, from managing reputation within large organisations to helping businesses navigate growth, transformation and changing stakeholder expectations.\n\nAt the intersection of strategy, communications, data and technology, his work is guided by a simple principle: turn information into insight, insight into strategy, and strategy into measurable impact.",
    expertise: [
      "Strategic Communications",
      "Digital and Social Media Strategy",
      "Analytics",
      "Reputation Management",
      "Stakeholder Engagement",
      "AI for Communications"
    ],
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
    name: "Nur Amani Abd Hadi",
    role: "Junior Associate",
    company: "Liz Kamaruddin & Associates",
    image: "/images/team/amani.png",
    imageAlt: "Nur Amani Abd Hadi executive portrait",
    bio:
      "Nur Amani Abd Hadi is a communications and research professional with experience in strategic communications, media intelligence, email marketing, stakeholder engagement, and corporate communications. She specialises in transforming complex information and emerging issues into clear, actionable insights that support strategic decision-making and stakeholder engagement.\n\nHer expertise includes media monitoring, sentiment analysis, issue tracking, content development, and strategic reporting. She has supported communication initiatives by delivering data-driven analyses, monitoring public discourse, and producing reports and presentations that help organisations navigate reputational, policy, and business challenges.\n\nWith a strong foundation in research and communications, Amani brings an analytical and detail-oriented approach to understanding stakeholder sentiment, identifying emerging trends, and developing effective communication strategies.",
    expertise: [
      "Media Intelligence",
      "Sentiment Analysis",
      "Issue Tracking",
      "Content Development",
      "Strategic Reporting",
      "Stakeholder Engagement"
    ],
    imagePosition: "center top"
  }
];

export function TeamReveal() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const selectedMember = teamMembers.find((member) => member.id === selectedId);
  const bioParagraphs = selectedMember?.bio.split("\n\n") ?? [];
  const introStatement = bioParagraphs[0];
  const biographyParagraphs = bioParagraphs.slice(1);
  const selectedProfileTitle =
    selectedMember?.id === "liz"
      ? "Founder and Principal, Liz Kamaruddin & Associates"
      : selectedMember?.role;

  const closeProfile = useCallback(() => {
    const previousId = selectedId;
    setSelectedId(null);
    window.setTimeout(() => {
      if (previousId) triggerRefs.current[previousId]?.focus();
    }, 120);
  }, [selectedId]);

  useEffect(() => {
    if (!selectedId) return;

    const originalBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timeout = window.setTimeout(() => {
      panelRef.current?.scrollTo({ top: 0 });
      closeButtonRef.current?.focus();
    }, 120);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProfile();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalBodyOverflow;
    };
  }, [closeProfile, selectedId]);

  return (
    <div
      className={[
        "relative transition-[grid-template-columns,gap] duration-500 ease-out motion-reduce:transition-none lg:grid lg:items-start",
        selectedMember ? "lg:grid-cols-[minmax(0,0.6fr)_minmax(22rem,0.4fr)] lg:gap-8" : "lg:grid-cols-[minmax(0,1fr)]"
      ].join(" ")}
    >
      <div
        className={[
          "grid gap-4 transition-[filter,opacity] duration-500 ease-out motion-reduce:transition-none sm:grid-cols-2",
          selectedMember ? "lg:grid-cols-3" : "lg:grid-cols-4"
        ].join(" ")}
        aria-label="Team members"
      >
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
              aria-pressed={isSelected}
              onClick={() => setSelectedId(member.id)}
              className={[
                "group text-left outline-none transition duration-500 ease-out focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-4 focus-visible:ring-offset-ivory motion-reduce:transition-none",
                member.featured && !selectedMember ? "lg:col-span-2" : "",
                isSelected ? "opacity-100" : "",
                isDimmed ? "opacity-45 grayscale" : ""
              ].join(" ")}
            >
              <div
                className={[
                  "overflow-hidden border bg-white p-2 shadow-[0_18px_40px_rgba(17,24,39,0.05)] transition duration-500 ease-out group-hover:border-gold/60 motion-reduce:transition-none",
                  isSelected ? "border-gold shadow-soft ring-2 ring-gold/25" : "border-line"
                ].join(" ")}
              >
                <img
                  src={member.image}
                  alt={member.imageAlt}
                  loading="lazy"
                  className={[
                    "aspect-[4/5] w-full object-cover transition duration-500 ease-out motion-reduce:transition-none",
                    isSelected ? "scale-[1.01]" : "group-hover:scale-[1.03]"
                  ].join(" ")}
                  style={{ objectPosition: member.imagePosition ?? "center top" }}
                />
              </div>
              <div
                className={[
                  "mt-4 border-l pl-4 transition duration-300 group-hover:border-emerald",
                  isSelected ? "border-emerald" : "border-gold/50"
                ].join(" ")}
              >
                <p className="font-display text-2xl text-ink">{member.name}</p>
                <p className="mt-1 text-sm font-semibold leading-5 text-navy/[0.68]">{member.role}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald transition group-hover:text-gold">
                  Read Full Profile
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {selectedMember ? (
        <>
          <button
            type="button"
            aria-label="Close profile panel"
            onClick={closeProfile}
            className="fixed inset-0 z-40 bg-ink/20 transition-opacity duration-500 lg:hidden"
          />
          <aside
            ref={panelRef}
            id="expert-profile-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="expert-profile-name"
            className="fixed inset-x-3 bottom-3 z-[60] max-h-[92svh] overflow-y-auto rounded-t-[1.75rem] border border-line bg-white shadow-[0_24px_80px_rgba(10,21,32,0.22)] animate-[fadeUp_0.4s_ease-out] lg:sticky lg:top-28 lg:z-30 lg:max-h-[calc(100svh-8rem)] lg:rounded-none lg:shadow-[0_20px_60px_rgba(8,17,31,0.08)]"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-white px-5 py-4 sm:px-7 lg:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Our Team</p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeProfile}
                className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line bg-white text-ink transition hover:border-gold hover:text-emerald focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-2"
                aria-label="Close profile panel"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="px-5 py-7 sm:px-7 sm:py-8 lg:px-8 lg:py-9">
              <h3
                id="expert-profile-name"
                className="max-w-full break-words font-display text-[clamp(2.1rem,9vw,3.65rem)] leading-[1.03] text-ink lg:text-[clamp(2.5rem,4vw,4rem)]"
              >
                {selectedMember.name}
              </h3>
              <div className="mt-4 border-l border-gold/70 pl-4">
                <p className="text-base font-semibold text-emerald">{selectedProfileTitle}</p>
                {selectedMember.id !== "liz" ? (
                  <p className="mt-1 text-sm font-medium text-navy/55">{selectedMember.company}</p>
                ) : null}
              </div>

              <p className="mt-7 max-w-[64ch] text-[1.05rem] font-medium leading-8 text-ink">
                {introStatement}
              </p>

              {biographyParagraphs.length > 0 ? (
                <div className="mt-7 border-t border-line pt-7">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Profile
                  </p>
                  <div className="grid max-w-[68ch] gap-4 text-sm leading-7 text-navy/[0.72] sm:text-[0.98rem] sm:leading-8">
                    {biographyParagraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ) : null}

              {selectedMember.recognition?.length ? (
                <div className="mt-8 border-t border-line pt-7">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Selected Recognition and Contributions
                  </p>
                  <ul className="grid max-w-[68ch] list-disc gap-3 pl-5 text-sm leading-7 text-navy/[0.72] marker:text-gold sm:text-[0.98rem] sm:leading-8">
                    {selectedMember.recognition.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-8 border-t border-line pt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Key Expertise
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedMember.expertise.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 border border-line bg-mist/70 px-3 py-2 text-xs font-semibold leading-5 text-navy/75"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-emerald" aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </>
      ) : null}
    </div>
  );
}
