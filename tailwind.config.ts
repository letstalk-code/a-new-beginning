import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          700: '#44503B',
          900: '#3B4733',
        },
        olive: {
          700: '#58614B',
        },
        sage: {
          300: '#9FA58F',
        },
        khaki: {
          300: '#9A906E',
        },
        terra: {
          500: '#B07C54',
        },
        sand: {
          100: '#F6F5F1',
          200: '#CCC8B7',
        },
      },
      fontFamily: {
        heading: ['var(--font-sora)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
