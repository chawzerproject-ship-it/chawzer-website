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
  return list;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ app: string }>;
}) {
  const { app: slug } = await params;
  const appData = APPS_DATA.find(
    (a) => a.slug === slug || (slug === "kpss" && a.id === "kpss")
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
    (a) => a.slug === slug || (slug === "kpss" && a.id === "kpss")
  );

  if (!app) {
    notFound();
  }

  const currentDate = "29 Ekim 2026";
  const effectiveDate = "29 Ekim 2026";

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
              Google Play Console Resmi Uyumluluk Beyanı:
            </p>
            <p>
              Bu sayfa; Google Play Geliştirici Program Politikaları, Google Play
              Kullanıcı Verileri Politikası (User Data Policy), 6698 Sayılı KVKK
              ve Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) kurallarına tam
              uyumlu olarak hazırlanmıştır.
            </p>
            <p className="text-gray-400">
              Bu bağlantı geçerli bir SSL sertifikasına (HTTPS) sahiptir, dünya
              genelinde herhangi bir coğrafi kısıtlama veya oturum açma engeli
              olmadan herkese açık, standart ve düzenlenemez web formatında
              yayımlanmaktadır.
            </p>
          </div>
        </div>

        {/* Turkish Policy Content */}
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
              Bu uygulama genel kitleye ve kamu personeli seçme sınavlarına hazırlanan yetişkin/öğrenci adaylara yöneliktir. 13 yaşın altındaki (veya ilgili ülkenin mevzuatına göre 16 yaşın altındaki) çocuklardan bilerek ve isteyerek hiçbir kişisel veri toplanmamaktadır. Bir ebeveyn veya yasal vasi olarak çocuğunuzun bize bilgi ilettiğini tespit ederseniz, lütfen derhal bizimle iletişime geçiniz; ilgili içerik ivedilikle imha edilecektir.
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
      </main>

      <Footer />
    </div>
  );
}
