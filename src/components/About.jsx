import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiCode, HiLightBulb, HiAcademicCap, HiLocationMarker } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const highlights = [
  { icon: HiAcademicCap, label: '2nd Year Student', color: 'from-indigo-500 to-purple-500', bg: 'bg-indigo-50', text: 'text-indigo-600' },
  { icon: HiCode, label: '3+ Projects Built', color: 'from-pink-500 to-rose-500', bg: 'bg-pink-50', text: 'text-pink-600' },
  { icon: HiLightBulb, label: 'Hackathon Winner', color: 'from-amber-500 to-orange-500', bg: 'bg-amber-50', text: 'text-amber-600' },
  { icon: HiLocationMarker, label: 'Tamil Nadu, India', color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50', text: 'text-emerald-600' },
]

const interests = ['Web Development', 'Cloud Computing', 'App Development', 'Software Engineering', 'AI & Data Science']

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-bold tracking-widest uppercase mb-4">
            Get to Know Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full" />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — Stats + Info */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {/* Profile card */}
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-0.5 shadow-xl shadow-indigo-200/50">
              <div className="bg-white rounded-[calc(1.5rem-2px)] p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-200 text-white text-2xl font-black">
                    HR
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Habeeb Rahuman M</h3>
                    <p className="text-indigo-600 text-sm font-semibold">AI & Data Science Student</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
                      className={`flex items-center gap-2.5 p-3 ${item.bg} rounded-xl`}
                    >
                      <item.icon className={`text-lg ${item.text} flex-shrink-0`} />
                      <span className={`text-xs font-semibold ${item.text}`}>{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                Currently Exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 bg-white border border-indigo-100 text-indigo-700 text-xs font-semibold rounded-full shadow-sm cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* GitHub link */}
            <motion.a
              href="https://github.com/habeebrahumanoffi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-5 py-3.5 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-slate-800 transition-colors shadow-md w-fit"
            >
              <FaGithub className="text-lg" />
              View My GitHub →
            </motion.a>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <div className="space-y-5">
              <p className="text-slate-700 text-lg leading-relaxed">
                Aspiring software engineer and{' '}
                <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-lg font-semibold text-sm">
                  B.Tech Artificial Intelligence and Data Science
                </span>{' '}
                student with strong{' '}
                <span className="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg font-semibold text-sm">
                  problem-solving skills
                </span>{' '}
                and a growing foundation in programming and development.
              </p>

              <p className="text-slate-700 text-lg leading-relaxed">
                Interested in building{' '}
                <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-lg font-semibold text-sm">
                  real-world applications
                </span>{' '}
                and exploring web development, cloud computing, app development, and software engineering.
              </p>

              <p className="text-slate-700 text-lg leading-relaxed">
                Focused on{' '}
                <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded-lg font-semibold text-sm">
                  learning, improving, and creating practical solutions
                </span>
                . Enjoy turning ideas into{' '}
                <span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded-lg font-semibold text-sm">
                  working projects
                </span>{' '}
                while continuously growing as a developer.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-indigo-100 via-purple-100 to-transparent" />

            {/* Fun fact or quote */}
            <div className="relative p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100/60">
              <div className="absolute -top-3 left-6">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-xs font-black">"</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed italic mt-1">
                I believe in learning by doing — every project is a chance to level up and discover
                what's possible. Currently on a mission to blend AI with impactful software solutions.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-black">
                  HR
                </div>
                <div>
                  <div className="text-slate-800 text-xs font-bold">Habeeb Rahuman M</div>
                  <div className="text-slate-400 text-xs">AI & DS Student</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
