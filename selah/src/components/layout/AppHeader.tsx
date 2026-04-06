interface AppHeaderProps {
  title?: string;
  subtitle?: string;
  greeting?: string;
}

export default function AppHeader({ title, subtitle, greeting }: AppHeaderProps) {
  return (
    <header className="pt-6 pb-4 px-1">
      {greeting && (
        <p className="text-sm text-stone mb-1">{greeting}</p>
      )}
      {title && (
        <h1 className="text-2xl text-charcoal">{title}</h1>
      )}
      {subtitle && (
        <p className="text-sm text-stone-light mt-1">{subtitle}</p>
      )}
    </header>
  );
}
