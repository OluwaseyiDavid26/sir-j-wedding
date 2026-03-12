// Navbar.tsx
"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#program", label: "Order of Program" },
    { href: "#photograph", label: "Order of Photograph" },
    { href: "#reception", label: "Reception" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-purple-100"
          : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

          {/* Brand */}
          <a href="#home" className="flex flex-col leading-tight no-underline group">
            <span className={`font-cormorant italic font-semibold text-2xl tracking-wide transition-colors duration-500
              ${scrolled ? "text-purple-700" : "text-white"}`}>
              Oluwatosin{" "}
              <span className="text-yellow-500 not-italic font-bold">&</span>{" "}
              Jesutomi
            </span>
            <span className={`font-jost text-[0.6rem] font-medium tracking-[0.22em] uppercase mt-0.5 transition-colors duration-500
              ${scrolled ? "text-yellow-600" : "text-yellow-300/80"}`}>
              21 · March · 2026 &nbsp;·&nbsp; First Baptist Church
            </span>
          </a>

          {/* Ornament — only when scrolled */}
          {scrolled && (
            <div className="hidden lg:flex items-center gap-3 flex-1 mx-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
              <div className="w-1.5 h-1.5 bg-yellow-500 rotate-45 shrink-0" />
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-yellow-400/50 to-transparent" />
            </div>
          )}

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`font-jost text-[0.7rem] font-medium tracking-[0.15em] uppercase
                    px-4 py-2 relative group transition-colors duration-300 no-underline
                    ${scrolled ? "text-purple-700 hover:text-yellow-600" : "text-white/90 hover:text-yellow-300"}`}
                >
                  {l.label}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px
                    group-hover:w-[calc(100%-2rem)] transition-all duration-300
                    ${scrolled ? "bg-yellow-500" : "bg-yellow-300"}`} />
                </a>
              </li>
            ))}
            <li>
              <a
                href="#rsvp"
                className={`font-jost text-[0.7rem] font-semibold tracking-[0.2em] uppercase
                  px-5 py-2.5 ml-2 transition-all duration-300 no-underline
                  ${scrolled
                    ? "bg-purple-700 hover:bg-purple-800 text-white shadow-md"
                    : "bg-yellow-500 hover:bg-yellow-400 text-white shadow-lg"
                  }`}
              >
                RSVP
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 origin-center
              ${scrolled ? "bg-purple-700" : "bg-white"}
              ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300
              ${scrolled ? "bg-purple-700" : "bg-white"}
              ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 origin-center
              ${scrolled ? "bg-purple-700" : "bg-white"}
              ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-20 left-0 right-0 z-40
        bg-white/98 backdrop-blur-lg border-t border-purple-100 shadow-xl
        transition-all duration-300
        ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <div className="px-6 py-4 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-jost text-[0.72rem] font-medium tracking-[0.2em] uppercase
                text-purple-700 py-4 border-b border-purple-50
                hover:text-yellow-600 hover:pl-2
                transition-all duration-300 no-underline"
            >
              {l.label}
            </a>
          ))}
          
          <a
            href="#rsvp"
            onClick={() => setMenuOpen(false)}
            className="font-jost text-[0.72rem] font-semibold tracking-[0.2em] uppercase
              text-center bg-purple-700 text-white mt-4 py-3
              hover:bg-purple-800 transition-colors duration-300 no-underline"
          >
            RSVP
          </a>
        </div>
      </div>
    </>
  );
}