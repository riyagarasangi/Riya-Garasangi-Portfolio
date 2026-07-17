import { socialLinks, navLinks } from '../lib/data';
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';


const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.04] bg-bg-primary/80">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">

          
          {/* Left — Brand */}
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold gradient-text-animated mb-2">RG</p>
            <p className="text-sm text-text-muted">
              Software Engineer · Building scalable systems.
            </p>
          </div>

          {/* Center — Quick Nav */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-text-muted hover:text-accent-blue transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent-blue/30 rounded px-1"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right — Social */}
          <div className="flex justify-center md:justify-end gap-3">
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
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-sm text-text-muted flex items-center justify-center gap-1.5">
            Made by
            <span className="text-text-primary font-medium">Riya Garasangi</span>
          </p>
          <p className="text-xs text-text-muted/50 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
