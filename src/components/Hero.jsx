import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaArrowDown, FaGithub } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'

const techBadges = [
  { emoji: '⚛️', label: 'React', pos: 'top-4 right-8', delay: 0 },
  { emoji: '🐍', label: 'Python', pos: 'top-1/3 -right-4', delay: 0.3 },
  { emoji: '☁️', label: 'AWS', pos: 'bottom-20 right-4', delay: 0.6 },
  { emoji: '🗄️', label: 'MySQL', pos: 'bottom-1/3 -left-4', delay: 0.9 },
  { emoji: '🤖', label: 'AI & ML', pos: 'top-8 left-4', delay: 1.2 },
]

function useTyping(text, speed = 60, startDelay = 800) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  useEffect(() => {
    let timeout
    timeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1))
        i++
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])
  return { displayed, done }
}

export default function Hero() {
  const { displayed, done } = useTyping('B.Tech Artificial Intelligence and Data Science Student')

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Soft Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-100 to-purple-100"
          style={{ filter: 'blur(80px)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-pink-100 to-rose-100"
          style={{ filter: 'blur(80px)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-50"
          style={{ filter: 'blur(60px)' }}
        />
        {/* Grid dots pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen">

          {/* ── Left Column ── */}
          <div className="flex flex-col pt-24 lg:pt-0">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-sm font-semibold w-fit mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500" />
              </span>
              Available for Internships &amp; Projects
            </motion.div>

            {/* Greeting */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl xl:text-7xl font-black text-slate-900 leading-tight mb-3"
            >
              Hi there!{' '}
              <motion.span
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{ duration: 1.5, delay: 1, repeat: 2, repeatDelay: 4 }}
                style={{ display: 'inline-block', transformOrigin: 'bottom right' }}
              >
                👋
              </motion.span>
            </motion.h1>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl xl:text-5xl font-black mb-4"
            >
              I'm{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Habeeb Rahuman M
              </span>
            </motion.h2>

            {/* Typing subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-base sm:text-lg text-indigo-600 font-semibold mb-2 h-7 flex items-center"
            >
              {displayed}
              {!done && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-0.5 inline-block w-0.5 h-5 bg-indigo-500"
                />
              )}
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-1.5 text-slate-500 text-sm font-medium mb-5"
            >
              <HiLocationMarker className="text-pink-500 text-base" />
              Pollachi, Tamil Nadu · Dr. Mahalingam College of Engineering and Technology
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-slate-500 text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
            >
              I am a 2nd-year student with a strong passion for building practical applications
              and exploring web development, cloud computing, and problem solving.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => scrollTo('projects')}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99,102,241,0.35)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full shadow-lg shadow-indigo-200 transition-all duration-300 text-sm sm:text-base"
              >
                View Projects →
              </motion.button>
              <motion.button
                onClick={() => scrollTo('contact')}
                whileHover={{ scale: 1.05, backgroundColor: '#eef2ff' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 border-2 border-indigo-200 text-indigo-700 font-bold rounded-full transition-all duration-300 text-sm sm:text-base hover:border-indigo-400"
              >
                Get in Touch
              </motion.button>
            </motion.div>

            {/* GitHub quick link */}
            <motion.a
              href="https://github.com/habeebrahumanoffi"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ x: 4 }}
              className="mt-8 flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium w-fit"
            >
              <FaGithub className="text-lg" />
              github.com/habeebrahumanoffi
            </motion.a>
          </div>

          {/* ── Right Column — Profile Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center items-center relative pt-10 lg:pt-0"
          >
            {/* Spinning rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-indigo-200"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[280px] h-[280px] rounded-full border border-purple-100"
            />
            <div className="absolute w-[220px] h-[220px] rounded-full border border-pink-100" />

            {/* Profile card */}
            <motion.div
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-300/40 z-10"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
              {/* Shimmer overlay */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
              />
              {/* Profile photo */}
              <img
                src={`${import.meta.env.BASE_URL}photo.jpeg`}
                alt="Habeeb Rahuman M"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating tech badges */}
            {techBadges.map((badge) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: badge.delay + 0.8, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.15, y: -3 }}
                style={{}}
                className={`absolute ${badge.pos} flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-xs font-semibold shadow-lg border border-slate-100 cursor-default z-20`}
              >
                <motion.span
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: badge.delay }}
                >
                  {badge.emoji}
                </motion.span>
                <span className="text-slate-700">{badge.label}</span>
              </motion.div>
            ))}

            {/* Stats floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 left-0 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 z-20"
            >
              <div className="text-2xl font-black text-indigo-600">3+</div>
              <div className="text-xs text-slate-500 font-medium">Projects Built</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 right-0 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 z-20"
            >
              <div className="text-2xl font-black text-pink-500">🏆</div>
              <div className="text-xs text-slate-500 font-medium">Hackathon Winner</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaArrowDown className="text-sm" />
        </motion.div>
      </motion.div>
    </section>
  )
}
