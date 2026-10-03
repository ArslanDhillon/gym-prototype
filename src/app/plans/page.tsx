import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Plans — MIZAN Fitness | Transparent PKR Pricing",
  description: "Clear, no-hidden-fee gym memberships starting at Rs 8,000/month across Lahore, Karachi, and Islamabad.",
};

const PLANS = [
  {
    tier: "Silver",
    tagline: "The Starter",
    price: "8,000",
    color: "#9BA4A0",
    features: [
      { label: "Any single branch access", ok: true },
      { label: "All group classes", ok: true },
      { label: "Locker & shower access", ok: true },
      { label: "Desi nutrition e-guide", ok: true },
      { label: "Prayer-break timetable", ok: true },
      { label: "Cross-branch access", ok: false },
      { label: "Personal training sessions", ok: false },
      { label: "Body composition scan", ok: false },
    ],
  },
  {
    tier: "Gold",
    tagline: "Most Popular",
    price: "12,000",
    featured: true,
    color: "#C5A059",
    features: [
      { label: "All 3 branch access", ok: true },
      { label: "All group classes", ok: true },
      { label: "Locker + towel service", ok: true },
      { label: "Desi nutrition e-guide", ok: true },
      { label: "Prayer-break timetable", ok: true },
      { label: "Cross-branch access", ok: true },
      { label: "2 PT sessions / month", ok: true },
      { label: "Body composition scan", ok: false },
    ],
  },
  {
    tier: "Platinum",
    tagline: "The Elite",
    price: "18,000",
    color: "#D4D0C8",
    features: [
      { label: "All 3 branches + 2 guest passes", ok: true },
      { label: "All group classes", ok: true },
      { label: "VIP locker suite", ok: true },
      { label: "Full macro meal plan", ok: true },
      { label: "Prayer-break timetable", ok: true },
      { label: "Cross-branch access", ok: true },
      { label: "Unlimited PT sessions", ok: true },
      { label: "Monthly body scan + report", ok: true },
    ],
  },
];

const TRUST = [
  { icon: "₨", title: "No Hidden Fees", desc: "All prices are final. No enrollment fee, no annual contract trap." },
  { icon: "🕌", title: "Prayer-Aware", desc: "Schedule pauses at Dhuhr, Asr & Maghrib at all branches." },
  { icon: "🛡️", title: "Women's Wing", desc: "Fully private female-only floor at every branch, every plan." },
  { icon: "🔄", title: "Pause Any Time", desc: "Freeze membership for up to 30 days — no questions asked." },
];

const HERO = "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=1800&q=85&auto=format&fit=crop";

export default function PlansPage() {
  return (
    <main style={{ background: "var(--base)" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO} alt="MIZAN Plans" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,13,10,1) 0%, rgba(8,13,10,0.5) 100%)" }} />
          <div className="absolute inset-0 lattice opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12">
          <p className="text-xs uppercase tracking-widest mb-2 anim-fade-up" style={{ color: "var(--brass)" }}>Transparent PKR Pricing</p>
          <h1 className="font-display font-bold anim-fade-up delay-100" style={{ fontSize: "clamp(2.5rem,6vw,4rem)", color: "var(--ivory)" }}>
            Choose Your Path
          </h1>
        </div>
      </section>

      {/* Plans grid */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.tier} delay={i * 120} type="scale">
              <div
                className={`plan-card rounded-2xl p-8 relative ${plan.featured ? "featured" : ""}`}
                style={{ background: plan.featured ? "var(--surface-2)" : "var(--surface)" }}
              >
                {plan.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest px-4 py-1 rounded-full"
                    style={{ background: "var(--brass)", color: "var(--base)", fontWeight: 700 }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Tier */}
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: plan.color }}>
                  {plan.tier}
                </p>
                <p className="text-xs mb-4" style={{ color: "var(--muted)" }}>{plan.tagline}</p>

                {/* Price */}
                <div className="mb-2">
                  <span className="font-display font-bold" style={{ color: plan.featured ? "var(--brass)" : "var(--ivory)", fontSize: "clamp(2rem,4vw,2.75rem)" }}>
                    Rs {plan.price}
                  </span>
                  <span className="text-sm ml-1" style={{ color: "var(--muted)" }}>/month</span>
                </div>
                <p className="text-xs mb-6" style={{ color: "var(--muted)" }}>No enrollment fee. Cancel anytime.</p>

                <div className="gold-rule mb-6" style={{ background: `linear-gradient(90deg, ${plan.color}, transparent)` }} />

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-3 text-sm" style={{ color: f.ok ? "var(--silver)" : "var(--muted)", opacity: f.ok ? 1 : 0.45 }}>
                      <span style={{ color: f.ok ? "var(--brass)" : "var(--muted)" }}>{f.ok ? "✓" : "×"}</span>
                      {f.label}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/join"
                  className={`block text-center py-3.5 rounded text-sm font-semibold tracking-wide transition-all ${plan.featured ? "btn-gold" : ""}`}
                  style={!plan.featured ? { border: `1px solid ${plan.color}55`, color: plan.color } : {}}
                >
                  Start with {plan.tier}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-center text-sm mt-8" style={{ color: "var(--muted)" }}>
            All prices are in Pakistani Rupees. What you see is what you pay.
          </p>
        </Reveal>
      </section>

      {/* Trust badges */}
      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <h2 className="font-display font-bold text-center mb-12" style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)", color: "var(--ivory)" }}>
              The MIZAN Promise
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST.map((t, i) => (
              <Reveal key={t.title} delay={i * 100}>
                <div className="glass rounded-2xl p-6 text-center">
                  <p className="text-3xl mb-4">{t.icon}</p>
                  <p className="font-semibold mb-2" style={{ color: "var(--ivory)" }}>{t.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="py-20 px-6 lg:px-12 max-w-3xl mx-auto">
        <Reveal>
          <h2 className="font-display font-bold text-center mb-10" style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--ivory)" }}>
            Common Questions
          </h2>
        </Reveal>
        {[
          { q: "Is there any joining or enrollment fee?", a: "No — absolutely zero joining fee across all plans. The monthly price shown is all you pay." },
          { q: "Can I freeze my membership?", a: "Yes. Freeze for up to 30 days per year at no charge. Just message us on WhatsApp 48 hours before your billing date." },
          { q: "Can women join any plan?", a: "Yes. Every plan includes full access to the women's wing with female-only staff and private facilities." },
          { q: "Is there a trial period?", a: "We offer a free one-day trial class. Book it through WhatsApp and walk in the same day." },
        ].map((item, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="mb-6 pb-6" style={{ borderBottom: "1px solid var(--border-mid)" }}>
              <p className="font-semibold mb-2" style={{ color: "var(--ivory)" }}>{item.q}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.a}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--brass)" }}>Ready to start?</p>
          <h2 className="font-display font-bold mb-6" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--ivory)" }}>
            Book Your <span className="text-shimmer">Free Trial</span>
          </h2>
          <a
            href="https://wa.me/923001234567?text=I+want+to+book+a+free+trial"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa inline-flex items-center gap-2 px-10 py-4 text-base"
          >
            Book Free Trial on WhatsApp
          </a>
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
