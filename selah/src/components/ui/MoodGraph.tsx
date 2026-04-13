'use client';

import { useState } from 'react';
import type { DailyCheckin } from '@/types/database';

// Map moods to a 1-5 scale for the graph
const MOOD_SCORES: Record<string, number> = {
  joyful: 5, confident: 5,
  grateful: 4, hopeful: 4, peaceful: 4,
  surrendered: 3, restless: 3,
  anxious: 2, overwhelmed: 2, lonely: 2, weary: 2,
  hurt: 1,
};

const MOOD_LABELS = ['', 'Hard', 'Low', 'Steady', 'Good', 'Great'];

interface MoodGraphProps {
  checkins: DailyCheckin[];
}

export default function MoodGraph({ checkins }: MoodGraphProps) {
  const [selectedDay, setSelectedDay] = useState<DailyCheckin | null>(null);

  // Get last 7 days
  const days: { date: string; label: string; checkin: DailyCheckin | null }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const dayLabel = d.toLocaleDateString('en-US', { weekday: 'short' }).charAt(0);
    const checkin = checkins.find(c => c.checked_in_at === dateStr) || null;
    days.push({ date: dateStr, label: dayLabel, checkin });
  }

  function getMoodScore(checkin: DailyCheckin | null): number | null {
    if (!checkin || !checkin.feeling_tags.length) return null;
    const primary = checkin.feeling_tags[0];
    return MOOD_SCORES[primary] ?? 3;
  }

  // SVG graph dimensions
  const W = 320;
  const H = 180;
  const padX = 30;
  const padTop = 20;
  const padBottom = 30;
  const graphW = W - padX * 2;
  const graphH = H - padTop - padBottom;

  // Build points
  const points: { x: number; y: number; score: number | null; idx: number }[] = days.map((day, i) => {
    const score = getMoodScore(day.checkin);
    const x = padX + (i / 6) * graphW;
    const y = score !== null
      ? padTop + graphH - ((score - 1) / 4) * graphH
      : padTop + graphH / 2; // center for missing data
    return { x, y, score, idx: i };
  });

  // Build path for the line (only through non-null points)
  const validPoints = points.filter(p => p.score !== null);
  let linePath = '';
  if (validPoints.length >= 2) {
    linePath = `M ${validPoints[0].x} ${validPoints[0].y}`;
    for (let i = 1; i < validPoints.length; i++) {
      // Smooth curve between points
      const prev = validPoints[i - 1];
      const curr = validPoints[i];
      const cpx = (prev.x + curr.x) / 2;
      linePath += ` C ${cpx} ${prev.y}, ${cpx} ${curr.y}, ${curr.x} ${curr.y}`;
    }
  }

  // Gradient area path
  let areaPath = '';
  if (validPoints.length >= 2) {
    areaPath = linePath + ` L ${validPoints[validPoints.length - 1].x} ${H - padBottom} L ${validPoints[0].x} ${H - padBottom} Z`;
  }

  const isToday = (dateStr: string) => dateStr === new Date().toISOString().split('T')[0];

  return (
    <div>
      {/* Graph card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal p-5 pb-3">
        {/* Y-axis labels */}
        <div className="absolute left-3 top-5 flex flex-col justify-between h-[130px] text-[9px] text-cream/30">
          <span>Great</span>
          <span>Good</span>
          <span>Steady</span>
          <span>Low</span>
          <span>Hard</span>
        </div>

        {/* SVG Graph */}
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" style={{ minHeight: 160 }}>
          {/* Horizontal grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={i}
              x1={padX}
              y1={padTop + (i / 4) * graphH}
              x2={W - padX}
              y2={padTop + (i / 4) * graphH}
              stroke="rgba(255,255,255,0.06)"
              strokeDasharray="4 4"
            />
          ))}

          {/* Gradient fill under line */}
          {areaPath && (
            <>
              <defs>
                <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(139,168,136,0.3)" />
                  <stop offset="100%" stopColor="rgba(139,168,136,0)" />
                </linearGradient>
              </defs>
              <path d={areaPath} fill="url(#moodGradient)" />
            </>
          )}

          {/* Line */}
          {linePath && (
            <path
              d={linePath}
              fill="none"
              stroke="rgba(139,168,136,0.8)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          )}

          {/* Dashed lines connecting to null points */}
          {points.map((point, i) => {
            if (point.score !== null || i === 0) return null;
            const prev = points[i - 1];
            if (!prev || prev.score === null) return null;
            return (
              <line
                key={`dash-${i}`}
                x1={prev.x} y1={prev.y}
                x2={point.x} y2={point.y}
                stroke="rgba(255,255,255,0.1)"
                strokeDasharray="3 3"
              />
            );
          })}

          {/* Data points */}
          {points.map((point, i) => {
            const hasData = point.score !== null;
            const isSelected = selectedDay?.checked_in_at === days[i].date;
            return (
              <g key={i} onClick={() => days[i].checkin && setSelectedDay(days[i].checkin)}
                 style={{ cursor: hasData ? 'pointer' : 'default' }}>
                {/* Glow ring for selected */}
                {isSelected && (
                  <circle cx={point.x} cy={point.y} r={12} fill="none" stroke="rgba(139,168,136,0.3)" strokeWidth="1.5" />
                )}
                {/* Outer ring */}
                <circle
                  cx={point.x} cy={point.y}
                  r={hasData ? 7 : 4}
                  fill={hasData ? (isSelected ? '#8BA888' : 'rgba(139,168,136,0.6)') : 'rgba(255,255,255,0.1)'}
                  stroke={hasData ? 'rgba(255,255,255,0.3)' : 'none'}
                  strokeWidth="1.5"
                />
                {/* Inner dot */}
                {hasData && (
                  <circle cx={point.x} cy={point.y} r={3} fill="white" opacity={isSelected ? 1 : 0.7} />
                )}
              </g>
            );
          })}

          {/* X-axis day labels */}
          {days.map((day, i) => (
            <text
              key={i}
              x={points[i].x}
              y={H - 8}
              textAnchor="middle"
              className={`text-[10px] ${isToday(day.date) ? 'fill-sage-light font-bold' : 'fill-white/30'}`}
            >
              {day.label}
            </text>
          ))}
        </svg>
      </div>

      {/* Selected day card */}
      {selectedDay && (
        <div className="mt-3 animate-slide-up">
          <div className="bg-white rounded-2xl border border-cream-dark/80 shadow-[0_2px_12px_rgba(139,126,116,0.08)] p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium text-charcoal">
                {new Date(selectedDay.checked_in_at + 'T00:00:00').toLocaleDateString('en-US', {
                  weekday: 'long', month: 'short', day: 'numeric',
                })}
              </p>
              <span className="text-xs text-sage-dark font-medium px-2 py-0.5 bg-sage/10 rounded-full">
                {MOOD_LABELS[getMoodScore(selectedDay) || 3]}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {selectedDay.feeling_tags.map(tag => (
                <span key={tag} className="text-xs bg-lavender/10 text-charcoal-light px-2 py-0.5 rounded-full capitalize">
                  {tag}
                </span>
              ))}
            </div>
            {selectedDay.free_text && (
              <p className="text-sm text-stone italic leading-relaxed mt-2">
                &ldquo;{selectedDay.free_text}&rdquo;
              </p>
            )}
          </div>
        </div>
      )}

      {!selectedDay && (
        <p className="text-[10px] text-stone-light text-center mt-2">Tap a point to see that day&apos;s check-in</p>
      )}
    </div>
  );
}
