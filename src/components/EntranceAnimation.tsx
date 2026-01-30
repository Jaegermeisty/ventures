'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

interface EntranceAnimationProps {
  onComplete: () => void;
}

export default function EntranceAnimation({ onComplete }: EntranceAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const pillars = pillarsRef.current;
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        onComplete();
      }
    });

    // Initial state
    gsap.set(pillars, { scaleY: 1 });

    // Stagger the pillars sliding up
    tl.to(pillars, {
      scaleY: 0,
      transformOrigin: 'top',
      duration: 0.8,
      stagger: {
        each: 0.08,
        from: 'edges',
      },
      ease: 'power3.inOut',
      delay: 0.3,
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!isAnimating) return null;

  const numPillars = 8;
  const pillarWidth = 100 / numPillars;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] pointer-events-none"
    >
      {Array.from({ length: numPillars }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) pillarsRef.current[i] = el;
          }}
          className="entrance-pillar"
          style={{
            left: `${i * pillarWidth}%`,
            width: `${pillarWidth + 0.5}%`,
          }}
        />
      ))}
    </div>
  );
}
