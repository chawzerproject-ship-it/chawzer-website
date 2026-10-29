import type { Metadata } from "next";
import "./globals.css";
import { APPS_DATA, STUDIO_INFO } from "@/data/apps";

const siteUrl = "https://chawzer.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CHAWZER | Mobil Uygulama Stüdyosu",
    template: "%s | CHAWZER",
  },
  description:
    "CHAWZER; KPSS Master sınav hazırlık, Kese bütçe, Siberci Ol siber güvenlik, YDS Master ve İkimiz çift uygulamalarını geliştiren bağımsız bir mobil uygulama stüdyosudur.",
  applicationName: "CHAWZER",
  category: "technology",
  keywords: [
    "CHAWZER", "Chawzer mobil uygulamalar", "Android uygulama geliştirici",
    "KPSS Master 2026", "KPSS soru bankası", "Kese bütçe uygulaması", "Siberci Ol", "YDS Master", "İkimiz uygulaması",
  ],
  authors: [{ name: "CHAWZER", url: siteUrl }],
  creator: "CHAWZER",
  publisher: "CHAWZER",
  alternates: { canonical: "/" },
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
    url: siteUrl,
    title: "CHAWZER | Mobil Uygulama Stüdyosu",
    description:
      "CHAWZER tarafından geliştirilen Android uygulamalarını keşfedin: KPSS Master 2026, Kese, Siberci Ol, YDS Master ve İkimiz.",
    siteName: "CHAWZER",
    images: [{ url: "/brand/chawzer-eye.png", width: 512, height: 512, alt: "CHAWZER Altın Göz logosu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHAWZER | Mobil Uygulama Stüdyosu",
    description: "CHAWZER tarafından geliştirilen Android uygulamalarını keşfedin.",
    images: ["/brand/chawzer-eye.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "CHAWZER",
        alternateName: "CHAWZER Mobil Uygulama Stüdyosu",
        url: siteUrl,
        logo: `${siteUrl}/brand/chawzer-eye.png`,
        email: STUDIO_INFO.email,
        sameAs: [STUDIO_INFO.playStoreConsoleUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "CHAWZER",
        description: metadata.description,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "tr-TR",
      },
      ...APPS_DATA.map((app) => ({
        "@type": "SoftwareApplication",
        name: app.name,
        operatingSystem: "Android",
        applicationCategory: app.category,
        description: app.description,
        softwareVersion: app.version,
        url: app.playStoreUrl,
        publisher: { "@id": `${siteUrl}/#organization` },
      })),
    ],
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="bg-chawzer-bg text-gray-100 antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
