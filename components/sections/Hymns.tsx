// "use client";
// import { useState, useRef, useEffect } from "react";

// const hymns = [
//   {
//     id: "processional",
//     label: "Processional Hymn",
//     tag: "Opening",
//     title: "Itan Iyanu T'ife",
//     verses: [
//       {
//         label: "Verse 1",
//         lines: [
//           "Itan iyanu t'ife ! So fun mi l'ekan si",
//           "Itan iyanu t'ife E gbe orin na ga !",
//           "Awon angeli nroyin re Awon oluso si gbagbo",
//           "Elese, iwo ki yo gbo Itan iyanu t'ife",
//         ],
//       },
//       {
//         label: "Chorus",
//         lines: ["Iyanu ! Iyanu ! Iyanu !", "Itan iyanu t'ife"],
//       },
//       {
//         label: "Verse 2",
//         lines: [
//           "Itan iyanu t'ife B'iwo tile sako",
//           "Itan iyanu t'ife Sibe o npe loni",
//           "Lat'ori oke kalfari Lati orisun didun ni",
//           "Lati isedale aye Itan iyanu t'ife",
//         ],
//       },
//       {
//         label: "Verse 3",
//         lines: [
//           "Itan iyanu t'ife Jesu ni isimi",
//           "Itan iyanu t'ife Fun awon oloto",
//           "To sun ni ile nla orun Pel'awon to saju wa lo",
//           "Won nko orin ayo orun Itan iyanu t'ife. Amin.",
//         ],
//       },
//     ],
//   },
//   {
//     id: "gospel",
//     label: "Gospel Hymn",
//     tag: "Worship",
//     title: "Be Glad in the Lord",
//     verses: [
//       {
//         label: "Verse 1",
//         lines: [
//           "Be glad in the Lord, and rejoice,",
//           "All ye that are upright in heart,",
//           "And ye that have made him your choice",
//           "Bid sadness and sorrow depart.",
//         ],
//       },
//       {
//         label: "Chorus",
//         lines: [
//           "Rejoice! Rejoice!",
//           "Rejoice in the Lord and rejoice,",
//           "Rejoice! Rejoice!",
//           "Rejoice in the Lord rejoice.",
//         ],
//       },
//       {
//         label: "Verse 2",
//         lines: [
//           "Be joyful, for He is the Lord,",
//           "On earth and in heaven supreme;",
//           "He fashions and rules by His word;",
//           "The 'Mighty' and 'Strong' to redeem.",
//         ],
//       },
//       {
//         label: "Verse 3",
//         lines: [
//           "What though in the conflict for right",
//           "Your enemies almost prevail!",
//           "God's armies, just hid from your sight,",
//           "Are more than the foes which assail.",
//         ],
//       },
//       {
//         label: "Verse 4",
//         lines: [
//           "Though darkness surround you by day,",
//           "Your sky by the night be o'er cast",
//           "Let nothing your spirit dismay,",
//           "But trust till the danger is past.",
//         ],
//       },
//       {
//         label: "Verse 5",
//         lines: [
//           "Be glad in the Lord and rejoice,",
//           "His praise proclaiming in song;",
//           "With harp, and with organ, and voice,",
//           "The loud hallelujahs prolong! Amen.",
//         ],
//       },
//     ],
//   },
//   {
//     id: "recessional",
//     label: "Recessional Hymn",
//     tag: "Closing",
//     title: "Wonderful Story of Love",
//     verses: [
//       {
//         label: "Verse 1",
//         lines: [
//           "Wonderful story of love!",
//           "Tell it to me again;",
//           "Wonderful story of love!",
//           "Wake the immortal strain.",
//           "Angels with rapture announce it,",
//           "Shepherds with wonder receive it;",
//           "Sinner, O won't you believe it?",
//           "Wonderful story of love!",
//         ],
//       },
//       {
//         label: "Refrain",
//         lines: [
//           "Wonderful! Wonderful!",
//           "Wonderful story,",
//           "Wonderful story of love!",
//         ],
//       },
//       {
//         label: "Verse 2",
//         lines: [
//           "Wonderful story of love!",
//           "Though you are far away;",
//           "Wonderful story of love!",
//           "Still he doth call today.",
//           "Calling from Calvary's mountain,",
//           "Down from the crystal bright fountain,",
//           "E'en from the dawn of creation;",
//           "Wonderful story of love!",
//         ],
//       },
//       {
//         label: "Verse 3",
//         lines: [
//           "Wonderful story of love!",
//           "Jesus provides a rest;",
//           "Wonderful story of love!",
//           "For all the pure and blest;",
//           "Rest in those mansions above us,",
//           "With those who've gone on before us,",
//           "Singing the rapturous chorus;",
//           "Wonderful story of love!",
//         ],
//       },
//     ],
//   },
// ];

// function useInView(threshold = 0.2) {
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

// type HymnId = "processional" | "gospel" | "recessional";

// export default function Hymns() {
//   const [active, setActive] = useState<HymnId>("processional");
//   const { ref: headerRef, inView: headerIn } = useInView(0.3);
//   const activeHymn = hymns.find((h) => h.id === active)!;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
//         .font-cormorant { font-family: 'Cormorant Garamond', serif; }
//         .font-jost { font-family: 'Jost', sans-serif; }

//         @keyframes fadeSlide {
//           from { opacity: 0; transform: translateY(16px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .hymn-enter { animation: fadeSlide 0.5s ease forwards; }
//       `}</style>

//       <section
//         id="hymns"
//         className="relative py-28 px-6 overflow-hidden"
//         style={{
//           background:
//             "linear-gradient(to bottom, #080310 0%, #0d0618 50%, #080310 100%)",
//         }}
//       >
//         {/* Ambient glows */}
//         <div
//           className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
//             transform: "translateX(-50%)",
//           }}
//         />
//         <div
//           className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(107,63,160,0.1) 0%, transparent 70%)",
//             transform: "translateX(50%)",
//           }}
//         />

//         <div className="max-w-3xl mx-auto relative z-10">
//           {/* Header */}
//           <div
//             ref={headerRef}
//             className="flex flex-col items-center text-center mb-14"
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
//               Songs of Worship
//             </p>

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
//               Hymns
//             </h2>

//             <p
//               className="font-jost text-[0.62rem] tracking-[0.3em] uppercase mt-4"
//               style={{ color: "rgba(255,255,255,0.3)" }}
//             >
//               Processional · Gospel · Recessional
//             </p>
//           </div>

//           {/* 3-Tab Switcher */}
//           <div className="flex items-center justify-center mb-12">
//             <div
//               className="flex relative overflow-hidden"
//               style={{
//                 border: "1px solid rgba(212,175,55,0.2)",
//                 borderRadius: "2px",
//               }}
//             >
//               {hymns.map((h, i) => (
//                 <button
//                   key={h.id}
//                   onClick={() => setActive(h.id as HymnId)}
//                   className="relative font-jost text-[0.6rem] tracking-[0.18em] uppercase px-6 py-3
//                     transition-all duration-300 cursor-pointer border-none outline-none"
//                   style={{
//                     background:
//                       active === h.id
//                         ? "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))"
//                         : "transparent",
//                     color:
//                       active === h.id ? "#D4AF37" : "rgba(255,255,255,0.35)",
//                     borderRight:
//                       i < hymns.length - 1
//                         ? "1px solid rgba(212,175,55,0.2)"
//                         : "none",
//                   }}
//                 >
//                   {/* Active bottom line */}
//                   {active === h.id && (
//                     <span
//                       className="absolute bottom-0 left-0 right-0 h-px"
//                       style={{
//                         background:
//                           "linear-gradient(to right, transparent, #D4AF37, transparent)",
//                       }}
//                     />
//                   )}
//                   {/* Tag */}
//                   <span
//                     className="block text-[0.5rem] tracking-[0.3em] mb-0.5"
//                     style={{
//                       color:
//                         active === h.id
//                           ? "rgba(212,175,55,0.5)"
//                           : "rgba(255,255,255,0.15)",
//                     }}
//                   >
//                     {h.tag}
//                   </span>
//                   {h.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Hymn Content */}
//           <div key={active} className="hymn-enter">
//             {/* Hymn title */}
//             <div className="flex flex-col items-center mb-10">
//               <h3
//                 className="font-cormorant italic text-white text-center leading-tight"
//                 style={{
//                   fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
//                   fontWeight: 300,
//                 }}
//               >
//                 {activeHymn.title}
//               </h3>
//               <div className="flex items-center gap-3 mt-3">
//                 <div
//                   className="h-px w-10"
//                   style={{
//                     background:
//                       "linear-gradient(to right, transparent, rgba(212,175,55,0.4))",
//                   }}
//                 />
//                 <div
//                   className="w-1 h-1 rotate-45"
//                   style={{ background: "rgba(212,175,55,0.5)" }}
//                 />
//                 <div
//                   className="h-px w-10"
//                   style={{
//                     background:
//                       "linear-gradient(to left, transparent, rgba(212,175,55,0.4))",
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Verses */}
//             <div className="flex flex-col gap-8">
//               {activeHymn.verses.map((verse, vi) => {
//                 const isChorus =
//                   verse.label === "Chorus" || verse.label === "Refrain";
//                 return (
//                   <div
//                     key={vi}
//                     className="relative pl-6"
//                     style={{
//                       borderLeft: isChorus
//                         ? "1px solid rgba(212,175,55,0.3)"
//                         : "1px solid rgba(255,255,255,0.07)",
//                       opacity: 0,
//                       animation: `fadeSlide 0.5s ease forwards ${vi * 120}ms`,
//                     }}
//                   >
//                     {/* Verse label */}
//                     <p
//                       className="font-jost text-[0.58rem] tracking-[0.35em] uppercase mb-3"
//                       style={{
//                         color: isChorus
//                           ? "rgba(212,175,55,0.7)"
//                           : "rgba(255,255,255,0.25)",
//                       }}
//                     >
//                       {verse.label}
//                     </p>

//                     {/* Lines */}
//                     {verse.lines.map((line, li) => (
//                       <p
//                         key={li}
//                         className="font-cormorant leading-relaxed"
//                         style={{
//                           fontSize: "clamp(1rem, 2vw, 1.15rem)",
//                           color: isChorus
//                             ? "rgba(255,255,255,0.9)"
//                             : "rgba(255,255,255,0.65)",
//                           fontStyle: isChorus ? "italic" : "normal",
//                           fontWeight: isChorus ? 400 : 300,
//                         }}
//                       >
//                         {line}
//                       </p>
//                     ))}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="flex flex-col items-center mt-16 gap-3">
//             <div className="flex items-center gap-5">
//               <div
//                 className="h-px w-20"
//                 style={{
//                   background:
//                     "linear-gradient(to right, transparent, rgba(212,175,55,0.4))",
//                 }}
//               />
//               <div className="flex gap-2 items-center">
//                 <div
//                   className="w-1 h-1 rotate-45"
//                   style={{ background: "rgba(212,175,55,0.4)" }}
//                 />
//                 <div
//                   className="w-2 h-2 rotate-45"
//                   style={{ background: "#D4AF37" }}
//                 />
//                 <div
//                   className="w-1 h-1 rotate-45"
//                   style={{ background: "rgba(212,175,55,0.4)" }}
//                 />
//               </div>
//               <div
//                 className="h-px w-20"
//                 style={{
//                   background:
//                     "linear-gradient(to left, transparent, rgba(212,175,55,0.4))",
//                 }}
//               />
//             </div>
//             <p className="font-cormorant italic text-white/20 tracking-widest text-base">
//               Sing unto the Lord a new song
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// "use client";
// import { useState, useRef, useEffect } from "react";

// const hymns = [
//   {
//     id: "recessional",
//     label: "Recessional Hymn",
//     tag: "Opening",
//     title: "Wonderful Story of Love",
//     verses: [
//       {
//         label: "Verse 1",
//         lines: [
//           "Wonderful story of love!",
//           "Tell it to me again;",
//           "Wonderful story of love!",
//           "Wake the immortal strain.",
//           "Angels with rapture announce it,",
//           "Shepherds with wonder receive it;",
//           "Sinner, O won't you believe it?",
//           "Wonderful story of love!",
//         ],
//       },
//       {
//         label: "Refrain",
//         lines: [
//           "Wonderful! Wonderful!",
//           "Wonderful story,",
//           "Wonderful story of love!",
//         ],
//       },
//       {
//         label: "Verse 2",
//         lines: [
//           "Wonderful story of love!",
//           "Though you are far away;",
//           "Wonderful story of love!",
//           "Still he doth call today.",
//           "Calling from Calvary's mountain,",
//           "Down from the crystal bright fountain,",
//           "E'en from the dawn of creation;",
//           "Wonderful story of love!",
//         ],
//       },
//       {
//         label: "Verse 3",
//         lines: [
//           "Wonderful story of love!",
//           "Jesus provides a rest;",
//           "Wonderful story of love!",
//           "For all the pure and blest;",
//           "Rest in those mansions above us,",
//           "With those who've gone on before us,",
//           "Singing the rapturous chorus;",
//           "Wonderful story of love!",
//         ],
//       },
//     ],
//   },
//   {
//     id: "processional",
//     label: "Processional Hymn",
//     tag: "Processional",
//     title: "Itan Iyanu T'ife",
//     verses: [
//       {
//         label: "Verse 1",
//         lines: [
//           "Itan iyanu t'ife ! So fun mi l'ekan si",
//           "Itan iyanu t'ife E gbe orin na ga !",
//           "Awon angeli nroyin re Awon oluso si gbagbo",
//           "Elese, iwo ki yo gbo Itan iyanu t'ife",
//         ],
//       },
//       {
//         label: "Chorus",
//         lines: ["Iyanu ! Iyanu ! Iyanu !", "Itan iyanu t'ife"],
//       },
//       {
//         label: "Verse 2",
//         lines: [
//           "Itan iyanu t'ife B'iwo tile sako",
//           "Itan iyanu t'ife Sibe o npe loni",
//           "Lat'ori oke kalfari Lati orisun didun ni",
//           "Lati isedale aye Itan iyanu t'ife",
//         ],
//       },
//       {
//         label: "Verse 3",
//         lines: [
//           "Itan iyanu t'ife Jesu ni isimi",
//           "Itan iyanu t'ife Fun awon oloto",
//           "To sun ni ile nla orun Pel'awon to saju wa lo",
//           "Won nko orin ayo orun Itan iyanu t'ife. Amin.",
//         ],
//       },
//     ],
//   },
//   {
//     id: "gospel",
//     label: "Gospel Hymn",
//     tag: "Closing",
//     title: "Be Glad in the Lord",
//     verses: [
//       {
//         label: "Verse 1",
//         lines: [
//           "Be glad in the Lord, and rejoice,",
//           "All ye that are upright in heart,",
//           "And ye that have made him your choice",
//           "Bid sadness and sorrow depart.",
//         ],
//       },
//       {
//         label: "Chorus",
//         lines: [
//           "Rejoice! Rejoice!",
//           "Rejoice in the Lord and rejoice,",
//           "Rejoice! Rejoice!",
//           "Rejoice in the Lord rejoice.",
//         ],
//       },
//       {
//         label: "Verse 2",
//         lines: [
//           "Be joyful, for He is the Lord,",
//           "On earth and in heaven supreme;",
//           "He fashions and rules by His word;",
//           "The 'Mighty' and 'Strong' to redeem.",
//         ],
//       },
//       {
//         label: "Verse 3",
//         lines: [
//           "What though in the conflict for right",
//           "Your enemies almost prevail!",
//           "God's armies, just hid from your sight,",
//           "Are more than the foes which assail.",
//         ],
//       },
//       {
//         label: "Verse 4",
//         lines: [
//           "Though darkness surround you by day,",
//           "Your sky by the night be o'er cast",
//           "Let nothing your spirit dismay,",
//           "But trust till the danger is past.",
//         ],
//       },
//       {
//         label: "Verse 5",
//         lines: [
//           "Be glad in the Lord and rejoice,",
//           "His praise proclaiming in song;",
//           "With harp, and with organ, and voice,",
//           "The loud hallelujahs prolong! Amen.",
//         ],
//       },
//     ],
//   },
// ];

// function useInView(threshold = 0.2) {
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

// type HymnId = "recessional" | "processional" | "gospel";

// export default function Hymns() {
//   const [active, setActive] = useState<HymnId>("recessional");
//   const { ref: headerRef, inView: headerIn } = useInView(0.3);
//   const activeHymn = hymns.find((h) => h.id === active)!;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
//         .font-cormorant { font-family: 'Cormorant Garamond', serif; }
//         .font-jost { font-family: 'Jost', sans-serif; }

//         @keyframes fadeSlide {
//           from { opacity: 0; transform: translateY(16px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .hymn-enter { animation: fadeSlide 0.5s ease forwards; }
//       `}</style>

//       <section
//         id="hymns"
//         className="relative py-28 px-6 overflow-hidden"
//         style={{
//           background:
//             "linear-gradient(to bottom, #080310 0%, #0d0618 50%, #080310 100%)",
//         }}
//       >
//         {/* Ambient glows */}
//         <div
//           className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
//             transform: "translateX(-50%)",
//           }}
//         />
//         <div
//           className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(107,63,160,0.1) 0%, transparent 70%)",
//             transform: "translateX(50%)",
//           }}
//         />

//         <div className="max-w-3xl mx-auto relative z-10">
//           {/* Header */}
//           <div
//             ref={headerRef}
//             className="flex flex-col items-center text-center mb-14"
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
//               Songs of Worship
//             </p>

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
//               Hymns
//             </h2>

//             <p
//               className="font-jost text-[0.62rem] tracking-[0.3em] uppercase mt-4"
//               style={{ color: "rgba(255,255,255,0.3)" }}
//             >
//               Opening · Processional · Closing
//             </p>
//           </div>

//           {/* 3-Tab Switcher */}
//           <div className="flex items-center justify-center mb-12">
//             <div
//               className="flex relative overflow-hidden"
//               style={{
//                 border: "1px solid rgba(212,175,55,0.2)",
//                 borderRadius: "2px",
//               }}
//             >
//               {hymns.map((h, i) => (
//                 <button
//                   key={h.id}
//                   onClick={() => setActive(h.id as HymnId)}
//                   className="relative font-jost text-[0.6rem] tracking-[0.18em] uppercase px-6 py-3
//                     transition-all duration-300 cursor-pointer border-none outline-none"
//                   style={{
//                     background:
//                       active === h.id
//                         ? "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))"
//                         : "transparent",
//                     color:
//                       active === h.id ? "#D4AF37" : "rgba(255,255,255,0.35)",
//                     borderRight:
//                       i < hymns.length - 1
//                         ? "1px solid rgba(212,175,55,0.2)"
//                         : "none",
//                   }}
//                 >
//                   {active === h.id && (
//                     <span
//                       className="absolute bottom-0 left-0 right-0 h-px"
//                       style={{
//                         background:
//                           "linear-gradient(to right, transparent, #D4AF37, transparent)",
//                       }}
//                     />
//                   )}
//                   <span
//                     className="block text-[0.5rem] tracking-[0.3em] mb-0.5"
//                     style={{
//                       color:
//                         active === h.id
//                           ? "rgba(212,175,55,0.5)"
//                           : "rgba(255,255,255,0.15)",
//                     }}
//                   >
//                     {h.tag}
//                   </span>
//                   {h.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Hymn Content */}
//           <div key={active} className="hymn-enter">
//             {/* Hymn title */}
//             <div className="flex flex-col items-center mb-10">
//               <h3
//                 className="font-cormorant italic text-white text-center leading-tight"
//                 style={{
//                   fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
//                   fontWeight: 300,
//                 }}
//               >
//                 {activeHymn.title}
//               </h3>
//               <div className="flex items-center gap-3 mt-3">
//                 <div
//                   className="h-px w-10"
//                   style={{
//                     background:
//                       "linear-gradient(to right, transparent, rgba(212,175,55,0.4))",
//                   }}
//                 />
//                 <div
//                   className="w-1 h-1 rotate-45"
//                   style={{ background: "rgba(212,175,55,0.5)" }}
//                 />
//                 <div
//                   className="h-px w-10"
//                   style={{
//                     background:
//                       "linear-gradient(to left, transparent, rgba(212,175,55,0.4))",
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Verses */}
//             <div className="flex flex-col gap-8">
//               {activeHymn.verses.map((verse, vi) => {
//                 const isChorus =
//                   verse.label === "Chorus" || verse.label === "Refrain";
//                 return (
//                   <div
//                     key={vi}
//                     className="relative pl-6"
//                     style={{
//                       borderLeft: isChorus
//                         ? "1px solid rgba(212,175,55,0.3)"
//                         : "1px solid rgba(255,255,255,0.07)",
//                       opacity: 0,
//                       animation: `fadeSlide 0.5s ease forwards ${vi * 120}ms`,
//                     }}
//                   >
//                     <p
//                       className="font-jost text-[0.58rem] tracking-[0.35em] uppercase mb-3"
//                       style={{
//                         color: isChorus
//                           ? "rgba(212,175,55,0.7)"
//                           : "rgba(255,255,255,0.25)",
//                       }}
//                     >
//                       {verse.label}
//                     </p>

//                     {verse.lines.map((line, li) => (
//                       <p
//                         key={li}
//                         className="font-cormorant leading-relaxed"
//                         style={{
//                           fontSize: "clamp(1rem, 2vw, 1.15rem)",
//                           color: isChorus
//                             ? "rgba(255,255,255,0.9)"
//                             : "rgba(255,255,255,0.65)",
//                           fontStyle: isChorus ? "italic" : "normal",
//                           fontWeight: isChorus ? 400 : 300,
//                         }}
//                       >
//                         {line}
//                       </p>
//                     ))}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="flex flex-col items-center mt-16 gap-3">
//             <div className="flex items-center gap-5">
//               <div
//                 className="h-px w-20"
//                 style={{
//                   background:
//                     "linear-gradient(to right, transparent, rgba(212,175,55,0.4))",
//                 }}
//               />
//               <div className="flex gap-2 items-center">
//                 <div
//                   className="w-1 h-1 rotate-45"
//                   style={{ background: "rgba(212,175,55,0.4)" }}
//                 />
//                 <div
//                   className="w-2 h-2 rotate-45"
//                   style={{ background: "#D4AF37" }}
//                 />
//                 <div
//                   className="w-1 h-1 rotate-45"
//                   style={{ background: "rgba(212,175,55,0.4)" }}
//                 />
//               </div>
//               <div
//                 className="h-px w-20"
//                 style={{
//                   background:
//                     "linear-gradient(to left, transparent, rgba(212,175,55,0.4))",
//                 }}
//               />
//             </div>
//             <p className="font-cormorant italic text-white/20 tracking-widest text-base">
//               Sing unto the Lord a new song
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";
import { useState, useRef, useEffect } from "react";

const hymns = [
  {
    id: "processional",
    label: "Processional Hymn",
    tag: "Processional",
    title: "Wonderful Story of Love",
    verses: [
      {
        label: "Verse 1",
        lines: [
          "Wonderful story of love!",
          "Tell it to me again;",
          "Wonderful story of love!",
          "Wake the immortal strain.",
          "Angels with rapture announce it,",
          "Shepherds with wonder receive it;",
          "Sinner, O won't you believe it?",
          "Wonderful story of love!",
        ],
      },
      {
        label: "Refrain",
        lines: [
          "Wonderful! Wonderful!",
          "Wonderful story,",
          "Wonderful story of love!",
        ],
      },
      {
        label: "Verse 2",
        lines: [
          "Wonderful story of love!",
          "Though you are far away;",
          "Wonderful story of love!",
          "Still he doth call today.",
          "Calling from Calvary's mountain,",
          "Down from the crystal bright fountain,",
          "E'en from the dawn of creation;",
          "Wonderful story of love!",
        ],
      },
      {
        label: "Verse 3",
        lines: [
          "Wonderful story of love!",
          "Jesus provides a rest;",
          "Wonderful story of love!",
          "For all the pure and blest;",
          "Rest in those mansions above us,",
          "With those who've gone on before us,",
          "Singing the rapturous chorus;",
          "Wonderful story of love!",
        ],
      },
    ],
  },
  {
    id: "recessional",
    label: "Recessional Hymn",
    tag: "Closing",
    title: "Be Glad in the Lord",
    verses: [
      {
        label: "Verse 1",
        lines: [
          "Be glad in the Lord, and rejoice,",
          "All ye that are upright in heart,",
          "And ye that have made him your choice",
          "Bid sadness and sorrow depart.",
        ],
      },
      {
        label: "Chorus",
        lines: [
          "Rejoice! Rejoice!",
          "Rejoice in the Lord and rejoice,",
          "Rejoice! Rejoice!",
          "Rejoice in the Lord rejoice.",
        ],
      },
      {
        label: "Verse 2",
        lines: [
          "Be joyful, for He is the Lord,",
          "On earth and in heaven supreme;",
          "He fashions and rules by His word;",
          "The 'Mighty' and 'Strong' to redeem.",
        ],
      },
      {
        label: "Verse 3",
        lines: [
          "What though in the conflict for right",
          "Your enemies almost prevail!",
          "God's armies, just hid from your sight,",
          "Are more than the foes which assail.",
        ],
      },
      {
        label: "Verse 4",
        lines: [
          "Though darkness surround you by day,",
          "Your sky by the night be o'er cast",
          "Let nothing your spirit dismay,",
          "But trust till the danger is past.",
        ],
      },
      {
        label: "Verse 5",
        lines: [
          "Be glad in the Lord and rejoice,",
          "His praise proclaiming in song;",
          "With harp, and with organ, and voice,",
          "The loud hallelujahs prolong! Amen.",
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

type HymnId = "processional" | "recessional";

export default function Hymns() {
  const [active, setActive] = useState<HymnId>("processional");
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
          background:
            "linear-gradient(to bottom, #080310 0%, #0d0618 50%, #080310 100%)",
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
              Processional · Recessional
            </p>
          </div>

          {/* 2-Tab Switcher */}
          <div className="flex items-center justify-center mb-12">
            <div
              className="flex relative overflow-hidden"
              style={{
                border: "1px solid rgba(212,175,55,0.2)",
                borderRadius: "2px",
              }}
            >
              {hymns.map((h, i) => (
                <button
                  key={h.id}
                  onClick={() => setActive(h.id as HymnId)}
                  className="relative font-jost text-[0.6rem] tracking-[0.18em] uppercase px-8 py-3
                    transition-all duration-300 cursor-pointer border-none outline-none"
                  style={{
                    background:
                      active === h.id
                        ? "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))"
                        : "transparent",
                    color:
                      active === h.id ? "#D4AF37" : "rgba(255,255,255,0.35)",
                    borderRight:
                      i < hymns.length - 1
                        ? "1px solid rgba(212,175,55,0.2)"
                        : "none",
                  }}
                >
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
                    className="block text-[0.5rem] tracking-[0.3em] mb-0.5"
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
              {activeHymn.verses.map((verse, vi) => {
                const isChorus =
                  verse.label === "Chorus" || verse.label === "Refrain";
                return (
                  <div
                    key={vi}
                    className="relative pl-6"
                    style={{
                      borderLeft: isChorus
                        ? "1px solid rgba(212,175,55,0.3)"
                        : "1px solid rgba(255,255,255,0.07)",
                      opacity: 0,
                      animation: `fadeSlide 0.5s ease forwards ${vi * 120}ms`,
                    }}
                  >
                    <p
                      className="font-jost text-[0.58rem] tracking-[0.35em] uppercase mb-3"
                      style={{
                        color: isChorus
                          ? "rgba(212,175,55,0.7)"
                          : "rgba(255,255,255,0.25)",
                      }}
                    >
                      {verse.label}
                    </p>

                    {verse.lines.map((line, li) => (
                      <p
                        key={li}
                        className="font-cormorant leading-relaxed"
                        style={{
                          fontSize: "clamp(1rem, 2vw, 1.15rem)",
                          color: isChorus
                            ? "rgba(255,255,255,0.9)"
                            : "rgba(255,255,255,0.65)",
                          fontStyle: isChorus ? "italic" : "normal",
                          fontWeight: isChorus ? 400 : 300,
                        }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                );
              })}
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
