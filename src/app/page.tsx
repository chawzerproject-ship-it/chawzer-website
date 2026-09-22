"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Smartphone,
  ExternalLink,
  Users,
  ShieldCheck,
  ChevronDown,
  Layers,
  ArrowRight,
  Filter,
} from "lucide-react";
import { APPS_DATA, AppItem, STUDIO_INFO } from "@/data/apps";
import Navbar from "@/components/Navbar";
import GoldenEyeCanvas from "@/components/GoldenEyeCanvas";
import AppCard from "@/components/AppCard";
import AppModal from "@/components/AppModal";
import VisionSection from "@/components/VisionSection";
import TesterInviteSection from "@/components/TesterInviteSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [modalApp, setModalApp] = useState<AppItem | null>(null);
  const [betaTargetApp, setBetaTargetApp] = useState<AppItem | null>(null);

  const categories = [
    { id: "all", label: "Tüm Uygulamalar (4)" },
    { id: "Finans & Üretkenlik", label: "Finans" },
    { id: "Eğitim & Teknoloji", label: "Siber Güvenlik" },
    { id: "Eğitim & Sınav Hazırlık", label: "Sınav & YDS" },
    { id: "Yaşam Tarzı & Sosyal", label: "Sosyal & Çift" },
  ];

  const filteredApps =
    activeCategory === "all"
      ? APPS_DATA
      : APPS_DATA.filter((app) => app.category === activeCategory);

  const handleOpenBeta = (app: AppItem) => {
    setBetaTargetApp(app);
    const betaSection = document.getElementById("beta");
    if (betaSection) {
      betaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-chawzer-bg text-gray-100 flex flex-col selection:bg-amber-500 selection:text-black">
      <Navbar />

      <main className="flex-1">
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden cyber-grid">
          {/* Top Gold Radial Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Text & CTAs */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* Brand Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold tracking-wider uppercase animate-fade-in shadow-lg shadow-amber-500/10">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Chawzer • Altın Göz Mobil Stüdyosu</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                  Mobil Dünyaya{" "}
                  <span className="text-gold-gradient block sm:inline">
                    Altın Bir Bakış
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  <strong className="text-amber-300 font-semibold">CHAWZER</strong> ({" "}
                  <em>Eye</em> = Göz, <em>Gold</em> = Altın), Google Play ekosisteminde finans, siber güvenlik, yabancı dil ve yaşam tarzı alanlarında keskin vizyonla tasarlanmış yüksek performanslı mobil uygulamalar üretir.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <a
                    href="#apps"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black font-extrabold text-sm rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Uygulamaları Keşfet</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="#beta"
                    className="w-full sm:w-auto px-7 py-4 bg-chawzer-card hover:bg-chawzer-surface border border-chawzer-border hover:border-amber-500/40 text-gray-200 hover:text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>Kapalı Teste Katıl (20 Testçi)</span>
                  </a>
                </div>

                {/* Mini Stat Counters */}
                <div className="pt-6 border-t border-chawzer-border/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                  <div>
                    <div className="text-2xl font-black text-amber-300">4</div>
                    <div className="text-xs text-gray-400">Play Store Uygulaması</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-amber-300">2026</div>
                    <div className="text-xs text-gray-400">Kuruluş Yılı</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-emerald-400">%100</div>
                    <div className="text-xs text-gray-400">Gizlilik Odaklı</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Golden Eye Canvas */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <GoldenEyeCanvas />
              </div>
            </div>
          </div>

          {/* Bottom Down Arrow */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-xs text-gray-500 animate-bounce">
            <span className="text-[11px] mb-1">Aşağı Kaydır</span>
            <ChevronDown className="w-4 h-4 text-amber-400" />
          </div>
        </section>

        {/* ================= APP SHOWCASE SECTION ================= */}
        <section id="apps" className="py-24 relative bg-chawzer-bg/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                  <Smartphone className="w-4 h-4 text-amber-400" />
                  <span>Google Play Portföyü</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Öne Çıkan <span className="text-gold-gradient">Mobil Uygulamalarımız</span>
                </h2>
                <p className="text-sm text-gray-400 max-w-xl">
                  Geliştirici hesabımızdaki tüm uygulamalar, Google Play standartlarına ve en son Android mimarisine uygun şekilde inşa edilmiştir.
                </p>
              </div>

              {/* Developer Badge */}
              <div className="flex-shrink-0">
                <a
                  href={STUDIO_INFO.playStoreConsoleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-chawzer-card border border-chawzer-border hover:border-amber-500/50 text-xs font-bold text-gray-200 hover:text-white transition-all shadow-md group"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Play Store Geliştirici Profili</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
              <Filter className="w-4 h-4 text-gray-500 ml-1 mr-1 flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${activeCategory === cat.id
                      ? "bg-amber-500 text-black border-amber-400 font-bold shadow-lg shadow-amber-500/20"
                      : "bg-chawzer-card text-gray-400 border-chawzer-border hover:text-white hover:border-amber-500/30"
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Apps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              {filteredApps.map((app) => (
                <AppCard
                  key={app.id}
                  app={app}
                  onOpenDetails={(selected) => setModalApp(selected)}
                  onJoinBeta={handleOpenBeta}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= VISION SECTION ================= */}
        <VisionSection />

        {/* ================= TESTER / BETA SECTION ================= */}
        <TesterInviteSection selectedAppForBeta={betaTargetApp} />
      </main>

      {/* App Details Modal */}
      <AppModal
        app={modalApp}
        onClose={() => setModalApp(null)}
        onJoinBeta={handleOpenBeta}
      />

      <Footer />
    </div>
  );
}

