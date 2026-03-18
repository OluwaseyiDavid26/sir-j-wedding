// import Hero from "../components/sections/Hero";
// import Program from "../components/sections/Program";
// import Hymns from "../components/sections/Hymns";
// import Ministers from "../components/sections/Ministers";
// import PhotoGroup from "../components/sections/PhotoGroup";
// import Gallery from "../components/sections/Gallery";
// import ReceptionProgram from "../components/sections/receptionProgram";
// import Direction from "../components/sections/Direction";
// import RSVP from "../components/sections/RSVP";

// export default function Home() {
//   return (
//     <main>
//       {/* Hero Section */}
//       <Hero />
//       <Program />
//       <Hymns />
//       <Ministers />
//       <PhotoGroup />
//       <Gallery />
//       <ReceptionProgram />
//       <Direction />
//       <RSVP />
//     </main>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";

// // 1. Import all your real sections
// import Hero from "../components/sections/Hero";
// import Gallery from "../components/sections/Gallery";
// import Direction from "../components/sections/Direction";
// import RSVP from "../components/sections/RSVP";
// import Program from "../components/sections/Program";
// import Hymns from "../components/sections/Hymns";
// import Ministers from "../components/sections/Ministers";
// import PhotoGroup from "../components/sections/PhotoGroup";
// import ReceptionProgram from "../components/sections/receptionProgram";

// // 2. Set the target: Saturday, March 21st, 2026 at 00:00:00
// const UNLOCK_DATE = new Date("2026-03-21T00:00:00").getTime();

// // Helper for the "Coming Soon" look
// const ComingSoon = ({ title }: { title: string }) => (
//   <section className="py-16 bg-[#0a0514] border-t border-white/5 text-center transition-all duration-700">
//     <div className="max-w-xl mx-auto px-6">
//       <h3 className="font-cormorant italic text-2xl text-white/80 mb-2">
//         {title}
//       </h3>
//       <p className="font-jost text-[#D4AF37]/50 text-[10px] tracking-[0.3em] uppercase">
//         Unlocking Saturday 00:00
//       </p>
//       <div className="mt-6 h-px w-12 bg-[#D4AF37]/20 mx-auto" />
//     </div>
//   </section>
// );

// export default function Home() {
//   const [isSaturday, setIsSaturday] = useState(false);

//   useEffect(() => {
//     // Function to check the time
//     const checkTime = () => {
//       const now = Date.now();
//       if (now >= UNLOCK_DATE) {
//         setIsSaturday(true);
//       }
//     };

//     // Run immediately on load
//     checkTime();

//     // Check every 30 seconds to see if it's Saturday yet
//     const timer = setInterval(checkTime, 30000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <main className="bg-[#080310]">
//       {/* --- ALWAYS VISIBLE SECTIONS --- */}
//       <Hero />
//       <Gallery />
//       <Direction />
//       <RSVP />

//       {/* --- AUTOMATICALLY SWITCHING SECTIONS --- */}
//       {isSaturday ? (
//         // THE FULL WEDDING DAY LAYOUT (Properly Arranged)
//         <div className="animate-in fade-in duration-1000">
//           <Program />
//           <Hymns />
//           <Ministers />
//           <PhotoGroup />
//           <ReceptionProgram />
//         </div>
//       ) : (
//         // THE PRE-WEDDING TEASER LAYOUT
//         <div className="animate-in fade-in duration-700">
//           <ComingSoon title="Order of Program" />
//           <ComingSoon title="Hymns & Lyrics" />
//           <ComingSoon title="Officiating Ministers" />
//           <ComingSoon title="Order of Photograph" />
//           <ComingSoon title="Reception Programme" />
//         </div>
//       )}

//       <footer className="py-16 text-center bg-[#080310] border-t border-white/5">
//         <p className="font-cormorant italic text-white/30 text-lg">
//           Oluwatosin & Jesutomi — 2026
//         </p>
//       </footer>
//     </main>
//   );
// }

"use client";
import { useState, useEffect } from "react";

// 1. Import all your sections
import Hero from "../components/sections/Hero";
import Gallery from "../components/sections/Gallery";
import Direction from "../components/sections/Direction";
import RSVP from "../components/sections/RSVP";
import Guestbook from "../components/sections/Guestbook"; // Added Guestbook Import
import Program from "../components/sections/Program";
import Hymns from "../components/sections/Hymns";
import Ministers from "../components/sections/Ministers";
import PhotoGroup from "../components/sections/PhotoGroup";
import ReceptionProgram from "../components/sections/receptionProgram";

// 2. Set the target: Saturday, March 21st, 2026 at 00:00:00
const UNLOCK_DATE = new Date("2026-03-21T00:00:00").getTime();

// Helper for the "Coming Soon" look
const ComingSoon = ({ title }: { title: string }) => (
  <section className="py-16 bg-[#0a0514] border-t border-white/5 text-center transition-all duration-700">
    <div className="max-w-xl mx-auto px-6">
      <h3 className="font-cormorant italic text-2xl text-white/80 mb-2">
        {title}
      </h3>
      <p className="font-jost text-[#D4AF37]/50 text-[10px] tracking-[0.3em] uppercase">
        Unlocking Saturday 00:00
      </p>
      <div className="mt-6 h-px w-12 bg-[#D4AF37]/20 mx-auto" />
    </div>
  </section>
);

export default function Home() {
  const [isSaturday, setIsSaturday] = useState(false);

  useEffect(() => {
    // Function to check the time
    const checkTime = () => {
      const now = Date.now();
      if (now >= UNLOCK_DATE) {
        setIsSaturday(true);
      }
    };

    // Run immediately on load
    checkTime();

    // Check every 30 seconds to see if it's Saturday yet
    const timer = setInterval(checkTime, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[#080310]">
      {/* --- ALWAYS VISIBLE SECTIONS --- */}
      <Hero />
      <Gallery />
      <Direction />
      <RSVP />

      {/* --- GUESTBOOK (Wishes are visible to everyone now) --- */}
      <Guestbook />

      {/* --- AUTOMATICALLY SWITCHING SECTIONS --- */}
      {isSaturday ? (
        // THE FULL WEDDING DAY LAYOUT (Properly Arranged)
        <div className="animate-in fade-in duration-1000">
          <Program />
          <Hymns />
          <Ministers />
          <PhotoGroup />
          <ReceptionProgram />
        </div>
      ) : (
        // THE PRE-WEDDING TEASER LAYOUT
        <div className="animate-in fade-in duration-700">
          <ComingSoon title="Order of Program" />
          <ComingSoon title="Hymns & Lyrics" />
          <ComingSoon title="Officiating Ministers" />
          <ComingSoon title="Order of Photograph" />
          <ComingSoon title="Reception Programme" />
        </div>
      )}

      <footer className="py-16 text-center bg-[#080310] border-t border-white/5">
        <p className="font-cormorant italic text-white/30 text-lg">
          Oluwatosin & Jesutomi — 2026
        </p>
      </footer>
    </main>
  );
}
