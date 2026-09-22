import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";
import { STUDIO_INFO } from "@/data/apps";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kullanım Şartları - CHAWZER Mobile Studio",
  description: "CHAWZER stüdyosu mobil uygulamaları ve dijital servisleri genel kullanım şartları ve yasal sözleşmesi.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-chawzer-bg text-gray-200">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="border-b border-chawzer-border pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Yasal Sözleşme</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Kullanım Şartları ve Koşulları
          </h1>
          <p className="text-sm text-gray-400">
            Yürürlük Tarihi: 22 Eylül 2026 • CHAWZER Studio
          </p>
        </div>

        <div className="space-y-8 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">1. Şartların Kabulü</h2>
            <p>
              CHAWZER tarafından Google Play Store üzerinden sunulan uygulamaları indirerek veya web sitemizi ziyaret ederek, bu Kullanım Şartları&apos;nı kabul etmiş sayılırsınız. Şartları kabul etmiyorsanız lütfen uygulamalarımızı kullanmayınız.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">2. Fikri Mülkiyet Hakları</h2>
            <p>
              Uygulamaların kaynak kodları, görsel tasarımları, logoları (&quot;Altın Göz&quot; amblemi), ses efektleri ve içerikleri CHAWZER stüdyosuna aittir ve uluslararası telif hakkı yasalarıyla korunmaktadır. İzinsiz kopyalanamaz, tersine mühendislik yapılamaz veya yeniden dağıtılamaz.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">3. Kapalı Test (Beta) Kullanım Kuralları</h2>
            <p>
              Kapalı test programına katılan kullanıcılar (&quot;Testçiler&quot;), uygulamaların henüz geliştirme aşamasında olduğunu, geçici hatalar barındırabileceğini kabul eder. Testçiler sağladıkları geri bildirimlerle ürünün olgunlaşmasına katkı sağlarlar.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">4. Sorumluluk Reddi</h2>
            <p>
              Uygulamalarımız &quot;olduğu gibi&quot; (as-is) sunulmaktadır. Finansal hesaplama veya eğitim içeriklerinin kullanımından doğabilecek dolaylı zararlardan CHAWZER sorumlu tutulamaz.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">5. İletişim</h2>
            <p>
              Kullanım koşulları hakkındaki sorularınız için bize{" "}
              <span className="text-amber-400 font-mono">{STUDIO_INFO.email}</span> adresinden ulaşabilirsiniz.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
