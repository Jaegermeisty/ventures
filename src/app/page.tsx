'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EntranceAnimation from '@/components/EntranceAnimation';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [isEntranceComplete, setIsEntranceComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Prevent scroll during entrance animation
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleEntranceComplete = () => {
    setIsEntranceComplete(true);
    document.body.style.overflow = '';
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Entrance Animation */}
      <EntranceAnimation onComplete={handleEntranceComplete} />

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Scroll progress bar */}
      {isEntranceComplete && <ScrollProgress />}

      {/* Navigation */}
      <Navigation isReady={isEntranceComplete} />

      {/* Main content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isEntranceComplete ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Hero isReady={isEntranceComplete} />

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <About />

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <Portfolio />

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <Contact />

        <Footer />
      </motion.main>
    </>
  );
}
