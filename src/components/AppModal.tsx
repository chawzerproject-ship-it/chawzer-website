"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Check, Shield, Download, ExternalLink, Sparkles, Smartphone, Copy, CheckCheck } from "lucide-react";
import { AppItem } from "@/data/apps";

interface AppModalProps {
  app: AppItem | null;
  onClose: () => void;
  onJoinBeta: (app: AppItem) => void;
}

export default function AppModal({ app, onClose, onJoinBeta }: AppModalProps) {
  const [copied, setCopied] = React.useState(false);

  if (!app) return null;

  const handleCopyPackage = () => {
    navigator.clipboard.writeText(app.packageName);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-chawzer-card border border-chawzer-border rounded-2xl p-6 sm:p-8 shadow-2xl shadow-amber-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-chawzer-border">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-amber-500/40 via-yellow-400/20 to-transparent flex-shrink-0 shadow-lg">
            <Image
              src={app.icon}
              alt={app.name}
              width={96}
              height={96}
              className="w-full h-full object-cover rounded-[14px]"
            />
          </div>

          <div className="space-y-1.5 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/25">
                {app.category}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                {app.status}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/5 text-gray-400">
                {app.version}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight">{app.name}</h3>

            {/* Package Name with Copy button */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-xs font-mono text-gray-400 bg-chawzer-surface px-2.5 py-1 rounded-md border border-chawzer-border flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                {app.packageName}
              </span>
              <button
                onClick={handleCopyPackage}
                className="text-xs text-amber-400 hover:text-amber-300 p-1 rounded hover:bg-amber-400/10 transition-colors flex items-center gap-1"
                title="Paket adını kopyala"
              >
                {copied ? <CheckCheck className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span className="text-[11px]">{copied ? "Kopyalandı" : "Kopyala"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6">
          {/* Tagline & Full Description */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Uygulama Hakkında
            </h4>
            <p className="text-sm font-medium text-amber-100/90 italic mb-2">
              &quot;{app.tagline}&quot;
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              {app.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-3">
              Öne Çıkan Özellikler
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {app.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-chawzer-surface/60 border border-chawzer-border/50 text-xs text-gray-300"
                >
                  <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* App Stats */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-chawzer-surface border border-chawzer-border">
            {app.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-base sm:text-lg font-bold text-amber-300">{stat.value}</div>
                <div className="text-[11px] text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Privacy Note */}
          <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-3">
            <Shield className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-gray-300">
              <span className="font-semibold text-amber-200">Gizlilik & Güvenlik: </span>
              {app.privacySummary}{" "}
              <Link
                href={`/gizlilik/${app.slug}`}
                onClick={onClose}
                className="text-amber-400 underline hover:text-amber-300 font-semibold ml-1 inline-flex items-center gap-1"
              >
                Politikayı Oku <ExternalLink className="w-3 h-3 inline" />
              </Link>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-chawzer-border">
          <button
            onClick={() => {
              onClose();
              onJoinBeta(app);
            }}
            className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-yellow-400 hover:to-amber-500 text-black font-bold text-sm shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Kapalı Teste Katıl (20 Testçi Grubu)</span>
          </button>

          <Link
            href={`/gizlilik/${app.slug}`}
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-5 rounded-xl bg-chawzer-surface hover:bg-chawzer-surface/80 border border-chawzer-border text-gray-200 hover:text-white font-medium text-sm flex items-center justify-center gap-2 transition-all"
          >
            <Shield className="w-4 h-4 text-amber-400" />
            <span>Gizlilik Politikası</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

