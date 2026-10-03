import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

// Real Unsplash images — CDN delivered, no API key needed
const HERO_IMG = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1800&q=85&auto=format&fit=crop";
const WOMEN_IMG = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=80&auto=format&fit=crop";
const NUTRITION_IMG = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80&auto=format&fit=crop";
const TRAINER_IMG = "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=900&q=80&auto=format&fit=crop";
const CLASS_IMG = "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=80&auto=format&fit=crop";
const EQUIP_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop";

const STATS = [
  { value: "23K+", label: "Active Members" },
  { value: "3", label: "Cities" },
  { value: "Rs 0", label: "Hidden Fees" },
  { value: "100%", label: "Women's Wings" },
];

const CLASSES = [
  { name: "HIIT", time: "6:00 AM", tag: "High Intensity", img: CLASS_IMG, color: "#C5A059" },
  { name: "Yoga", time: "8:00 AM", tag: "Mind & Body", img: WOMEN_IMG, color: "#2D5A46" },
  { name: "Boxing", time: "5:00 PM", tag: "Combat", img: EQUIP_IMG, color: "#8B2E2E" },
];

const TRAINERS = [
  { name: "Ali Hassan", role: "Strength & Power", img: TRAINER_IMG, exp: "8 yrs" },
  { name: "Sara Khan", role: "Yoga & Flexibility", img: WOMEN_IMG, exp: "6 yrs" },
  { name: "Bilal Raza", role: "Boxing Coach", img: EQUIP_IMG, exp: "10 yrs" },
];

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--base)" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Full-bleed image */}
        <div className="absolute inset-0">
          <Image
            src={HERO_IMG}
            alt="MIZAN Gym — Premium fitness in Pakistan"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Multi-layer gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(8,13,10,0.92) 0%, rgba(8,13,10,0.6) 55%, rgba(8,13,10,0.2) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(8,13,10,1) 0%, transparent 50%)",
            }}
          />
          {/* Lattice overlay */}
          <div className="absolute inset-0 lattice opacity-30" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-24 pt-40">
          <div className="max-w-3xl">
            {/* Gold label */}
            <p className="anim-fade-up text-xs uppercase tracking-[0.3em] mb-6" style={{ color: "var(--brass)" }}>
              Lahore · Karachi · Islamabad
            </p>

            {/* Headline */}
            <h1 className="font-display anim-fade-up delay-100 font-bold leading-none mb-6"
              style={{ color: "var(--ivory)", fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 0.95 }}>
              Forge<br />
              <span className="text-shimmer">Your Legacy</span>
            </h1>

            {/* Sub */}
            <p className="anim-fade-up delay-200 max-w-xl text-lg leading-relaxed mb-10" style={{ color: "var(--silver)" }}>
              Pakistan&apos;s most transparent premium gym. No hidden fees. No compromises. Every branch built with a dedicated women&apos;s wing and prayer-break schedules.
            </p>

            {/* CTAs */}
            <div className="anim-fade-up delay-300 flex flex-wrap gap-4">
              <Link href="/join" className="btn-gold inline-flex items-center gap-2 px-8 py-4 text-sm">
                Join Now — From Rs 8,000/mo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a
                href="https://wa.me/923001234567?text=Hi+MIZAN%2C+I+want+to+book+a+free+trial!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa inline-flex items-center gap-2 px-8 py-4 text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Free Trial via WhatsApp
              </a>
            </div>
          </div>

          {/* Floating stat cards */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`glass rounded-xl p-4 anim-scale-in delay-${(i + 4) * 100}`}
              >
                <p className="font-display font-bold text-2xl text-shimmer">{s.value}</p>
                <p className="text-xs mt-1" style={{ color: "var(--silver)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 anim-fade-in delay-700">
          <span className="text-xs uppercase tracking-widest" style={{ color: "var(--muted)" }}>Scroll</span>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, var(--brass), transparent)" }} />
        </div>
      </section>

      {/* ── CLASSES PREVIEW ──────────────────────────── */}
      <section className="py-28 px-6 lg:px-12 max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--brass)" }}>Train Differently</p>
              <h2 className="font-display font-bold" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "var(--ivory)" }}>
                Signature Classes
              </h2>
              <div className="gold-rule mt-4" />
            </div>
            <Link href="/classes" className="hidden sm:flex items-center gap-2 text-sm" style={{ color: "var(--brass)" }}>
              View Schedule
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLASSES.map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <Link href="/classes" className="group block relative overflow-hidden rounded-2xl" style={{ height: 420 }}>
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(8,13,10,0.95) 0%, rgba(8,13,10,0.2) 60%, transparent 100%)" }}
                />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: c.color + "33", color: c.color, border: `1px solid ${c.color}55` }}
                  >
                    {c.tag}
                  </span>
                </div>
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{c.time}</p>
                  <h3 className="font-display font-bold text-3xl mt-1" style={{ color: "var(--ivory)" }}>{c.name}</h3>
                  <div
                    className="mt-3 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "var(--brass)" }}
                  >
                    View Schedule
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── WOMEN'S WING FEATURE ─────────────────────── */}
      <section className="py-28 overflow-hidden" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative h-[520px] rounded-2xl overflow-hidden">
                <Image
                  src={WOMEN_IMG}
                  alt="MIZAN Women's Sanctuary — private, safe, premium"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(45,90,70,0.3), transparent)" }}
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 anim-float"
                style={{ maxWidth: 220 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🛡️</span>
                  <span className="font-semibold text-sm" style={{ color: "var(--ivory)" }}>Women&apos;s Sanctuary</span>
                </div>
                <p className="text-xs" style={{ color: "var(--muted)" }}>Separate entrance, female-only staff, private amenities at all 3 branches</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--brass)" }}>Her Space. Her Rules.</p>
            <h2
              className="font-display font-bold mb-6"
              style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--ivory)", lineHeight: 1.1 }}
            >
              A Sanctuary Built <em style={{ color: "var(--brass)" }}>For Women</em>
            </h2>
            <div className="gold-rule mb-8" />
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--silver)" }}>
              Every MIZAN branch features a fully independent women&apos;s wing — separate entrance, female-only trainers, private locker rooms, and prayer areas. Zero compromise on privacy or comfort.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Female-only floor with separate entrance",
                "All-female training & reception staff",
                "Private wudu area + prayer room",
                "Women-only yoga & Zumba timetable",
                "CCTV-free private areas",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "var(--silver)" }}>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs"
                    style={{ background: "rgba(197,160,89,0.15)", color: "var(--brass)" }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/923001234567?text=Tell+me+more+about+the+women%27s+wing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa inline-flex items-center gap-2 px-8 py-4 text-sm"
            >
              Ask Us on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── PRICING TEASER ──────────────────────────── */}
      <section className="py-28 px-6 lg:px-12 max-w-7xl mx-auto text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--brass)" }}>Zero Surprises</p>
          <h2 className="font-display font-bold mb-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "var(--ivory)" }}>
            Transparent PKR Pricing
          </h2>
          <div className="gold-rule-center mb-6" />
          <p className="max-w-xl mx-auto text-base leading-relaxed mb-12" style={{ color: "var(--silver)" }}>
            What you see is what you pay. No enrollment surprises, no annual traps. Every fee shown is in Pakistani Rupees, for real.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { tier: "Silver", price: "8,000", period: "/ month", features: ["Any 1 branch", "Group classes", "Locker access", "Nutrition guide"] },
            { tier: "Gold", price: "12,000", period: "/ month", featured: true, features: ["All 3 branches", "All classes + PT session", "Women's wing access", "Prayer-break timetable", "Body composition scan"] },
            { tier: "Platinum", price: "18,000", period: "/ month", features: ["All branches + guest passes", "Unlimited PT sessions", "Desi macro meal plan", "Priority class booking", "VIP locker suite"] },
          ].map((plan, i) => (
            <Reveal key={plan.tier} delay={i * 100} type="scale">
              <div
                className={`plan-card rounded-2xl p-8 text-left ${plan.featured ? "featured" : ""}`}
                style={{ background: plan.featured ? "var(--surface-2)" : "var(--surface)" }}
              >
                {plan.featured && (
                  <div
                    className="inline-flex text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                    style={{ background: "rgba(197,160,89,0.15)", color: "var(--brass)" }}
                  >
                    Most Popular
                  </div>
                )}
                <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>{plan.tier}</p>
                <p className="font-display font-bold mb-1" style={{ color: "var(--brass)", fontSize: "clamp(2rem,4vw,2.75rem)" }}>
                  Rs {plan.price}
                  <span className="text-base font-normal ml-1" style={{ color: "var(--muted)" }}>{plan.period}</span>
                </p>
                <div className="gold-rule my-6" />
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "var(--silver)" }}>
                      <span style={{ color: "var(--brass)" }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/join"
                  className={`block text-center py-3 text-sm rounded ${plan.featured ? "btn-gold" : ""}`}
                  style={!plan.featured ? { border: "1px solid var(--border-gold)", color: "var(--brass)" } : {}}
                >
                  Get Started
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Link href="/plans" className="text-sm" style={{ color: "var(--brass)" }}>
          See full plan comparison →
        </Link>
      </section>

      {/* ── TRAINERS ─────────────────────────────────── */}
      <section className="py-28" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--brass)" }}>World-Class Coaching</p>
              <h2 className="font-display font-bold" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "var(--ivory)" }}>Meet the Coaches</h2>
              <div className="gold-rule-center mt-4" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRAINERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <div className="group text-center">
                  <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(8,13,10,0.85) 0%, transparent 60%)" }}
                    />
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <span
                        className="text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ background: "rgba(197,160,89,0.2)", color: "var(--brass)" }}
                      >
                        {t.exp} experience
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-1" style={{ color: "var(--ivory)" }}>{t.name}</h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center mt-12">
              <Link href="/trainer" className="btn-gold inline-flex items-center gap-2 px-8 py-4 text-sm">
                All Trainers →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── NUTRITION FEATURE ────────────────────────── */}
      <section className="py-28 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal delay={100}>
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--brass)" }}>Eat Like a Champion</p>
          <h2
            className="font-display font-bold mb-6"
            style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--ivory)", lineHeight: 1.1 }}
          >
            Desi Macro <em style={{ color: "var(--brass)" }}>Nutrition</em> Guide
          </h2>
          <div className="gold-rule mb-8" />
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--silver)" }}>
            Forget chicken-and-broccoli. Our certified nutritionists have mapped Pakistani cuisine — dal, roti, dahi, chawal — to precise macros so you can eat authentically and still hit your goals.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { food: "Dahi", macro: "High Protein", icon: "🥛" },
              { food: "Roti", macro: "Complex Carbs", icon: "🫓" },
              { food: "Daal", macro: "Protein + Fiber", icon: "🥣" },
            ].map((item) => (
              <div
                key={item.food}
                className="glass rounded-xl p-4 text-center"
              >
                <p className="text-2xl mb-2">{item.icon}</p>
                <p className="font-semibold text-sm" style={{ color: "var(--ivory)" }}>{item.food}</p>
                <p className="text-xs mt-1" style={{ color: "var(--brass)" }}>{item.macro}</p>
              </div>
            ))}
          </div>
          <a
            href="https://wa.me/923001234567?text=I+want+the+desi+nutrition+guide"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa inline-flex items-center gap-2 px-8 py-4 text-sm"
          >
            Get Free Guide on WhatsApp
          </a>
        </Reveal>

        <Reveal type="scale">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={NUTRITION_IMG}
              alt="Desi nutrition guide by MIZAN"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden text-center">
        <div className="absolute inset-0">
          <Image
            src={EQUIP_IMG}
            alt="Join MIZAN today"
            fill
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, var(--base) 0%, rgba(8,13,10,0.6) 50%, var(--base) 100%)" }}
          />
          <div className="absolute inset-0 lattice opacity-20" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--brass)" }}>Your First Step</p>
            <h2 className="font-display font-bold mb-6" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", color: "var(--ivory)", lineHeight: 1 }}>
              Start Your <span className="text-shimmer">Journey</span>
            </h2>
            <p className="text-lg mb-10" style={{ color: "var(--silver)" }}>
              Book a free trial class or consultation. Walk in confident — we&apos;ll do the rest.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/join" className="btn-gold inline-flex items-center gap-2 px-10 py-4 text-base">
                Join MIZAN Today
              </Link>
              <a
                href="https://wa.me/923001234567?text=I+want+a+free+trial+class"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa inline-flex items-center gap-2 px-10 py-4 text-base"
              >
                Free Trial via WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-fab fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center"
        style={{ background: "var(--wa)" }}
        aria-label="Chat on WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <Footer />
    </main>
  );
}
