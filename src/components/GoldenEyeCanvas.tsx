"use client";

import React, { useEffect, useRef, useState } from "react";

export default function GoldenEyeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Golden particles
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedY: -(Math.random() * 0.4 + 0.1),
      speedX: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      pulse: Math.random() * Math.PI,
    }));

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle ambient glow in center
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        20,
        width / 2,
        height / 2,
        width / 1.8
      );
      gradient.addColorStop(0, "rgba(255, 200, 55, 0.12)");
      gradient.addColorStop(0.5, "rgba(255, 179, 0, 0.04)");
      gradient.addColorStop(1, "rgba(6, 7, 9, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render floating gold sparks
      angle += 0.015;
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulse += 0.03;

        // Reset if offscreen
        if (p.y < 0) {
          p.y = height + 5;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${currentAlpha})`;
        ctx.shadowColor = "#FFC837";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // -10 to +10px
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center w-full max-w-[420px] aspect-square mx-auto select-none"
    >
      {/* Background canvas for golden stars/sparks */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none rounded-full"
      />

      {/* Outer ambient glow rings */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-amber-500/20 via-yellow-400/10 to-transparent blur-2xl animate-pulse-slow" />
      <div className="absolute inset-10 rounded-full border border-amber-500/15 animate-spin [animation-duration:40s]" />
      <div className="absolute inset-16 rounded-full border border-dashed border-amber-400/20 animate-spin [animation-duration:25s] [animation-direction:reverse]" />

      {/* Main SVG Golden Eye (Altın Göz) Symbol */}
      <div
        className="relative z-10 transition-transform duration-300 ease-out filter drop-shadow-[0_0_35px_rgba(255,200,55,0.45)]"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      >
        <svg
          viewBox="0 0 240 160"
          className="w-64 sm:w-80 h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Outer Eye Gradients */}
            <linearGradient id="eyeOutlineGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="45%" stopColor="#FFC837" />
              <stop offset="80%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>

            <linearGradient id="irisGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="30%" stopColor="#FBBF24" />
              <stop offset="70%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#451A03" />
            </linearGradient>

            <radialGradient id="pupilRadial" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1A1810" />
              <stop offset="70%" stopColor="#08090C" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>

            <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFE066" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FFB300" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFB300" stopOpacity="0" />
            </radialGradient>

            <filter id="goldGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Eye Outer Contour (Upper & Lower Eyelids) */}
          <path
            d="M 20 80 Q 120 10 220 80 Q 120 150 20 80 Z"
            stroke="url(#eyeOutlineGold)"
            strokeWidth="3.5"
            fill="rgba(12, 14, 20, 0.85)"
            filter="url(#goldGlowFilter)"
          />

          {/* Decorative tech lashes / orbital arches */}
          <path
            d="M 40 80 Q 120 28 200 80"
            stroke="url(#eyeOutlineGold)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          <path
            d="M 40 80 Q 120 132 200 80"
            stroke="url(#eyeOutlineGold)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            opacity="0.6"
          />

          {/* Outer Iris Ring */}
          <circle
            cx="120"
            cy="80"
            r="44"
            stroke="url(#eyeOutlineGold)"
            strokeWidth="2"
            fill="url(#innerGlow)"
          />

          {/* Golden Iris Body with Tech Rays */}
          <circle
            cx={120 + mousePos.x * 0.4}
            cy={80 + mousePos.y * 0.4}
            r="32"
            fill="url(#irisGold)"
            stroke="#FFEAA7"
            strokeWidth="1.5"
          />

          {/* Pupil */}
          <circle
            cx={120 + mousePos.x * 0.6}
            cy={80 + mousePos.y * 0.6}
            r="16"
            fill="url(#pupilRadial)"
            stroke="#FFC837"
            strokeWidth="1"
          />

          {/* Golden Central Core / Vision Light */}
          <circle
            cx={120 + mousePos.x * 0.6}
            cy={80 + mousePos.y * 0.6}
            r="5"
            fill="#FFF9DB"
          />

          {/* Pupil Light Glint / Reflection */}
          <ellipse
            cx={115 + mousePos.x * 0.5}
            cy={75 + mousePos.y * 0.5}
            rx="4"
            ry="2.5"
            transform={`rotate(-30, ${115 + mousePos.x * 0.5}, ${75 + mousePos.y * 0.5})`}
            fill="#FFFFFF"
            opacity="0.85"
          />

          {/* Left & Right Temple Tech Accents */}
          <line x1="8" y1="80" x2="20" y2="80" stroke="#FFC837" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="8" cy="80" r="2" fill="#FFEAA7" />

          <line x1="220" y1="80" x2="232" y2="80" stroke="#FFC837" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="232" cy="80" r="2" fill="#FFEAA7" />
        </svg>
      </div>

      {/* Floating Status Tag */}
      <div className="absolute -bottom-2 sm:bottom-2 px-4 py-1.5 rounded-full bg-chawzer-surface/90 border border-amber-500/30 backdrop-blur-md flex items-center gap-2 shadow-lg shadow-black/50">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-xs font-medium text-amber-200 tracking-wide uppercase">
          Altın Göz • Chawzer Studio
        </span>
      </div>
    </div>
  );
}

