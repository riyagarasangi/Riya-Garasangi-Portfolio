import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../lib/data';
import { fadeUp, staggerContainer, viewportConfig } from '../lib/animations';
import { FiGithub, FiExternalLink, FiChevronRight } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView(viewportConfig);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-28 lg:py-32">
      <div className="bg-glow bg-glow-blue w-[500px] h-[500px] -bottom-40 left-0 opacity-15 absolute" />

      <div className="section-container" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            Projects
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
     
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className="glass overflow-hidden group flex flex-col h-full relative"
            >
              {/* Image Header */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-bg-secondary border-b border-white/[0.05]">
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent z-10 pointer-events-none" />
                
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {project.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full
                                   bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg z-20">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold font-display mb-1 text-text-primary group-hover:text-accent-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-accent-blue font-semibold mb-4">{project.tagline}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                {/* Expandable Details Wrapper */}
                <div className="flex-1 mb-6">
                  <AnimatePresence initial={false} mode="wait">
                    {expanded === project.title ? (
                      <motion.div
                        key="expanded"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                          <div>
                            <p className="text-xs text-accent-purple font-bold uppercase tracking-wider mb-1">Problem</p>
                            <p className="text-sm text-text-secondary leading-relaxed">{project.problem}</p>
                          </div>
                          <div>
                            <p className="text-xs text-accent-blue font-bold uppercase tracking-wider mb-1">Solution</p>
                            <p className="text-sm text-text-secondary leading-relaxed">{project.solution}</p>
                          </div>
                          <div>
                            <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">Impact</p>
                            <p className="text-sm text-text-secondary leading-relaxed">{project.impact}</p>
                          </div>
                          <div>
                            <p className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">Key Features</p>
                            <ul className="space-y-1">
                              {project.features.map((f, j) => (
                                <li key={j} className="text-sm text-text-secondary flex gap-2">
                                  <span className="text-accent-blue flex-shrink-0">▸</span>
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.p 
                        key="collapsed"
                        className="text-sm text-text-secondary leading-relaxed line-clamp-3"
                      >
                        {project.problem}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Actions (pushed to bottom) */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] mt-auto">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-accent-blue transition-colors focus:outline-none focus:ring-1 focus:ring-accent-blue/30 rounded px-1"
                    >
                      <FiGithub size={16} />
                      Code
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-accent-blue transition-colors focus:outline-none focus:ring-1 focus:ring-accent-blue/30 rounded px-1"
                      >
                        <FiExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => setExpanded(expanded === project.title ? null : project.title)}
                    className="inline-flex items-center gap-1 text-sm font-bold text-accent-blue hover:text-accent-cyan transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent-blue/30 rounded px-1"
                    aria-expanded={expanded === project.title}
                  >
                    {expanded === project.title ? 'Less' : 'Details'}
                    <motion.span
                      animate={{ rotate: expanded === project.title ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                    >
                      <FiChevronRight size={15} />
                    </motion.span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
