"use client";

import { useState } from "react";

interface WhatsAppConciergeProps {
  isUrdu?: boolean;
}

export default function WhatsAppConcierge({ isUrdu = false }: WhatsAppConciergeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("Gulberg Lahore");

  const branches = [
    { id: "Gulberg Lahore", nameEn: "Lahore — Gulberg III", nameUr: "لاہور — گلبرگ ۳" },
    { id: "DHA Lahore", nameEn: "Lahore — DHA Phase 5", nameUr: "لاہور — ڈی ایچ اے فیز ۵" },
    { id: "Clifton Karachi", nameEn: "Karachi — Clifton Block 4", nameUr: "کراچی — کلفٹن بلاک ۴" },
    { id: "DHA Karachi", nameEn: "Karachi — DHA Phase 6", nameUr: "کراچی — ڈی ایچ اے فیز ۶" },
    { id: "Islamabad F7", nameEn: "Islamabad — F-7 Markaz", nameUr: "اسلام آباد — ایف ۷ مرکز" }
  ];

  const handleLaunchWhatsApp = () => {
    const text = isUrdu 
      ? `السلام علیکم! میں میزان فٹنس (${selectedBranch}) میں ایک روزہ مفت ٹرائل پاس بک کرنا چاہتا/چاہتی ہوں۔ برائے مہربانی تفصیلات بتائیں۔`
      : `Assalam-o-Alaikum! I'd like to book a 1-day complimentary trial pass at Mizan Fitness (${selectedBranch}). Please share available slots.`;
    const url = `https://wa.me/923000000000?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="mb-3 bg-[var(--bg-surface)] border border-[var(--border-gold)] p-4 rounded-2xl shadow-2xl w-80 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold text-xs text-[var(--accent-brass)]">
                {isUrdu ? "فوری واٹس ایپ کنسیئرج" : "Instant WhatsApp Desk"}
              </span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-[var(--text-muted)] hover:text-white text-sm"
              aria-label="Close concierge"
            >
              ✕
            </button>
          </div>

          <p className="text-[11px] text-[var(--text-muted)] mb-3 leading-relaxed">
            {isUrdu 
              ? "اپنی پسندیدہ برانچ کا انتخاب کریں اور ہمارے فرنٹ ڈیسک سے براہ راست چیٹ کریں۔"
              : "Select your preferred branch for direct 1-tap WhatsApp consultation with front-desk staff."}
          </p>

          <select 
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="w-full bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-xs rounded-xl p-2.5 mb-3 outline-none focus:border-[var(--accent-brass)]"
          >
            {branches.map((b) => (
              <option key={b.id} value={b.id}>
                {isUrdu ? b.nameUr : b.nameEn}
              </option>
            ))}
          </select>

          <button 
            onClick={handleLaunchWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#22BF5B] text-black font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all tap-target"
          >
            <span>💬</span>
            <span>{isUrdu ? "چیٹ شروع کریں" : "Start WhatsApp Chat"}</span>
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#22BF5B] text-black flex items-center justify-center text-2xl shadow-xl transition-transform hover:scale-105"
        aria-label="Open WhatsApp Chat"
      >
        💬
      </button>
    </div>
  );
}
