"use client";

interface PrayerRibbonProps {
  isUrdu?: boolean;
}

export default function PrayerRibbon({ isUrdu = false }: PrayerRibbonProps) {
  return (
    <div className="bg-[var(--bg-surface)] border-b border-[var(--border-gold)]/40 text-xs py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--accent-brass)] animate-pulse"></span>
          <span className="text-[var(--accent-brass)] font-semibold">
            {isUrdu ? "نماز کے اوقات اور وقفہ:" : "PRAYER INTERVAL TRACKER:"}
          </span>
          <span className="text-[var(--text-muted)]">
            {isUrdu 
              ? "اگلی نماز: مغرب شام 06:15 بجے • تمام کلاسز میں 15 منٹ کا دعائیہ وقفہ، وضو و نماز ہال اوپن"
              : "Next: Maghrib at 06:15 PM • 15-min quiet interval with dedicated prayer hall & wudu lounge"}
          </span>
        </div>
        <div className="flex items-center gap-4 text-[var(--text-muted)]">
          <span className="hidden sm:inline flex items-center gap-1.5">
            <span className="text-emerald-400">●</span>
            {isUrdu ? "100% انڈسٹریل جنریٹر بیک اپ فعال" : "100% Industrial Generator Backup Active"}
          </span>
          <a 
            href="https://wa.me/923000000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline font-semibold flex items-center gap-1"
          >
            <span>💬</span>
            <span>{isUrdu ? "فوری واٹس ایپ رابطہ" : "WhatsApp Desk (5m reply)"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
