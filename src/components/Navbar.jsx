'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from './MagneticButton'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-3 left-0 w-full z-[1000] px-4 md:px-6"
      >
        <div
          className="  flex  items-center justify-between px-6 py-4 rounded-xl transition-all duration-500"
          style={{
            background: scrolled
              ? 'rgba(6, 18, 16, 0.92)'
              : 'rgba(6, 18, 16, 0.4)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(201,168,76,0.12)',
          }}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded flex items-center justify-center"
              style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              <span className=" text-gold text-sm leading-none">A</span>
            </div>
            <span className="font-display text-white tracking-widest text-sm">ASAD DEV</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link tracking-[0.15em] text-sm uppercase font-body text-text-muted hover:text-white transition-colors duration-300"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <MagneticButton>
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-lg text-xs tracking-widest uppercase font-mono text-darker font-semibold transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, var(--gold-light), var(--gold))',
                boxShadow: '0 4px 20px rgba(201,168,76,0.3)',
              }}
            >
              Hire Me
            </a>
          </MagneticButton>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`w-6 h-0.5 bg-gold transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-gold transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-6 right-6 z-[999] rounded-xl p-6 flex flex-col gap-4"
            style={{
              background: 'rgba(6, 18, 16, 0.98)',
              border: '1px solid rgba(201,168,76,0.2)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-text-muted hover:text-gold transition-colors py-2 border-b border-white/5"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-center py-3 rounded-lg text-xs tracking-widest uppercase text-darker font-semibold mt-2"
              style={{ background: 'linear-gradient(135deg, var(--gold-light), var(--gold))' }}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}