import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: "LizKamaruddin & Associates | Strategic Communications Advisory",
  description:
    "Boutique strategic communications advisory supporting boards, senior leaders and communication teams in reputation management, crisis preparedness, stakeholder engagement, coaching and capability development.",
  alternates: {
    canonical: "https://www.example.com"
  },
  keywords: [
    "strategic communications",
    "strategic communications advisory",
    "reputation management",
    "crisis preparedness",
    "stakeholder engagement",
    "media training",
    "leadership coaching",
    "communication capability development"
  ],
  openGraph: {
    title: "LizKamaruddin & Associates | Strategic Communications Advisory",
    description:
      "Boutique strategic communications advisory for boards, senior leaders and communication teams navigating moments that matter.",
    type: "website",
    url: "https://www.example.com",
    siteName: "LizKamaruddin & Associates",
    images: [
      {
        url: "/liz-profile.png",
        width: 1200,
        height: 630,
        alt: "LizKamaruddin & Associates strategic communications advisory"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "LizKamaruddin & Associates | Strategic Communications Advisory",
    description:
      "Strategic communications advisory for reputation, crisis preparedness, stakeholder engagement, coaching and capability development.",
    images: ["/liz-profile.png"]
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
