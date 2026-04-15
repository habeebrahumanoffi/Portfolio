import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaTrophy, FaMedal } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'

const achievements = [
  {
    icon: FaTrophy,
    title: '1st Place — State-Level Hackathon',
    event: 'SRM Chennai',
    description:
      'Won first place at a state-level hackathon hosted by SRM Institute of Science and Technology, Chennai — competing against teams across Tamil Nadu.',
    gradient: 'from-amber-400 to-orange-500',
    lightBg: 'from-amber-50 to-orange-50',
    border: 'border-amber-200',
    iconColor: 'text-amber-500',
    badge: '🥇 1st Place',
    badgeStyle: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    icon: FaMedal,
    title: 'SDG Hackathon Participant',
    event: 'TN Startup & KSRCE Collaboration',
    description:
      'Participated in the Sustainable Development Goals (SDG) Hackathon, a collaborative initiative between Tamil Nadu Startup and KSRCE, addressing real-world sustainability challenges.',
    gradient: 'from-indigo-500 to-purple-600',
    lightBg: 'from-indigo-50 to-purple-50',
    border: 'border-indigo-200',
    iconColor: 'text-indigo-500',
    badge: '🌍 Participant',
    badgeStyle: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
]

const confetti = ['✨', '🎉', '⭐', '💫', '🌟', '🎊']

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />

      {/* Floating confetti */}
      {confetti.map((c, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + i * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.6,
          }}
          className="absolute text-2xl pointer-events-none select-none opacity-40"
          style={{
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
        >
          {c}
        </motion.div>
      ))}

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-amber-600 text-xs font-bold tracking-widest uppercase mb-4">
            <HiSparkles className="text-sm" />
            Milestones
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Highlights from competitions, hackathons, and community events.
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
          </div>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, boxShadow: '0 24px 48px rgba(0,0,0,0.10)' }}
              className={`group relative bg-gradient-to-br ${ach.lightBg} rounded-3xl p-0.5 border ${ach.border} shadow-lg transition-all duration-300 overflow-hidden cursor-default`}
            >
              {/* Inner card */}
              <div className="bg-white rounded-[calc(1.5rem-2px)] p-7 h-full">

                {/* Icon + badge row */}
                <div className="flex items-start justify-between mb-5">
                  <motion.div
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 1.5 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ach.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <ach.icon className="text-white text-2xl" />
                  </motion.div>

                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${ach.badgeStyle}`}>
                    {ach.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-black text-slate-900 mb-1 leading-snug group-hover:text-indigo-700 transition-colors">
                  {ach.title}
                </h3>
                <p className={`text-sm font-semibold mb-3 ${ach.iconColor}`}>
                  @ {ach.event}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {ach.description}
                </p>

                {/* Bottom sparkle */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : {}}
                  transition={{ delay: i * 0.2 + 0.5, duration: 0.8 }}
                  className={`mt-5 h-0.5 rounded-full bg-gradient-to-r ${ach.gradient}`}
                />
              </div>

              {/* Corner glow */}
              <div
                className={`absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${ach.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
              />
            </motion.div>
          ))}
        </div>

        {/* More coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-slate-500 text-sm font-medium">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
            More achievements on the way — stay tuned!
          </div>
        </motion.div>
      </div>
    </section>
  )
}
