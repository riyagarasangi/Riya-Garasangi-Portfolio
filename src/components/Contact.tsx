import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { socialLinks } from '../lib/data';
import { fadeUp, slideLeft, slideRight, staggerContainer, viewportConfig } from '../lib/animations';
import {
  FiSend,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiDownload,
  FiCheckCircle,
  FiAlertCircle,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi';
import Button from './Button';

const isValidEmail = (email: string) => {
  const v = email.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
};

const Contact = () => {
  const [sectionRef, inView] = useInView(viewportConfig);
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Anti-spam Honey Pot field state
  const [honeyPot, setHoneyPot] = useState('');

  const [formError, setFormError] = useState<string>('');

  const openMailClientFallback = (payload: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    const subject = payload.subject;
    const body = `Name: ${payload.name}\nEmail: ${payload.email}\nMessage: ${payload.message}`;

    // Recruiter email (your own inbox)
    const to = socialLinks.email;

    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body
    )}`;

    // Using window.open prevents blocking on some browsers
    window.open(mailto, '_self');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Prevent duplicate sends
    if (sending) return;

    // Silently ignore bot submissions filling the honey pot
    if (honeyPot !== '') {
      formRef.current.reset();
      setHoneyPot('');
      return;
    }

    setFormError('');

    const formEl = formRef.current;

    const fromNameValue = (formEl.from_name?.value ?? '').toString();
    const fromEmailValue = (formEl.from_email?.value ?? '').toString();
    const subjectValue = (formEl.subject?.value ?? '').toString();
    const messageValue = (formEl.message?.value ?? '').toString();

    // Validation (no mock success)
    if (!fromNameValue.trim()) {
      setStatus('error');
      setFormError('Name is required.');
      return;
    }

    if (!fromEmailValue.trim() || !isValidEmail(fromEmailValue)) {
      setStatus('error');
      setFormError('Please enter a valid email.');
      return;
    }

    if (!subjectValue.trim()) {
      setStatus('error');
      setFormError('Subject is required.');
      return;
    }

    if (!messageValue.trim()) {
      setStatus('error');
      setFormError('Message is required.');
      return;
    }

    setSending(true);
    setStatus('idle');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

      const missingService = !serviceId;
      const missingTemplate = !templateId;
      const missingPublicKey = !publicKey;

      // If any env var is missing, fall back to mailto
      if (missingService || missingTemplate || missingPublicKey) {
        openMailClientFallback({
          name: fromNameValue.trim(),
          email: fromEmailValue.trim(),
          subject: subjectValue.trim(),
          message: messageValue.trim(),
        });

        setStatus('error');
        setFormError(
          'EmailJS is not configured on this site. Your email client has been opened—please send the message from there.'
        );
        return;
      }

      // Send using EmailJS (keep template variable names)
      await emailjs.sendForm(
        serviceId,
        templateId,
        formEl,
        publicKey
      );

      setStatus('success');
      setFormError('');
      // Reset the form only after a successful send
      formEl.reset();
      setHoneyPot('');
    } catch (err) {
      const e = err as unknown;
      const msg = e instanceof Error ? e.message : JSON.stringify(e);
      setStatus('error');
      setFormError(msg || 'Failed to send message.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 lg:py-32">
      <div className="bg-glow bg-glow-purple w-[400px] h-[400px] bottom-0 right-0 opacity-15 absolute" />

      <div className="section-container" ref={sectionRef}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            Contact
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>

        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — Contact Info Card */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideLeft}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass p-6 space-y-4">
              <h3 className="font-display font-bold text-lg mb-4">Contact Details</h3>

              {/* Location */}
              <a
                href="https://maps.google.com/?q=Pune,Maharashtra,India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group text-text-secondary hover:text-accent-blue transition-colors focus:outline-none focus:ring-1 focus:ring-accent-blue/30 rounded p-1"
                aria-label="Location Pune, Maharashtra, India"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/15 flex items-center justify-center text-accent-blue group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium">Pune, Maharashtra, India</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center gap-4 group text-text-secondary hover:text-accent-blue transition-colors focus:outline-none focus:ring-1 focus:ring-accent-blue/30 rounded p-1"
                aria-label="Email riyagarasangi@gmail.com"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/15 flex items-center justify-center text-accent-blue group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all">
                  <FiMail size={18} />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium">{socialLinks.email}</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919823031277"
                className="flex items-center gap-4 group text-text-secondary hover:text-accent-blue transition-colors focus:outline-none focus:ring-1 focus:ring-accent-blue/30 rounded p-1"
                aria-label="Phone +91 98230 31277"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/15 flex items-center justify-center text-accent-blue group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all">
                  <FiPhone size={18} />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-medium">+91-9823031277</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group text-text-secondary hover:text-accent-blue transition-colors focus:outline-none focus:ring-1 focus:ring-accent-blue/30 rounded p-1"
                aria-label="LinkedIn Profile"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/15 flex items-center justify-center text-accent-blue group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all">
                  <FiLinkedin size={18} />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">LinkedIn</p>
                  <p className="text-sm font-medium">Riya Garasangi</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group text-text-secondary hover:text-accent-blue transition-colors focus:outline-none focus:ring-1 focus:ring-accent-blue/30 rounded p-1"
                aria-label="GitHub Profile"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/15 flex items-center justify-center text-accent-blue group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all">
                  <FiGithub size={18} />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">GitHub</p>
                  <p className="text-sm font-medium">riyagarasangi</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group text-text-secondary hover:text-accent-blue transition-colors focus:outline-none focus:ring-1 focus:ring-accent-blue/30 rounded p-1"
                aria-label="Instagram Profile"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/15 flex items-center justify-center text-accent-blue group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all">
                  <FiInstagram size={18} />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">Instagram</p>
                  <p className="text-sm font-medium">riyagarasangi</p>
                </div>
              </a>

              {/* Resume download row */}
              <a
                href={socialLinks.resume}
                download="Riya_Garasangi_resume.pdf"
                className="flex items-center gap-4 group text-text-secondary hover:text-accent-blue transition-colors focus:outline-none focus:ring-1 focus:ring-accent-blue/30 rounded p-1"
                aria-label="Download Resume"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/15 flex items-center justify-center text-accent-blue group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all">
                  <FiDownload size={18} />
                </div>
                <div>
                <p className="text-xs text-text-muted uppercase tracking-wider">Resume</p>
                <p className="text-sm font-medium">Download Latest PDF</p>



              </div>
            </a>

            </div>

            {/* Resume button for additional emphasis */}
            <a
              href={socialLinks.resume}
              download="Riya_Garasangi_resume.pdf"
              className="inline-flex w-full focus:outline-none"
            >
              <Button
                variant="primary"
                className="w-full py-3 justify-center"
                icon={<FiDownload size={18} />}
              >
                Download Resume
              </Button>
            </a>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideRight}
            className="lg:col-span-3 w-full"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 space-y-6">
              
              {/* Spam Protection Honeypot Field (invisible to user) */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  value={honeyPot}
                  onChange={(e) => setHoneyPot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="form-label">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="from_name"
                    required
                    placeholder="Your name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="form-label">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="from_email"
                    required
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="form-label">
                  Subject
                </label>
                <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    className="form-input"
                  />
              </div>

              <div>
                <label htmlFor="contact-message" className="form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="Tell me about the opportunity or project..."
                  className="form-input"
                  rows={5}
                />
              </div>

              {/* Status Alerts */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-4 py-3 rounded-lg"
                >
                  <FiCheckCircle className="flex-shrink-0" /> Message sent successfully
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="flex items-start gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 px-4 py-3 rounded-lg"
                >
                  <FiAlertCircle className="flex-shrink-0 mt-0.5" />
                  <span>
                    {formError || 'Unable to send message right now. Please try again or email me directly.'}
                  </span>
                </motion.div>
              )}

              <Button
                type="submit"
                loading={sending}
                disabled={sending}
                className="w-full py-3.5 justify-center"
                icon={sending ? undefined : <FiSend size={16} />}
              >
                {sending ? 'Sending…' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

