import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Schedule — MIZAN Fitness | Prayer-Aware Timetable",
  description: "Browse our weekly class schedule with Dhuhr, Asr, and Maghrib prayer breaks built in. Filter by Men, Women, or class type.",
};

const HERO = "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1800&q=85&auto=format&fit=crop";

type ClassEntry = {
  name: string;
  trainer: string;
  img: string;
  tag: string;
  color: string;
  gender: "all" | "women" | "men";
  spots: number;
};

const SCHEDULE: Record<string, (ClassEntry | "prayer")[]> = {
  "6:00 AM": [
    { name: "HIIT Burn", trainer: "Ali Hassan", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=75", tag: "High Intensity", color: "#C5A059", gender: "all", spots: 5 },
    null as unknown as ClassEntry,
    { name: "Morning Yoga", trainer: "Sara Khan", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=75", tag: "Mind & Body", color: "#2D5A46", gender: "women", spots: 8 },
    null as unknown as ClassEntry,
    { name: "HIIT Burn", trainer: "Ali Hassan", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=75", tag: "High Intensity", color: "#C5A059", gender: "all", spots: 3 },
    null as unknown as ClassEntry,
    null as unknown as ClassEntry,
  ],
  "Dhuhr": ["prayer", "prayer", "prayer", "prayer", "prayer", "prayer", "prayer"],
  "2:00 PM": [
    { name: "Strength", trainer: "Bilal Raza", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75", tag: "Power", color: "#8B2E2E", gender: "men", spots: 6 },
    { name: "Zumba", trainer: "Sara Khan", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=75", tag: "Dance", color: "#6B3D9E", gender: "women", spots: 12 },
    null as unknown as ClassEntry,
    { name: "Strength", trainer: "Bilal Raza", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75", tag: "Power", color: "#8B2E2E", gender: "men", spots: 4 },
    null as unknown as ClassEntry,
    { name: "Zumba", trainer: "Sara Khan", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=75", tag: "Dance", color: "#6B3D9E", gender: "women", spots: 9 },
    null as unknown as ClassEntry,
  ],
  "Asr": ["prayer", "prayer", "prayer", "prayer", "prayer", "prayer", "prayer"],
  "5:30 PM": [
    null as unknown as ClassEntry,
    { name: "Boxing", trainer: "Bilal Raza", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&q=75", tag: "Combat", color: "#C5A059", gender: "all", spots: 7 },
    { name: "Cycling", trainer: "Ali Hassan", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=75", tag: "Cardio", color: "#2D5A46", gender: "all", spots: 10 },
    { name: "Boxing", trainer: "Bilal Raza", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&q=75", tag: "Combat", color: "#C5A059", gender: "all", spots: 2 },
    { name: "Yoga Flow", trainer: "Sara Khan", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=75", tag: "Mind & Body", color: "#2D5A46", gender: "women", spots: 8 },
    null as unknown as ClassEntry,
    null as unknown as ClassEntry,
  ],
  "Maghrib": ["prayer", "prayer", "prayer", "prayer", "prayer", "prayer", "prayer"],
  "8:00 PM": [
    { name: "Night HIIT", trainer: "Ali Hassan", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=75", tag: "High Intensity", color: "#C5A059", gender: "all", spots: 6 },
    { name: "Strength", trainer: "Bilal Raza", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75", tag: "Power", color: "#8B2E2E", gender: "men", spots: 5 },
    { name: "Night HIIT", trainer: "Ali Hassan", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=75", tag: "High Intensity", color: "#C5A059", gender: "all", spots: 4 },
    null as unknown as ClassEntry,
    { name: "Strength", trainer: "Bilal Raza", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75", tag: "Power", color: "#8B2E2E", gender: "men", spots: 8 },
    { name: "Night HIIT", trainer: "Ali Hassan", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=75", tag: "High Intensity", color: "#C5A059", gender: "all", spots: 6 },
    null as unknown as ClassEntry,
  ],
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function ClassesPage() {
  return (
    <main style={{ background: "var(--base)" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO} alt="MIZAN Classes" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,13,10,1) 0%, rgba(8,13,10,0.5) 100%)" }} />
          <div className="absolute inset-0 lattice opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12">
          <p className="text-xs uppercase tracking-widest mb-2 anim-fade-up" style={{ color: "var(--brass)" }}>Prayer-Aware Schedule</p>
          <h1 className="font-display font-bold anim-fade-up delay-100" style={{ fontSize: "clamp(2.5rem,6vw,4rem)", color: "var(--ivory)" }}>
            Weekly Classes
          </h1>
        </div>
      </section>

      {/* Timetable */}
      <section className="py-20 px-4 lg:px-12 max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {[
              { label: "All Classes", color: "var(--brass)" },
              { label: "Men's", color: "#C5A059" },
              { label: "Women's Only", color: "#2D5A46" },
              { label: "🕌 Prayer Breaks", color: "rgba(197,160,89,0.5)" },
            ].map((f) => (
              <span
                key={f.label}
                className="text-xs px-4 py-2 rounded-full cursor-pointer transition-all"
                style={{ border: `1px solid ${f.color}`, color: f.color }}
              >
                {f.label}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Day headers */}
            <div className="grid gap-2 mb-3" style={{ gridTemplateColumns: "100px repeat(7, 1fr)" }}>
              <div />
              {DAYS.map((d) => (
                <div key={d} className="text-center text-xs uppercase tracking-widest font-semibold py-2" style={{ color: "var(--brass)" }}>
                  {d}
                </div>
              ))}
            </div>

            {/* Time rows */}
            {Object.entries(SCHEDULE).map(([time, row], ri) => {
              const isPrayer = row[0] === "prayer";
              return (
                <Reveal key={time} delay={ri * 60}>
                  <div
                    className="grid gap-2 mb-2 items-center"
                    style={{ gridTemplateColumns: "100px repeat(7, 1fr)" }}
                  >
                    {/* Time label */}
                    <div className={`text-xs text-right pr-3 ${isPrayer ? "font-semibold" : ""}`}
                      style={{ color: isPrayer ? "rgba(197,160,89,0.8)" : "var(--muted)" }}>
                      {isPrayer ? "🕌 " : ""}{time}
                    </div>

                    {row.map((cell, ci) => {
                      if (isPrayer) {
                        return (
                          <div
                            key={ci}
                            className="rounded-lg flex items-center justify-center py-3 text-xs"
                            style={{ background: "rgba(197,160,89,0.08)", color: "rgba(197,160,89,0.6)", border: "1px solid rgba(197,160,89,0.12)" }}
                          >
                            {ci === 3 ? "Prayer Break" : ""}
                          </div>
                        );
                      }

                      if (!cell) {
                        return <div key={ci} className="rounded-lg h-20" style={{ background: "var(--surface)", opacity: 0.3 }} />;
                      }

                      const c = cell as ClassEntry;
                      return (
                        <div
                          key={ci}
                          className="class-pill rounded-lg p-3 cursor-pointer relative overflow-hidden"
                          style={{ background: `${c.color}15`, border: `1px solid ${c.color}35`, minHeight: 80 }}
                        >
                          <span
                            className="text-xs px-2 py-0.5 rounded-full mb-1 inline-block"
                            style={{ background: `${c.color}25`, color: c.color, fontSize: "0.6rem" }}
                          >
                            {c.gender === "women" ? "♀ Women" : c.gender === "men" ? "♂ Men" : "All"}
                          </span>
                          <p className="font-semibold text-xs" style={{ color: "var(--ivory)" }}>{c.name}</p>
                          <p className="text-xs mt-0.5" style={{ color: "var(--muted)", fontSize: "0.65rem" }}>{c.trainer}</p>
                          <p className="text-xs mt-1" style={{ color: c.spots <= 3 ? "#EF4444" : "var(--muted)", fontSize: "0.65rem" }}>
                            {c.spots} spots left
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal>
          <p className="text-center text-sm mt-8" style={{ color: "var(--muted)" }}>
            Schedule shown for Lahore DHA branch. Times may vary slightly by location.
          </p>
        </Reveal>
      </section>

      {/* Class highlights */}
      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <h2 className="font-display font-bold text-center mb-12" style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)", color: "var(--ivory)" }}>
              Signature Formats
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "HIIT", icon: "🔥", desc: "Max effort, minimal equipment, maximum results in 45 minutes." },
              { name: "Yoga", icon: "🧘", desc: "Strength, breath, and balance — women-only sessions available." },
              { name: "Boxing", icon: "🥊", desc: "Technique-first combat training. No experience needed." },
              { name: "Zumba", icon: "💃", desc: "High-energy dance cardio. Women-only floor, always." },
            ].map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <div className="glass rounded-2xl p-6 text-center">
                  <p className="text-3xl mb-3">{c.icon}</p>
                  <p className="font-display font-semibold text-lg mb-2" style={{ color: "var(--ivory)" }}>{c.name}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp FAB */}
      <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
        className="wa-fab fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center"
        style={{ background: "var(--wa)" }} aria-label="Chat on WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      <Footer />
    </main>
  );
}
