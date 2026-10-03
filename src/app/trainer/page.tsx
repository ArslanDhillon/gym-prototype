import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Trainers — MIZAN Fitness | Expert Coaching Team",
  description: "Meet the certified coaches at MIZAN — strength, yoga, boxing, nutrition, and more across all 3 branches.",
};

const HERO = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1800&q=85&auto=format&fit=crop";

const TRAINERS = [
  {
    name: "Ali Hassan",
    role: "Head of Strength & Conditioning",
    exp: "8 years",
    certs: ["NSCA-CSCS", "CrossFit L2"],
    branch: "Lahore",
    bio: "Former national powerlifting champion. Ali designs periodised programmes that deliver measurable strength gains within 12 weeks — guaranteed.",
    img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80&auto=format&fit=crop",
    specs: [
      { label: "Speciality", value: "Powerlifting · Olympic Lifting" },
      { label: "Sessions", value: "1-on-1 & Small Group (max 4)" },
      { label: "Language", value: "Urdu & English" },
    ],
    wa: "923001234570",
  },
  {
    name: "Sara Khan",
    role: "Yoga & Mobility Lead",
    exp: "6 years",
    certs: ["RYT-500", "Yin Yoga Certified"],
    branch: "All Branches",
    bio: "Sara makes yoga accessible for every body, with dedicated women-only flows and a deep understanding of postural imbalances from desk work.",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80&auto=format&fit=crop",
    specs: [
      { label: "Speciality", value: "Hatha · Yin · Prenatal Yoga" },
      { label: "Sessions", value: "Group & Private (women only)" },
      { label: "Language", value: "Urdu & English" },
    ],
    wa: "923001234571",
  },
  {
    name: "Bilal Raza",
    role: "Boxing & Combat Coach",
    exp: "10 years",
    certs: ["WBC Coach L3", "Sports Nutrition Diploma"],
    branch: "Karachi · Islamabad",
    bio: "10-year veteran trainer who has worked with national-level boxers. Bilal's sessions are technique-first — everyone starts with footwork and basics.",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80&auto=format&fit=crop",
    specs: [
      { label: "Speciality", value: "Boxing · Kickboxing · MMA Conditioning" },
      { label: "Sessions", value: "1-on-1 & Group bag work" },
      { label: "Language", value: "Urdu & English" },
    ],
    wa: "923001234572",
  },
  {
    name: "Ayesha Siddiqui",
    role: "Certified Nutritionist",
    exp: "5 years",
    certs: ["PNI Certified", "Sports Dietetics Diploma"],
    branch: "All Branches (Online)",
    bio: "Ayesha breaks down Pakistani cuisine into precise macros — so you can eat dal, roti, and dahi while still hitting your fitness goals.",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80&auto=format&fit=crop",
    specs: [
      { label: "Speciality", value: "Desi Macro Planning · Weight Management" },
      { label: "Sessions", value: "Online & In-Branch Consultations" },
      { label: "Language", value: "Urdu & English" },
    ],
    wa: "923001234573",
  },
];

export default function TrainerPage() {
  return (
    <main style={{ background: "var(--base)" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO} alt="MIZAN Trainers" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,13,10,1) 0%, rgba(8,13,10,0.5) 100%)" }} />
          <div className="absolute inset-0 lattice opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12">
          <p className="text-xs uppercase tracking-widest mb-2 anim-fade-up" style={{ color: "var(--brass)" }}>World-Class Coaching</p>
          <h1 className="font-display font-bold anim-fade-up delay-100" style={{ fontSize: "clamp(2.5rem,6vw,4rem)", color: "var(--ivory)" }}>
            Meet the Coaches
          </h1>
        </div>
      </section>

      {/* Trainer profiles */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
        {TRAINERS.map((t, i) => (
          <Reveal key={t.name} delay={i * 60}>
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 rounded-2xl p-8"
              style={{ background: "var(--surface)", border: "1px solid var(--border-mid)" }}
            >
              {/* Photo */}
              <div className="relative h-72 lg:h-auto lg:min-h-[320px] rounded-xl overflow-hidden">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(8,13,10,0.9) 0%, transparent 60%)" }}
                />
                {/* Certs floating */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                  {t.certs.map((c) => (
                    <span
                      key={c}
                      className="text-xs px-2 py-1 rounded"
                      style={{ background: "rgba(197,160,89,0.2)", color: "var(--brass)", fontSize: "0.65rem" }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-2">
                <div className="flex flex-wrap items-start gap-4 justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--brass)" }}>{t.branch}</p>
                    <h2 className="font-display font-bold text-3xl" style={{ color: "var(--ivory)" }}>{t.name}</h2>
                    <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>{t.role}</p>
                  </div>
                  <div
                    className="glass rounded-xl px-4 py-3 text-center"
                    style={{ minWidth: 80 }}
                  >
                    <p className="font-display font-bold text-2xl text-shimmer">{t.exp}</p>
                    <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>Experience</p>
                  </div>
                </div>

                <div className="gold-rule mb-6" />

                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--silver)" }}>{t.bio}</p>

                {/* Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {t.specs.map((s) => (
                    <div key={s.label}>
                      <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--muted)" }}>{s.label}</p>
                      <p className="text-sm font-medium" style={{ color: "var(--ivory)" }}>{s.value}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${t.wa}?text=Hi%2C+I%27d+like+to+book+a+session+with+${encodeURIComponent(t.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa inline-flex items-center gap-2 px-6 py-3 text-sm"
                  >
                    Book a Session with {t.name.split(" ")[0]}
                  </a>
                  <Link
                    href="/join"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm rounded transition-all"
                    style={{ border: "1px solid var(--border-gold)", color: "var(--brass)" }}
                  >
                    View Plans →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
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
