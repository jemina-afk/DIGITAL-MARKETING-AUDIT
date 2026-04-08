'use client';

interface TagProps {
  label: string;
  emoji?: string;
  selected?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md';
}

export default function Tag({ label, emoji, selected, onClick, size = 'md' }: TagProps) {
  const sizes = {
    sm: 'text-xs px-3.5 py-2 min-h-[36px]',
    md: 'text-sm px-4 py-2.5 min-h-[44px]',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`
        inline-flex items-center gap-1.5 rounded-full border-2 transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream
        ${sizes[size]}
        ${selected
          ? 'bg-sage/10 border-sage text-sage-dark font-medium'
          : 'bg-white border-cream-dark text-charcoal-light hover:border-stone-light'
        }
      `}
    >
      {emoji && <span aria-hidden="true">{emoji}</span>}
      <span>{label}</span>
    </button>
  );
}
