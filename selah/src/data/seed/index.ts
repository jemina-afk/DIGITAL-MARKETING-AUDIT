// Pathway metadata
export { PATHWAYS_SEED } from './pathways';

// Pathway day content (7 pathways x 7 days = 49 sessions)
export { ANXIETY_PEACE_DAYS } from './pathway-days-1';
export { IDENTITY_CHRIST_DAYS } from './pathway-days-identity';
export { WAITING_WELL_DAYS } from './pathway-days-waiting';
export { HEALING_HEARTBREAK_DAYS } from './pathway-days-heartbreak';
export { CONFIDENCE_WORTH_DAYS } from './pathway-days-confidence';
export { DISCIPLINE_GRACE_DAYS } from './pathway-days-discipline';
export { CAREER_CALLING_DAYS } from './pathway-days-calling';

// Supplementary content
export { JOURNAL_PROMPTS_SEED } from './prompts';
export { JOURNAL_PROMPTS_FULL } from './journal-prompts-full';
export { PRAYER_PROMPTS } from './prayer-prompts';
export { CHECKIN_RESPONSE_TEMPLATES, DEFAULT_CHECKIN_RESPONSES } from './checkin-responses';
export { PUSH_NOTIFICATIONS, PREMIUM_UPSELL_LINES } from './notifications-and-upsell';

// Pathway slug -> day content map
import { ANXIETY_PEACE_DAYS } from './pathway-days-1';
import { IDENTITY_CHRIST_DAYS } from './pathway-days-identity';
import { WAITING_WELL_DAYS } from './pathway-days-waiting';
import { HEALING_HEARTBREAK_DAYS } from './pathway-days-heartbreak';
import { CONFIDENCE_WORTH_DAYS } from './pathway-days-confidence';
import { DISCIPLINE_GRACE_DAYS } from './pathway-days-discipline';
import { CAREER_CALLING_DAYS } from './pathway-days-calling';

export const PATHWAY_DAYS_MAP: Record<string, typeof ANXIETY_PEACE_DAYS> = {
  'anxiety-and-peace': ANXIETY_PEACE_DAYS,
  'identity-in-christ': IDENTITY_CHRIST_DAYS,
  'waiting-well': WAITING_WELL_DAYS,
  'healing-after-heartbreak': HEALING_HEARTBREAK_DAYS,
  'confidence-and-self-worth': CONFIDENCE_WORTH_DAYS,
  'discipline-with-grace': DISCIPLINE_GRACE_DAYS,
  'career-and-calling': CAREER_CALLING_DAYS,
};
