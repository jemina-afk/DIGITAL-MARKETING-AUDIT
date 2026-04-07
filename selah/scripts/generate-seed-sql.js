// Script to generate complete seed SQL from TypeScript seed data
// Run with: node --loader ts-node/esm scripts/generate-seed-sql.mjs
// Or just: node scripts/generate-seed-sql.mjs (reads TS files as text and parses)

const fs = require('fs');
const path = require('path');

function escapeSQL(str) {
  return str.replace(/'/g, "''");
}

function extractArrayFromTS(filePath, exportName) {
  const content = fs.readFileSync(filePath, 'utf-8');
  // Find the array content between [ and ];
  const regex = new RegExp(`export const ${exportName}\\s*=\\s*\\[`, 's');
  const match = content.match(regex);
  if (!match) {
    console.error(`Could not find ${exportName} in ${filePath}`);
    return [];
  }

  // Use eval to parse the array (safe since we control the source)
  const startIdx = content.indexOf('[', match.index);
  let depth = 0;
  let endIdx = startIdx;
  for (let i = startIdx; i < content.length; i++) {
    if (content[i] === '[') depth++;
    if (content[i] === ']') depth--;
    if (depth === 0) { endIdx = i + 1; break; }
  }

  const arrayStr = content.slice(startIdx, endIdx);
  try {
    // Replace single quotes in template literals for eval
    const cleaned = arrayStr
      .replace(/\\\\/g, '\\\\')
      .replace(/\\'/g, "\\'");
    const days = eval(cleaned);
    return days;
  } catch (e) {
    console.error(`Failed to parse ${exportName}:`, e.message);
    return [];
  }
}

const pathways = [
  { slug: 'anxiety-and-peace', file: 'pathway-days-1.ts', exportName: 'ANXIETY_PEACE_DAYS' },
  { slug: 'identity-in-christ', file: 'pathway-days-identity.ts', exportName: 'IDENTITY_CHRIST_DAYS' },
  { slug: 'waiting-well', file: 'pathway-days-waiting.ts', exportName: 'WAITING_WELL_DAYS' },
  { slug: 'healing-after-heartbreak', file: 'pathway-days-heartbreak.ts', exportName: 'HEALING_HEARTBREAK_DAYS' },
  { slug: 'confidence-and-self-worth', file: 'pathway-days-confidence.ts', exportName: 'CONFIDENCE_WORTH_DAYS' },
  { slug: 'discipline-with-grace', file: 'pathway-days-discipline.ts', exportName: 'DISCIPLINE_GRACE_DAYS' },
  { slug: 'career-and-calling', file: 'pathway-days-calling.ts', exportName: 'CAREER_CALLING_DAYS' },
];

let sql = `-- ============================================================
-- COMPLETE SEED DATA FOR ALL 7 PATHWAYS (49 days total)
-- Generated from TypeScript seed files
-- Run this AFTER 001_initial_schema.sql and the pathway inserts from seed.sql
-- ============================================================

-- First, clear any existing pathway days to avoid duplicates
DELETE FROM public.pathway_days;

`;

let totalDays = 0;

for (const pw of pathways) {
  const filePath = path.join(__dirname, '..', 'src', 'data', 'seed', pw.file);
  const days = extractArrayFromTS(filePath, pw.exportName);

  if (days.length === 0) {
    console.error(`WARNING: No days found for ${pw.slug}`);
    continue;
  }

  sql += `-- ============================================================\n`;
  sql += `-- ${pw.slug.toUpperCase().replace(/-/g, ' ')} (${days.length} days)\n`;
  sql += `-- ============================================================\n`;

  for (const day of days) {
    const theme = escapeSQL(day.theme || day.title || `Day ${day.day_number}`);
    const scripture = escapeSQL(day.scripture_text);
    const reference = escapeSQL(day.scripture_reference);
    const reflection = escapeSQL(day.reflection);
    const journalPrompt = escapeSQL(day.journal_prompt);
    const prayerPrompt = escapeSQL(day.prayer_prompt);

    sql += `INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, ${day.day_number}, '${theme}',
  '${scripture}', '${reference}',
  '${reflection}',
  '${journalPrompt}',
  '${prayerPrompt}'
FROM public.pathways p WHERE p.slug = '${pw.slug}';\n\n`;

    totalDays++;
  }
}

console.log(`Generated SQL for ${totalDays} pathway days across ${pathways.length} pathways`);

const outputPath = path.join(__dirname, '..', 'supabase', 'seed-pathway-days.sql');
fs.writeFileSync(outputPath, sql);
console.log(`Written to: ${outputPath}`);
