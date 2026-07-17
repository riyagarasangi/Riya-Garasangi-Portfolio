import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../lib/data';
import { fadeUp, staggerContainer, viewportConfig } from '../lib/animations';

const Skills = () => {
  const [ref, inView] = useInView(viewportConfig);

  return (
    <section id="skills" className="relative py-28 lg:py-32">
      {/* Background glow */}
      <div className="bg-glow bg-glow-purple w-[500px] h-[500px] top-0 right-0 opacity-15 absolute" />

      <div className="section-container" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            Skills
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Technologies I <span className="gradient-text">work with</span>
          </motion.h2>
    
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * catIndex, duration: 0.5 }}
              className="glass p-6"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.06]">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-display font-bold text-text-primary">{cat.title}</h3>
              </div>

              {/* Skills with progress bars */}
              <div className="space-y-4">
                {cat.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-text-secondary">{skill.name}</span>
                      <span className="text-xs font-mono text-text-muted">{skill.level}%</span>
                    </div>
                    <div className="progress-track">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05,
                          duration: 1.2,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
