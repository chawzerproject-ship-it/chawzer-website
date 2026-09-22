import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        chawzer: {
          bg: "#060709",
          card: "#0d0f15",
          surface: "#131722",
          border: "#1f2637",
          gold: {
            DEFAULT: "#FFC837",
            light: "#FFE79A",
            dark: "#B8860B",
            glow: "#FFB300",
            amber: "#F59E0B",
          }
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FFE79A 0%, #FFC837 50%, #B8860B 100%)",
        "gold-glow": "radial-gradient(circle, rgba(255, 200, 55, 0.15) 0%, rgba(6, 7, 9, 0) 70%)",
        "dark-radial": "radial-gradient(circle at top, rgba(255, 200, 55, 0.08) 0%, rgba(6, 7, 9, 1) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
