import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'soft' | 'glass';
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
  variant = 'default',
  padding = 'md',
  className = '',
  children,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-white border border-cream-dark/80 shadow-[0_1px_3px_rgba(139,126,116,0.04)]',
    elevated: 'bg-white shadow-[0_2px_12px_rgba(139,126,116,0.08),0_1px_3px_rgba(139,126,116,0.04)]',
    soft: 'bg-cream-dark/40 border border-cream-dark/50',
    glass: 'glass border border-white/50 shadow-[0_2px_12px_rgba(139,126,116,0.06)]',
  };

  const paddings = {
    sm: 'p-4',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-8',
  };

  return (
    <div
      className={`rounded-2xl transition-all duration-200 ${variants[variant]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
