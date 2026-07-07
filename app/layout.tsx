import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liz Kamaruddin & Associates | Strategic Communications Advisory",
  description:
    "Boutique executive advisory and strategic communications consultancy for boards, CEOs, senior leaders and organisations.",
  keywords: [
    "strategic communications",
    "executive advisory",
    "leadership communication",
    "reputation management",
    "media training",
    "executive coaching"
  ],
  openGraph: {
    title: "Liz Kamaruddin & Associates",
    description:
      "Strategic communications, stakeholder engagement and executive presence advisory for senior leaders.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
