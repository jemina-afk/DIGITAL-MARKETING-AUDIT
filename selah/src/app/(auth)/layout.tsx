export const dynamic = 'force-dynamic';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl text-charcoal mb-1">Selah</h1>
          <p className="text-sm text-stone-light">A moment with God, just for you</p>
        </div>
        {children}
      </div>
    </div>
  );
}
