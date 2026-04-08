interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  label?: string;
}

export default function ProgressBar({ value, max, className = '', label }: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label || `${value} of ${max}`}
      className={`w-full h-1.5 bg-cream-dark rounded-full overflow-hidden ${className}`}
    >
      <div
        className="h-full bg-sage rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
