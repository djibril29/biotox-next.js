'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade';
  delay?: number;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'scroll-animate';
      case 'fade-down':
        return 'scroll-animate animate-down';
      case 'fade-left':
        return 'scroll-animate animate-left';
      case 'fade-right':
        return 'scroll-animate animate-right';
      case 'scale':
        return 'scroll-animate animate-scale';
      case 'fade':
        return 'scroll-animate';
      default:
        return 'scroll-animate';
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

