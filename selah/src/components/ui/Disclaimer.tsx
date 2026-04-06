export default function Disclaimer({ className = '' }: { className?: string }) {
  return (
    <p className={`text-xs text-stone-light leading-relaxed ${className}`}>
      Selah provides devotional support and spiritual encouragement. It is not a substitute for
      pastoral counsel, professional therapy, or medical advice. If you are in crisis, please
      reach out to a trusted pastor, counselor, or call a crisis helpline.
    </p>
  );
}
