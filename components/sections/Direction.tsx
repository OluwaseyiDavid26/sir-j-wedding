// "use client";

// const venues = [
//   {
//     type: "The Ceremony",
//     name: "First Baptist Church",
//     address: "Okedogbon Road, Owo, Ondo State",
//     // Direct Google Maps search link for First Baptist Owo
//     mapLink:
//       "https://www.google.com/maps/dir/?api=1&destination=First+Baptist+Church+Okedogbon+Owo",
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.5"
//           d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//         />
//       </svg>
//     ),
//   },
//   {
//     type: "The Reception",
//     name: "St Andrew's Anglican Cathedral Hall",
//     address: "Imola Street, Owo, Ondo State",
//     // Direct Google Maps search link for St Andrews Cathedral Owo
//     mapLink:
//       "https://www.google.com/maps/dir/?api=1&destination=St+Andrews+Cathedral+Imola+Street+Owo",
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.5"
//           d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//         />
//       </svg>
//     ),
//   },
// ];

// export default function VenueSection() {
//   return (
//     <section id="location" className="relative py-24 px-6 bg-[#080310]">
//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="flex flex-col items-center text-center mb-16">
//           <p className="font-jost text-[0.6rem] tracking-[0.5em] uppercase text-[#D4AF37]/70 mb-4">
//             Where & When
//           </p>
//           <h2 className="font-cormorant italic text-5xl md:text-6xl text-white mb-6">
//             Location Details
//           </h2>
//           <div className="w-12 h-px bg-[#D4AF37]/30" />
//         </div>

//         {/* Venue Grid */}
//         <div className="grid md:grid-cols-2 gap-0 border border-white/10">
//           {venues.map((venue, index) => (
//             <div
//               key={index}
//               className={`relative p-10 md:p-16 flex flex-col items-center text-center group transition-all duration-500
//                 ${index === 0 ? "border-b md:border-b-0 md:border-r border-white/10" : ""}
//                 hover:bg-[#D4AF37]/5`}
//             >
//               {/* Icon / Label Tag */}
//               <div className="mb-8 text-[#D4AF37] opacity-80 group-hover:scale-110 transition-transform duration-500">
//                 {venue.icon}
//               </div>

//               <span className="font-jost text-[0.65rem] tracking-[0.4em] uppercase text-[#D4AF37] mb-4">
//                 {venue.type}
//               </span>

//               <h3 className="font-cormorant text-3xl text-white mb-4 italic font-light">
//                 {venue.name}
//               </h3>

//               <p className="font-jost text-white/40 text-sm leading-relaxed mb-10 max-w-[250px]">
//                 {venue.address}
//               </p>

//               {/* Action Button */}
//               <a
//                 href={venue.mapLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group/btn relative px-8 py-3 overflow-hidden"
//               >
//                 <div className="absolute inset-0 border border-[#D4AF37]/40 group-hover/btn:border-[#D4AF37] transition-colors" />
//                 <span className="relative font-jost text-[0.6rem] tracking-[0.3em] uppercase text-white group-hover/btn:text-[#D4AF37] transition-colors">
//                   Open in Google Maps
//                 </span>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

const venues = [
  {
    type: "The Ceremony",
    name: "First Baptist Church",
    address: "Okedogbon Road, Owo, Ondo State",
    mapLink:
      "https://www.google.com/maps/dir/?api=1&destination=First+Baptist+Church+Okedogbon+Owo",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    type: "The Reception",
    name: "Jacob & Christianah Building",
    address: "St. Andrew Cathedral Church, Owo, Ondo State",
    mapLink:
      "https://www.google.com/maps/dir/?api=1&destination=St+Andrews+Cathedral+Owo",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
];

export default function VenueSection() {
  return (
    <section id="location" className="relative py-24 px-6 bg-[#080310]">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="font-jost text-[0.6rem] tracking-[0.5em] uppercase text-[#D4AF37]/70 mb-4">
            Where & When
          </p>
          <h2 className="font-cormorant italic text-5xl md:text-6xl text-white mb-6">
            Location Details
          </h2>
          <div className="w-12 h-px bg-[#D4AF37]/30" />
        </div>

        {/* Venue Grid */}
        <div className="grid md:grid-cols-2 gap-0 border border-white/10">
          {venues.map((venue, index) => (
            <div
              key={index}
              className={`relative p-10 md:p-16 flex flex-col items-center text-center group transition-all duration-500
                ${index === 0 ? "border-b md:border-b-0 md:border-r border-white/10" : ""}
                hover:bg-[#D4AF37]/5`}
            >
              <div className="mb-8 text-[#D4AF37] opacity-80 group-hover:scale-110 transition-transform duration-500">
                {venue.icon}
              </div>

              <span className="font-jost text-[0.65rem] tracking-[0.4em] uppercase text-[#D4AF37] mb-4">
                {venue.type}
              </span>

              <h3 className="font-cormorant text-3xl text-white mb-4 italic font-light">
                {venue.name}
              </h3>

              <p className="font-jost text-white/40 text-sm leading-relaxed mb-10 max-w-[250px]">
                {venue.address}
              </p>

              <a
                href={venue.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative px-8 py-3 overflow-hidden"
              >
                <div className="absolute inset-0 border border-[#D4AF37]/40 group-hover/btn:border-[#D4AF37] transition-colors" />
                <span className="relative font-jost text-[0.6rem] tracking-[0.3em] uppercase text-white group-hover/btn:text-[#D4AF37] transition-colors">
                  Open in Google Maps
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
