'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs,
  SiMongodb, SiGit, SiVercel, SiFigma
} from 'react-icons/si'

const skills = [
  { icon: SiHtml5, label: 'HTML5', color: '#e34f26' },
  { icon: SiCss, label: 'CSS3', color: '#1572b6' },
  { icon: SiJavascript, label: 'JavaScript', color: '#f7df1e' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
  { icon: SiNextdotjs, label: 'Next.js', color: '#ffffff' },
  { icon: SiReact, label: 'React.js', color: '#61dafb' },
  { icon: SiTailwindcss, label: 'Tailwind CSS', color: '#38bdf8' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
]

const skills2 = [
  { icon: SiMongodb, label: 'MongoDB', color: '#47a248' },
  { icon: SiGit, label: 'Git', color: '#f05032' },
  { icon: SiVercel, label: 'Vercel', color: '#ffffff' },
  { icon: SiFigma, label: 'Figma', color: '#f24e1e' },
  { icon: SiHtml5, label: 'HTML5', color: '#e34f26' },
  { icon: SiReact, label: 'React.js', color: '#61dafb' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
  { icon: SiTailwindcss, label: 'Tailwind CSS', color: '#38bdf8' },
]

function SkillChip({ icon: Icon, label, color }) {
  return (
    <div
      className="flex items-center gap-3 px-6 py-4 rounded-xl mx-3 skill-card"
      style={{ minWidth: '160px' }}
    >
      <Icon style={{ color, fontSize: '1.6rem', flexShrink: 0 }} />
      <span className="text-sm font-mono tracking-wider text-white/80">{label}</span>
    </div>
  )
}

const skillBoxes = [
  { icon: SiHtml5, label: 'HTML5', color: '#e34f26' },
  { icon: SiCss, label: 'CSS3', color: '#1572b6' },
  { icon: SiJavascript, label: 'JavaScript', color: '#f7df1e' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
  { icon: SiNextdotjs, label: 'Next.js', color: '#ffffff' },
  { icon: SiReact, label: 'React.js', color: '#61dafb' },
  { icon: SiTailwindcss, label: 'Tailwind CSS', color: '#38bdf8' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-x-hidden">
      <div className="ghost-text absolute top-20 opacity-40" >EXPERTISE</div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label text-center mb-3"
        >
          What I work with
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading text-center mb-16"
        >
          MY EXPERTISE
        </motion.h2>

        {/* Skill icon grid */}
        <div  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '16px',
  }}
  className="mb-20">
          {skillBoxes.map(({ icon: Icon, label, color }, i) => (
            <motion.div
                key={label}
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
 style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }}
  className="p-4 rounded-xl skill-card"
            >
              <Icon style={{ color, fontSize: '2rem' }} />
              <span className="text-[10px] font-mono tracking-wider text-text-muted text-center">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4 mt-20" >
        <Marquee speed={40} gradient={false} pauseOnHover>
          {skills.map((s) => <SkillChip key={s.label + '1'} {...s} />)}
        </Marquee>
        <Marquee speed={35} gradient={false} pauseOnHover direction="right">
          {skills2.map((s) => <SkillChip key={s.label + '2'} {...s} />)}
        </Marquee>
      </div>
    </section>
  )
}