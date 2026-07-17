import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { testimonials } from '../lib/data';
import { fadeUp, staggerContainer, viewportConfig } from '../lib/animations';
import { FiMessageSquare } from 'react-icons/fi';

const Testimonials = () => {
  const [ref, inView] = useInView(viewportConfig);

  return (
    <section className="relative py-28 lg:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            Testimonials
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            What People <span className="gradient-text">Say</span>
          </motion.h2>
         
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.company + t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="glass p-6 flex flex-col"
            >
              {/* Quote icon */}
              <FiMessageSquare className="text-accent-blue/30 mb-4" size={28} />

              {/* Quote text */}
              <p className="text-sm text-text-secondary leading-relaxed italic flex-grow mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 
                              border border-white/[0.08] flex items-center justify-center
                              font-display font-bold text-sm text-accent-blue">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
