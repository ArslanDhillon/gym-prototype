import Link from "next/link";

const LINKS = [
  { group: "Explore", items: [{ href: "/plans", label: "Membership Plans" }, { href: "/classes", label: "Class Schedule" }, { href: "/trainer", label: "Our Trainers" }, { href: "/branch", label: "Branches" }] },
  { group: "Company", items: [{ href: "/join", label: "Join Now" }, { href: "#nutrition", label: "Nutrition Guide" }, { href: "#women", label: "Women's Wing" }] },
];

const BRANCHES = [
  { city: "Lahore", area: "DHA Phase 6", wa: "923001234567" },
  { city: "Karachi", area: "Clifton Block 9", wa: "923001234568" },
  { city: "Islamabad", area: "F-7 Markaz", wa: "923001234569" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border-gold)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-display text-3xl font-bold mb-3" style={{ color: "var(--brass)" }}>
              MIZAN
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              Pakistan&apos;s premier wellness sanctuary. Transparent pricing, dedicated women&apos;s wings, and prayer-aware schedules across Lahore, Karachi &amp; Islamabad.
            </p>
            <div className="flex gap-3">
              {["instagram", "facebook", "youtube"].map((s) => (
                <a
                  key={s}
                  href={`https://${s}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded flex items-center justify-center transition-colors"
                  style={{ border: "1px solid var(--border-gold)", color: "var(--muted)" }}
                  aria-label={s}
                >
                  <span className="text-xs uppercase">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {LINKS.map(({ group, items }) => (
            <div key={group}>
              <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "var(--brass)" }}>
                {group}
              </p>
              <ul className="space-y-3">
                {items.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "var(--muted)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* WhatsApp branches */}
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "var(--brass)" }}>
              Quick Contact
            </p>
            <ul className="space-y-3">
              {BRANCHES.map(({ city, area, wa }) => (
                <li key={city}>
                  <a
                    href={`https://wa.me/${wa}?text=Hi+MIZAN+${city}!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm group"
                    style={{ color: "var(--muted)" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: "var(--wa)" }}
                    />
                    <span className="group-hover:text-white transition-colors">
                      {city} · {area}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid var(--border-mid)", color: "var(--muted)" }}
        >
          <p>© 2026 MIZAN Fitness. All rights reserved.</p>
          <p>Designed for Pakistan · PKR Pricing Always Transparent</p>
        </div>
      </div>
    </footer>
  );
}
