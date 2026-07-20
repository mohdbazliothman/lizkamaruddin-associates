"use client";

import { useState } from "react";

type ExpertPortraitProps = {
  src: string;
  alt: string;
  initials: string;
};

export function ExpertPortrait({ src, alt, initials }: ExpertPortraitProps) {
  const [hasImage, setHasImage] = useState(true);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-mist">
      {hasImage ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover object-[center_top] grayscale-[8%]"
          loading="lazy"
          decoding="async"
          onError={() => setHasImage(false)}
        />
      ) : null}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-[linear-gradient(145deg,#0d1a2a,#164e57)] text-white transition-opacity ${
          hasImage ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 font-display text-3xl shadow-premium">
          {initials}
        </div>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
          Portrait placeholder
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/25 to-transparent" />
    </div>
  );
}
