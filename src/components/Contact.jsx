import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

const contactCards = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'habeebrahumanofficial@gmail.com',
    href: 'mailto:habeebrahumanofficial@gmail.com',
    gradient: 'from-indigo-500 to-purple-600',
    text: 'text-indigo-600',
    border: 'border-indigo-100',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'habeebrahumanoffi',
    href: 'https://github.com/habeebrahumanoffi',
    gradient: 'from-slate-700 to-slate-900',
    text: 'text-slate-700',
    border: 'border-slate-200',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    value: '_.habeee___',
    href: 'https://www.instagram.com/_.habeee___/',
    gradient: 'from-pink-500 to-rose-500',
    text: 'text-pink-600',
    border: 'border-pink-100',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-100"
        style={{ filter: 'blur(80px)' }}
      />

      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full text-slate-500 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            Let's{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Open to internships, collaborations, and new projects. Let's build something great together.
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full" />
          </div>
        </motion.div>

        {/* Contact Cards */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-5"
        >
          Find me on
        </motion.p>

        <div className="space-y-4">
          {contactCards.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12 + 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 6, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-4 p-4 bg-white rounded-2xl border ${card.border} shadow-sm hover:shadow-md transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
                <card.icon className="text-white text-xl" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">{card.label}</p>
                <p className={`text-sm font-semibold ${card.text} truncate`}>{card.value}</p>
              </div>
              <HiArrowTopRightOnSquare className="text-slate-300 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
            </motion.a>
          ))}
        </div>

        {/* Response note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-6 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100"
        >
          <p className="text-slate-600 text-sm leading-relaxed">
            <span className="font-bold text-indigo-600">Response time:</span> I typically
            reply within 24 hours. Looking forward to connecting! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  )
}
