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
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
              <span className="text-white text-lg font-black">HR</span>
            </div>
            <div className="font-black text-white">Habeeb Rahuman M</div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-md">
            Building practical solutions and exploring the frontiers of AI, web, and cloud technology.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex justify-center">
          <p className="text-slate-500 text-sm text-center">
            © 2026 <span className="text-slate-300 font-semibold">Habeeb Rahuman M</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
