/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk palette tuned to purple / yellow / red
        cyber: {
          // Primary neon accents
          cyan: 'var(--cyber-cyan)', // repurposed as neon yellow
          blue: 'var(--cyber-blue)', // repurposed as neon purple
          magenta: 'var(--cyber-magenta)', // repurposed as neon red
          purple: 'var(--cyber-purple)',
          green: 'var(--cyber-green)', // route “green” usages to yellow
          red: 'var(--cyber-red)',
          // Backgrounds
          dark: 'var(--cyber-dark)',
          darker: 'var(--cyber-darker)',
          navy: 'var(--cyber-navy)',
        },
      },
      fontFamily: {
        futuristic: ['Orbitron', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 10px var(--cyber-cyan), 0 0 20px var(--cyber-cyan), 0 0 30px var(--cyber-cyan)',
        'neon-magenta': '0 0 10px var(--cyber-magenta), 0 0 20px var(--cyber-magenta), 0 0 30px var(--cyber-magenta)',
        'neon-blue': '0 0 10px var(--cyber-blue), 0 0 20px var(--cyber-blue), 0 0 30px var(--cyber-blue)',
        'glow': '0 0 20px color-mix(in srgb, var(--cyber-cyan) 50%, transparent)',
      },
      animation: {
        'glitch': 'glitch 0.3s infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
