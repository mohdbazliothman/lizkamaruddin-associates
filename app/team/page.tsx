import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { TeamReveal } from "@/components/team-reveal";

export const metadata: Metadata = {
  title: "Meet the Experts | Liz Kamaruddin & Associates",
  description:
    "Meet the Liz Kamaruddin & Associates team of strategic communications, crisis communications, digital, AI, CSR and advisory specialists.",
  alternates: {
    canonical: "https://www.example.com/team"
  },
  openGraph: {
    title: "Meet the Experts | Liz Kamaruddin & Associates",
    description:
      "A boutique advisory team supporting leaders and organisations through moments that matter.",
    url: "https://www.example.com/team",
    type: "website",
    images: [
      {
        url: "/images/team/lka-team-group.png",
        width: 1200,
        height: 900,
        alt: "Liz Kamaruddin & Associates team"
      }
    ]
  }
};

export default function TeamPage() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader />

      <section className="relative isolate px-5 pb-14 pt-28 sm:px-8 lg:px-10 lg:pb-20 lg:pt-36">
        <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-emerald/[0.08] blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="animate-[fadeUp_0.5s_ease-out]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Our People
            </p>
            <h1 className="max-w-4xl font-display text-[2.4rem] leading-[1.02] text-ink sm:text-6xl lg:text-[4.6rem]">
              Meet the Experts
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-navy/[0.72]">
              Liz Kamaruddin & Associates brings together specialists across strategic
              communications, crisis communications, digital, AI, CSR and related disciplines
              to support leaders and organisations through moments that matter.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <TeamReveal />
        </div>
      </section>

      <section className="border-y border-line bg-mist/60 px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Start a Conversation
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink">
              Speak with the team about the communication challenges ahead.
            </h2>
          </div>
          <Link
            href="/#contact"
            className="focus-ring group inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald"
          >
            Contact LK&A
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <footer className="px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-line pt-8 text-sm text-navy/65 md:flex-row md:items-end md:justify-between">
          <div>
            <img
              src="/lka-logo.png"
              alt="Liz Kamaruddin & Associates logo"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-4 text-base font-semibold text-ink">Liz Kamaruddin & Associates</p>
            <p className="mt-1">Strategic Communications for Moments That Matter</p>
          </div>
          <div className="grid gap-2">
            <p className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald" aria-hidden="true" />
              hello@lizkamaruddin.com
            </p>
            <p>&copy; {year} Liz Kamaruddin & Associates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
