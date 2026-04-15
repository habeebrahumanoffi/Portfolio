import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/60 border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:shadow-indigo-300 transition-shadow">
              <span className="text-white text-lg font-black">HR</span>
            </div>
            <span className="hidden sm:block text-slate-800 font-bold text-sm">
              Habeeb Rahuman
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.slice(1)
              const isActive = active === id
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-indigo-600'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-indigo-50 rounded-full"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{link.name}</span>
                </a>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <motion.a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(99,102,241,0.35)' }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-md shadow-indigo-200 transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block h-0.5 w-full bg-current rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-full bg-current rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block h-0.5 w-full bg-current rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-slate-100 shadow-xl"
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3 text-slate-700 font-medium hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-3 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl text-center"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
