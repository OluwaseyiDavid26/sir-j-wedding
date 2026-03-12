"use client";
import { useRef, useEffect, useState } from "react";

const receptionProgram = [
  {
    time: "2:00 PM",
    title: "Arrival of Guests",
    description: "Guests are received and seated with refreshments",
    category: "arrival",
  },
  {
    time: "2:30 PM",
    title: "Arrival of the Bridal Train",
    description: "Grand entrance of the bridal party",
    category: "entrance",
  },
  {
    time: "2:45 PM",
    title: "Arrival of the Couple",
    description: "Grand entrance of Mr & Mrs Johnson",
    category: "entrance",
  },
  {
    time: "3:00 PM",
    title: "Opening Prayer",
    description: "Blessing over the reception",
    category: "program",
  },
  {
    time: "3:10 PM",
    title: "Introduction of Family",
    description: "Both families formally introduced",
    category: "program",
  },
  {
    time: "3:30 PM",
    title: "Cutting of the Cake",
    description: "The couple's first act together as one",
    category: "highlight",
  },
  {
    time: "3:45 PM",
    title: "First Dance",
    description: "The couple's first dance as husband and wife",
    category: "highlight",
  },
  {
    time: "4:00 PM",
    title: "Serving of Food & Drinks",
    description: "Guests are served a sumptuous meal",
    category: "dining",
  },
  {
    time: "4:30 PM",
    title: "Goodwill Messages",
    description: "Family and friends share heartfelt messages",
    category: "program",
  },
  {
    time: "5:00 PM",
    title: "Entertainment",
    description: "Live music and performances",
    category: "highlight",
  },
  {
    time: "5:45 PM",
    title: "Spraying & Dancing",
    description: "Celebrate the couple with dance and spraying",
    category: "highlight",
  },
  {
    time: "6:30 PM",
    title: "Closing Prayer",
    description: "Thanksgiving and benediction",
    category: "program",
  },
  {
    time: "7:00 PM",
    title: "Departure of Couple",
    description: "The couple departs to begin their new journey",
    category: "departure",
  },
];

const categoryColors: Record<string, string> = {
  arrival: "rgba(107,63,160,0.7)",
  entrance: "#D4AF37",
  program: "rgba(255,255,255,0.3)",
  highlight: "#D4AF37",
  dining: "rgba(107,63,160,0.7)",
  departure: "rgba(212,175,55,0.5)",
};

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

function ReceptionItem({
  item,
  index,
  isLast,
}: {
  item: (typeof receptionProgram)[0];
  index: number;
  isLast: boolean;
}) {
  const { ref, inView } = useInView();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-[1fr_40px_1fr] md:grid-cols-[1fr_60px_1fr] items-start gap-0"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
      }}
    >
      {/* Left side */}
      <div className={`pb-8 ${isLeft ? "pr-6 md:pr-10 text-right" : ""}`}>
        {isLeft && <ReceptionCard item={item} align="right" />}
        {!isLeft && (
          <div
            className="font-jost text-[0.6rem] tracking-[0.3em] uppercase pt-2 text-right"
            style={{ color: "rgba(212,175,55,0.4)" }}
          >
            {item.time}
          </div>
        )}
      </div>

      {/* Centre timeline */}
      <div className="flex flex-col items-center relative">
        {/* Dot */}
        <div
          className="relative z-10 w-3 h-3 rounded-full mt-2 shrink-0 transition-all duration-500"
          style={{
            background: categoryColors[item.category],
            boxShadow: `0 0 12px ${categoryColors[item.category]}`,
          }}
        />
        {/* Line */}
        {!isLast && (
          <div
            className="flex-1 w-px mt-1"
            style={{
              background:
                "linear-gradient(to bottom, rgba(212,175,55,0.2), rgba(212,175,55,0.05))",
              minHeight: "80px",
            }}
          />
        )}
      </div>

      {/* Right side */}
      <div className={`pb-8 ${!isLeft ? "pl-6 md:pl-10" : ""}`}>
        {!isLeft && <ReceptionCard item={item} align="left" />}
        {isLeft && (
          <div
            className="font-jost text-[0.6rem] tracking-[0.3em] uppercase pt-2"
            style={{ color: "rgba(212,175,55,0.4)" }}
          >
            {item.time}
          </div>
        )}
      </div>
    </div>
  );
}

function ReceptionCard({
  item,
  align,
}: {
  item: (typeof receptionProgram)[0];
  align: "left" | "right";
}) {
  return (
    <div
      className="group relative p-5 transition-all duration-500 cursor-default"
      style={{
        border: "1px solid rgba(255,255,255,0.05)",
        background: "rgba(255,255,255,0.02)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "rgba(212,175,55,0.25)";
        el.style.background = "rgba(212,175,55,0.03)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "rgba(255,255,255,0.05)";
        el.style.background = "rgba(255,255,255,0.02)";
      }}
    >
      {/* Corner accents */}
      {align === "left" ? (
        <>
          <div
            className="absolute top-0 left-0 w-4 h-4 pointer-events-none"
            style={{
              borderTop: "1px solid rgba(212,175,55,0.4)",
              borderLeft: "1px solid rgba(212,175,55,0.4)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-4 h-4 pointer-events-none"
            style={{
              borderBottom: "1px solid rgba(212,175,55,0.4)",
              borderRight: "1px solid rgba(212,175,55,0.4)",
            }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute top-0 right-0 w-4 h-4 pointer-events-none"
            style={{
              borderTop: "1px solid rgba(212,175,55,0.4)",
              borderRight: "1px solid rgba(212,175,55,0.4)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-4 h-4 pointer-events-none"
            style={{
              borderBottom: "1px solid rgba(212,175,55,0.4)",
              borderLeft: "1px solid rgba(212,175,55,0.4)",
            }}
          />
        </>
      )}

      <p
        className="font-cormorant font-light text-white/80 leading-tight mb-1
          group-hover:text-white transition-colors duration-300"
        style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}
      >
        {item.title}
      </p>
      <p
        className="font-jost text-[0.6rem] tracking-[0.1em] leading-relaxed"
        style={{ color: "rgba(255,255,255,0.25)" }}
      >
        {item.description}
      </p>
    </div>
  );
}

export default function ReceptionProgramme() {
  const { ref: headerRef, inView: headerIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
      `}</style>

      <section
        id="reception"
        className="relative py-28 px-6 overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, #080310 0%, #0d0618 50%, #080310 100%)",
        }}
      >
        {/* Ambient glows */}
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(107,63,160,0.1) 0%, transparent 70%)",
            transform: "translateX(40%)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
            transform: "translateX(-40%)",
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <div
            ref={headerRef}
            className="flex flex-col items-center text-center mb-20"
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
              Join Us in Celebration
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
              Reception Programme
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

          {/* Timeline */}
          <div className="flex flex-col">
            {receptionProgram.map((item, i) => (
              <ReceptionItem
                key={i}
                item={item}
                index={i}
                isLast={i === receptionProgram.length - 1}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-col items-center mt-8 gap-3">
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
              Let the celebration begin
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
