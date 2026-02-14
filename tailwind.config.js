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
          cyan: '#facc15', // repurposed as neon yellow
          blue: '#a855f7', // repurposed as neon purple
          magenta: '#fb7185', // repurposed as neon red
          purple: '#c084fc',
          green: '#facc15', // route “green” usages to yellow
          red: '#fb7185',
          // Backgrounds
          dark: '#05030a',
          darker: '#020107',
          navy: '#12051f',
        },
      },
      fontFamily: {
        futuristic: ['Orbitron', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
      },
      boxShadow: {
        // Neon glows mapped to the new palette
        'neon-cyan': '0 0 10px #facc15, 0 0 20px #facc15, 0 0 30px #facc15', // yellow
        'neon-magenta': '0 0 10px #fb7185, 0 0 20px #fb7185, 0 0 30px #fb7185', // red
        'neon-blue': '0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7', // purple
        'glow': '0 0 20px rgba(250, 204, 21, 0.5)', // soft yellow glow
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
