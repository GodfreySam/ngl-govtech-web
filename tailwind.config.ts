import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF1F7",
          100: "#C5CEDF",
          200: "#8B9BBF",
          300: "#5168A0",
          400: "#1E3580",
          500: "#0B1D3E",
          600: "#091832",
          700: "#061227",
          800: "#040C1B",
          900: "#020610",
          dark: "#060F21",
          DEFAULT: "#0B1D3E",
        },
        green: {
          50: "#E6F4F1",
          100: "#C0E4DF",
          200: "#80C8BE",
          300: "#3DAD9D",
          400: "#0D7C6C",
          500: "#0A6358",
          600: "#084B43",
          700: "#05322D",
          800: "#021E1A",
          DEFAULT: "#0D7C6C",
        },
        slate: {
          DEFAULT: "#64748B",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #060F21 0%, #0B1D3E 60%, #0F2859 100%)",
        "gradient-green": "linear-gradient(135deg, #0D7C6C 0%, #084B43 100%)",
        "gradient-hero": "linear-gradient(135deg, #060F21 0%, #0B1D3E 65%, #082D28 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(11, 29, 62, 0.08)",
        "card-hover": "0 8px 40px rgba(11, 29, 62, 0.14)",
        glow: "0 0 40px rgba(13, 124, 108, 0.15)",
      },
      transitionDelay: {
        "75": "75ms",
        "150": "150ms",
        "225": "225ms",
        "300": "300ms",
        "375": "375ms",
        "450": "450ms",
        "500": "500ms",
      },
    },
  },
  plugins: [],
};

export default config;
