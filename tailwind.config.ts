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
        'wari': {
          'green': '#2D5016',
          'green-light': '#4A7C2E',
          'gold': '#D4AF37',
          'gold-light': '#E8C547',
          'cream': '#F5F1E8',
          'brown': '#5C3D2E',
          'dark': '#1A1A1A',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
