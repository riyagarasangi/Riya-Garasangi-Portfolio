import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences, education } from '../lib/data';
import { fadeUp, staggerContainer, viewportConfig } from '../lib/animations';
import { FiBriefcase, FiBookOpen, FiMapPin, FiCalendar } from 'react-icons/fi';

type Tab = 'experience' | 'education';

const Timeline = () => {
  const [activeTab, setActiveTab] = useState<Tab>('experience');
  const [ref, inView] = useInView(viewportConfig);

  return (
    <section id="experience" className="relative py-28 lg:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            Journey
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Experience & <span className="gradient-text">Education</span>
          </motion.h2>
      
        </motion.div>

        {/* Tab Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            {([
              { key: 'experience' as Tab, icon: <FiBriefcase />, label: 'Experience' },
              { key: 'education' as Tab, icon: <FiBookOpen />, label: 'Education' },
            ] as const).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer
                  ${activeTab === tab.key
                    ? 'bg-accent-indigo/15 text-accent-blue shadow-[0_0_20px_rgba(99,102,241,0.15)]'
                    : 'text-text-secondary hover:text-text-primary'
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          {activeTab === 'experience' ? (
            <motion.div
              key="experience"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Center the vertical line + keep cards visually centered */}
              <div className="relative mx-auto border-l-2 border-white/[0.06] flex justify-center">
                <div className="w-full max-w-3xl relative pl-8">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={exp.company}
                      initial={{ opacity: 0, x: -18 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                      className="relative mb-12 last:mb-0"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-[calc(2rem+5px)] top-1.5 w-3 h-3 rounded-full bg-bg-primary border-2 border-accent-blue shadow-[0_0_12px_rgba(56,189,248,0.4)]" />

                      <div className="glass p-7 ml-2 rounded-[1.25rem] hover:shadow-[0_16px_48px_rgba(0,0,0,0.45)] transition-all duration-300">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-text-primary">{exp.role}</h3>
                            <p className="text-accent-blue font-semibold text-sm">{exp.company}</p>
                            <p className="text-xs text-text-muted mt-1">{exp.type}</p>
                          </div>
                          <div className="text-right space-y-1">
                            <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-md">
                              <FiCalendar size={11} />
                              {exp.duration}
                            </span>
                            <p className="text-xs text-text-muted flex items-center gap-1 justify-end">
                              <FiMapPin size={11} />
                              {exp.location}
                            </p>
                          </div>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {exp.bullets.map((b, j) => (
                            <li key={j} className="text-sm text-text-secondary leading-relaxed flex gap-2">
                              <span className="text-accent-blue mt-1.5 flex-shrink-0">▸</span>
                              {b}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((t) => (
                            <span key={t} className="tech-badge">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative mx-auto border-l-2 border-white/[0.06] flex justify-center">
                <div className="w-full max-w-3xl relative pl-8">
                  {education.map((edu, i) => (
                    <motion.div
                      key={edu.institution}
                      initial={{ opacity: 0, x: -18 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                      className="relative mb-12 last:mb-0"
                    >
                      <div className="absolute -left-[calc(2rem+5px)] top-1.5 w-3 h-3 rounded-full bg-bg-primary border-2 border-accent-purple shadow-[0_0_12px_rgba(168,85,247,0.4)]" />

                      <div className="glass p-7 ml-2 rounded-[1.25rem] hover:shadow-[0_16px_48px_rgba(0,0,0,0.45)] transition-all duration-300">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-text-primary">{edu.degree}</h3>
                            <p className="text-accent-purple font-semibold text-sm">{edu.institution}</p>
                          </div>
                          <div className="text-right space-y-1">
                            <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-md">
                              <FiCalendar size={11} />
                              {edu.duration}
                            </span>
                            <p className="text-sm font-bold text-accent-cyan">{edu.grade}</p>
                          </div>
                        </div>

                        {edu.highlights && (
                          <ul className="space-y-1.5 mt-3">
                            {edu.highlights.map((h, j) => (
                              <li key={j} className="text-sm text-text-secondary flex gap-2">
                                <span className="text-accent-purple mt-0.5 flex-shrink-0">▸</span>
                                {h}
                              </li>
                            ))}
                          </ul>
                        )}

                        <p className="text-xs text-text-muted mt-3 flex items-center gap-1">
                          <FiMapPin size={11} />
                          {edu.location}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Timeline;

