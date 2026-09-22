# 👁️ CHAWZER • Altın Göz Mobil Uygulama Stüdyosu

> **"Chawzer"**,  **""** (Eye= Göz, Gol = Altın) anlamına gelmektedir.  
> Bu web sitesi, Google Play ekosisteminde geliştirdiğiniz mobil uygulamalarınızı vitrine çıkaran, Google Play kapalı test (20 testçi) sürecini destekleyen ve **her uygulama için Play Store zorunlu Gizlilik Politikalarını** barındıran süper dinamik bir platformdur.

---

## 📱 Google Play Portföyündeki Uygulamalar

| Uygulama | Paket Adı (Package Name) | Kategori | Durum | Gizlilik Politikası URL |
| :--- | :--- | :--- | :--- | :--- |
| **Kese** | `com.chawzer.kese` | Finans & Bütçe | Kapalı Test | `/gizlilik/kese` |
| **Siberci Ol** | `com.chawzer.cyber` | Siber Güvenlik & Eğitim | Kapalı Test | `/gizlilik/siberci-ol` |
| **YDS Master** | `com.chawzer.ydsmaster` | YDS & YÖKDİL Sınav | Kapalı Test | `/gizlilik/yds-master` |
| **İkimiz** | `com.chawzer.ikimiz` | Yaşam Tarzı & Çiftler | Kapalı Test | `/gizlilik/ikimiz` |

---

## ⚡ Özellikler

- 🌟 **Altın Göz (Golden Eye) Teması:** Fütüristik siber-altın ve obsidian siyahı renk paleti, interaktif göz takip animasyonu ve altın parçacık efektleri.
- 🛡️ **Play Store Onayı İçin Gizlilik Politikaları:** Google Play Store'un zorunlu kıldığı veri güvenliği, izinler ve KVKK/GDPR maddeleri her uygulama için ayrı URL olarak hazır.
- 🧪 **20 Testçi Kapalı Test Formu:** Google Play'in 14 günlük 20 testçi şartını tamamlamak için kullanıcılardan beta test e-postaları toplayan interaktif form.
- 🚀 **100/100 SEO & Google Zengin Sonuçlar:**
  - Next.js App Router & Metadata API
  - Otomatik dinamik `sitemap.xml` ve `robots.txt`
  - `SoftwareApplication` ve `Organization` JSON-LD Yapılandırılmış Veri Şeması
  - OpenGraph ve Twitter Cards desteği
- 💎 **Responsive & Ultra Hızlı:** Mobil cihazlar, tabletler ve masaüstü için kusursuz uyum.

---

## 💻 Bilgisayarınızda Çalıştırma (Lokal Test)

```bash
# Bağımlılıkları yükleyin (zaten kurulu)
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızdan `http://localhost:3000` adresine giderek siteyi anında canlı görebilirsiniz.

---

## 🚀 Vercel'de %100 ÜCRETSİZ Yayınlama Rehberi

Vercel, Next.js projelerini **ömür boyu ücretsiz (Hobby Plan)** olarak barındırır. Alan adınız olmasa bile size anında ücretsiz `chawzer.vercel.app` (veya belirleyeceğiniz bir isim) adresi verir.

### Yöntem 1: GitHub ile Yayınlama (En Çok Tavsiye Edilen)

1. **GitHub'a Yükleyin:**
   Proje klasörünüzde terminali açın:
   ```bash
   git init
   git add .
   git commit -m "CHAWZER web sitesi ilk sürüm"
   ```
   GitHub'da `chawzer-website` adında yeni bir depo (repository) açın ve kodlarınızı oraya push edin.

2. **Vercel'e Bağlayın:**
   - [vercel.com](https://vercel.com) adresine gidin ve GitHub hesabınızla **ücretsiz kayıt olun**.
   - **"Add New Project"** (Yeni Proje Ekle) butonuna basın.
   - GitHub'daki `chawzer-website` deponuzu seçip **"Import"** deyin.
   - Hiçbir ayarı değiştirmeden doğrudan **"Deploy"** butonuna tıklayın!
   - Yaklaşık 45 saniye içinde siteniz dünya çapında ücretsiz olarak yayına girecektir. 🎉

### Yöntem 2: Terminalden Tek Komutla Yayınlama (Vercel CLI)

1. Proje klasöründeyken terminalde şu komutu çalıştırın:
   ```bash
   npx vercel
   ```
2. Terminaldeki yönlendirmeleri takip edin (GitHub veya e-posta ile giriş yapın).
3. "Set up and deploy?" sorusuna `Y` (Evet) deyin.
4. Birkaç saniye içinde Vercel size canlı site linkinizi verecektir.

---

## 📋 Google Play Console'a Gizlilik Linklerini Ekleme

Siteniz Vercel'de yayınlandıktan sonra (örneğin `https://chawzer.vercel.app`):
1. **Google Play Console**'a giriş yapın.
2. Uygulamanızı seçin (Örn: **Kese**).
3. Sol menüden en alttaki **Politika ve programlar > Uygulama içeriği** (App Content) bölümüne gidin.
4. **Gizlilik Politikası (Privacy Policy)** alanına:
   - Kese için: `https://chawzer.vercel.app/gizlilik/kese`
   - Siberci Ol için: `https://chawzer.vercel.app/gizlilik/siberci-ol`
   - YDS Master için: `https://chawzer.vercel.app/gizlilik/yds-master`
   - İkimiz için: `https://chawzer.vercel.app/gizlilik/ikimiz`
   adreslerini yapıştırıp **Kaydet** butonuna basın.

Bu sayede Google inceleme ekibi doğrudan Gizlilik Politikanızı onaylayacak ve kapalı test süreciniz hızla tamamlanacaktır.

