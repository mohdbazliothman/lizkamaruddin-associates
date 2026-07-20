"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { ClientExperience, ClientLogoSize } from "@/lib/client-experience";

type ClientLogoWallProps = {
  featuredClients: ClientExperience[];
  additionalClients: ClientExperience[];
};

const logoSizeClasses: Record<ClientLogoSize, string> = {
  compact: "max-h-11 max-w-[5.8rem] sm:max-w-[6.5rem]",
  standard: "max-h-12 max-w-[7.8rem] sm:max-w-[8.75rem]",
  wide: "max-h-12 max-w-[8.8rem] sm:max-w-[10rem]"
};

export function ClientLogoWall({ featuredClients, additionalClients }: ClientLogoWallProps) {
  const [expanded, setExpanded] = useState(false);
  const expandedId = useId();

  return (
    <div className="mt-12">
      <div className="grid grid-cols-2 border-l border-t border-line/75 bg-white/45 md:grid-cols-3 lg:grid-cols-4">
        {featuredClients.map((client, index) => (
          <Reveal key={client.name} delay={Math.min(index * 0.012, 0.12)}>
            <ClientLogoCell client={client} />
          </Reveal>
        ))}
        <div id={expandedId} className={expanded ? "contents" : "hidden"}>
          {additionalClients.map((client, index) => (
            <Reveal key={client.name} delay={Math.min(index * 0.012, 0.08)}>
              <ClientLogoCell client={client} />
            </Reveal>
          ))}
        </div>
      </div>

      {additionalClients.length > 0 ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-white/80 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-gold/55 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald"
            aria-expanded={expanded}
            aria-controls={expandedId}
            onClick={() => setExpanded((current) => !current)}
          >
            {expanded ? "Show Featured Experience" : "View Full Client Experience"}
            <ChevronDown
              className={`h-4 w-4 text-gold transition ${expanded ? "rotate-180" : "group-hover:translate-y-0.5"}`}
              aria-hidden="true"
            />
          </button>
        </div>
      ) : null}

      <div className="sr-only" aria-live="polite">
        {expanded ? "Full client experience list is expanded." : "Featured client experience list is shown."}
      </div>
    </div>
  );
}

function ClientLogoCell({ client }: { client: ClientExperience }) {
  const sizeClass = logoSizeClasses[client.size ?? "standard"];

  return (
    <div className="group flex h-32 items-center justify-center border-b border-r border-line/75 bg-white/60 px-5 py-6 transition duration-300 hover:bg-white/90 focus-within:bg-white/90 sm:h-36">
      {client.logo ? (
        <img
          src={client.logo}
          alt={client.name}
          className={`${sizeClass} h-auto w-auto object-contain opacity-75 grayscale transition duration-300 group-hover:scale-[1.015] group-hover:opacity-100 group-hover:grayscale-0`}
          loading="lazy"
        />
      ) : (
        <span className="max-w-[10rem] text-center text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.16em] text-navy/58 transition duration-300 group-hover:text-emerald sm:text-xs">
          {client.name}
        </span>
      )}
    </div>
  );
}
