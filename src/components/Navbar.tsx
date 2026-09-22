"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, Smartphone, ShieldCheck, Users, Menu, X, ExternalLink } from "lucide-react";
import { STUDIO_INFO } from "@/data/apps";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-chawzer-bg/80 backdrop-blur-xl border-b border-chawzer-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-xl p-0.5 bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-700 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300">
              <div className="w-full h-full bg-chawzer-bg rounded-[10px] flex items-center justify-center overflow-hidden">
                <Image
                  src="/brand/chawzer-eye.png"
                  alt="Chawzer Altın Göz Logo"
                  width={40}
                  height={40}
                  className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white">
                  CHAW<span className="text-chawzer-gold">ZER</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/25 uppercase">
                  Studio
                </span>
              </div>
              <p className="text-[11px] text-gray-400 tracking-wide font-medium hidden sm:block">
                Altın Göz • Mobile App Lab
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-3">
            <Link
              href="#apps"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-chawzer-gold transition-colors flex items-center gap-2 rounded-lg hover:bg-white/5"
            >
              <Smartphone className="w-4 h-4 text-amber-400" />
              Uygulamalar
            </Link>
            <Link
              href="#vision"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-chawzer-gold transition-colors flex items-center gap-2 rounded-lg hover:bg-white/5"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              Altın Göz Vizyonu
            </Link>
            <Link
              href="#beta"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-chawzer-gold transition-colors flex items-center gap-2 rounded-lg hover:bg-white/5"
            >
              <Users className="w-4 h-4 text-amber-400" />
              Kapalı Test (Beta)
            </Link>
            <Link
              href="/gizlilik"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-chawzer-gold transition-colors flex items-center gap-2 rounded-lg hover:bg-white/5"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Gizlilik Politikaları
            </Link>
          </div>

          {/* Action Button: Google Play */}
          <div className="hidden md:flex items-center">
            <a
              href={STUDIO_INFO.playStoreConsoleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300"
            >
              <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-lg font-bold flex items-center gap-2">
                <span>Google Play</span>
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
              aria-label="Menüyü aç/kapat"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-chawzer-card border-b border-chawzer-border px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <Link
            href="#apps"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium text-gray-200 hover:bg-chawzer-surface hover:text-chawzer-gold"
          >
            <Smartphone className="w-5 h-5 text-amber-400" />
            Uygulamalar
          </Link>
          <Link
            href="#vision"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium text-gray-200 hover:bg-chawzer-surface hover:text-chawzer-gold"
          >
            <Eye className="w-5 h-5 text-amber-400" />
            Altın Göz Vizyonu
          </Link>
          <Link
            href="#beta"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium text-gray-200 hover:bg-chawzer-surface hover:text-chawzer-gold"
          >
            <Users className="w-5 h-5 text-amber-400" />
            Kapalı Test (Beta)
          </Link>
          <Link
            href="/gizlilik"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium text-gray-200 hover:bg-chawzer-surface hover:text-chawzer-gold"
          >
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            Gizlilik Politikaları
          </Link>
          <div className="pt-3 border-t border-chawzer-border">
            <a
              href={STUDIO_INFO.playStoreConsoleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold shadow-md shadow-amber-500/20"
            >
              <span>Google Play Mağazası</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

