import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

const title = "Courses Coming Soon | LK&A Comms Academy";
const description = "Courses from LK&A Comms Academy. Coming soon.";
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

export default function CoursesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <Image src="/academylaunch/logo-cream.svg" alt="LK&A Comms Academy"
          width={660} height={148} priority unoptimized className={styles.logo} />
        <div className={styles.divider} aria-hidden="true" />
        <h1 className={styles.title}>Coming Soon</h1>
      </div>
    </main>
  );
}
