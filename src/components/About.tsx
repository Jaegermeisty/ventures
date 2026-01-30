'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-accent/50 to-transparent" />

      <motion.div
        className="max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="font-body text-accent text-sm tracking-[0.3em] uppercase">
            About
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight"
        >
          Building the{' '}
          <span className="text-accent italic">digital future</span>,<br />
          one project at a time
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-12 md:gap-16"
        >
          <div>
            <p className="font-body text-lg md:text-xl text-muted leading-relaxed mb-6">
              Jæger-Pedersen Ventures is a Norwegian sole proprietorship dedicated to
              crafting exceptional digital products. We specialize in creating
              websites and iOS applications that combine thoughtful design with
              technical excellence.
            </p>
            <p className="font-body text-lg md:text-xl text-muted leading-relaxed">
              Every project is approached with meticulous attention to detail,
              ensuring that the end result is not just functional, but truly
              memorable.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-l-2 border-accent/30 pl-6">
              <h3 className="font-display text-2xl mb-2">Web Development</h3>
              <p className="font-body text-muted">
                Modern, responsive websites built with cutting-edge technologies.
                From landing pages to complex web applications.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-6">
              <h3 className="font-display text-2xl mb-2">iOS Apps</h3>
              <p className="font-body text-muted">
                Native iOS applications designed for performance and user
                experience. Widgets, apps, and everything in between.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats or highlights */}
        <motion.div
          variants={itemVariants}
          className="mt-20 pt-12 border-t border-border"
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <span className="block font-display text-4xl md:text-5xl text-accent mb-2">
                2
              </span>
              <span className="font-body text-sm text-muted uppercase tracking-wider">
                Projects Live
              </span>
            </div>
            <div>
              <span className="block font-display text-4xl md:text-5xl text-foreground mb-2">
                NO
              </span>
              <span className="font-body text-sm text-muted uppercase tracking-wider">
                Based in Norway
              </span>
            </div>
            <div>
              <span className="block font-display text-4xl md:text-5xl text-foreground mb-2">
                &infin;
              </span>
              <span className="font-body text-sm text-muted uppercase tracking-wider">
                Passion
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
