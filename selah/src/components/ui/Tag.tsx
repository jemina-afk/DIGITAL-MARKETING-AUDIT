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
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex items-center gap-1.5 rounded-full border-2 transition-all duration-200
        ${sizes[size]}
        ${selected
          ? 'bg-sage/10 border-sage text-sage-dark'
          : 'bg-white border-cream-dark text-charcoal-light hover:border-stone-light'
        }
      `}
    >
      {emoji && <span>{emoji}</span>}
      <span>{label}</span>
    </button>
  );
}
