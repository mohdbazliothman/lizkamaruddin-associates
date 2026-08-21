"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Comms Academy", href: "/comms-academy" },
  { label: "Team", href: "/team" },
  { label: "Clients", href: "/#clients" },
  { label: "Contact", href: "/#contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-line/70 bg-white/[0.78] px-4 backdrop-blur-2xl sm:px-8 lg:px-10">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 sm:h-20 sm:gap-6">
        <Link
          href="/"
          className="focus-ring flex min-w-0 flex-1 items-center"
          onClick={() => setOpen(false)}
        >
          <img
            src="/lka-logo.png"
            alt="Liz Kamaruddin & Associates"
            className="h-11 w-auto max-w-[13.5rem] shrink-0 object-contain sm:h-12 sm:max-w-[17rem]"
          />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring text-sm font-medium text-navy/70 transition hover:text-emerald"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="focus-ring hidden rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald sm:inline-flex"
          >
            Book a Consultation
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((current) => !current)}
            className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink shadow-soft lg:hidden"
          >
            {open ? (
              <X className="h-[18px] w-[18px]" aria-hidden="true" />
            ) : (
              <Menu className="h-[18px] w-[18px]" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-white/95 py-4 lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-1 px-5 sm:px-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-xl px-3 py-3 text-base font-medium text-navy/75 hover:bg-mist hover:text-emerald"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="focus-ring mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
