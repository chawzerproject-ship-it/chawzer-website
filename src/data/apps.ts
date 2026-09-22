export interface AppItem {
  id: string;
  slug: string;
  name: string;
  packageName: string;
  category: string;
  version: string;
  status: "Kapalı Test" | "Erken Erişim" | "Yayında";
  tagline: string;
  description: string;
  fullDescription: string;
  icon: string;
  gradient: string;
  accentColor: string;
  borderColor: string;
  features: string[];
  testersCount: number;
  playStoreUrl: string;
  targetAudience: string;
  privacySummary: string;
  permissions: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

export const APPS_DATA: AppItem[] = [
  {
    id: "kese",
    slug: "kese",
    name: "Kese: Akıllı Bütçe & Cüzdan",
    packageName: "com.chawzer.kese",
    category: "Finans & Üretkenlik",
    version: "v1.0.4",
    status: "Kapalı Test",
    tagline: "Harcamalarını kontrol altına al, birikimlerini altın gibi büyüt.",
    description: "Kişisel bütçenizi, nakit akışınızı ve birikim hedeflerinizi zahmetsizce yönetebileceğiniz modern, şık ve güvenli finans asistanı.",
    fullDescription: "Kese, modern hayatın getirdiği karmaşık gelir-gider dengesini en sade ve estetik biçimde kontrol etmenizi sağlar. Reklamsız akıcı arayüzü, otomatik kategori analizleri ve offline çalışma desteği sayesinde finansal özgürlüğünüze giden yolda en güvenilir yardımcınızdır.",
    icon: "/apps/kese.png",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    accentColor: "#F59E0B",
    borderColor: "group-hover:border-amber-500/50",
    features: [
      "Tek dokunuşla gelir ve gider kaydı",
      "Kategori bazlı akıllı harcama dağılım grafikleri",
      "Özelleştirilebilir aylık ve haftalık bütçe limitleri",
      "İnternetsiz (Offline) tam gizlilikle yerel veri saklama",
      "Tasarruf hedefleri ve birikim kumbarası modülü"
    ],
    testersCount: 10,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.chawzer.kese",
    targetAudience: "Bütçesini akıllıca yönetmek ve tasarruf yapmak isteyen herkes",
    privacySummary: "Finansal verileriniz asla sunuculara aktarılmaz; yalnızca cihazınızda güvenli bir şekilde yerel olarak saklanır.",
    permissions: ["Cihaz depolama (isteğe bağlı yedekleme için)"],
    stats: [
      { label: "Aktif Testçi", value: "10+" },
      { label: "Veri Güvenliği", value: "%100 Yerel" },
      { label: "Platform", value: "Android 8.0+" }
    ]
  },
  {
    id: "cyber",
    slug: "siberci-ol",
    name: "Siberci Ol: Siber Güvenlik Rehberi",
    packageName: "com.chawzer.cyber",
    category: "Eğitim & Teknoloji",
    version: "v1.1.2",
    status: "Kapalı Test",
    tagline: "Siber dünyanın savunucusu ol. Sıfırdan uzmanlığa etik hacking.",
    description: "Siber güvenlik temelleri, ağ protokolleri, sızma testleri ve etik hacking dünyasına dair interaktif rehber ve pratik bilgi kaynağı.",
    fullDescription: "Siberci Ol, siber güvenlik alanında kariyer yapmak veya dijital dünyada kendini ve sistemlerini korumak isteyenler için hazırlanmış kapsamlı bir eğitim platformudur. Kriptografi, web zafiyetleri, Linux komutları ve savunma stratejilerini pratik örneklerle öğretir.",
    icon: "/apps/cyber.png",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "#10B981",
    borderColor: "group-hover:border-emerald-500/50",
    features: [
      "Adım adım siber güvenlik & etik hacking yol haritaları",
      "İnteraktif siber testler ve bilgi pekiştirme soruları",
      "Sık kullanılan araçlar ve terminal komut rehberleri",
      "Web güvenliği, OWASP Top 10 ve ağ protokolleri dersleri",
      "Güncel siber güvenlik terimleri sözlüğü"
    ],
    testersCount: 5,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.chawzer.cyber",
    targetAudience: "Yazılımcılar, öğrenciler ve siber güvenliğe ilgi duyan teknoloji meraklıları",
    privacySummary: "Eğitim amaçlı kullanım odaklıdır. Kişisel veri toplamaz, takip çerezleri barındırmaz.",
    permissions: ["İnternet erişimi (güncel içerikler ve dersler için)"],
    stats: [
      { label: "Ders Modülü", value: "25+" },
      { label: "Soru Bankası", value: "300+" },
      { label: "Seviye", value: "Başlangıç - İleri" }
    ]
  },
  {
    id: "ydsmaster",
    slug: "yds-master",
    name: "YDS Master: YDS & YÖKDİL",
    packageName: "com.chawzer.ydsmaster",
    category: "Eğitim & Sınav Hazırlık",
    version: "v1.0.8",
    status: "Kapalı Test",
    tagline: "Hedef puana giden en hızlı yol. Akıllı kelime ve soru sistemi.",
    description: "YDS, YÖKDİL ve YDT sınavlarına hazırlananlar için aralıklı tekrar (spaced repetition) tekniğiyle akademik kelime ve soru çözümü.",
    fullDescription: "YDS Master, akademik yabancı dil sınavlarında en yüksek puanı almanız için geliştirilmiş odaklanmış bir sınav koçudur. Çıkmış sınav kelimeleri, edat kalıpları (phrasal verbs), bağlaçlar ve sınav stratejilerini bilimsel hafıza teknikleriyle zihninize kazır.",
    icon: "/apps/ydsmaster.png",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentColor: "#3B82F6",
    borderColor: "group-hover:border-blue-500/50",
    features: [
      "Aralıklı Tekrar (Spaced Repetition) algoritmik kelime kartları",
      "YDS & YÖKDİL formatında mini denemeler ve çıkmış soru tarzları",
      "Kelime telaffuzları, Türkçe karşılıkları ve örnek cümleler",
      "Kişiselleştirilmiş günlük hedef ve başarı istatistikleri",
      "Gramer püf noktaları ve bağlaç şablonları"
    ],
    testersCount: 8,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.chawzer.ydsmaster",
    targetAudience: "Akademik kariyer hedefleyenler, üniversite öğrencileri ve dil sınavlarına hazırlananlar",
    privacySummary: "Kullanıcı performansı yalnızca cihazda saklanır, üçüncü partilerle paylaşılmaz.",
    permissions: ["Ses oynatma (kelime telaffuzları için)"],
    stats: [
      { label: "Akademik Kelime", value: "2500+" },
      { label: "Soru Sayısı", value: "500+" },
      { label: "Algoritma", value: "Leitner Modeli" }
    ]
  },
  {
    id: "ikimiz",
    slug: "ikimiz",
    name: "İkimiz: Çiftler İçin Özel Alan",
    packageName: "com.chawzer.ikimiz",
    category: "Yaşam Tarzı & Sosyal",
    version: "v1.0.3",
    status: "Kapalı Test",
    tagline: "Birlikte geçen her saniyeyi ölümsüzleştirin. Sadece ikinize özel.",
    description: "İlişkinizin en güzel anlarını, yıldönümlerini, özel fotoğraflarını ve randevu planlarını saklayabileceğiniz şifreli, romantik ortak alan.",
    fullDescription: "İkimiz, sevgiliniz veya eşinizle aranızdaki bağı güçlendirmek ve ortak hatıralarınızı güvenle saklamak için tasarlandı. Canlı ilişki günü sayacı, ortak yapılacaklar listesi, özel anı defteri ve sevgi notları ile ilişkinizi her zaman taze tutar.",
    icon: "/apps/ikimiz.png",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    accentColor: "#F43F5E",
    borderColor: "group-hover:border-rose-500/50",
    features: [
      "Hassas gün, saat ve saniye sayan ilişki zamanlayıcısı",
      "Özel anı fotoğrafları ve tarihli hatıra günlüğü",
      "Çiftlere özel ortak randevu fikirleri ve yapılacaklar listesi",
      "Biyometrik kilit veya PIN ile yüksek gizlilik koruması",
      "Özel bildirimler ve yıldönümü hatırlatıcıları"
    ],
    testersCount: 10,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.chawzer.ikimiz",
    targetAudience: "İlişkilerini belgelemek ve anılarını güvenle saklamak isteyen tüm çiftler",
    privacySummary: "Fotoğraflarınız ve notlarınız en yüksek gizlilik standartlarında korunur; üçüncü kişilerin erişimi imkansızdır.",
    permissions: ["Galeri erişimi (anı fotoğrafları eklemek için)", "Bildirimler (özel gün hatırlatıcıları)"],
    stats: [
      { label: "Aktif Çift", value: "10+" },
      { label: "Gizlilik", value: "Biyometrik Kilit" },
      { label: "Anı Kapasitesi", value: "Sınırsız" }
    ]
  }
];

export const STUDIO_INFO = {
  name: "CHAWZER",
  turkishMeaning: "Altın Göz (Kürtçe: Çav = Göz, Zêr = Altın)",
  tagline: "Mobil Dünyaya Keskin ve Vizyoner Bir Bakış",
  description: "CHAWZER, Google Play ekosisteminde kullanıcı odaklı, yüksek performanslı ve estetik mobil uygulamalar geliştiren bağımsız bir teknoloji stüdyosudur.",
  developerAccountId: "9194377217062714562",
  email: "contact@chawzer.dev",
  playStoreConsoleUrl: "https://play.google.com/store/apps/developer?id=CHAWZER",
  totalApps: 4,
  location: "Türkiye",
  foundationYear: "2026"
};
