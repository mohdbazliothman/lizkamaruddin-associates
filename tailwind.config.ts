import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        navy: "#102033",
        mist: "#f6f8f7",
        line: "#dde4df",
        emerald: "#0d6b57",
        teal: "#164e57",
        gold: "#b59358"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(8, 17, 31, 0.10)",
        soft: "0 14px 40px rgba(8, 17, 31, 0.08)"
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["Poppins", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
