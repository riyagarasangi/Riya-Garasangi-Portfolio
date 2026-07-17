import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { achievements } from '../lib/data';
import { fadeUp, staggerContainer, viewportConfig } from '../lib/animations';

const Achievements = () => {
  const [ref, inView] = useInView(viewportConfig);

  return (
    <section id="achievements" className="relative py-28 lg:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            Achievements
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Recognition & <span className="gradient-text">Milestones</span>
          </motion.h2>
      
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="glass p-6 flex gap-5 items-start"
            >
              {/* Icon */}
              <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${ach.color} 
                              flex items-center justify-center text-2xl border border-white/[0.06]`}>
                {ach.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-bold text-lg text-text-primary mb-2">{ach.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{ach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
