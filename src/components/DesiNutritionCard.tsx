"use client";

import { useState } from "react";

interface DesiNutritionCardProps {
  isUrdu?: boolean;
}

export default function DesiNutritionCard({ isUrdu = false }: DesiNutritionCardProps) {
  const [activeTab, setActiveTab] = useState<"sattu" | "karahi" | "daal">("sattu");

  const meals = {
    sattu: {
      titleEn: "Sattu Herbal Mineral Hydration",
      titleUr: "ستو ہربل پاور ڈرنک (پری ورک آؤٹ)",
      calEn: "185 kcal • 22g Clean Protein",
      calUr: "185 کیلوریز • 22 گرام پروٹین",
      descEn: "Roasted barley and Bengal gram flour whisked with chilled water, mint, and rock salt. Nature's ultimate natural electrolyte drink for Pakistan's 40°C heat.",
      descUr: "بھنے ہوئے جو اور چنے کا ستو، پودینہ اور کالا نمک۔ شدید گرمی میں جسم کو تروتازہ رکھنے اور پٹھوں کو توانائی دینے والا قدرتی ہائیڈریشن مشروب۔"
    },
    karahi: {
      titleEn: "Lean Desi Chicken/Beef Karahi Hack",
      titleUr: "ڈیسی چکن یا بیف کڑاہی (ہیلتھی ریسیپی)",
      calEn: "420 kcal • 48g Protein",
      calUr: "420 کیلوریز • 48 گرام پروٹین",
      descEn: "Cooked in cold-pressed mustard oil with fresh ginger, garlic, tomatoes, and crushed coriander. Zero excess oil, maximum protein satisfaction.",
      descUr: "سرسوں کے خالص تیل یا ائیر فرائر میں تیار کردہ، تازہ ادرک، لہسن اور ٹماٹروں کے ساتھ۔ بغیر غیر ضروری گھی کے بہترین پروٹین ڈش۔"
    },
    daal: {
      titleEn: "Moong Daal & Quinoa Roti Combo",
      titleUr: "مونگ کی دال اور ہول گرین روٹی",
      calEn: "340 kcal • 18g Protein + High Fiber",
      calUr: "340 کیلوریز • 18 گرام پروٹین اور فائبر",
      descEn: "Yellow split lentils tempered with cumin seeds and whole wheat or multi-grain flatbread. Gentle on digestion, rich in micronutrients.",
      descUr: "زیرہ اور لہسن کے ہلکے تڑکے کے ساتھ پیلی مونگ دال اور چکی کے آٹے کی روٹی۔ ہاضمے میں ہلکی اور مکمل غذائیت سے بھرپور۔"
    }
  };

  return (
    <div className="bg-[var(--bg-surface)] border border-[var(--border-gold)]/40 p-6 sm:p-8 rounded-3xl">
      <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
        <div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--accent-brass)]">
            {isUrdu ? "مقامی غذائیت کا سائنسی طریقہ" : "Culturally Adapted Fueling"}
          </span>
          <h4 className="font-serif text-xl text-[var(--text-primary)]">
            {isUrdu ? "دیسی خوراک اور فٹنس میکروز" : "Desi Superfood Macro Protocol"}
          </h4>
        </div>

        {/* Tab switchers */}
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab("sattu")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === "sattu" 
                ? "bg-[var(--accent-brass)] text-black" 
                : "bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] hover:text-white"
            }`}
          >
            {isUrdu ? "ستو شربت" : "Sattu"}
          </button>
          <button 
            onClick={() => setActiveTab("karahi")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === "karahi" 
                ? "bg-[var(--accent-brass)] text-black" 
                : "bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] hover:text-white"
            }`}
          >
            {isUrdu ? "کڑاہی پروٹوکول" : "Lean Karahi"}
          </button>
          <button 
            onClick={() => setActiveTab("daal")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === "daal" 
                ? "bg-[var(--accent-brass)] text-black" 
                : "bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] hover:text-white"
            }`}
          >
            {isUrdu ? "دال و روٹی" : "Daal & Roti"}
          </button>
        </div>
      </div>

      <div className="bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] p-5 rounded-2xl">
        <div className="flex justify-between items-start mb-2">
          <h5 className="font-serif text-base text-[var(--accent-brass)]">
            {isUrdu ? meals[activeTab].titleUr : meals[activeTab].titleEn}
          </h5>
          <span className="text-xs font-mono text-[var(--text-primary)] bg-[var(--bg-base)] px-2.5 py-1 rounded-md border border-[var(--border-subtle)]">
            {isUrdu ? meals[activeTab].calUr : meals[activeTab].calEn}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          {isUrdu ? meals[activeTab].descUr : meals[activeTab].descEn}
        </p>
      </div>
    </div>
  );
}
