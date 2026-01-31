'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

interface HeroProps {
  isReady: boolean;
}

export default function Hero({ isReady }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isReady) return;

    const tl = gsap.timeline({ delay: 0.2 });

    // Animate logo letters
    if (logoRef.current) {
      const letters = logoRef.current.querySelectorAll('.letter');
      tl.fromTo(
        letters,
        { y: 100, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: 'back.out(1.7)',
        }
      );
    }

    // Animate tagline
    tl.fromTo(
      taglineRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    );

    // Animate scroll indicator
    tl.fromTo(
      scrollIndicatorRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.2'
    );

    return () => {
      tl.kill();
    };
  }, [isReady]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX - innerWidth / 2) / innerWidth,
        y: (clientY - innerHeight / 2) / innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const logoText = 'Jæger-Pedersen Ventures';

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient blob */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] gradient-blob"
        animate={{
          x: mousePosition.x * 30,
          y: mousePosition.y * 20,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="grid-line grid-line-vertical absolute left-1/4 top-0" />
        <div className="grid-line grid-line-vertical absolute left-1/2 top-0" />
        <div className="grid-line grid-line-vertical absolute left-3/4 top-0" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1
          ref={logoRef}
          className="logo-text text-5xl md:text-7xl lg:text-8xl mb-8 overflow-hidden flex flex-wrap justify-center gap-x-[0.3em] pb-4"
          style={{ perspective: '1000px' }}
        >
          {logoText.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="inline-flex whitespace-nowrap">
              {word.split('').map((char, charIndex) => (
                <span
                  key={`${wordIndex}-${charIndex}`}
                  className="letter inline-block"
                  style={{ opacity: 0 }}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p
          ref={taglineRef}
          className="font-body text-xl md:text-2xl text-muted max-w-2xl mx-auto opacity-0"
        >
          Crafting <span className="text-accent italic">digital experiences</span> that
          <br className="hidden md:block" /> elevate your vision
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0"
      >
        <span className="font-body text-sm text-muted tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-accent to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating accent dots */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-accent animate-pulse-glow"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 rounded-full bg-accent"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </section>
  );
}
