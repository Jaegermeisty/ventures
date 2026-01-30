'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  type: 'web' | 'ios';
  image: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Palescript',
    description:
      'A book-centric journaling web application for readers who write about what they read. Capture your thoughts, track your reading journey, and build a personal library of insights.',
    type: 'web',
    image: '/palescript.svg',
    link: 'https://palescript.com',
    tags: ['Web App', 'React', 'Journaling'],
  },
  {
    title: 'Daily Catholic Quotes',
    description:
      'An iOS app that delivers a new inspirational quote every day directly to your home screen widget. Start each day with wisdom and reflection.',
    type: 'ios',
    image: '/catholic-quotes.svg',
    link: 'https://apps.apple.com/no/app/daily-catholic-quotes/id6754383149',
    tags: ['iOS App', 'Swift', 'Widgets'],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      className="project-card group"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative overflow-hidden rounded-lg bg-[#111] border border-border mb-6">
          {/* Project image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Type badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full">
            <span className="font-body text-xs uppercase tracking-wider text-accent">
              {project.type === 'web' ? 'Website' : 'iOS App'}
            </span>
          </div>
        </div>

        {/* Project info */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-3xl md:text-4xl group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <motion.svg
              className="w-6 h-6 mt-2 text-muted group-hover:text-accent transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: 4, y: -4 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </motion.svg>
          </div>

          <p className="font-body text-muted leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-border/50 rounded-full font-body text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Decorative background element */}
      <motion.div
        className="absolute right-0 top-1/4 w-96 h-96 gradient-blob opacity-30"
        style={{ y: backgroundY }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-20"
        >
          <span className="font-body text-accent text-sm tracking-[0.3em] uppercase block mb-8">
            Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
            Projects that showcase our{' '}
            <span className="text-accent italic">craft</span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* More coming soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="font-body text-muted italic">
            More projects in development...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
