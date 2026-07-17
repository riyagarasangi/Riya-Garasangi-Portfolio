import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { whyHireMe } from '../lib/data';
import { fadeUp, staggerContainer, viewportConfig } from '../lib/animations';

const WhyHireMe = () => {
  const [ref, inView] = useInView(viewportConfig);

  return (
    <section className="relative py-28 lg:py-32">
      <div className="bg-glow bg-glow-blue w-[400px] h-[400px] top-0 left-0 opacity-15 absolute" />

      <div className="section-container" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            Strengths
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Why <span className="gradient-text">Hire Me?</span>
          </motion.h2>
    
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyHireMe.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              className="glass p-5 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-display font-bold text-text-primary mb-1.5">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
