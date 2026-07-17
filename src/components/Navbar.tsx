import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, socialLinks } from '../lib/data';
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map((l) => l.href);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold to match navbar height + section offset
          if (rect.top <= 140) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on load to set initial active section
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      setMobileOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500
        ${scrolled
          ? 'bg-bg-primary/75 backdrop-blur-xl border-b border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-12 relative">
          
          {/* Logo - Perfectly Aligned Left */}
          <div className="flex-1 flex justify-start items-center">
            <button
              onClick={() => scrollTo('home')}
              className="relative group cursor-pointer flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 rounded-lg p-1"
              aria-label="Riya Garasangi Home"
            >
              <span className="font-display text-2xl font-black gradient-text-animated">
                RG
              </span>
              <span className="text-sm text-text-secondary font-semibold hidden md:inline group-hover:text-text-primary transition-colors">
                Riya Garasangi
              </span>
            </button>
          </div>

          {/* Desktop Nav - Perfectly Centered */}
          <div className="hidden lg:flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative py-2 text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-blue/30 rounded-md px-1
                  ${activeSection === link.href
                    ? 'text-accent-blue'
                    : 'text-text-secondary hover:text-text-primary'
                  }`}
              >
                <span className="relative z-10">{link.label}</span>
                {activeSection === link.href && (
                  <motion.span
                    layoutId="activeNavUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-indigo rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Socials & Menu Toggle - Perfectly Aligned Right */}
          <div className="flex-1 flex justify-end items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn hidden md:inline-flex"
              aria-label="GitHub Profile"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn hidden md:inline-flex"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin size={18} />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden social-btn cursor-pointer"
              aria-label={mobileOpen ? "Close main menu" : "Open main menu"}
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-bg-primary/95 backdrop-blur-2xl border-t border-white/[0.05] overflow-hidden shadow-2xl"
          >
            <div className="section-container py-6 space-y-2">
              {navLinks.map((link, idx) => (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`block w-full text-left px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer
                    ${activeSection === link.href
                      ? 'text-accent-blue bg-accent-blue/10 border-l-4 border-accent-blue pl-3'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.03]'
                    }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-4 flex gap-4 border-t border-white/[0.05] mt-4 px-4">
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
