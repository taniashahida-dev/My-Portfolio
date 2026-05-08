'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BsStarFill } from 'react-icons/bs'
import { FiMessageSquare } from 'react-icons/fi'
import MagneticButton from './MagneticButton'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    text: 'Asad delivered an amazing project before the deadline. Highly recommended!',
    stars: 5,
    avatar: 'SJ',
    avatarColor: '#4a9eff',
  },
  {
    name: 'David Smith',
    role: 'CEO, Creative Studio',
    text: 'Professional, creative and super easy to work with. Will hire again!',
    stars: 5,
    avatar: 'DS',
    avatarColor: '#7c3aed',
  },
  {
    name: 'Michael Brown',
    role: 'Founder, DevStart',
    text: 'Excellent communication and top notch code quality.',
    stars: 5,
    avatar: 'MB',
    avatarColor: '#10b981',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <BsStarFill key={i} className="text-gold text-xs" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" ref={ref} className="relative py-32 overflow-hidden">
      <div className="ghost-text" style={{ top: '20px' }}>CLIENTS</div>

      {/* Orb */}
      <div className="glow-orb w-[400px] h-[400px]" style={{ background: 'var(--gold)', top: '20%', right: '-10%', opacity: 0.04 }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label text-center mb-3"
        >
          Client reviews
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading text-center mb-16"
        >
          WHAT CLIENTS SAY
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.23, 1, 0.32, 1] }}
              className="testimonial-card rounded-2xl p-6 hover:border-gold/25 transition-all duration-300"
            >
              <Stars count={t.stars} />
              <p className="text-text-muted text-sm leading-relaxed mt-4 mb-6 italic">
               "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-text-muted text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Drop review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <MagneticButton>
            <button
              className="flex items-center gap-2 px-8 py-3 rounded-xl text-xs tracking-widest uppercase font-mono text-white transition-all duration-300"
              style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.06)' }}
            >
              <FiMessageSquare className="text-gold" />
              Drop Your Review
            </button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}