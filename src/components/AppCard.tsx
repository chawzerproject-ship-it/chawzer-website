"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Copy, CheckCheck, Shield, ChevronRight, Sparkles, Smartphone, Play } from "lucide-react";
import { AppItem } from "@/data/apps";

interface AppCardProps {
  app: AppItem;
  onOpenDetails: (app: AppItem) => void;
  onJoinBeta: (app: AppItem) => void;
}

export default function AppCard({ app, onOpenDetails, onJoinBeta }: AppCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyPackage = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(app.packageName);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={() => onOpenDetails(app)}
      className="group relative flex flex-col justify-between rounded-2xl bg-chawzer-card/90 border border-chawzer-border/80 hover:border-amber-500/50 p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer overflow-hidden backdrop-blur-sm"
    >
      {/* Top Ambient Glow on Card Hover */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-500 pointer-events-none" />

      {/* Card Header */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-5">
          {/* App Icon */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-amber-500/40 via-yellow-400/20 to-transparent shadow-lg shadow-black/40 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
            <Image
              src={app.icon}
              alt={app.name}
              width={80}
              height={80}
              className="w-full h-full object-cover rounded-[14px]"
            />
          </div>

          {/* Badges */}
          <div className="flex flex-col items-end gap-1.5">
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              {app.status}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5">
              {app.version}
            </span>
          </div>
        </div>

        {/* Category & Title */}
        <div className="space-y-1.5 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">
            {app.category}
          </span>
          <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors tracking-tight line-clamp-1">
            {app.name}
          </h3>
        </div>

        {/* Package Name with Copy Button */}
        <div
          onClick={handleCopyPackage}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-chawzer-surface/80 border border-chawzer-border hover:border-amber-500/40 text-gray-400 hover:text-amber-300 text-xs font-mono mb-4 transition-all"
          title="Paket adını kopyala"
        >
          <Smartphone className="w-3.5 h-3.5 text-amber-400" />
          <span>{app.packageName}</span>
          {copied ? (
            <CheckCheck className="w-3.5 h-3.5 text-emerald-400 ml-1" />
          ) : (
            <Copy className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:opacity-100" />
          )}
        </div>

        {/* Tagline */}
        <p className="text-sm font-medium text-amber-100/80 italic mb-2 line-clamp-2">
          &quot;{app.tagline}&quot;
        </p>

        {/* Short Description */}
        <p className="text-xs text-gray-400 leading-relaxed mb-5 line-clamp-3">
          {app.description}
        </p>

        {/* Key Features Chips */}
        <div className="space-y-2 mb-6">
          {app.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer / Actions */}
      <div className="pt-4 border-t border-chawzer-border/60 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(app);
          }}
          className="text-xs font-semibold text-amber-300 hover:text-amber-200 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          <span>İncele</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          <Link
            href={`/gizlilik/${app.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-lg bg-chawzer-surface hover:bg-white/10 text-gray-400 hover:text-amber-300 transition-colors border border-chawzer-border"
            title="Gizlilik Politikası (Play Store Uyumlu)"
          >
            <Shield className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onJoinBeta(app);
            }}
            className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 border border-amber-500/30 text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <Play className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>Testçi Ol</span>
          </button>
        </div>
      </div>
    </div>
  );
}

