import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join MIZAN — Enroll in 3 Simple Steps",
  description: "Join Pakistan's most transparent premium gym. Choose your plan, pick your branch, and book your free trial — all in 3 minutes.",
};

const HERO = "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1800&q=85&auto=format&fit=crop";

const STEPS = [
  {
    num: "01",
    title: "Choose Your Plan",
    desc: "Silver, Gold, or Platinum. All plans include women's wing access, prayer-break schedules, and zero hidden fees.",
    icon: "🏅",
  },
  {
    num: "02",
    title: "Pick Your Branch",
    desc: "Lahore DHA, Karachi Clifton, or Islamabad F-7. Gold and Platinum members can access all three.",
    icon: "📍",
  },
  {
    num: "03",
    title: "Book Your Free Trial",
    desc: "Walk in the same day. WhatsApp us to confirm your slot — no forms, no card required.",
    icon: "✅",
  },
];

const BRANCHES = [
  { name: "Lahore — DHA Phase 6", wa: "923001234567", active: true },
  { name: "Karachi — Clifton Block 9", wa: "923001234568", active: false },
  { name: "Islamabad — F-7 Markaz", wa: "923001234569", active: false },
];

export default function JoinPage() {
  return (
    <main style={{ background: "var(--base)" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO} alt="Join MIZAN" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,13,10,1) 0%, rgba(8,13,10,0.5) 100%)" }} />
          <div className="absolute inset-0 lattice opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12">
          <p className="text-xs uppercase tracking-widest mb-2 anim-fade-up" style={{ color: "var(--brass)" }}>Begin Today</p>
          <h1 className="font-display font-bold anim-fade-up delay-100" style={{ fontSize: "clamp(2.5rem,6vw,4rem)", color: "var(--ivory)" }}>
            Join <span className="text-shimmer">MIZAN</span>
          </h1>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-display font-bold text-center mb-4" style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)", color: "var(--ivory)" }}>
            Up and running in 3 steps
          </h2>
          <div className="gold-rule-center mb-14" />
        </Reveal>

        <div className="space-y-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 120}>
              <div
                className="flex gap-6 items-start rounded-2xl p-8"
                style={{ background: "var(--surface)", border: "1px solid var(--border-mid)" }}
              >
                <div
                  className="font-display font-bold shrink-0 text-shimmer"
                  style={{ fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1 }}
                >
                  {step.num}
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="font-display font-semibold text-xl" style={{ color: "var(--ivory)" }}>{step.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--silver)" }}>{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Branch selection */}
      <section className="py-10 px-6 lg:px-12 max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-display font-bold text-center mb-3" style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--ivory)" }}>
            Select Your Branch
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: "var(--muted)" }}>
            WhatsApp the branch directly — they&apos;ll book your trial class instantly.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BRANCHES.map((b, i) => (
            <Reveal key={b.name} delay={i * 80} type="scale">
              <a
                href={`https://wa.me/${b.wa}?text=Hi%2C+I%27d+like+to+join+MIZAN+and+book+a+free+trial!`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl p-6 text-center transition-all group"
                style={{
                  background: "var(--surface)",
                  border: `1px solid ${b.active ? "var(--brass)" : "var(--border-mid)"}`,
                  boxShadow: b.active ? "var(--glow-gold)" : "none",
                }}
              >
                <div className="text-3xl mb-3">📍</div>
                <p
                  className="font-display font-semibold text-lg mb-1 group-hover:text-shimmer transition-colors"
                  style={{ color: b.active ? "var(--brass)" : "var(--ivory)" }}
                >
                  {b.name}
                </p>
                <div
                  className="mt-4 flex items-center justify-center gap-2 text-sm"
                  style={{ color: "var(--wa)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Book Free Trial
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Reassurance */}
      <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto">
        <Reveal>
          <div
            className="rounded-2xl p-10 text-center"
            style={{ background: "var(--surface)", border: "1px solid var(--border-gold)" }}
          >
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--brass)" }}>Our Guarantee</p>
            <h2 className="font-display font-bold mb-4" style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--ivory)" }}>
              No commitment required for your free trial
            </h2>
            <p className="max-w-xl mx-auto text-sm leading-relaxed mb-8" style={{ color: "var(--silver)" }}>
              Walk in, train with a coach, use the facilities. If MIZAN isn&apos;t right for you, walk out — no card taken, no obligation, no follow-up pressure calls.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--brass)" }}>✓</span> No card required
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--brass)" }}>✓</span> Same-day booking
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--brass)" }}>✓</span> Women-only option available
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--brass)" }}>✓</span> All branches
              </div>
            </div>
          </div>
        </Reveal>
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
