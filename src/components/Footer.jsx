'use client'
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'
import MagneticButton from './MagneticButton'

const socials = [
  { Icon: FiGithub, href: '#', label: 'GitHub' },
  { Icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { Icon: FiTwitter, href: '#', label: 'Twitter' },
  { Icon: FiInstagram, href: '#', label: 'Instagram' },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t" style={{ borderColor: 'rgba(201,168,76,0.12)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded flex items-center justify-center"
              style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              <span className="font-display text-gold text-sm">A</span>
            </div>
            <span className="font-display text-white tracking-widest text-sm">ASAD DEV</span>
          </a>

          {/* Nav */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono tracking-widest uppercase text-text-muted hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <MagneticButton key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-text-muted hover:text-gold transition-all duration-300"
                  style={{ border: '1px solid rgba(201,168,76,0.15)' }}
                >
                  <Icon size={15} />
                </a>
              </MagneticButton>
            ))}
          </div>
        </div>

        <div className="gold-line my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-text-muted text-xs font-mono">
            © 2024 Asad Dev. All rights reserved.
          </p>
          <p className="text-text-muted text-xs font-mono">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}