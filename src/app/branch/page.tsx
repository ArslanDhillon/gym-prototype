import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branches — MIZAN Fitness | Lahore, Karachi, Islamabad",
  description: "Find your nearest MIZAN gym branch. Locations in DHA Lahore, Clifton Karachi, and F-7 Islamabad — all with women's wings.",
};

const BRANCHES = [
  {
    city: "Lahore",
    area: "DHA Phase 6",
    address: "12-C, Main Boulevard, DHA Phase 6, Lahore",
    hours: "Mon–Sat: 5:30 AM – 11:30 PM · Sun: 7:00 AM – 9:00 PM",
    phone: "923001234567",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&auto=format&fit=crop",
    interior: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    tags: ["Women's Wing", "Sauna", "Juice Bar", "Parking"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402!2d74.38!3d31.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzQ4LjAiTiA3NMKwMjInNDguMCJF!5e0!3m2!1sen!2spk",
  },
  {
    city: "Karachi",
    area: "Clifton Block 9",
    address: "Suite 201, Sea View Avenue, Clifton Block 9, Karachi",
    hours: "Mon–Sat: 5:30 AM – 11:00 PM · Sun: 8:00 AM – 9:00 PM",
    phone: "923001234568",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80&auto=format&fit=crop",
    interior: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80&auto=format&fit=crop",
    tags: ["Women's Wing", "Pool Access", "Smoothie Bar", "Valet"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619!2d67.03!3d24.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzM2LjAiTiA2N8KwMDEnNDguMCJF!5e0!3m2!1sen!2spk",
  },
  {
    city: "Islamabad",
    area: "F-7 Markaz",
    address: "Plot 3, Nazim-ud-Din Road, F-7 Markaz, Islamabad",
    hours: "Mon–Sat: 5:30 AM – 11:00 PM · Sun: 8:00 AM – 8:00 PM",
    phone: "923001234569",
    img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80&auto=format&fit=crop",
    interior: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80&auto=format&fit=crop",
    tags: ["Women's Wing", "Rooftop Deck", "Café", "Parking"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322!2d73.07!3d33.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQzJzQ4LjAiTiA3M8KwMDQnMTIuMCJF!5e0!3m2!1sen!2spk",
  },
];

const HERO = "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?w=1800&q=85&auto=format&fit=crop";

export default function BranchPage() {
  return (
    <main style={{ background: "var(--base)" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO} alt="MIZAN Branches" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,13,10,1) 0%, rgba(8,13,10,0.5) 100%)" }} />
          <div className="absolute inset-0 lattice opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12">
          <p className="text-xs uppercase tracking-widest mb-2 anim-fade-up" style={{ color: "var(--brass)" }}>Lahore · Karachi · Islamabad</p>
          <h1 className="font-display font-bold anim-fade-up delay-100" style={{ fontSize: "clamp(2.5rem,6vw,4rem)", color: "var(--ivory)" }}>
            Find Your Sanctuary
          </h1>
        </div>
      </section>

      {/* Branch cards */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto space-y-20">
        {BRANCHES.map((b, i) => (
          <Reveal key={b.city} delay={i * 80}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              {/* Images */}
              <div className={`relative ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image src={b.img} alt={`MIZAN ${b.city}`} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(8,13,10,0.8))" }} />
                </div>
                {/* Interior thumbnail */}
                <div
                  className="absolute -bottom-5 right-5 w-36 h-28 rounded-xl overflow-hidden border-2 anim-float"
                  style={{ borderColor: "var(--brass)" }}
                >
                  <Image src={b.interior} alt={`${b.city} interior`} fill className="object-cover" sizes="144px" />
                </div>
              </div>

              {/* Info */}
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--brass)" }}>{b.area}</p>
                <h2 className="font-display font-bold mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--ivory)" }}>
                  {b.city}
                </h2>
                <div className="gold-rule mb-6" />

                <div className="space-y-3 mb-6 text-sm" style={{ color: "var(--silver)" }}>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5" style={{ color: "var(--brass)" }}>📍</span>
                    <span>{b.address}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5" style={{ color: "var(--brass)" }}>🕐</span>
                    <span>{b.hours}</span>
                  </div>
                </div>

                {/* Amenity tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {b.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full"
                      style={{ background: "rgba(197,160,89,0.1)", color: "var(--brass)", border: "1px solid rgba(197,160,89,0.2)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${b.phone}?text=Hi+MIZAN+${b.city}%2C+I%27d+like+to+visit!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa inline-flex items-center gap-2 px-6 py-3 text-sm"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Chat with {b.city}
                  </a>
                  <a
                    href={`https://maps.google.com/?q=MIZAN+Gym+${b.city}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm rounded transition-all"
                    style={{ border: "1px solid var(--border-gold)", color: "var(--brass)" }}
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Map section */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <Reveal>
          <h2 className="font-display font-bold text-center mb-8" style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)", color: "var(--ivory)" }}>
            Our Locations
          </h2>
        </Reveal>
        <Reveal type="scale">
          <div className="rounded-2xl overflow-hidden" style={{ height: 480, border: "1px solid var(--border-gold)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874655!2d70.5!3d30.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa872e19bf74b%3A0x9d7c44c8de5b4e5a!2sPakistan!5e0!3m2!1sen!2spk!4v1699000000000!5m2!1sen!2spk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MIZAN Gym Locations — Lahore, Karachi, Islamabad"
            />
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
