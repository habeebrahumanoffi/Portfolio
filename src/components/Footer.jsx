import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaHeart } from 'react-icons/fa'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/habeebrahumanoffi', label: 'GitHub' },
  { icon: FaInstagram, href: 'https://www.instagram.com/_.habeee___/', label: 'Instagram' },
]

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-black">HR</span>
              </div>
              <div>
                <div className="font-black text-white">Habeeb Rahuman M</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building practical solutions and exploring the frontiers of AI, web, and cloud technology.
            </p>

          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="grid grid-cols-2 gap-1.5">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-slate-400 hover:text-indigo-400 transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Connect</p>
            <div className="flex gap-3 mb-4">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 border border-slate-700 hover:border-indigo-500"
                >
                  <s.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
            <p className="text-slate-400 text-sm">
              Open to opportunities &amp; collaborations. Let's connect!
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © 2026 <span className="text-slate-300 font-semibold">Habeeb Rahuman M</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
