import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contact = () => {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!formRef.current) return
    gsap.fromTo(
      formRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Message sent! (This is a demo)')
    }, 2000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    {
      name: 'Telegram',
      key: 'TG',
      url: 'https://t.me/Im_Phannyvath',
      color: 'cyan',
      type: 'telegram',
    },
    {
      name: 'GitHub',
      key: 'GH',
      url: 'https://github.com/phannyvath',
      color: 'blue',
      type: 'github',
    },
    {
      name: 'LinkedIn',
      key: 'IN',
      url: 'https://www.linkedin.com/in/im-phannyvath',
      color: 'magenta',
      type: 'linkedin',
    },
    {
      name: 'Download CV',
      key: 'CV',
      url: '/Resume & CV .pdf',
      color: 'green',
      type: 'cv',
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section min-h-screen py-20 px-6 relative"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-cyber-cyan text-glow">
          GET IN TOUCH
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef} className="space-y-6">
            <h3 className="text-2xl font-bold text-cyber-magenta mb-6 font-mono">
              {'> SEND_MESSAGE'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2 font-mono text-sm">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-darker border-2 border-cyber-cyan/30 text-white focus:border-cyber-cyan focus:outline-none focus:shadow-glow transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2 font-mono text-sm">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-darker border-2 border-cyber-cyan/30 text-white focus:border-cyber-cyan focus:outline-none focus:shadow-glow transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2 font-mono text-sm">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-cyber-darker border-2 border-cyber-cyan/30 text-white focus:border-cyber-cyan focus:outline-none focus:shadow-glow transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-cyber-cyan text-cyber-dark font-mono text-lg hover:bg-cyber-blue transition-all duration-300 shadow-neon-cyan hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⟳</span>
                    SENDING...
                  </span>
                ) : (
                  'SEND MESSAGE →'
                )}
              </button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-cyber-magenta mb-6 font-mono">
                {'> CONNECT'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const extraProps =
                    social.type === 'cv' ? { download: true } : {}

                  return (
                    <a
                      key={index}
                      href={social.url}
                      target={social.type === 'cv' ? '_self' : '_blank'}
                      rel={social.type === 'cv' ? undefined : 'noreferrer'}
                      className={`p-6 border-2 border-cyber-${social.color}/30 bg-cyber-darker/50 hover:border-cyber-${social.color} hover:shadow-glow transition-all duration-300 text-center group`}
                      {...extraProps}
                    >
                      {/* Futuristic SVG icon depending on link type */}
                      <div className="mb-2 flex items-center justify-center">
                        {social.type === 'telegram' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-cyber-cyan"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          >
                            <path d="M21 3L3 10l5 2 2 5 3-3 4.5 3L21 3z" />
                          </svg>
                        )}
                        {social.type === 'github' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-cyber-blue"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.48 2 2 6.58 2 12.17c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.52 1.06 1.52 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.24 9.24 0 0112 6.8c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.71 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.48A10.19 10.19 0 0022 12.17C22 6.58 17.52 2 12 2z"
                              />
                          </svg>
                        )}
                        {social.type === 'linkedin' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-cyber-magenta"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM2 8h2v12H2zM8 8h1.9v1.7h.03c.26-.5.9-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8V20H15v-5.4c0-1.3-.02-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9V20H9V8z" />
                          </svg>
                        )}
                        {social.type === 'cv' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-cyber-green"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path d="M12 3v12" strokeLinecap="round" />
                            <path d="M8 11l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="5" y="17" width="14" height="4" rx="1" />
                          </svg>
                        )}
                      </div>

                      <div className={`text-cyber-${social.color} font-mono text-sm group-hover:text-glow mt-1`}>
                        {social.name}
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="p-6 holographic">
              <h4 className="text-xl font-bold text-cyber-cyan mb-4 font-mono">
                {'> STATUS'}
              </h4>
              <div className="space-y-2 text-gray-300 font-mono text-sm terminal-text">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                  <span className="terminal-cursor">Available for freelance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                  <span className="terminal-cursor">Open to collaborations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                  <span className="terminal-cursor">Response time: &lt; 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
