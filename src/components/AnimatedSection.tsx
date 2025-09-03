import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
}

const AnimatedSection = ({ 
  children, 
  animation = 'animate-fade-in-up', 
  delay = 0,
  className = '' 
}: AnimatedSectionProps) => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`
        ${className}
        ${hasIntersected ? animation : 'opacity-0'}
      `}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: hasIntersected ? 1 : 0
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;