// "use client";
// import { useRef, useEffect, useState, useCallback } from "react";

// const galleryItems = [
//   { id: 1, fileId: "1449qTzugPLD2a2bsc8WpGv_WczsGzSrB", span: "tall" },
//   { id: 2, fileId: "1x14EM0EUy_QE5Ef6NjKb18WiZV3sg9AM", span: "normal" },
//   { id: 3, fileId: "18kd742EhS3teubo4Rrj0Pu22M1vwyBjc", span: "normal" },
//   { id: 4, fileId: "1Rgo2sI5Ri3LcdDxuwOWZ7dAWi8CgPJ6H", span: "wide" },
//   { id: 5, fileId: "18N0Hi2DRSlljNdTswGj0qYEi_x3kARKr", span: "normal" },
//   { id: 6, fileId: "1HwMl0RET8DGYJqODx-1o6FvZrV1KaDs_", span: "tall" },
//   { id: 7, fileId: "189xxOfK3VDGDw1i-sug4RQytkjHfO9FY", span: "normal" },
//   { id: 8, fileId: "1iGY5OK5QSV6nVBgPw9sqX2c1PZquKbIZ", span: "normal" },
//   { id: 9, fileId: "1cvU8FzRmILKECFl2Wt3VzMCUHqtsnobO", span: "wide" },
//   { id: 10, fileId: "1qVaS0oibJI8QjSVp70VC8jIbKYKE7GCP", span: "normal" },
//   { id: 11, fileId: "1Rgo2sI5Ri3LcdDxuwOWZ7dAWi8CgPJ6H", span: "tall" },
//   { id: 12, fileId: "18N0Hi2DRSlljNdTswGj0qYEi_x3kARKr", span: "normal" },
// ];

// const UNLOCK_DATE = new Date("2026-03-20T23:59:59").getTime();

// function useDriveImage(fileId: string, highRes = false) {
//   const urls = highRes
//     ? [
//         `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`,
//         `https://drive.google.com/uc?export=view&id=${fileId}`,
//       ]
//     : [
//         `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`,
//         `https://drive.google.com/uc?export=view&id=${fileId}`,
//       ];

//   const [urlIndex, setUrlIndex] = useState(0);
//   const [failed, setFailed] = useState(false);

//   const handleError = () => {
//     if (urlIndex < urls.length - 1) setUrlIndex((i) => i + 1);
//     else setFailed(true);
//   };

//   return { url: urls[urlIndex], failed, handleError };
// }

// function DriveImage({
//   fileId,
//   className,
//   highRes = false,
//   contain = false,
// }: any) {
//   const { url, failed, handleError } = useDriveImage(fileId, highRes);

//   if (failed) return <div className={`${className} bg-purple-900/20`} />;

//   return (
//     // eslint-disable-next-line @next/next/no-img-element
//     <img
//       src={url}
//       alt=""
//       className={`${className} ${contain ? "object-contain" : "object-cover"}`}
//       loading="lazy"
//       onError={handleError}
//       referrerPolicy="no-referrer"
//     />
//   );
// }

// function GalleryItem({ item, index, onClick }: any) {
//   const heightClass =
//     item.span === "tall"
//       ? "row-span-2"
//       : item.span === "wide"
//         ? "col-span-2"
//         : "";

//   return (
//     <div
//       className={`group relative overflow-hidden cursor-pointer ${heightClass} bg-[#0a0514]`}
//       onClick={() => onClick(index)}
//     >
//       <DriveImage
//         fileId={item.fileId}
//         className="w-full h-full transition-transform duration-700 group-hover:scale-105"
//       />
//       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
//     </div>
//   );
// }

// function Lightbox({ items, activeIndex, onClose, onPrev, onNext }: any) {
//   const item = items[activeIndex];
//   return (
//     <div
//       className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
//       onClick={onClose}
//     >
//       <div
//         className="relative max-w-5xl w-full flex items-center justify-center"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <DriveImage
//           fileId={item.fileId}
//           highRes
//           contain
//           className="max-h-[85vh] w-auto shadow-2xl"
//         />

//         {/* Navigation */}
//         <button
//           onClick={onPrev}
//           className="absolute left-0 text-white/50 hover:text-white text-4xl p-4"
//         >
//           ‹
//         </button>
//         <button
//           onClick={onNext}
//           className="absolute right-0 text-white/50 hover:text-white text-4xl p-4"
//         >
//           ›
//         </button>
//         <button
//           onClick={onClose}
//           className="absolute -top-10 right-0 text-white/50 hover:text-white text-2xl"
//         >
//           ✕ Close
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function Gallery() {
//   const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
//   const [isUnlocked, setIsUnlocked] = useState(false);

//   useEffect(() => {
//     const checkTime = () => setIsUnlocked(Date.now() > UNLOCK_DATE);
//     checkTime();
//     const timer = setInterval(checkTime, 10000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,400&family=Jost:wght@300;400&display=swap');
//         .font-cormorant { font-family: 'Cormorant Garamond', serif; }
//         .font-jost { font-family: 'Jost', sans-serif; }
//       `}</style>

//       <section className="bg-[#080310] py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="font-cormorant italic text-5xl text-white mb-2">
//               Gallery
//             </h2>
//             <p className="font-jost text-gold/60 tracking-[0.3em] uppercase text-xs">
//               Oluwatosin & Jesutomi
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[150px] md:auto-rows-[200px]">
//             {galleryItems.map((item, i) => (
//               <GalleryItem
//                 key={item.id}
//                 item={item}
//                 index={i}
//                 onClick={setLightboxIndex}
//               />
//             ))}
//           </div>

//           {!isUnlocked && (
//             <div className="mt-20 p-12 border border-yellow-500/20 bg-yellow-500/5 text-center">
//               <h3 className="font-cormorant italic text-3xl text-white mb-4">
//                 The Rest of Our Story...
//               </h3>
//               <p className="font-jost text-white/40 text-sm tracking-widest uppercase">
//                 Access to the Full Program & Details unlocks Saturday Morning
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {lightboxIndex !== null && (
//         <Lightbox
//           items={galleryItems}
//           activeIndex={lightboxIndex}
//           onClose={() => setLightboxIndex(null)}
//           onPrev={() =>
//             setLightboxIndex(
//               (i) => (i! - 1 + galleryItems.length) % galleryItems.length,
//             )
//           }
//           onNext={() => setLightboxIndex((i) => (i! + 1) % galleryItems.length)}
//         />
//       )}
//     </>
//   );
// }

// "use client";
// import { useRef, useEffect, useState, useCallback } from "react";

// const galleryItems = [
//   { id: 1, fileId: "1449qTzugPLD2a2bsc8WpGv_WczsGzSrB", span: "tall" },
//   { id: 2, fileId: "1x14EM0EUy_QE5Ef6NjKb18WiZV3sg9AM", span: "normal" },
//   { id: 3, fileId: "18kd742EhS3teubo4Rrj0Pu22M1vwyBjc", span: "normal" },
//   { id: 4, fileId: "1Rgo2sI5Ri3LcdDxuwOWZ7dAWi8CgPJ6H", span: "wide" },
//   { id: 5, fileId: "18N0Hi2DRSlljNdTswGj0qYEi_x3kARKr", span: "normal" },
//   { id: 6, fileId: "1HwMl0RET8DGYJqODx-1o6FvZrV1KaDs_", span: "tall" },
//   { id: 7, fileId: "189xxOfK3VDGDw1i-sug4RQytkjHfO9FY", span: "normal" },
//   { id: 8, fileId: "1iGY5OK5QSV6nVBgPw9sqX2c1PZquKbIZ", span: "normal" },
//   { id: 9, fileId: "1cvU8FzRmILKECFl2Wt3VzMCUHqtsnobO", span: "wide" },
//   { id: 10, fileId: "1qVaS0oibJI8QjSVp70VC8jIbKYKE7GCP", span: "normal" },
//   { id: 11, fileId: "1Rgo2sI5Ri3LcdDxuwOWZ7dAWi8CgPJ6H", span: "tall" },
//   { id: 12, fileId: "18N0Hi2DRSlljNdTswGj0qYEi_x3kARKr", span: "normal" },
// ];

// // SET UNLOCK DATE: Friday, March 20th, 2026 at 11:59 PM
// const UNLOCK_DATE = new Date("2026-03-20T23:59:00").getTime();

// function DriveImage({ fileId, className, highRes = false }: any) {
//   const url = highRes
//     ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`
//     : `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;

//   return (
//     <img
//       src={url}
//       alt=""
//       className={`${className} object-cover`}
//       loading="lazy"
//       referrerPolicy="no-referrer"
//     />
//   );
// }

// export default function Gallery() {
//   const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
//   const [isUnlocked, setIsUnlocked] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // Time Lock Logic
//   useEffect(() => {
//     const checkTime = () => setIsUnlocked(Date.now() > UNLOCK_DATE);
//     checkTime();
//     const timer = setInterval(checkTime, 10000);
//     return () => clearInterval(timer);
//   }, []);

//   // Slideshow Autoplay Logic
//   useEffect(() => {
//     let interval: any;
//     if (isPlaying && lightboxIndex !== null) {
//       interval = setInterval(() => {
//         setLightboxIndex((prev) => (prev! + 1) % galleryItems.length);
//       }, 3000);
//     }
//     return () => clearInterval(interval);
//   }, [isPlaying, lightboxIndex]);

//   const nextPhoto = () =>
//     setLightboxIndex((i) => (i! + 1) % galleryItems.length);
//   const prevPhoto = () =>
//     setLightboxIndex(
//       (i) => (i! - 1 + galleryItems.length) % galleryItems.length,
//     );

//   return (
//     <section id="gallery" className="py-24 bg-[#080310] px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="font-cormorant italic text-5xl text-white mb-4">
//             Gallery
//           </h2>
//           <div className="h-px w-20 bg-gold/30 mx-auto" />
//         </div>

//         {/* Full Rectangle Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[180px] md:auto-rows-[240px]">
//           {galleryItems.map((item, i) => (
//             <div
//               key={item.id}
//               onClick={() => isUnlocked && setLightboxIndex(i)}
//               className={`relative overflow-hidden group bg-white/5 border border-white/5
//                 ${item.span === "tall" ? "row-span-2" : item.span === "wide" ? "col-span-2" : ""}
//                 ${isUnlocked ? "cursor-pointer" : "cursor-default"}`}
//             >
//               {isUnlocked ? (
//                 <>
//                   <DriveImage
//                     fileId={item.fileId}
//                     className="w-full h-full transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
//                 </>
//               ) : (
//                 <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30">
//                   <span className="text-2xl mb-2">🔒</span>
//                   <p className="font-jost text-[8px] tracking-[0.3em] uppercase">
//                     Locked until Friday
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* FULL WIDTH LIGHTBOX */}
//       {lightboxIndex !== null && (
//         <div className="fixed inset-0 z-[500] bg-black/98 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-10">
//           {/* Controls Bar */}
//           <div className="absolute top-6 w-full px-10 flex justify-between items-center z-[510]">
//             <p className="font-jost text-gold/50 text-[10px] tracking-widest uppercase">
//               {lightboxIndex + 1} / {galleryItems.length}
//             </p>

//             <div className="flex gap-8">
//               <button
//                 onClick={() => setIsPlaying(!isPlaying)}
//                 className={`font-jost text-[10px] tracking-[0.2em] uppercase px-6 py-2 border transition-all
//                   ${isPlaying ? "bg-gold text-black border-gold" : "text-gold border-gold/30 hover:border-gold"}`}
//               >
//                 {isPlaying ? "Pause Slideshow ■" : "Play Slideshow ▶"}
//               </button>
//               <button
//                 onClick={() => {
//                   setLightboxIndex(null);
//                   setIsPlaying(false);
//                 }}
//                 className="text-white/60 hover:text-white text-xl"
//               >
//                 ✕
//               </button>
//             </div>
//           </div>

//           {/* Main Image View */}
//           <div
//             className="relative w-full max-w-7xl h-full flex items-center justify-center"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <DriveImage
//               fileId={galleryItems[lightboxIndex].fileId}
//               highRes
//               className="max-h-[85vh] w-auto object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-opacity duration-500"
//             />

//             {/* Nav Arrows */}
//             <button
//               onClick={prevPhoto}
//               className="absolute left-0 md:-left-12 p-6 text-white/20 hover:text-gold text-5xl transition-colors"
//             >
//               ‹
//             </button>
//             <button
//               onClick={nextPhoto}
//               className="absolute right-0 md:-right-12 p-6 text-white/20 hover:text-gold text-5xl transition-colors"
//             >
//               ›
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// "use client";
// import { useRef, useEffect, useState, useCallback } from "react";

// const galleryItems = [
//   // Keeping original items, only id: 11 is updated with new fileId from user
//   { id: 1, fileId: "1449qTzugPLD2a2bsc8WpGv_WczsGzSrB", span: "tall" },
//   { id: 2, fileId: "1x14EM0EUy_QE5Ef6NjKb18WiZV3sg9AM", span: "normal" },
//   { id: 3, fileId: "18kd742EhS3teubo4Rrj0Pu22M1vwyBjc", span: "normal" },
//   { id: 4, fileId: "1Rgo2sI5Ri3LcdDxuwOWZ7dAWi8CgPJ6H", span: "wide" },
//   { id: 5, fileId: "18N0Hi2DRSlljNdTswGj0qYEi_x3kARKr", span: "normal" },
//   { id: 6, fileId: "1HwMl0RET8DGYJqODx-1o6FvZrV1KaDs_", span: "tall" },
//   { id: 7, fileId: "189xxOfK3VDGDw1i-sug4RQytkjHfO9FY", span: "normal" },
//   { id: 8, fileId: "1iGY5OK5QSV6nVBgPw9sqX2c1PZquKbIZ", span: "normal" },
//   { id: 9, fileId: "1cvU8FzRmILKECFl2Wt3VzMCUHqtsnobO", span: "wide" },
//   { id: 10, fileId: "1qVaS0oibJI8QjSVp70VC8jIbKYKE7GCP", span: "normal" },
//   // UPDATED: Replaced old red image with new image from user link
//   { id: 11, fileId: "1TCjrqtDFjfIJ4sVT3yOz-P09QCzKJrX9", span: "tall" },
//   { id: 12, fileId: "18N0Hi2DRSlljNdTswGj0qYEi_x3kARKr", span: "normal" },
// ];

// function DriveImage({ fileId, className, highRes = false }: any) {
//   const url = highRes
//     ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`
//     : `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;

//   return (
//     <img
//       src={url}
//       alt=""
//       className={`${className} object-cover`}
//       loading="lazy"
//       referrerPolicy="no-referrer"
//     />
//   );
// }

// export default function Gallery() {
//   const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // Slideshow Autoplay Logic
//   useEffect(() => {
//     let interval: any;
//     if (isPlaying && lightboxIndex !== null) {
//       interval = setInterval(() => {
//         setLightboxIndex((prev) => (prev! + 1) % galleryItems.length);
//       }, 3000);
//     }
//     return () => clearInterval(interval);
//   }, [isPlaying, lightboxIndex]);

//   const nextPhoto = () =>
//     setLightboxIndex((i) => (i! + 1) % galleryItems.length);
//   const prevPhoto = () =>
//     setLightboxIndex(
//       (i) => (i! - 1 + galleryItems.length) % galleryItems.length,
//     );

//   return (
//     <section id="gallery" className="py-24 bg-[#080310] px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="font-cormorant italic text-5xl text-white mb-4">
//             Gallery
//           </h2>
//           <div className="h-px w-20 bg-[#D4AF37]/40 mx-auto" />
//         </div>

//         {/* Updated Grid for full rectangle form - gaps and spaces removed */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-0 auto-rows-[180px] md:auto-rows-[240px] border border-[#D4AF37]/10 overflow-hidden">
//           {galleryItems.map((item, i) => (
//             <div
//               key={item.id}
//               onClick={() => setLightboxIndex(i)}
//               className={`relative overflow-hidden group cursor-pointer
//                 ${item.span === "tall" ? "row-span-2" : item.span === "wide" ? "col-span-2" : ""}`}
//             >
//               <DriveImage
//                 fileId={item.fileId}
//                 className="w-full h-full transition-transform duration-700 group-hover:scale-105"
//               />
//               {/* Subtle overlay */}
//               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

//               {/* Hover Indicator */}
//               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                 <span className="text-white font-jost text-[10px] tracking-[0.3em] uppercase bg-black/40 px-4 py-2 backdrop-blur-sm">
//                   View Full
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* LIGHTBOX CODE REMAINS THE SAME */}
//       {lightboxIndex !== null && (
//         <div className="fixed inset-0 z-[500] bg-black/98 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-10">
//           {/* Controls Bar */}
//           <div className="absolute top-6 w-full px-10 flex justify-between items-center z-[510]">
//             <p className="font-jost text-[#D4AF37]/70 text-[10px] tracking-widest uppercase">
//               {lightboxIndex + 1} / {galleryItems.length}
//             </p>

//             <div className="flex gap-8">
//               <button
//                 onClick={() => setIsPlaying(!isPlaying)}
//                 className={`font-jost text-[10px] tracking-[0.2em] uppercase px-6 py-2 border transition-all
//                   ${isPlaying ? "bg-[#D4AF37] text-black border-[#D4AF37]" : "text-[#D4AF37] border-[#D4AF37]/30 hover:border-[#D4AF37]"}`}
//               >
//                 {isPlaying ? "Pause ■" : "Play ▶"}
//               </button>
//               <button
//                 onClick={() => {
//                   setLightboxIndex(null);
//                   setIsPlaying(false);
//                 }}
//                 className="text-white/60 hover:text-white text-xl"
//               >
//                 ✕
//               </button>
//             </div>
//           </div>

//           {/* Main Image View */}
//           <div
//             className="relative w-full max-w-7xl h-full flex items-center justify-center"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <DriveImage
//               fileId={galleryItems[lightboxIndex].fileId}
//               highRes
//               className="max-h-[85vh] w-auto object-contain shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-opacity duration-500"
//             />

//             {/* Nav Arrows */}
//             <button
//               onClick={prevPhoto}
//               className="absolute left-0 md:-left-16 p-6 text-white/20 hover:text-[#D4AF37] text-6xl transition-colors"
//             >
//               ‹
//             </button>
//             <button
//               onClick={nextPhoto}
//               className="absolute right-0 md:-right-16 p-6 text-white/20 hover:text-[#D4AF37] text-6xl transition-colors"
//             >
//               ›
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";

// const galleryItems = [
//   { id: 1, fileId: "1449qTzugPLD2a2bsc8WpGv_WczsGzSrB", span: "tall" },
//   { id: 2, fileId: "1x14EM0EUy_QE5Ef6NjKb18WiZV3sg9AM", span: "normal" },
//   { id: 3, fileId: "18kd742EhS3teubo4Rrj0Pu22M1vwyBjc", span: "normal" },
//   { id: 4, fileId: "1Rgo2sI5Ri3LcdDxuwOWZ7dAWi8CgPJ6H", span: "wide" },
//   { id: 5, fileId: "18N0Hi2DRSlljNdTswGj0qYEi_x3kARKr", span: "normal" },
//   { id: 6, fileId: "1HwMl0RET8DGYJqODx-1o6FvZrV1KaDs_", span: "tall" },
//   { id: 7, fileId: "189xxOfK3VDGDw1i-sug4RQytkjHfO9FY", span: "normal" },
//   { id: 8, fileId: "1iGY5OK5QSV6nVBgPw9sqX2c1PZquKbIZ", span: "normal" },
//   { id: 9, fileId: "1cvU8FzRmILKECFl2Wt3VzMCUHqtsnobO", span: "wide" },
//   { id: 10, fileId: "1qVaS0oibJI8QjSVp70VC8jIbKYKE7GCP", span: "normal" },
//   // FIXED: The red-background image is now replaced with your new link
//   { id: 11, fileId: "1TCjrqtDFjfIJ4sVT3yOz-P09QCzKJrX9", span: "wide" },
//   { id: 12, fileId: "18N0Hi2DRSlljNdTswGj0qYEi_x3kARKr", span: "normal" },
// ];

// function DriveImage({ fileId, className, highRes = false }: any) {
//   const url = highRes
//     ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`
//     : `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;

//   return (
//     <img
//       src={url}
//       alt="Wedding Gallery"
//       className={`${className} block object-cover w-full h-full`}
//       loading="lazy"
//       referrerPolicy="no-referrer"
//     />
//   );
// }

// export default function Gallery() {
//   const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     let interval: any;
//     if (isPlaying && lightboxIndex !== null) {
//       interval = setInterval(() => {
//         setLightboxIndex((prev) => (prev! + 1) % galleryItems.length);
//       }, 3000);
//     }
//     return () => clearInterval(interval);
//   }, [isPlaying, lightboxIndex]);

//   const nextPhoto = () =>
//     setLightboxIndex((i) => (i! + 1) % galleryItems.length);
//   const prevPhoto = () =>
//     setLightboxIndex(
//       (i) => (i! - 1 + galleryItems.length) % galleryItems.length,
//     );

//   return (
//     <section id="gallery" className="py-24 bg-[#080310]">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="font-cormorant italic text-5xl text-white mb-4">
//             Our Moments
//           </h2>
//           <div className="h-px w-24 bg-[#D4AF37] mx-auto opacity-50" />
//         </div>

//         {/* gap-0: Essential to make images touch perfectly.
//           overflow-hidden: Keeps the corners clean.
//         */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-0 auto-rows-[200px] md:auto-rows-[300px] overflow-hidden">
//           {galleryItems.map((item, i) => (
//             <div
//               key={item.id}
//               onClick={() => setLightboxIndex(i)}
//               className={`relative overflow-hidden group cursor-pointer
//                 ${item.span === "tall" ? "row-span-2" : item.span === "wide" ? "col-span-2" : ""}`}
//             >
//               <DriveImage
//                 fileId={item.fileId}
//                 className="transition-transform duration-1000 group-hover:scale-110"
//               />

//               {/* Subtle overlay that disappears on hover */}
//               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />

//               {/* Border to separate images without gaps */}
//               <div className="absolute inset-0 border-[0.5px] border-white/5 pointer-events-none" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Full-Screen Lightbox */}
//       {lightboxIndex !== null && (
//         <div className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4">
//           <div className="absolute top-8 w-full px-12 flex justify-between items-center">
//             <span className="font-jost text-[#D4AF37] text-xs tracking-widest uppercase">
//               {lightboxIndex + 1} / {galleryItems.length}
//             </span>
//             <div className="flex gap-10">
//               <button
//                 onClick={() => setIsPlaying(!isPlaying)}
//                 className="text-white text-[10px] tracking-[0.3em] uppercase hover:text-[#D4AF37] transition-colors"
//               >
//                 {isPlaying ? "Pause ■" : "Play ▶"}
//               </button>
//               <button
//                 onClick={() => {
//                   setLightboxIndex(null);
//                   setIsPlaying(false);
//                 }}
//                 className="text-white/40 hover:text-white text-3xl font-light"
//               >
//                 ✕
//               </button>
//             </div>
//           </div>

//           <div
//             className="relative w-full h-[80vh] flex items-center justify-center"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <DriveImage
//               fileId={galleryItems[lightboxIndex].fileId}
//               highRes
//               className="max-h-full w-auto object-contain"
//             />

//             <button
//               onClick={prevPhoto}
//               className="absolute left-4 md:-left-20 p-4 text-white/20 hover:text-[#D4AF37] text-7xl font-thin transition-all"
//             >
//               ‹
//             </button>
//             <button
//               onClick={nextPhoto}
//               className="absolute right-4 md:-right-20 p-4 text-white/20 hover:text-[#D4AF37] text-7xl font-thin transition-all"
//             >
//               ›
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

"use client";
import { useEffect, useState } from "react";

const galleryItems = [
  { id: 1, fileId: "1449qTzugPLD2a2bsc8WpGv_WczsGzSrB", span: "tall" },
  { id: 2, fileId: "1x14EM0EUy_QE5Ef6NjKb18WiZV3sg9AM", span: "normal" },
  { id: 3, fileId: "18kd742EhS3teubo4Rrj0Pu22M1vwyBjc", span: "normal" },
  { id: 4, fileId: "1Rgo2sI5Ri3LcdDxuwOWZ7dAWi8CgPJ6H", span: "wide" },
  { id: 5, fileId: "18N0Hi2DRSlljNdTswGj0qYEi_x3kARKr", span: "normal" },
  { id: 6, fileId: "1HwMl0RET8DGYJqODx-1o6FvZrV1KaDs_", span: "tall" },
  { id: 7, fileId: "189xxOfK3VDGDw1i-sug4RQytkjHfO9FY", span: "normal" },
  { id: 8, fileId: "1iGY5OK5QSV6nVBgPw9sqX2c1PZquKbIZ", span: "normal" },
  { id: 9, fileId: "1cvU8FzRmILKECFl2Wt3VzMCUHqtsnobO", span: "wide" },
  { id: 10, fileId: "1qVaS0oibJI8QjSVp70VC8jIbKYKE7GCP", span: "normal" },
  { id: 11, fileId: "1TCjrqtDFjfIJ4sVT3yOz-P09QCzKJrX9", span: "tall" },
  { id: 12, fileId: "18N0Hi2DRSlljNdTswGj0qYEi_x3kARKr", span: "normal" },
  { id: 13, fileId: "1lhNMwgs9-2VMXYReguYouGFsRybW8npC", span: "normal" },
  { id: 14, fileId: "1n9J0ELnzoRr4ZuspSNUUCxjEyoVUNLgn", span: "normal" },
  { id: 15, fileId: "18kd742EhS3teubo4Rrj0Pu22M1vwyBjc", span: "wide" },
];

// Saturday, March 21st, 2026 at 00:00:00
const UNLOCK_DATE = new Date("2026-03-21T00:00:00").getTime();

function DriveImage({ fileId, className, highRes = false }: any) {
  const url = highRes
    ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`
    : `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;

  return (
    <img
      src={url}
      alt="O&J Wedding"
      className={`${className} block object-cover w-full h-full`}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
}

export default function Gallery() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const checkTime = () => setIsUnlocked(Date.now() >= UNLOCK_DATE);
    checkTime();
    const timer = setInterval(checkTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="py-24 bg-[#080310]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant italic text-5xl text-white mb-4">
            Our Moments
          </h2>
          <div className="h-px w-24 bg-[#D4AF37] mx-auto opacity-40" />
          {!isUnlocked && (
            <p className="mt-6 font-jost text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase">
              Revealing Saturday 00:00
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 auto-rows-[220px] md:auto-rows-[300px] overflow-hidden border border-white/5 shadow-2xl">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              onClick={() => isUnlocked && setLightboxIndex(i)}
              className={`relative overflow-hidden group border-[0.5px] border-white/10
                ${item.span === "tall" ? "row-span-2" : ""}
                ${item.span === "wide" ? "col-span-2" : ""}
                ${isUnlocked ? "cursor-pointer" : "cursor-wait"}`}
            >
              {isUnlocked ? (
                <>
                  <DriveImage
                    fileId={item.fileId}
                    className="transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700" />
                </>
              ) : (
                /* LOCKED STATE - Sleek dark placeholder */
                <div className="w-full h-full bg-[#120a1f] flex flex-col items-center justify-center p-4">
                  <span className="text-white/10 text-4xl mb-2">🔒</span>
                  <div className="w-8 h-[1px] bg-[#D4AF37]/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox remains hidden unless unlocked */}
      {isUnlocked && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[1000] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <DriveImage
            fileId={galleryItems[lightboxIndex].fileId}
            highRes
            className="max-h-[85vh] w-auto object-contain"
          />
          <button className="absolute top-8 right-12 text-white/40 text-3xl font-light">
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
