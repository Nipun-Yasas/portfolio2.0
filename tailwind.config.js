const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        header: ["var(--font-space-grotesk)"],
        mono: ["var(--font-dm-mono)"],
      },

      colors: {
        purple: {
          50: "#EFE5FF",
          100: "#E0CCFF",
          200: "#C099FF",
          300: "#A166FF",
          400: "#8133FF",
          500: "#6200FF",
          600: "#4E00CC",
          700: "#3B0099",
          800: "#4E00CC",
          900: "#140033",
          950: "#0E0024",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--text-primary)",
        border: "var(--border)",
      },
      keyframes: {
        "slide-in-top": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-in-top":
          "slide-in-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
    },
  },
  plugins: [daisyui],
};

export default config;
