// /home/ubuntu/app/civilworks_pro/tailwind.config.js
module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF7ED", // orange-50 - Côte d'Ivoire inspired warm orange
          100: "#FFEDD5", // orange-100
          500: "#F97316", // orange-500
          600: "#EA580C", // orange-600
          700: "#C2410C", // orange-700
          800: "#9A3412", // orange-800 - Deep professional orange
          900: "#7C2D12", // orange-900
          DEFAULT: "#EA580C", // orange-600 - Main brand color
        },
        secondary: {
          50: "#F0FDF4", // green-50 - Côte d'Ivoire green influence
          100: "#DCFCE7", // green-100
          200: "#BBF7D0", // green-200
          300: "#86EFAC", // green-300
          400: "#4ADE80", // green-400
          500: "#22C55E", // green-500 - Professional green
          600: "#16A34A", // green-600
          700: "#15803D", // green-700
          800: "#166534", // green-800
          DEFAULT: "#16A34A", // green-600
        },
        accent: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500 - Warm golden accent
          600: "#D97706", // amber-600
          DEFAULT: "#F59E0B", // amber-500
        },
        background: "#FEFEFE", // Off-white with warmth
        surface: "#FFFFFF", // Pure white
        text: {
          primary: "#1C1917", // stone-900 - Rich warm charcoal
          secondary: "#78716C", // stone-500 - Warm medium gray
        },
        success: {
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          500: "#22C55E", // green-500 - Ivorian green
          DEFAULT: "#22C55E", // green-500
        },
        warning: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          DEFAULT: "#F59E0B", // amber-500
        },
        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          DEFAULT: "#DC2626", // red-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 2vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 4vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 5vw, 2rem)',
        'fluid-3xl': 'clamp(2rem, 6vw, 3rem)',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevated': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'floating': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      borderColor: {
        'subtle': 'rgba(120, 113, 108, 0.2)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '400ms',
        'slow': '600ms',
      },
      transitionTimingFunction: {
        'micro': 'ease-out',
        'smooth': 'ease-out',
        'reveal': 'ease-in-out',
      },
      animation: {
        'loading': 'loading 1.5s infinite',
        'fade-in': 'fadeIn 600ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
      },
      keyframes: {
        loading: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}