import React from "react";
import Link from "next/link";
import { Shield, ArrowLeft, ExternalLink, Smartphone, CheckCircle } from "lucide-react";
import { APPS_DATA, STUDIO_INFO } from "@/data/apps";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gizlilik Politikaları - CHAWZER Mobile Studio",
  description: "CHAWZER stüdyosu ve Google Play mağazasındaki Kese, Siberci Ol, YDS Master, İkimiz mobil uygulamalarının resmi gizlilik politikaları ve veri güvenliği ilkeleri.",
};

export default function GeneralPrivacyPage() {
  return (
    <div className="min-h-screen bg-chawzer-bg text-gray-200">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        {/* Header */}
        <div className="border-b border-chawzer-border pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Google Play & KVKK / GDPR Uyumluluğu</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            CHAWZER Genel Gizlilik Politikası
          </h1>
          <p className="text-sm text-gray-400">
            Son Güncelleme Tarihi: 22 Eylül 2026 • Geliştirici: CHAWZER Mobile Studio
          </p>
        </div>

        {/* Application-Specific Policies Grid */}
        <div className="mb-14">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-amber-400" />
            Uygulamaya Özel Gizlilik İlkeleri
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            Google Play Console mağaza girişleriniz için her bir uygulamanın özel gizlilik politikasını aşağıdan inceleyebilirsiniz:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {APPS_DATA.map((app) => (
              <Link
                key={app.id}
                href={`/gizlilik/${app.slug}`}
                className="group p-5 rounded-2xl bg-chawzer-card border border-chawzer-border hover:border-amber-500/50 transition-all shadow-md flex items-center justify-between"
              >
                <div>
                  <h3 className="font-bold text-white group-hover:text-amber-300 transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-xs font-mono text-gray-400 mt-1">{app.packageName}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-chawzer-surface flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Detailed Privacy Content */}
        <div className="space-y-8 text-sm text-gray-300 leading-relaxed border-t border-chawzer-border pt-10">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">1. Giriş ve Taahhüdümüz</h2>
            <p>
              CHAWZER (&quot;Biz&quot;, &quot;Stüdyo&quot; veya &quot;Geliştirici&quot;) olarak, kullanıcılarımızın kişisel gizliliğine ve veri güvenliğine en üst düzeyde önem veriyoruz. Bu Gizlilik Politikası, Google Play Store üzerinden dağıtılan tüm Android uygulamalarımız ve web sitemiz aracılığıyla sağlanan hizmetler için geçerlidir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">2. Hangi Bilgileri Topluyoruz?</h2>
            <p>
              Uygulamalarımız tasarlanırken <strong>&quot;Veri Minimizasyonu&quot;</strong> prensibi benimsenmiştir. Bu doğrultuda:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-gray-300">
              <li>
                <strong className="text-white">Kişisel Bilgiler:</strong> Zorunlu olmadıkça ad, soyad, telefon numarası gibi kişisel veriler talep edilmez.
              </li>
              <li>
                <strong className="text-white">Cihaz ve Kullanım Verileri:</strong> Uygulama performansını iyileştirmek, çökmeleri (crash reports) tespit etmek ve stabiliteyi sağlamak amacıyla standart Google Play anonim hata logları kullanılabilir.
              </li>
              <li>
                <strong className="text-white">Yerel Veriler:</strong> Finans, not veya anı gibi hassas kayıtlar öncelikli olarak kullanıcının kendi cihazında yerel SQLite / Room veri tabanında tutulur ve harici sunucularımıza aktarılmaz.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">3. İzinler ve Amaçları</h2>
            <p>
              Uygulamalarımızın talep ettiği her bir Android izni (örneğin internet erişimi, bildirim izni veya yerel depolama), yalnızca ilgili özelliğin teknik olarak çalışabilmesi için kullanılır. Hiçbir izin gizli veya kötü niyetli amaçlarla kullanılmaz.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">4. Üçüncü Taraf Hizmet Sağlayıcılar</h2>
            <p>
              Uygulamalarımızda kullanılan güvenilir altyapı servisleri şunları içerebilir:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-300">
              <li>Google Play Services (Kimlik doğrulama, uygulama güncellemeleri ve lisans kontrolü)</li>
              <li>Google Play In-App Review & In-App Update API</li>
              <li>Firebase Crashlytics (Uygulama çökme analitiği - tamamen anonim)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">5. Çocukların Gizliliği (COPPA)</h2>
            <p>
              Uygulamalarımız 13 yaşın altındaki çocuklardan bilerek ve isteyerek kişisel veri toplamaz. Ebeveyn veya yasal vasi olarak çocuğunuzun bize bilgi sağladığını düşünüyorsanız, lütfen derhal bizimle iletişime geçiniz.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">6. Kullanıcı Hakları ve İletişim</h2>
            <p>
              KVKK (6698 Sayılı Kanun) ve GDPR kapsamında verilerinize erişme, düzeltilmesini talep etme veya tamamen silinmesini isteme hakkına sahipsiniz. Her türlü gizlilik sorusu veya veri silme talebi için:
            </p>
            <div className="p-4 rounded-xl bg-chawzer-card border border-chawzer-border mt-2 font-mono text-xs space-y-1">
              <p className="text-white font-bold">CHAWZER Mobile Studio</p>
              <p className="text-amber-400">Resmi E-posta: {STUDIO_INFO.email}</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

