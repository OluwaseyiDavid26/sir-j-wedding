// "use client";
// import { useEffect, useRef, useState } from "react";

// const programs = [
//   { number: "01", title: "Procession Hymn" },
//   { number: "02", title: "Call to Worship" },
//   { number: "03", title: "Opening Prayer" },
//   { number: "04", title: "Exhortation and Declaration" },
//   { number: "05", title: "Joining and Blessing" },
//   { number: "06", title: "Prayer of Dedication" },
//   { number: "07", title: "Special Offering for the New Church" },
//   { number: "08", title: "Scripture Reading" },
//   { number: "09", title: "Choir Rendition" },
//   { number: "10", title: "Message" },
//   { number: "11", title: "Signing of the Marriage Certificate" },
//   { number: "12", title: "Thanksgiving / Offering" },
//   { number: "13", title: "Presentation of Marriage Certificate" },
//   { number: "14", title: "Greetings and Announcement" },
//   { number: "15", title: "Vote of Thanks" },
//   { number: "16", title: "Prayer and Benediction" },
//   { number: "17", title: "Recessional Hymn" },
// ];

// function useInView(threshold = 0.15) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) setInView(true);
//       },
//       { threshold },
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);
//   return { ref, inView };
// }

// function ProgramItem({
//   item,
//   side,
//   delay,
// }: {
//   item: { number: string; title: string };
//   side: "left" | "right";
//   delay: number;
// }) {
//   const { ref, inView } = useInView();

//   return (
//     <div
//       ref={ref}
//       className="group relative"
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView
//           ? "translateX(0)"
//           : side === "left"
//             ? "translateX(-30px)"
//             : "translateX(30px)",
//         transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
//       }}
//     >
//       {/* Card */}
//       <div
//         className={`relative flex items-center gap-5 py-4 px-6 border-b border-white/5
//         hover:bg-white/3 transition-all duration-500 cursor-default
//         ${side === "right" ? "flex-row-reverse text-right" : ""}`}
//       >
//         {/* Number */}
//         <span
//           className="font-jost shrink-0 text-[0.6rem] tracking-[0.2em] font-medium"
//           style={{ color: "rgba(212,175,55,0.5)" }}
//         >
//           {item.number}
//         </span>

//         {/* Dot */}
//         <div
//           className="shrink-0 w-1.5 h-1.5 rounded-full bg-white/20
//           group-hover:bg-yellow-400 transition-colors duration-500"
//         />

//         {/* Title */}
//         <p
//           className="font-cormorant text-white/80 group-hover:text-white
//           transition-colors duration-300 leading-snug"
//           style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", fontWeight: 400 }}
//         >
//           {item.title}
//         </p>

//         {/* Hover gold line */}
//         <div
//           className={`absolute bottom-0 h-px bg-gradient-to-r from-yellow-400/0 via-yellow-400/60 to-yellow-400/0
//             w-0 group-hover:w-full transition-all duration-700`}
//         />
//       </div>
//     </div>
//   );
// }

// export default function OrderOfProgram() {
//   const left = programs.filter((_, i) => i % 2 === 0);
//   const right = programs.filter((_, i) => i % 2 !== 0);
//   const { ref: headerRef, inView: headerIn } = useInView(0.3);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');
//         .font-cormorant { font-family: 'Cormorant Garamond', serif; }
//         .font-jost { font-family: 'Jost', sans-serif; }
//         .hover\\:bg-white\\/3:hover { background-color: rgba(255,255,255,0.03); }
//       `}</style>

//       <section
//         id="program"
//         className="relative py-28 px-6 overflow-hidden"
//         style={{
//           background: `linear-gradient(
//             to bottom,
//             #0a0514 0%,
//             #100820 40%,
//             #0d0618 70%,
//             #080310 100%
//           )`,
//         }}
//       >
//         {/* Ambient glow blobs */}
//         <div
//           className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(107,63,160,0.12) 0%, transparent 70%)",
//           }}
//         />
//         <div
//           className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
//           }}
//         />

//         <div className="max-w-6xl mx-auto relative z-10">
//           {/* ── Header ── */}
//           <div
//             ref={headerRef}
//             className="flex flex-col items-center text-center mb-20"
//             style={{
//               opacity: headerIn ? 1 : 0,
//               transform: headerIn ? "translateY(0)" : "translateY(20px)",
//               transition: "opacity 0.9s ease, transform 0.9s ease",
//             }}
//           >
//             <p
//               className="font-jost text-[0.6rem] tracking-[0.5em] uppercase mb-4"
//               style={{ color: "rgba(212,175,55,0.7)" }}
//             >
//               First Baptist Church · Okedogbon · Owo · Ondo State
//             </p>

//             {/* Ornament */}
//             <div className="flex items-center gap-4 mb-5">
//               <div
//                 className="h-px w-16"
//                 style={{
//                   background:
//                     "linear-gradient(to right, transparent, rgba(212,175,55,0.6))",
//                 }}
//               />
//               <div
//                 className="w-1.5 h-1.5 rotate-45"
//                 style={{ background: "#D4AF37" }}
//               />
//               <div
//                 className="h-px w-16"
//                 style={{
//                   background:
//                     "linear-gradient(to left, transparent, rgba(212,175,55,0.6))",
//                 }}
//               />
//             </div>

//             <h2
//               className="font-cormorant italic font-light text-white leading-none"
//               style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
//             >
//               Order of Program
//             </h2>

//             <div className="flex items-center gap-3 mt-5">
//               <div
//                 className="h-px w-10"
//                 style={{
//                   background:
//                     "linear-gradient(to right, transparent, rgba(212,175,55,0.4))",
//                 }}
//               />
//               <div
//                 className="w-1 h-1 rotate-45"
//                 style={{ background: "rgba(212,175,55,0.5)" }}
//               />
//               <p className="font-cormorant italic text-white/30 text-base tracking-widest">
//                 21st March 2026
//               </p>
//               <div
//                 className="w-1 h-1 rotate-45"
//                 style={{ background: "rgba(212,175,55,0.5)" }}
//               />
//               <div
//                 className="h-px w-10"
//                 style={{
//                   background:
//                     "linear-gradient(to left, transparent, rgba(212,175,55,0.4))",
//                 }}
//               />
//             </div>
//           </div>

//           {/* ── Two Column Grid ── */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
//             {/* Centre divider line */}
//             <div
//               className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none"
//               style={{
//                 background:
//                   "linear-gradient(to bottom, transparent, rgba(212,175,55,0.2) 20%, rgba(212,175,55,0.2) 80%, transparent)",
//               }}
//             />

//             {/* Left column */}
//             <div className="flex flex-col md:pr-12 border-r border-white/5">
//               {left.map((item, i) => (
//                 <ProgramItem
//                   key={item.number}
//                   item={item}
//                   side="left"
//                   delay={i * 100}
//                 />
//               ))}
//             </div>

//             {/* Right column */}
//             <div className="flex flex-col md:pl-12 md:mt-10">
//               {right.map((item, i) => (
//                 <ProgramItem
//                   key={item.number}
//                   item={item}
//                   side="right"
//                   delay={i * 100}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* ── Footer ── */}
//           <div className="flex flex-col items-center mt-20 gap-4">
//             <div className="flex items-center gap-5">
//               <div
//                 className="h-px w-20"
//                 style={{
//                   background:
//                     "linear-gradient(to right, transparent, rgba(212,175,55,0.5))",
//                 }}
//               />
//               <div className="flex gap-2 items-center">
//                 <div
//                   className="w-1 h-1 rotate-45"
//                   style={{ background: "rgba(212,175,55,0.5)" }}
//                 />
//                 <div
//                   className="w-2 h-2 rotate-45"
//                   style={{ background: "#D4AF37" }}
//                 />
//                 <div
//                   className="w-1 h-1 rotate-45"
//                   style={{ background: "rgba(212,175,55,0.5)" }}
//                 />
//               </div>
//               <div
//                 className="h-px w-20"
//                 style={{
//                   background:
//                     "linear-gradient(to left, transparent, rgba(212,175,55,0.5))",
//                 }}
//               />
//             </div>
//             <p className="font-cormorant italic text-white/25 tracking-widest text-lg">
//               To God be the Glory
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


"use client";
import { useEffect, useRef, useState } from "react";

const programs = [
  { number: "01", title: "Procession Hymn" },
  { number: "02", title: "Call to Worship" },
  { number: "03", title: "Opening Prayer" },
  { number: "04", title: "Exhortation and Declaration" },
  { number: "05", title: "Joining and Blessing" },
  { number: "06", title: "Prayer of Dedication" },
  { number: "07", title: "Special Offering for the New Church" },
  { number: "08", title: "Scripture Reading" },
  { number: "09", title: "Choir Rendition" },
  { number: "10", title: "Message" },
  { number: "11", title: "Signing of the Marriage Certificate" },
  { number: "12", title: "Thanksgiving / Offering" },
  { number: "13", title: "Presentation of Marriage Certificate" },
  { number: "14", title: "Greetings and Announcement" },
  { number: "15", title: "Vote of Thanks" },
  { number: "16", title: "Prayer and Benediction" },
  { number: "17", title: "Recessional Hymn" },
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

function ProgramItem({
  item,
  side,
  delay,
}: {
  item: { number: string; title: string };
  side: "left" | "right";
  delay: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="group relative"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-20px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      <div
        className={`relative flex items-center gap-4 py-4 px-4 border-b border-white/5
          transition-all duration-500 cursor-default
          md:${side === "right" ? "flex-row-reverse text-right" : ""}`}
      >
        {/* Number */}
        <span
          className="font-jost shrink-0 text-[0.58rem] tracking-[0.2em] font-medium w-6 text-center"
          style={{ color: "rgba(212,175,55,0.5)" }}
        >
          {item.number}
        </span>

        {/* Dot */}
        <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-white/20
          group-hover:bg-yellow-400 transition-colors duration-500" />

        {/* Title */}
        <p
          className="font-cormorant text-white/80 group-hover:text-white
            transition-colors duration-300 leading-snug text-left"
          style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)", fontWeight: 400 }}
        >
          {item.title}
        </p>

        {/* Hover gold line */}
        <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
          style={{ background: "linear-gradient(to right, rgba(212,175,55,0), rgba(212,175,55,0.6), rgba(212,175,55,0))" }} />
      </div>
    </div>
  );
}

export default function OrderOfProgram() {
  const left = programs.filter((_, i) => i % 2 === 0);
  const right = programs.filter((_, i) => i % 2 !== 0);
  const { ref: headerRef, inView: headerIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
      `}</style>

      <section
        id="program"
        className="relative py-28 px-6 overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, #0a0514 0%, #100820 40%, #0d0618 70%, #080310 100%)`,
        }}
      >
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(107,63,160,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)" }} />

        <div className="max-w-6xl mx-auto relative z-10">

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
            <p className="font-jost text-[0.6rem] tracking-[0.5em] uppercase mb-4"
              style={{ color: "rgba(212,175,55,0.7)" }}>
              First Baptist Church · Okedogbon · Owo · Ondo State
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
              Order of Program
            </h2>

            <div className="flex items-center gap-3 mt-5">
              <div className="h-px w-10"
                style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4))" }} />
              <div className="w-1 h-1 rotate-45" style={{ background: "rgba(212,175,55,0.5)" }} />
              <p className="font-cormorant italic text-white/30 text-base tracking-widest">
                21st March 2026
              </p>
              <div className="w-1 h-1 rotate-45" style={{ background: "rgba(212,175,55,0.5)" }} />
              <div className="h-px w-10"
                style={{ background: "linear-gradient(to left, transparent, rgba(212,175,55,0.4))" }} />
            </div>
          </div>

          {/* ── Mobile: Single ordered list ── */}
          <div className="md:hidden flex flex-col">
            {programs.map((item, i) => (
              <ProgramItem key={item.number} item={item} side="left" delay={i * 60} />
            ))}
          </div>

          {/* ── Desktop: Two Column Grid ── */}
          <div className="hidden md:grid grid-cols-2 gap-0 relative">
            {/* Centre divider line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(212,175,55,0.2) 20%, rgba(212,175,55,0.2) 80%, transparent)" }} />

            {/* Left column */}
            <div className="flex flex-col pr-12 border-r border-white/5">
              {left.map((item, i) => (
                <ProgramItem key={item.number} item={item} side="left" delay={i * 100} />
              ))}
            </div>

            {/* Right column */}
            <div className="flex flex-col pl-12 mt-10">
              {right.map((item, i) => (
                <ProgramItem key={item.number} item={item} side="right" delay={i * 100} />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col items-center mt-20 gap-4">
            <div className="flex items-center gap-5">
              <div className="h-px w-20"
                style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.5))" }} />
              <div className="flex gap-2 items-center">
                <div className="w-1 h-1 rotate-45" style={{ background: "rgba(212,175,55,0.5)" }} />
                <div className="w-2 h-2 rotate-45" style={{ background: "#D4AF37" }} />
                <div className="w-1 h-1 rotate-45" style={{ background: "rgba(212,175,55,0.5)" }} />
              </div>
              <div className="h-px w-20"
                style={{ background: "linear-gradient(to left, transparent, rgba(212,175,55,0.5))" }} />
            </div>
            <p className="font-cormorant italic text-white/25 tracking-widest text-lg">
              To God be the Glory
            </p>
          </div>

        </div>
      </section>
    </>
  );
}