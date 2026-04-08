'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import AppHeader from '@/components/layout/AppHeader';
import { PUSH_NOTIFICATIONS, PREMIUM_UPSELL_LINES } from '@/data/seed/notifications-and-upsell';

const CATEGORY_LABELS: Record<string, string> = {
  daily_invite: 'Morning invitation',
  checkin: 'Gentle check-in',
  journal: 'Journal nudge',
  pathway: 'Pathway encouragement',
  streak: 'Streak celebration',
  return: 'Welcome back',
  weekend: 'Rest & weekend',
  verse: 'Scripture teaser',
};

const TIMING_LABELS: Record<string, string> = {
  morning: '8:00 AM',
  midday: '12:00 PM',
  afternoon: '3:00 PM',
  evening: '7:00 PM',
};

export default function NotificationsPreviewPage() {
  const [activeTab, setActiveTab] = useState<'push' | 'upsell'>('push');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(PUSH_NOTIFICATIONS.map(n => n.category))];
  const filtered = selectedCategory
    ? PUSH_NOTIFICATIONS.filter(n => n.category === selectedCategory)
    : PUSH_NOTIFICATIONS;

  return (
    <div className="animate-fade-in">
      <AppHeader title="Notification Preview" subtitle="How users will experience Selah outside the app" />

      {/* Tabs */}
      <div className="flex gap-1 bg-cream-dark/50 rounded-xl p-1 mb-6">
        <button
          onClick={() => setActiveTab('push')}
          className={`flex-1 text-sm py-2.5 rounded-lg font-medium transition-all
            ${activeTab === 'push' ? 'bg-white text-charcoal shadow-sm' : 'text-stone-light hover:text-stone'}`}
        >
          Push notifications
        </button>
        <button
          onClick={() => setActiveTab('upsell')}
          className={`flex-1 text-sm py-2.5 rounded-lg font-medium transition-all
            ${activeTab === 'upsell' ? 'bg-white text-charcoal shadow-sm' : 'text-stone-light hover:text-stone'}`}
        >
          Premium upsell
        </button>
      </div>

      {activeTab === 'push' ? (
        <div className="space-y-5">
          {/* Category filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full border transition-all
                ${!selectedCategory ? 'bg-sage/10 border-sage text-sage-dark' : 'border-cream-dark text-stone-light hover:border-stone-light'}`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full border transition-all
                  ${selectedCategory === cat ? 'bg-sage/10 border-sage text-sage-dark' : 'border-cream-dark text-stone-light hover:border-stone-light'}`}
              >
                {CATEGORY_LABELS[cat] || cat}
              </button>
            ))}
          </div>

          {/* Phone notification mockups */}
          <div className="space-y-3">
            {filtered.map((notif, i) => (
              <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}>
                {/* iOS-style notification */}
                <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(139,126,116,0.1)] p-4 border border-cream-dark/50">
                  <div className="flex items-start gap-3">
                    {/* App icon */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage to-sage-dark flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold tracking-tight">S</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="text-xs font-semibold text-charcoal tracking-tight">SELAH</p>
                        <p className="text-[10px] text-stone-light">{TIMING_LABELS[notif.timing] || 'now'}</p>
                      </div>
                      <p className="text-sm text-charcoal leading-snug">
                        {notif.text}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Category label */}
                <p className="text-[10px] text-stone-light mt-1.5 ml-14">
                  {CATEGORY_LABELS[notif.category] || notif.category} / {notif.timing}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-xs text-stone-light">These appear when a user hits a paywall or reaches a free tier limit.</p>

          {PREMIUM_UPSELL_LINES.map((upsell, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}>
              {/* In-app upsell card mockup */}
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sage/5 to-lavender/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <p className="text-xs text-sage font-medium tracking-wide uppercase mb-2">{upsell.context.replace('_', ' ')}</p>
                  <h3 className="text-base text-charcoal mb-2">{upsell.headline}</h3>
                  <p className="text-sm text-stone leading-relaxed mb-4">{upsell.body}</p>
                  <div className="flex gap-2">
                    <button className="text-xs bg-sage text-white px-4 py-2 rounded-lg font-medium">
                      Start free trial
                    </button>
                    <button className="text-xs text-stone-light px-4 py-2 rounded-lg">
                      Maybe later
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
