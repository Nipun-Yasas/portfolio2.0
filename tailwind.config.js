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
        backgroundSecondary: "var(--background-secondary)",
        foreground: "var(--foreground)",
        primary: "var(--text-primary)",
        textPrimary: "var(--text-primary)",
        textLoop: "var(--text-loop)",
        hoverPrimary: "var(--hover-primary)",
        borderPrimary: "var(--border-primary)",
        border: "var(--border)",
      },
      keyframes: {
        "slide-in-top": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pathTriangle: {
          "33%": { strokeDashoffset: "74" },
          "66%": { strokeDashoffset: "147" },
          "100%": { strokeDashoffset: "221" },
        },
        dotTriangle: {
          "33%": { transform: "translate(0, 0)" },
          "66%": { transform: "translate(10px, -18px)" },
          "100%": { transform: "translate(-10px, -18px)" },
        },
        pathRect: {
          "25%": { strokeDashoffset: "64" },
          "50%": { strokeDashoffset: "128" },
          "75%": { strokeDashoffset: "192" },
          "100%": { strokeDashoffset: "256" },
        },
        dotRect: {
          "25%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(18px, -18px)" },
          "75%": { transform: "translate(0, -36px)" },
          "100%": { transform: "translate(-18px, -18px)" },
        },
        pathCircle: {
          "25%": { strokeDashoffset: "125" },
          "50%": { strokeDashoffset: "175" },
          "75%": { strokeDashoffset: "225" },
          "100%": { strokeDashoffset: "275" },
        },
      },
      animation: {
        "slide-in-top":
          "slide-in-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "dot-rect": "dotRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite",
        "path-rect": "pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite",
        "path-triangle": "pathTriangle 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite",
        "dot-triangle": "dotTriangle 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite",
        "path-circle": "pathCircle 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite",
      },
    },
  },
  plugins: [daisyui],
};

export default config;
