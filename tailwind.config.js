/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "ivory": "#F5F1E8",
        "terracotta": "#C46D5A",
        "sage": "#A8B89A",
        "charcoal": "#1B1B1B",
        "sand": {
          50: "#FBF7EF",
          100: "#F3EBDD",
          200: "#E7D8C0",
          300: "#D7C2A1",
          400: "#C7AD86",
          500: "#B9976E",
          600: "#9E7B57",
          700: "#7D5F44",
          800: "#5E4633",
          900: "#3F2E22",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "luxury": "0.22em",
      },
      boxShadow: {
        "soft": "0 16px 50px rgba(0,0,0,0.14)",
        "glow": "0 0 0 1px rgba(255,255,255,0.18), 0 18px 50px rgba(0,0,0,0.22)",
      },
      keyframes: {
        "float-y": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "grain-shift": {
          "0%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(-2%, -2%, 0)" },
          "100%": { transform: "translate3d(2%, 1%, 0)" },
        },
      },
      animation: {
        "float-y": "float-y 6s ease-in-out infinite",
        "grain-shift": "grain-shift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
