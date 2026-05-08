'use client'
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'
import { BsArrowRight, BsArrowDown } from 'react-icons/bs'
import MagneticButton from './MagneticButton'

const socials = [
  { Icon: FiGithub, href: '#' },
  { Icon: FiLinkedin, href: '#' },
  { Icon: FiTwitter, href: '#' },
  { Icon: FiInstagram, href: '#' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="glow-orb w-[600px] h-[600px]" style={{ background: 'var(--muted)', top: '-100px', right: '-100px' }} />
      <div className="glow-orb w-[300px] h-[300px]" style={{ background: 'var(--gold)', bottom: '100px', left: '5%', opacity: 0.06 }} />
      <div className="glow-orb w-[200px] h-[200px]" style={{ background: 'var(--gold)', top: '30%', right: '15%', opacity: 0.05 }} />

      {/* Social sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50  flex-col gap-5 hidden lg:flex"
      >
        {socials.map(({ Icon, href }, i) => (
          <MagneticButton key={i}>
            <a
              href={href}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-text-muted hover:text-gold hover:border-gold/40 transition-all duration-300"
              style={{ border: '1px solid rgba(201,168,76,0.15)' }}
            >
              <Icon size={15} />
            </a>
          </MagneticButton>
        ))}
        <div className="w-px h-16 bg-linear-to-b from-gold/20 to-transparent mx-auto" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="section-label mb-6 text-center"
        >
          Hi, my name is
        </motion.p>

        {/* Ghost text */}
        <div className="relative text-center">
          <div className="ghost-text" style={{ top: '-30px' }}>DEVELOPER</div>

          {/* Main heading */}
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="font-display leading-none tracking-wider"
              style={{ fontSize: 'clamp(5rem, 18vw, 16rem)' }}
            >
              <span className="gold-text">WEB</span>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="font-display leading-none tracking-wider text-white"
              style={{ fontSize: 'clamp(4rem, 15vw, 13rem)' }}
            >
              DEVELOPER
            </motion.h1>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center text-text-muted text-sm max-w-md mx-auto mt-6 leading-relaxed"
        >
          I build modern, responsive and user friendly web applications using Next.js & Tailwind CSS.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <MagneticButton>
            <a
              href="#portfolio"
              className="flex items-center gap-2 px-7 py-3 rounded-lg text-xs tracking-widest uppercase font-mono text-white transition-all duration-300 group"
              style={{
                border: '1px solid rgba(201,168,76,0.4)',
                background: 'rgba(201,168,76,0.08)',
              }}
            >
              <BsArrowRight className="text-gold group-hover:translate-x-1 transition-transform" />
              View My Work
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              className="flex items-center gap-2 px-7 py-3 rounded-lg text-xs tracking-widest uppercase font-mono text-darker font-semibold transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, var(--gold-light), var(--gold))',
                boxShadow: '0 4px 30px rgba(201,168,76,0.35)',
              }}
            >
              Get in Touch
              <BsArrowRight />
            </a>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col items-center mt-20 gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.05)' }}
          >
            <BsArrowDown className="text-gold text-sm" />
          </motion.div>
          <span className="text-text-muted text-[10px] tracking-[0.3em] uppercase font-mono">scroll down</span>
        </motion.div>
      </motion.div>
    </section>
  )
}