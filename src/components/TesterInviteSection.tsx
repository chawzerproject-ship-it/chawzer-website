"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Users, Mail, CheckCircle2, Sparkles, Send, ShieldAlert, Smartphone } from "lucide-react";
import { APPS_DATA, AppItem, STUDIO_INFO } from "@/data/apps";

interface TesterInviteSectionProps {
  selectedAppForBeta?: AppItem | null;
}

export default function TesterInviteSection({ selectedAppForBeta }: TesterInviteSectionProps) {
  const [email, setEmail] = useState("");
  const [selectedAppId, setSelectedAppId] = useState<string>("all");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (selectedAppForBeta) {
      setSelectedAppId(selectedAppForBeta.id);
    }
  }, [selectedAppForBeta]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Fire celebratory golden confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FFC837", "#FFE79A", "#B8860B", "#F59E0B"],
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  return (
    <section id="beta" className="py-24 relative overflow-hidden bg-chawzer-bg">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-chawzer-card/90 to-chawzer-surface/90 border border-amber-500/30 p-8 sm:p-12 shadow-2xl shadow-amber-500/10 backdrop-blur-xl">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Users className="w-4 h-4 text-amber-400" />
              <span>Google Play 20 Testçi Topluluğu</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Kapalı Teste Katılın,{" "}
              <span className="text-gold-gradient">Erken Erişimin</span> Parçası Olun!
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Google Play mağazamızdaki <strong className="text-amber-300">Kese</strong>,{" "}
              <strong className="text-amber-300">Siberci Ol</strong>,{" "}
              <strong className="text-amber-300">YDS Master</strong> ve{" "}
              <strong className="text-amber-300">İkimiz</strong> uygulamalarımızı genel kullanıma
              sunmadan önce 14 günlük kapalı test grubumuza davetlisiniz.
            </p>
          </div>

          {submitted ? (
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 text-center max-w-xl mx-auto space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Harika! Başvurunuz Alındı</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                <strong className="text-amber-300">{email}</strong> adresi kapalı test e-posta listesine eklendi.
                Google Play Console üzerinden test grubuna erişim bağlantınız tanımlandığında bildirim alacaksınız.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setEmail("");
                  }}
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold underline"
                >
                  Farklı bir e-posta ile yeni başvuru yap
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              {/* App selection pills */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-3 text-center sm:text-left">
                  Hangi Uygulamaları Test Etmek İstiyorsunuz?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedAppId("all")}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all border ${
                      selectedAppId === "all"
                        ? "bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-500/20"
                        : "bg-chawzer-surface/80 text-gray-300 border-chawzer-border hover:border-amber-500/40"
                    }`}
                  >
                    Tümü (4 Uygulama)
                  </button>
                  {APPS_DATA.map((app) => (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => setSelectedAppId(app.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all border truncate ${
                        selectedAppId === app.id
                          ? "bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-500/20"
                          : "bg-chawzer-surface/80 text-gray-300 border-chawzer-border hover:border-amber-500/40"
                      }`}
                    >
                      {app.name.split(":")[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Email input & Submit button */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Google Play hesabınıza bağlı Gmail adresiniz..."
                    className="w-full pl-12 pr-4 py-3.5 bg-chawzer-surface border border-chawzer-border focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-all shadow-inner"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black font-bold text-sm rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2 flex-shrink-0 disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Testçi Ol</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Security info notice */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 pt-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>E-postanız yalnızca Google Play Console kapalı test davetiyesi için kullanılır.</span>
              </div>
            </form>
          )}

          {/* Quick FAQ / Developer Console Status */}
          <div className="mt-12 pt-8 border-t border-chawzer-border/60 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-4 rounded-xl bg-chawzer-surface/50 border border-chawzer-border/50">
              <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5" /> 1. Adım: Başvuru
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Play Store hesabınızla kayıt olun. Test grubumuz 20 kişilik minimum kota için güncellenir.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-chawzer-surface/50 border border-chawzer-border/50">
              <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> 2. Adım: Play Store Onayı
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Google Play Kapalı Test bağlantısına tıklayarak test programını kabul edin ve uygulamayı indirin.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-chawzer-surface/50 border border-chawzer-border/50">
              <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> 3. Adım: 14 Günlük Keşif
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Uygulamayı 14 gün boyunca cihazınızda tutarak yeni özellikleri test edin ve geri bildirim sağlayın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
