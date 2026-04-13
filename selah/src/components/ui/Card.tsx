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
    default: 'bg-white/80 border border-lavender-light/50 shadow-[0_2px_16px_rgba(184,168,216,0.08)]',
    elevated: 'bg-white shadow-[0_4px_24px_rgba(184,168,216,0.12),0_1px_4px_rgba(184,168,216,0.06)]',
    soft: 'bg-lavender-light/30 border border-lavender-light/40',
    glass: 'backdrop-blur-xl bg-white/60 border border-white/50 shadow-[0_4px_24px_rgba(184,168,216,0.1)]',
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
