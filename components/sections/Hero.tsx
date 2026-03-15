// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center text-center"
//     >
//       <div>
//         <p className="text-lg">Wedding Solemnization</p>

//         <h1 className="text-5xl font-bold mt-4">Oluwatosin Ifeoluwapo</h1>

//         <h2 className="text-4xl mt-2">&</h2>

//         <h1 className="text-5xl font-bold mt-2">Jesutomi Johnson</h1>

//         <p className="mt-6 text-lg">21st March 2026 • 11AM</p>
//       </div>
//     </section>
//   );
// }

// // Hero.tsx
// "use client";
// import { useEffect } from "react";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
//         .font-cormorant { font-family: 'Cormorant Garamond', serif; }
//         .font-jost { font-family: 'Jost', sans-serif; }

//         .petal {
//           position: absolute;
//           border-radius: 50% 10% 50% 10%;
//           animation: drift linear infinite;
//           pointer-events: none;
//         }

//         @keyframes drift {
//           0%   { transform: translateY(-60px) rotate(0deg); opacity: 0; }
//           10%  { opacity: 0.3; }
//           90%  { opacity: 0.15; }
//           100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
//         }

//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(24px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }

//         .fade-up-1 { animation: fadeUp 1s ease forwards 0.2s; opacity: 0; }
//         .fade-up-2 { animation: fadeUp 1s ease forwards 0.5s; opacity: 0; }
//         .fade-up-3 { animation: fadeUp 1s ease forwards 0.8s; opacity: 0; }
//         .fade-up-4 { animation: fadeUp 1s ease forwards 1.1s; opacity: 0; }
//         .fade-up-5 { animation: fadeUp 1s ease forwards 1.4s; opacity: 0; }

//         .gold-line {
//           background: linear-gradient(to right, transparent, #D4AF37, transparent);
//         }

//         .ampersand-glow {
//           text-shadow: 0 0 40px rgba(212,175,55,0.8), 0 0 80px rgba(212,175,55,0.4);
//         }

//         .name-shadow {
//           text-shadow: 0 2px 20px rgba(0,0,0,0.5), 0 0 60px rgba(0,0,0,0.3);
//         }
//       `}</style>

//       <section
//         id="home"
//         className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
//       >
//         {/* Background Image */}
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/tt28.jpg"
//             alt="Oluwatosin & Jesutomi"
//             fill
//             priority
//             className="object-cover object-top"
//           />
//         </div>

//         {/* Overlay — pure dark with very slight warm tint, no purple fight */}
//         <div
//           className="absolute inset-0 z-10"
//           style={{
//             background: `linear-gradient(
//               to bottom,
//               rgba(10, 5, 15, 0.50) 0%,
//               rgba(10, 5, 15, 0.35) 35%,
//               rgba(10, 5, 15, 0.50) 65%,
//               rgba(10, 5, 15, 0.80) 100%
//             )`,
//           }}
//         />

//         {/* Floating Petals */}
//         {[
//           { left: "6%", size: 14, dur: "9s", delay: "0s", color: "#e8d5ff" },
//           { left: "18%", size: 9, dur: "13s", delay: "2s", color: "#D4AF37" },
//           { left: "32%", size: 18, dur: "11s", delay: "4s", color: "#d4b8f0" },
//           { left: "50%", size: 10, dur: "15s", delay: "1s", color: "#D4AF37" },
//           { left: "65%", size: 16, dur: "10s", delay: "3s", color: "#e8d5ff" },
//           { left: "78%", size: 12, dur: "14s", delay: "5s", color: "#d4b8f0" },
//           { left: "90%", size: 8, dur: "12s", delay: "0.5s", color: "#D4AF37" },
//           { left: "42%", size: 11, dur: "16s", delay: "6s", color: "#e8d5ff" },
//         ].map((p, i) => (
//           <div
//             key={i}
//             className="petal z-20"
//             style={{
//               left: p.left,
//               top: "-40px",
//               width: p.size,
//               height: p.size,
//               background: p.color,
//               animationDuration: p.dur,
//               animationDelay: p.delay,
//             }}
//           />
//         ))}

//         {/* Content */}
//         <div className="relative z-30 flex flex-col items-center text-center w-full max-w-4xl pt-20">
//           {/* Family intro */}
//           <div className="fade-up-1 flex flex-col items-center gap-1.5 mb-8">
//             <p className="font-jost text-[0.65rem] tracking-[0.4em] uppercase text-white/70 font-light">
//               The Families of Adeleke & Ayanda
//             </p>
//             <p className="font-jost text-[0.65rem] tracking-[0.35em] uppercase text-yellow-300/70 font-light">
//               Cordially invite you to the
//             </p>
//           </div>

//           {/* Wedding Solemnization */}
//           <div className="fade-up-2 flex flex-col items-center mb-8">
//             <div className="flex items-center gap-4 mb-3">
//               <div className="gold-line h-px w-12" />
//               <div className="w-1.5 h-1.5 bg-yellow-400 rotate-45" />
//               <div className="gold-line h-px w-12" />
//             </div>
//             <p className="font-cormorant italic text-yellow-300 text-lg tracking-[0.2em] font-light">
//               Wedding Solemnization
//             </p>
//             <div className="flex items-center gap-4 mt-3">
//               <div className="gold-line h-px w-12" />
//               <div className="w-1.5 h-1.5 bg-yellow-400 rotate-45" />
//               <div className="gold-line h-px w-12" />
//             </div>
//           </div>

//           {/* Names */}
//           <div className="fade-up-3 flex flex-col items-center">
//             <h1
//               className="font-cormorant italic font-light text-white name-shadow leading-[0.9]"
//               style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)" }}
//             >
//               Oluwatosin
//             </h1>
//             <span
//               className="font-cormorant italic font-light text-yellow-400 ampersand-glow leading-none my-2"
//               style={{ fontSize: "clamp(4.5rem, 12vw, 9.5rem)" }}
//             >
//               &
//             </span>
//             <h1
//               className="font-cormorant italic font-light text-white name-shadow leading-[0.9]"
//               style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)" }}
//             >
//               Jesutomi
//             </h1>
//           </div>

//           {/* Gold divider */}
//           <div className="fade-up-4 flex items-center gap-4 my-8">
//             <div className="gold-line h-px w-20" />
//             <div className="flex gap-1.5 items-center">
//               <div className="w-1 h-1 bg-yellow-400 rotate-45" />
//               <div className="w-2 h-2 bg-yellow-500 rotate-45" />
//               <div className="w-1 h-1 bg-yellow-400 rotate-45" />
//             </div>
//             <div className="gold-line h-px w-20" />
//           </div>

//           {/* Date + Location + CTAs */}
//           <div className="fade-up-5 flex flex-col items-center gap-2">
//             <p className="font-jost text-sm tracking-[0.3em] uppercase text-white font-semibold">
//               21st March 2026 &nbsp;·&nbsp; 11:00 AM
//             </p>
//             <p className="font-jost text-xs tracking-[0.2em] uppercase text-white/60 font-light">
//               First Baptist Church, Okedogbon, Owo, Ondo State
//             </p>

//             <div className="mt-7 flex gap-4 flex-wrap justify-center">
//               <a
//                 href="#program"
//                 className="font-jost text-xs tracking-[0.2em] uppercase font-medium
//                   border border-white/50 text-white px-7 py-3
//                   hover:bg-white hover:text-purple-900
//                   transition-all duration-300 no-underline"
//               >
//                 View Programme
//               </a>
//               <a
//                 href="#rsvp"
//                 className="font-jost text-xs tracking-[0.2em] uppercase font-semibold
//                   bg-yellow-500 hover:bg-yellow-400 text-white px-7 py-3
//                   transition-all duration-300 no-underline shadow-lg"
//               >
//                 RSVP Now
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Colours badge */}
//         <div className="fade-up-5 absolute bottom-6 z-30 flex items-center gap-3">
//           <div className="w-3 h-3 rounded-full bg-purple-400" />
//           <p className="font-jost text-[0.6rem] tracking-[0.25em] uppercase text-white/50 font-light">
//             Colours of the Day: Lavender & Gold
//           </p>
//           <div className="w-3 h-3 rounded-full bg-yellow-400" />
//         </div>
//       </section>
//     </>
//   );
// }
"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }

        .petal {
          position: absolute;
          border-radius: 50% 10% 50% 10%;
          animation: drift linear infinite;
          pointer-events: none;
        }

        @keyframes drift {
          0%   { transform: translateY(-60px) rotate(0deg); opacity: 0; }
          10%  { opacity: 0.25; }
          90%  { opacity: 0.12; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-up-1 { animation: fadeUp 1s ease forwards 0.2s; opacity: 0; }
        .fade-up-2 { animation: fadeUp 1s ease forwards 0.5s; opacity: 0; }
        .fade-up-3 { animation: fadeUp 1s ease forwards 0.8s; opacity: 0; }
        .fade-up-4 { animation: fadeUp 1s ease forwards 1.1s; opacity: 0; }
        .fade-up-5 { animation: fadeUp 1s ease forwards 1.4s; opacity: 0; }

        .gold-line {
          background: linear-gradient(to right, transparent, #D4AF37, transparent);
        }

        .ampersand-glow {
          text-shadow: 0 0 40px rgba(212,175,55,0.8), 0 0 80px rgba(212,175,55,0.4);
        }

        .name-shadow {
          text-shadow: 0 2px 20px rgba(0,0,0,0.5), 0 0 60px rgba(0,0,0,0.3);
        }

        .hero-btn-outline {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 500;
          border: 1px solid rgba(255,255,255,0.4);
          color: #fff;
          padding: 12px 28px;
          background: transparent;
          text-decoration: none;
          display: inline-block;
          transition: background 0.3s, border-color 0.3s, color 0.3s;
        }
        .hero-btn-outline:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.7);
        }

        .hero-btn-gold {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 600;
          background: #D4AF37;
          color: #0a0514;
          padding: 12px 28px;
          text-decoration: none;
          display: inline-block;
          transition: background 0.3s;
          box-shadow: 0 4px 20px rgba(212,175,55,0.3);
        }
        .hero-btn-gold:hover {
          background: #e8c84a;
        }

        .scroll-indicator {
          animation: bounce 2s ease infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50%       { transform: translateY(8px); opacity: 1; }
        }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pb-32"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/tt28.jpg"
            alt="Oluwatosin & Jesutomi"
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(10, 5, 20, 0.55) 0%,
              rgba(16, 8, 32, 0.40) 35%,
              rgba(13, 6, 24, 0.55) 65%,
              rgba(8, 3, 16, 0.92) 100%
            )`,
          }}
        />

        {/* Ambient glow blobs */}
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(107,63,160,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Floating Petals */}
        {[
          { left: "6%", size: 14, dur: "9s", delay: "0s", color: "#e8d5ff" },
          { left: "18%", size: 9, dur: "13s", delay: "2s", color: "#D4AF37" },
          { left: "32%", size: 18, dur: "11s", delay: "4s", color: "#d4b8f0" },
          { left: "50%", size: 10, dur: "15s", delay: "1s", color: "#D4AF37" },
          { left: "65%", size: 16, dur: "10s", delay: "3s", color: "#e8d5ff" },
          { left: "78%", size: 12, dur: "14s", delay: "5s", color: "#d4b8f0" },
          { left: "90%", size: 8, dur: "12s", delay: "0.5s", color: "#D4AF37" },
          { left: "42%", size: 11, dur: "16s", delay: "6s", color: "#e8d5ff" },
        ].map((p, i) => (
          <div
            key={i}
            className="petal z-20"
            style={{
              left: p.left,
              top: "-40px",
              width: p.size,
              height: p.size,
              background: p.color,
              animationDuration: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-30 flex flex-col items-center text-center w-full max-w-4xl pt-20">
          {/* Family intro */}
          <div className="fade-up-1 flex flex-col items-center gap-1.5 mb-8">
            <p
              className="font-jost text-[0.6rem] tracking-[0.5em] uppercase font-light"
              style={{ color: "rgba(212,175,55,0.7)" }}
            >
              The Families of Adeleke &amp; Ayanda
            </p>
            <p
              className="font-jost text-[0.6rem] tracking-[0.45em] uppercase font-light"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Cordially invite you to the
            </p>
          </div>

          {/* Wedding Solemnization */}
          <div className="fade-up-2 flex flex-col items-center mb-8">
            <div className="flex items-center gap-4 mb-3">
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
            <p
              className="font-cormorant italic font-light tracking-[0.2em]"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "rgba(212,175,55,0.85)",
              }}
            >
              Wedding Solemnization
            </p>
            <div className="flex items-center gap-4 mt-3">
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
          </div>

          {/* Names */}
          <div className="fade-up-3 flex flex-col items-center">
            <h1
              className="font-cormorant italic font-light text-white name-shadow leading-[0.9]"
              style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)" }}
            >
              Oluwatosin
            </h1>
            <span
              className="font-cormorant italic font-light ampersand-glow leading-none my-2"
              style={{
                fontSize: "clamp(4.5rem, 12vw, 9.5rem)",
                color: "#D4AF37",
              }}
            >
              &amp;
            </span>
            <h1
              className="font-cormorant italic font-light text-white name-shadow leading-[0.9]"
              style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)" }}
            >
              Jesutomi
            </h1>
          </div>

          {/* Gold divider */}
          <div className="fade-up-4 flex items-center gap-5 my-8">
            <div
              className="h-px w-20"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(212,175,55,0.5))",
              }}
            />
            <div className="flex gap-2 items-center">
              <div
                className="w-1 h-1 rotate-45"
                style={{ background: "rgba(212,175,55,0.5)" }}
              />
              <div
                className="w-2 h-2 rotate-45"
                style={{ background: "#D4AF37" }}
              />
              <div
                className="w-1 h-1 rotate-45"
                style={{ background: "rgba(212,175,55,0.5)" }}
              />
            </div>
            <div
              className="h-px w-20"
              style={{
                background:
                  "linear-gradient(to left, transparent, rgba(212,175,55,0.5))",
              }}
            />
          </div>

          {/* Date + venue + CTAs */}
          <div className="fade-up-5 flex flex-col items-center gap-3">
            <p className="font-jost text-sm tracking-[0.3em] uppercase font-semibold text-white">
              21st March 2026 &nbsp;·&nbsp; 11:00 AM
            </p>
            <p
              className="font-jost text-[0.65rem] tracking-[0.2em] uppercase font-light"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              First Baptist Church, Okedogbon, Owo, Ondo State
            </p>

            {/* Colours badge */}
            <div
              className="flex items-center gap-2.5 px-4 py-3 mt-2 border"
              style={{ borderColor: "rgba(212,175,55,0.25)" }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "#C4B7D7" }}
              />
              <p
                className="font-jost text-[0.6rem] tracking-[0.25em] uppercase font-light"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Colours of the Day:&nbsp;
                <span style={{ color: "rgba(255,255,255,0.75)" }}>
                  Lavender &amp; Gold
                </span>
              </p>
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "#D4AF37" }}
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap justify-center items-center mt-4 mb-8">
              <a href="#program" className="hero-btn-outline">
                View Programme
              </a>
              <a href="#rsvp" className="hero-btn-gold">
                RSVP Now
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
      </section>
    </>
  );
}
