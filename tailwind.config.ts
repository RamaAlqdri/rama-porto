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
        base: "#1a1a29",
        accent: "#7562e0",
        text: "#f5f5f5",
        input: "#292c3e"
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"]
      },
      boxShadow: {
        nav: "0 1px 4px rgba(146, 161, 176, 0.15)",
        card: "0px 4px 25px rgba(14, 36, 49, 0.15)",
        button: "0px 10px 36px rgba(0, 0, 0, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
