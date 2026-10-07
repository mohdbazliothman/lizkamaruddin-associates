import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, MapPin, UserRound } from "lucide-react";
import { academyLaunch as event } from "@/lib/academy-launch";
import { AcademyRsvp } from "@/components/academy-rsvp";
import { AcademyEntrance } from "@/components/academy-entrance";
import { AcademyMusic } from "@/components/academy-music";
import styles from "./invitation.module.css";

const url = "https://www.lizkamaruddinassociates.com/academylaunch";
const title = "Comms, Coffee & Conversation | LK&A Comms Academy";
const description = "An invitation to the launch of LK&A Comms Academy. 11 November 2026, 3–6 PM at Liberal Latte, Damansara Heights.";
export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  robots: { index: false, follow: false },
  openGraph: { title, description, url, type: "website", images: [{ url: "https://www.lizkamaruddinassociates.com/academylaunch/sharing.png", width: 1200, height: 630, alt: "LK&A Comms Academy" }] },
  twitter: { card: "summary_large_image", title, description, images: ["https://www.lizkamaruddinassociates.com/academylaunch/sharing.png"] }
};

function Frame() {
  return <div className={styles.frame} aria-hidden="true"><b /><b /><b /><b /><i /><i /><i /><i /></div>;
}
function Divider({ opening = false }: { opening?: boolean }) { return <div className={styles.divider} aria-hidden="true" data-entrance={opening ? "fade" : undefined} data-delay={opening ? "0.42" : undefined}><span /></div>; }
function Title({ main = false }: { main?: boolean }) {
  const text = <>Comms, Coffee <em>&amp;</em><br />Conversation</>;
  return main ? <h1 className={styles.title}><span className={styles.titleLine} data-entrance="line" data-delay="0.18">Comms, Coffee <em>&amp;</em></span><br /><span className={styles.titleLine} data-entrance="line" data-delay="0.36">Conversation</span></h1> : <h2 className={styles.title}>{text}</h2>;
}
function Logo({ navy = false }: { navy?: boolean }) {
  return <Image src={`/academylaunch/logo-${navy ? "navy" : "cream"}.svg`} alt="LK&A Comms Academy" width={660} height={148} className={styles.logo} data-entrance={navy ? undefined : "logo"} unoptimized />;
}
const programme = [
  ["3:00 PM", "ARRIVAL & COFFEE", ""],
  ["3:30 PM", "A FEW WORDS FROM LIZ", ""],
  ["3:40 PM", "COMMS UNSCRIPTED", "A conversation with a CEO, a media powerhouse & a communicator"],
  ["4:30 PM", "WHY WE BUILT THIS", "Introducing the LK&A Comms Academy"],
  ["4:45 PM", "COFFEE, CONVERSATIONS & CONNECTIONS", ""]
];

export default function AcademyLaunchPage() {
  return <AcademyEntrance className={styles.page}>
    <AcademyMusic />
    <a href="#rsvp" className={styles.skip}>Skip to RSVP</a>
    <section className={`${styles.sheet} ${styles.invitation}`} aria-label="Invitation">
      <Image src="/academylaunch/coffee-library.webp" alt="" fill priority sizes="(max-width: 900px) 100vw, 900px" className={styles.background} data-entrance="background" />
      <div className={styles.shade} /><Frame />
      <div className={styles.invitationContent}>
        <Logo /><Title main />
        <p className={styles.subtitle} data-entrance="fade" data-delay="0.32">An invitation to the launch of <strong>LK&amp;A Comms Academy</strong></p>
        <Divider opening />
        <p className={styles.salutation} data-reveal>{event.salutation}</p>
        <div className={styles.letter} data-reveal-group="paragraphs">
          <p>You know the brief. You know the crisis call.<br /> And you’ve probably heard, <strong><em>“So... what’s our message?”</em></strong><br /> more times than you care to remember.</p>
          <p>On <strong>11 November</strong>, let’s talk about what it really takes to do Comms today.<br /> Join <strong>Liz Kamaruddin</strong> and a small gathering of communications and business leaders for good coffee, candid conversation and<br /> <strong>Comms Unscripted</strong> — a conversation between a CEO, a media powerhouse and a communicator.</p>
          <p>We’ll also introduce the <strong>LK&amp;A Comms Academy</strong> and why we believe it’s time to build the next generation of strategic communicators.</p>
        </div>
        <div className={styles.details} data-reveal-group="stagger">
          <div><CalendarDays aria-hidden="true" /><h2>11 NOV 2026</h2><p>3 – 6 PM</p><span className={styles.srOnly}>Time zone: Asia/Kuala_Lumpur</span></div>
          <div><MapPin aria-hidden="true" /><h2>LIBERAL LATTE</h2><p>WISMA E&amp;C, 2 LORONG DUNGUN KIRI, DAMANSARA HEIGHTS</p></div>
          <div><UserRound aria-hidden="true" /><h2>BY PERSONAL</h2><p>INVITATION</p></div>
        </div>
        <p className={styles.tableLine} data-reveal>I’d love to have you at the table.</p>
        <p className={styles.signature} data-reveal><strong>Liz Kamaruddin</strong><br />Founder, LizKamaruddin&amp;Associates</p>
        <a className={styles.rsvpLink} href="#rsvp" data-reveal="fade">RSVP</a>
        {event.rsvpDeadline && <p data-reveal>Kindly respond by {event.rsvpDeadline}.</p>}
      </div>
    </section>
    <section className={`${styles.sheet} ${styles.programme}`} aria-labelledby="programme-title" data-reveal="fade">
      <Frame /><Title /><Divider /><h2 id="programme-title" className={styles.programmeTitle}>THE PROGRAMME</h2>
      <ol className={styles.schedule} data-reveal-group="stagger">{programme.map(([time, heading, text]) => <li key={time}><time>{time}</time><div><h3>{heading}</h3>{text && <p>{text}</p>}</div></li>)}</ol>
      <Logo navy />
    </section>
    <section id="rsvp" className={`${styles.sheet} ${styles.rsvp}`} aria-labelledby="rsvp-title" data-reveal="fade">
      <Frame /><h2 id="rsvp-title" className={styles.formTitle}>Will you join us?</h2>
      <p className={styles.formIntro}>Please let us know whether you’ll be joining us.</p><Divider />
      <AcademyRsvp />
    </section>
  </AcademyEntrance>;
}
