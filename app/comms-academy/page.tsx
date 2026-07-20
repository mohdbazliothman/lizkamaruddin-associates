import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Download, Layers3, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { academyDivisions, futureAcademyAdditions } from "@/lib/comms-academy";

export const metadata: Metadata = {
  title: "Comms Academy | Liz Kamaruddin & Associates",
  description:
    "Comms Academy is the dedicated capability-building division of Liz Kamaruddin & Associates, offering leadership programmes, communications team upskilling, AI for communications, media training and custom corporate programmes.",
  alternates: {
    canonical: "https://www.example.com/comms-academy"
  },
  openGraph: {
    title: "Comms Academy | Liz Kamaruddin & Associates",
    description:
      "Premium communication capability-building for leaders and communications teams.",
    url: "https://www.example.com/comms-academy",
    type: "website"
  }
};

export default function CommsAcademyPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader />
      <section className="relative isolate px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-24 lg:pt-36">
        <div className="pointer-events-none absolute right-0 top-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-gold/12 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_0.85fr] lg:items-end">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/80 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold shadow-[0_1px_0_rgba(8,17,31,0.03)]">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              LK&A Capability-Building Division
            </p>
            <h1 className="max-w-4xl font-display text-[2.3rem] leading-[1.04] text-ink sm:text-6xl lg:text-[4.3rem]">
              Comms Academy
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-navy/72">
              Premium communication capability-building for leaders, spokespersons and
              communications teams navigating transformation, scrutiny and moments that matter.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#programmes" variant="dark">
                View Programmes
              </ButtonLink>
              <ButtonLink href="/?areaOfInterest=Custom%20Training%20Programme&preferredEngagement=Training#contact" variant="light">
                Discuss a Custom Programme
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-gold/30 bg-[linear-gradient(145deg,#fffdf8,#f7efe0)] p-7 shadow-premium sm:p-9">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-gold">
                <Target className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="font-display text-3xl leading-tight text-ink">
                Built as a division, not a side offering.
              </p>
              <p className="mt-5 text-base leading-7 text-navy/70">
                Comms Academy gives LK&A a dedicated platform for corporate learning journeys,
                executive workshops, future public programmes and structured communications
                certification pathways.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="programmes" className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Programme Architecture
              </p>
              <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
                Five Capability Pathways
              </h2>
              <p className="mt-5 text-lg leading-8 text-navy/70">
                Each pathway can be delivered as a focused workshop, a multi-session learning
                journey or a customised corporate programme.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-px overflow-hidden border border-line bg-line">
            {academyDivisions.map((division, index) => (
              <Reveal key={division.title} delay={index * 0.03}>
                <article className="grid gap-6 bg-white p-6 sm:p-8 lg:grid-cols-[0.36fr_0.64fr]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.01em] text-ink">
                      {division.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-navy/70">{division.summary}</p>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {division.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-navy/72">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-emerald" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 bg-ink p-7 text-white sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-14">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Built to Grow
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              A platform for future public programmes and registration.
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {futureAcademyAdditions.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <div className="flex gap-4 border border-white/10 bg-white/[0.045] p-5">
                  {index === 3 ? (
                    <Download className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  ) : index === 4 ? (
                    <Layers3 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  ) : (
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  )}
                  <p className="text-base leading-7 text-white/80">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-7xl border border-line bg-white px-6 py-14 text-center shadow-soft sm:px-12 sm:py-20">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Custom Corporate Programmes
            </p>
            <h2 className="mx-auto max-w-4xl font-display text-4xl leading-tight text-ink sm:text-5xl">
              Build the communication capability your organisation needs next.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-navy/70">
              Speak with LK&A about a customised Comms Academy learning journey for leaders,
              spokespersons or communications teams.
            </p>
            <div className="mt-9 flex justify-center">
              <ButtonLink href="/?areaOfInterest=Custom%20Training%20Programme&preferredEngagement=Training#contact" variant="dark">
                Discuss a Custom Programme
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

function ButtonLink({ href, variant, children }: { href: string; variant: "dark" | "light"; children: React.ReactNode }) {
  const isDark = variant === "dark";

  return (
    <Link
      href={href}
      className={`focus-ring group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-soft transition hover:-translate-y-0.5 ${
        isDark
          ? "bg-ink text-white hover:bg-emerald"
          : "border border-line bg-white/85 text-ink hover:border-gold/45 hover:text-ink"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}
