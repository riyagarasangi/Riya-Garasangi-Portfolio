import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { heroRoles, heroHighlights, socialLinks } from '../lib/data';
import { fadeUp } from '../lib/animations';
import { FiDownload, FiArrowRight, FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import ParticleBackground from './ParticleBackground';
import Button from './Button';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typeRole = useCallback(() => {
    const currentRole = heroRoles[roleIndex];
    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 85);
      } else {
        setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayText.length > 0) {
        setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length - 1)), 45);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % heroRoles.length);
      }
    }
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const timeout = setTimeout(typeRole, 0);
    return () => clearTimeout(timeout);
  }, [typeRole]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background effects */}
      <ParticleBackground />
      <div className="bg-glow bg-glow-blue w-[500px] h-[500px] -top-20 -left-20 opacity-30 absolute" />
      <div className="bg-glow bg-glow-purple w-[400px] h-[400px] top-1/2 right-0 opacity-20 absolute" />

      <div className="relative z-10 section-container w-full py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left — Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
            className="flex flex-col items-start justify-center text-left"
          >
            {/* Status Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                             bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm text-text-secondary font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)] animate-pulse animate-duration-1000" />
                Open to opportunities · 2026 Graduate
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p variants={fadeUp} className="text-text-secondary text-base sm:text-lg mb-2 font-semibold uppercase tracking-wider">
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="hero-title mb-4 font-black tracking-tight"
            >
              <span className="gradient-text-animated">Riya</span>
              <br />
              <span className="text-text-primary">Garasangi</span>
            </motion.h1>

            {/* Typing Role */}
            <motion.div
              variants={fadeUp}
              className="mb-6 min-h-[40px] flex items-center"
            >
              <span className="text-lg sm:text-xl lg:text-2xl font-mono text-accent-blue font-bold tracking-wide">
                {displayText}
                <span className="typing-cursor" />
              </span>
            </motion.div>

            {/* Highlight Badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 mb-8 w-full">
              {heroHighlights.map((h) => (
                <span
                  key={h.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl
                             bg-white/[0.03] border border-white/[0.06]
                             text-xs font-semibold text-text-secondary"
                >
                  <span className="text-sm">{h.value}</span>
                  {h.label}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-8 w-full">
              <a
                href={socialLinks.resume}
                download="Riya_Garasangi_resume.pdf"
                className="inline-flex focus:outline-none"
              >
                <Button
                  variant="primary"
                  icon={<FiDownload size={18} />}
                >
                  Download Latest Resume
                </Button>

              </a>
              <Button
                variant="outline"
                onClick={() => scrollTo('projects')}
              >
                <span>View Projects</span>
                <FiArrowRight size={16} className="ml-1" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo('contact')}
                icon={<FiMail size={16} />}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Connects */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <span className="text-xs text-text-muted uppercase tracking-widest font-bold">Connect</span>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
              >
                <FiGithub size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram Profile"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="social-btn"
                aria-label="Send Email"
              >
                <FiMail size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Code Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block w-full"
          >
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-blue/10 via-accent-indigo/10 to-accent-purple/10 rounded-2xl blur-2xl opacity-60" />

              {/* Code window */}
              <div className="relative glass-static p-6 rounded-2xl border border-white/[0.08]">
                {/* Window bar */}
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.06]">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-text-muted font-mono">riya_garasangi.java</span>
                </div>

                {/* Code content */}
                <div className="font-mono text-sm leading-relaxed space-y-0.5">
                  <p><span className="text-purple-400">package</span> <span className="text-text-secondary">com.riya.developer</span>;</p>
                  <p className="mt-3"><span className="text-purple-400">public class</span> <span className="text-accent-blue">SoftwareEngineer</span> {'{'}</p>
                  <p className="pl-6"><span className="text-purple-400">private final</span> String name = <span className="text-green-400">"Riya Garasangi"</span>;</p>
                  <p className="pl-6"><span className="text-purple-400">private final</span> <span className="text-accent-cyan">double</span> cgpa = <span className="text-orange-400">9.19</span>;</p>
                  <p className="pl-6"><span className="text-purple-400">private final</span> String[] stack = {'{'}</p>
                  <p className="pl-10"><span className="text-green-400">"Java"</span>, <span className="text-green-400">"Spring Boot"</span>,</p>
                  <p className="pl-10"><span className="text-green-400">"AWS"</span>, <span className="text-green-400">"React"</span></p>
                  <p className="pl-6">{'}'};</p>
                  <p className="mt-3 pl-6"><span className="text-purple-400">public void</span> <span className="text-yellow-300">buildSolutions</span>() {'{'}</p>
                  <p className="pl-10">System.out.println(</p>
                  <p className="pl-14"><span className="text-green-400">"Building scalable systems..."</span></p>
                  <p className="pl-10">);</p>
                  <p className="pl-6">{'}'}</p>
                  <p>{'}'}</p>
                </div>

                {/* Floating tech badges */}
                <motion.span
                  className="absolute -top-3 -right-3 tech-badge shadow-lg !bg-accent-blue/15 !border-accent-blue/25"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                >
                  Java
                </motion.span>
                <motion.span
                  className="absolute -bottom-3 -left-3 tech-badge shadow-lg !bg-purple-500/15 !border-purple-500/25 !text-purple-400"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                >
                  React
                </motion.span>
                <motion.span
                  className="absolute top-1/2 -right-4 tech-badge shadow-lg !bg-green-500/15 !border-green-500/25 !text-green-400"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                >
                  Spring Boot
                </motion.span>
                <motion.span
                  className="absolute -top-3 left-1/3 tech-badge shadow-lg !bg-cyan-500/15 !border-cyan-500/25 !text-cyan-400"
                  animate={{ x: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                >
                  AWS
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
