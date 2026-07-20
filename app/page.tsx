import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Landmark,
  Linkedin,
  Mail,
  MessageSquareText,
  Mic2,
  Phone,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound
} from "lucide-react";
import Script from "next/script";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { PortraitImage } from "@/components/portrait-image";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { academyCapabilities } from "@/lib/comms-academy";

const proofPoints = [
  "50+ Years Combined Experience",
  "Senior Corporate & Public-Sector Expertise",
  "Regional and Global Communications Experience",
  "Reputation, Crisis & Leadership Advisory"
];

// TODO: Add only approved client logo files here after logo usage rights are confirmed.
const selectedClients = [
  { name: "ANOC Medicare & Diagnostic", logo: "/client-logos/anoc.jpg" },
  { name: "EPF / KWSP", logo: "/client-logos/kwsp.jpg" },
  { name: "Telekom Malaysia", logo: "/client-logos/telekom-malaysia.jpg" },
  { name: "Mastercard", logo: "/client-logos/mastercard.png" },
  { name: "PETRONAS", logo: "/client-logos/petronas.jpg" },
  { name: "Khazanah Nasional", logo: "/client-logos/khazanah.jpg" },
  { name: "Ministry of Tourism, Arts and Culture Malaysia", logo: "/client-logos/motac.jpg" },
  { name: "International Islamic Liquidity Management Corporation" },
  { name: "Tabung Haji" },
  { name: "Tenaga Nasional Berhad" },
  { name: "Duopharma" },
  { name: "Ministry of Health Malaysia" },
  { name: "KPS" },
  { name: "Hess" },
  { name: "Jentayu Sustainables" },
  { name: "Prasarana Malaysia" },
  { name: "Institute of Corporate Directors Malaysia" },
  { name: "Bank Rakyat" },
  { name: "Ministry of Communications Malaysia" }
];

const pillars = [
  {
    title: "Proven Track Record",
    copy: "Senior-level experience managing reputational issues across corporate and public arenas locally, regionally and globally."
  },
  {
    title: "Multi-Disciplinary Expertise",
    copy: "Practical capability spanning communication audits, crisis preparedness, leadership coaching, stakeholder management and reputation strategy."
  },
  {
    title: "Deep Practical Knowledge",
    copy: "Hands-on experience managing issues that shape how organisations are viewed internally and externally."
  }
];

const advisoryServices = [
  {
    title: "Strategic Communications Advisory",
    copy: "Communication strategies aligned with organisational priorities, transformation agendas and stakeholder expectations.",
    icon: Target
  },
  {
    title: "Reputation & Issues Management",
    copy: "Early identification, assessment and management of issues that may affect trust, credibility and permission to operate.",
    icon: ShieldCheck
  },
  {
    title: "Crisis Preparedness & Response",
    copy: "Crisis frameworks, simulations, leadership preparation and real-time communication support during high-pressure situations.",
    icon: RadioTower
  },
  {
    title: "Stakeholder & Public Affairs",
    copy: "Engagement strategies for boards, government, regulators, investors, employees, communities and other critical constituencies.",
    icon: Landmark
  },
  {
    title: "Communication Audits & Capability Development",
    copy: "Reviews of communication structures, processes, channels, messaging and team capability, followed by practical recommendations.",
    icon: MessageSquareText
  }
];

const lizCredentials = [
  "More than 30 years of experience",
  "Certified Senior Coach, Coach Transformation Academy Dubai",
  "Adjunct Professor at Multimedia University",
  "Contributor to the Bachelor of Strategic Communication programme",
  "Board of Studies member for the Master's in Strategic Communication programme",
  "PRWeek Power Book, 2014 and 2015",
  "PRWeek Asia Power List, 2014",
  "The Internationalist of the Year, 2014",
  "PERMATA Liz Kamaruddin Communication Excellence Award named in recognition of her contribution at MMU"
];

const reedCredentials = [
  "More than 20 years of experience",
  "Former business journalist and producer",
  "Experience with Bloomberg, The Edge Weekly and ASTRO",
  "Former communications leadership roles at Standard Chartered and PETRONAS",
  "Strategic communication, stakeholder management and crisis-response expertise"
];

const recognition = [
  "PRWeek Power Book 2014 and 2015",
  "PRWeek Asia Power List 2014",
  "The Internationalist of the Year 2014",
  "Adjunct Professor at Multimedia University",
  "Contribution to strategic communication curriculum development",
  "MMU communication excellence award named in Liz's honour"
];

const supportAreas = [
  "Boards and C-Suite Leaders",
  "Corporate Communications Teams",
  "Government and Public Institutions",
  "Government-Linked Companies",
  "Energy and Infrastructure Organisations",
  "Financial Services",
  "Healthcare and Pharmaceuticals",
  "Telecommunications",
  "Organisations Undergoing Transformation",
  "Organisations Facing Reputational Risk"
];

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LizKamaruddin & Associates",
  alternateName: "LK&A",
  description:
    "Boutique strategic communications advisory supporting boards, senior leaders and communication teams in reputation management, crisis preparedness, stakeholder engagement, coaching and capability development.",
  email: "hello@lizkamaruddin.com",
  url: "https://www.example.com"
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Liz Kamaruddin",
  jobTitle: "Principal, Adjunct Professor & Lead Expert Trainer",
  worksFor: {
    "@type": "Organization",
    name: "LizKamaruddin & Associates"
  }
};

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen overflow-hidden">
      <Script
        id="organisation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
      />
      <Script
        id="person-schema-liz"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <SiteHeader />

      <section className="relative isolate px-5 pb-14 pt-28 sm:px-8 lg:px-10 lg:pb-20 lg:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-emerald/8 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-28 -z-10 h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_0.82fr] lg:gap-16">
          <Reveal>
            <p className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-white/75 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-emerald shadow-[0_1px_0_rgba(8,17,31,0.03)] backdrop-blur-xl sm:text-[0.68rem] sm:tracking-[0.22em]">
              <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              Boutique Strategic Communications Advisory
            </p>
            <h1 className="max-w-[45rem] font-display text-[2.05rem] leading-[1.06] text-ink sm:text-5xl md:text-6xl lg:text-[4.2rem]">
              Strategic Communications for Moments That Matter
            </h1>
            <p className="mt-6 max-w-[40rem] text-base leading-8 text-navy/72 sm:text-lg">
              LizKamaruddin & Associates advises boards, senior leaders and communications teams on
              reputation, stakeholder engagement, transformation and crisis preparedness.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <HeroButtonLink href="#contact" variant="dark">
                Book a Consultation
              </HeroButtonLink>
              <HeroButtonLink href="#expertise" variant="light">
                Explore Our Expertise
              </HeroButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <StrategicEcosystem />
          </Reveal>
        </div>
      </section>

      <section aria-label="Credibility highlights" className="px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl border-y border-line/80 bg-white/55 py-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-navy/75">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Selected Client Experience" title="Trusted by Leading Organisations">
        <Reveal>
          <p className="mb-8 max-w-3xl text-lg leading-8 text-navy/70">
            Our team has supported prominent organisations across energy, finance, infrastructure,
            government, healthcare and professional services.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {selectedClients.map((client, index) => (
            <Reveal key={client.name} delay={index * 0.015}>
              <div
                className="flex min-h-28 items-center justify-center border border-line bg-white/72 px-4 py-5 text-center text-xs font-semibold uppercase tracking-[0.12em] text-navy/55 transition hover:border-gold/40 hover:text-ink"
                aria-label={`${client.name} selected client experience`}
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-16 w-full max-w-[9rem] object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                    loading="lazy"
                  />
                ) : (
                  client.name
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="about" eyebrow="Who We Are" title="Seasoned Communications Counsel for Complex Environments" watermark>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <div className="border-l-2 border-gold bg-white/65 py-2 pl-7">
              <p className="text-xl leading-9 text-navy/76">
                LizKamaruddin & Associates is a team of seasoned communications professionals
                driven by a passion for empowering leadership and communications teams. With more
                than 50 years of combined experience in senior corporate and public-sector
                communications roles, we help organisations manage stakeholder relationships,
                anticipate emerging issues and protect reputation before challenges escalate.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.04}>
                <article className="border border-line bg-white p-6 shadow-[0_1px_0_rgba(8,17,31,0.03)]">
                  <h3 className="text-lg font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-3 text-base leading-7 text-navy/70">{pillar.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal>
          <div className="mt-10 grid gap-6 bg-ink p-7 text-white sm:p-9 lg:grid-cols-[0.34fr_0.66fr] lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Our Mantra</p>
            <p className="font-display text-2xl leading-tight sm:text-3xl">
              We help clients use communication as a strategic business asset - to manage crises,
              navigate disruption, articulate their position and preserve trust and permission to
              operate.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section id="expertise" eyebrow="Our Expertise" title="Strategic Support Before, During and After Critical Moments">
        <div className="grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-2">
          {advisoryServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.035}>
                <article className="group min-h-64 bg-white p-7 transition duration-300 hover:bg-mist/70 sm:p-8">
                  <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-full border border-emerald/15 bg-emerald/8 text-emerald">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.01em] text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-navy/70">{service.copy}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        id="comms-academy"
        eyebrow="Comms Academy by LizKamaruddin & Associates"
        title="Developing Leaders. Strengthening Organisations."
      >
        <div className="relative overflow-hidden border border-gold/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(250,246,238,0.78))] p-6 shadow-soft sm:p-8 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-12">
          <img
            src="/lka-signature.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 top-4 h-28 w-auto opacity-[0.04] sm:h-40"
          />
          <Reveal>
            <div className="relative max-w-xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                A division of LK&A
              </p>
              <div className="h-px w-20 bg-gold/60" />
              <p className="mt-8 text-lg leading-8 text-navy/76">
                Today&apos;s leaders do not just need to make the right decisions&mdash;they need to
                communicate them with clarity, confidence and credibility.
              </p>
              <p className="mt-5 text-lg leading-8 text-navy/76">
                Comms Academy is the capability-building division of LizKamaruddin & Associates,
                designed to equip executives, leadership teams and communication professionals with
                the skills to navigate transformation, manage stakeholder expectations and lead
                effectively during moments that matter.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/comms-academy" variant="dark">
                  Explore Comms Academy
                </ButtonLink>
                <Link
                  href="/?areaOfInterest=Custom%20Training%20Programme&preferredEngagement=Training#contact"
                  className="focus-ring group inline-flex items-center gap-2 px-1 py-3 text-sm font-semibold text-ink transition hover:text-emerald"
                >
                  Discuss a Custom Programme
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
          <div className="relative mt-10 border-y border-gold/25 lg:mt-0">
            {academyCapabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 0.04}>
                <article className="group grid gap-4 border-b border-gold/20 py-6 transition last:border-b-0 hover:bg-white/45 sm:grid-cols-[4rem_1fr] sm:px-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{capability.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-navy/68">{capability.summary}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="team" title="Meet the Experts" eyebrow="Team">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <article className="grid gap-7 border border-line bg-white p-6 shadow-soft md:grid-cols-[0.72fr_1.28fr] md:p-8">
              <Portrait />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Principal</p>
                <h3 className="mt-3 font-display text-4xl text-ink">Liz Kamaruddin</h3>
                <p className="mt-2 text-sm font-semibold text-emerald">
                  Principal, Adjunct Professor & Lead Expert Trainer
                </p>
                <p className="mt-6 text-base leading-7 text-navy/72">
                  Liz Kamaruddin is a senior strategic communications specialist with more than 30
                  years of experience supporting organisations across ASEAN, the Middle East and the
                  Americas. Her expertise includes reputation management, strategic crisis
                  communication, ESG communication, corporate social responsibility, branding, media
                  relations and internal communication.
                </p>
                <CredentialList items={lizCredentials.slice(0, 6)} />
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="h-full border border-line bg-white p-6 shadow-soft md:p-8">
              <div className="mb-7 flex min-h-48 items-center justify-center bg-mist text-center">
                <div>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-emerald/20 bg-white font-display text-2xl text-emerald">
                    RS
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy/45">
                    Photo placeholder
                  </p>
                </div>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Expert Trainer</p>
              <h3 className="mt-3 font-display text-3xl text-ink">Reed Samsudin</h3>
              <p className="mt-2 text-sm font-semibold text-emerald">
                Expert Trainer, Communications Advisor, Media & Crisis Expert
              </p>
              <p className="mt-6 text-base leading-7 text-navy/72">
                Reed Samsudin is a senior communications professional with more than 20 years of
                experience across financial services, energy and FMCG. He has prepared senior
                leaders at major organisations for media engagement, reputation management and
                crisis response across ASEAN, the Middle East, North America and Africa.
              </p>
              <CredentialList items={reedCredentials} />
            </article>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Recognition" title="Recognition & Academic Contribution">
        <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {recognition.map((item, index) => (
            <Reveal key={item} delay={index * 0.025}>
              <div className="min-h-32 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-base font-semibold leading-7 text-ink">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="clients" eyebrow="Who We Support" title="Who We Support">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {supportAreas.map((item, index) => (
            <Reveal key={item} delay={index * 0.02}>
              <div className="min-h-24 border border-line bg-white px-4 py-5 text-sm font-semibold leading-6 text-navy/75 transition hover:border-emerald/30 hover:text-emerald">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <Reveal>
          <div className="noise mx-auto max-w-7xl border border-line bg-white px-6 py-14 text-center shadow-soft sm:px-12 sm:py-20">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-emerald">
              Start a Conversation
            </p>
            <h2 className="mx-auto max-w-4xl font-display text-4xl leading-tight text-ink sm:text-5xl">
              Prepare Your Leaders and Organisation for the Moments That Matter
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-navy/70">
              Speak with us about strategic communication advisory, crisis preparedness, leadership
              coaching or a customised capability-building programme.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="#contact" variant="dark">
                Book a Consultation
              </ButtonLink>
              <ButtonLink href="#contact" variant="light">
                Send an Enquiry
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>

      <Section id="contact" eyebrow="Contact" title="Begin a Confidential Conversation">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <Reveal>
            <div className="sticky top-24 border border-line bg-white p-7 shadow-soft">
              <h3 className="text-2xl font-semibold tracking-[-0.01em] text-ink">
                Enquiry details
              </h3>
              <p className="mt-4 text-base leading-7 text-navy/70">
                Share a little context and the firm can shape the right advisory conversation for
                your leadership, communication or reputation goals.
              </p>
              <div className="mt-8 grid gap-4 text-sm text-navy/70">
                <ContactLine icon={Mail} text="hello@lizkamaruddin.com" />
                <ContactLine icon={Phone} text="Telephone placeholder" />
                <ContactLine icon={Linkedin} text="LinkedIn placeholder" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <EnquiryForm />
          </Reveal>
        </div>
      </Section>

      <Footer year={year} />
    </main>
  );
}

function Section({
  id,
  eyebrow,
  title,
  watermark,
  children
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  watermark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative mb-12 max-w-3xl">
            {watermark ? (
              <img
                src="/lka-signature.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -left-4 -top-12 h-28 w-auto max-w-none opacity-[0.05] sm:-left-8 sm:-top-16 sm:h-40"
              />
            ) : null}
            {eyebrow ? (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-emerald">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="relative font-display text-4xl leading-tight text-ink sm:text-5xl">{title}</h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
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
          : "border border-line bg-white/85 text-ink hover:border-emerald/35 hover:text-emerald"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}

function HeroButtonLink({
  href,
  variant,
  children
}: {
  href: string;
  variant: "dark" | "light";
  children: React.ReactNode;
}) {
  return <ButtonLink href={href} variant={variant}>{children}</ButtonLink>;
}

function StrategicEcosystem() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] rounded-[32px] border border-line bg-white p-3 shadow-premium sm:aspect-[0.92] sm:p-4 lg:mr-0">
      <div className="relative h-auto overflow-hidden rounded-[24px] bg-[linear-gradient(145deg,#f8faf9_0%,#eaf1ed_48%,#d7e4de_100%)] p-4 sm:h-full sm:p-6">
        <div className="absolute inset-x-10 top-9 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/90 to-transparent" />
        <div className="relative flex h-full flex-col sm:justify-between">
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal/70">
                Strategic signal map
              </p>
              <p className="mt-3 max-w-[14rem] text-xl font-semibold leading-tight text-ink sm:text-2xl">
                Strategy, message and impact across critical audiences.
              </p>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-emerald shadow-soft">
              <RadioTower className="h-5 w-5" aria-hidden="true" />
            </div>
          </div>
          <div className="relative mx-auto mb-4 mt-7 h-[17rem] w-[17rem] sm:mb-8 sm:mt-9 sm:h-72 sm:w-72">
            <NetworkNode className="left-[41%] top-[1%]" label="CEOs" subLabel="Leaders" active />
            <NetworkNode className="left-[3%] top-[34%]" label="Board" icon={Building2} />
            <NetworkNode className="right-[1%] top-[34%]" label="Media" icon={Mic2} />
            <NetworkNode className="bottom-[6%] left-[14%]" label="Government" icon={Landmark} />
            <NetworkNode className="bottom-[5%] right-[12%]" label="Investors" icon={UsersRound} />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 288 288" aria-hidden="true">
              <path d="M144 32 C80 38 38 80 38 138 C38 202 84 246 144 252 C208 246 250 202 250 138 C250 80 208 38 144 32Z" fill="none" stroke="#b59358" strokeOpacity="0.58" />
              <path d="M144 32 L144 144 M38 138 L144 144 M250 138 L144 144 M91 235 L144 144 M205 235 L144 144" fill="none" stroke="#0d6b57" strokeDasharray="3 7" strokeOpacity="0.34" />
            </svg>
            <div className="absolute left-1/2 top-1/2 flex h-[6.8rem] w-[6.8rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/80 bg-white/72 text-center shadow-soft sm:h-32 sm:w-32">
              <Sparkles className="mb-2 h-4 w-4 text-gold" aria-hidden="true" />
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.15em] text-emerald sm:text-xs">
                Strategy
              </p>
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.15em] text-emerald sm:text-xs">
                Message
              </p>
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.15em] text-emerald sm:text-xs">
                Impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NetworkNode({
  className,
  label,
  subLabel,
  active,
  icon: Icon
}: {
  className: string;
  label: string;
  subLabel?: string;
  active?: boolean;
  icon?: typeof UsersRound;
}) {
  return (
    <div className={`absolute z-10 ${className}`}>
      <div
        className={`flex h-[3.9rem] w-[3.9rem] flex-col items-center justify-center rounded-full border text-center text-[0.58rem] font-semibold leading-tight shadow-soft sm:h-16 sm:w-16 sm:text-[0.66rem] ${
          active ? "border-emerald/25 bg-emerald text-white" : "border-white/80 bg-white/88 text-navy"
        }`}
      >
        {Icon ? <Icon className="mb-1 h-3.5 w-3.5 text-gold" aria-hidden="true" /> : null}
        <span>{label}</span>
        {subLabel ? <span>{subLabel}</span> : null}
      </div>
    </div>
  );
}

function CredentialList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-navy/70">
          <Check className="mt-1 h-4 w-4 shrink-0 text-emerald" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Portrait() {
  return (
    <div className="relative min-h-[24rem] overflow-hidden bg-[linear-gradient(145deg,#0d1a2a,#164e57)]">
      <PortraitImage />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/70 to-transparent" />
    </div>
  );
}

function ContactLine({ icon: Icon, text }: { icon: typeof Mail; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-mist text-emerald">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <span>{text}</span>
    </div>
  );
}

function Footer({ year }: { year: number }) {
  const links = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Comms Academy", href: "/comms-academy" },
    { label: "Team", href: "#team" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="border-t border-line bg-white px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <img
            src="/lka-signature.png"
            alt="LizKamaruddin & Associates signature logo"
            className="mb-6 h-16 w-auto object-contain sm:h-20"
          />
          <p className="text-lg font-semibold text-ink">LizKamaruddin & Associates</p>
          <p className="mt-2 text-sm text-navy/60">
            Strategic Communications for Moments That Matter
          </p>
        </div>
        <div className="grid gap-6 text-sm text-navy/60 sm:grid-cols-2 lg:text-right">
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3 lg:justify-end">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="focus-ring hover:text-emerald">
                {link.label}
              </Link>
            ))}
            <Link href="#" className="focus-ring hover:text-emerald">
              Privacy Policy
            </Link>
          </nav>
          <div>
            <p>hello@lizkamaruddin.com</p>
            <p className="mt-2">Telephone placeholder</p>
            <p className="mt-2">LinkedIn placeholder</p>
            <p className="mt-4">&copy; {year} LizKamaruddin & Associates. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
