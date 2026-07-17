import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutText, aboutHighlights } from '../lib/data';
import { fadeUp, slideLeft, slideRight, staggerContainer, viewportConfig } from '../lib/animations';

const About = () => {
  const [ref, inView] = useInView(viewportConfig);

  return (
    <section id="about" className="relative py-28 lg:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid lg:grid-cols-5 gap-16 items-start"
        >
          {/* Left Column — Photo + Highlights */}
          <motion.div variants={slideLeft} className="lg:col-span-2 space-y-8">
            {/* Photo */}
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-accent-blue/20 via-accent-indigo/20 to-accent-purple/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08]">
                <img
                  src="/images/Riyaphoto.jpg"
                  alt="Riya Garasangi — Software Engineer"
                  className="w-full aspect-[4/5] object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display font-bold text-lg">Riya Garasangi</p>
                  <p className="text-sm text-text-secondary">Software Engineer · MIT AOE '26</p>
                </div>
              </div>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 gap-3">
              {aboutHighlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  custom={i}
                  variants={fadeUp}
                  className="glass p-4 text-center"
                >
                  <span className="text-2xl mb-2 block">{h.icon}</span>
                  <p className="text-sm font-semibold text-text-primary">{h.label}</p>
                  <p className="text-xs text-text-muted mt-1">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Bio */}
          <motion.div variants={slideRight} className="lg:col-span-3">
            <span className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
              About Me
            </span>

            <h2 className="section-title">
              Turning complex problems into
              <span className="gradient-text"> elegant solutions.</span>
            </h2>

            <div className="space-y-5 mt-8">
              {aboutText.map((paragraph, i) => (
                <motion.p
                  key={i}
                  custom={i + 2}
                  variants={fadeUp}
                  className="text-text-secondary leading-relaxed text-[0.95rem]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Quick Stats Row */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/[0.06]"
            >
              {[
                { value: '9.19', label: 'CGPA' },
                { value: '4+', label: 'Internships' },
                { value: '20+', label: 'Technologies' },
                { value: '1', label: 'Hackathon Win' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold gradient-text font-display">{s.value}</p>
                  <p className="text-xs text-text-muted uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
