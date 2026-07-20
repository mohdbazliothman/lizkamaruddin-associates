export type ClientLogoSize = "compact" | "standard" | "wide";

export type ClientExperience = {
  name: string;
  logo?: string;
  size?: ClientLogoSize;
  featured?: boolean;
};

export const clientExperience: ClientExperience[] = [
  { name: "PETRONAS", logo: "/images/clients/petronas.png", size: "compact", featured: true },
  { name: "EPF / KWSP", logo: "/images/clients/employees-provident-fund-kwsp.png", size: "wide", featured: true },
  { name: "Khazanah Nasional", logo: "/images/clients/khazanah-nasional.png", size: "standard", featured: true },
  { name: "Telekom Malaysia", logo: "/images/clients/telekom-malaysia.png", size: "wide", featured: true },
  { name: "Mastercard", logo: "/images/clients/mastercard.png", size: "standard", featured: true },
  { name: "Tabung Haji", logo: "/images/clients/tabung-haji.png", size: "compact", featured: true },
  { name: "Tenaga Nasional Berhad", logo: "/images/clients/tenaga-nasional-berhad.png", size: "wide", featured: true },
  { name: "Ministry of Tourism, Arts and Culture Malaysia", logo: "/images/clients/ministry-of-tourism-arts-and-culture-malaysia.png", size: "wide", featured: true },
  { name: "Bank Rakyat", logo: "/images/clients/bank-rakyat.png", size: "wide", featured: true },
  { name: "Prasarana Malaysia", logo: "/images/clients/prasarana-malaysia.png", size: "wide", featured: true },
  { name: "Ministry of Health Malaysia", logo: "/images/clients/ministry-of-health-malaysia.png", size: "wide", featured: true },
  { name: "Hess", logo: "/images/clients/hess.png", size: "wide", featured: true },
  { name: "ANOC Medicare & Diagnostic", logo: "/images/clients/anoc-medicare-diagnostic.png", size: "wide" },
  { name: "International Islamic Liquidity Management Corporation", logo: "/images/clients/international-islamic-liquidity-management-corporation.png", size: "wide" },
  { name: "Duopharma", logo: "/images/clients/duopharma.png", size: "standard" },
  { name: "KPS", logo: "/images/clients/kps.png", size: "wide" },
  { name: "Jentayu Sustainables", logo: "/images/clients/jentayu-sustainables.png", size: "standard" },
  { name: "Institute of Corporate Directors Malaysia", logo: "/images/clients/institute-of-corporate-directors-malaysia.png", size: "wide" },
  { name: "Ministry of Communications Malaysia", logo: "/images/clients/ministry-of-communications-malaysia.png", size: "compact" }
];

export const featuredClientExperience = clientExperience.filter((client) => client.featured);
export const additionalClientExperience = clientExperience.filter((client) => !client.featured);
