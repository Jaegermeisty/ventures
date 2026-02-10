'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState(false);

  const email = 'mathias.jpventures@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      window.location.href = `mailto:${email}`;
    }
  };

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
      id="contact"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] gradient-blob opacity-20" />

      <motion.div
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.span
          variants={itemVariants}
          className="font-body text-accent text-sm tracking-[0.3em] uppercase block mb-8"
        >
          Contact
        </motion.span>

        <motion.h2
          variants={itemVariants}
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight"
        >
          Let&apos;s create something{' '}
          <span className="text-accent italic">remarkable</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="font-body text-xl text-muted mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind? Want to discuss an idea? I&apos;d love to hear
          from you.
        </motion.p>

        {/* Email display */}
        <motion.div variants={itemVariants} className="mb-12">
          <button
            onClick={handleCopyEmail}
            className="group relative inline-flex items-center gap-4 px-8 py-4 border border-border rounded-full hover:border-accent/50 transition-all duration-300"
          >
            <span className="font-body text-lg md:text-xl tracking-wide">
              {email}
            </span>
            <motion.span
              className="text-muted group-hover:text-accent transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {copied ? (
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </motion.span>

            {/* Copied tooltip */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : 10 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-accent"
            >
              Copied!
            </motion.span>
          </button>
        </motion.div>

        {/* Alternative: Direct email link */}
        <motion.a
          variants={itemVariants}
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 font-body text-muted hover:text-accent transition-colors"
        >
          <span>Or click here to open your email client</span>
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
