import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, ExternalLink, Mail, Heart, Smartphone } from "lucide-react";
import { APPS_DATA, STUDIO_INFO } from "@/data/apps";

export default function Footer() {
  return (
    <footer className="bg-chawzer-card border-t border-chawzer-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-chawzer-border/60">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl p-0.5 bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-700 shadow-md">
                <div className="w-full h-full bg-chawzer-bg rounded-[10px] flex items-center justify-center">
                  <Image
                    src="/brand/chawzer-eye.png"
                    alt="Chawzer Logo"
                    width={32}
                    height={32}
                    className="w-7 h-7 object-contain"
                  />
                </div>
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-wider">
                  CHAW<span className="text-chawzer-gold">ZER</span>
                </span>
                <span className="text-[10px] text-amber-300 block font-mono">
                  {STUDIO_INFO.turkishMeaning}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {STUDIO_INFO.description}
            </p>

            <div className="text-xs text-gray-400 pt-2 space-y-1">
              <div className="flex items-center gap-1.5">
                <span>Resmi İletişim:</span>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="text-amber-300 hover:underline font-mono font-medium"
                >
                  {STUDIO_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Apps Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-amber-400" />
              Uygulamalar
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {APPS_DATA.map((app) => (
                <li key={app.id}>
                  <Link
                    href={`/#apps`}
                    className="hover:text-amber-300 transition-colors block"
                  >
                    {app.name.split(":")[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Privacy Policies Column (Mandatory for Google Play Console) */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              Gizlilik Politikaları
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link href="/gizlilik/kese" className="hover:text-amber-300 transition-colors block">
                  Kese Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/gizlilik/siberci-ol" className="hover:text-amber-300 transition-colors block">
                  Siberci Ol Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/gizlilik/yds-master" className="hover:text-amber-300 transition-colors block">
                  YDS Master Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/gizlilik/ikimiz" className="hover:text-amber-300 transition-colors block">
                  İkimiz Gizlilik Politikası
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/gizlilik" className="text-amber-400 hover:text-amber-300 font-semibold block">
                  Genel Gizlilik İlkeleri →
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Deployment Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Kurumsal & Yasal
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link href="/kullanim-sartlari" className="hover:text-amber-300 transition-colors block">
                  Kullanım Şartları
                </Link>
              </li>
              <li>
                <Link href="/gizlilik" className="hover:text-amber-300 transition-colors block">
                  KVKK & Çerez Bildirimi
                </Link>
              </li>
              <li>
                <a
                  href={STUDIO_INFO.playStoreConsoleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors inline-flex items-center gap-1.5 text-amber-400"
                >
                  <span>Google Play Profili</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-xl bg-chawzer-surface/60 border border-chawzer-border text-[11px] text-gray-400">
              <span className="text-emerald-400 font-semibold">● Vercel Ready:</span> %100 Vercel üzerinde ücretsiz barındırılmaya uygun statik ve SSR optimizasyonu.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} CHAWZER Studio. Tüm hakları saklıdır.</p>
          <p className="flex items-center gap-1">
            <span>Altın Göz vizyonuyla mobil ekosistem için geliştirildi.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

