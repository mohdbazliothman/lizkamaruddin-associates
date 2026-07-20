export type ClientLogoSize = "compact" | "standard" | "wide";

export type ClientExperience = {
  name: string;
  logo?: string;
  size?: ClientLogoSize;
  featured?: boolean;
};

export const clientExperience: ClientExperience[] = [
  { name: "PETRONAS", logo: "/client-logos/petronas.jpg", size: "compact", featured: true },
  { name: "EPF / KWSP", logo: "/client-logos/kwsp.jpg", size: "wide", featured: true },
  { name: "Khazanah Nasional", logo: "/client-logos/khazanah.jpg", size: "standard", featured: true },
  { name: "Telekom Malaysia", logo: "/client-logos/telekom-malaysia.jpg", size: "wide", featured: true },
  { name: "Mastercard", logo: "/client-logos/mastercard.png", size: "standard", featured: true },
  { name: "Tabung Haji", logo: "/client-logos/tabung-haji.webp", size: "compact", featured: true },
  { name: "Tenaga Nasional Berhad", logo: "/client-logos/tenaga-nasional-berhad.png", size: "wide", featured: true },
  { name: "Ministry of Tourism, Arts and Culture Malaysia", logo: "/client-logos/motac.jpg", size: "wide", featured: true },
  { name: "Bank Rakyat", logo: "/client-logos/bank-rakyat.png", size: "wide", featured: true },
  { name: "Prasarana Malaysia", logo: "/client-logos/prasarana.png", size: "wide", featured: true },
  { name: "Ministry of Health Malaysia", logo: "/client-logos/ministry-of-health.jfif", size: "wide", featured: true },
  { name: "Hess", logo: "/client-logos/hess.webp", size: "wide", featured: true },
  { name: "ANOC Medicare & Diagnostic", logo: "/client-logos/anoc.jpg", size: "wide" },
  { name: "International Islamic Liquidity Management Corporation", logo: "/client-logos/iilm.png", size: "wide" },
  { name: "Duopharma", logo: "/client-logos/duopharma.jfif", size: "standard" },
  { name: "KPS", logo: "/client-logos/kps.png", size: "wide" },
  { name: "Jentayu Sustainables", logo: "/client-logos/jentayu-sustainables.png", size: "standard" },
  { name: "Institute of Corporate Directors Malaysia", logo: "/client-logos/icdm.jpg", size: "wide" },
  { name: "Ministry of Communications Malaysia", logo: "/client-logos/ministry-of-communications.png", size: "compact" }
];

export const featuredClientExperience = clientExperience.filter((client) => client.featured);
export const additionalClientExperience = clientExperience.filter((client) => !client.featured);
