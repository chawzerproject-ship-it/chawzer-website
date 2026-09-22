import type { Metadata } from "next";
import "./globals.css";
import { APPS_DATA, STUDIO_INFO } from "@/data/apps";

export const metadata: Metadata = {
  metadataBase: new URL("https://chawzer.vercel.app"),
  title: {
    default: "CHAWZER • Altın Göz Mobil Uygulama Stüdyosu | Google Play",
    template: "%s | CHAWZER Studio",
  },
  description:
    "CHAWZER (Kürtçe Altın Göz anlamına gelir), kullanıcı odaklı, yüksek güvenlikli ve modern mobil uygulamalar geliştiren bağımsız Android stüdyosu. Kese, Siberci Ol, YDS Master ve İkimiz uygulamalarını keşfedin.",
  keywords: [
    "Chawzer",
    "Altın Göz",
    "Mobil Uygulama",
    "Google Play",
    "Android Geliştirici",
    "Kese Bütçe",
    "Siberci Ol",
    "Siber Güvenlik Eğitimi",
    "YDS Master",
    "YÖKDİL Hazırlık",
    "İkimiz Çift Uygulaması",
    "Kapalı Test",
    "Google Play Console",
  ],
  authors: [{ name: "CHAWZER", url: "https://chawzer.vercel.app" }],
  creator: "CHAWZER Studio",
  publisher: "CHAWZER Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://chawzer.vercel.app",
    title: "CHAWZER • Altın Göz Mobil Uygulama Stüdyosu",
    description:
      "Mobil dünyada keskin bir bakış ve üstün kullanıcı deneyimi. Kese, Siberci Ol, YDS Master ve İkimiz uygulamalarını keşfedin.",
    siteName: "CHAWZER Studio",
    images: [
      {
        url: "/brand/chawzer-eye.png",
        width: 512,
        height: 512,
        alt: "CHAWZER Altın Göz Amblemi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHAWZER • Altın Göz Mobil Uygulama Stüdyosu",
    description: "Mobil dünyada keskin bir bakış ve üstün kullanıcı deneyimi.",
    images: ["/brand/chawzer-eye.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Rich JSON-LD Structured Data Schema for Google SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://chawzer.vercel.app/#organization",
        name: "CHAWZER",
        alternateName: "Altın Göz Mobile Studio",
        url: "https://chawzer.vercel.app",
        logo: "https://chawzer.vercel.app/brand/chawzer-eye.png",
        sameAs: [
          STUDIO_INFO.playStoreConsoleUrl,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: STUDIO_INFO.email,
          contactType: "customer support",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://chawzer.vercel.app/#website",
        url: "https://chawzer.vercel.app",
        name: "CHAWZER Studio",
        publisher: {
          "@id": "https://chawzer.vercel.app/#organization",
        },
        inLanguage: "tr-TR",
      },
      ...APPS_DATA.map((app) => ({
        "@type": "SoftwareApplication",
        name: app.name,
        operatingSystem: "ANDROID",
        applicationCategory: app.category,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "TRY",
        },
        description: app.description,
        softwareVersion: app.version,
        publisher: {
          "@id": "https://chawzer.vercel.app/#organization",
        },
      })),
    ],
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-chawzer-bg text-gray-100 antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
