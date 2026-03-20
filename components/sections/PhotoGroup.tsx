// "use client";
// import { useRef, useEffect, useState } from "react";

// const photoGroups = [
//   {
//     number: "01",
//     title: "The Couple",
//     description: "Bride & Groom alone",
//   },
//   {
//     number: "02",
//     title: "Bride's Family",
//     description: "Bride with her immediate family",
//   },
//   {
//     number: "03",
//     title: "Groom's Family",
//     description: "Groom with his immediate family",
//   },
//   {
//     number: "04",
//     title: "Both Families",
//     description: "Bride & Groom with both families together",
//   },
//   {
//     number: "05",
//     title: "Bridal Train",
//     description: "Bride with her bridesmaids",
//   },
//   {
//     number: "06",
//     title: "Groomsmen",
//     description: "Groom with his groomsmen",
//   },
//   {
//     number: "07",
//     title: "Full Bridal Party",
//     description: "Couple with bridesmaids & groomsmen",
//   },
//   {
//     number: "08",
//     title: "Officiating Ministers",
//     description: "Couple with officiating ministers",
//   },
//   {
//     number: "09",
//     title: "Church Members",
//     description: "Couple with members of First Baptist Church",
//   },
//   {
//     number: "10",
//     title: "Friends & Well Wishers",
//     description: "Couple with friends and guests",
//   },
//   {
//     number: "11",
//     title: "Couple Portrait",
//     description: "Final portraits of the couple",
//   },
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

// function PhotoItem({
//   item,
//   index,
// }: {
//   item: (typeof photoGroups)[0];
//   index: number;
// }) {
//   const { ref, inView } = useInView();

//   return (
//     <div
//       ref={ref}
//       className="group relative flex items-center gap-6 py-5 cursor-default"
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateX(0)" : "translateX(-24px)",
//         transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
//         borderBottom: "1px solid rgba(255,255,255,0.05)",
//       }}
//     >
//       {/* Hover bg sweep */}
//       <div
//         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//         style={{
//           background:
//             "linear-gradient(to right, rgba(212,175,55,0.04), transparent)",
//         }}
//       />

//       {/* Number */}
//       <div className="shrink-0 w-14 flex flex-col items-center gap-1">
//         <span
//           className="font-jost text-[0.6rem] tracking-[0.2em] font-medium transition-colors duration-300"
//           style={{ color: "rgba(212,175,55,0.4)" }}
//         >
//           {item.number}
//         </span>
//         {/* Vertical tick */}
//         <div
//           className="w-px h-4 transition-all duration-300"
//           style={{ background: "rgba(212,175,55,0.15)" }}
//         />
//       </div>

//       {/* Gold dot indicator */}
//       <div
//         className="shrink-0 w-2 h-2 rotate-45 transition-all duration-400"
//         style={{
//           background: "rgba(212,175,55,0.25)",
//           boxShadow: "none",
//         }}
//         ref={(el) => {
//           if (el) {
//             el.closest(".group")?.addEventListener("mouseenter", () => {
//               el.style.background = "#D4AF37";
//               el.style.boxShadow = "0 0 10px rgba(212,175,55,0.5)";
//             });
//             el.closest(".group")?.addEventListener("mouseleave", () => {
//               el.style.background = "rgba(212,175,55,0.25)";
//               el.style.boxShadow = "none";
//             });
//           }
//         }}
//       />

//       {/* Content */}
//       <div className="flex flex-col flex-1 min-w-0">
//         <h3
//           className="font-cormorant font-light text-white/80 group-hover:text-white
//             transition-colors duration-300 leading-tight"
//           style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
//         >
//           {item.title}
//         </h3>
//         <p
//           className="font-jost text-[0.62rem] tracking-[0.12em] mt-1 transition-colors duration-300"
//           style={{ color: "rgba(255,255,255,0.25)" }}
//         >
//           {item.description}
//         </p>
//       </div>

//       {/* Right arrow — appears on hover */}
//       <div
//         className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300
//         translate-x-2 group-hover:translate-x-0 pr-2"
//       >
//         <div className="flex items-center gap-1">
//           <div
//             className="w-8 h-px"
//             style={{ background: "rgba(212,175,55,0.5)" }}
//           />
//           <div
//             className="w-1.5 h-1.5 rotate-45 border-t border-r"
//             style={{ borderColor: "rgba(212,175,55,0.5)" }}
//           />
//         </div>
//       </div>

//       {/* Bottom gold sweep line on hover */}
//       <div
//         className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 pointer-events-none"
//         style={{
//           background:
//             "linear-gradient(to right, rgba(212,175,55,0.4), transparent)",
//         }}
//       />
//     </div>
//   );
// }

// export default function OrderOfPhotograph() {
//   const { ref: headerRef, inView: headerIn } = useInView(0.3);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
//         .font-cormorant { font-family: 'Cormorant Garamond', serif; }
//         .font-jost { font-family: 'Jost', sans-serif; }
//       `}</style>

//       <section
//         id="photograph"
//         className="relative py-28 px-6 overflow-hidden"
//         style={{
//           background:
//             "linear-gradient(to bottom, #080310 0%, #0d0618 50%, #080310 100%)",
//         }}
//       >
//         {/* Ambient glows */}
//         <div
//           className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(107,63,160,0.1) 0%, transparent 70%)",
//             transform: "translateX(40%)",
//           }}
//         />
//         <div
//           className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
//             transform: "translateX(-40%)",
//           }}
//         />

//         <div className="max-w-3xl mx-auto relative z-10">
//           {/* Header */}
//           <div
//             ref={headerRef}
//             className="flex flex-col items-center text-center mb-16"
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
//               Capturing the Moments
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
//               Order of Photograph
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

//           {/* List */}
//           <div className="flex flex-col relative">
//             {/* Left border line */}
//             <div
//               className="absolute left-14 top-0 bottom-0 w-px pointer-events-none"
//               style={{
//                 background:
//                   "linear-gradient(to bottom, transparent, rgba(212,175,55,0.1) 10%, rgba(212,175,55,0.1) 90%, transparent)",
//               }}
//             />

//             {photoGroups.map((item, i) => (
//               <PhotoItem key={item.number} item={item} index={i} />
//             ))}
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
//               Every moment, forever preserved
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";
import { useRef, useEffect, useState } from "react";

const photoGroups = [
  {
    number: "01",
    title: "Officiating Ministers",
    description: "Couple with the officiating ministers",
  },
  {
    number: "02",
    title: "The Couple Alone",
    description: "Bride & Groom — just the two of them",
  },
  {
    number: "03",
    title: "Both Parents",
    description: "Couple with both sets of parents",
  },
  {
    number: "04",
    title: "Bride's Parents",
    description: "Couple with the bride's parents",
  },
  {
    number: "05",
    title: "Bride's Parents & Siblings",
    description: "Couple with bride's parents and siblings",
  },
  {
    number: "06",
    title: "Groom's Parents",
    description: "Couple with the groom's parents",
  },
  {
    number: "07",
    title: "Groom's Parents & Siblings",
    description: "Couple with groom's parents and siblings",
  },
  {
    number: "08",
    title: "Both Families",
    description: "Couple with both families together",
  },
  {
    number: "09",
    title: "Bride's Family",
    description: "Couple with the bride's full family",
  },
  {
    number: "10",
    title: "Groom's Family",
    description: "Couple with the groom's full family",
  },
  {
    number: "11",
    title: "Bride's Ladies",
    description: "Couple with the bridesmaids",
  },
  {
    number: "12",
    title: "Groom's Men",
    description: "Couple with the groomsmen",
  },
  {
    number: "13",
    title: "First Baptist Church Owo",
    description: "Couple with First Baptist Church Owo",
  },
  {
    number: "14",
    title: "Baptist Family",
    description: "Couple with the Baptist family",
  },
  {
    number: "15",
    title: "CAC Oke Iyin",
    description: "Couple with CAC Oke Iyin",
  },
  {
    number: "16",
    title: "Pastor Raju Babatunde & Family",
    description: "Couple with Pastor Raju Babatunde and family",
  },
  {
    number: "17",
    title: "Victory Chapel International",
    description: "Couple with Victory Chapel International",
  },
  {
    number: "18",
    title: "CEM Family",
    description: "Couple with the CEM family",
  },
  {
    number: "19",
    title: "TCS Family",
    description: "Couple with the TCS family",
  },
  {
    number: "20",
    title: "FUTMinna / FCS",
    description: "Couple with FUTMinna / FCS",
  },
  {
    number: "21",
    title: "BSF OAU Family",
    description: "Couple with BSF OAU family",
  },
  {
    number: "22",
    title: "OAU Family",
    description: "Couple with the OAU family",
  },
  {
    number: "23",
    title: "Christian Embassy International (CEI)",
    description: "Couple with CEI family",
  },
  {
    number: "24",
    title: "JOWIS Studio",
    description: "Couple with JOWIS Studio",
  },
  {
    number: "25",
    title: "Polays",
    description: "Couple with Polays",
  },
  {
    number: "26",
    title: "Alles Charis",
    description: "Couple with Alles Charis",
  },
  {
    number: "27",
    title: "Anmut & RBD Group",
    description: "Couple with Anmut and RBD Group",
  },
  {
    number: "28",
    title: "Square Farms",
    description: "Couple with Square Farms",
  },
  {
    number: "29",
    title: "Pharmacists",
    description: "Couple with the pharmacists",
  },
  {
    number: "30",
    title: "Godman Family",
    description: "Couple with the Godman family",
  },
  {
    number: "31",
    title: "FMC Family",
    description: "Couple with FMC family",
  },
  {
    number: "32",
    title: "Hopeland Family",
    description: "Couple with Hopeland family",
  },
  {
    number: "33",
    title: "Achievers Family",
    description: "Couple with Achievers family",
  },
  {
    number: "34",
    title: "Groom's Friends",
    description: "Couple with the groom's friends",
  },
  {
    number: "35",
    title: "Bride's Friends",
    description: "Couple with the bride's friends",
  },
  {
    number: "36",
    title: "Well Wishers",
    description: "Couple with friends and well wishers",
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

function PhotoItem({
  item,
  index,
}: {
  item: (typeof photoGroups)[0];
  index: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="group relative flex items-center gap-6 py-5 cursor-default"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-24px)",
        transition: `opacity 0.6s ease ${index * 50}ms, transform 0.6s ease ${index * 50}ms`,
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Hover bg sweep */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(212,175,55,0.04), transparent)",
        }}
      />

      {/* Number */}
      <div className="shrink-0 w-14 flex flex-col items-center gap-1">
        <span
          className="font-jost text-[0.6rem] tracking-[0.2em] font-medium transition-colors duration-300"
          style={{ color: "rgba(212,175,55,0.4)" }}
        >
          {item.number}
        </span>
        <div
          className="w-px h-4 transition-all duration-300"
          style={{ background: "rgba(212,175,55,0.15)" }}
        />
      </div>

      {/* Gold dot indicator */}
      <div
        className="shrink-0 w-2 h-2 rotate-45 transition-all duration-400"
        style={{
          background: "rgba(212,175,55,0.25)",
          boxShadow: "none",
        }}
        ref={(el) => {
          if (el) {
            el.closest(".group")?.addEventListener("mouseenter", () => {
              el.style.background = "#D4AF37";
              el.style.boxShadow = "0 0 10px rgba(212,175,55,0.5)";
            });
            el.closest(".group")?.addEventListener("mouseleave", () => {
              el.style.background = "rgba(212,175,55,0.25)";
              el.style.boxShadow = "none";
            });
          }
        }}
      />

      {/* Content */}
      <div className="flex flex-col flex-1 min-w-0">
        <h3
          className="font-cormorant font-light text-white/80 group-hover:text-white
            transition-colors duration-300 leading-tight"
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
        >
          {item.title}
        </h3>
        <p
          className="font-jost text-[0.62rem] tracking-[0.12em] mt-1 transition-colors duration-300"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          {item.description}
        </p>
      </div>

      {/* Right arrow — appears on hover */}
      <div
        className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300
        translate-x-2 group-hover:translate-x-0 pr-2"
      >
        <div className="flex items-center gap-1">
          <div
            className="w-8 h-px"
            style={{ background: "rgba(212,175,55,0.5)" }}
          />
          <div
            className="w-1.5 h-1.5 rotate-45 border-t border-r"
            style={{ borderColor: "rgba(212,175,55,0.5)" }}
          />
        </div>
      </div>

      {/* Bottom gold sweep line on hover */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(212,175,55,0.4), transparent)",
        }}
      />
    </div>
  );
}

export default function OrderOfPhotograph() {
  const { ref: headerRef, inView: headerIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
      `}</style>

      <section
        id="photograph"
        className="relative py-28 px-6 overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, #080310 0%, #0d0618 50%, #080310 100%)",
        }}
      >
        {/* Ambient glows */}
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
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
            <p
              className="font-jost text-[0.6rem] tracking-[0.5em] uppercase mb-4"
              style={{ color: "rgba(212,175,55,0.7)" }}
            >
              Capturing the Moments
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
              Order of Photograph
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

          {/* List */}
          <div className="flex flex-col relative">
            {/* Left border line */}
            <div
              className="absolute left-14 top-0 bottom-0 w-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(212,175,55,0.1) 10%, rgba(212,175,55,0.1) 90%, transparent)",
              }}
            />

            {photoGroups.map((item, i) => (
              <PhotoItem key={item.number} item={item} index={i} />
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
              Every moment, forever preserved
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
