# 🔮 Cyberpunk Futuristic Portfolio

A production-ready personal portfolio website with high-end animations and Three.js visuals, inspired by Cyberpunk 2077, futuristic neon cities, and sci-fi UI aesthetics.

## ✨ Features

- **Immersive Hero Section** with Three.js animated background
- **Animated Sections** with GSAP scroll triggers
- **Cyberpunk Aesthetics** - Neon colors, glitch effects, holographic UI
- **Interactive Project Cards** with hover effects
- **Futuristic Timeline** for experience section
- **Contact Form** with cyberpunk styling
- **Fully Responsive** design for all devices
- **Smooth Animations** throughout the site

## 🛠 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Three.js / React Three Fiber** - 3D graphics
- **GSAP** - Advanced animations
- **Tailwind CSS** - Styling
- **Framer Motion** - Additional animations

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Fixed navigation bar
│   ├── Hero.jsx            # Landing section with 3D background
│   ├── CyberpunkBackground.jsx  # Three.js scene
│   ├── About.jsx           # About section
│   ├── Skills.jsx          # Skills & tech stack
│   ├── Projects.jsx        # Project showcase
│   ├── Experience.jsx      # Timeline experience
│   └── Contact.jsx         # Contact form
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.css              # Global styles & Tailwind
```

## 🎨 Customization

### Update Your Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change "YOUR NAME" to your name
   - Update typewriter texts in the `TypewriterText` component

2. **About Section** (`src/components/About.jsx`):
   - Update the description text
   - Modify stats values

3. **Skills** (`src/components/Skills.jsx`):
   - Update skill categories and levels
   - Add/remove technologies

4. **Projects** (`src/components/Projects.jsx`):
   - Replace project data with your own projects
   - Update GitHub and demo links

5. **Experience** (`src/components/Experience.jsx`):
   - Update experience entries with your work history

6. **Contact** (`src/components/Contact.jsx`):
   - Update social media links
   - Connect form to your backend/email service

### Color Scheme

Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  cyber: {
    cyan: '#00ffff',
    magenta: '#ff00ff',
    // ... add your colors
  }
}
```

## 🎯 Sections

### 1. Hero / Landing
- Full-screen Three.js background
- Animated intro text with glitch effects
- Typewriter effect for job titles
- Call-to-action buttons

### 2. About Me
- Holographic card UI
- Animated stat bars
- Floating UI panels

### 3. Skills
- Animated skill grid
- Progress bars with neon effects
- Tech stack icons

### 4. Projects
- Terminal-style project cards
- Hover glow effects
- Modal view for project details

### 5. Experience
- Vertical timeline with neon nodes
- Scroll-triggered animations
- Tech stack tags

### 6. Contact
- Futuristic contact form
- Social media links
- Status indicators

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Optimized 3D effects for mobile
- Touch-friendly interactions
- Adaptive layouts

## 🎭 Animations

- **GSAP ScrollTrigger** for scroll-based animations
- **Glitch effects** on text
- **Hover distortions** on cards
- **Floating animations** for UI elements
- **Parallax effects** for depth

## 🔧 Performance

- Lazy-loaded 3D scenes
- Optimized animations
- Efficient re-renders
- Mobile fallbacks

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Credits

Inspired by:
- Cyberpunk 2077 UI design
- Futuristic HUD aesthetics
- Neon city aesthetics

---

**Built with ❤️ and neon lights**
