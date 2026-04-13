'use client';

interface MoodCardProps {
  label: string;
  value: string;
  selected?: boolean;
  onClick?: () => void;
}

// Each mood gets a unique gradient inspired by the reference design
const MOOD_GRADIENTS: Record<string, string> = {
  peaceful: 'from-[#C8B6FF] via-[#B8D0EB] to-[#A8E6CF]',
  anxious: 'from-[#FFB6C1] via-[#E8B4D4] to-[#C8A8E8]',
  grateful: 'from-[#B8D0EB] via-[#C8E0F4] to-[#E0D6EB]',
  weary: 'from-[#C4B5D4] via-[#B8B0C8] to-[#A8A0B8]',
  hopeful: 'from-[#E8D4F0] via-[#F0D6EA] to-[#F8E0D0]',
  lonely: 'from-[#B8A8D8] via-[#A898C8] to-[#9888B8]',
  joyful: 'from-[#F0D6EA] via-[#FFD6E0] to-[#FFE8D0]',
  overwhelmed: 'from-[#C8A8E8] via-[#B898D8] to-[#A888C8]',
  restless: 'from-[#D8C8E8] via-[#C8B8D8] to-[#E0D0E8]',
  confident: 'from-[#B8D0EB] via-[#A8C0E0] to-[#C8D8F0]',
  hurt: 'from-[#E8A8C8] via-[#D898B8] to-[#C888A8]',
  surrendered: 'from-[#C8D0E8] via-[#D8D4F0] to-[#E8E0F8]',
};

export default function MoodCard({ label, value, selected, onClick }: MoodCardProps) {
  const gradient = MOOD_GRADIENTS[value] || 'from-[#C8B6FF] via-[#E0D6EB] to-[#F0E8F8]';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 active:scale-95
        ${selected
          ? 'ring-2 ring-sage ring-offset-2 ring-offset-cream scale-[1.02] shadow-lg shadow-sage/20'
          : 'shadow-sm hover:shadow-md hover:scale-[1.01]'
        }`}
      style={{ width: '100%', aspectRatio: '1' }}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-${selected ? '90' : '70'}`} />

      {/* Abstract shapes overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/20 blur-sm" />
        <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full bg-white/15 blur-sm" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 blur-md" />
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
        <span className={`text-xs font-medium ${selected ? 'text-charcoal' : 'text-charcoal/80'}`}>
          {label}
        </span>
      </div>

      {/* Check mark for selected */}
      {selected && (
        <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/90 flex items-center justify-center">
          <svg className="w-3 h-3 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
      )}
    </button>
  );
}
