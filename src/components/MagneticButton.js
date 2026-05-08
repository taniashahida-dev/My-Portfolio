'use client'
import { useRef } from 'react'

export default function MagneticButton({ children, className = '', strength = 30, ...props }) {
  const btnRef = useRef(null)

  const handleMouseMove = (e) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const distance = Math.sqrt(x * x + y * y)
    const maxDist = Math.max(rect.width, rect.height)
    const factor = Math.max(0, 1 - distance / maxDist)
    btn.style.transform = `translate(${x * factor * (strength / 30)}px, ${y * factor * (strength / 30)}px)`
  }

  const handleMouseLeave = () => {
    const btn = btnRef.current
    if (!btn) return
    btn.style.transform = 'translate(0, 0)'
    btn.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
    setTimeout(() => {
      if (btn) btn.style.transition = ''
    }, 500)
  }

  return (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnetic-btn ${className}`}
      style={{ display: 'inline-block' }}
      {...props}
    >
      {children}
    </div>
  )
}