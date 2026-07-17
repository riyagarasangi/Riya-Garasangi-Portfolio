import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certifications } from '../lib/data';
import { fadeUp, staggerContainer, viewportConfig } from '../lib/animations';
import { FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
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
            Certifications
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Professional <span className="gradient-text">Certifications</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-6 mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="glass p-6 flex flex-col"
            >
              <span className="text-3xl mb-4">{cert.icon}</span>
              <p className="text-xs font-bold uppercase tracking-wider text-accent-blue mb-2">{cert.issuer}</p>
              <h3 className="font-display font-bold text-text-primary mb-2 flex-grow">{cert.title}</h3>
              <p className="text-sm text-text-muted mb-4">{cert.date}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-cyan transition-colors"
                >
                  <FiExternalLink size={14} />
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
