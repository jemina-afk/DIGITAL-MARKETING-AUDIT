-- Selah Seed Data
-- Run this after the migration to populate initial content

-- ============================================================
-- JOURNAL PROMPTS
-- ============================================================
INSERT INTO public.journal_prompts (prompt_text, category, mood_context, sort_order) VALUES
('What is God teaching you in this season?', 'reflection', ARRAY['reflective', 'peaceful'], 1),
('Write a letter to God about what you''re carrying today.', 'prayer', ARRAY['overwhelmed', 'anxious', 'weary'], 2),
('What are you grateful for, even in the hard things?', 'gratitude', ARRAY['grateful', 'peaceful'], 3),
('Where have you seen God''s faithfulness this week?', 'reflection', ARRAY['hopeful', 'grateful'], 4),
('What truth do you need to speak over yourself today?', 'identity', ARRAY['anxious', 'hurt', 'lonely'], 5),
('What fear do you need to surrender to God right now?', 'surrender', ARRAY['anxious', 'overwhelmed', 'restless'], 6),
('How has God''s grace surprised you recently?', 'gratitude', ARRAY['grateful', 'joyful', 'hopeful'], 7),
('What does rest look like for your soul today?', 'rest', ARRAY['weary', 'overwhelmed', 'restless'], 8),
('What would you say to your younger self about God''s faithfulness?', 'reflection', ARRAY['reflective', 'peaceful', 'hopeful'], 9),
('If you could ask God one question right now, what would it be?', 'prayer', ARRAY['restless', 'lonely', 'hurt'], 10),
('What lie have you been believing about yourself? What does God say instead?', 'identity', ARRAY['anxious', 'hurt', 'lonely'], 11),
('Describe a moment recently where you felt closest to God.', 'reflection', ARRAY['peaceful', 'grateful', 'joyful'], 12),
('What is one area of your life where you''re struggling to trust God?', 'surrender', ARRAY['anxious', 'restless', 'overwhelmed'], 13),
('Write out a prayer for someone who is on your heart today.', 'prayer', ARRAY['peaceful', 'grateful', 'confident'], 14),
('What does it mean to you that God calls you beloved?', 'identity', ARRAY['lonely', 'hurt', 'reflective'], 15),
('What is one thing you need to let go of this week?', 'surrender', ARRAY['overwhelmed', 'restless', 'weary'], 16),
('How can you be kind to yourself today in a way that honours God?', 'rest', ARRAY['weary', 'hurt', 'anxious'], 17),
('Write down 5 things — big or small — that made you smile this week.', 'gratitude', ARRAY['grateful', 'joyful', 'peaceful'], 18),
('What does "Be still, and know that I am God" mean for your life today?', 'reflection', ARRAY['anxious', 'restless', 'overwhelmed'], 19),
('If God wrote you a letter today, what do you think He would say?', 'identity', ARRAY['lonely', 'hurt', 'reflective'], 20);

-- ============================================================
-- PATHWAYS
-- ============================================================
INSERT INTO public.pathways (title, slug, description, category, cover_emoji, total_days, is_free, sort_order) VALUES
('Anxiety & Peace', 'anxiety-and-peace', 'A 7-day journey from worry to rest. Learn to release anxiety and receive the peace God promises — not the absence of trouble, but His presence in it.', 'emotional_health', '🕊️', 7, true, 1),
('Identity in Christ', 'identity-in-christ', 'Rediscover who God says you are. Over 7 days, replace the lies of comparison, rejection, and not-enoughness with the truth of your belovedness.', 'identity', '🪞', 7, true, 2),
('Waiting Well', 'waiting-well', 'When God is silent and the waiting feels endless. 7 days of encouragement to trust His timing and find purpose in the pause.', 'faith', '⏳', 7, true, 3),
('Healing After Heartbreak', 'healing-after-heartbreak', 'Whether it''s a breakup, betrayal, or loss — God is close to the brokenhearted. 7 days of comfort, truth, and gentle steps toward healing.', 'healing', '💛', 7, false, 4),
('Confidence & Self-Worth', 'confidence-and-self-worth', 'Stop shrinking. 7 days of scripture and reflection to help you walk boldly in the confidence that comes from knowing whose you are.', 'identity', '👑', 7, false, 5),
('Discipline with Grace', 'discipline-with-grace', 'Build holy habits without burnout or shame. 7 days of learning to steward your time, energy, and calling with grace.', 'growth', '🌿', 7, false, 6),
('Career & Calling', 'career-and-calling', 'When you''re unsure what you''re meant to do. 7 days to explore purpose, surrender ambition, and trust God with your work.', 'purpose', '🧭', 7, false, 7);

-- ============================================================
-- PATHWAY DAYS: Anxiety & Peace
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'The Invitation to Let Go',
  'Cast all your anxiety on him because he cares for you.', '1 Peter 5:7 (NIV)',
  'Anxiety often whispers that we need to hold everything together — that if we stop worrying, things will fall apart. But God''s invitation is the opposite: bring it all to Me. Not because your concerns don''t matter, but because they matter so much that only He can truly carry them.',
  'What are you currently carrying that feels too heavy? Write it down and then write next to it: "God, I give this to you."',
  'Father, I bring You every anxious thought. I choose to trust that You care about the details of my life. Teach me to release what I was never meant to hold. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'When Worry Spirals',
  'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.', 'Philippians 4:6-7 (NIV)',
  'The spiral starts small — one thought leads to another. Paul doesn''t say "stop worrying." He says: redirect. Turn every worry into a conversation with God. The peace that follows isn''t logical. It just guards you.',
  'Write out three worries that have been spiralling. Next to each, write one thing you''re grateful for despite the worry.',
  'Lord, when my mind spirals, anchor me. Help me turn every anxious thought into a prayer. Guard my heart and mind today. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'God''s Presence in the Storm',
  'When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you.', 'Isaiah 43:2 (NIV)',
  'Notice what God doesn''t promise here: He doesn''t promise you won''t face storms. He promises He''ll be in them with you. His presence isn''t a guarantee of comfort — it''s a guarantee of companionship.',
  'Describe a time when you felt God''s presence in the middle of difficulty. How did He show up?',
  'God, I don''t ask You to remove the storm. I ask You to remind me that You are in it with me. Be my anchor. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'The Practice of Stillness',
  'Be still, and know that I am God.', 'Psalm 46:10 (NIV)',
  'Stillness feels counterintuitive when anxiety screams at you to do something. But God invites you into a different kind of action: the action of trust. He is God. He is sovereign. He is good. You can exhale.',
  'What would it look like for you to practise stillness today? What do you need to stop doing to simply be with God?',
  'Lord, quiet the noise inside me. Help me stop striving and start trusting. I choose to be still because You are God and You are good. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'Renewing an Anxious Mind',
  'Whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely — think about such things.', 'Philippians 4:8 (NIV)',
  'Anxiety feeds on what-ifs and worst-case scenarios. Paul gives us a filter: Is it true? Is it noble? Is it lovely? Not every thought that enters your mind deserves a seat at the table.',
  'What untrue thought has been loudest in your mind this week? Replace it with something from Philippians 4:8.',
  'Holy Spirit, renew my mind. When anxious thoughts try to take over, help me take them captive. Show me what is true and lovely. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Trusting God with Tomorrow',
  'Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.', 'Matthew 6:34 (NIV)',
  'Jesus gently redirects your attention: today. Right here. Tomorrow isn''t yours to carry yet. You were given grace for today — and when tomorrow comes, fresh grace will meet you there.',
  'What are you worrying about that hasn''t happened yet? Write: "Tomorrow has its own grace. Today, I am held."',
  'Jesus, I release tomorrow to You. I don''t know what it holds, but I know who holds it. Give me grace for today. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'A Peace That Remains',
  'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.', 'John 14:27 (NIV)',
  'Jesus offers a peace that doesn''t make sense on paper. It''s the kind that holds you steady when nothing else does. His peace is not something you earn. It''s something He gives. And it stays.',
  'Reflect on this week''s journey. What has shifted in your heart? What truth about God''s peace will you carry forward?',
  'Thank You, Jesus, for a peace that the world can''t give and can''t take away. Let it guard my heart today and always. I receive it. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

-- NOTE: Additional pathway day inserts for the remaining 6 pathways follow the same pattern.
-- The full seed data for all pathways is available in src/data/seed/ as TypeScript files.
-- Use the seed script (npm run seed) to populate all pathways programmatically.
