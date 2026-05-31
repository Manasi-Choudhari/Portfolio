'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Typewriter from './Typewriter'

const f = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const unlockedRef = useRef(false)
  const [showHint, setShowHint] = useState(false)   // show after video ready
  const [soundOn, setSoundOn] = useState(false)      // hide hint once unlocked

  // ── Step 1: autoplay muted (always works) ──────────────────────────────────
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.play().catch(() => {})
  }, [])

  // ── Step 2: show hint once video has loaded enough to play ─────────────────
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onReady = () => setShowHint(true)
    v.addEventListener('canplay', onReady, { once: true })
    return () => v.removeEventListener('canplay', onReady)
  }, [])

  // ── Step 3: listen for REAL user gestures (Chrome policy) ─────────────────
  //    Only click / pointerdown / keydown / touchend count as genuine gestures.
  //    scroll and mousemove do NOT unlock audio in Chromium browsers.
  useEffect(() => {
    const EVENTS = ['click', 'pointerdown', 'keydown', 'touchend'] as const

    const unlock = (e: Event) => {
      // Ignore keyboard events that aren't real key presses
      if (e.type === 'keydown') {
        const ke = e as KeyboardEvent
        if (['Tab', 'Shift', 'Meta', 'Alt', 'Control'].includes(ke.key)) return
      }
      if (unlockedRef.current) return
      unlockedRef.current = true

      EVENTS.forEach(ev => window.removeEventListener(ev, unlock as EventListener))

      const v = videoRef.current
      if (!v) return
      v.muted = false
      v.volume = 1
      v.currentTime = 0          // restart from beginning so audio plays fully
      v.play().catch(() => {})

      setShowHint(false)
      setSoundOn(true)

      // When it finishes → freeze on last frame (no loop)
      v.addEventListener('ended', () => v.pause(), { once: true })
    }

    EVENTS.forEach(ev =>
      window.addEventListener(ev, unlock as EventListener, { passive: true })
    )
    return () => EVENTS.forEach(ev =>
      window.removeEventListener(ev, unlock as EventListener)
    )
  }, [])

  return (
    <section id="hero" className="hero-section">

      {/* ── BACKGROUND LAYERS ── */}
      <div className="hero-bg-base" />
      <div className="hero-grid" />
      <div className="hero-vignette" />

      {/* ── LEFT COLUMN ── */}
      <div className="hero-content">

        <motion.div {...f(0)} className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          Portfolio · 2025
        </motion.div>

        <motion.h1 {...f(0.1)} className="hero-title">
          MANASI<br />CHOUDHARI
        </motion.h1>

        <motion.div {...f(0.2)} className="hero-typewriter-wrap">
          <Typewriter />
        </motion.div>

        <motion.div {...f(0.28)} className="hero-pills">
          {['AI Developer', 'ML Engineer', 'IEEE Author', 'Hackathon Winner'].map(r => (
            <span key={r} className="hero-pill">{r}</span>
          ))}
        </motion.div>

        <motion.div {...f(0.36)} className="hero-ctas">
          <a href="#projects" className="btn-primary-hero">View Projects</a>
          <a href="/resume.pdf" download className="btn-outline-hero">Download Resume</a>
        </motion.div>

        <motion.div {...f(0.46)} className="hero-scroll">
          <div className="hero-scroll-line" />
          <span>Scroll</span>
        </motion.div>

      </div>

      {/* ── RIGHT COLUMN: VIDEO ── */}
      <div className="hero-avatar-col">

        <div className="avatar-orb" />

        <video
          ref={videoRef}
          className="avatar-video"
          src="/avatar.mp4"
          autoPlay
          playsInline
          muted
          onError={e => {
            ;(e.currentTarget as HTMLVideoElement).style.display = 'none'
          }}
        />

        <div className="avatar-fade avatar-fade--left"   />
        <div className="avatar-fade avatar-fade--top"    />
        <div className="avatar-fade avatar-fade--bottom" />

        {/* ── "Click anywhere for sound" hint ──
            Shows once video is ready, disappears on first click ── */}
        <AnimatePresence>
          {showHint && !soundOn && (
            <motion.div
              className="sound-hint"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6, scale: 0.92 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              {/* Pulse dot */}
              <span className="sound-hint__dot" />
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                style={{ flexShrink: 0 }}>
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
              Click anywhere for sound
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}