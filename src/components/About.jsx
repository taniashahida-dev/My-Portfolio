'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiOutlineFolder, HiOutlineClock, HiOutlineUsers, HiOutlineSupport } from 'react-icons/hi'

const stats = [
  { icon: HiOutlineFolder, value: '30+', label: 'Projects Completed' },
  { icon: HiOutlineClock, value: '4+', label: 'Years of Experience' },
  { icon: HiOutlineUsers, value: '15+', label: 'Happy Clients' },
  { icon: HiOutlineSupport, value: '24/7', label: 'Support Available' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Ghost text */}
      <div className="ghost-text" style={{ top: '20px' }}>ABOUT ME</div>

      {/* Top divider */}
      <div className="gold-line mb-24" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label text-center mb-3"
        >
          Get to know me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading text-center mb-16"
        >
          WHO AM I ?
        </motion.h2>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden aspect-square"
              style={{
                background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(13,36,32,0.8))',
                border: '1px solid rgba(201,168,76,0.2)',
              }}
            >
              {/* Abstract pattern as placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-40 h-40 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(201,168,76,0.2), transparent)',
                    border: '1px solid rgba(201,168,76,0.3)',
                  }}
                />
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{ background: 'linear-gradient(to top, rgba(6,18,16,0.9), transparent)' }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-display text-4xl text-gold">ASAD</span>
                <p className="text-text-muted text-xs tracking-widest uppercase font-mono">Web Developer</p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3"
            >
              <p className="text-gold font-display text-2xl">4+</p>
              <p className="text-text-muted text-[10px] tracking-widest font-mono uppercase">Years Exp.</p>
            </motion.div>
          </motion.div>

          {/* Right - text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-text-muted leading-relaxed mb-6 text-sm">
              I am Asad, a passionate Web Developer with 4+ years of experience building scalable and high performance web applications.
              I specialize in Next.js, Tailwind CSS, and modern JavaScript technologies.
            </p>
            <p className="text-text-muted leading-relaxed mb-8 text-sm">
              I love turning ideas into real world solutions. My approach combines clean code, pixel-perfect design, and attention to performance to deliver exceptional user experiences.
            </p>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono tracking-wider text-gold"
                  style={{ border: '1px solid rgba(201,168,76,0.25)', background: 'rgba(201,168,76,0.06)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center group hover:border-gold/30 transition-all duration-300"
            >
              <Icon className="text-gold mx-auto mb-3 text-xl opacity-70" />
              <p className="font-display text-3xl text-white mb-1">{value}</p>
              <p className="text-text-muted text-xs tracking-wider font-mono uppercase">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="gold-line mt-24" />
    </section>
  )
}