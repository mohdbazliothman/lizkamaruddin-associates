import {
  ArrowRight,
  BadgeCheck,
  Check,
  Layers3,
  Linkedin,
  Mail,
  MessageSquareText,
  Phone,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { PortraitImage } from "@/components/portrait-image";
import { Reveal } from "@/components/reveal";

const services = [
  {
    title: "Strategic Communications Advisory",
    copy: "Develop communication strategies that align business objectives, strengthen stakeholder confidence and protect organisational reputation.",
    icon: Target
  },
  {
    title: "Executive & Leadership Coaching",
    copy: "Empower senior leaders with the communication skills, executive presence and strategic mindset needed to lead effectively.",
    icon: UsersRound
  },
  {
    title: "Spokesperson & Media Training",
    copy: "Prepare executives to engage confidently with media, investors, regulators and public audiences.",
    icon: MessageSquareText
  },
  {
    title: "Corporate Communication Skills Training",
    copy: "Build communication capability across organisations through practical, customised and engaging training programmes.",
    icon: Layers3
  },
  {
    title: "Crisis & Reputation Management",
    copy: "Support organisations in preparing for and responding to communication challenges that matter most.",
    icon: ShieldCheck
  }
];

const expertise = [
  "Board and C-suite advisory perspective",
  "Practical, strategic and results-oriented",
  "Tailored programmes, not generic training",
  "Strong understanding of reputation, media and stakeholder dynamics",
  "Experience across corporate, government and public-facing sectors"
];

const industries = [
  "Energy",
  "Banking & Financial Services",
  "Government & Public Sector",
  "Aviation",
  "Telecommunications",
  "Education",
  "Hospitality",
  "Professional Services"
];

const highlights = [
  "35+ Years Executive Experience",
  "Strategic Communications Advisory",
  "Leadership & Spokesperson Coaching",
  "Corporate, Government & GLC Experience"
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen overflow-hidden">
      <Header />

      <section className="relative isolate px-5 pb-14 pt-28 sm:px-8 lg:px-10 lg:pb-20 lg:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-emerald/8 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-28 -z-10 h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_0.82fr] lg:gap-16">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/75 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-emerald shadow-[0_1px_0_rgba(8,17,31,0.03)] backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Boutique Executive Advisory
            </p>
            <h1 className="max-w-[45rem] font-display text-[2.22rem] leading-[1.04] text-ink sm:text-5xl md:text-6xl lg:text-[4.35rem]">
              Strategic Communications for Leaders Who Shape the Future
            </h1>
            <p className="mt-6 max-w-[40rem] text-base leading-8 text-navy/72 sm:text-lg">
              LizKamaruddin & Associates partners with boards, CEOs and leadership teams to
              strengthen executive communication, stakeholder engagement and organisational
              reputation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <HeroButtonLink href="#contact" variant="dark">
                Book a Consultation
              </HeroButtonLink>
              <HeroButtonLink href="#services" variant="light">
                View Services
              </HeroButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <ExecutiveVisual />
          </Reveal>
        </div>
      </section>

      <section aria-label="Credibility highlights" className="px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[26px] border border-line bg-white/80 px-5 py-5 shadow-soft sm:px-7">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-semibold text-navy/75">
                <BadgeCheck className="h-4 w-4 shrink-0 text-emerald" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="about" eyebrow="About" title="Trusted Advisory for High-Stakes Communication">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="rounded-[28px] border border-line bg-ink p-8 text-white shadow-premium">
              <p className="font-display text-5xl">35+</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                Years of executive experience
              </p>
              <p className="mt-8 text-base leading-7 text-white/70">
                Advisory for moments where clarity, trust and leadership presence carry business
                consequences.
              </p>
            </div>
            <p className="text-xl leading-9 text-navy/75">
              With over three decades of experience in strategic communications, executive
              leadership and organisational transformation, LizKamaruddin & Associates provides
              trusted advisory services to corporations, government agencies and senior executives.
              We help leaders communicate with confidence, manage reputation, develop executive
              presence and navigate today&apos;s complex stakeholder landscape.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section id="services" eyebrow="Services" title="Strategic support for leaders and organisations">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <article className="group h-full rounded-[24px] border border-line bg-white p-7 shadow-[0_1px_0_rgba(8,17,31,0.03)] transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-navy/70">{service.copy}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <section id="expertise" className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 rounded-[34px] bg-ink p-6 text-white sm:p-10 lg:grid-cols-[0.84fr_1.16fr] lg:p-14">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Why work with us</p>
            <h2 className="mt-5 max-w-lg font-display text-4xl leading-tight sm:text-5xl">
              Calm judgement for visible, high-trust leadership.
            </h2>
          </Reveal>
          <div className="grid gap-4">
            {expertise.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="flex gap-4 rounded-[20px] border border-white/10 bg-white/[0.045] p-5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <p className="text-base leading-7 text-white/80">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Industries" title="Experience across sectors where reputation matters">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal key={industry} delay={index * 0.025}>
              <div className="rounded-2xl border border-line bg-white px-4 py-5 text-sm font-semibold text-navy/75 transition hover:border-emerald/30 hover:text-emerald">
                {industry}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Led by Liz Kamaruddin" eyebrow="Leadership">
        <Reveal>
          <div className="grid gap-10 rounded-[32px] border border-line bg-white p-6 shadow-soft md:grid-cols-[0.88fr_1.12fr] md:p-9 lg:p-12">
            <Portrait />
            <div className="flex flex-col justify-center">
              <p className="text-xl leading-9 text-navy/75">
                Liz Kamaruddin is a senior communications advisor, leadership coach and strategic
                communications practitioner with extensive experience advising leaders and
                organisations across multiple sectors. Her work focuses on helping leaders
                communicate with clarity, credibility and influence.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Clarity", "Credibility", "Influence"].map((item) => (
                  <div key={item} className="rounded-2xl bg-mist px-4 py-4 text-sm font-semibold text-ink">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <Reveal>
          <div className="noise mx-auto max-w-7xl rounded-[34px] border border-line bg-white px-6 py-14 text-center shadow-soft sm:px-12 sm:py-20">
            <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
              Ready to strengthen the way your leaders communicate?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-navy/70">
              Let&apos;s discuss how LizKamaruddin & Associates can support your organisation&apos;s
              communication, leadership and reputation goals.
            </p>
            <div className="mt-9 flex justify-center">
              <ButtonLink href="#contact" variant="dark">
                Send an Enquiry
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>

      <Section id="contact" eyebrow="Contact" title="Begin a confidential conversation">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <Reveal>
            <div className="sticky top-24 rounded-[28px] border border-line bg-white p-7 shadow-soft">
              <h3 className="text-2xl font-semibold tracking-[-0.01em] text-ink">
                Enquiry details
              </h3>
              <p className="mt-4 text-base leading-7 text-navy/70">
                Share a little context and the firm can shape the right advisory conversation for
                your leadership, communication or reputation goals.
              </p>
              <div className="mt-8 grid gap-4 text-sm text-navy/70">
                <ContactLine icon={Mail} text="hello@lizkamaruddin.com" />
                <ContactLine icon={Phone} text="Phone placeholder" />
                <ContactLine icon={Linkedin} text="LinkedIn placeholder" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <EnquiryForm />
          </Reveal>
        </div>
      </Section>

      <footer className="border-t border-line bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold text-ink">LizKamaruddin & Associates</p>
            <p className="mt-2 text-sm text-navy/60">
              Strategic Communications. Leadership Advisory. Executive Coaching.
            </p>
          </div>
          <div className="text-sm text-navy/60 md:text-right">
            <p>hello@lizkamaruddin.com · Phone placeholder · LinkedIn placeholder</p>
            <p className="mt-2">© {year} LizKamaruddin & Associates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Header() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-line/70 bg-white/75 px-5 backdrop-blur-2xl sm:px-8 lg:px-10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6">
        <Link href="#" className="focus-ring text-sm font-semibold tracking-[-0.01em] text-ink sm:text-base">
          LizKamaruddin & Associates
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring text-sm font-medium text-navy/70 transition hover:text-emerald"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="focus-ring hidden rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald sm:inline-flex"
        >
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 max-w-3xl">
            {eyebrow ? (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-emerald">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">{title}</h2>
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
      className={`focus-ring group inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold shadow-soft transition hover:-translate-y-0.5 ${
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
  const isDark = variant === "dark";

  return (
    <Link
      href={href}
      className={`focus-ring group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-[0_14px_36px_rgba(8,17,31,0.08)] transition hover:-translate-y-0.5 ${
        isDark
          ? "bg-ink text-white hover:bg-emerald"
          : "border border-line bg-white/78 text-ink backdrop-blur-xl hover:border-emerald/35 hover:text-emerald"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}

function ExecutiveVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] rounded-[36px] border border-line bg-white p-3 shadow-premium sm:aspect-[0.92] sm:p-4 lg:mr-0">
      <div className="relative h-auto overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#f8faf9_0%,#eaf1ed_48%,#d7e4de_100%)] p-4 sm:h-full sm:p-6">
        <div className="absolute inset-x-10 top-9 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/90 to-transparent" />
        <div className="relative flex h-full flex-col sm:justify-between">
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal/70">
                Strategic signal map
              </p>
              <p className="mt-3 max-w-[14rem] text-2xl font-semibold leading-tight text-ink">
                Aligning leaders, stakeholders and reputation.
              </p>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-emerald shadow-soft">
              <RadioTower className="h-5 w-5" aria-hidden="true" />
            </div>
          </div>
          <div className="relative mt-5 overflow-hidden rounded-[22px] border border-white/80 bg-white/55 shadow-soft sm:hidden">
            <Image
              src="/leaders.png"
              alt="Strategic communications ecosystem linking CEOs and leaders, board, media, government and investors around strategy, message and impact."
              width={1410}
              height={1130}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
          <div className="relative mx-auto mb-8 mt-9 hidden h-72 w-72 sm:block">
            <NetworkNode className="left-[42%] top-[3%]" label="CEO" active />
            <NetworkNode className="left-[6%] top-[34%]" label="Board" />
            <NetworkNode className="right-[2%] top-[32%]" label="Media" />
            <NetworkNode className="bottom-[8%] left-[18%]" label="Gov" />
            <NetworkNode className="bottom-[4%] right-[14%]" label="Investors" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 288 288" aria-hidden="true">
              <path d="M144 32 L48 118 L236 114 Z" fill="none" stroke="#b59358" strokeOpacity="0.55" />
              <path d="M48 118 L92 238 L144 32 L203 242 L236 114" fill="none" stroke="#0d6b57" strokeOpacity="0.28" />
              <path d="M92 238 L203 242" fill="none" stroke="#102033" strokeOpacity="0.16" />
            </svg>
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/50 shadow-soft" />
          </div>
        </div>
      </div>
    </div>
  );
}

function NetworkNode({ className, label, active }: { className: string; label: string; active?: boolean }) {
  return (
    <div className={`absolute z-10 ${className}`}>
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full border text-xs font-semibold shadow-soft ${
          active ? "border-emerald/25 bg-emerald text-white" : "border-white/80 bg-white/80 text-navy"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

function Portrait() {
  return (
    <div className="relative min-h-[24rem] overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#0d1a2a,#164e57)]">
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
