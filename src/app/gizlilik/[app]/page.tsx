import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Shield, Smartphone, Check, Lock, Database, Mail } from "lucide-react";
import { APPS_DATA, STUDIO_INFO } from "@/data/apps";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return APPS_DATA.map((app) => ({
    app: app.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ app: string }> }) {
  const { app: slug } = await params;
  const appData = APPS_DATA.find((a) => a.slug === slug);
  if (!appData) return { title: "Gizlilik Politikası" };

  return {
    title: `${appData.name} - Gizlilik Politikası (Google Play)`,
    description: `${appData.name} (${appData.packageName}) uygulaması için resmi Google Play Gizlilik Politikası ve veri güvenliği beyanı.`,
  };
}

export default async function AppPrivacyPage({ params }: { params: Promise<{ app: string }> }) {
  const { app: slug } = await params;
  const app = APPS_DATA.find((a) => a.slug === slug);

  if (!app) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-chawzer-bg text-gray-200">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-3 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-amber-300 transition-colors">
            Ana Sayfa
          </Link>
          <span>/</span>
          <Link href="/gizlilik" className="hover:text-amber-300 transition-colors">
            Gizlilik
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-semibold">{app.name.split(":")[0]}</span>
        </div>

        {/* App Header Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-chawzer-card via-chawzer-surface to-chawzer-card border border-amber-500/30 p-6 sm:p-8 mb-10 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-amber-500/40 via-yellow-400/20 to-transparent flex-shrink-0 shadow-lg">
              <Image
                src={app.icon}
                alt={app.name}
                width={80}
                height={80}
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>

            <div className="space-y-1.5 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/25">
                  {app.category}
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/5 text-gray-300">
                  {app.packageName}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {app.name} - Gizlilik Politikası
              </h1>
              <p className="text-xs text-gray-400">
                Geliştirici: CHAWZER • Son Revizyon: 22 Eylül 2026 • Durum: {app.status}
              </p>
            </div>
          </div>
        </div>

        {/* Play Console Copy Notice */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-10 flex items-start gap-3">
          <Shield className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-gray-300 leading-relaxed">
            <strong className="text-amber-300">Google Play Console İçin Resmi Bağlantı:</strong> Bu sayfa,
            Google Play Geliştirici Program Politikaları, KVKK ve GDPR gereksinimlerine tam uyumlu olarak
            hazırlanmıştır. Bu sayfanın URL adresini doğrudan Google Play Console mağaza girişinizdeki{" "}
            <em>&quot;Gizlilik Politikası URL&quot;</em> alanına ekleyebilirsiniz.
          </div>
        </div>

        {/* Policy Content */}
        <div className="space-y-8 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">1. Uygulama Amacı ve Genel Bilgi</h2>
            <p>
              Bu gizlilik politikası, <strong>CHAWZER</strong> tarafından geliştirilen ve Google Play Store&apos;da{" "}
              <code className="text-amber-300 bg-chawzer-card px-2 py-0.5 rounded border border-chawzer-border">
                {app.packageName}
              </code>{" "}
              paket adıyla yayımlanan <strong>{app.name}</strong> mobil uygulaması için geçerlidir.
            </p>
            <p>{app.fullDescription}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">2. Veri Güvenliği ve Depolama</h2>
            <p>
              Uygulamamız kullanıcı verilerinin gizliliğini temel tasarım felsefesi olarak kabul eder:
            </p>
            <div className="p-4 rounded-xl bg-chawzer-card border border-chawzer-border space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Database className="w-4 h-4 text-emerald-400" />
                <span>Veri Beyanı:</span>
              </div>
              <p className="text-xs text-gray-300">{app.privacySummary}</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">3. Talep Edilen Android İzinleri</h2>
            <p>
              Uygulamanın işletim sistemi üzerinde ihtiyaç duyduğu izinler ve kullanım gerekçeleri aşağıda belirtilmiştir:
            </p>
            <ul className="space-y-2">
              {app.permissions.map((perm, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-chawzer-surface/60 border border-chawzer-border text-xs text-gray-200"
                >
                  <Lock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{perm}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">4. Üçüncü Taraf Kütüphaneler ve Servisler</h2>
            <p>
              Uygulama, Google Play altyapısı ve temel servisleri (Google Play In-App Updates vb.) dışında kullanıcıyı takip eden casus yazılım, reklam ağı veya üçüncü taraf veri satıcıları içermez.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">5. Veri Silme ve Kullanıcı Talepleri</h2>
            <p>
              Uygulama içindeki tüm veriler cihazınızda tutulduğundan, uygulamayı cihazınızdan kaldırdığınızda veya Android Ayarlar &gt; Uygulamalar &gt; Verileri Temizle seçeneğini kullandığınızda tüm kişisel verileriniz geri döndürülemez biçimde derhal silinir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white text-gold-gradient">6. Geliştirici İletişim Bilgileri</h2>
            <p>
              Bu politika hakkında her türlü soru, öneri veya teknik destek talebiniz için resmi stüdyo kanalımız:
            </p>
            <div className="p-4 rounded-xl bg-chawzer-card border border-chawzer-border text-xs space-y-1">
              <p className="text-white font-bold">CHAWZER Mobile Studio</p>
              <p className="text-amber-400 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>Resmi Destek E-postası: {STUDIO_INFO.email}</span>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

