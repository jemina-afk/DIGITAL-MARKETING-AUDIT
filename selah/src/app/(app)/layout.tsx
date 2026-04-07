import AppNav from '@/components/layout/AppNav';

export const dynamic = 'force-dynamic';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cream pb-20">
      <div className="max-w-lg mx-auto px-5">
        {children}
      </div>
      <AppNav />
    </div>
  );
}
