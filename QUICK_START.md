# 🚀 Quick Start Guide

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🎨 Customization Checklist

### Personal Information
- [ ] Update name in `src/components/Hero.jsx` (line 80)
- [ ] Update typewriter texts in `src/components/Hero.jsx` (line 88)
- [ ] Update about section text in `src/components/About.jsx`
- [ ] Update stats in `src/components/About.jsx`
- [ ] Update skills in `src/components/Skills.jsx`
- [ ] Update projects in `src/components/Projects.jsx`
- [ ] Update experience in `src/components/Experience.jsx`
- [ ] Update social links in `src/components/Contact.jsx`

### Styling
- [ ] Customize colors in `tailwind.config.js`
- [ ] Adjust animations timing in component files
- [ ] Modify Three.js scene in `src/components/CyberpunkBackground.jsx`

### Functionality
- [ ] Connect contact form to your backend/email service
- [ ] Update project GitHub and demo links
- [ ] Add your actual social media URLs

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🎯 Key Files to Edit

- **Hero Section**: `src/components/Hero.jsx`
- **About**: `src/components/About.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Experience**: `src/components/Experience.jsx`
- **Contact**: `src/components/Contact.jsx`
- **Colors**: `tailwind.config.js`
- **Global Styles**: `src/index.css`

## 💡 Tips

- All animations use GSAP - adjust timing in component `useEffect` hooks
- Three.js scene can be customized in `CyberpunkBackground.jsx`
- Colors follow Tailwind's cyber theme - see `tailwind.config.js`
- Components are modular and reusable
- Mobile responsive by default

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

**Dependencies issues?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
- Check Node.js version (should be 16+)
- Clear Vite cache: `rm -rf node_modules/.vite`

---

Happy coding! 🚀✨
