import type { Metadata } from "next";
import Image from "next/image";
import { FileText } from "lucide-react";
import styles from "./page.module.css";

const title = "Courses | LK&A Comms Academy";
const description = "Explore Think Comms and AI for Comms, two full-day communications programmes in Kuala Lumpur in January 2027.";
const url = "https://www.lizkamaruddinassociates.com/courses";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title, description, url, type: "website",
    images: [{ url: "https://www.lizkamaruddinassociates.com/academylaunch/sharing.png", width: 1200, height: 630, alt: "LK&A Comms Academy" }]
  },
  twitter: {
    card: "summary_large_image", title, description,
    images: ["https://www.lizkamaruddinassociates.com/academylaunch/sharing.png"]
  }
};

const courses = [
  { slug: "think-comms", name: "Think Comms", level: "Foundation", day: "20",
    subtitle: "The Fundamentals of Strategic Communications",
    summary: "For new communications executives and junior practitioners. Learn to turn an organisational objective into a communications plan: identify who matters, shape the message and choose the right channel.",
    trainer: "Liz Kamaruddin" },
  { slug: "ai-for-comms", name: "AI for Comms", level: "Intermediate", day: "26",
    subtitle: "The Strategic Application of Artificial Intelligence in Communications",
    summary: "For communications practitioners and managers. Use AI for research, stakeholder analysis and reputation monitoring while keeping professional judgement at the centre of decisions.",
    trainer: "Mohd Bazli" }
];

export default function CoursesPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Image src="/academylaunch/logo-cream.svg" alt="LK&A Comms Academy"
          width={660} height={148} priority unoptimized className={styles.logo} />
        <h1>Courses</h1>
      </header>
      <div className={styles.list}>
        {courses.map(course => <article key={course.slug} className={styles.course}>
          <Image src={`/course-brochures/${course.slug}.jpg`} alt="" width={596} height={843} className={styles.cover} />
          <div>
            <p className={styles.level}>{course.level} · Full-day programme</p>
            <h2>{course.name}</h2>
            <p className={styles.subtitle}>{course.subtitle}</p>
            <p className={styles.summary}>{course.summary}</p>
            <p className={styles.details}><time dateTime={`2027-01-${course.day}`}>{course.day} January 2027</time> · 9:00 am to 5:00 pm<br />
              Liberal Latte, Wisma E&amp;C, Jalan Dungun, Kuala Lumpur<br />
              RM 2,000 per participant · Limited to 30 participants<br />With {course.trainer}</p>
            <a className={styles.link} href={`/course-brochures/${course.slug}.pdf`} aria-label={`View ${course.name} brochure (PDF)`}>
              <FileText size={18} aria-hidden="true" /> View brochure (PDF)
            </a>
          </div>
        </article>)}
      </div>
    </main>
  );
}
