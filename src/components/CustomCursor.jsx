'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const trailsRef = useRef([])

  const mouse = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const history = useRef(Array(12).fill({ x: -100, y: -100 }))
  const isPtr = useRef(false)
  const isClicking = useRef(false)
  const rafId = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    const trailEls = trailsRef.current
    if (!dot || !ring) return

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      // Dot snaps instantly
      dot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
    }

    const onMouseOver = (e) => {
      const el = e.target
      const ptr = !!(
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') ||
        el.closest('button')
      )
      if (ptr === isPtr.current) return
      isPtr.current = ptr

      if (ptr) {
        // Hover state: square-ish ring, bigger
        ring.style.width = '52px'
        ring.style.height = '52px'
        ring.style.borderRadius = '10px'
        ring.style.borderColor = 'rgba(201,168,76,0.9)'
        ring.style.background = 'rgba(201,168,76,0.07)'
        dot.style.width = '4px'
        dot.style.height = '4px'
        dot.style.background = '#e8c96d'
      } else {
        // Default state
        ring.style.width = '34px'
        ring.style.height = '34px'
        ring.style.borderRadius = '50%'
        ring.style.borderColor = 'rgba(201,168,76,0.5)'
        ring.style.background = 'rgba(201,168,76,0.04)'
        dot.style.width = '6px'
        dot.style.height = '6px'
        dot.style.background = '#c9a84c'
      }
    }

    const onMouseDown = () => {
      isClicking.current = true
      ring.style.width = isPtr.current ? '28px' : '20px'
      ring.style.height = isPtr.current ? '28px' : '20px'
      ring.style.borderColor = 'rgba(201,168,76,1)'
      dot.style.transform += ' scale(0.6)'
    }

    const onMouseUp = () => {
      isClicking.current = false
      if (isPtr.current) {
        ring.style.width = '52px'
        ring.style.height = '52px'
        ring.style.borderColor = 'rgba(201,168,76,0.9)'
      } else {
        ring.style.width = '34px'
        ring.style.height = '34px'
        ring.style.borderColor = 'rgba(201,168,76,0.5)'
      }
    }

    const onMouseLeave = () => {
      dot.style.opacity = '0'
      ring.style.opacity = '0'
      trailEls.forEach(t => { if (t) t.style.opacity = '0' })
    }

    const onMouseEnter = () => {
      dot.style.opacity = '1'
      ring.style.opacity = '1'
    }

    const TRAIL_COUNT = 6
    const animate = () => {
      const { x, y } = mouse.current

      // Ring lags behind
      ringPos.current.x += (x - ringPos.current.x) * 0.13
      ringPos.current.y += (y - ringPos.current.y) * 0.13
      ring.style.transform = `translate(${ringPos.current.x - 17}px, ${ringPos.current.y - 17}px)`

      // Trail history
      history.current = [{ x, y }, ...history.current.slice(0, -1)]

      trailEls.forEach((el, i) => {
        if (!el) return
        const step = Math.min(i * 2 + 2, history.current.length - 1)
        const h = history.current[step]
        el.style.transform = `translate(${h.x - 2}px, ${h.y - 2}px)`
        el.style.opacity = ((TRAIL_COUNT - i) / TRAIL_COUNT * 0.28).toFixed(2)
        const size = (4 - i * 0.45).toFixed(1)
        el.style.width = size + 'px'
        el.style.height = size + 'px'
      })

      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseover', onMouseOver, { passive: true })
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    document.documentElement.addEventListener('mouseenter', onMouseEnter)

    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
      document.documentElement.removeEventListener('mouseenter', onMouseEnter)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  const TRAIL_COUNT = 6

  return (
    <>
      {/* Gold dot — instant */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          zIndex: 999999, pointerEvents: 'none',
          willChange: 'transform', mixBlendMode: 'screen',
        }}
      >
        <div style={{
          width: '6px', height: '6px',
          borderRadius: '50%',
          background: '#c9a84c',
          transition: 'width 0.2s, height 0.2s, background 0.2s',
        }} />
      </div>

      {/* Morphing ring — lags */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          zIndex: 999998, pointerEvents: 'none',
          willChange: 'transform',
        }}
      >
        <div style={{
          width: '34px', height: '34px',
          borderRadius: '50%',
          border: '1.5px solid rgba(201,168,76,0.5)',
          background: 'rgba(201,168,76,0.04)',
          transition: `
            width 0.35s cubic-bezier(0.23,1,0.32,1),
            height 0.35s cubic-bezier(0.23,1,0.32,1),
            border-radius 0.35s cubic-bezier(0.23,1,0.32,1),
            border-color 0.25s ease,
            background 0.25s ease
          `,
        }} />
      </div>

      {/* Gold particle trails */}
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={el => trailsRef.current[i] = el}
          style={{
            position: 'fixed', top: 0, left: 0,
            zIndex: 999997 - i, pointerEvents: 'none',
            willChange: 'transform',
          }}
        >
          <div style={{
            width: '4px', height: '4px',
            borderRadius: '50%',
            background: '#c9a84c',
          }} />
        </div>
      ))}
    </>
  )
}