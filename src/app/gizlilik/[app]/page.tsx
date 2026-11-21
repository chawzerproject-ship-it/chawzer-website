import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Shield,
  Lock,
  Database,
  Mail,
  CheckCircle2,
  AlertCircle,
  Globe,
  Trash2,
  UserCheck,
  FileText,
} from "lucide-react";
import { APPS_DATA, STUDIO_INFO } from "@/data/apps";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const list = APPS_DATA.map((app) => ({
    app: app.slug,
  }));
  list.push({ app: "kpss" }); // Alias for direct short URL
  list.push({ app: "yks" }); // Alias for direct short URL
  list.push({ app: "yks-2027" }); // Alias for direct short URL
  list.push({ app: "ags" }); // Alias for direct short URL
  list.push({ app: "ags-2027" }); // Alias for direct short URL
  list.push({ app: "vampir-koylu" }); // Alias for direct short URL
  list.push({ app: "vampirkurtadam" }); // Alias for direct short URL
  list.push({ app: "vampirkoylu" }); // Alias for direct short URL
  return list;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ app: string }>;
}) {
  const { app: slug } = await params;
  const appData = APPS_DATA.find(
    (a) =>
      a.slug === slug ||
      (slug === "kpss" && a.id === "kpss") ||
      ((slug === "yks" || slug === "yks-2027") && a.id === "yks") ||
      ((slug === "ags" || slug === "ags-2027") && a.id === "ags") ||
      ((slug === "vampir-koylu" || slug === "vampirkurtadam" || slug === "vampirkoylu") && a.id === "vampirkurtadam")
  );
  if (!appData) return { title: "Gizlilik Politikası" };

  return {
    title: `${appData.name} - Gizlilik Politikası (Google Play)`,
    description: `${appData.name} (${appData.packageName}) uygulaması için resmi Google Play Gizlilik Politikası, veri güvenliği ve kullanıcı hakları beyanı.`,
    alternates: { canonical: `/gizlilik/${slug}` },
  };
}

export default async function AppPrivacyPage({
  params,
}: {
  params: Promise<{ app: string }>;
}) {
  const { app: slug } = await params;
  const app = APPS_DATA.find(
    (a) =>
      a.slug === slug ||
      (slug === "kpss" && a.id === "kpss") ||
      ((slug === "yks" || slug === "yks-2027") && a.id === "yks") ||
      ((slug === "ags" || slug === "ags-2027") && a.id === "ags") ||
      ((slug === "vampir-koylu" || slug === "vampirkurtadam" || slug === "vampirkoylu") && a.id === "vampirkurtadam")
  );

  if (!app) {
    notFound();
  }

  const isAgs = app.id === "ags";
  const isYks = app.id === "yks";
  const isFangfall = app.id === "vampirkurtadam";
  const effectiveDate = isAgs
    ? "21 Kasım 2026"
    : isYks || isFangfall
    ? "14 Kasım 2026"
    : "29 Ekim 2026";

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
          <Link
            href="/gizlilik"
            className="hover:text-amber-300 transition-colors"
          >
            Gizlilik
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-semibold">
            {app.name.split(":")[0]}
          </span>
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
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  SSL Korumalı & Aktif
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {app.name} - Gizlilik Politikası
              </h1>
              <p className="text-xs text-gray-400">
                Geliştirici: <strong>{STUDIO_INFO.name}</strong> • Paket Adı:{" "}
                <code className="text-amber-300">{app.packageName}</code> • Yürürlük
                Tarihi: {effectiveDate} • Sürüm: {app.version}
              </p>
            </div>
          </div>
        </div>

        {/* Google Play Console Notice Box */}
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-10 flex items-start gap-4 shadow-lg">
          <Shield className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-gray-300 leading-relaxed space-y-1.5">
            <p className="font-bold text-amber-300 text-sm">
              {isFangfall
                ? "Fangfall Gizlilik Bilgilendirmesi:"
                : "Google Play Console & App Store Resmi Uyumluluk Beyanı:"}
            </p>
            <p>
              {isFangfall
                ? "Bu sayfa, Fangfall'ın mevcut sürümündeki çevrimdışı oyun deneyimi ve veri işleme uygulamalarını açıklar. Uygulamanın özellikleri değişirse bu politika güncellenir."
                : "Bu sayfa; Google Play Geliştirici Program Politikaları, Google Play Kullanıcı Verileri Politikası (User Data Policy), 6698 Sayılı KVKK ve Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) kurallarına tam uyumlu olarak hazırlanmıştır."}
            </p>
            <p className="text-gray-400">
              Bu bağlantı geçerli bir SSL sertifikasına (HTTPS) sahiptir, dünya
              genelinde herhangi bir coğrafi kısıtlama veya oturum açma engeli
              olmadan herkese açık, standart ve düzenlenemez web formatında
              yayımlanmaktadır.
            </p>
          </div>
        </div>

        {/* Policy Content */}
        {isAgs ? (
          <div className="space-y-8 text-sm text-gray-300 leading-relaxed">
            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-200 text-xs leading-relaxed">
              <strong>Özet:</strong> Bu Gizlilik Politikası, <strong>chawzer</strong> (&quot;Geliştirici&quot;, &quot;Biz&quot;) tarafından geliştirilen <strong>AGS 2027</strong> mobil uygulamasının (&quot;Uygulama&quot;) kullanıcılarının (&quot;Kullanıcı&quot;, &quot;Siz&quot;) gizlilik haklarını korumak ve kişisel verilerin korunması mevzuatı (KVKK ve GDPR) çerçevesinde bilgilendirme yapmak amacıyla hazırlanmıştır.
            </div>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-400" />
                1. Toplanan Bilgiler ve Veri Türleri
              </h2>
              <p>
                Uygulamamız, kullanıcıların kişisel gizliliğine azami saygı duymaktadır. Uygulamanın temel işlevlerini sunabilmesi için aşağıdaki veri kategorileri işlenebilir:
              </p>
              <div className="p-4 rounded-xl bg-chawzer-card border border-chawzer-border space-y-3 text-xs">
                <div>
                  <strong className="text-white block text-sm mb-1">• Cihaz Üzerinde Saklanan Yerel Veriler:</strong>
                  <p className="text-gray-300">Sınav notlarınız, yanlış çözdüğünüz sorular (Hata Havuzu), deneme net takibi geçmişiniz, favori sorularınız ve çalışma sayacı (Pomodoro) verileriniz tamamen cihazınızın yerel depolama alanında (AsyncStorage) saklanır. Bu veriler harici herhangi bir sunucuya iletilmez.</p>
                </div>
                <div>
                  <strong className="text-white block text-sm mb-1">• Cihaz ve Kullanım Bilgileri:</strong>
                  <p className="text-gray-300">Uygulama performansını izlemek, hataları tespit etmek ve reklam hizmetlerini optimize etmek amacıyla cihaz modeli, işletim sistemi sürümü ve benzersiz reklam kimliği (Google Advertising ID / IDFA) anonim olarak işlenebilir.</p>
                </div>
                <div>
                  <strong className="text-white block text-sm mb-1">• Bildirim İzinleri:</strong>
                  <p className="text-gray-300">Kullanıcının açık rızasıyla sınav geri sayım hatırlatmaları, günlük çalışma bildirimleri göndermek için bildirim izni talep edilebilir.</p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Globe className="w-5 h-5 text-sky-400" />
                2. Üçüncü Taraf Hizmetleri ve Kütüphaneler
              </h2>
              <p>
                Uygulama, temel işlevlerini yerine getirmek, analiz ve reklam gösterimi sağlamak amacıyla güvenilir üçüncü taraf hizmet sağlayıcılarını kullanmaktadır:
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-3.5 rounded-xl bg-chawzer-card border border-chawzer-border flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Google AdMob (Google Inc.):</strong> Uygulama içi banner, geçiş ve ödüllü reklam gösterimleri için kullanılır. Google AdMob, kişiselleştirilmiş veya kişiselleştirilmemiş reklam sunabilmek adına çerezler ve reklam kimliklerini işleyebilir. Daha fazla bilgi için: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">Google Reklam Politikaları</a>.
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-chawzer-card border border-chawzer-border flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Expo / Firebase Cloud Messaging:</strong> Uygulama bildirim altyapısını desteklemek ve teknik güncellemeleri yönetmek için kullanılır.
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                3. Kişisel Verilerin İşlenme Amaçları
              </h2>
              <p>Toplanan bilgiler aşağıdaki amaçlarla sınırlı olarak işlenmektedir:</p>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-300 pl-2">
                <li>AGS 2027 sınavına hazırlık sürecinde ders notları, testler, soru dağılımları ve akıllı hata havuzu araçlarını sunmak,</li>
                <li>Uygulamanın kararlılığını sağlamak ve teknik çökmeleri gidermek,</li>
                <li>Kullanıcı deneyimini iyileştirmek ve ücretsiz kullanım imkanı sağlamak için reklam gösterimi sunmak,</li>
                <li>Yasal mevzuattan kaynaklanan yükümlülükleri yerine getirmek.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Database className="w-5 h-5 text-emerald-400" />
                4. Çerezler ve Yerel Depolama
              </h2>
              <p className="text-xs text-gray-300 leading-relaxed bg-chawzer-card p-4 rounded-xl border border-chawzer-border">
                Uygulamamız geleneksel internet çerezleri kullanmamaktadır; ancak kullanıcının sınav ve test tercihlerini, net skorlarını ve notlarını hatırlayabilmek için mobil cihazınızın yerel depolama birimini (AsyncStorage) kullanır. Bu veriler cihazınızdan uygulamanın kaldırılması veya uygulama verilerinin temizlenmesi ile tamamen silinir.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-indigo-400" />
                5. Çocukların Gizliliği
              </h2>
              <p>
                AGS 2027 uygulaması, öğretmen adayları ve Akademi Giriş Sınavı&apos;na hazırlanan yetişkin/genç adaylar için tasarlanmıştır. 13 yaşın (veya ilgili ülkenin mevzuatında belirlenen yaş sınırının) altındaki çocuklardan bilerek ve isteyerek kişisel veri toplanmaz.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Lock className="w-5 h-5 text-amber-400" />
                6. Veri Güvenliği ve Kullanıcı Hakları
              </h2>
              <p>6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Genel Veri Koruma Tüzüğü (GDPR) kapsamında her kullanıcı aşağıdaki haklara sahiptir:</p>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-300 pl-2">
                <li>Verilerinin işlenip işlenmediğini öğrenme,</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                <li>Yerel depolanan verilerini uygulama içerisinden dilediği an silme veya sıfırlama,</li>
                <li>Cihaz ayarlarından reklam kişiselleştirmesini ve bildirim izinlerini dilediği an kapatma hakkı.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-400" />
                7. İletişim ve Geri Bildirim
              </h2>
              <p>
                Bu Gizlilik Politikası hakkında herhangi bir sorunuz, öneriniz veya veri silme talebiniz olması durumunda bizimle doğrudan aşağıdaki iletişim kanalları üzerinden irtibata geçebilirsiniz:
              </p>
              <div className="p-5 rounded-2xl bg-chawzer-card border border-chawzer-border text-xs space-y-2">
                <p className="text-white font-bold text-sm">Geliştirici: chawzer</p>
                <p className="text-gray-300">
                  E-Posta:{" "}
                  <a
                    href="mailto:chawzer.dev@gmail.com"
                    className="text-amber-400 font-mono underline hover:text-amber-300"
                  >
                    chawzer.dev@gmail.com
                  </a>{" "}
                  /{" "}
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="text-amber-400 font-mono underline hover:text-amber-300"
                  >
                    {STUDIO_INFO.email}
                  </a>
                </p>
                <p className="text-gray-300">
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/chawzer.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 underline hover:text-amber-300"
                  >
                    @chawzer.dev
                  </a>
                </p>
                <p className="text-gray-300">
                  Google Play Sayfası:{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.chawzer.ags"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 underline hover:text-amber-300"
                  >
                    AGS 2027 Play Store Sayfası
                  </a>
                </p>
                <p className="text-gray-400 pt-2 border-t border-chawzer-border">
                  Doğrudan Bağımsız HTML Sayfası Olarak Görüntüle:{" "}
                  <a
                    href="/gizlilik-ags.html"
                    target="_blank"
                    className="text-purple-400 underline"
                  >
                    /gizlilik-ags.html
                  </a>
                </p>
              </div>
            </section>

            {/* English Summary for Google Play Reviewers */}
            <section className="mt-12 pt-10 border-t border-chawzer-border/60 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5" />
                <span>English Summary for Google Play Policy Reviewers</span>
              </div>
              <h2 className="text-xl font-bold text-white">
                Official Privacy Policy Statement (English)
              </h2>
              <div className="space-y-3 text-xs text-gray-300 leading-relaxed bg-chawzer-surface/50 p-5 rounded-2xl border border-chawzer-border">
                <p>
                  <strong>Application Name:</strong> AGS 2027 (Akademi Giriş Sınavı) <br />
                  <strong>Package ID:</strong> <code>com.chawzer.ags</code> <br />
                  <strong>Developer:</strong> chawzer (chawzer.dev@gmail.com) <br />
                  <strong>Effective Date:</strong> 21 November 2026
                </p>
                <p>
                  <strong>1. Data Handling &amp; Privacy:</strong> The application does NOT collect or transmit sensitive personal data to developer servers. Study notes, question pool bookmarks, mistake history (Hata Havuzu), and Pomodoro stats are stored strictly locally on the device using AsyncStorage.
                </p>
                <p>
                  <strong>2. Advertising &amp; Third Parties:</strong> The app integrates Google AdMob for banner and interstitial ads. AdMob may process anonymous advertising IDs (Google Advertising ID / IDFA) according to Google&apos;s privacy policies. Push notifications and crash monitoring may utilize Expo / Firebase Cloud Messaging.
                </p>
                <p>
                  <strong>3. Data Deletion:</strong> All locally stored study records can be permanently deleted anytime by clearing app data via Android Settings or uninstalling the app.
                </p>
                <p>
                  <strong>4. Children&apos;s Privacy:</strong> The app is targeted toward prospective teachers and adults preparing for civil service academy exams (13+). It does not knowingly collect information from children under 13.
                </p>
              </div>
            </section>
          </div>
        ) : isFangfall ? (
          <div className="space-y-8 text-sm text-gray-300 leading-relaxed">
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs leading-relaxed">
              <strong>Özet:</strong> Fangfall:Werewolf # Vampir &amp; Kurtadam
              şu an tek cihazda çevrimdışı Pass &amp; Play olarak oynanır.
              Uygulama hesabı veya online oda özelliği sunmaz; oyun verileri
              cihazınızda işlenir ve geliştiricinin sunucularına gönderilmez.
            </div>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                1. Kapsam ve Oyun Kullanımı
              </h2>
              <p>
                Bu politika, <strong>{app.name}</strong> (
                <code className="text-amber-300">{app.packageName}</code>)
                uygulaması için geçerlidir. Oyun; oyuncuların aynı cihazı sırayla
                kullandığı gizli roller, gece eylemleri ve gündüz oylaması içeren
                bir sosyal akıl yürütme oyunudur.
              </p>
              <p>
                Oyunun mevcut sürümünde online oda, çevrimiçi eşleştirme veya
                Firebase/Supabase tabanlı bir oyun servisi bulunmaz. Online
                özellikler sunulursa bu politika güncellenir.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Database className="w-5 h-5 text-emerald-400" />
                2. İşlenen Bilgiler ve Yerel Saklama
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  Üyelik, e-posta, telefon numarası veya sosyal medya hesabı
                  oluşturmanız istenmez.
                </li>
                <li>
                  Lobiye girdiğiniz oyuncu adları yalnızca cihazda, oyun
                  oturumu sırasında kullanılır; geliştiriciye veya sunucuya
                  gönderilmez.
                </li>
                <li>
                  Oyun ayarları ve cihazda saklanması gereken ilerleme bilgileri
                  (ör. açılan roller ve oyun içi ödül durumu) uygulamanın yerel
                  depolama alanında tutulur. Bu kayıtlar çevrimiçi hesaba
                  bağlanmaz veya buluta yüklenmez.
                </li>
                <li>
                  GPS/konum, rehber, kamera, mikrofon, fotoğraflar, reklam
                  kimliği veya hassas kişisel bilgiler talep edilmez.
                </li>
              </ul>
              <p>
                Uygulama oyunun çalışması için kişisel verileri Chawzer
                sunucularında toplamaz veya saklamaz. Cihazın işletim sistemi
                ve mağaza hizmetleri kendi teknik kayıtlarını kendi gizlilik
                politikalarına göre işleyebilir.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Lock className="w-5 h-5 text-amber-400" />
                3. İzinler
              </h2>
              <ul className="space-y-2.5">
                {app.permissions.map((permission) => (
                  <li
                    key={permission}
                    className="p-3.5 rounded-xl bg-chawzer-card border border-chawzer-border text-xs text-gray-200 flex items-start gap-3"
                  >
                    <Lock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{permission}</span>
                  </li>
                ))}
              </ul>
              <p>
                Oyun ses efektlerini çalmak için mikrofon kullanmaz; ortam
                sesini dinlemez veya kaydetmez. Titreşim izni yalnızca oyun içi
                dokunsal geri bildirim içindir.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Globe className="w-5 h-5 text-sky-400" />
                4. Üçüncü Taraflar ve Reklam
              </h2>
              <p>
                Uygulamada reklam hedefleme veya kullanıcı davranışlarını
                profilleme amacıyla reklam ağı ya da analitik takip SDK&apos;sı
                kullanılmaz. Oyun verileri üçüncü taraflara satılmaz veya
                kiralanmaz. Uygulama mağazası ve cihaz işletim sistemi
                hizmetleri, uygulamanın dağıtımı ve temel cihaz işlevleri
                kapsamında kendi politikalarına göre çalışabilir.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Trash2 className="w-5 h-5 text-rose-400" />
                5. Saklama ve Verilerin Silinmesi
              </h2>
              <p>
                Cihazda tutulan oyun kayıtlarını Android ayarlarından{" "}
                <em>
                  Ayarlar &gt; Uygulamalar &gt; Fangfall &gt; Depolama &gt;
                  Verileri temizle
                </em>{" "}
                adımlarını izleyerek silebilirsiniz. Uygulamayı kaldırmak da
                uygulamanın yerel verilerini cihazdan kaldırır. Menü adları
                Android sürümüne göre değişebilir.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-indigo-400" />
                6. Çocukların Gizliliği ve Kullanıcı Hakları
              </h2>
              <p>
                Oyun kişisel verileri geliştiriciye iletmez. Oyuncu adı
                alanlarına kişilerin kendileri veya birlikte oynayan kişiler
                tarafından girilen adlar, cihazda yerel olarak işlenir.
                Kişisel verilerinizle ilgili soru veya talebiniz için
                geliştiriciyle iletişime geçebilirsiniz.
              </p>
              <p>
                KVKK ve uygulanabilir veri koruma mevzuatı kapsamındaki
                başvurularınızı aşağıdaki iletişim adresine iletebilirsiniz.
                Sunucularımızda tutulmayan yerel oyun verilerini yukarıdaki
                cihaz ayarlarından silebilirsiniz.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                7. Politika Değişiklikleri
              </h2>
              <p>
                Uygulamanın özellikleri veya yasal gereklilikler değiştiğinde
                bu politika güncellenebilir. Güncel metin bu sayfada
                yayımlandığı tarihten itibaren geçerlidir.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-400" />
                8. İletişim
              </h2>
              <p>
                Gizlilik politikası, veri işleme veya veri silme talepleri için:
              </p>
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="text-amber-400 underline"
              >
                {STUDIO_INFO.email}
              </a>
            </section>
          </div>
        ) : isYks ? (
          <div className="space-y-8 text-sm text-gray-300 leading-relaxed">
            {/* Highlight Box from User */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs leading-relaxed">
              <strong>Özet:</strong> Bu Gizlilik Politikası, <strong>{STUDIO_INFO.name}</strong> tarafından geliştirilen <strong>YKS 2027 Koçum & Soru Bankası</strong> (<code>com.chawzer.yks</code>) mobil uygulamasını kullanan öğrencilerin kişisel verilerinin 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Genel Veri Koruma Tüzüğü (GDPR) kapsamında nasıl toplandığını, işlendiğini ve korunduğunu açıklar.
            </div>

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                1. Toplanan Bilgiler ve Toplanma Amaçları
              </h2>
              <p>
                Uygulamamız, öğrencilere en verimli sınav hazırlık deneyimini sunabilmek amacıyla sınırlı ve gerekli bilgileri işler:
              </p>
              <div className="p-4 rounded-xl bg-chawzer-card border border-chawzer-border space-y-3 text-xs">
                <div>
                  <strong className="text-white block text-sm mb-1">• Hesap ve Profil Bilgileri:</strong>
                  <p className="text-gray-300">İsteğe bağlı üyelik oluşturulduğunda kullanıcı adı, e-posta adresi ve hedef YKS puan türü (Sayısal, Eşit Ağırlık, Sözel).</p>
                </div>
                <div>
                  <strong className="text-white block text-sm mb-1">• Öğrenme ve Çözüm Verileri:</strong>
                  <p className="text-gray-300">Soru bankasında çözülen sorular, deneme sınavı netleri, kazanım bazlı doğru/yanlış analizleri, hata defteri kayıtları ve aralıklı tekrar (flashcard) durumları. Bu veriler tamamen öğrencinin çalışma performansını analiz etmek ve zayıf konuları tespit etmek amacıyla yerel ve güvenli sunucularda saklanır.</p>
                </div>
                <div>
                  <strong className="text-white block text-sm mb-1">• Cihaz ve Kullanım İstatistikleri:</strong>
                  <p className="text-gray-300">Uygulama performansını iyileştirmek ve çökme/hata kayıtlarını analiz etmek amacıyla anonim cihaz modeli, işletim sistemi sürümü ve uygulama içi genel kullanım süreleri.</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Lock className="w-5 h-5 text-amber-400" />
                2. İzinler ve Cihaz Erişimi
              </h2>
              <p>Uygulamanın düzgün çalışabilmesi için işletim sisteminden aşağıdaki izinler talep edilebilir:</p>
              <ul className="space-y-2.5">
                <li className="p-3.5 rounded-xl bg-chawzer-card border border-chawzer-border text-xs text-gray-200 flex items-start gap-3">
                  <Database className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Yerel Depolama (SQLite / MMKV):</strong> Binlerce sorunun internet bağlantısı olmadan (offline-first) çevrimdışı çözülebilmesi ve soru üzerine yapılan karalama/çizimlerin kaydedilebilmesi için yerel depolama kullanılır.
                  </div>
                </li>
                <li className="p-3.5 rounded-xl bg-chawzer-card border border-chawzer-border text-xs text-gray-200 flex items-start gap-3">
                  <Lock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Bildirim İzni (İsteğe Bağlı):</strong> Günlük çalışma serisini (streak) hatırlatmak ve Pomodoro mola uyarılarını iletmek için kullanılır. İstediğiniz zaman cihaz ayarlarından kapatılabilir.
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Globe className="w-5 h-5 text-sky-400" />
                3. Üçüncü Taraf Hizmetleri
              </h2>
              <p>Uygulama, temel altyapı ve analitik süreçleri için endüstri standardı güvenli servis sağlayıcıları kullanabilir:</p>
              <div className="space-y-2 text-xs">
                <div className="p-3.5 rounded-xl bg-chawzer-card border border-chawzer-border flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Google Play Services:</strong> Temel Android kütüphaneleri ve uygulama dağıtımı.
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-chawzer-card border border-chawzer-border flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Expo / EAS:</strong> Uygulama güncellemeleri ve hata bildirimi altyapısı.
                  </div>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs">
                <strong>Önemli Güvence:</strong> Kişisel verileriniz hiçbir koşulda ticari amaçla üçüncü taraf reklam verenlerle veya veri simsarlarıyla <u>paylaşılmaz ve satılmaz</u>.
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                4. Telif Hakları ve Özgün Soru İçerikleri
              </h2>
              <p className="text-xs text-gray-300 leading-relaxed bg-chawzer-card p-4 rounded-xl border border-chawzer-border">
                Uygulama içerisinde yer alan tüm 2027 TYT ve AYT soruları, konu özetleri, çözüm adımları ve vektörel çizimler <strong>Chawzer</strong> EdTech içerik üretim hattı tarafından özgünleştirilmiştir. Referans sınav kalıpları matematiksel ve pedagojik olarak AI destekli mutasyon ve senaryo değişikliği filtrelerinden (%30&apos;un altında benzerlik eşiği) geçirilerek telif haklarına tam saygılı şekilde sunulmaktadır.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-indigo-400" />
                5. Çocukların ve Gençlerin Gizliliği
              </h2>
              <p>
                Uygulamamız ağırlıklı olarak YKS sınavına hazırlanan lise ve mezun öğrencilere (13 yaş ve üzeri) yöneliktir. Bilerek 13 yaşın altındaki çocuklardan kişisel bilgi toplamayız. Bir ebeveyn veya vasi çocuğunun bize kişisel bilgi verdiğini fark ederse lütfen bizimle iletişime geçsin; gerekli veriler derhal silinecektir.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Lock className="w-5 h-5 text-amber-400" />
                6. Veri Güvenliği ve Saklama
              </h2>
              <p>
                Verileriniz, yetkisiz erişime, kaybolmaya veya kötüye kullanıma karşı korumak için modern şifreleme yöntemleri (SSL/TLS, yerel SQLite şifreleme) ile korunmaktadır.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Trash2 className="w-5 h-5 text-rose-400" />
                7. Kullanıcı Hakları ve Veri Silme Talebi
              </h2>
              <p>
                KVKK&apos;nın 11. maddesi ve GDPR uyarınca her kullanıcı:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-300 pl-2">
                <li>Kişisel verilerinin işlenip işlenmediğini öğrenme,</li>
                <li>Verilerinin düzeltilmesini veya tamamen silinmesini talep etme hakkına sahiptir.</li>
              </ul>
              <p className="text-xs text-gray-300 mt-2">
                Hesabınızın ve ilişkili tüm çalışma verilerinizin kalıcı olarak silinmesi için aşağıdaki iletişim kanallarından bize başvurabilirsiniz.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-400" />
                8. İletişim
              </h2>
              <p>
                Gizlilik Politikamız ile ilgili her türlü soru, öneri veya veri silme talebiniz için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="p-5 rounded-2xl bg-chawzer-card border border-chawzer-border text-xs space-y-2">
                <p className="text-white font-bold text-sm">Chawzer Ekibi</p>
                <p className="text-gray-300">
                  Web Sitesi:{" "}
                  <a
                    href="https://chawzer-website.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 underline hover:text-amber-300"
                  >
                    https://chawzer-website.vercel.app/
                  </a>
                </p>
                <p className="text-gray-300">
                  Resmi E-posta:{" "}
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="text-amber-400 font-mono underline hover:text-amber-300"
                  >
                    {STUDIO_INFO.email}
                  </a>
                </p>
                <p className="text-gray-400 pt-2 border-t border-chawzer-border">
                  Doğrudan Bağımsız HTML Sayfası Olarak Görüntülemek İçin:{" "}
                  <a
                    href="/gizlilik-yks.html"
                    target="_blank"
                    className="text-indigo-400 underline"
                  >
                    /gizlilik-yks.html
                  </a>
                </p>
              </div>
            </section>

            {/* English Summary for Google Play Reviewers */}
            <section className="mt-12 pt-10 border-t border-chawzer-border/60 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5" />
                <span>English Summary for Google Play Policy Reviewers</span>
              </div>
              <h2 className="text-xl font-bold text-white">
                Official Privacy Policy Statement (English)
              </h2>
              <div className="space-y-3 text-xs text-gray-300 leading-relaxed bg-chawzer-surface/50 p-5 rounded-2xl border border-chawzer-border">
                <p>
                  <strong>Application Name:</strong> YKS 2027 Koçum &amp; Soru Bankası <br />
                  <strong>Package ID:</strong> <code>com.chawzer.yks</code> <br />
                  <strong>Developer:</strong> Chawzer (https://chawzer-website.vercel.app/) <br />
                  <strong>Effective Date:</strong> 14 November 2026
                </p>
                <p>
                  <strong>1. Data Handling &amp; Privacy:</strong> The application processes only minimal necessary data to assist students in their exam preparation. Study records, quiz performance, and question bookmarking are stored locally using SQLite / MMKV on the user&apos;s device. Optional account registration uses only email, username, and target field.
                </p>
                <p>
                  <strong>2. Permissions:</strong> Requests local storage permission strictly for offline-first test solving and optional notification permission for daily study streak reminders and Pomodoro alerts.
                </p>
                <p>
                  <strong>3. Third-Party Services &amp; Advertising:</strong> The app utilizes standard Google Play Services and Expo/EAS update infrastructure. Personal data is NEVER shared, sold, or rented to third-party advertisers or data brokers.
                </p>
                <p>
                  <strong>4. Content Copyright:</strong> All exam questions, summaries, and solutions are uniquely curated by the Chawzer EdTech line respecting intellectual property guidelines.
                </p>
                <p>
                  <strong>5. User Rights &amp; Deletion:</strong> Users have the right to request deletion of any associated account or study data anytime by contacting <code>{STUDIO_INFO.email}</code>.
                </p>
              </div>
            </section>
          </div>
        ) : (
          <div className="space-y-8 text-sm text-gray-300 leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                1. Uygulama Amacı ve Genel Bilgi
              </h2>
              <p>
                Bu Gizlilik Politikası, <strong>{STUDIO_INFO.name}</strong> (&quot;Geliştirici&quot;)
                tarafından geliştirilen ve Google Play Store üzerinde{" "}
                <code className="text-amber-300 bg-chawzer-card px-2 py-0.5 rounded border border-chawzer-border">
                  {app.packageName}
                </code>{" "}
                paket adıyla yayımlanan <strong>{app.name}</strong> mobil
                uygulaması için geçerlidir.
              </p>
              <p>{app.fullDescription}</p>
              <p>
                Geliştirici olarak, kullanıcılarımızın kişisel gizliliğine ve veri
                güvenliğine azami özen göstermekteyiz. Uygulama, Google Play
                ekosisteminin en güncel güvenlik ve kullanıcı gizliliği ilkelerine
                sıkı sıkıya bağlı kalınarak inşa edilmiştir.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Database className="w-5 h-5 text-emerald-400" />
                2. Toplanan ve İşlenen Veriler (Veri Minimizasyonu İlkesi)
              </h2>
              <p>
                Uygulamamız tasarlanırken <strong>&quot;Veri Minimizasyonu (Data Minimization)&quot;</strong>{" "}
                ve <strong>&quot;Varsayılan Olarak Gizlilik (Privacy by Design)&quot;</strong> ilkeleri
                esas alınmıştır.
              </p>
              <div className="p-4 rounded-xl bg-chawzer-card border border-chawzer-border space-y-3">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Kişisel Veri Toplanmaması Beyanı:</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-300 pl-2">
                  <li>
                    <strong className="text-white">Kimlik Bilgisi:</strong> Ad, soyad, T.C. kimlik numarası vb. hiçbir kimlik bilgisi talep edilmez ve toplanmaz.
                  </li>
                  <li>
                    <strong className="text-white">İletişim Bilgisi:</strong> E-posta adresi, telefon numarası veya ev/iş adresi istenmez.
                  </li>
                  <li>
                    <strong className="text-white">Hesap Oluşturma:</strong> Uygulamayı kullanmak için herhangi bir üyelik, kayıt veya şifre gerekmez; uygulama doğrudan internetsiz ve hesapsız çalışabilir.
                  </li>
                  <li>
                    <strong className="text-white">Konum Verisi:</strong> Hassas (GPS) veya yaklaşık (ağ tabanlı) konum bilgisine kesinlikle erişilmez.
                  </li>
                  <li>
                    <strong className="text-white">Finansal Veriler:</strong> Kredi kartı, banka hesabı veya ödeme bilgisi toplanmaz veya işlenmez.
                  </li>
                  <li>
                    <strong className="text-white">Cihaz Tanımlayıcıları:</strong> Reklam Kimliği (AAID), IMEI, MAC adresi gibi benzersiz donanım takip kimlikleri toplanmaz veya izlenmez.
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-chawzer-surface/80 border border-chawzer-border text-xs text-gray-300">
                <p className="font-semibold text-amber-300 mb-1">Yerel Olarak Saklanan Kullanıcı Verileri:</p>
                <p>{app.privacySummary}</p>
                <p className="mt-2 text-gray-400">
                  Kullanıcının çözdüğü deneme sonuçları, hata defterindeki sorular, hafıza kartı durumları, harita notları ve koyu/açık tema tercihleri yalnızca kullanıcının telefonunun yerel korumalı alanında (sandboxed app storage) saklanır. Bu veriler harici hiçbir sunucuya iletilmez.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Lock className="w-5 h-5 text-amber-400" />
                3. Android İzinleri ve Şeffaf Kullanım Gerekçeleri
              </h2>
              <p>
                Uygulamanın çalışabilmesi için Android işletim sisteminden talep
                edilen izinler aşağıda listelenmiş ve gerekçelendirilmiştir.
                Uygulamamız tehlikeli (runtime dangerous) hiçbir gereksiz izin
                talep etmez:
              </p>
              <ul className="space-y-2.5">
                {app.permissions.map((perm, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl bg-chawzer-card border border-chawzer-border text-xs text-gray-200 flex items-start gap-3"
                  >
                    <Lock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">{perm}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400">
                Not: <code>android.permission.INTERNET</code> izni, yalnızca dinamik yazı tipi ailesinin (Google Fonts) önbelleğe yüklenmesi ve Google Play sistem güncellemeleri için kullanılır; kullanıcı verisi aktarımı amacıyla kullanılmaz.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Globe className="w-5 h-5 text-sky-400" />
                4. Üçüncü Taraf Kütüphaneler, Servisler ve Reklam Beyanı
              </h2>
              <div className="space-y-2 text-xs">
                <div className="p-3.5 rounded-xl bg-chawzer-card border border-chawzer-border flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Reklam Ağı Bulunmaz:</strong> Uygulamada Google AdMob, Unity Ads, AppLovin veya benzeri hiçbir reklam ağı yer almamaktadır. Kullanıcılarımızın çalışma deneyimini bölen veya reklam hedeflemesi amacıyla veri toplayan hiçbir üçüncü taraf SDK entegre edilmemiştir.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-chawzer-card border border-chawzer-border flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Casus ve Takipçi Yazılım İçermez:</strong> Uygulama; kullanıcı davranışlarını gizlice kaydeden, ekran görüntüsü alan veya arka planda veri toplayan hiçbir casus yazılım (spyware) veya takip kütüphanesi (tracker) barındırmaz.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-chawzer-card border border-chawzer-border flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Standart Altyapı Servisleri:</strong> Tipografi render işlemi için Google Fonts ve Android işletim sisteminin standart Google Play Core kütüphaneleri kullanılmaktadır.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Trash2 className="w-5 h-5 text-rose-400" />
                5. Veri Saklama, Güvenlik ve Veri Silme Prosedürü (Google Play Veri Silme Politikası)
              </h2>
              <p>
                Google Play&apos;in Veri Silme Politikası (Data Deletion Policy) gereğince kullanıcılarımıza verilerini yönetme ve silme konusunda tam kontrol sağlıyoruz:
              </p>
              <div className="p-4 rounded-xl bg-chawzer-card border border-chawzer-border space-y-2.5 text-xs text-gray-300">
                <p>
                  <strong className="text-white">1. Anında Yerel Temizleme:</strong> Uygulamamızdaki tüm deneme istatistikleri, yanlış sorular ve harita notları kullanıcının kendi cihazında tutulduğundan; Android cihazınızda <em>Ayarlar &gt; Uygulamalar &gt; {app.name.split(":")[0]} &gt; Depolama &gt; Verileri Temizle</em> adımlarını uygulayarak tüm verileri kalıcı ve geri döndürülemez şekilde anında silebilirsiniz.
                </p>
                <p>
                  <strong className="text-white">2. Uygulama Kaldırma:</strong> Uygulamayı cihazınızdan kaldırdığınızda (Uninstall), işletim sistemi uygulamaya tahsis edilen tüm yerel dosyaları otomatik olarak tamamen siler.
                </p>
                <p>
                  <strong className="text-white">3. E-posta İle Talep:</strong> Herhangi bir veri silme sorusu veya teyidi için doğrudan <a href={`mailto:${STUDIO_INFO.email}`} className="text-amber-400 underline">{STUDIO_INFO.email}</a> adresine talepte bulunabilirsiniz. Talepleriniz en geç 7 iş günü içinde incelenir ve yanıtlanır.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-indigo-400" />
                6. Çocukların Gizliliği (COPPA & Aile Politikası)
              </h2>
              <p>
                Bu uygulama genel kitleye ve sınavlara hazırlanan adaylara yöneliktir. 13 yaşın altındaki (veya ilgili ülkenin mevzuatına göre 16 yaşın altındaki) çocuklardan bilerek ve isteyerek hiçbir kişisel veri toplanmamaktadır. Bir ebeveyn veya yasal vasi olarak çocuğunuzun bize bilgi ilettiğini tespit ederseniz, lütfen derhal bizimle iletişime geçiniz; ilgili içerik ivedilikle imha edilecektir.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                7. KVKK (6698 Sayılı Kanun) ve GDPR Kapsamındaki Haklarınız
              </h2>
              <p>
                6698 Sayılı Kişisel Verilerin Korunması Kanunu&apos;nun 11. maddesi ve AB Genel Veri Koruma Tüzüğü (GDPR) uyarınca, veri sahipleri verilerinin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme ve silinmesini isteme hakkına sahiptir. Uygulamamız kişisel veri toplamadığı için bu haklar doğal olarak korunmaktadır.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                8. Politika Değişiklikleri ve Yürürlük
              </h2>
              <p>
                Bu Gizlilik Politikası, yasal gereksinimler veya Google Play politika güncellemeleri doğrultusunda zaman zaman güncellenebilir. Değişiklikler bu web sayfasında yayımlandığı tarihten itibaren geçerli olur. Sayfanın en üstünde yer alan revizyon tarihi son güncelleme gününü göstermektedir.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white text-gold-gradient flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-400" />
                9. Geliştirici İletişim Bilgileri
              </h2>
              <p>
                Bu Gizlilik Politikası, veri koruma ilkeleri veya teknik destek ile ilgili her türlü soru ve geri bildirimleriniz için resmi kanallarımız:
              </p>
              <div className="p-5 rounded-2xl bg-chawzer-card border border-chawzer-border text-xs space-y-2">
                <p className="text-white font-bold text-sm">{STUDIO_INFO.name} Mobile Studio</p>
                <p className="text-gray-300">
                  Resmi Geliştirici Hesabı: <span className="text-white">{STUDIO_INFO.name}</span>
                </p>
                <p className="text-gray-300">
                  Resmi İletişim & Destek E-postası:{" "}
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="text-amber-400 font-mono underline hover:text-amber-300"
                  >
                    {STUDIO_INFO.email}
                  </a>
                </p>
                <p className="text-gray-300">
                  Google Play Geliştirici Sayfası:{" "}
                  <a
                    href={STUDIO_INFO.playStoreConsoleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 underline hover:text-amber-300"
                  >
                    {STUDIO_INFO.playStoreConsoleUrl}
                  </a>
                </p>
                <p className="text-gray-400">Ülke / Konum: {STUDIO_INFO.location}</p>
              </div>
            </section>

            {/* English Summary for Google Play Reviewers */}
            <section className="mt-12 pt-10 border-t border-chawzer-border/60 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5" />
                <span>English Summary for Google Play Policy Reviewers</span>
              </div>
              <h2 className="text-xl font-bold text-white">
                Official Privacy Policy Statement (English)
              </h2>
              <div className="space-y-3 text-xs text-gray-300 leading-relaxed bg-chawzer-surface/50 p-5 rounded-2xl border border-chawzer-border">
                <p>
                  <strong>Application Name:</strong> {app.name} <br />
                  <strong>Package Name:</strong> <code>{app.packageName}</code> <br />
                  <strong>Developer:</strong> {STUDIO_INFO.name} ({STUDIO_INFO.email}) <br />
                  <strong>Effective Date:</strong> {effectiveDate}
                </p>
                <p>
                  <strong>1. Data Collection & Sharing:</strong> The application does NOT collect, store, or transmit any sensitive or personally identifiable user data (PII) such as name, email, physical address, financial information, precise GPS location, or device identifiers. All quiz scores, mistake questions, study notes, and user preferences are strictly processed and stored locally on the user&apos;s device (sandboxed local storage). No personal user data is ever sold, rented, or shared with third parties.
                </p>
                <p>
                  <strong>2. Permissions:</strong> The app declares <code>android.permission.INTERNET</code> and <code>android.permission.ACCESS_NETWORK_STATE</code> solely for loading Google Fonts and standard Google Play in-app update checks. No dangerous or invasive runtime permissions are requested.
                </p>
                <p>
                  <strong>3. Advertising & Analytics:</strong> The app contains NO third-party advertising SDKs (e.g. AdMob, Unity) and NO third-party tracking or behavioral profiling tools.
                </p>
                <p>
                  <strong>4. Data Retention & Deletion:</strong> Users have complete control over their local data. Clearing application data via Android Settings (&gt; Apps &gt; Storage &gt; Clear Data) or uninstalling the app permanently and irreversibly erases all local study records. Users may also contact developer support at <code>{STUDIO_INFO.email}</code> for data-related inquiries.
                </p>
                <p>
                  <strong>5. Children&apos;s Privacy (COPPA):</strong> The application is designed for general audiences and exam candidates. It does not target children under the age of 13 and does not knowingly collect personal information from children.
                </p>
                <p>
                  <strong>6. Developer Contact:</strong> If you have questions regarding this Privacy Policy, please contact us at <code>{STUDIO_INFO.email}</code>.
                </p>
              </div>
            </section>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
