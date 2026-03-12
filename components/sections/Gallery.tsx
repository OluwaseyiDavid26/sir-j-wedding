"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";

// Dummy gallery items — swap src with real Drive images later
const galleryItems = [
  { id: 1, src: "/tt28.jpg", alt: "Couple portrait", span: "tall" },
  { id: 2, src: "/tt28.jpg", alt: "Bride close up", span: "normal" },
  { id: 3, src: "/tt28.jpg", alt: "Groom portrait", span: "normal" },
  { id: 4, src: "/tt28.jpg", alt: "Couple walking", span: "wide" },
  { id: 5, src: "/tt28.jpg", alt: "Romantic moment", span: "tall" },
  { id: 6, src: "/tt28.jpg", alt: "Bride detail", span: "normal" },
  { id: 7, src: "/tt28.jpg", alt: "Ring shot", span: "normal" },
  { id: 8, src: "/tt28.jpg", alt: "Couple laughing", span: "normal" },
  { id: 9, src: "/tt28.jpg", alt: "Sunset portrait", span: "wide" },
  { id: 10, src: "/tt28.jpg", alt: "Intimate moment", span: "normal" },
  { id: 11, src: "/tt28.jpg", alt: "Bride & groom", span: "tall" },
  { id: 12, src: "/tt28.jpg", alt: "Full length portrait", span: "normal" },
];

function useInView(threshold = 0.1) {
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

function GalleryItem({
  item,
  index,
  onClick,
}: {
  item: (typeof galleryItems)[0];
  index: number;
  onClick: (index: number) => void;
}) {
  const { ref, inView } = useInView();

  const heightClass =
    item.span === "tall"
      ? "row-span-2"
      : item.span === "wide"
        ? "col-span-2"
        : "";

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden cursor-pointer ${heightClass}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.95)",
        transition: `opacity 0.7s ease ${index * 80}ms, transform 0.7s ease ${index * 80}ms`,
        minHeight: item.span === "tall" ? "420px" : "200px",
      }}
      onClick={() => onClick(index)}
    >
      {/* Image */}
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(to top, rgba(5,2,12,0.85) 0%, rgba(5,2,12,0.2) 60%, transparent 100%)",
        }}
      />

      {/* Corner brackets */}
      <div className="absolute inset-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-5 h-5"
          style={{
            borderTop: "1px solid rgba(212,175,55,0.8)",
            borderLeft: "1px solid rgba(212,175,55,0.8)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-5 h-5"
          style={{
            borderTop: "1px solid rgba(212,175,55,0.8)",
            borderRight: "1px solid rgba(212,175,55,0.8)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-5 h-5"
          style={{
            borderBottom: "1px solid rgba(212,175,55,0.8)",
            borderLeft: "1px solid rgba(212,175,55,0.8)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-5 h-5"
          style={{
            borderBottom: "1px solid rgba(212,175,55,0.8)",
            borderRight: "1px solid rgba(212,175,55,0.8)",
          }}
        />
      </div>

      {/* Caption */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4 translate-y-2
        opacity-0 group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-500"
      >
        <p className="font-cormorant italic text-white/80 text-sm">
          {item.alt}
        </p>
      </div>

      {/* Expand icon */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-10 h-10 flex items-center justify-center
        opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100
        transition-all duration-400"
        style={{ border: "1px solid rgba(212,175,55,0.6)" }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M1 1h4M1 1v4M13 1h-4M13 1v4M1 13h4M1 13v-4M13 13h-4M13 13v-4"
            stroke="rgba(212,175,55,0.9)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function Lightbox({
  items,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: {
  items: typeof galleryItems;
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  const item = items[activeIndex];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: "rgba(5,2,12,0.96)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      {/* Image container */}
      <div
        className="relative w-full max-w-4xl mx-6"
        style={{ maxHeight: "85vh", aspectRatio: "3/2" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Corner brackets */}
        <div className="absolute -inset-2 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-8 h-8"
            style={{
              borderTop: "1px solid rgba(212,175,55,0.5)",
              borderLeft: "1px solid rgba(212,175,55,0.5)",
            }}
          />
          <div
            className="absolute top-0 right-0 w-8 h-8"
            style={{
              borderTop: "1px solid rgba(212,175,55,0.5)",
              borderRight: "1px solid rgba(212,175,55,0.5)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-8 h-8"
            style={{
              borderBottom: "1px solid rgba(212,175,55,0.5)",
              borderLeft: "1px solid rgba(212,175,55,0.5)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-8 h-8"
            style={{
              borderBottom: "1px solid rgba(212,175,55,0.5)",
              borderRight: "1px solid rgba(212,175,55,0.5)",
            }}
          />
        </div>

        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
          priority
        />

        {/* Caption */}
        <div
          className="absolute bottom-0 left-0 right-0 p-5"
          style={{
            background:
              "linear-gradient(to top, rgba(5,2,12,0.9), transparent)",
          }}
        >
          <p className="font-cormorant italic text-white/70 text-base">
            {item.alt}
          </p>
          <p
            className="font-jost text-[0.55rem] tracking-[0.3em] uppercase mt-1"
            style={{ color: "rgba(212,175,55,0.5)" }}
          >
            {activeIndex + 1} / {items.length}
          </p>
        </div>
      </div>

      {/* Prev button */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center
          transition-all duration-300 hover:scale-110 border-none outline-none cursor-pointer"
        style={{
          background: "rgba(212,175,55,0.1)",
          border: "1px solid rgba(212,175,55,0.2)",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 3L5 8l5 5"
            stroke="rgba(212,175,55,0.8)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Next button */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center
          transition-all duration-300 hover:scale-110 border-none outline-none cursor-pointer"
        style={{
          background: "rgba(212,175,55,0.1)",
          border: "1px solid rgba(212,175,55,0.2)",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 3l5 5-5 5"
            stroke="rgba(212,175,55,0.8)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Close button */}
      <button
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center
          transition-all duration-300 hover:scale-110 border-none outline-none cursor-pointer"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        onClick={onClose}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M1 1l12 12M13 1L1 13"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref: headerRef, inView: headerIn } = useInView(0.3);

  const openLightbox = useCallback(
    (index: number) => setLightboxIndex(index),
    [],
  );
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevPhoto = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i - 1 + galleryItems.length) % galleryItems.length : null,
      ),
    [],
  );
  const nextPhoto = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i + 1) % galleryItems.length : null,
      ),
    [],
  );

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
      `}</style>

      <section
        id="gallery"
        className="relative py-28 px-6 overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, #080310 0%, #0a0514 50%, #080310 100%)",
        }}
      >
        {/* Ambient glows */}
        <div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(107,63,160,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
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
              Our Story in Frames
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
              Gallery
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
                Oluwatosin & Jesutomi
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

          {/* Masonry Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
            style={{ gridAutoRows: "200px" }}
          >
            {galleryItems.map((item, i) => (
              <GalleryItem
                key={item.id}
                item={item}
                index={i}
                onClick={openLightbox}
              />
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
              Every picture tells our story
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={galleryItems}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </>
  );
}
