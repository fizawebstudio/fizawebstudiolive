import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services, { Process } from '@/components/Services';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SocialRail from '@/components/SocialRail';

function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      frame = 0;
    };
    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(updateProgress);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame !== 0) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-accent-500 via-accent-300 to-accent-500 will-change-transform"
        style={{ transform: 'scaleX(0)', transformOrigin: 'left' }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink-900">
      <ScrollProgress />
      <SocialRail />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Projects />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
