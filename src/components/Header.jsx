"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="container flex items-center justify-between h-14">
        <a href="#home" className="font-semibold tracking-tight">
          rikharthu
        </a>
        <ul className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:opacity-80 transition-opacity">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border px-3 py-1.5 text-sm font-medium hover:bg-gray-100"
            >
              Start a project
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

