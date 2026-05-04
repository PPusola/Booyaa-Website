import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 30px 80px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 36%), radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.15), transparent 28%)',
      },
    },
  },
  plugins: [],
};

export default config;
