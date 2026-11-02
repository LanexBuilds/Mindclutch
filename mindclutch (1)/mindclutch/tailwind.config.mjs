/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,md,ts}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        ink: '#0a0a0a',
        neon: { cyan: '#00f0ff', magenta: '#ff00ff' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 40px -8px rgba(0,240,255,.55)',
        'glow-magenta': '0 0 40px -8px rgba(255,0,255,.5)',
        'glow-both': '0 0 30px -6px rgba(0,240,255,.5), 0 0 50px -10px rgba(255,0,255,.45)',
      },
      keyframes: {
        shift: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-18px)' } },
      },
      animation: { shift: 'shift 6s ease infinite', float: 'float 9s ease-in-out infinite' },
    },
  },
  plugins: [],
};
