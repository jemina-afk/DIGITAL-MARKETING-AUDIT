// Re-export all seed data for convenience
export { PATHWAYS_SEED } from './pathways';
export { JOURNAL_PROMPTS_SEED } from './prompts';
export { ANXIETY_PEACE_DAYS, IDENTITY_CHRIST_DAYS } from './pathway-days-1';
export { WAITING_WELL_DAYS, HEALING_HEARTBREAK_DAYS } from './pathway-days-2';
export { CONFIDENCE_WORTH_DAYS, DISCIPLINE_GRACE_DAYS } from './pathway-days-3';
export { CAREER_CALLING_DAYS } from './pathway-days-4';

// Map pathway slugs to their day content
import { ANXIETY_PEACE_DAYS, IDENTITY_CHRIST_DAYS } from './pathway-days-1';
import { WAITING_WELL_DAYS, HEALING_HEARTBREAK_DAYS } from './pathway-days-2';
import { CONFIDENCE_WORTH_DAYS, DISCIPLINE_GRACE_DAYS } from './pathway-days-3';
import { CAREER_CALLING_DAYS } from './pathway-days-4';

export const PATHWAY_DAYS_MAP: Record<string, typeof ANXIETY_PEACE_DAYS> = {
  'anxiety-and-peace': ANXIETY_PEACE_DAYS,
  'identity-in-christ': IDENTITY_CHRIST_DAYS,
  'waiting-well': WAITING_WELL_DAYS,
  'healing-after-heartbreak': HEALING_HEARTBREAK_DAYS,
  'confidence-and-self-worth': CONFIDENCE_WORTH_DAYS,
  'discipline-with-grace': DISCIPLINE_GRACE_DAYS,
  'career-and-calling': CAREER_CALLING_DAYS,
};
