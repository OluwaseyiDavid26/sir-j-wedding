"use client";
import { useState, useRef, useEffect } from "react";

const hymns = [
  {
    id: "processional",
    label: "Processional Hymn",
    tag: "Opening",
    title: "Great Is Thy Faithfulness",
    verses: [
      {
        label: "Verse 1",
        lines: [
          "Great is Thy faithfulness, O God my Father,",
          "There is no shadow of turning with Thee;",
          "Thou changest not, Thy compassions, they fail not",
          "As Thou hast been, Thou forever will be.",
        ],
      },
      {
        label: "Chorus",
        lines: [
          "Great is Thy faithfulness! Great is Thy faithfulness!",
          "Morning by morning new mercies I see;",
          "All I have needed Thy hand hath provided,",
          "Great is Thy faithfulness, Lord, unto me!",
        ],
      },
      {
        label: "Verse 2",
        lines: [
          "Summer and winter and springtime and harvest,",
          "Sun, moon and stars in their courses above",
          "Join with all nature in manifold witness",
          "To Thy great faithfulness, mercy and love.",
        ],
      },
      {
        label: "Verse 3",
        lines: [
          "Pardon for sin and a peace that endureth,",
          "Thine own dear presence to cheer and to guide;",
          "Strength for today and bright hope for tomorrow,",
          "Blessings all mine, with ten thousand beside!",
        ],
      },
    ],
  },
  {
    id: "recessional",
    label: "Recessional Hymn",
    tag: "Closing",
    title: "To God Be the Glory",
    verses: [
      {
        label: "Verse 1",
        lines: [
          "To God be the glory, great things He hath taught us,",
          "Great things He hath done, and great our rejoicing",
          "Through Jesus the Son; but purer, and higher,",
          "And greater will be our wonder, our transport, when Jesus we see.",
        ],
      },
      {
        label: "Chorus",
        lines: [
          "Praise the Lord, praise the Lord,",
          "Let the earth hear His voice!",
          "Praise the Lord, praise the Lord,",
          "Let the people rejoice!",
          "O come to the Father, through Jesus the Son,",
          "And give Him the glory, great things He hath done.",
        ],
      },
      {
        label: "Verse 2",
        lines: [
          "O perfect redemption, the purchase of blood,",
          "To every believer the promise of God;",
          "The vilest offender who truly believes,",
          "That moment from Jesus a pardon receives.",
        ],
      },
      {
        label: "Verse 3",
        lines: [
          "Great things He hath taught us, great things He hath done,",
          "And great our rejoicing through Jesus the Son;",
          "But purer, and higher, and greater will be",
          "Our wonder, our transport, when Jesus we see.",
        ],
      },
    ],
  },
];

function useInView(threshold = 0.2) {
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

export default function Hymns() {
  const [active, setActive] = useState<"processional" | "recessional">(
    "processional",
  );
  const { ref: headerRef, inView: headerIn } = useInView(0.3);
  const activeHymn = hymns.find((h) => h.id === active)!;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }

        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hymn-enter { animation: fadeSlide 0.5s ease forwards; }
      `}</style>

      <section
        id="hymns"
        className="relative py-28 px-6 overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, #080310 0%, #0d0618 50%, #080310 100%)`,
        }}
      >
        {/* Ambient glows */}
        <div
          className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
            transform: "translateX(-50%)",
          }}
        />
        <div
          className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(107,63,160,0.1) 0%, transparent 70%)",
            transform: "translateX(50%)",
          }}
        />

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Header */}
          <div
            ref={headerRef}
            className="flex flex-col items-center text-center mb-14"
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
              Songs of Worship
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
              Hymns
            </h2>

            <p
              className="font-jost text-[0.62rem] tracking-[0.3em] uppercase mt-4"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Processional & Recessional
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center justify-center mb-12">
            <div
              className="flex relative border rounded-sm overflow-hidden"
              style={{ borderColor: "rgba(212,175,55,0.2)" }}
            >
              {hymns.map((h) => (
                <button
                  key={h.id}
                  onClick={() =>
                    setActive(h.id as "processional" | "recessional")
                  }
                  className="relative font-jost text-[0.65rem] tracking-[0.2em] uppercase px-8 py-3
                    transition-all duration-400 cursor-pointer border-none outline-none"
                  style={{
                    background:
                      active === h.id
                        ? "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))"
                        : "transparent",
                    color:
                      active === h.id ? "#D4AF37" : "rgba(255,255,255,0.35)",
                    borderRight:
                      h.id === "processional"
                        ? "1px solid rgba(212,175,55,0.2)"
                        : "none",
                  }}
                >
                  {/* Active indicator */}
                  {active === h.id && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{
                        background:
                          "linear-gradient(to right, transparent, #D4AF37, transparent)",
                      }}
                    />
                  )}
                  <span
                    className="block text-[0.55rem] tracking-[0.3em] mb-0.5"
                    style={{
                      color:
                        active === h.id
                          ? "rgba(212,175,55,0.5)"
                          : "rgba(255,255,255,0.15)",
                    }}
                  >
                    {h.tag}
                  </span>
                  {h.label}
                </button>
              ))}
            </div>
          </div>

          {/* Hymn Content */}
          <div key={active} className="hymn-enter">
            {/* Hymn title */}
            <div className="flex flex-col items-center mb-10">
              <h3
                className="font-cormorant italic text-white text-center leading-tight"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 300,
                }}
              >
                {activeHymn.title}
              </h3>
              <div className="flex items-center gap-3 mt-3">
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
                <div
                  className="h-px w-10"
                  style={{
                    background:
                      "linear-gradient(to left, transparent, rgba(212,175,55,0.4))",
                  }}
                />
              </div>
            </div>

            {/* Verses */}
            <div className="flex flex-col gap-8">
              {activeHymn.verses.map((verse, vi) => (
                <div
                  key={vi}
                  className="relative pl-6"
                  style={{
                    borderLeft:
                      verse.label === "Chorus"
                        ? "1px solid rgba(212,175,55,0.3)"
                        : "1px solid rgba(255,255,255,0.07)",
                    opacity: 0,
                    animation: `fadeSlide 0.5s ease forwards ${vi * 120}ms`,
                  }}
                >
                  {/* Verse label */}
                  <p
                    className="font-jost text-[0.58rem] tracking-[0.35em] uppercase mb-3"
                    style={{
                      color:
                        verse.label === "Chorus"
                          ? "rgba(212,175,55,0.7)"
                          : "rgba(255,255,255,0.25)",
                    }}
                  >
                    {verse.label}
                  </p>

                  {/* Lines */}
                  {verse.lines.map((line, li) => (
                    <p
                      key={li}
                      className="font-cormorant leading-relaxed"
                      style={{
                        fontSize: "clamp(1rem, 2vw, 1.15rem)",
                        color:
                          verse.label === "Chorus"
                            ? "rgba(255,255,255,0.9)"
                            : "rgba(255,255,255,0.65)",
                        fontStyle:
                          verse.label === "Chorus" ? "italic" : "normal",
                        fontWeight: verse.label === "Chorus" ? 400 : 300,
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
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
              Sing unto the Lord a new song
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
