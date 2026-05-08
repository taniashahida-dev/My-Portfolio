'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { BsArrowRight } from 'react-icons/bs'
import MagneticButton from './MagneticButton'


const contactInfo = [
  { icon: HiOutlineMail, label: 'Email', value: 'asad.dev@example.com' },
  { icon: HiOutlinePhone, label: 'Phone', value: '+880 123 456 7890' },
  { icon: HiOutlineLocationMarker, label: 'Location', value: 'Bangladesh' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <div className="ghost-text" style={{ top: '20px' }}>CONTACT</div>

      {/* Orb */}
      <div className="glow-orb w-[500px] h-[500px]" style={{ background: 'var(--muted)', bottom: '-100px', left: '-100px', opacity: 0.08 }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label text-center mb-3"
        >
        Lets build together
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading text-center mb-16"
        >
          LET'S WORK TOGETHER
        </motion.h2>

        <div className="grid lg:grid-cols-[1fr_auto] gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input w-full px-4 py-3 rounded-xl text-sm font-mono"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input w-full px-4 py-3 rounded-xl text-sm font-mono"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="form-input w-full px-4 py-3 rounded-xl text-sm font-mono"
              />
              <textarea
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-input w-full px-4 py-3 rounded-xl text-sm font-mono resize-none"
                required
              />
              <MagneticButton>
                <button
                  type="submit"
                  className="flex items-center gap-3 px-8 py-4 rounded-xl text-xs tracking-widest uppercase font-mono text-darker font-semibold transition-all duration-300"
                  style={{
                    background: sent
                      ? 'linear-gradient(135deg, #10b981, #059669)'
                      : 'linear-gradient(135deg, var(--gold-light), var(--gold))',
                    boxShadow: '0 4px 30px rgba(201,168,76,0.3)',
                  }}
                >
                  {sent ? '✓ Message Sent!' : (
                    <>Send Message <BsArrowRight /></>
                  )}
                </button>
              </MagneticButton>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-4 lg:w-72"
          >
            <div className="glass-card rounded-2xl p-6">
              <p className="section-label mb-4">GET IN TOUCH</p>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                Have a project in mind or want to say hi? Feel free to reach out.
              </p>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
                    >
                      <Icon className="text-gold text-base" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono tracking-widest uppercase text-text-muted">{label}</p>
                      <p className="text-white text-sm mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}