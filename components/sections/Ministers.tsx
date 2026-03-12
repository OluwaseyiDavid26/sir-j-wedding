"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const ministers = [
  {
    name: "Rev. Samuel Adeyemi",
    role: "Presiding Minister",
    church: "First Baptist Church, Owo",
    image: null,
  },
  {
    name: "Pastor Emmanuel Okafor",
    role: "Officiating Pastor",
    church: "Redeemed Christian Church",
    image: null,
  },
  {
    name: "Elder Joshua Taiwo",
    role: "Marriage Counselor",
    church: "First Baptist Church, Owo",
    image: null,
  },
  {
    name: "Deacon Praise Nwosu",
    role: "Prayer Minister",
    church: "Living Faith Church",
    image: null,
  },
  {
    name: "Rev. Grace Olawale",
    role: "Scripture Reader",
    church: "Baptist Convention Nigeria",
    image: null,
  },
  {
    name: "Pastor Daniel Fashola",
    role: "Exhortation Minister",
    church: "Mountain of Fire Ministry",
    image: null,
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function MinisterCard({
  minister,
  index,
}: {
  minister: (typeof ministers)[0];
  index: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="group relative"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${index * 100}ms, transform 0.7s ease ${index * 100}ms`,
      }}
    >
      {/* Card */}
      <div
        className="relative flex flex-col items-center text-center p-8 h-full
        border transition-all duration-500 overflow-hidden cursor-default"
        style={{
          borderColor: "rgba(212,175,55,0.12)",
          background: "rgba(255,255,255,0.02)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(212,175,55,0.35)";
          (e.currentTarget as HTMLDivElement).style.background =
            "rgba(212,175,55,0.04)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(212,175,55,0.12)";
          (e.currentTarget as HTMLDivElement).style.background =
            "rgba(255,255,255,0.02)";
        }}
      >
        {/* Corner accent top-left */}
        <div
          className="absolute top-0 left-0 w-6 h-6 pointer-events-none"
          style={{
            borderTop: "1px solid rgba(212,175,55,0.5)",
            borderLeft: "1px solid rgba(212,175,55,0.5)",
          }}
        />
        {/* Corner accent bottom-right */}
        <div
          className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none"
          style={{
            borderBottom: "1px solid rgba(212,175,55,0.5)",
            borderRight: "1px solid rgba(212,175,55,0.5)",
          }}
        />

        {/* Photo placeholder */}
        <div
          className="relative w-24 h-24 rounded-full mb-6 overflow-hidden shrink-0"
          style={{ border: "1px solid rgba(212,175,55,0.25)" }}
        >
          {minister.image ? (
            <Image
              src={minister.image}
              alt={minister.name}
              fill
              className="object-cover"
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-1"
              style={{ background: "rgba(107,63,160,0.15)" }}
            >
              {/* Silhouette */}
              <div
                className="w-8 h-8 rounded-full"
                style={{ background: "rgba(255,255,255,0.1)" }}
              />
              <div
                className="w-12 h-6 rounded-t-full"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
            </div>
          )}
          {/* Ring glow on hover */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
            transition-opacity duration-500"
            style={{ boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.5)" }}
          />
        </div>

        {/* Role tag */}
        <p
          className="font-jost text-[0.55rem] tracking-[0.35em] uppercase mb-2"
          style={{ color: "rgba(212,175,55,0.65)" }}
        >
          {minister.role}
        </p>

        {/* Name */}
        <h3
          className="font-cormorant italic font-light text-white leading-tight mb-3
            group-hover:text-yellow-200 transition-colors duration-300"
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
        >
          {minister.name}
        </h3>

        {/* Divider */}
        <div
          className="w-8 h-px mb-3"
          style={{ background: "rgba(212,175,55,0.3)" }}
        />

        {/* Church */}
        <p
          className="font-jost text-[0.6rem] tracking-[0.15em]"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          {minister.church}
        </p>
      </div>
    </div>
  );
}

export default function OfficiatingMinisters() {
  const { ref: headerRef, inView: headerIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
      `}</style>

      <section
        id="ministers"
        className="relative py-28 px-6 overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, #080310 0%, #0a0514 50%, #080310 100%)",
        }}
      >
        {/* Ambient glows */}
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(107,63,160,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
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
            <p
              className="font-jost text-[0.6rem] tracking-[0.5em] uppercase mb-4"
              style={{ color: "rgba(212,175,55,0.7)" }}
            >
              Blessed Servants of God
            </p>

            <div className="flex items-center gap-4 mb-5">
              <div
                className="h-px w-16"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(212,175,55,0.6))",
                }}
              />
              <div
                className="w-1.5 h-1.5 rotate-45"
                style={{ background: "#D4AF37" }}
              />
              <div
                className="h-px w-16"
                style={{
                  background:
                    "linear-gradient(to left, transparent, rgba(212,175,55,0.6))",
                }}
              />
            </div>

            <h2
              className="font-cormorant italic font-light text-white leading-none"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              Officiating Ministers
            </h2>

            <div className="flex items-center gap-3 mt-5">
              <div
                className="h-px w-10"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(212,175,55,0.4))",
                }}
              />
              <div
                className="w-1 h-1 rotate-45"
                style={{ background: "rgba(212,175,55,0.5)" }}
              />
              <p className="font-cormorant italic text-white/30 text-base tracking-widest">
                21st March 2026
              </p>
              <div
                className="w-1 h-1 rotate-45"
                style={{ background: "rgba(212,175,55,0.5)" }}
              />
              <div
                className="h-px w-10"
                style={{
                  background:
                    "linear-gradient(to left, transparent, rgba(212,175,55,0.4))",
                }}
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ministers.map((minister, i) => (
              <MinisterCard key={i} minister={minister} index={i} />
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-col items-center mt-16 gap-3">
            <div className="flex items-center gap-5">
              <div
                className="h-px w-20"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(212,175,55,0.4))",
                }}
              />
              <div className="flex gap-2 items-center">
                <div
                  className="w-1 h-1 rotate-45"
                  style={{ background: "rgba(212,175,55,0.4)" }}
                />
                <div
                  className="w-2 h-2 rotate-45"
                  style={{ background: "#D4AF37" }}
                />
                <div
                  className="w-1 h-1 rotate-45"
                  style={{ background: "rgba(212,175,55,0.4)" }}
                />
              </div>
              <div
                className="h-px w-20"
                style={{
                  background:
                    "linear-gradient(to left, transparent, rgba(212,175,55,0.4))",
                }}
              />
            </div>
            <p className="font-cormorant italic text-white/20 tracking-widest text-base">
              Vessels of Honour
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
