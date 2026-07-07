"use client";

import { useState } from "react";

export function PortraitImage() {
  const [hasImage, setHasImage] = useState(true);

  return (
    <>
      {hasImage ? (
        <img
          src="/liz-profile.png"
          alt="Liz Kamaruddin professional portrait"
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setHasImage(false)}
        />
      ) : null}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity ${
          hasImage ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 font-display text-4xl shadow-premium">
          LK
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
          Portrait placeholder
        </p>
      </div>
    </>
  );
}
