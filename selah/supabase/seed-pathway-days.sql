-- ============================================================
-- COMPLETE SEED DATA FOR ALL 7 PATHWAYS (49 days total)
-- Generated from TypeScript seed files
-- Run this AFTER 001_initial_schema.sql and the pathway inserts from seed.sql
-- ============================================================

-- First, clear any existing pathway days to avoid duplicates
DELETE FROM public.pathway_days;

-- ============================================================
-- ANXIETY AND PEACE (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Acknowledging the burden of anxiety',
  'Cast all your anxiety on him because he cares for you.', '1 Peter 5:7 (NIV)',
  'Anxiety tells you that if you stop worrying, everything will fall apart. It disguises itself as responsibility, as care, as preparation. But the truth is quieter: you were never designed to carry it all. God doesn''t ask you to hand over your concerns because they''re trivial — He asks because they matter deeply, and He is the only one strong enough to hold them without breaking. Today is not about fixing the worry. It''s about naming it honestly and placing it in hands that won''t drop it. You are not failing by feeling anxious. You are human. And God meets you exactly there.',
  'Write down every worry circling your mind right now — no editing, no shame. Then beside each one, write: "This is too heavy for me. God, I place it in Your hands."',
  'Father, I bring You the weight I''ve been carrying alone. The named fears and the unnamed ones. I don''t fully understand why I feel this way, but You do. Take what I cannot hold. Remind me that releasing control is not the same as being careless — it is trust. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Redirecting anxious thoughts toward prayer',
  'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.', 'Philippians 4:6-7 (NIV)',
  'Paul doesn''t say "stop feeling anxious" — he says redirect. Every anxious thought is an unopened conversation with God. When your mind starts spiralling — the what-ifs, the worst cases, the replaying — try this: turn each spiral into a sentence that begins with "God, I''m worried about..." and end with something true that you''re thankful for. This isn''t positive thinking. It''s re-routing. Gratitude doesn''t deny pain — it reminds you that pain isn''t the whole story. The peace Paul describes isn''t the absence of problems. It''s a guard. A steady presence that holds the door of your heart while the storm rages outside.',
  'List 3 anxious thoughts that have been circling this week. Rewrite each one as a prayer, ending with one genuine "thank You" — even a small one.',
  'Lord, I bring my spiralling thoughts to You. Not polished, not tidy — just honest. I thank You for [name one real thing]. Let gratitude untangle what worry has knotted. Guard my heart with a peace I cannot manufacture on my own. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Finding God''s presence in difficulty',
  'When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you.', 'Isaiah 43:2 (NIV)',
  'Read that promise carefully. God says "when," not "if." He does not promise a life without deep water. He promises companionship inside it. This is the difference between a God who removes every storm and a God who enters every storm. Yours is the second kind — the kind who gets in the boat, who walks on the waves, who holds you in the undertow. Your circumstances may not change today. But you are not navigating them alone. The river is real. The current is strong. But His word over you is also real: you will not be swept away.',
  'Describe a past season that felt like deep water. Looking back, where was God in it? What did you learn about His presence that you couldn''t have learned on dry ground?',
  'God, I feel the current pulling. I don''t ask You to remove the storm — I ask You to remind me You are in it. Be close in the way I need today. Not just theologically close. Present. Tangible. Near. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'Practising stillness as an act of trust',
  'Be still, and know that I am God.', 'Psalm 46:10 (NIV)',
  'Stillness is counterintuitive when every nerve tells you to do something — fix it, plan it, control it. But this command is not about passivity. It is about posture. "Be still" is the hardest kind of action: the action of deliberately releasing your grip. Knowing God is God means accepting that you are not. You don''t have to hold the universe together. You don''t have to anticipate every outcome. You don''t have to earn your safety through hypervigilance. Today, stillness is not laziness. It is the most radical act of faith available to you: the decision to stop striving and start trusting the character of the God who never sleeps.',
  'What would genuine stillness look like for you today — not just physical rest, but mental and spiritual exhale? What are you afraid will happen if you stop striving?',
  'Lord, quiet the noise inside me — the urgency, the false deadlines, the need to fix. Teach me that being still is not failing. It is falling into You. I choose to trust Your sovereignty over my own control. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'Renewing the anxious mind with truth',
  'Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable — if anything is excellent or praiseworthy — think about such things.', 'Philippians 4:8 (NIV)',
  'Your mind is not a democracy where every thought gets an equal vote. Some thoughts lie. Some catastrophise. Some replay old wounds on a loop and call it "being realistic." Paul gives you a filter — not to suppress honest pain, but to distinguish between truth and noise. Ask every thought: Is this true, or is this fear wearing a mask? Is this real, or is this a story I''m telling myself? You have more authority over your thought life than anxiety wants you to believe. You cannot control which thoughts arrive, but you can decide which ones stay for dinner.',
  'What recurring anxious thought feels most "true" right now? Examine it honestly: is it actually true, or is it a fear disguised as fact? Write the truth beside it.',
  'Holy Spirit, I need Your help sorting truth from fear. When my mind replays worst-case scenarios, interrupt with what is real. Teach me to take thoughts captive instead of being held captive by them. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Releasing the future to God',
  'Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.', 'Matthew 6:34 (NIV)',
  'Most anxiety lives in the future — a place you have never been and cannot control. You are borrowing trouble from a day that hasn''t arrived, spending energy on problems that may never exist. Jesus isn''t minimising your pain. He''s saying: you were given grace for today. Not yesterday''s grace recycled, not tomorrow''s grace in advance. Fresh, sufficient, today-sized grace. When tomorrow comes, its own grace will be waiting. But for now, you have exactly what you need for the next 24 hours. Can you trust that? Can you let tomorrow belong to God while you tend to what is right in front of you?',
  'What future scenario are you spending the most mental energy on? Name it. Then write: "I was not given grace for this moment yet — and when it comes, grace will be there."',
  'Jesus, I release tomorrow. I release next month and next year. I have been living in a future that hasn''t happened yet, and it''s exhausting. Give me eyes to see only today. Give me grace sized exactly for now. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Receiving the peace of Christ as a permanent gift',
  'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.', 'John 14:27 (NIV)',
  'The world''s peace is conditional — it lasts as long as circumstances cooperate. But Christ''s peace is different in kind, not just degree. It doesn''t depend on the outcome of your situation. It isn''t a feeling you have to generate. It is a gift already given. Jesus said "I leave" and "I give" — past tense, present reality. This peace is already yours. It was purchased at a cross and sealed by a resurrection. Your job is not to manufacture it. Your job is to receive it, over and over, in the moments when your heart tries to be troubled again. This is the end of this pathway, but not the end of this peace. Carry it forward. Return to it often. It will not run out.',
  'Reflect on this week. What has shifted in how you relate to anxiety? What one truth will you carry forward as an anchor when worry returns?',
  'Thank You, Jesus, for peace that is not like the world''s. It doesn''t break when life does. I receive it now — not as a one-time gift, but as a daily inheritance. When my heart tries to be troubled, remind me: this peace is already mine. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

-- ============================================================
-- IDENTITY IN CHRIST (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Your identity begins with God''s deliberate choice',
  'You did not choose me, but I chose you and appointed you so that you might go and bear fruit — fruit that will last.', 'John 15:16 (NIV)',
  'Before you had a resume. Before you had a reputation, a body you judged, a relationship status, a follower count. Before any of it — God chose you. Not reluctantly. Not as a backup. Specifically, deliberately, knowing everything. He chose you knowing the worst Wednesday of your life. He chose you knowing the thing you''re most ashamed of. He chose you knowing you would doubt Him, stray from Him, and question whether He even sees you. And He chose you anyway. Not because you''d earn it. Because He wanted to. This is where identity starts — not with what you bring to the table, but with the fact that God pulled out a chair for you before you even walked into the room.',
  'When was the last time you felt genuinely chosen — by a friend, a partner, an opportunity? How does it reshape things to know God''s choice came before all of that?',
  'God, I have spent so long trying to earn what You''ve already given. You chose me. Before I did anything to deserve it, before I could disqualify myself — You chose me. Help me live today from that truth, not toward it. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Releasing the labels others placed on you',
  'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!', '1 John 3:1 (NIV)',
  'Words stick. The offhand comment from a parent. The cruel thing someone said in the breakup. The label a teacher gave you. The way you were spoken about — or never spoken about at all. Over time, those words became wallpaper in your mind. You stopped noticing them, but they shaped every room you walked into. Here is the truth that outranks every other name: you are a child of God. Not metaphorically. Not aspirationally. Actually. John doesn''t whisper it. He marvels at it — "See what great love." The word "lavished" means poured out extravagantly, without restraint. That is how God loves you. Whatever name the world gave you, it doesn''t fit. You belong to a Father who named you Beloved.',
  'What label or name from your past still shapes how you see yourself? Write it down. Then cross it out and write above it: "Child of God. That is what I am."',
  'Father, I have been wearing names that were never mine. Names born from someone else''s pain, someone else''s opinion, someone else''s limitation. Today I take them off. You call me Yours. That is my name. Help me answer to no other. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Understanding your purposeful design',
  'For we are God''s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.', 'Ephesians 2:10 (NIV)',
  'The Greek word for "handiwork" is poiema — it''s where we get the word "poem." You are not a mass-produced product. You are a poem. Crafted with intention, rhythm, and meaning that unfolds over time. Your particular combination of gifts, wounds, passions, and quirks is not accidental. God wove you together knowing exactly what the world would need from your specific life. The good works He prepared aren''t just big, visible things. They''re the conversation only you could have. The kindness only you could extend. The perspective only you could bring. You are not interchangeable. There is no one else with your exact design.',
  'What are three things about your personality, story, or gifting that feel uniquely yours? How might God be using those specific qualities on purpose?',
  'Creator God, thank You for making me with intention — not on an assembly line but as a poem. Open my eyes to the good works You prepared specifically for someone like me. Help me stop wishing I were a different poem. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'Resting in sufficiency of grace, not self',
  'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness."', '2 Corinthians 12:9 (NIV)',
  'The tyranny of "enough" is exhausting. Not smart enough. Not spiritual enough. Not productive, thin, successful, healed, or together enough. But here''s the gospel plot twist: you were never supposed to be enough. God''s design is not a self-sufficient woman who doesn''t need Him. His design is a woman who is held by a grace that fills every gap she cannot fill herself. Your weakness is not disqualifying — it is the exact location where His power does its best work. Stop trying to arrive at "enough." You''re already standing in grace, and grace is sufficient. Not barely sufficient. Abundantly, lavishly, more-than-you-need sufficient.',
  'Where does "not enough" hit you hardest right now — your career, your body, your faith, your relationships? Write it down, then write God''s response from today''s verse.',
  'Lord, I''m exhausted from trying to be enough. I lay down the performance. I lay down the striving. Your grace is sufficient — and today I choose to believe it covers exactly where I fall short. Let Your power rest on my weakness. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'Freedom from measuring yourself against others',
  'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.', 'Psalm 139:14 (NIV)',
  'Comparison is a silent thief. It takes what should be a celebration — someone else''s gift, beauty, success, or joy — and turns it into evidence of your inadequacy. But comparison only works if you believe God made a mistake with you. If you were "wonderfully made," then so was she — and her wonderful doesn''t diminish yours. The psalmist says "I know that full well." This is not a tentative hope. It is a settled knowing. You are not a rough draft of someone better. You are a finished work. Not perfect — finished in the sense that God''s design for you is complete and intentional. Her lane is not your lane. Run yours.',
  'Who do you compare yourself to most? What specifically triggers it? Now write one thing about your own design that you genuinely value — and don''t qualify it.',
  'God, forgive me for looking at Your creation in me and calling it less-than. I am wonderfully made. Help me know it full well — not as a verse I quote but as a truth I live from. Free me from measuring my design against anyone else''s. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'The permanence of God''s love',
  'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.', 'Romans 8:38-39 (NIV)',
  'Paul makes a list — and it''s deliberately exhaustive. He covers every dimension: time (present, future), space (height, depth), power (angels, demons), and then throws in "anything else in all creation" just to close every loophole. Nothing. Not your worst sin. Not your longest struggle. Not the thing you''ve never told anyone. Not the relationship that fell apart. Not the faith that sometimes wavers. Nothing in all creation can separate you from this love. This isn''t a love that fluctuates with your performance. It was established at a cross and sealed by an empty tomb. You cannot earn it, which means you cannot lose it.',
  'What do you secretly fear could disqualify you from God''s love? Name it honestly. Then read Romans 8:38-39 aloud over it, slowly.',
  'Jesus, I name the thing I''m most afraid separates me from Your love: [name it silently]. And I hear You say: not even this. Nothing. Help me receive a love I cannot lose. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Walking forward as who you already are',
  'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!', '2 Corinthians 5:17 (NIV)',
  'You are not becoming someone new. You already are someone new. The old labels, the old shame, the old striving to prove your worth — they belong to a story that has already ended. Christ didn''t give you a makeover. He gave you a new identity. The shift this week is from living for identity to living from identity. You don''t pray to become loved — you pray because you already are. You don''t serve to earn belonging — you serve because you already belong. You don''t strive for approval — you rest in an approval that was given, not earned. Walk forward today as who you truly are. Not who you used to be. Not who others said you were. Who God says you are. Right now. Already.',
  'What is the single most important truth about your identity that you want to carry out of this week? Write it as a first-person declaration: "I am..."',
  'God, I am new. The old stories, the old names, the old striving — they are finished. Help me walk in this truth daily. When the old identity tries to reclaim me, anchor me in who You say I am. I live from love now, not for it. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

-- ============================================================
-- WAITING WELL (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Navigating divine silence without losing faith',
  'Wait for the Lord; be strong and take heart and wait for the Lord.', 'Psalm 27:14 (NIV)',
  'God''s silence is one of the most disorienting experiences of faith. You''ve prayed. You''ve obeyed. You''ve believed. And... nothing. The door didn''t open. The answer didn''t come. The season didn''t shift. It''s tempting to interpret silence as absence — to believe that God has moved on, forgotten, or simply doesn''t care. But silence in the spiritual life is not absence. It is often the space where God does His deepest work — the kind that requires quiet to take root. A seed doesn''t germinate in noise. The psalmist says "wait" twice, as if to say: I know you heard me the first time. I''m saying it again because you''ll need to hear it again tomorrow.',
  'What are you waiting on God for right now? Be specific. Then write honestly: what does His silence feel like to you? What are you tempted to believe about Him because of it?',
  'Lord, the silence is hard. I want to hear You. I want to see movement. But I choose to believe that Your quiet is not Your absence. Strengthen my heart for the wait. I will stay. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Discovering purpose in the pause',
  'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.', 'Isaiah 40:31 (NIV)',
  'The in-between feels like wasted time. Nothing is happening. Nothing is moving. You''re stuck in a holding pattern while life seems to fast-track everyone around you. But God doesn''t waste seasons. The waiting is doing something. It''s building patience you''d never develop in ease. It''s deepening roots you''ll need when the storm of answered prayer arrives — because answered prayer brings its own challenges. Renewed strength doesn''t come from activity. It comes from hope — the kind that holds on when holding on feels pointless. The soaring comes. But first comes the waiting. And the waiting is not the obstacle to the soaring. It is the preparation for it.',
  'What is the waiting season building in you that ease never could? Name one quality — patience, empathy, depth, trust — that is growing precisely because of the pause.',
  'Father, I don''t want to just survive this waiting — I want to be changed by it. Show me what You''re growing in the soil of this season. Renew my strength not through escape, but through hope that holds. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Guarding your heart against comparison in waiting',
  'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.', 'Galatians 6:9 (NIV)',
  'She got engaged. She got the promotion. She got pregnant. She got the breakthrough. And you''re genuinely happy for her — and simultaneously gutted. That dual emotion is not hypocrisy. It''s grief. Watching others receive what you''re still waiting for doesn''t make you bitter; it makes you human. But here is the distinction that will save you: her timing is not your rejection. God''s "yes" to someone else is not a "no" to you. Your proper time exists. It is real. It is appointed. And it will not miss you. The harvest is coming — not on her timeline, not on your preferred schedule, but at the proper time. Keep sowing.',
  'Whose blessing has been hardest to celebrate because it mirrors what you''re still waiting for? Be honest. Then write a genuine prayer for them and a genuine prayer for your own heart.',
  'God, guard my heart from bitterness disguised as disappointment. Help me celebrate others without interpreting their blessing as my rejection. I trust that my proper time is coming. I will not give up. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'Choosing faith over understanding',
  'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.', 'Proverbs 3:5-6 (NIV)',
  'Your understanding has limits. It can only process what it can see, and in waiting seasons, you can''t see much. You can''t see why it''s taking this long. You can''t see what God is orchestrating. You can''t see the bigger picture that makes the delay make sense. And God doesn''t owe you that explanation — at least not yet. Trust is hardest when it''s most needed: in the gap between what you know about God''s character and what you can see with your eyes. The path is being made straight. You just can''t see around the bend. Today, choose to lean into His character rather than your comprehension.',
  'What specifically are you struggling to understand about God''s timing right now? Name it. Then write one thing you know to be true about God''s character — and choose that over your understanding.',
  'Lord, I don''t understand. I''m not pretending I do. But I know You are good, wise, and faithful. Today I lean on that instead of my need for answers. Make my path straight even when I can''t see where it leads. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'Honouring God in unglamorous seasons',
  'Whoever can be trusted with very little can also be trusted with much.', 'Luke 16:10 (NIV)',
  'Waiting seasons are rarely cinematic. There''s no swelling soundtrack. No one is watching. The days are repetitive — work, sleep, pray, wonder if anything is happening, repeat. But faithfulness in the ordinary is the most overlooked form of worship. God sees the quiet obedience — the prayer you prayed when you didn''t feel like it, the kindness you showed when you were running on empty, the integrity you maintained when no one would have known the difference. These unseen acts of faithfulness are not filler between the big moments. They are the big moments. They are the proving ground for what comes next.',
  'What small, faithful things have you been doing consistently even though no one notices? List them. Let this be your evidence that you are already being faithful with what you have.',
  'God, see my quiet faithfulness. It doesn''t feel impressive, but I offer it to You — the small prayers, the steady showing up, the unglamorous obedience. Let my little become Your much. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Trusting the appointed time',
  'For the revelation awaits an appointed time; it speaks of the end and will not prove false. Though it linger, wait for it; it will certainly come and will not delay.', 'Habakkuk 2:3 (NIV)',
  'God operates on a timeline you cannot access. From your angle, it looks late. The promise looks forgotten. The prayer looks unanswered. But Habakkuk — who was wrestling with God about injustice and silence — receives this word: there is an appointed time. It is set. It is certain. And here''s the part that requires the most faith: "though it linger." God acknowledges the experience of lingering. He''s not dismissing your frustration. He''s saying: I know it feels slow. It isn''t. What I promised will come. Your calendar and God''s calendar run on different time zones. Trust the one that created time itself.',
  'Think of a time something arrived "late" but turned out to be perfectly timed. What did God''s timing accomplish that your timing would have missed?',
  'Father, Your clock is different from mine. What feels like delay to me is precision to You. I trust the appointed time. Even though it lingers, I will wait — because You have never been late with anything that truly mattered. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Choosing joy without requiring resolution',
  'Consider it pure joy, my brothers and sisters, whenever you face trials of various kinds, because you know that the testing of your faith produces perseverance.', 'James 1:2-3 (NIV)',
  'Joy in the waiting is not pretending the wait doesn''t hurt. It''s recognising that something is being produced that could not exist without this exact process. Perseverance — the deep, bone-level capacity to keep going when everything says stop — is only forged in the fire of waiting. It cannot be downloaded or shortcut. As you close this pathway, you may still be waiting. That''s okay. The waiting hasn''t ended, but perhaps something in you has shifted. You are not the same woman who started Day 1. You are stronger, steadier, more rooted. And the God who met you on Day 1 is the same God who meets you today — faithful, present, and already preparing what''s next.',
  'How are you different today than when you started this pathway? What has shifted in your heart, your trust, or your understanding of God in the waiting?',
  'Jesus, thank You for meeting me in the waiting. I don''t have the answer yet, but I have You — and today, that is enough. Produce perseverance in me that will outlast this season. I choose joy while I wait. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

-- ============================================================
-- HEALING AFTER HEARTBREAK (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Giving yourself permission to feel the full weight of loss',
  'The Lord is close to the brokenhearted and saves those who are crushed in spirit.', 'Psalm 34:18 (NIV)',
  'Before healing begins, there must be honesty about the wound. Not spiritual bypassing — "God has a plan." Not forced gratitude — "At least..." Not premature forgiveness — "I should be over this." Just honesty. This hurts. Something broke. And God, rather than standing at a distance waiting for you to compose yourself, moves closer. The verse says "close" — not eventually close, not close once you''ve processed correctly. Close right now, in the mess, in the tears, in the 2am ache. He is not uncomfortable with your grief. He is intimate with sorrow. He wept at a tomb even knowing He would reverse the death. Your grief is not weakness. It is the proof that you loved something real.',
  'Write honestly about what happened and how it feels — without editing for spiritual correctness. Tell God the truth about the pain. He can handle your uncensored heart.',
  'Lord, my heart is broken. I''m not going to dress it up. It hurts in ways I don''t have words for. Draw close — not with solutions, but with presence. Sit with me in this. I need You here. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Countering the lie of abandonment',
  'God has said, "Never will I leave you; never will I forsake you."', 'Hebrews 13:5 (NIV)',
  'When someone leaves, part of you concludes: I wasn''t enough to stay for. And that conclusion quietly extends to God — if people leave me, maybe He will too. This is the deepest wound of heartbreak: not just the loss of a person, but the confirmation of a fear. But God uses the strongest negation available in the Greek language here. "Never, never, never will I leave. Never, never, never will I forsake." Five negatives stacked on top of each other. He is not someone who leaves. He is the one who stays when everyone else goes. Your pain is not evidence of His departure. It is the very place He has planted Himself most firmly.',
  'Where do you feel most abandoned right now? Be specific. Then read today''s verse aloud to that specific ache. Let the repetition of "never" address the repetition of the fear.',
  'God, someone I needed left. And part of me transferred that abandonment onto You. But You are not like them. You don''t leave. You don''t grow tired of me. Today I choose to trust the One who stays. Never, never, never will You leave. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Beginning the process without rushing the timeline',
  'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.', 'Colossians 3:13 (NIV)',
  'Let''s be clear about what forgiveness is not. It is not saying what happened was okay. It is not reconciliation — some relationships should not be restored. It is not a feeling. It is not instant. Forgiveness is a decision to stop drinking poison and hoping the other person gets sick. It''s the refusal to let someone who already hurt you continue to control your inner life. And it is a process. You may need to forgive the same person for the same thing seventy times — not because you failed, but because layers of pain reveal themselves over time. Start where you can. Even "God, I''m willing to be willing" is a beginning.',
  'Where are you in the forgiveness process — honestly? Not where you think you should be, but where you actually are. Write from there. It''s a valid starting point.',
  'Lord, I''m not ready to fully forgive yet — and I trust You with that honesty. But I am willing to begin. Start the thaw in my heart. Free me from carrying what was done to me. I forgive as You forgave me — imperfectly, gradually, but genuinely. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'Embracing the messy reality of recovery',
  'He heals the brokenhearted and binds up their wounds.', 'Psalm 147:3 (NIV)',
  'You will have good days that make you think you''re healed, followed by days that feel like Day 1 all over again. A song, a scent, a memory — and the wound reopens. This is not failure. This is healing. Real healing is not a straight line up. It''s a spiral — you revisit the same pain, but each time from a slightly higher vantage point. You''re not going backward. You''re going deeper. God doesn''t heal with speed. He heals with thoroughness. He is binding your wounds — not with a quick bandage but with careful attention to every layer. The fact that it still hurts sometimes doesn''t mean He''s failed. It means He''s still working.',
  'When did you last feel like you "went backward" in healing? Looking more closely, was it actually backward — or was it a deeper layer surfacing to be healed?',
  'Healer, I trust Your pace. Even when the wound reopens and I feel like I''m starting over, I believe You are binding something deeper. Don''t let me rush this. Do the thorough work. I will be patient with myself as You are patient with me. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'Reconstructing your sense of self after loss',
  'The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.', 'Zephaniah 3:17 (NIV)',
  'Heartbreak has a way of dismantling your self-concept. You start questioning everything: Was I not lovable enough? Was I too much? Am I fundamentally broken? The person who left took a piece of your confidence with them. But here is God''s response to your shattered self-image: He takes delight in you. Not past tense — present, active, ongoing delight. He doesn''t merely tolerate your existence. He rejoices over you with singing. Imagine that: the God of the universe, singing over you. Not the fixed-up version. Not the healed version. You, right now, with mascara tracks and a heart full of questions. He is singing.',
  'How has heartbreak changed how you see yourself? List the things you''ve begun to doubt about your worth. Now read Zephaniah 3:17 and let God''s perspective challenge each one.',
  'God, heartbreak made me small. It made me doubt things I used to know. Rebuild my sense of who I am — not based on who stayed or left, but based on Your delight. Sing over me until I believe it again. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Trusting God to redeem what was lost',
  'He has sent me to bind up the brokenhearted... to bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair.', 'Isaiah 61:1,3 (NIV)',
  'God is not just a healer. He is a redeemer. He doesn''t just fix what broke — He transforms it into something you could never have built on your own. Ashes become beauty. Mourning becomes joy. Despair becomes praise. This doesn''t mean the loss was worth it or that God caused it so He could fix it. It means that in God''s economy, nothing is beyond redemption. The worst chapters of your story can become the foundation for the most powerful ones. You don''t know yet what beauty God is creating from these ashes. But it''s coming. And it will be worth more than what burned.',
  'What "ashes" are you holding right now — the remnants of what was lost? What would it look like for God to create beauty from this specific material? Dream with Him on paper.',
  'Lord, take the ashes. I don''t want to hold them anymore. Create beauty I couldn''t imagine on my own. Oil of joy where there has been mourning. A garment of praise where despair has been my clothing. I trust Your redemptive power. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Opening your heart to what comes next',
  'Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland.', 'Isaiah 43:18-19 (NIV)',
  'You may close this pathway still holding pieces of heartbreak. That is okay. Healing doesn''t have a graduation ceremony. But here is what you can carry forward: God is doing a new thing. Not will do — is doing. Right now, in the middle of your incompleteness. The wilderness is not your permanent address. The wasteland will not stay barren. Streams are coming where dryness has been. New growth is springing up even now — and it may be so small you almost miss it. Pay attention to the tiny green shoots. They are evidence that this is not the end. Your heart will love again, hope again, and be open again. Not because you forced it, but because the God of new beginnings is already at work.',
  'What small "green shoots" of new life have you noticed — even barely? A laugh that surprised you, a moment of peace, a flicker of hope? Name them. They are evidence.',
  'God, I''m not fully healed yet. But I''m not where I was. Thank You for meeting me in every day of this pathway. I open my heart — carefully, bravely — to whatever new thing You are doing. I will not miss it. Lead me forward. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

-- ============================================================
-- CONFIDENCE AND SELF WORTH (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Relocating confidence from performance to identity',
  'Such confidence we have through Christ before God. Not that we are competent in ourselves to claim anything for ourselves, but our competence comes from God.', '2 Corinthians 3:4-5 (NIV)',
  'The world''s confidence is built on a fragile foundation: what you''ve accomplished, how you look, what others think of you. It grows when things go well and collapses when they don''t. But there is a different kind of confidence — one that doesn''t fluctuate with your last performance review or the number on the scale. Paul calls it confidence "through Christ." It''s not self-confidence at all — it''s God-confidence that lives in you. This means your confidence doesn''t depend on your competence. It depends on His. And His has never failed. You don''t have to be the most capable person in the room. You just have to be connected to the most capable God in the universe.',
  'Where does your confidence currently come from — honestly? Your appearance? Your achievements? Your relationships? Now imagine those were removed. What would be left? That''s where God wants to build.',
  'God, I''ve been building confidence on things that shift. Today I want to relocate it. My competence comes from You. Not from my track record, not from other people''s opinions. From You. Make that real in my bones. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Distinguishing condemnation from conviction',
  'Therefore, there is now no condemnation for those who are in Christ Jesus.', 'Romans 8:1 (NIV)',
  'The inner critic speaks in absolutes: you always mess up, you''ll never be enough, everyone sees through you. It sounds like wisdom but it''s condemnation wearing a disguise. God''s voice is different. He convicts with specificity and offers a path forward: "This specific thing didn''t align with who you are. Let''s address it together." Condemnation paralyses. Conviction mobilises. Condemnation says "you are the problem." Conviction says "there is a problem, and we can solve it." The inner critic has been playing God in your mind, and she''s terrible at the job. Today, fire her. There is no condemnation for you. Not because you''re perfect, but because you belong to Christ.',
  'What does your inner critic say most often? Write her favourite lines. Then beside each one, write whether it''s condemnation (paralysing, identity-attacking) or conviction (specific, forward-moving). Cross out the condemnation.',
  'Jesus, I renounce the voice of condemnation. It has impersonated You for too long. I am not condemned. Where I need correction, convict me gently. But where I''m being attacked, silence the lie. I belong to You. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Releasing the habit of making yourself small',
  'For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.', '2 Timothy 1:7 (NIV)',
  'Notice the word "timid." The Greek is deilia — cowardice, fearfulness, the instinct to shrink. Paul says: that did not come from God. The Spirit you carry is not one that apologises for taking up space. It is not one that starts every sentence with "Sorry, but..." It is power — not aggression, but holy authority. It is love — the kind that serves from abundance, not from trying to earn belonging. It is self-discipline — the capacity to steward your life without being controlled by fear. You have been playing small, and it''s time to stop. Not because you''re arrogant. Because you''re obedient. God made you to take up space. Stop apologising for the room He prepared for you.',
  'Where have you been making yourself small — in your voice, your opinions, your presence? What would it look like to stop shrinking without becoming aggressive? Write what holy boldness looks like for you.',
  'Holy Spirit, replace my timidity with Your power. I have been shrinking into spaces too small for the person You made me to be. Give me boldness that serves rather than performs. I will stop apologising for who You created. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'Breaking the cycle of people-pleasing',
  'Am I now trying to win the approval of human beings, or of God? Or am I trying to please people? If I were still trying to please people, I would not be a servant of Christ.', 'Galatians 1:10 (NIV)',
  'People-pleasing looks like kindness, but underneath it''s often fear. Fear of rejection. Fear of conflict. Fear of being disliked. It keeps you hustling for approval that was never meant to be your fuel. The truth? You cannot pour into everyone''s cup without draining your own. And some cups are simply not yours to fill. Paul draws a clean line: you cannot serve God wholeheartedly while being enslaved to human opinion. This doesn''t mean you stop caring about people. It means you stop letting their potential disappointment dictate your decisions. You already have the only approval that cannot be revoked.',
  'Whose approval do you work hardest to maintain? What has it cost you? What decision have you been avoiding because someone might disapprove? Write what you would do if their opinion didn''t matter.',
  'Lord, I have been exhausted by the approval machine. I people-please because I''m afraid of being rejected. Free me from that cycle. Your approval is enough. Help me live for an audience of One. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'Overcoming imposter syndrome with divine appointment',
  'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.', 'Joshua 1:9 (NIV)',
  'Imposter syndrome says: you got here by mistake. You''re about to be found out. Everyone else belongs; you''re the exception. But Joshua heard something different before stepping into his God-given role: "Have I not commanded you?" God doesn''t ask politely. He commands courage because He knows you''ll doubt your place. Every room you''re in, every opportunity you''ve been given, every table you''re seated at — you didn''t get there by accident. Even if you can''t explain how you got there, God can. He is the one who opens doors no one can shut. You belong. Not because you''re flawless, but because you''re appointed.',
  'Where does imposter syndrome hit you hardest — work, friendships, ministry, creative spaces? Write down the lie it tells you. Now write: "God commanded me to be courageous here because He placed me here."',
  'Lord, when I feel like a fraud, remind me that You placed me where I am. I didn''t stumble into this room — You opened the door. Give me the courage to stand in it fully, without apology. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Recognising worth as inherent, not earned',
  'Are not five sparrows sold for two pennies? Yet not one of them is forgotten by God. Indeed, the very hairs of your head are all numbered. Don''t be afraid; you are worth more than many sparrows.', 'Luke 12:6-7 (NIV)',
  'Your worth is not a variable. It doesn''t increase when you succeed or decrease when you fail. It doesn''t rise when someone loves you or fall when someone leaves. It was established before you drew breath, by a God who counts things as small as hairs on your head. If He pays that kind of attention to the details, imagine how He regards the whole of you. The world treats worth as a performance metric. God treats it as a birthright. You were worth dying for before you did a single worthwhile thing. Stop negotiating with a value that was never up for debate.',
  'What has made you feel worthless recently — a comment, a comparison, a rejection, a failure? Now hold it against today''s verse. Does it change the maths? You are worth more than many sparrows.',
  'Father, I have let circumstances negotiate my worth — and I always end up underselling myself. Today I return to Your original valuation: worth dying for, worth counting hairs, worth numbering. My worth is non-negotiable. Help me live like it. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Integrating confidence into daily life',
  'I can do all this through him who gives me strength.', 'Philippians 4:13 (NIV)',
  'This verse is not a blank cheque for any ambition. It''s a statement of empowerment for every assignment. Paul said this while in prison — not while conquering the world, but while enduring it. "I can do all this" means: whatever God asks of me, I have access to the strength to do it. Not my strength. His strength channelled through my willingness. As you leave this pathway, carry this: confidence is not a personality trait you either have or don''t. It is a spiritual practice. Every morning, you choose whose voice defines you. Choose the one that said "It is finished" — and walk like someone whose worth, belonging, and purpose were settled at a cross.',
  'Write your confidence declaration — a 3-5 sentence statement of who you are based on what you''ve learned this week. Start each sentence with "I am" or "I can." Read it aloud.',
  'God, I choose confidence rooted in You. Not arrogance — assurance. I am who You say I am. I can do what You call me to. I walk forward not in my strength, but in Yours. From this day on, I walk like I know who I am. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

-- ============================================================
-- DISCIPLINE WITH GRACE (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Redefining discipline as a form of self-care',
  'No discipline seems pleasant at the time, but painful. Later on, however, it produces a harvest of righteousness and peace for those who have been trained by it.', 'Hebrews 12:11 (NIV)',
  'Somewhere along the way, discipline became a punishment word. It evokes images of gritted teeth, early alarms, and relentless willpower. But the root of "discipline" is "disciple" — a learner, a follower. Discipline is not about punishing yourself into a better version of you. It''s about training yourself to live in alignment with who you actually are. The harvest at the end is not perfection — it''s righteousness and peace. Two things you desperately need. Discipline is how you get them. Not through white-knuckling, but through small, steady, grace-held choices that compound over time. Today, you''re not starting a punishment. You''re starting a training programme designed by a kind God.',
  'What is your honest relationship with discipline? Where did your beliefs about it come from — parents, culture, church, past failure? What would discipline look like if it were genuinely kind?',
  'Father, rewrite my understanding of discipline. Remove the shame and the dread. Show me that structure is not a cage — it''s a trellis that helps me grow toward light. I want the harvest. Help me trust the training. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'The gift of starting again without shame',
  'The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.', 'Lamentations 3:22-23 (ESV)',
  'You broke the streak. You missed the quiet time. You ate the thing. You scrolled instead of prayed. And the voice in your head says: see? You can''t do this. You always quit. But God''s economy runs on a different operating system. His mercies don''t recycle — they regenerate. Every morning is factory-new grace. Not because yesterday didn''t happen, but because yesterday''s failure is not today''s destiny. You don''t need a perfect track record to try again. You need a God whose faithfulness exceeds your inconsistency. And you have that. This morning. Right now. Mercies: new. Shame: irrelevant. Try again.',
  'What habit or discipline have you abandoned because you "failed" at it? What would it mean to start again today without carrying yesterday''s guilt?',
  'God, thank You for new mercies — genuinely new, not recycled. I don''t have to earn a fresh start. It''s already here. Today I start again, not because I''m disciplined enough, but because You are faithful enough. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Faithfulness in tiny, consistent steps',
  'Whoever can be trusted with very little can also be trusted with much.', 'Luke 16:10 (NIV)',
  'We glorify the dramatic transformation. The before-and-after. The 5am routine that changed everything. But real, lasting change almost always looks boring. It''s 5 minutes, not 50. It''s one prayer, not an hour of worship. It''s showing up imperfectly rather than waiting for the motivation to show up perfectly. Small is not insignificant. Small is the seed. Small is the mustard grain that becomes the tree. When you do the tiny faithful thing — the 3-minute prayer, the single journal entry, the verse read slowly — you are telling God: "I trust that You multiply small offerings." And He does. He always has.',
  'What small, daily practice could you maintain for 30 days? Not the ambitious version — the bare minimum version. The one you could do even on your worst day. Write it as a commitment.',
  'Lord, I bring You my small offerings — the imperfect prayers, the half-formed habits, the barely-there consistency. Multiply what I bring. I trust that faithfulness in little leads to faithfulness in much. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'Intentional time management rooted in rest',
  'Teach us to number our days, that we may gain a heart of wisdom.', 'Psalm 90:12 (NIV)',
  'There''s a difference between stewarding your time and worshipping your productivity. One leads to wisdom. The other leads to burnout. Numbering your days is not about cramming more into each one. It''s about recognising that time is finite and sacred — and choosing to spend it on things that actually matter. Not everything urgent is important. Not everything that fills your calendar fills your soul. Wisdom says: some things need to be done, some things need to be delegated, and some things need to be deleted entirely. You were not designed to optimise every minute. You were designed to live with intention — and intention includes margins, rest, and unhurried presence.',
  'Audit your last 48 hours. What actually mattered? What was just noise? Where did you spend time on things that neither served God, nourished you, nor blessed others?',
  'God, teach me to number my days — not to squeeze more out of them, but to spend them wisely. Give me courage to cut what doesn''t matter and margin for what does. Heart of wisdom, not heart of hustle. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'Embracing rest as an act of obedience',
  'By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work.', 'Genesis 2:2 (NIV)',
  'If the omnipotent God of the universe rested, what makes you think you shouldn''t? Rest is not the reward for finished work. It is woven into the rhythm of creation itself. God didn''t rest because He was tired — He rested because rest is good. It is part of the design. When you refuse to rest, you''re not being more faithful. You''re disagreeing with God''s design for sustainable, flourishing life. The most disciplined thing you can do today might be to stop. To close the laptop. To put down the to-do list. To sit in a chair and do absolutely nothing productive. That is not laziness. That is defiant trust in a God who keeps the world spinning while you sleep.',
  'What is your relationship with rest — do you see it as earned or given? What would truly restful rest look like for you today? Not numbing or scrolling — actual rest.',
  'Lord, I confess that I have treated rest as laziness and busyness as faithfulness. Forgive me. Teach me that stopping is holy. That margins are sacred. That rest is not weakness — it is worship. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Discipline that doesn''t depend on feeling like it',
  'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.', 'Galatians 6:9 (NIV)',
  'Motivation is a spark. Discipline is the fire that keeps burning after the spark fades. Most people start strong — the new plan, the new routine, the fresh commitment. But by week three, the feelings are gone and the alarm clock feels like the enemy. This is the crossroads. Motivation says: I don''t feel like it, so I won''t. Discipline says: I don''t feel like it, and I''ll do it anyway — not from guilt, but from love. Love for the woman you''re becoming. Love for the God you''re walking with. Love for the harvest you can''t see yet. You don''t need to feel inspired to be faithful. You just need to not give up.',
  'What discipline have you been maintaining only when you feel motivated? What would it look like to commit regardless of feelings — held by love instead of enthusiasm?',
  'God, I don''t feel motivated today. But I show up anyway. Not because I''m performing for You, but because I love who I''m becoming through this process. When I want to quit, whisper: "The harvest is coming." Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Sustainable growth rooted in God''s power',
  'But grow in the grace and knowledge of our Lord and Savior Jesus Christ.', '2 Peter 3:18 (NIV)',
  'The instruction is to grow in grace — not in spite of it, not apart from it. Grace is the soil of your growth, not the excuse for stagnation. There is a rhythm to grace-paced growth: it''s steady, not frantic. It celebrates progress without demanding perfection. It rests without quitting. It''s honest about failure without being defined by it. As you finish this pathway, here is your permission: grow at the pace of grace. Not at the pace of Instagram. Not at the pace of the woman next to you in church. Not at the pace of your own unrealistic expectations. Grow with God. He is patient, thorough, and not in a hurry. Match His pace, and you''ll never burn out.',
  'What is one discipline or habit you''re committing to carry forward from this week? Write it simply, with grace built in: "I will ___ most days, and when I miss, I will start again without shame."',
  'Jesus, I want to grow in Your grace — at Your pace. Not sprinting into burnout. Not crawling in defeat. Steady, held, sustainable growth. Thank You for this week. Carry what I''ve learned into the rhythm of my ordinary days. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

-- ============================================================
-- CAREER AND CALLING (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Separating calling from career',
  'For we are God''s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.', 'Ephesians 2:10 (NIV)',
  'Your calling is not your job title. Calling is broader, deeper, and more resilient than any single role. You were created — crafted with specificity — to do good works that God prepared before you were born. Some of those works happen at a desk. Some happen in a conversation no one overheard. Some happen in seasons of unemployment when you wonder if you''re contributing anything at all. Your work matters, but it doesn''t define you. The accountant who mentors a young woman is living her calling. The barista who brings genuine care to every interaction is living her calling. Calling is less about the what and more about the who — who you are becoming as you do whatever is in front of you today.',
  'If calling is bigger than a job title, what do you think yours might be? Think about the themes that keep recurring in your life — the things people come to you for, the injustices that bother you, the activities that make you lose track of time.',
  'God, show me the good works You prepared for me — not just the ones with impressive titles, but the hidden ones, the ordinary ones, the ones happening right now that I might be overlooking. My calling is You, lived through me. Help me see it clearly. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Moving forward when you can''t see the full path',
  'Your word is a lamp for my feet, a light on my path.', 'Psalm 119:105 (NIV)',
  'A lamp for your feet, not a floodlight for the highway. God reveals enough for the next step — not the next decade. This feels insufficient when you''re trying to plan a career, choose a direction, or make a major decision. You want the five-year plan. God gives you Tuesday. But there is wisdom in the lamplight model: it forces you to stay close to the source. When you can only see one step ahead, you have to keep walking with the One who holds the lamp. Clarity doesn''t usually arrive in a single dramatic moment. It accumulates through small, faithful steps taken in the direction of the little light you have. Move toward what you know. The next step will appear.',
  'What is one step that is illuminated for you right now — even if it''s small? An application to submit, a conversation to have, a skill to develop. Name it. That''s your lamp.',
  'Lord, I want the floodlight but You''re giving me a lamp. Teach me to be okay with that. I will take the next step I can see. Light my path one step at a time and keep me close to You as I walk. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Offering your career goals to God without killing them',
  'Commit to the Lord whatever you do, and he will establish your plans.', 'Proverbs 16:3 (NIV)',
  'Some women fear that surrendering their career to God means giving up their ambition entirely — as if the only godly option is passivity. But surrender is not the death of desire. It''s the purification of it. When you commit your work to God, you''re not saying "I don''t care what happens." You''re saying "I care deeply, and I trust You to shape the outcome." God doesn''t kill ambitious women. He refines them. He takes the gold of your drive and removes the dross of ego, fear, and comparison. What emerges is ambition with clean motives — ambition that serves rather than strives, that builds rather than competes, that glorifies God rather than merely advancing your brand.',
  'What career goals are you holding most tightly? Write them down. Now write beside each one: "I commit this to You, God. Establish what should stand. Redirect what shouldn''t."',
  'God, I bring You my ambition — not to bury it, but to surrender it. Purify my motives. Remove what comes from ego or fear. Establish the plans that align with Your purposes. I trust Your editing more than my original draft. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'Transforming ordinary work into sacred offering',
  'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.', 'Colossians 3:23 (NIV)',
  'This changes everything. When your boss is difficult — you''re working for God. When the task is mundane — you''re working for God. When no one notices or thanks you — you''re working for God. This doesn''t make bad work environments acceptable. It means that even in imperfect circumstances, your work carries eternal weight because of who you''re doing it for. The spreadsheet is worship. The difficult conversation is worship. The caregiving, the teaching, the coding, the serving — all of it becomes sacred when it''s directed toward God. You don''t need a ministry job to have a ministry. Your Monday morning is holy ground.',
  'How would your attitude toward work change if you genuinely believed you were working for God, not for a company or a manager? What specific task this week could you reframe as an offering?',
  'Lord, I offer You my work — the parts I love and the parts I endure. Today I work for You, not for approval or applause. Transform my ordinary tasks into worship. Let my Monday be as sacred as my Sunday. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'Breaking free from career comparison',
  'Each one should test their own actions. Then they can take pride in themselves alone, without comparing themselves to someone else, for each one should carry their own load.', 'Galatians 6:4-5 (NIV)',
  'She launched the business. She got the viral post. She pivoted and it worked. And you''re still here, in the same role, with the same unanswered questions. Comparison in the career space is vicious because it feels like concrete proof that you''re behind. But Paul says: test your own actions. Your own faithfulness. Your own growth. Her load is not yours. Her timeline is not yours. Her success proves one thing — that God is generous. It proves nothing about your failure, your timing, or your potential. You have your own load to carry. Carry it well. That''s the metric that matters.',
  'Who are you comparing your career to? Be specific. Now separate fact from story: what is actually happening in your career, and what narrative are you adding because of comparison?',
  'God, free me from measuring my faithfulness against someone else''s results. Help me test my own actions, carry my own load, and trust that my path is mine. I refuse to interpret her blessing as my failure. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Finding meaning in your current career chapter',
  'There is a time for everything, and a season for every activity under the heavens.', 'Ecclesiastes 3:1 (NIV)',
  'Not every season is a launching season. Some are planting seasons. Some are learning seasons. Some are pruning seasons — where God cuts back what looked productive but wasn''t actually bearing fruit. The career season you''re in right now has a purpose, even if it''s not the one you''d choose. The entry-level role is teaching you humility. The transition is building your resilience. The boredom is revealing what you actually care about. The failure is showing you what was built on the wrong foundation. Stop waiting for the "real" season to start. This one is real. And God is as present in the planting as He is in the harvest.',
  'What career season are you in — planting, growing, pruning, harvesting, or waiting? What might God be specifically doing in this season that couldn''t happen in a different one?',
  'Father, I stop resisting this season. If this is planting, help me plant well. If this is pruning, give me courage to let go. Show me the purpose in where I am, not just where I wish I were. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Trusting God with the full arc of your career story',
  'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.', 'Jeremiah 29:11 (NIV)',
  'This verse was spoken to a people in exile — not on a mountaintop, not in a breakthrough. In exile. God''s promise of hope and a future came to people who felt stuck, displaced, and uncertain. Sound familiar? Your career story is still being written. The current chapter — confusing, mundane, frustrating, or exciting as it may be — is not the final one. God declares "I know the plans." Not "I''m figuring it out as I go." He knows. The setbacks are not plot holes. The delays are not wasted pages. The detours are not errors. The Author of your story knows how it ends, and He writes redemption better than anyone. Trust Him with the pen.',
  'If your career story were a book, what chapter would you title this one? What do you hope the next chapter holds? Now write: "God, You are the Author. I trust Your narrative arc."',
  'God, You know the plans. I don''t, and that scares me. But I trust the Author more than I trust my outline. Write my story with hope. Write it with purpose. And help me enjoy the chapter I''m in while trusting You with what comes next. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

