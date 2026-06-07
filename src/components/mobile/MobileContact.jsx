import { useState } from 'react'
import { sendContactEmail } from '../../lib/email'

const socialLinks = [
  { name: 'Telegram', url: 'https://t.me/Im_Phannyvath', icon: 'TG' },
  { name: 'GitHub', url: 'https://github.com/phannyvath', icon: 'GH' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/im-phannyvath', icon: 'IN' },
  { name: 'Download CV', url: '/Resume & CV .pdf', icon: 'CV', download: true },
]

export default function MobileContact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setSubmitMessage(null)

    try {
      await sendContactEmail(formData)
      setFormData({ name: '', email: '', message: '' })
      setSubmitMessage('Message sent successfully. I will reply soon.')
    } catch (error) {
      console.error('EmailJS send failed:', error)
      setSubmitMessage('Message failed to send. Please try again or contact me on Telegram.')
    } finally {
      setSending(false)
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="mobile-contact" className="min-h-screen py-16 px-5 pb-32 md:hidden">
      <div className="max-w-md mx-auto">
        <h2
          className="text-2xl font-black uppercase tracking-widest mb-8 text-center"
          style={{
            fontFamily: 'Orbitron, sans-serif',
            color: 'var(--cyber-cyan)',
            textShadow: '0 0 15px var(--cyber-cyan)',
          }}
        >
          Get in Touch
        </h2>

        <div
          className="rounded-3xl p-6 mb-6 border border-cyber-cyan/30 bg-cyber-darker/80"
          style={{
            boxShadow: '0 0 30px color-mix(in srgb, var(--cyber-cyan) 15%, transparent), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          <h3 className="text-sm font-mono text-cyber-magenta mb-4">&gt; SEND_MESSAGE</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-cyber-navy/80 border border-cyber-cyan/30 text-white placeholder-gray-500 focus:border-cyber-cyan focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-cyber-navy/80 border border-cyber-cyan/30 text-white placeholder-gray-500 focus:border-cyber-cyan focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl bg-cyber-navy/80 border border-cyber-cyan/30 text-white placeholder-gray-500 focus:border-cyber-cyan focus:outline-none resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="btn-primary w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest disabled:opacity-50 active:scale-[0.98]"
              style={{
                color: 'var(--cyber-btn-on-accent)',
                background: 'linear-gradient(135deg, var(--cyber-cyan), var(--cyber-blue))',
                boxShadow: '0 0 25px color-mix(in srgb, var(--cyber-cyan) 40%, transparent), 0 0 40px color-mix(in srgb, var(--cyber-blue) 20%, transparent)',
              }}
            >
              {sending ? 'Sending...' : 'Send →'}
            </button>
            {submitMessage && (
              <p className="mt-3 text-xs text-cyber-magenta font-mono text-center">
                {submitMessage}
              </p>
            )}
          </form>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.download ? '_self' : '_blank'}
              rel={link.download ? undefined : 'noreferrer'}
              download={link.download}
              className="rounded-2xl p-5 border border-cyber-blue/30 bg-cyber-darker/80 flex flex-col items-center justify-center gap-2 active:scale-[0.98] transition-transform"
              style={{
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.12)',
              }}
            >
              <span
                className="text-lg font-black text-cyber-cyan"
                style={{ textShadow: '0 0 10px var(--cyber-cyan)' }}
              >
                {link.icon}
              </span>
              <span className="text-xs text-gray-400">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="mt-6 rounded-2xl p-4 border border-cyber-cyan/20 bg-cyber-darker/60 text-center">
          <p className="text-xs text-gray-500">Available for freelance · Open to collaborations</p>
        </div>
      </div>
    </section>
  )
}
