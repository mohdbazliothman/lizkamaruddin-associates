"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  company: string;
  email?: string;
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
    email: "liz@lizkamaruddinassociates.com",
    image: "/images/team/liz-kamaruddin.png",
    imageAlt: "Liz Kamaruddin executive portrait",
    bio:
      "Liz Kamaruddin is a strategic communications advisor with more than 30 years of experience helping organisations and leaders navigate reputation, change and some of their most complex communications challenges.\n\nHer career has taken her across ASEAN, the Middle East and the Americas, spanning the energy, banking, aviation, transportation, telecommunications and hospitality sectors.\n\nOver the years, Liz has advised organisations and senior leaders on reputation management, crisis communications, corporate and government stakeholder engagement, sustainability, branding, media relations and internal communications. She is particularly recognised for her ability to step into complex situations, understand the wider business and stakeholder landscape, and translate that understanding into clear communications strategies that deliver outcomes.\n\nOften brought in during periods of change, challenge or heightened scrutiny, Liz has developed a reputation as a turnaround communications specialist. Her approach combines strategic thinking with pragmatism — understanding not only what an organisation needs to say, but what it needs to achieve through communications.\n\nAt the heart of her work is a simple belief: communications should never operate in isolation from the business. Effective communicators must understand the organisation, its stakeholders and the environment in which it operates before deciding what to communicate.\n\nToday, alongside her advisory work, Liz is increasingly focused on something she cares deeply about — developing the next generation of communications professionals and leaders.\n\nThrough coaching, training and the LK&A Comms Academy, she brings more than three decades of real-world experience into the classroom, helping communicators develop the judgement, confidence and strategic thinking required to move beyond simply executing communications to becoming trusted advisors to the organisations they serve.\n\nFor Liz, the goal is not simply to create better communications.\n\nIt is to build better communicators.",
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
    email: "rajaemy@lizkamaruddinassociates.com",
    image: "/images/team/raja-emylia.png",
    imageAlt: "Raja Emylia executive portrait",
    bio:
      "Raja Emylia is a seasoned communications practitioner with more than 25 years of experience spanning journalism and corporate communications.\n\nBeginning her career as a news journalist, Emylia developed an instinct for what makes a story matter — understanding the news agenda, identifying the right narrative and recognising how messages are received beyond the organisation.\n\nShe later transitioned into corporate communications, building extensive experience across infrastructure, services, property and banking. Her areas of expertise include strategic communications, reputation and crisis management, media relations and branding.\n\nHer experience on both sides of the media–corporate divide gives Emylia a valuable perspective on how organisations communicate and how those messages are interpreted by the media, stakeholders and the wider public.\n\nShe is particularly passionate about building strong brands and shaping narratives that are clear, credible and relevant to the audiences they need to reach.\n\nAt the heart of her approach is a belief that effective communications begins with understanding your audience — **because a message only matters when it connects.**",
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
      "Reed Samsudin is a senior communications advisor with more than 20 years of experience across corporate communications, journalism, media training, reputation management and crisis communications.\n\nHe specialises in preparing organisations and senior leaders to communicate effectively when the stakes are high — from critical media engagements and periods of heightened scrutiny to complex reputational issues and crisis situations.\n\nThroughout his career, Reed has advised, trained and supported senior leadership teams at major organisations including TM, FGV, TNB, Hess, Prasarana and EPF, helping executives strengthen their media preparedness, communications effectiveness and ability to manage reputational challenges.\n\nHis experience spans financial services, energy and FMCG, with professional exposure across ASEAN, the Middle East, North America and Africa.\n\nReed began his career in journalism, working as a business journalist and producer with Bloomberg, The Edge Weekly and ASTRO. He later held a senior role with a Washington-based business consultancy before moving into senior corporate communications positions with organisations including Standard Chartered and PETRONAS.\n\nThis combination of newsroom experience, corporate leadership exposure and advisory work gives Reed a distinctive understanding of what happens when **the media, the organisation and its leaders converge — particularly when the pressure is on.**\n\nHis approach to communications is grounded in preparation, clarity and credibility, helping leaders not simply deliver the right message, but remain effective communicators when it matters most.",
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
      "Mohd Bazli is a strategic communications and digital specialist with 15 years of experience spanning Fortune 500 corporations, consulting and entrepreneurship. With a background in software engineering, he brings a distinctive combination of technology, communications and data-driven thinking to complex business and reputational challenges.\n\nHis expertise spans strategic communications, digital and social media strategy, analytics, reputation management and stakeholder engagement. Over the course of his career, Bazli has advised corporate leaders, business owners and strategists on strengthening reputation, shaping narratives and making better-informed decisions in increasingly complex information environments.\n\nWith a strong interest in data, emerging technologies and artificial intelligence, Bazli focuses on a question that is becoming increasingly important for communicators: **how do we turn the enormous amount of information available to us into better communications decisions?**\n\nHis work explores how data and technology can help organisations better understand their audiences, identify emerging issues and reputational risks, measure communication effectiveness and respond more intelligently to changing stakeholder expectations.\n\nHaving worked across both corporate and entrepreneurial environments, Bazli also brings a practical understanding of how strategy must adapt to different organisations, resources and stages of growth.\n\nSitting at the intersection of **strategy, communications, data and technology**, his approach is grounded in a simple principle:\n\n**Turn information into insight. Insight into strategy. And strategy into measurable impact.**",
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
    bio:
      "Ilya is an experienced strategic planner with a career spanning the oil & gas and financial services sectors, across both public and private institutions. An accountant by training, she brings extensive experience in corporate strategy, industry research, public policy and regulation, having served as an internal strategic advisor to some of Malaysia’s largest institutions.\n\nWhile corporate strategy has been the cornerstone of her career, Ilya’s experience extends beyond the corporate environment. Driven by a strong interest in developmental policy, she has contributed to government policy think tanks and industry-enabling initiatives, working at the intersection of business, policy and stakeholder interests.\n\nHer experience has reinforced her belief that even the strongest strategy requires effective communication and stakeholder engagement to succeed. For Ilya, strategic communications is not simply about delivering a message — it is about building understanding, creating alignment and moving people towards a shared objective.\n\nIlya is particularly passionate about long-term sustainable growth, equitable stakeholder management and identifying new opportunities through blue-ocean thinking. She approaches each project with the belief that the right strategy, supported by the right people and conversations, has the potential to become the next game changer.",
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

function renderProfileText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={`${part}-${index}`} className="font-semibold text-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}
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
    const originalDocumentOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

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
      document.documentElement.style.overflow = originalDocumentOverflow;
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
              onClick={() => {
                if (isSelected) {
                  closeProfile();
                  return;
                }
                setSelectedId(member.id);
              }}
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
            id="expert-profile-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="expert-profile-name"
            className="fixed inset-x-3 bottom-3 z-[60] flex max-h-[92svh] flex-col overflow-hidden rounded-t-[1.75rem] border border-line bg-white shadow-[0_24px_80px_rgba(10,21,32,0.22)] animate-[fadeUp_0.4s_ease-out] lg:fixed lg:bottom-8 lg:left-auto lg:right-8 lg:top-28 lg:z-30 lg:w-[min(40vw,32rem)] lg:max-h-none lg:rounded-none lg:shadow-[0_20px_60px_rgba(8,17,31,0.08)] 2xl:right-[calc((100vw-80rem)/2)]"
          >
            <div className="sticky top-0 z-50 flex shrink-0 items-center justify-between border-b border-line bg-white px-5 py-4 sm:px-7 lg:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Our Team</p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeProfile}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-gold hover:bg-mist hover:text-emerald focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-2"
                aria-label="Close profile panel"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div
              ref={panelRef}
              data-profile-scroll
              className="min-h-0 flex-1 overflow-y-auto px-5 py-7 sm:px-7 sm:py-8 lg:px-8 lg:py-9"
            >
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

              {selectedMember.email ? (
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="mt-4 inline-flex text-sm font-semibold text-emerald underline decoration-gold/60 underline-offset-4 transition hover:text-gold"
                >
                  {selectedMember.email}
                </a>
              ) : null}
              <p className="mt-7 max-w-[64ch] text-[1.05rem] font-semibold leading-8 text-ink">
                {introStatement}
              </p>

              {biographyParagraphs.length > 0 ? (
                <div className="mt-7 border-t border-line pt-7">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Profile
                  </p>
                  <div className="grid max-w-[68ch] gap-4 text-sm leading-7 text-navy/[0.72] sm:text-[0.98rem] sm:leading-8">
                    {biographyParagraphs.map((paragraph) => (
                      <p key={paragraph}>{renderProfileText(paragraph)}</p>
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
