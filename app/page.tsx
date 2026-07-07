import {
  ArrowRight,
  BadgeCheck,
  Check,
  Layers3,
  Linkedin,
  Mail,
  MessageSquareText,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound
} from "lucide-react";
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
                Book Consultation
              </HeroButtonLink>
              <HeroButtonLink href="#services" variant="light">
                View Services
              </HeroButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <StrategicEcosystem />
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

function StrategicEcosystem() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:mr-0">
      <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-gold/16 blur-3xl" />
      <div className="absolute -right-6 bottom-8 h-48 w-48 rounded-full bg-emerald/14 blur-3xl" />
      <div className="relative overflow-hidden rounded-[34px] border border-line bg-white/72 p-3 shadow-premium backdrop-blur-2xl">
        <div className="relative overflow-hidden rounded-[26px] bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.95),rgba(234,241,237,0.62)_42%,rgba(215,228,222,0.52)_100%)] p-5 sm:min-h-[33rem] sm:p-7">
          <div className="absolute inset-x-10 top-16 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <div className="relative z-10">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-emerald">Strategic communications ecosystem</p>
            <p className="mt-3 max-w-[18rem] text-xl font-semibold leading-tight text-ink">
              Aligning leadership, communication and stakeholder influence.
            </p>
          </div>

          <div className="relative z-10 mt-7 grid gap-3 sm:hidden">
            <MobileEcosystemItem
              eyebrow="CEOs & Leaders"
              title="Executive Presence"
              detail="Leadership Influence"
            />
            <div className="mx-auto flex w-full max-w-[15rem] items-center justify-center rounded-3xl bg-ink px-5 py-5 text-center text-white shadow-premium">
              <div>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-gold">Strategy</p>
                <p className="mt-1 text-lg font-semibold leading-none">Message</p>
                <p className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/65">Impact</p>
              </div>
            </div>
            <div className="grid gap-3">
              <MobileEcosystemItem
                eyebrow="Media"
                title="Spokesperson Training"
                detail="Media Engagement"
              />
              <MobileEcosystemItem
                eyebrow="Stakeholders"
                title="Stakeholder Engagement"
                detail="Reputation Management"
              />
            </div>
          </div>

          <div className="absolute inset-x-7 bottom-8 top-[8rem] hidden sm:block" aria-hidden="true">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 440 330">
              <path d="M220 82 C142 96 92 156 96 232" fill="none" stroke="#b59358" strokeOpacity="0.48" strokeWidth="1.3" />
              <path d="M220 82 C298 96 348 156 344 232" fill="none" stroke="#b59358" strokeOpacity="0.48" strokeWidth="1.3" />
              <path d="M118 244 C174 292 268 292 322 244" fill="none" stroke="#0d6b57" strokeOpacity="0.34" strokeWidth="1.3" />
              <path d="M220 128 C206 162 203 189 220 218" fill="none" stroke="#0d6b57" strokeOpacity="0.24" strokeWidth="1" />
              <path d="M147 229 C173 205 189 194 220 218" fill="none" stroke="#102033" strokeOpacity="0.14" strokeWidth="1" />
              <path d="M293 229 C267 205 251 194 220 218" fill="none" stroke="#102033" strokeOpacity="0.14" strokeWidth="1" />
            </svg>
            <EcosystemCircle
              className="left-1/2 top-0 -translate-x-1/2"
              eyebrow="CEOs & Leaders"
              title="Executive Presence"
              detail="Leadership Influence"
            />
            <EcosystemCircle
              className="bottom-0 left-0"
              eyebrow="Media"
              title="Spokesperson Training"
              detail="Media Engagement"
            />
            <EcosystemCircle
              className="bottom-0 right-0"
              eyebrow="Stakeholders"
              title="Stakeholder Engagement"
              detail="Reputation Management"
            />
            <div className="absolute left-1/2 top-[54%] flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/80 bg-ink text-center text-white shadow-premium ring-8 ring-white/35 sm:h-32 sm:w-32">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-gold">Strategy</p>
              <p className="mt-1 text-base font-semibold leading-none">Message</p>
              <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/65">Impact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileEcosystemItem({
  eyebrow,
  title,
  detail
}: {
  eyebrow: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/78 px-4 py-4 text-center shadow-soft backdrop-blur-xl">
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.17em] text-emerald">{eyebrow}</p>
      <p className="mt-1 text-sm font-semibold leading-tight text-ink">{title}</p>
      <p className="mt-1 text-[0.72rem] leading-tight text-navy/58">{detail}</p>
    </div>
  );
}

function EcosystemCircle({
  className,
  eyebrow,
  title,
  detail
}: {
  className: string;
  eyebrow: string;
  title: string;
  detail: string;
}) {
  return (
    <div
      className={`absolute z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-white/80 bg-white/82 px-4 text-center shadow-soft backdrop-blur-xl sm:h-36 sm:w-36 ${className}`}
    >
      <p className="text-[0.58rem] font-semibold uppercase tracking-[0.17em] text-emerald">{eyebrow}</p>
      <p className="mt-2 text-sm font-semibold leading-tight text-ink">{title}</p>
      <p className="mt-1 text-[0.68rem] leading-tight text-navy/58">{detail}</p>
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
