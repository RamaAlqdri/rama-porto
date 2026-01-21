import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "586px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1536px"
    },
    extend: {
      colors: {
        base: "#0b0b12",
        accent: "#8D51FF",
        accentPurple: "#C02AF1",
        accentPink: "#FF7DDA",
        text: "#f6f2ff",
        input: "#1a1326"
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"]
      },
      boxShadow: {
        nav: "0 12px 30px rgba(11, 6, 20, 0.55)",
        card: "0 20px 45px rgba(5, 2, 14, 0.55)",
        button: "0 18px 38px rgba(141, 81, 255, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
