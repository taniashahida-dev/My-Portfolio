'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { HiPlus, HiMinus } from 'react-icons/hi'

const faqs = [
  {
    q: 'What technologies do you use?',
    a: 'I primarily work with Next.js, React, TypeScript, Tailwind CSS, and Node.js. I also have experience with MongoDB, PostgreSQL, and various third-party APIs.',
  },
  {
    q: 'How long does it take to complete a project?',
    a: 'It depends on the project complexity. Small projects take 3-7 days, medium projects 1-3 weeks, and large projects may take longer.',
  },
  {
    q: 'Do you work with clients remotely?',
    a: 'Yes! I work with clients worldwide. I use tools like Slack, Zoom, and Notion to ensure smooth communication throughout the project.',
  },
  {
    q: 'Can you redesign an existing website?',
    a: 'Absolutely! I love redesigning websites to make them more modern, performant, and user-friendly. Share your current site and goals, and let\'s discuss.',
  },
]

function FAQItem({ item, isOpen, toggle }) {
  return (
    <div className={`faq-item rounded-xl overflow-hidden ${isOpen ? 'active' : ''}`}>
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="text-sm font-mono tracking-wider text-white pr-4">{item.q}</span>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            background: isOpen ? 'var(--gold)' : 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          {isOpen
            ? <HiMinus className="text-darker text-sm" />
            : <HiPlus className="text-gold text-sm" />
          }
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="px-6 pb-6">
              <div className="h-px mb-4" style={{ background: 'rgba(201,168,76,0.15)' }} />
              <p className="text-text-muted text-sm leading-relaxed">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState(1)

  return (
    <section id="faq" ref={ref} className="relative py-32 overflow-hidden">
      <div className="ghost-text" style={{ top: '20px' }}>FAQ</div>

      <div className="max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label text-center mb-3"
        >
          Got questions?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading text-center mb-16"
        >
          FREQUENTLY ASKED QUESTIONS
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            >
              <FAQItem
                item={item}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}