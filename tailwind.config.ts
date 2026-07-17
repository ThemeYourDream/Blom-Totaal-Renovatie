import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#D32F2F',
        'brand-dark': '#2C3E50',
        'brand-light': '#FAF5F3',
        'brand-gray': '#F5F5F5',
        'brand-gray-dark': '#9E9E9E',
      },
      fontFamily: {
        'sans': ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        'heading': ['var(--font-barlow)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'safe': 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
}
export default config
