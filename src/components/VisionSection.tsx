"use client";

import React from "react";
import Image from "next/image";
import { Eye, Shield, Zap, Target, Sparkles, Award } from "lucide-react";
import { STUDIO_INFO } from "@/data/apps";

export default function VisionSection() {
  const pillars = [
    {
      icon: Eye,
      title: "Altın Göz (Chawzer) Felsefesi",
      subtitle: "Kürtçe 'Çav' (Göz) ve 'Zêr' (Altın)",
      description:
        "Mobil dünyada yüzbinlerce uygulama varken, CHAWZER karmaşayı filtreleyip yalnızca gerçek değer üreten, pürüzsüz ve vizyoner deneyimler inşa eder.",
    },
    {
      icon: Target,
      title: "Keskin & Odaklanmış Çözümler",
      subtitle: "Amaca Yönelik Mühendislik",
      description:
        "Finanstan siber güvenliğe, yabancı dil sınavlarından ilişki anılarına kadar her uygulamamız tek bir hedefi mükemmel icra etmek üzere tasarlanır.",
    },
    {
      icon: Shield,
      title: "Tavizsiz Gizlilik & Güvenlik",
      subtitle: "Yerel Veri Saklama Önceliği",
      description:
        "Kullanıcı verilerinizin gizliliği bizim için en değerli prensiptir. Uygulamalarımızda gereksiz izinler talep edilmez, verileriniz cihazınızda şifrelenir.",
    },
    {
      icon: Zap,
      title: "Yüksek Performans & Akıcılık",
      subtitle: "Modern Android Mimarisi",
      description:
        "Hafif kurulum boyutları, sıfır gecikme (zero lag) ve batarya dostu mimari ile tüm Android cihazlarda en üstün akıcılığı sunuyoruz.",
    },
  ];

  return (
    <section id="vision" className="py-24 relative bg-chawzer-bg/95 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Stüdyo Manifestosu</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Neden <span className="text-gold-gradient">CHAWZER</span>?
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            <strong className="text-amber-300">Chawzer</strong>, Kürtçe dilinde{" "}
            <em>&quot;Altın Göz&quot;</em> anlamına gelir. Dijital çağda doğru bilgiye, zamana ve
            değere sahip olmak altın değerindedir. Biz mobil uygulamalarımızı işte bu bakış açısıyla
            şekillendiriyoruz.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-chawzer-card/70 border border-chawzer-border hover:border-amber-500/40 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-200 transition-colors">
                  {pillar.title}
                </h3>
                <span className="text-xs font-semibold text-amber-400/90 uppercase tracking-wider block mb-3">
                  {pillar.subtitle}
                </span>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Developer Console Badge Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-chawzer-surface via-chawzer-card to-chawzer-surface border border-chawzer-border p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 p-2 flex items-center justify-center flex-shrink-0">
              <Image
                src="/brand/chawzer-eye.png"
                alt="Chawzer Eye"
                width={48}
                height={48}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-bold text-white">Google Play Geliştirici Hesabı</h4>
                <Award className="w-4 h-4 text-amber-400" />
              </div>
              <p className="text-xs text-gray-400 font-mono mt-0.5">
                Geliştirici Kimliği: <span className="text-amber-300 font-bold">{STUDIO_INFO.developerAccountId}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-chawzer-bg border border-chawzer-border text-center">
              <div className="text-lg font-black text-amber-300">4</div>
              <div className="text-[10px] text-gray-400 uppercase font-semibold">Aktif Proje</div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-chawzer-bg border border-chawzer-border text-center">
              <div className="text-lg font-black text-amber-300">2026</div>
              <div className="text-[10px] text-gray-400 uppercase font-semibold">Kuruluş</div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-chawzer-bg border border-chawzer-border text-center">
              <div className="text-lg font-black text-emerald-400">%100</div>
              <div className="text-[10px] text-gray-400 uppercase font-semibold">KVKK & GDPR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
