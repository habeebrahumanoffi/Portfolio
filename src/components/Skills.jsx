import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiC, SiCplusplus, SiOpenjdk, SiPython, SiJavascript, SiR,
  SiGit, SiMysql, SiReact
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import { FaBrain, FaComments, FaUsers, FaLightbulb } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'
import { HiWrench } from 'react-icons/hi2'

const skillGroups = [
  {
    title: 'Programming',
    icon: HiCode,
    gradient: 'from-indigo-500 to-purple-600',
    lightBg: 'bg-indigo-50',
    border: 'border-indigo-100',
    textColor: 'text-indigo-600',
    shadowColor: 'shadow-indigo-100',
    skills: [
      { name: 'C', icon: SiC, color: 'text-blue-600', bg: 'bg-blue-50' },
      { name: 'C++', icon: SiCplusplus, color: 'text-blue-700', bg: 'bg-blue-50' },
      { name: 'Java', icon: SiOpenjdk, color: 'text-orange-600', bg: 'bg-orange-50' },
      { name: 'Python', icon: SiPython, color: 'text-yellow-600', bg: 'bg-yellow-50' },
      { name: 'R', icon: SiR, color: 'text-sky-600', bg: 'bg-sky-50' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500', bg: 'bg-yellow-50' },
    ],
  },
  {
    title: 'Tech & Tools',
    icon: HiWrench,
    gradient: 'from-pink-500 to-rose-600',
    lightBg: 'bg-pink-50',
    border: 'border-pink-100',
    textColor: 'text-pink-600',
    shadowColor: 'shadow-pink-100',
    skills: [
      { name: 'Git', icon: SiGit, color: 'text-orange-600', bg: 'bg-orange-50' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-600', bg: 'bg-blue-50' },
      { name: 'React JS', icon: SiReact, color: 'text-cyan-500', bg: 'bg-cyan-50', badge: 'Basic' },
      { name: 'AWS', icon: FaAws, color: 'text-orange-500', bg: 'bg-orange-50', badge: 'Basic' },
    ],
  },
  {
    title: 'Core Skills',
    icon: FaBrain,
    gradient: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-emerald-50',
    border: 'border-emerald-100',
    textColor: 'text-emerald-600',
    shadowColor: 'shadow-emerald-100',
    skills: [
      { name: 'Problem Solving', icon: FaLightbulb, color: 'text-amber-500', bg: 'bg-amber-50' },
      { name: 'Quick Learner', icon: FaBrain, color: 'text-indigo-500', bg: 'bg-indigo-50' },
      { name: 'Communication', icon: FaComments, color: 'text-teal-500', bg: 'bg-teal-50' },
      { name: 'Leadership', icon: FaUsers, color: 'text-purple-500', bg: 'bg-purple-50' },
    ],
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, type: 'spring', stiffness: 250, damping: 18 },
  }),
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full text-slate-500 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            What I Know
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A growing toolkit — always learning, always building.
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full" />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={item}
              whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.10)' }}
              className={`bg-white rounded-3xl p-7 border ${group.border} shadow-lg ${group.shadowColor} transition-all duration-300 cursor-default`}
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${group.gradient} flex items-center justify-center shadow-md`}>
                  <group.icon className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-black text-slate-900">{group.title}</h3>
              </div>

              {/* Divider */}
              <div className={`h-px ${group.lightBg} mb-6`} />

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    custom={i}
                    variants={badgeVariants}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className={`flex items-center gap-2 px-3 py-2 ${skill.bg} rounded-xl border border-white shadow-sm cursor-default`}
                  >
                    <skill.icon className={`text-base ${skill.color}`} />
                    <span className="text-slate-700 text-xs font-semibold">{skill.name}</span>
                    {skill.badge && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-white rounded-full text-slate-500 font-medium border border-slate-200">
                        {skill.badge}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-slate-400 text-sm mt-10 font-medium"
        >
          🚀 Always learning something new every day
        </motion.p>
      </div>
    </section>
  )
}
