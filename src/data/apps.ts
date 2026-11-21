export interface AppItem {
  id: string;
  slug: string;
  name: string;
  packageName: string;
  category: string;
  version: string;
  status: "Taslak" | "Kapalı Test" | "Erken Erişim" | "Yayında";
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
    status: "Yayında",
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
    status: "Yayında",
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
    status: "Yayında",
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
    status: "Yayında",
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
  },
  {
    id: "kpss",
    slug: "kpss-master",
    name: "KPSS Master 2026: Sınav Hazırlık & Soru Bankası",
    packageName: "com.chawzer.kpssmaster",
    category: "Eğitim & Sınav Hazırlık",
    version: "v1.0.0",
    status: "Kapalı Test",
    tagline: "Hedef 90+ Puan. Akıllı soru bankası, 120 soruluk denemeler ve hafıza kartları.",
    description: "KPSS Lisans, Ön Lisans ve Ortaöğretim adayları için 120 soruluk özgün denemeler, aralıklı tekrar hafıza kartları, harita notları ve puan hesaplayıcı.",
    fullDescription: "KPSS Master 2026, Kamu Personeli Seçme Sınavı'na hazırlanan adaylar için tasarlanmış kapsamlı ve modern bir çalışma istasyonudur. ÖSYM formatında 120 soruluk Genel Yetenek - Genel Kültür deneme sınavları, konu bazlı soru testleri, Tarih, Coğrafya ve Vatandaşlık görsel hafıza kartları, interaktif harita çalışma modülü, yanlış yapılan soruları toplayan akıllı Hata Defteri ve Pomodoro odaklanma sayacı ile sınav maratonunda en büyük yardımcınızdır.",
    icon: "/apps/kpss.png",
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
    accentColor: "#0284C7",
    borderColor: "group-hover:border-sky-500/50",
    features: [
      "120 soruluk tam kapsamlı GY-GK deneme simülasyonu",
      "Görsel Tarih, Coğrafya ve Vatandaşlık hafıza kartları",
      "İnteraktif Türkiye Haritası üzerinde coğrafi notlar ve soru çözümü",
      "Otomatik Hata Defteri: Yanlış yaptığınız soruları pekiştirin",
      "ÖSYM katsayılarıyla uyumlu KPSS Lisans, Ön Lisans ve Ortaöğretim puan hesaplama"
    ],
    testersCount: 12,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.chawzer.kpssmaster",
    targetAudience: "KPSS Lisans, Ön Lisans ve Ortaöğretim sınavlarına hazırlanan tüm adaylar",
    privacySummary: "Test sonuçlarınız, harita notlarınız ve çalışma istatistikleriniz yalnızca cihazınızın yerel depolama alanında saklanır. Hiçbir kişisel veri toplanmaz veya harici sunuculara aktarılmaz.",
    permissions: [
      "İnternet Erişimi (android.permission.INTERNET - yazı tipleri ve sistem güncellemeleri için)",
      "Ağ Durumu Kontrolü (android.permission.ACCESS_NETWORK_STATE - bağlantı kontrolü için)"
    ],
    stats: [
      { label: "Özgün Soru", value: "1000+" },
      { label: "Hafıza Kartı", value: "250+" },
      { label: "Veri Güvenliği", value: "%100 Yerel" }
    ]
  },
  {
    id: "yks",
    slug: "yks-2027",
    name: "YKS 2027 Koçum & Soru Bankası",
    packageName: "com.chawzer.yks",
    category: "Eğitim & Sınav Hazırlık",
    version: "v1.0.0",
    status: "Taslak",
    tagline: "Hedef İlk 1000. TYT & AYT soru bankası, akıllı sınav koçu ve hata defteri.",
    description: "YKS 2027 sınavına hazırlanan adaylar için özgün TYT & AYT soruları, aralıklı tekrar kartları, yapay zeka destekli sınav koçu ve offline çalışma desteği.",
    fullDescription: "YKS 2027 Koçum & Soru Bankası, üniversite sınavına hazırlanan lise ve mezun öğrenciler için tasarlanmış yeni nesil dijital hazırlık platformudur. Müfredata %100 uyumlu özgün soru havuzu, offline çalışabilen soru çözümü, hata defteri, akıllı koçluk ve aralıklı tekrar algoritmalarıyla başarıya ulaştırır.",
    icon: "/apps/yks.png",
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    accentColor: "#6366F1",
    borderColor: "group-hover:border-indigo-500/50",
    features: [
      "Özgün 2027 TYT ve AYT soru havuzu ve detaylı çözümler",
      "İnternetsiz (Offline-first) yerel depolama ile soru çözümü",
      "Kişiselleştirilmiş hedef puan ve alan (Sayısal, EA, Sözel) takibi",
      "Akıllı Hata Defteri ve Aralıklı Tekrar (Leitner) sistemi",
      "Pomodoro odaklanma zamanlayıcısı ve çalışma serisi (streak)"
    ],
    testersCount: 15,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.chawzer.yks",
    targetAudience: "YKS 2027 (TYT-AYT) sınavına hazırlanan lise öğrencileri ve mezun adaylar",
    privacySummary: "Çalışma verileriniz, çözdüğünüz sorular ve hata analizleriniz cihazınızda güvenle saklanır. Kişisel veriler asla üçüncü taraflarla paylaşılmaz veya satılmaz.",
    permissions: [
      "Yerel Depolama (SQLite / MMKV - çevrimdışı soru çözümü ve çizimler için)",
      "Bildirim İzni (android.permission.POST_NOTIFICATIONS - günlük çalışma hatırlatıcıları için)"
    ],
    stats: [
      { label: "Hedef Sınav", value: "YKS 2027" },
      { label: "Soru Modülü", value: "TYT / AYT" },
      { label: "Veri Güvenliği", value: "KVKK & GDPR" }
    ]
  },
  {
    id: "vampirkurtadam",
    slug: "vampir-kurtadam",
    name: "Fangfall:Werewolf # Vampir & Kurtadam (Social Deduction)",
    packageName: "com.chawzer.fangfall",
    category: "Oyun & Rol Yapma / Parti",
    version: "v1.2.0",
    status: "Taslak",
    tagline: "Karanlık çökünce gözlerini kapa. Kasabada gizem, rol ve eğlence başlıyor!",
    description: "Tek telefondan yüz yüze oynanan, 3D ahşap taktil tasarımlı, sevimli Pixar tarzı karakterli ve gizli oy kabinli efsanevi Vampir & Kurtadam parti oyunu.",
    fullDescription: "Vampir & Kurtadam, arkadaş grupları ve aileler için geliştirilmiş pass-and-play (elden ele) tarzı gizli rol, strateji ve sosyal dedüksiyon oyunudur. Kurtadamlar, Köylüler, Vampirler, Kahin, Doktor, Avcı, Soytarı, Cadı ve 13'ten fazla rol ile kasabayı savunabilir veya geceleri sinsice avlanabilirsiniz. Gizli oy sandığı, organik 3D ahşap menüleri ve gerçekçi ses efektleriyle (kurt uluması, horoz ötüşü, mahkeme tokmağı) unutulmaz bir rol yapma deneyimi sunar.",
    icon: "/apps/vampir.png",
    gradient: "from-amber-600/20 via-orange-600/10 to-transparent",
    accentColor: "#E5A65E",
    borderColor: "group-hover:border-amber-500/50",
    features: [
      "Tek cihazdan yüz yüze Pass & Play oynanış (Gizlilik Kalkanlı rol devri)",
      "Tamamen gizli oy verme kabini (kimse kimin kime oy verdiğini göremez)",
      "Sevimli 3D Pixar tarzı karakter ve rol sanatı (Kurt, Köylü, Kahin, Doktor vb.)",
      "Gelişmiş Manuel Rol ve Denge Ayarı (Köylü >= 3x Kurt garantisi)",
      "Dahili ses sentezleyici (Kurt uluması, sabah horozu, saat tik-takları, tokmak ve yas melodisi)",
      "Tamamen internetsiz (Offline) çalışabilen, veri toplamayan güvenli altyapı"
    ],
    testersCount: 20,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.chawzer.fangfall",
    targetAudience: "Arkadaş grupları, parti oyunu ve kutu oyunu severler (Tüm Yaş Grupları)",
    privacySummary: "Oyunumuz tamamen cihazınızda yerel olarak çalışır. Hiçbir kişisel veri, ses kaydı, konum veya cihaz kimliği toplanmaz, sunuculara aktarılmaz veya üçüncü taraflarla paylaşılmaz.",
    permissions: [
      "Titreşim İzni (android.permission.VIBRATE - dokunsal geri bildirim için)",
      "Ses Çalma (Dahili ses efektleri ve müzikler için)"
    ],
    stats: [
      { label: "Rol Sayısı", value: "13+ Rol" },
      { label: "Oyuncu Desteği", value: "4 - 20 Kişi" },
      { label: "Veri Gizliliği", value: "%100 Yerel (Offline)" }
    ]
  },
  {
    id: "ags",
    slug: "ags-2027",
    name: "AGS 2027 (Akademi Giriş Sınavı)",
    packageName: "com.chawzer.ags",
    category: "Eğitim & Sınav Hazırlık",
    version: "v1.0.0",
    status: "Kapalı Test",
    tagline: "Milli Eğitim Akademisi Giriş Sınavı'na eksiksiz hazırlık, testler ve hata havuzu.",
    description: "Öğretmen adayları için AGS 2027 sınavına hazırlık: güncel mevzuat, eğitim teorileri, genel yetenek & kültür testleri, akıllı hata havuzu ve Pomodoro sayacı.",
    fullDescription: "AGS 2027 (Akademi Giriş Sınavı), Milli Eğitim Bakanlığı Akademi Giriş Sınavı'na hazırlanan öğretmen adayları için geliştirilmiş kapsamlı mobil çalışma istasyonudur. Güncel sınav konu dağılımları, branş denemeleri, ders özetleri, çözülen yanlış soruları biriktiren Hata Havuzu ve odaklanma araçları içerir.",
    icon: "/apps/ags.png",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    accentColor: "#7C3AED",
    borderColor: "group-hover:border-purple-500/50",
    features: [
      "AGS 2027 müfredatına tam uyumlu konu testleri ve denemeler",
      "Akıllı Hata Havuzu: Yanlış çözülen soruları otomatik biriktirme ve tekrar etme",
      "Yerel depolama (AsyncStorage) ile çevrimdışı çalışma desteği",
      "Pomodoro çalışma sayacı ve sınav geri sayım takibi",
      "Kişiselleştirilmiş net takip grafikleri ve gelişim analitiği"
    ],
    testersCount: 15,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.chawzer.ags",
    targetAudience: "Milli Eğitim Akademisi Giriş Sınavı'na hazırlanan tüm öğretmen adayları",
    privacySummary: "Sınav notlarınız, yanlış soru havuzunuz ve çalışma süreleriniz tamamen cihazınızın yerel depolama alanında (AsyncStorage) saklanır. Harici sunuculara kişisel veri iletilmez.",
    permissions: [
      "Yerel Depolama (AsyncStorage - test kayıtları ve hata havuzu için)",
      "Bildirim İzni (İsteğe bağlı - sınav hatırlatmaları ve Pomodoro uyarıları)",
      "İnternet Erişimi (Google AdMob reklamları ve teknik güncellemeler için)"
    ],
    stats: [
      { label: "Hedef Sınav", value: "AGS 2027" },
      { label: "Özellik", value: "Hata Havuzu" },
      { label: "Veri Güvenliği", value: "KVKK & GDPR" }
    ]
  }
];

export const STUDIO_INFO = {
  name: "CHAWZER",
  turkishMeaning: "Altın Göz (Kürtçe: Çav = Göz, Zêr = Altın)",
  tagline: "Mobil Dünyaya Keskin ve Vizyoner Bir Bakış",
  description: "CHAWZER, Google Play ekosisteminde kullanıcı odaklı, yüksek performanslı ve estetik mobil uygulamalar geliştiren bağımsız bir teknoloji stüdyosudur.",
  developerAccountId: "9194377217062714562",
  email: "chawzerproject@gmail.com",
  googleGroupEmail: "chawzer-test-ekibi@googlegroups.com",
  googleGroupUrl: "https://groups.google.com/g/chawzer-test-ekibi",
  playStoreConsoleUrl: "https://play.google.com/store/apps/developer?id=CHAWZER",
  totalApps: 8,
  location: "Türkiye",
  foundationYear: "2026"
};
