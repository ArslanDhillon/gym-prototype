"use client";

import { useState } from "react";

interface WomenSanctuaryModalProps {
  isUrdu?: boolean;
}

export default function WomenSanctuaryModal({ isUrdu = false }: WomenSanctuaryModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 border border-[var(--border-gold)] text-[var(--accent-brass)] hover:bg-[var(--accent-brass)]/10 px-5 py-2.5 rounded-full text-xs font-semibold transition-all tap-target"
      >
        <span>🏛️</span>
        <span>{isUrdu ? "خواتین کے پرائیویٹ فلور کا ورچوئل نقشہ دیکھیں" : "Explore Women's Sanctuary Architectural Blueprint"}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[var(--bg-surface)] border border-[var(--border-gold)] rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-white text-xl p-2"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 text-[var(--accent-brass)] text-xs font-bold uppercase tracking-wider mb-2">
              <span>🔒</span>
              <span>{isUrdu ? "مکمل رازداری اور پرائیویسی کا معیار" : "Zero-Compromise Privacy Guarantee"}</span>
            </div>

            <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-4">
              {isUrdu ? "خواتین کے مخصوص فلور کا تفصیلی انتظام" : "Women's Private Wing Floor Plan & Protocol"}
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)]">
              <div className="bg-[var(--bg-surface-elevated)] p-4 rounded-xl border border-[var(--border-subtle)] flex gap-3">
                <span className="text-xl">🚪</span>
                <div>
                  <strong className="text-[var(--accent-brass)] block mb-1">
                    {isUrdu ? "بایومیٹرک خودکار داخلہ" : "Biometric Shielded Access"}
                  </strong>
                  <p className="text-[var(--text-muted)] text-xs">
                    {isUrdu 
                      ? "صرف رجسٹرڈ خواتین اراکین کے فنگر پرنٹ سے اوپن ہونے والے خصوصی دروازے اور الگ لفٹ۔"
                      : "Independent elevator bank and biometric access doors restricted exclusively to registered female members."}
                  </p>
                </div>
              </div>

              <div className="bg-[var(--bg-surface-elevated)] p-4 rounded-xl border border-[var(--border-subtle)] flex gap-3">
                <span className="text-xl">👩‍🏫</span>
                <div>
                  <strong className="text-[var(--accent-brass)] block mb-1">
                    {isUrdu ? "100% فی میل ٹرینرز و معاون عملہ" : "Exclusively Female Personnel"}
                  </strong>
                  <p className="text-[var(--text-muted)] text-xs">
                    {isUrdu 
                      ? "کوچز، صفائی کا عملہ اور ایڈمنسٹریشن مکمل خواتین پر مشتمل ہے۔ فلور پر کسی مرد عملے کا داخلہ ممنوع ہے۔"
                      : "From certified personal trainers to housekeeping and maintenance staff, only female staff operate on this floor."}
                  </p>
                </div>
              </div>

              <div className="bg-[var(--bg-surface-elevated)] p-4 rounded-xl border border-[var(--border-subtle)] flex gap-3">
                <span className="text-xl">🧖‍♀️</span>
                <div>
                  <strong className="text-[var(--accent-brass)] block mb-1">
                    {isUrdu ? "پرائیویٹ سونا، اسٹیم اور ریکوری زون" : "Private Spa & Thermal Suite"}
                  </strong>
                  <p className="text-[var(--text-muted)] text-xs">
                    {isUrdu 
                      ? "مکمل الگ سونا باتھ، کولڈ پلنج، ڈریسنگ رومز اور دعائیہ ہال۔"
                      : "Dedicated cedar infrared sauna, eucalyptus steam room, luxury vanity room, and prayer area inside the women's wing."}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => setIsOpen(false)}
                className="bg-[var(--accent-brass)] hover:bg-[var(--accent-brass-hover)] text-black font-bold text-xs py-2.5 px-6 rounded-full"
              >
                {isUrdu ? "سمجھ آ گیا" : "Understood & Verified"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
