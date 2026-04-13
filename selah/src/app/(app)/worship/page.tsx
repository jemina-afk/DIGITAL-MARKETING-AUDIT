'use client';

import AppHeader from '@/components/layout/AppHeader';
import Card from '@/components/ui/Card';

const PLAYLISTS = [
  {
    title: 'Peace & Stillness',
    desc: 'For anxious moments. Slow, meditative worship.',
    moods: ['anxious', 'overwhelmed', 'restless'],
    tracks: ['Way Maker - Sinach', 'Peace Be Still - The Belonging Co', 'Goodness of God - Bethel Music', 'Rest - Kari Jobe', 'Still - Hillsong Worship'],
    gradient: 'from-[#C8B6FF] via-[#B8D0EB] to-[#A8E6CF]',
  },
  {
    title: 'Identity & Worth',
    desc: 'Reminders of who you are in Christ.',
    moods: ['lonely', 'hurt', 'insecure'],
    tracks: ['Who You Say I Am - Hillsong', 'You Say - Lauren Daigle', 'Known - Tauren Wells', 'Pieces - Bethel Music', 'No Longer Slaves - Bethel Music'],
    gradient: 'from-[#E8B4D4] via-[#DCC8E8] to-[#C8B6FF]',
  },
  {
    title: 'Gratitude & Joy',
    desc: 'When your heart is full and you want to worship.',
    moods: ['grateful', 'joyful', 'peaceful'],
    tracks: ['10,000 Reasons - Matt Redman', 'Great Are You Lord - All Sons & Daughters', 'What a Beautiful Name - Hillsong', 'Jireh - Maverick City', 'Gratitude - Brandon Lake'],
    gradient: 'from-[#F0D6EA] via-[#FFE8D0] to-[#FFD6E0]',
  },
  {
    title: 'Healing & Comfort',
    desc: 'For heartbreak, grief, and hard seasons.',
    moods: ['hurt', 'weary', 'heartbroken'],
    tracks: ['Even If - MercyMe', 'It Is Well - Bethel Music', 'Healer - Kari Jobe', 'O Come to the Altar - Elevation Worship', 'Rescue - Lauren Daigle'],
    gradient: 'from-[#B8A8D8] via-[#C8B6FF] to-[#D8C8E8]',
  },
  {
    title: 'Surrender & Trust',
    desc: 'When you need to let go and let God.',
    moods: ['restless', 'anxious', 'waiting'],
    tracks: ['Oceans - Hillsong United', 'I Surrender - Hillsong', 'Trust In You - Lauren Daigle', 'Build My Life - Housefires', 'Here Again - Elevation Worship'],
    gradient: 'from-[#B8D0EB] via-[#C8D8F0] to-[#D0E2ED]',
  },
  {
    title: 'Evening Wind Down',
    desc: 'Gentle worship for before sleep.',
    moods: ['weary', 'peaceful'],
    tracks: ['Psalm 23 - Shane & Shane', 'Be Still My Soul - Page CXVI', 'You Are My Rest - Hillsong', 'Abide - Aaron Williams', 'Hymn of Heaven - Phil Wickham'],
    gradient: 'from-[#2A2640] via-[#4A4566] to-[#2A2640]',
    darkText: true,
  },
];

export default function WorshipPage() {
  return (
    <div className="animate-fade-in">
      <AppHeader title="Worship" subtitle="Curated playlists for every season of your heart" />

      <p className="text-xs text-stone-light mb-4">Search these songs on Spotify or Apple Music. We have curated them to match how you are feeling.</p>

      <div className="space-y-4">
        {PLAYLISTS.map((playlist) => (
          <div key={playlist.title} className={`rounded-2xl bg-gradient-to-r ${playlist.gradient} p-5 relative overflow-hidden`}>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/8" />
            <div className="relative">
              <h3 className={`text-sm font-medium mb-1 ${playlist.darkText ? 'text-cream' : 'text-charcoal'}`}>{playlist.title}</h3>
              <p className={`text-xs mb-4 ${playlist.darkText ? 'text-cream/60' : 'text-charcoal/60'}`}>{playlist.desc}</p>
              <div className="space-y-1.5">
                {playlist.tracks.map((track, i) => (
                  <div key={i} className={`flex items-center gap-2 text-xs ${playlist.darkText ? 'text-cream/80' : 'text-charcoal/70'}`}>
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" /></svg>
                    {track}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
