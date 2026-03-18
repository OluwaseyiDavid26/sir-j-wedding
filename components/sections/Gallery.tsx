// "use client";
// import { useState } from "react";

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
//   { id: 11, fileId: "1TCjrqtDFjfIJ4sVT3yOz-P09QCzKJrX9", span: "tall" },
//   { id: 12, fileId: "18N0Hi2DRSlljNdTswGj0qYEi_x3kARKr", span: "normal" },
//   { id: 13, fileId: "1lhNMwgs9-2VMXYReguYouGFsRybW8npC", span: "normal" },
//   { id: 14, fileId: "1n9J0ELnzoRr4ZuspSNUUCxjEyoVUNLgn", span: "normal" },
//   { id: 15, fileId: "18kd742EhS3teubo4Rrj0Pu22M1vwyBjc", span: "wide" },
// ];

// // Per-item object position overrides — add any id here to control crop
// const objectPositionMap: Record<number, string> = {
//   6: "top", // grey suit couple — show faces
//   11: "top", // tall item — show faces
//   1: "top",
//   7: "top",
//   8: "top",
//   13: "top",
//   14: "top",
// };

// function DriveImage({
//   fileId,
//   className,
//   highRes = false,
//   objectPosition = "center",
// }: any) {
//   const url = `https://drive.google.com/thumbnail?id=${fileId}&sz=${highRes ? "w1600" : "w800"}`;
//   return (
//     <img
//       src={url}
//       alt=""
//       style={{ objectPosition }}
//       className={`${className} block object-cover w-full h-full`}
//       loading="lazy"
//       referrerPolicy="no-referrer"
//     />
//   );
// }

// export default function Gallery() {
//   const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

//   return (
//     <section id="gallery" className="py-24 bg-[#080310]">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="font-cormorant italic text-5xl text-white mb-4">
//             Our Moments
//           </h2>
//           <div className="h-px w-24 bg-[#D4AF37] mx-auto opacity-40" />
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-0 auto-rows-[200px] md:auto-rows-[300px] overflow-hidden border border-white/5">
//           {galleryItems.map((item, i) => (
//             <div
//               key={item.id}
//               onClick={() => setLightboxIndex(i)}
//               className={`relative overflow-hidden group cursor-pointer border-[0.5px] border-white/10
//                 ${item.span === "tall" ? "row-span-2" : ""}
//                 ${item.span === "wide" ? "col-span-2" : ""}`}
//             >
//               <DriveImage
//                 fileId={item.fileId}
//                 objectPosition={objectPositionMap[item.id] ?? "center"}
//                 className="transition-transform duration-1000 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {lightboxIndex !== null && (
//         <div
//           className="fixed inset-0 z-[1000] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4"
//           onClick={() => setLightboxIndex(null)}
//         >
//           <DriveImage
//             fileId={galleryItems[lightboxIndex].fileId}
//             highRes
//             className="max-h-[85vh] w-auto object-contain"
//           />
//         </div>
//       )}
//     </section>
//   );
// }
"use client";
import { useState, useEffect, useCallback, useRef } from "react";

const galleryItems = [
  { id: 1, fileId: "1449qTzugPLD2a2bsc8WpGv_WczsGzSrB", span: "tall" },
  { id: 2, fileId: "1x14EM0EUy_QE5Ef6NjKb18WiZV3sg9AM", span: "normal" },
  { id: 3, fileId: "18kd742EhS3teubo4Rrj0Pu22M1vwyBjc", span: "normal" },
  { id: 4, fileId: "1Rgo2sI5Ri3LcdDxuwOWZ7dAWi8CgPJ6H", span: "wide-tall" },
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

const objectPositionMap: Record<number, string> = {
  6: "top",
  11: "top",
  1: "top",
  7: "top",
  8: "top",
  13: "top",
  14: "top",
  4: "center", // black dress lady — full height now
  9: "50% 30%", // pink couple — shift up to show couple properly
};

const SLIDESHOW_INTERVAL = 3000;

// Grid thumbnail image — always fills its cell
function GridImage({
  fileId,
  objectPosition = "center",
  className = "",
}: {
  fileId: string;
  objectPosition?: string;
  className?: string;
}) {
  const url = `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
  return (
    <img
      src={url}
      alt=""
      style={{ objectPosition }}
      className={`block object-cover w-full h-full ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
}

// Lightbox image — must NOT inherit object-cover / w-full / h-full
function LightboxImage({ fileId }: { fileId: string }) {
  const url = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`;
  return (
    <img
      src={url}
      alt=""
      className="block object-contain max-h-[85vh] max-w-[90vw] w-auto h-auto"
      referrerPolicy="no-referrer"
    />
  );
}

// Icons
function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}
function ChevronLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-6 h-6"
    >
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-6 h-6"
    >
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-6 h-6"
    >
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setIsPlaying(false);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setIsPlaying(false);
  };

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? 0 : (prev + 1) % galleryItems.length,
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null
        ? galleryItems.length - 1
        : (prev - 1 + galleryItems.length) % galleryItems.length,
    );
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying((p) => !p);
  };

  // Slideshow auto-advance
  useEffect(() => {
    if (isPlaying && lightboxIndex !== null) {
      intervalRef.current = setInterval(goNext, SLIDESHOW_INTERVAL);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, lightboxIndex, goNext]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <section id="gallery" className="py-24 bg-[#080310]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant italic text-5xl text-white mb-4">
            Our Moments
          </h2>
          <div className="h-px w-24 bg-[#D4AF37] mx-auto opacity-40" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 auto-rows-[200px] md:auto-rows-[300px] overflow-hidden border border-white/5">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              onClick={() => openLightbox(i)}
              className={`relative overflow-hidden group cursor-pointer border-[0.5px] border-white/10
                ${item.span === "tall" ? "row-span-2" : ""}
                ${item.span === "wide" ? "col-span-2" : ""}
                ${item.span === "wide-tall" ? "col-span-2 row-span-2" : ""}`}
            >
              <GridImage
                fileId={item.fileId}
                objectPosition={objectPositionMap[item.id] ?? "center"}
                className="transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-2xl flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Image — stop propagation so clicks on it don't close */}
          <div
            className="relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <LightboxImage fileId={galleryItems[lightboxIndex].fileId} />
          </div>

          {/* Top bar — play/pause centered, close on right */}
          <div
            className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Spacer left */}
            <div className="w-10" />

            {/* Play / Pause — center */}
            <button
              onClick={togglePlay}
              className="flex items-center gap-2 text-sm text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-5 py-2.5 transition-all duration-200 backdrop-blur-sm"
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
              <span>{isPlaying ? "Pause" : "Play Slideshow"}</span>
            </button>

            {/* Close — right */}
            <button
              onClick={closeLightbox}
              className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-200"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-200"
          >
            <ChevronLeft />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-200"
          >
            <ChevronRight />
          </button>

          {/* Bottom — dot indicators */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === lightboxIndex
                    ? "w-4 h-2 bg-[#D4AF37]"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Progress bar when playing */}
          {isPlaying && (
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10">
              <div
                key={lightboxIndex}
                className="h-full bg-[#D4AF37]"
                style={{
                  animation: `progress ${SLIDESHOW_INTERVAL}ms linear forwards`,
                }}
              />
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes progress {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>
    </section>
  );
}
