import { useState, useCallback } from 'react';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import WhyHireMe from './components/WhyHireMe';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      <Loader onComplete={handleLoadComplete} />

      {!loading && (
        <>
          <ScrollProgress />
          <CursorGlow />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Stats />
            <Timeline />
            <Skills />
            <Projects />
            <Achievements />
            <Certifications />
            <WhyHireMe />
            <Testimonials />
            <Contact />
          </main>

          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
};

export default App;
