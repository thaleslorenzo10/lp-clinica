import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Nova paleta premium
        premium: {
          50: "#f0f5ff",
          100: "#e5eeff",
          200: "#cdddff",
          300: "#a6c1ff",
          400: "#7a9cff",
          500: "#5b7df9",
          600: "#3a56f0",
          700: "#2941d9",
          800: "#1e30ae",
          900: "#192b8c",
          950: "#111a4f",
        },
        navy: {
          50: "#f0f5ff",
          100: "#e0e9fd",
          200: "#c7d7fb",
          300: "#a3bcf8",
          400: "#7a97f2",
          500: "#5b73ea",
          600: "#4353de",
          700: "#3642cc",
          800: "#2f38a6",
          900: "#1e2361",
          950: "#0f1137",
        },
        gold: {
          50: "#fbf7ef",
          100: "#f6ecd8",
          200: "#edd6b0",
          300: "#e4bc7f",
          400: "#daa458",
          500: "#d18e3a",
          600: "#c2732f",
          700: "#a15829",
          800: "#834629",
          900: "#6b3b25",
          950: "#391d12",
        },
        dark: {
          50: "#f6f6f9",
          100: "#ededf2",
          200: "#d6d6e1",
          300: "#b3b3c6",
          400: "#8a8aa6",
          500: "#6d6d8b",
          600: "#565672",
          700: "#45455c",
          800: "#3a3a4d",
          900: "#343442",
          950: "#121218",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "premium-gradient": "linear-gradient(to right, #111a4f, #2941d9, #111a4f)",
        "gold-gradient": "linear-gradient(to right, #d18e3a, #e4bc7f, #d18e3a)",
        "glass-gradient": "linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
