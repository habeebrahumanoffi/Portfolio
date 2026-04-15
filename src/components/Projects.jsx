import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'

const projects = [
  {
    title: 'Library Management System',
    emoji: '📚',
    description:
      'A full-stack system to manage a book catalog and admin data entry dashboard. Features book search, borrowing records, and an intuitive admin panel.',
    tech: ['HTML', 'CSS', 'Python', 'Flask', 'MySQL'],
    github: 'https://github.com/habeebrahumanoffi/Library',
    gradient: 'from-indigo-500 to-purple-600',
    lightBg: 'bg-indigo-50',
    accentColor: 'text-indigo-600',
    borderColor: 'border-indigo-100',
    status: 'Completed',
    statusColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  },
  {
    title: 'EduQuest',
    emoji: '🎓',
    description:
      'An educational platform designed for visual learning and concept understanding. Helps students grasp complex topics through structured interactive content.',
    tech: ['Python', 'Pandas', 'FastAPI', 'React'],
    github: 'https://github.com/habeebrahumanoffi/eduquest',
    gradient: 'from-pink-500 to-rose-600',
    lightBg: 'bg-pink-50',
    accentColor: 'text-pink-600',
    borderColor: 'border-pink-100',
    status: 'Completed',
    statusColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  },
  {
    title: 'TicketMate',
    emoji: '🚆',
    description:
      'A modern train ticket booking system built with a cutting-edge architecture. Integrates blockchain for secure, transparent transaction handling.',
    tech: ['FastAPI', 'React', 'Python', 'Blockchain'],
    github: 'https://github.com/habeebrahumanoffi/TicketMate-App-',
    gradient: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50',
    accentColor: 'text-amber-600',
    borderColor: 'border-amber-100',
    status: 'In Progress',
    statusColor: 'bg-amber-50 text-amber-600 border-amber-200',
  },
]

const techColors = {
  HTML: 'bg-orange-50 text-orange-700 border-orange-200',
  CSS: 'bg-blue-50 text-blue-700 border-blue-200',
  Python: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  Flask: 'bg-slate-50 text-slate-700 border-slate-200',
  MySQL: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  Pandas: 'bg-purple-50 text-purple-700 border-purple-200',
  FastAPI: 'bg-teal-50 text-teal-700 border-teal-200',
  React: 'bg-sky-50 text-sky-700 border-sky-200',
  Blockchain: 'bg-indigo-50 text-indigo-700 border-indigo-200',
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

      {/* BG decoration */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-bold tracking-widest uppercase mb-4">
            <HiSparkles className="text-sm" />
            What I've Built
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Real-world applications I've built — from concept to deployment.
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className={`group bg-white rounded-3xl overflow-hidden border ${project.borderColor} shadow-lg hover:shadow-2xl transition-all duration-400 flex flex-col`}
            >
              {/* Card Top Banner */}
              <div className={`relative h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                {/* Pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                {/* Shimmer on hover */}
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                <motion.span
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-6xl relative z-10"
                >
                  {project.emoji}
                </motion.span>
                {/* Status badge */}
                <div className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-[11px] font-bold border ${project.statusColor}`}>
                  {project.status}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border ${techColors[t] || 'bg-slate-50 text-slate-600 border-slate-200'}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center justify-center gap-2.5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r ${project.gradient} text-white shadow-md transition-all duration-300 hover:shadow-lg`}
                >
                  <FaGithub className="text-base" />
                  View on GitHub
                  <FaExternalLinkAlt className="text-xs" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/habeebrahumanoffi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-slate-900 text-white rounded-full font-semibold text-sm hover:bg-slate-800 transition-colors shadow-md"
          >
            <FaGithub className="text-lg" />
            See All Projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
