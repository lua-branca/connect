import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5A5A',
          light: '#5BBCB6',
          lighter: '#A8D5D0',
        },
        accent: '#F6E96B',
      },
    },
  },
  plugins: [],
} satisfies Config