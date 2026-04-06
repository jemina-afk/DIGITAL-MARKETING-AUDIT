import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="animate-fade-in max-w-md">
          <p className="text-sm tracking-widest text-sage uppercase mb-4">
            A moment with God
          </p>
          <h1 className="text-4xl md:text-5xl text-charcoal leading-tight mb-6">
            Selah
          </h1>
          <p className="text-lg text-stone leading-relaxed mb-8">
            A daily companion for the woman who wants to grow closer to God
            — through scripture, prayer, and gentle reflection.
          </p>

          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-sage text-white font-medium text-sm px-8 py-4 hover:bg-sage-dark transition-all duration-200 active:scale-[0.98]"
            >
              Begin your journey
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-xl text-stone font-medium text-sm px-8 py-3 hover:text-charcoal transition-colors"
            >
              I already have an account
            </Link>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-2 gap-4 max-w-sm animate-slide-up">
          {[
            { title: 'Daily check-in', desc: 'Tell God how you feel' },
            { title: 'Personal scripture', desc: 'Chosen just for you' },
            { title: 'Guided journaling', desc: 'Process with purpose' },
            { title: 'Faith pathways', desc: '7-day devotional series' },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-4 border border-cream-dark">
              <p className="text-sm font-medium text-charcoal mb-1">{f.title}</p>
              <p className="text-xs text-stone-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 px-6">
        <p className="text-xs text-stone-light">
          Selah is devotional support, not pastoral or medical advice.
        </p>
      </footer>
    </div>
  );
}
