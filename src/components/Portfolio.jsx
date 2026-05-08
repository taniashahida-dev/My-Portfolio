'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BsArrowUpRight } from 'react-icons/bs'
import MagneticButton from './MagneticButton'

const projects = [
  {
    title: 'DevFlow',
    desc: 'Developer community platform',
    tags: ['Next.js', 'Tailwind'],
    color: '#1a3a5c',
    accentColor: '#4a9eff',
    emoji: '💻',
  },
  {
    title: 'TaskHub',
    desc: 'Task management dashboard',
    tags: ['Next.js', 'TypeScript'],
    color: '#1a2a3a',
    accentColor: '#7c3aed',
    emoji: '📋',
  },
  {
    title: 'ShopSphere',
    desc: 'E-commerce store application',
    tags: ['Next.js', 'Stripe'],
    color: '#1a3a2a',
    accentColor: '#10b981',
    emoji: '🛒',
  },
  {
    title: 'Portfolio V2',
    desc: 'Personal portfolio website',
    tags: ['Next.js', 'Tailwind'],
    color: '#2a1a3a',
    accentColor: '#f59e0b',
    emoji: '🎨',
  },
]

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.23, 1, 0.32, 1] }}
      className="project-card rounded-2xl group"
    >
      {/* Thumbnail */}
      <div
        className="relative w-full aspect-4/3 rounded-t-2xl overflow-hidden flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${project.color}, rgba(13,36,32,0.9))` }}
      >
        <span style={{ fontSize: '4rem' }}>{project.emoji}</span>
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at 50% 50%, ${project.accentColor}20, transparent 70%)` }}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-darker"
            style={{ background: 'var(--gold)' }}
          >
            <BsArrowUpRight />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display tracking-wider text-xl text-white mb-1">{project.title}</h3>
        <p className="text-text-muted text-xs mb-4">{project.desc}</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono tracking-wider px-2 py-1 rounded"
                style={{ background: 'rgba(201,168,76,0.08)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.15)' }}
              >
                {tag}
              </span>
            ))}
          </div>
          <BsArrowUpRight className="text-text-muted group-hover:text-gold transition-colors" size={14} />
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="portfolio" ref={ref} className="relative py-32 overflow-hidden">
      <div className="ghost-text" style={{ top: '20px' }}>PORTFOLIO</div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label text-center mb-3"
        >
          Featured work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading text-center mb-16"
        >
          MY PORTFOLIO
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <MagneticButton>
            <button
              className="px-8 py-3 rounded-xl text-xs tracking-widest uppercase font-mono text-white transition-all duration-300"
              style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.06)' }}
            >
              View All Projects
            </button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}