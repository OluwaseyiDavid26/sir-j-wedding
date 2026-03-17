// "use client";
// import Image from "next/image";
// import React from "react";

// export default function Hero() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
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
//           10%  { opacity: 0.25; }
//           90%  { opacity: 0.12; }
//           100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
//         }

//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(24px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }

//         .fade-up-1 { animation: fadeUp 1s ease forwards 0.2s; opacity: 0; }
//         .fade-up-2 { animation: fadeUp 1s ease forwards 0.5s; opacity: 0; }
//         .fade-up-3 { animation: fadeUp 1s ease forwards 0.8s; opacity: 0; }

//         .ampersand-glow {
//           text-shadow: 0 0 40px rgba(212,175,55,0.8), 0 0 80px rgba(212,175,55,0.4);
//         }

//         .name-shadow {
//           text-shadow: 0 2px 20px rgba(0,0,0,0.5), 0 0 60px rgba(0,0,0,0.3);
//         }

//         .hero-btn-outline {
//           font-family: 'Jost', sans-serif;
//           font-size: 0.65rem;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           font-weight: 500;
//           border: 1px solid rgba(255,255,255,0.4);
//           color: #fff;
//           padding: 12px 28px;
//           background: transparent;
//           text-decoration: none;
//           display: inline-block;
//           transition: background 0.3s, border-color 0.3s, color 0.3s;
//         }
//         .hero-btn-outline:hover {
//           background: rgba(255,255,255,0.08);
//           border-color: rgba(255,255,255,0.7);
//         }

//         .hero-btn-gold {
//           font-family: 'Jost', sans-serif;
//           font-size: 0.65rem;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           font-weight: 600;
//           background: #D4AF37;
//           color: #0a0514;
//           padding: 12px 28px;
//           text-decoration: none;
//           display: inline-block;
//           transition: background 0.3s;
//           box-shadow: 0 4px 20px rgba(212,175,55,0.3);
//         }
//         .hero-btn-gold:hover {
//           background: #e8c84a;
//         }

//         @keyframes countFadeUp {
//           from { opacity: 0; transform: translateY(10px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .count-block {
//           animation: countFadeUp 0.8s ease forwards;
//           opacity: 0;
//         }
//         .count-block:nth-child(1) { animation-delay: 0.4s; }
//         .count-block:nth-child(2) { animation-delay: 0.55s; }
//         .count-block:nth-child(3) { animation-delay: 0.7s; }
//         .count-block:nth-child(4) { animation-delay: 0.85s; }

//         .scroll-dot {
//           animation: scrollBounce 2s ease infinite;
//         }
//         @keyframes scrollBounce {
//           0%, 100% { transform: translateY(0); opacity: 0.4; }
//           50%       { transform: translateY(6px); opacity: 1; }
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

//         {/* Overlay */}
//         <div
//           className="absolute inset-0 z-10"
//           style={{
//             background: `linear-gradient(
//               to bottom,
//               rgba(10, 5, 20, 0.75) 0%,
//               rgba(16, 8, 32, 0.45) 30%,
//               rgba(13, 6, 24, 0.60) 70%,
//               rgba(8, 3, 16, 0.95) 100%
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

//         {/* Content Wrapper */}
//         <div className="relative z-30 flex flex-col items-center text-center w-full max-w-4xl pt-40 md:pt-52 pb-20">
//           {/* BIG BOLD COUNTDOWN */}
//           <div className="fade-up-1 mb-12">
//             <p
//               className="font-jost uppercase tracking-[0.5em] text-[#D4AF37] mb-6 opacity-90"
//               style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)" }}
//             >
//               Counting Down To The Big Day
//             </p>
//             <CountdownTimer targetDate="2026-03-21T11:00:00" />
//           </div>

//           {/* Names */}
//           <div className="fade-up-2 flex flex-col items-center">
//             <h1
//               className="font-cormorant italic font-light text-white name-shadow leading-[0.8]"
//               style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)" }}
//             >
//               Oluwatosin
//             </h1>
//             <span
//               className="font-cormorant italic font-light ampersand-glow leading-none my-0 md:-my-4"
//               style={{
//                 fontSize: "clamp(4.5rem, 12vw, 9.5rem)",
//                 color: "#D4AF37",
//               }}
//             >
//               &amp;
//             </span>
//             <h1
//               className="font-cormorant italic font-light text-white name-shadow leading-[0.8]"
//               style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)" }}
//             >
//               Jesutomi
//             </h1>
//           </div>

//           {/* Details & CTAs */}
//           <div className="fade-up-3 flex flex-col items-center gap-4 mt-12">
//             <p
//               className="font-jost tracking-[0.35em] uppercase font-bold text-white"
//               style={{ fontSize: "clamp(0.75rem, 1.8vw, 0.95rem)" }}
//             >
//               21st March 2026 &nbsp;·&nbsp; 11:00 AM
//             </p>

//             <p
//               className="font-jost tracking-[0.2em] uppercase font-medium max-w-md opacity-80"
//               style={{
//                 fontSize: "clamp(0.55rem, 1.2vw, 0.7rem)",
//                 color: "white",
//               }}
//             >
//               First Baptist Church, Okedogbon, Owo, Ondo State
//             </p>

//             <div className="flex gap-4 flex-wrap justify-center items-center mt-6">
//               <a href="#program" className="hero-btn-outline">
//                 View Programme
//               </a>
//               <a href="#rsvp" className="hero-btn-gold">
//                 RSVP Now
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
//           <div
//             className="scroll-dot w-1 h-1 rounded-full"
//             style={{ background: "rgba(212,175,55,0.6)" }}
//           />
//         </div>
//       </section>
//     </>
//   );
// }

// function CountdownTimer({ targetDate }: { targetDate: string }) {
//   const [time, setTime] = React.useState(calcTime(targetDate));

//   React.useEffect(() => {
//     const id = setInterval(() => setTime(calcTime(targetDate)), 1000);
//     return () => clearInterval(id);
//   }, [targetDate]);

//   return (
//     <div className="flex items-center justify-center gap-5 md:gap-10">
//       {[
//         { label: "Days", value: time.days },
//         { label: "Hours", value: time.hours },
//         { label: "Mins", value: time.minutes },
//         { label: "Secs", value: time.seconds },
//       ].map((unit, i) => (
//         <div key={i} className="count-block flex flex-col items-center">
//           <div
//             className="font-cormorant italic text-white leading-none font-semibold"
//             style={{
//               fontSize: "clamp(2.8rem, 8vw, 4.8rem)",
//               textShadow: "0 0 30px rgba(212,175,55,0.4)",
//             }}
//           >
//             {String(unit.value).padStart(2, "0")}
//           </div>
//           <p
//             className="font-jost uppercase tracking-[0.3em] mt-3 opacity-80"
//             style={{ fontSize: "0.6rem", color: "#D4AF37" }}
//           >
//             {unit.label}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// function calcTime(targetDate: string) {
//   const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
//   return {
//     days: Math.floor(diff / 86400000),
//     hours: Math.floor((diff % 86400000) / 3600000),
//     minutes: Math.floor((diff % 3600000) / 60000),
//     seconds: Math.floor((diff % 60000) / 1000),
//   };
// }

"use client";
import Image from "next/image";
import React from "react";

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

        @keyframes countFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .count-block {
          animation: countFadeUp 0.8s ease forwards;
          opacity: 0;
        }
        .count-block:nth-child(1) { animation-delay: 0.4s; }
        .count-block:nth-child(2) { animation-delay: 0.55s; }
        .count-block:nth-child(3) { animation-delay: 0.7s; }
        .count-block:nth-child(4) { animation-delay: 0.85s; }

        .scroll-dot {
          animation: scrollBounce 2s ease infinite;
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50%       { transform: translateY(6px); opacity: 1; }
        }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
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
              rgba(10, 5, 20, 0.75) 0%,
              rgba(16, 8, 32, 0.45) 30%,
              rgba(13, 6, 24, 0.60) 70%,
              rgba(8, 3, 16, 0.95) 100%
            )`,
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

        {/* Content Wrapper - UPDATED PADDING TO MOVE CONTENT UP */}
        <div className="relative z-30 flex flex-col items-center text-center w-full max-w-4xl pt-20 md:pt-32 pb-20">
          {/* BIG BOLD COUNTDOWN - REDUCED MARGIN BOTTOM */}
          <div className="fade-up-1 mb-8">
            <p
              className="font-jost uppercase tracking-[0.5em] text-[#D4AF37] mb-6 opacity-90"
              style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)" }}
            >
              Counting Down To The Big Day
            </p>
            <CountdownTimer targetDate="2026-03-21T11:00:00" />
          </div>

          {/* Names - ADDED pb-10 FOR SPACING */}
          <div className="fade-up-2 flex flex-col items-center pb-10">
            <h1
              className="font-cormorant italic font-light text-white name-shadow leading-[0.8]"
              style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)" }}
            >
              Oluwatosin
            </h1>
            <span
              className="font-cormorant italic font-light ampersand-glow leading-none my-0 md:-my-4"
              style={{
                fontSize: "clamp(4.5rem, 12vw, 9.5rem)",
                color: "#D4AF37",
              }}
            >
              &amp;
            </span>
            <h1
              className="font-cormorant italic font-light text-white name-shadow leading-[0.8]"
              style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)" }}
            >
              Jesutomi
            </h1>
          </div>

          {/* Details & CTAs */}
          <div className="fade-up-3 flex flex-col items-center gap-4 mt-8">
            <p
              className="font-jost tracking-[0.35em] uppercase font-bold text-white"
              style={{ fontSize: "clamp(0.75rem, 1.8vw, 0.95rem)" }}
            >
              21st March 2026 &nbsp;·&nbsp; 11:00 AM
            </p>

            <p
              className="font-jost tracking-[0.2em] uppercase font-medium max-w-md opacity-80"
              style={{
                fontSize: "clamp(0.55rem, 1.2vw, 0.7rem)",
                color: "white",
              }}
            >
              First Baptist Church, Okedogbon, Owo, Ondo State
            </p>

            <div className="flex gap-4 flex-wrap justify-center items-center mt-6">
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
          <div
            className="scroll-dot w-1 h-1 rounded-full"
            style={{ background: "rgba(212,175,55,0.6)" }}
          />
        </div>
      </section>
    </>
  );
}

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [time, setTime] = React.useState(calcTime(targetDate));

  React.useEffect(() => {
    const id = setInterval(() => setTime(calcTime(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-center gap-5 md:gap-10">
      {[
        { label: "Days", value: time.days },
        { label: "Hours", value: time.hours },
        { label: "Mins", value: time.minutes },
        { label: "Secs", value: time.seconds },
      ].map((unit, i) => (
        <div key={i} className="count-block flex flex-col items-center">
          <div
            className="font-cormorant italic text-white leading-none font-semibold"
            style={{
              fontSize: "clamp(2.8rem, 8vw, 4.8rem)",
              textShadow: "0 0 30px rgba(212,175,55,0.4)",
            }}
          >
            {String(unit.value).padStart(2, "0")}
          </div>
          <p
            className="font-jost uppercase tracking-[0.3em] mt-3 opacity-80"
            style={{ fontSize: "0.6rem", color: "#D4AF37" }}
          >
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function calcTime(targetDate: string) {
  const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}
