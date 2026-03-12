"use client";
import { useRef, useEffect, useState } from "react";

const contacts = [
  {
    name: "Temiloluwa",
    phone: "0903 606 2169",
    raw: "2349036062169",
  },
  {
    name: "Wilson",
    phone: "0810 430 6652",
    raw: "2348104306652",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function RSVP() {
  const { ref: headerRef, inView: headerIn } = useInView(0.3);
  const { ref: contentRef, inView: contentIn } = useInView(0.2);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.3); }
          50%       { box-shadow: 0 0 0 8px rgba(212,175,55,0); }
        }
        .pulse-glow { animation: pulseGlow 2.5s ease infinite; }
      `}</style>

      <section
        id="rsvp"
        className="relative py-28 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #080310 0%, #0a0514 60%, #050208 100%)",
        }}
      >
        {/* Ambient glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(107,63,160,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.06) 0%, transparent 70%)" }} />

        <div className="max-w-3xl mx-auto relative z-10">

          {/* Header */}
          <div
            ref={headerRef}
            className="flex flex-col items-center text-center mb-16"
            style={{
              opacity: headerIn ? 1 : 0,
              transform: headerIn ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            <p className="font-jost text-[0.6rem] tracking-[0.5em] uppercase mb-4"
              style={{ color: "rgba(212,175,55,0.7)" }}>
              You Are Invited
            </p>

            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-16"
                style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.6))" }} />
              <div className="w-1.5 h-1.5 rotate-45" style={{ background: "#D4AF37" }} />
              <div className="h-px w-16"
                style={{ background: "linear-gradient(to left, transparent, rgba(212,175,55,0.6))" }} />
            </div>

            <h2
              className="font-cormorant italic font-light text-white leading-none"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              RSVP
            </h2>

            <p className="font-cormorant italic text-white/40 mt-4 leading-relaxed max-w-md"
              style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>
              Kindly reach out to confirm your attendance. We would love to celebrate this special day with you.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <div className="h-px w-10"
                style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4))" }} />
              <div className="w-1 h-1 rotate-45" style={{ background: "rgba(212,175,55,0.5)" }} />
              <p className="font-cormorant italic text-white/25 text-sm tracking-widest">
                21st March 2026 · 11:00 AM
              </p>
              <div className="w-1 h-1 rotate-45" style={{ background: "rgba(212,175,55,0.5)" }} />
              <div className="h-px w-10"
                style={{ background: "linear-gradient(to left, transparent, rgba(212,175,55,0.4))" }} />
            </div>
          </div>

          {/* Contact Cards */}
          <div
            ref={contentRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16"
            style={{
              opacity: contentIn ? 1 : 0,
              transform: contentIn ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            {contacts.map((contact, i) => (
              <div
                key={i}
                className="group relative p-8 flex flex-col items-center text-center transition-all duration-500"
                style={{
                  border: "1px solid rgba(212,175,55,0.12)",
                  background: "rgba(255,255,255,0.02)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(212,175,55,0.35)";
                  el.style.background = "rgba(212,175,55,0.04)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(212,175,55,0.12)";
                  el.style.background = "rgba(255,255,255,0.02)";
                }}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-5 h-5 pointer-events-none"
                  style={{ borderTop: "1px solid rgba(212,175,55,0.5)", borderLeft: "1px solid rgba(212,175,55,0.5)" }} />
                <div className="absolute bottom-0 right-0 w-5 h-5 pointer-events-none"
                  style={{ borderBottom: "1px solid rgba(212,175,55,0.5)", borderRight: "1px solid rgba(212,175,55,0.5)" }} />

                {/* Avatar initial */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 pulse-glow"
                  style={{ border: "1px solid rgba(212,175,55,0.3)", background: "rgba(212,175,55,0.06)" }}
                >
                  <span className="font-cormorant italic text-xl"
                    style={{ color: "rgba(212,175,55,0.8)" }}>
                    {contact.name[0]}
                  </span>
                </div>

                {/* Name */}
                <p className="font-jost text-[0.6rem] tracking-[0.35em] uppercase mb-1"
                  style={{ color: "rgba(255,255,255,0.3)" }}>
                  Contact
                </p>
                <h3 className="font-cormorant italic text-white font-light mb-4"
                  style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)" }}>
                  {contact.name}
                </h3>

                {/* Phone number */}
                <p className="font-jost font-light tracking-[0.15em] mb-6"
                  style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", color: "rgba(212,175,55,0.7)" }}>
                  {contact.phone}
                </p>

                {/* Action buttons */}
                <div className="flex gap-3 w-full">
                  {/* Call */}
                  <a
                    href={`tel:+${contact.raw}`}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5
                      font-jost text-[0.62rem] tracking-[0.2em] uppercase font-medium
                      transition-all duration-300 no-underline"
                    style={{
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.5)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "rgba(255,255,255,0.3)";
                      el.style.color = "rgba(255,255,255,0.9)";
                      el.style.background = "rgba(255,255,255,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "rgba(255,255,255,0.1)";
                      el.style.color = "rgba(255,255,255,0.5)";
                      el.style.background = "transparent";
                    }}
                  >
                    {/* Phone icon */}
                    {/* Phone icon */}
<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 10.8 19.79 19.79 0 0 1 .18 2.18 2 2 0 0 1 2.18 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 7.91a16 16 0 0 0 6.18 6.18l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
</svg>
                    Call
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${contact.raw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5
                      font-jost text-[0.62rem] tracking-[0.2em] uppercase font-medium
                      transition-all duration-300 no-underline"
                    style={{
                      border: "1px solid rgba(212,175,55,0.25)",
                      color: "rgba(212,175,55,0.7)",
                      background: "rgba(212,175,55,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = "rgba(212,175,55,0.12)";
                      el.style.borderColor = "rgba(212,175,55,0.5)";
                      el.style.color = "#D4AF37";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = "rgba(212,175,55,0.05)";
                      el.style.borderColor = "rgba(212,175,55,0.25)";
                      el.style.color = "rgba(212,175,55,0.7)";
                    }}
                  >
                    {/* WhatsApp icon */}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Venue info */}
          <div
            className="flex flex-col items-center text-center p-8 relative"
            style={{
              border: "1px solid rgba(255,255,255,0.05)",
              background: "rgba(255,255,255,0.01)",
              opacity: contentIn ? 1 : 0,
              transform: contentIn ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-5 h-5 pointer-events-none"
              style={{ borderTop: "1px solid rgba(212,175,55,0.3)", borderLeft: "1px solid rgba(212,175,55,0.3)" }} />
            <div className="absolute top-0 right-0 w-5 h-5 pointer-events-none"
              style={{ borderTop: "1px solid rgba(212,175,55,0.3)", borderRight: "1px solid rgba(212,175,55,0.3)" }} />
            <div className="absolute bottom-0 left-0 w-5 h-5 pointer-events-none"
              style={{ borderBottom: "1px solid rgba(212,175,55,0.3)", borderLeft: "1px solid rgba(212,175,55,0.3)" }} />
            <div className="absolute bottom-0 right-0 w-5 h-5 pointer-events-none"
              style={{ borderBottom: "1px solid rgba(212,175,55,0.3)", borderRight: "1px solid rgba(212,175,55,0.3)" }} />

            <p className="font-jost text-[0.6rem] tracking-[0.4em] uppercase mb-4"
              style={{ color: "rgba(212,175,55,0.6)" }}>
              Venue
            </p>

            <h3 className="font-cormorant italic font-light text-white mb-2"
              style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)" }}>
              First Baptist Church
            </h3>

            <p className="font-jost text-[0.65rem] tracking-[0.15em] leading-loose"
              style={{ color: "rgba(255,255,255,0.3)" }}>
              Okedogbon, Owo, Ondo State
            </p>

            <div className="flex items-center gap-4 my-5">
              <div className="h-px w-12"
                style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.3))" }} />
              <div className="w-1 h-1 rotate-45" style={{ background: "rgba(212,175,55,0.4)" }} />
              <div className="h-px w-12"
                style={{ background: "linear-gradient(to left, transparent, rgba(212,175,55,0.3))" }} />
            </div>

            <p className="font-jost text-[0.65rem] tracking-[0.25em] uppercase"
              style={{ color: "rgba(212,175,55,0.5)" }}>
              21st March 2026 &nbsp;·&nbsp; 11:00 AM
            </p>
          </div>

          {/* Footer */}
          <div className="flex flex-col items-center mt-16 gap-3">
            <div className="flex items-center gap-5">
              <div className="h-px w-20"
                style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4))" }} />
              <div className="flex gap-2 items-center">
                <div className="w-1 h-1 rotate-45" style={{ background: "rgba(212,175,55,0.4)" }} />
                <div className="w-2 h-2 rotate-45" style={{ background: "#D4AF37" }} />
                <div className="w-1 h-1 rotate-45" style={{ background: "rgba(212,175,55,0.4)" }} />
              </div>
              <div className="h-px w-20"
                style={{ background: "linear-gradient(to left, transparent, rgba(212,175,55,0.4))" }} />
            </div>
            <p className="font-cormorant italic text-white/20 tracking-widest text-base">
              We can't wait to celebrate with you
            </p>
          </div>

        </div>
      </section>
    </>
  );
}