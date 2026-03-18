// "use client";
// import { createClient } from "@supabase/supabase-js";
// import { useEffect, useState } from "react";

// // Initialize Supabase
// // const supabase = createClient("YOUR_SUPABASE_URL", "YOUR_SUPABASE_ANON_KEY");
// // This tells the code to look at your .env.local file automatically
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
// );
// interface Wish {
//   id: string;
//   name: string;
//   message: string;
//   created_at: string;
// }

// export default function Guestbook() {
//   const [wishes, setWishes] = useState<Wish[]>([]);
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function fetchWishes() {
//     const { data } = await supabase
//       .from("well_wishes")
//       .select("*")
//       .order("created_at", { ascending: false });
//     if (data) setWishes(data);
//   }

//   useEffect(() => {
//     console.log("--- Supabase Debug ---");
//     console.log("URL exists:", !!process.env.NEXT_PUBLIC_SUPABASE_URL);
//     console.log("Key exists:", !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
//     console.log(
//       "Key starts with:",
//       process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.substring(0, 5),
//     );
//   }, []);

//   // 1. Fetch messages & Listen for LIVE updates
//   useEffect(() => {
//     const fetchAndSubscribe = async () => {
//       await fetchWishes();

//       const channel = supabase
//         .channel("realtime_wishes")
//         .on(
//           "postgres_changes",
//           { event: "INSERT", schema: "public", table: "well_wishes" },
//           (payload) => {
//             setWishes((prev) => [payload.new as Wish, ...prev]);
//           },
//         )
//         .subscribe();

//       return channel;
//     };

//     let channelRef: ReturnType<typeof supabase.channel> | null = null;

//     fetchAndSubscribe().then((channel) => {
//       channelRef = channel;
//     });

//     return () => {
//       if (channelRef) {
//         supabase.removeChannel(channelRef);
//       }
//     };
//   }, []);

//   // 2. Submit new wish
//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     if (!name || !message) return;
//     setLoading(true);

//     const { error } = await supabase
//       .from("well_wishes") // Must match the table name exactly
//       .insert([{ name, message }]);

//     if (!error) {
//       setName("");
//       setMessage("");
//     }
//     setLoading(false);
//   }

//   return (
//     <section
//       id="guestbook"
//       className="py-24 bg-[#080310] border-t border-white/5"
//     >
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
//         {/* LEFT SIDE: THE INPUT BOX */}
//         <div>
//           <h2 className="font-cormorant italic text-5xl text-white mb-4">
//             Leave a Note
//           </h2>
//           <p className="text-[#D4AF37] font-jost text-sm tracking-widest mb-8 uppercase">
//             Your words mean the world to us
//           </p>

//           <form
//             onSubmit={handleSubmit}
//             className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl"
//           >
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#D4AF37] outline-none font-jost transition-all"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//             <textarea
//               placeholder="Write your well wishes..."
//               className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#D4AF37] outline-none font-jost transition-all"
//               rows={4}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             />
//             <button
//               disabled={loading}
//               className="w-full py-4 bg-[#D4AF37] text-black font-jost font-bold uppercase tracking-[0.3em] hover:bg-white hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>

//         {/* RIGHT SIDE: THE LIVE FEED (The Dashboard) */}
//         <div className="relative">
//           <h3 className="font-cormorant italic text-3xl text-white/90 mb-6 flex items-center gap-4">
//             Guestbook Feed
//             <span
//               className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"
//               title="Live Update On"
//             ></span>
//           </h3>

//           <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
//             {wishes.length === 0 ? (
//               <p className="text-white/20 font-jost italic">
//                 No messages yet. Be the first!
//               </p>
//             ) : (
//               wishes.map((wish) => (
//                 <div
//                   key={wish.id}
//                   className="p-6 bg-white/[0.03] border border-white/5 rounded-xl backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500"
//                 >
//                   <p className="text-white/80 font-cormorant italic text-xl mb-4 leading-relaxed">
//                     &ldquo;{wish.message}&rdquo;
//                   </p>
//                   <div className="flex justify-between items-center">
//                     <p className="text-[#D4AF37] font-jost text-xs tracking-widest uppercase">
//                       — {wish.name}
//                     </p>
//                     <span className="text-white/10 text-[10px] font-jost">
//                       {new Date(wish.created_at).toLocaleDateString()}
//                     </span>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 3px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #d4af37;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: transparent;
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Wish {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export default function Guestbook() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function fetchWishes() {
    try {
      const { data, error } = await supabase
        .from("well_wishes")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      if (data) setWishes(data);
    } catch (err) {
      console.error("Error fetching wishes:", err);
    }
  }

  useEffect(() => {
    fetchWishes();
    const channel = supabase
      .channel("realtime_wishes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "well_wishes" },
        (payload) => {
          setWishes((prev) => [payload.new as Wish, ...prev]);
        },
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !message) return;
    setLoading(true);
    const { error } = await supabase
      .from("well_wishes")
      .insert([{ name, message }]);
    if (error) {
      console.error("Submission error:", error.message);
      alert("Failed to send: " + error.message);
    } else {
      setName("");
      setMessage("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
    setLoading(false);
  }

  return (
    <section
      id="guestbook"
      className="py-28 bg-[#080310] border-t border-white/5 relative overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* HEADING */}
        <div className="text-center mb-14">
          <p className="text-[#D4AF37] font-jost text-xs tracking-[0.4em] uppercase mb-4">
            Share Your Love
          </p>
          <h2 className="font-cormorant italic text-5xl md:text-6xl text-white mb-5">
            Leave a Wish
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-[#D4AF37]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60" />
            <div className="h-px w-16 bg-[#D4AF37]/30" />
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm mb-20">
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="relative group">
              <label className="block text-[#D4AF37] font-jost text-[10px] tracking-[0.3em] uppercase mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full bg-transparent border-b border-white/15 pb-3 text-white placeholder:text-white/20 focus:border-[#D4AF37] outline-none font-jost text-sm transition-all duration-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <label className="block text-[#D4AF37] font-jost text-[10px] tracking-[0.3em] uppercase mb-2">
                Your Message
              </label>
              <textarea
                placeholder="Write something beautiful for the couple."
                className="w-full bg-transparent border-b border-white/15 pb-3 text-white placeholder:text-white/20 focus:border-[#D4AF37] outline-none font-jost text-sm transition-all duration-300 resize-none"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#D4AF37] text-black font-jost font-bold text-xs uppercase tracking-[0.35em] hover:bg-white transition-all duration-300 disabled:opacity-40 active:scale-[0.98]"
            >
              {loading
                ? "Sending..."
                : submitted
                  ? "✓ Wish Sent!"
                  : "Send Your Wish"}
            </button>
          </form>
        </div>

        {/* FEED HEADER */}
        {wishes.length > 0 && (
          <>
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-16 bg-white/10" />
                <span className="flex items-center gap-2 text-white/30 font-jost text-[10px] tracking-[0.3em] uppercase">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  {wishes.length} {wishes.length === 1 ? "Wish" : "Wishes"} so
                  far
                </span>
                <div className="h-px w-16 bg-white/10" />
              </div>
              <h3 className="font-cormorant italic text-3xl text-white/70">
                Messages of Love
              </h3>
            </div>

            {/* MASONRY-STYLE WISH CARDS */}
            <div className="columns-1 md:columns-2 gap-4 space-y-4">
              {wishes.map((wish, i) => (
                <div
                  key={wish.id}
                  className="break-inside-avoid mb-4 p-6 bg-white/[0.025] border border-white/[0.07] rounded-xl backdrop-blur-sm group hover:border-[#D4AF37]/20 transition-all duration-500"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {/* Decorative quote mark */}
                  <span className="block font-cormorant text-[#D4AF37]/20 text-5xl leading-none mb-1 select-none">
                    "
                  </span>
                  <p className="text-white/75 font-cormorant italic text-lg leading-relaxed mb-5">
                    {wish.message}
                  </p>
                  <div className="flex justify-between items-center pt-3 border-t border-white/5">
                    <p className="text-[#D4AF37] font-jost text-[10px] tracking-[0.25em] uppercase">
                      — {wish.name}
                    </p>
                    <span className="text-white/15 text-[9px] font-jost">
                      {new Date(wish.created_at).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* EMPTY STATE */}
        {wishes.length === 0 && (
          <div className="text-center py-16 opacity-30">
            <p className="font-cormorant italic text-2xl text-white/40">
              No wishes yet — be the first to write one ✨
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
