import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'
import { HiMapPin, HiCalendarDays } from 'react-icons/hi2'

const education = [
  {
    degree: 'B.Tech Artificial Intelligence and Data Science',
    institution: 'Dr. Mahalingam College of Engineering and Technology',
    period: '2024 – 2028',
    location: 'Pollachi, Tamil Nadu',
    icon: '🎓',
    gradient: 'from-indigo-600 to-purple-600',
    lightBg: 'bg-indigo-50',
    border: 'border-indigo-100',
    tag: 'Current',
    tagColor: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    details: [
      'Specialising in AI, Machine Learning, and Data Science',
      'Building full-stack projects with Python, React & Cloud',
      'Active participant in hackathons and coding contests',
    ],
  },
  {
    degree: 'HSC — Higher Secondary Certificate',
    institution: 'Ponnu Matriculation Higher Secondary School',
    period: '2022 – 2024',
    location: 'Dharapuram, Tamil Nadu',
    icon: '🏫',
    gradient: 'from-pink-500 to-rose-600',
    lightBg: 'bg-pink-50',
    border: 'border-pink-100',
    tag: 'Completed',
    tagColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    details: [
      'Focused on Computer Science and Mathematics',
      'Developed foundational programming skills',
      'Strong academic record with distinction',
    ],
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full text-slate-500 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <HiAcademicCap className="text-sm" />
            Academic Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Building knowledge, one milestone at a time.
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200 rounded-full" />

          <div className="space-y-10 md:space-y-0">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`relative md:flex md:items-start md:gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } mb-12 md:mb-16`}
              >
                {/* Card */}
                <div className="md:w-[calc(50%-3rem)] w-full">
                  <motion.div
                    whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
                    className={`bg-white rounded-3xl overflow-hidden border ${edu.border} shadow-lg transition-all duration-300`}
                  >
                    {/* Top Banner */}
                    <div className={`h-20 bg-gradient-to-r ${edu.gradient} relative flex items-center px-6 overflow-hidden`}>
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                          backgroundSize: '16px 16px',
                        }}
                      />
                      <span className="text-4xl mr-4 relative z-10">{edu.icon}</span>
                      <div className="relative z-10">
                        <div className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold border ${edu.tagColor} bg-white/90 mb-1`}>
                          {edu.tag}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1.5 leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="font-semibold text-slate-600 text-sm mb-3">
                        {edu.institution}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-4">
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                          <HiCalendarDays className="text-indigo-400" />
                          <span className="font-medium">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                          <HiMapPin className="text-pink-400" />
                          <span className="font-medium">{edu.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-1.5">
                        {edu.details.map((d, di) => (
                          <motion.li
                            key={d}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: i * 0.2 + di * 0.08 + 0.4 }}
                            className="flex items-start gap-2 text-slate-500 text-xs"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 mt-1.5 flex-shrink-0" />
                            {d}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10 mt-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.2 + 0.3, type: 'spring', stiffness: 300 }}
                    className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${edu.gradient} shadow-lg flex items-center justify-center`}
                  >
                    <HiAcademicCap className="text-white text-lg" />
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
