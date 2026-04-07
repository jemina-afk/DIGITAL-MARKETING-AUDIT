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
SELECT p.id, 1, 'Acknowledging the burden — like Martha',
  'Martha, Martha, you are worried and upset about many things, but few things are needed — or indeed only one. Mary has chosen what is better, and it will not be taken away from her.', 'Luke 10:41-42 (NIV)',
  'Martha wasn''t doing anything wrong. She was serving, preparing, hosting — all good things. But Jesus saw something she couldn''t: her worry was consuming her. She was so busy doing things for God that she forgot to be with God.

Many of us are Martha. We carry the mental load of everything — work, relationships, health, future plans — and call it responsibility. But Jesus gently names it: you are worried and upset about many things. Not because those things don''t matter, but because they were never meant to be carried without Him. Today, you don''t need to do more. You need to sit at His feet, even for five minutes, and let Him carry what you''ve been gripping.',
  'Where are you being Martha right now — so busy serving, managing, or worrying that you''ve forgotten to simply be with God? What is the "one thing needed" for you today?',
  'Jesus, I''m Martha today. Worried about many things, running from task to task, carrying more than I should. Slow me down. Help me choose the better thing — Your presence over my productivity. I don''t want to miss You while I''m busy working for You. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Elijah''s breakdown after victory',
  'Elijah was afraid and ran for his life... He came to a broom bush, sat down under it and prayed that he might die. "I have had enough, Lord," he said.', '1 Kings 19:3-4 (NIV)',
  'Elijah had just called down fire from heaven. He had stood alone against 450 prophets of Baal and won. He was on the mountaintop — literally. And then, one threat from Jezebel, and he collapsed. Ran. Hid. Wished he was dead.

This is one of the most honest portraits of anxiety in the Bible. It shows us that faithfulness doesn''t make you immune to fear. You can have a powerful week and still fall apart on Friday. You can know God is real and still feel terrified. And God''s response to Elijah wasn''t a lecture. It was bread, water, and sleep. He met Elijah''s anxiety with tenderness, not theology. He will do the same for you.',
  'Have you ever had an "Elijah moment" — felt spiritually strong one day and completely overwhelmed the next? What happened? How did God meet you in it?',
  'Lord, I feel like Elijah under the broom tree. Tired. Afraid. Done. You didn''t scold him — You fed him and let him rest. Do the same for me. I don''t need a sermon right now. I need Your gentle care. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Hagar — seen in the wilderness',
  'She gave this name to the Lord who spoke to her: "You are the God who sees me," for she said, "I have now seen the One who sees me."', 'Genesis 16:13 (NIV)',
  'Hagar was a slave, pregnant, rejected, and running into the desert to die. She had no status, no power, no options. She was invisible to the world. But God found her. Not in a temple or a palace — in a wilderness. And He didn''t just see her circumstances. He saw her.

Anxiety often makes you feel invisible — like no one truly understands the weight you carry, the thoughts you can''t shut off, the fear you hide behind a smile. But the God who found Hagar in the desert finds you in your anxiety. He is El Roi — the God who sees. Not just your situation. You. The real, messy, frightened, struggling you. And He doesn''t look away.',
  'Where do you feel unseen right now — in your anxiety, your struggles, your real feelings? Write honestly to the God who sees you. What do you want Him to know?',
  'El Roi, God who sees me — You see the anxiety I hide from everyone else. You see the panic behind the calm face. You see me in my desert. I don''t need to pretend with You. See me. Stay with me. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'David''s honest prayers of distress',
  'How long, Lord? Will you forget me forever? How long will you hide your face from me? How long must I wrestle with my thoughts and day after day have sorrow in my heart?', 'Psalm 13:1-2 (NIV)',
  'David didn''t write polished prayers. He wrote raw ones. "How long?" "Are you even listening?" "I''m wrestling with my own thoughts." This is the man God called "a man after my own heart" — and he was anxious, sad, angry, and scared. Regularly.

The Psalms give you permission to bring your real emotions to God. Not the cleaned-up version. Not the "I should be more grateful" version. The real one. David screamed, wept, and questioned God — and God never once withdrew His presence. Your honest, messy prayers are not disrespectful. They are the deepest form of trust: believing God can handle the truth of how you feel.',
  'Write your own psalm today. Start with how you honestly feel (even if it''s angry, afraid, or confused). End with one thing you know to be true about God, even if you don''t feel it.',
  'God, like David, I come to You unfiltered. I''m wrestling with my own thoughts. Some days feel endless. But I choose to trust that You hear every word — the desperate ones and the doubting ones. You are still God, even when I am still afraid. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'The Israelites and daily manna',
  'Then the Lord said to Moses, "I will rain down bread from heaven for you. The people are to go out each day and gather enough for that day."', 'Exodus 16:4 (NIV)',
  'God gave the Israelites manna — but only enough for one day. When they tried to stockpile it, it rotted. This was not cruelty. It was training. God was teaching them to trust Him daily, not weekly, not yearly — daily.

Anxiety is often the attempt to stockpile grace for tomorrow. You try to solve next week''s problems with today''s energy. You rehearse conversations that haven''t happened yet. You plan for worst-case scenarios that may never arrive. But God''s economy works differently: you receive what you need when you need it. Not before. The manna principle is this: today''s grace is sufficient for today. Tomorrow''s grace will arrive tomorrow. You cannot carry both.',
  'What "tomorrow problem" are you trying to solve with today''s energy? Can you name it and consciously release it to God''s tomorrow-provision?',
  'Father, teach me the manna lesson. I have been hoarding worry, trying to prepare for every possible future. But You only give grace for today. Help me gather just enough for now — and trust that tomorrow''s bread will be there when I wake. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Jesus sleeping in the boat',
  'Jesus was in the stern, sleeping on a cushion. The disciples woke him and said to him, "Teacher, don''t you care if we drown?" He got up, rebuked the wind and said to the waves, "Quiet! Be still."', 'Mark 4:38-39 (NIV)',
  'The disciples were experienced fishermen. They knew the sea. And they were terrified. Meanwhile, Jesus — God in human skin — was asleep. On a cushion. In a storm.

This wasn''t carelessness. It was complete peace. Jesus could sleep in the storm because He knew who He was and who His Father was. The disciples'' question reveals the heart of anxiety: "Don''t you care?" That''s what we ask God in our panic — don''t You see this? Don''t You care that I''m drowning? And Jesus'' response is to stand up and speak directly to the chaos: "Be still." He speaks to your storm today with the same authority. Not always to remove it — but to be present in it with a peace that defies the waves.',
  'When have you asked God, "Don''t You care?" What was the situation? Looking back, can you see evidence that He was in the boat with you?',
  'Jesus, I feel like the disciples — waves crashing, panicking, wondering if You''re even awake. Speak to my storm today. Not necessarily to remove it, but to remind me You are in this boat with me. Be still in me. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Paul''s impossible peace in prison',
  'And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.', 'Philippians 4:7 (NIV)',
  'Paul wrote these words about peace from a Roman prison. Not from a retreat centre. Not after a promotion. From a cell. That detail matters — because it means this peace is not dependent on good circumstances. It "transcends understanding," meaning people around you won''t understand how you''re calm. You might not even understand it yourself.

Paul experienced a peace that defied logic because it came from a source beyond logic — the presence of God Himself. As you close this pathway, know this: the peace available to you is not a feeling you generate. It is a guard posted at the door of your heart by God Himself. When anxiety knocks — and it will — the guard is already there. You don''t have to fight alone. You never did.',
  'Reflect on this entire week. What has shifted in how you relate to your anxiety? What truth about God will you carry forward when worry returns?',
  'God, I don''t fully understand this peace — and that''s the point. It transcends my understanding. Post it as a guard over my heart and my mind. When anxiety returns, let this peace meet it at the door. Thank You for this week. Thank You for not leaving me to face it alone. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

-- ============================================================
-- IDENTITY IN CHRIST (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Gideon — the insecure hero',
  'The Lord turned to him and said, "Go in the strength you have and save Israel out of Midian''s hand. Am I not sending you?" "Pardon me, my lord," Gideon replied, "but how can I save Israel? My clan is the weakest in Manasseh, and I am the least in my family."', 'Judges 6:14-15 (NIV)',
  'When God came to Gideon, He called him "mighty warrior." At the time, Gideon was hiding in a wine press, threshing wheat in secret because he was terrified of the enemy. He was the opposite of mighty. But God wasn''t describing Gideon''s present — He was declaring Gideon''s identity.

God does the same with you. He doesn''t call you by your fears, your failures, or your family history. He calls you by what He placed inside you before the world had a say. Gideon said "I''m the least." God said "I''m sending you." Your smallness is not disqualifying. It''s the exact canvas God chooses to paint His strength on.',
  'What is your version of "I am the least"? What do you tell yourself that disqualifies you? Now write what God might be calling you instead.',
  'God, like Gideon, I feel small. Unqualified. The least likely. But You called him "mighty warrior" when he was hiding. What are You calling me that I haven''t believed yet? Open my ears to hear my real name — the one You gave me. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Leah — the unwanted wife God saw',
  'When the Lord saw that Leah was not loved, he enabled her to conceive.', 'Genesis 29:31 (NIV)',
  'Leah was the wife no one wanted. Jacob worked seven years for her sister Rachel and got Leah through deception. She lived her whole marriage knowing she was second choice. She named her sons things like "Surely my husband will love me now."

But here''s what most people miss: Leah is in the lineage of Jesus. The overlooked, unloved, second-choice woman is in the direct bloodline of the Savior. God didn''t just see Leah — He chose her for something no one expected. If you have ever felt like the one not picked, the one people settle for — God sees you the way He saw Leah. He has placed you in a story bigger than anyone''s rejection.',
  'Where have you felt like Leah — unchosen, second place, not preferred? How does it change things to know God saw her and placed her in the lineage of Christ?',
  'Lord, I have felt like Leah — unseen, not the first choice. But You saw her when no one else did. You wove her into the most important story ever told. See me the same way. My worth is not determined by who chooses me. It is determined by the God who already has. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Moses — "I am slow of speech"',
  'Moses said to the Lord, "Pardon your servant, Lord. I have never been eloquent... I am slow of speech and tongue." The Lord said to him, "Who gave human beings their mouths?... Now go; I will help you speak."', 'Exodus 4:10-12 (NIV)',
  'Moses had a list of reasons why God picked the wrong person. He wasn''t a good speaker. He had a criminal past. He''d been hiding in the desert for 40 years.

But God''s calling is not based on your résumé. When Moses said "I can''t speak," God didn''t say "You''re right, I''ll find someone else." He said "Who made your mouth?" Your weaknesses don''t surprise God. He designed you — all of you, including the parts you wish were different. He doesn''t work despite your limitations. He often works through them.',
  'What is your "I am slow of speech" — the thing you believe disqualifies you? Write God''s response to Moses and apply it to yourself.',
  'God, I have my own list of disqualifications. But You didn''t accept Moses'' excuses, and You don''t accept mine. You made me. Help me trust that You knew what You were doing. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'The Samaritan woman — shame into testimony',
  'Then, leaving her water jar, the woman went back to the town and said to the people, "Come, see a man who told me everything I ever did. Could this be the Messiah?"', 'John 4:28-29 (NIV)',
  'She came to the well at noon to avoid the other women. Five failed marriages. She was the town scandal. And Jesus chose her for the longest recorded conversation with any individual in the Gospels.

He didn''t pretend her past didn''t exist. He named it. And in the naming, He freed her. She left her water jar — the thing she came for — because she found something better: an identity not defined by her history. She ran back to the very people she''d been hiding from and said "Come see." Your past is not your identity. It is the backdrop against which God writes your redemption story.',
  'What "water jar" are you still carrying — what old identity or shame do you keep returning to? What would it look like to leave it at the well?',
  'Jesus, You met the Samaritan woman at her worst and gave her a new story. Meet me at my well today. I''m tired of being defined by my past. Speak my real name — the one that has nothing to do with my mistakes. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'David''s wonder at being known by God',
  'For you created my inmost being; you knit me together in my mother''s womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.', 'Psalm 139:13-14 (NIV)',
  'David wrote this not in confidence but in awe. He was overwhelmed by how intimately God knew him — every thought, every movement, every unformed day.

"Fearfully and wonderfully made" isn''t a motivational quote. It''s a theological declaration. The God who engineered the nervous system, who designed the way light hits water, who encoded DNA — that God gave the same creative attention to you. Your body, your mind, your personality, your specific combination of gifts and quirks — none of it is accidental. Comparison says "I should be like her." God says "I already made you, and I don''t repeat My work."',
  'What part of yourself do you struggle to call "wonderful"? Write a thank-you letter to God for that specific thing.',
  'Creator, You knit me together on purpose. The things I criticise about myself — You designed them. Help me stop arguing with Your craftsmanship. I am fearfully and wonderfully made. Teach me to know that full well. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Paul''s unshakeable declaration from prison',
  'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.', 'Romans 8:38-39 (NIV)',
  'Paul wrote this from experience. He had been shipwrecked, beaten, imprisoned, and left for dead. He wasn''t theorising about God''s love from a comfortable study. He was declaring it from the battlefield.

Read the list again: not death, not life, not the present, not the future, not any power. He covered every category of threat and said: none of it can separate you. This is not a love that fluctuates based on your behaviour. It''s an anchor-love, a covenant-love, tested by a cross and proven unbreakable. You are held. Permanently.',
  'What do you fear could separate you from God''s love? Your sin? Your doubt? Write it down. Then read Romans 8:38-39 aloud over it.',
  'God, nothing can separate me from Your love. Not my worst day, not my darkest thought, not my biggest failure. This love is unbreakable because it depends on You, not me. I rest in that today. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Jesus'' baptism — beloved before doing anything',
  'And a voice from heaven said, "This is my Son, whom I love; with him I am well pleased."', 'Matthew 3:17 (NIV)',
  'This declaration came at Jesus'' baptism — before He performed a single miracle, preached a single sermon, or healed a single person. Before He did anything, the Father said: "You are My beloved. I am pleased with you."

This is God''s order: identity first, then action. Not "do great things and I''ll love you." But "you are loved — now go." The world reverses this. It says perform, achieve, prove yourself, then maybe you''ll be enough. God says you are already enough, and from that security, you can do anything. You don''t work for love. You work from love.',
  'What is one identity truth from this week that you want to carry forward? How will you remind yourself when the old voices return?',
  'Father, like You spoke over Jesus, speak over me: "You are My child. I love you. I am pleased with you." Not because of what I''ve done — because of who I am to You. I will live from this identity, not for it. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

-- ============================================================
-- WAITING WELL (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Bringing your desperation to God without apology',
  'In her deep anguish Hannah prayed to the Lord, weeping bitterly.', '1 Samuel 1:10 (NIV)',
  'Hannah wanted a child so badly it wrecked her. Year after year she showed up at the temple with empty arms while Peninnah, her husband''s other wife, paraded her children like proof of God''s favour. The pain was relentless — and public. People even misread her desperate prayer as drunkenness.

But notice what Hannah did with the ache: she didn''t swallow it. She didn''t perform composure. She poured it out before God in its raw, unedited form. Her prayer was messy and tear-soaked and probably hard to watch. And God received every syllable. If you are waiting for something that aches to name out loud, Hannah gives you permission to stop being polite about it. God is not offended by desperation. He is moved by it.',
  'What are you waiting for that feels almost too painful to say out loud? Write it here — unfiltered, unedited, the way Hannah would have prayed it. Let this page hold what your composure cannot.',
  'Lord, like Hannah, I am bringing You the ache I''ve been carrying quietly. I''m done editing my prayers to sound more together than I am. Here is the real request, the raw one. Receive it. I trust You with the mess of my wanting. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Holding a promise that feels impossible',
  'He took him outside and said, "Look up at the sky and count the stars — if indeed you can count them." Then he said to him, "So shall your offspring be."', 'Genesis 15:5 (NIV)',
  'God told Abraham he would be the father of nations. Abraham was seventy-five. Sarah was sixty-five and barren. And then — nothing happened. For twenty-five years. A quarter of a century of looking at the stars and wondering if God had confused him with someone else.

They stumbled during the wait. They improvised with Hagar. They laughed at the absurdity of it all. And honestly? Their doubt was understandable. But the promise outlasted every reasonable objection. Isaac arrived when Abraham was one hundred and Sarah was ninety — at an age so impossible it could only be God. If your promise feels laughable by now, you are in good company. God has always specialised in timelines that make no human sense.',
  'What promise or deep hope have you been holding so long it''s starting to feel ridiculous? Write it down. Then ask yourself honestly: have I stopped believing, or have I just stopped understanding?',
  'Father, like Abraham and Sarah, I am holding something that doesn''t make sense anymore. The math doesn''t work. The window feels closed. But You are the God of impossible timelines. Help me hold the promise without demanding the schedule. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Trusting God when life keeps getting worse before it gets better',
  'The Lord was with Joseph so that he prospered, and he lived in the house of his Egyptian master.', 'Genesis 39:2 (NIV)',
  'Joseph''s story is not a clean arc from struggle to success. It is a brutal thirteen-year descent that looked nothing like favour. Betrayed by his brothers. Sold into slavery. Falsely accused. Forgotten in prison. At every turn, the situation got worse — not better. If Joseph had been tracking God''s faithfulness by his circumstances, he would have had every reason to quit.

But the text says something quietly staggering: "The Lord was with Joseph." Not after the pit. Not once he reached the palace. In the pit. In the prison. In the silence between the dream and its fulfilment. God''s presence is not contingent on your progress. He is with you in the chapter that makes no sense — the one you would skip if you could.',
  'Where in your life does it feel like things are getting worse, not better? Write about that honestly. Then ask: is it possible God is with me here, even though "here" is not where I want to be?',
  'God, I feel more like I''m in the pit than the palace right now. The dream You placed in me feels further away than ever. But if You were with Joseph in every terrible chapter, I choose to believe You are with me in mine. Don''t let me lose heart. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'When God leads you through the wilderness on purpose',
  'Remember how the Lord your God led you all the way in the wilderness these forty years, to humble and test you in order to know what was in your heart.', 'Deuteronomy 8:2 (NIV)',
  'The distance from Egypt to the Promised Land was an eleven-day journey. God took Israel on a forty-year detour. Not because He was lost. Not because He was punishing them. Because there was something in the wilderness they could not learn anywhere else.

The wilderness taught dependence — daily manna that couldn''t be stockpiled, water from rocks, shoes that never wore out. It stripped away every illusion of self-sufficiency. And that terrifies us, doesn''t it? We want the shortcut, the direct route, the efficient path. But God is after something deeper than your arrival. He is after your heart. The long way around is not a wrong turn. It is the curriculum.',
  'What is your wilderness teaching you that comfort never could? Be specific. Where is God stripping away self-sufficiency and building something sturdier in its place?',
  'Lord, I wanted the short road. You chose the long one — and I don''t always understand why. But if the wilderness is where You teach me to depend on You daily, then let me learn well. Don''t let me waste this detour. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'Faithfulness that outlasts your timeline',
  'Sovereign Lord, as you have promised, you may now dismiss your servant in peace. For my eyes have seen your salvation.', 'Luke 2:29-30 (NIV)',
  'Simeon waited his entire life for one moment. Scripture tells us the Holy Spirit had revealed to him that he would not die before seeing the Messiah. So he waited. Day after day, year after year, growing old in the temple, watching every baby brought through those doors and knowing: not this one. Not yet.

And then — Mary and Joseph walked in with a six-week-old infant, and Simeon knew. He took Jesus in his arms and said, essentially, "I can die now. It was worth the whole wait." Some promises take a lifetime. That is not a failure of faith — it is the deepest expression of it. Simeon never grew cynical. He never stopped showing up. His waiting was not passive; it was the most active, expectant posture a life can hold.',
  'If your waiting lasted longer than you ever imagined — even a lifetime — would you still trust that God is faithful? What would it take for you to say, like Simeon, "It was worth it"?',
  'Father, give me Simeon-faith. The kind that shows up every single day expecting You to move, even when decades pass. Keep my heart soft and my eyes open. I don''t want to miss what You''re doing because I got tired of looking. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'The God who sees the woman the world has written off',
  'But the angel said to him: "Do not be afraid, Zechariah; your prayer has been heard. Your wife Elizabeth will bear you a son, and you are to call him John."', 'Luke 1:13 (NIV)',
  'Elizabeth had been barren her entire married life. In her culture, that wasn''t just painful — it was public shame, interpreted as divine disfavour. She had likely stopped praying for a child years ago. The window had closed. Biology had spoken. The world had moved on, and so, she assumed, had God.

But the angel''s words to Zechariah reveal something breathtaking: "Your prayer has been heard." Not "is being heard" — has been heard. Past tense. God heard the prayer Elizabeth stopped praying. He held it when she couldn''t hold it anymore. And He answered it at an age that made everyone stare. If you have a prayer you gave up on, it may still be alive in God''s hands. He does not forget what you have stopped asking for.',
  'Is there a prayer you stopped praying — not because you stopped wanting it, but because you stopped believing it was possible? Write it down again. You are not too late, and neither is God.',
  'God, like Elizabeth, I have prayers I set down because the wait became too heavy. But You heard them then and You remember them now. If it is Your will, breathe life into what I assumed was finished. I open my hands again. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Surrendering the outcome while staying honest about the cost',
  'Father, if you are willing, take this cup from me; yet not my will, but yours be done.', 'Luke 22:42 (NIV)',
  'In the garden of Gethsemane, Jesus sweat drops of blood. He asked His Father for another way. He was honest about the cost of obedience — brutally, physically honest. And then He surrendered. Not with detached calm, but with agonised trust. "Not my will, but yours."

This is the prayer that holds every waiting season together. It does not pretend the wait is easy. It does not minimise what surrender costs. It holds two things at once: I want this to go differently, and I trust You more than I trust my preference. As you close this pathway, you may still be waiting. The answer may not have come. But you are not the same woman who started seven days ago. You have walked with Hannah, Abraham, Joseph, Israel, Simeon, and Elizabeth. You are held by the same God who held them. And He has never once looked away.',
  'Write your own Gethsemane prayer. Name what you want. Name what it costs to wait. And then — only if you mean it — write: "Not my will, but yours." Let this be the most honest prayer you have ever prayed.',
  'Jesus, You understand what it costs to surrender. You didn''t bypass the pain — You prayed through it. Give me the courage to want what I want and still release it into Your hands. Not my will, but Yours. I trust You with the outcome. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

-- ============================================================
-- HEALING AFTER HEARTBREAK (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Giving yourself permission to name the pain honestly',
  'Don''t call me Naomi. Call me Mara, because the Almighty has made my life very bitter. I went away full, but the Lord has brought me back empty.', 'Ruth 1:20-21 (NIV)',
  'Naomi lost her husband. Then both of her sons. She left Bethlehem with a full life and came back with nothing but grief and a daughter-in-law who refused to leave. And when the old neighbors recognized her, she didn''t perform wellness. She said: call me Bitter. That''s who I am now.

There is something holy about Naomi''s refusal to pretend. She didn''t offer a sanitized testimony. She told God exactly what it felt like — and Scripture recorded it without correction. Your pain deserves the same honesty. Before healing can begin, the wound has to be named. Not explained, not spiritualized, not minimized. Named. God is not threatened by your bitterness. He is close enough to hear every word of it.',
  'If you renamed yourself based on how you actually feel right now — the way Naomi renamed herself Mara — what would your name be? Write it down. Then tell God why.',
  'God, I''m not going to pretend this is fine. Like Naomi, I went away full and came back empty. I''m naming the pain today — not to push You away, but because You already see it. Meet me in the honesty. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'God finds you in the place of rejection',
  'Then God opened her eyes and she saw a well of water. So she went and filled the skin with water and gave the boy a drink.', 'Genesis 21:19 (NIV)',
  'Hagar was cast out. Not gently released — sent into the desert with bread and a skin of water, her child on her back, by a man who had once shared his bed with her. Abraham didn''t fight for her. Sarah demanded she go. And Hagar walked into the wilderness with nothing but the certainty that she had been discarded.

When the water ran out, she set her son under a bush and sat a distance away because she could not bear to watch him die. That is the geography of rejection — a place so desolate you cannot even look at your own future. But God heard. God saw. God opened her eyes to a well that was already there. If you feel cast out today, know this: the God who names Himself "the One who sees me" has not lost sight of you.',
  'Where do you feel cast out or discarded — like someone made a decision about your life without your consent? Tell God about the wilderness you''re sitting in right now.',
  'God who sees me, I feel like Hagar — sent away, not chosen, wandering without a clear path. Open my eyes to the well You''ve already placed in this wilderness. I trust that rejection by people is not rejection by You. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'The strange grace of choosing to live after loss',
  'Then David got up from the ground. After he had washed, put on lotions and changed his clothes, he went into the house of the Lord and worshiped.', '2 Samuel 12:20 (NIV)',
  'David fasted. He lay on the ground. He pleaded with God for his dying child, and his servants were afraid to tell him when the boy was gone. But when David learned the truth, he did something his household did not expect: he got up. He washed. He ate. He worshiped.

This was not denial. David had already done the agonizing work of grief while the child was sick. His rising was not a performance of strength — it was a decision to keep living after the worst had happened. Sometimes getting up from the floor is the bravest thing you will ever do. Not because the pain has ended, but because you have decided it will not be the final word. Worship after loss is not pretending the loss didn''t happen. It is telling God: You are still God, even here.',
  'What does "getting up from the ground" look like for you in this season? It doesn''t have to be dramatic. What is one small act of choosing to keep living?',
  'Lord, like David, I have been on the ground. I''ve pleaded. I''ve wept. And what I feared still happened. Give me the grace to rise — not because I''m over it, but because You are still worthy of worship even in this. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'When the pain has lasted so long you''ve almost stopped hoping',
  'She had suffered a great deal under the care of many doctors and had spent all she had, yet instead of getting better she grew worse. When she heard about Jesus, she came up behind him in the crowd and touched his cloak.', 'Mark 5:26-27 (NIV)',
  'Twelve years. She had tried every physician. Spent every coin. And the bleeding — which also meant religious exclusion, social isolation, the inability to be touched — only got worse. Twelve years of diminishing hope is enough to make anyone stop reaching.

But she heard about Jesus. And something inside her that should have been dead by now — the capacity to hope — flickered one more time. She didn''t ask for an audience. She didn''t demand an explanation for twelve years of silence. She just reached. And that reach, trembling and desperate as it was, was enough. If your heartbreak has been a long one — months, years, the kind that people have stopped asking about — hear this: you are not too far gone. One more reach toward Jesus is not foolish. It is the kind of faith that stops Him in His tracks.',
  'Where have you grown tired of hoping? What is the prayer you stopped praying because it hurt too much to keep asking? Write it one more time today.',
  'Jesus, like the woman who bled for twelve years, I''m exhausted. I''ve tried so many things and nothing has worked. But I''m reaching for You one more time. I''m not asking You to explain the delay. I''m asking You to heal what no one else could. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'Holding onto God when nothing makes sense',
  'Though he slay me, yet will I hope in him.', 'Job 13:15 (NIV)',
  'Job lost his children, his wealth, his health, and then his friends became theologians who insisted he must have done something to deserve it. His wife told him to curse God and die. Every external voice said: let go.

But Job held on. Not because he understood — he didn''t. Not because he felt God''s presence — he felt abandoned. He held on because something deeper than logic or feeling anchored him. "Though he slay me, yet will I hope." That "yet" carries the weight of the entire book. It is the hinge between despair and defiance. And in the end, God did not explain Himself. He revealed Himself. Job never got the "why." He got the "Who." Sometimes that is what faithfulness looks like: not understanding a single thing but refusing to let go of the only One who does.',
  'What is your "yet"? Finish this sentence honestly: "Though __________, yet I will hope in God." Let the first blank hold your real pain. Let the second half hold your real defiance.',
  'God, I don''t understand what happened. I may never understand. But like Job, I am choosing You anyway — not because it makes sense, but because You are the only solid ground I have left. You don''t owe me an explanation. But I need Your presence. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Opening your heart after it has been broken',
  'Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.', 'Ruth 1:16 (NIV)',
  'Ruth had every reason to go home. Her husband was dead. Her mother-in-law was bitter and heading to a foreign land with nothing. Orpah made the sensible choice and turned back. No one would have blamed Ruth for doing the same.

But Ruth chose love again. Not romantic love — something arguably braver. She chose covenant loyalty to a grieving woman in a hopeless situation. She chose to attach her future to someone else''s pain. And in doing so, she walked straight into a story she could not have written for herself — provision in Boaz''s field, a new family, a place in the lineage of Jesus. Choosing to love again after loss is terrifying. Your heart knows what it costs now. But Ruth''s story whispers that the heart willing to risk again is the one God tends to surprise.',
  'What has heartbreak made you afraid to try again — a relationship, a friendship, vulnerability, trust? What would it look like to take one small step back toward openness?',
  'Lord, my heart is guarded for good reason. It knows what it costs to love and lose. But I don''t want to live behind walls forever. Give me Ruth''s courage — not reckless, but resolute. Teach me to love again without guarantees. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'The tears of Jesus and the tenderness of God',
  'When Jesus saw her weeping, and the Jews who had come along with her also weeping, he was deeply moved in spirit and troubled. Jesus wept.', 'John 11:33,35 (NIV)',
  'Jesus knew He was about to raise Lazarus. He knew the ending. He knew the miracle was minutes away. And still — He wept. Not for show. The Greek says He was "deeply moved in spirit and troubled," language that suggests something closer to a groan, a shudder of grief that moved through His whole body.

This changes everything about how God relates to your pain. He does not stand at a clinical distance, arms folded, waiting for you to reach the lesson. He enters the grief. He weeps at tombs He intends to open. Your tears are not falling alone. The God of the universe is not ashamed to cry with you — even when He already holds the resurrection in His hands. You are not too much for Him. Your sorrow does not exhaust His compassion. He is here, and He is weeping too.',
  'Picture Jesus standing beside you in your specific grief — not fixing it yet, just present, just weeping with you. What do you want to say to Him? What do you imagine He says back?',
  'Jesus, thank You for weeping. Thank You for not being above my pain. You could have rushed to the miracle, but You stopped to grieve first. Be that close to me now. I don''t need answers today. I just need to know You''re crying with me. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

-- ============================================================
-- CONFIDENCE AND SELF WORTH (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Stepping into purpose when everything in you wants to hide',
  'For if you remain silent at this time, relief and deliverance for the Jews will arise from another place, but you and your father''s family will perish. And who knows but that you have come to your royal position for such a time as this?', 'Esther 4:14 (NIV)',
  'Esther had every reason to stay silent. Speaking up meant risking her life — not just her comfort, but her actual survival. She was a young woman in a system that did not reward female boldness. She could have hidden behind her crown, played it safe, and let someone else handle it.

But Mordecai asked the question that still echoes: what if you are exactly where you are for exactly this reason? Not by accident. Not by luck. By design. Esther didn''t feel ready. She fasted for three days first — she was terrified. But she went anyway. Confidence isn''t the absence of fear. It''s the decision that your calling is bigger than your anxiety. You are not here by accident either. The room you''re afraid to walk into? You may have been placed there on purpose.',
  'What situation in your life right now feels like a "for such a time as this" moment — something you''re being called to step into but fear is holding you back? What would Esther-level courage look like in that specific situation?',
  'God, like Esther, I feel the weight of the moment and my own smallness in it. But You don''t place people by accident. If I am here for such a time as this, give me the courage to stop hiding and start speaking. I choose purpose over self-protection. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Owning authority without apology',
  'Village life in Israel ceased, it ceased, until I, Deborah, arose, a mother in Israel.', 'Judges 5:7 (ESV)',
  'Deborah didn''t wait for permission to lead. She was a prophet, a judge, and a military strategist — in an era when women held almost none of those roles. When Israel''s men were paralysed by fear and Barak refused to go into battle without her, she didn''t shrink from the ask. She rose.

Notice her language: "until I, Deborah, arose." No false humility. No deflection. She named herself in the story because she understood that God had named her first. She led with authority because the authority wasn''t hers to give back — it was God''s, channelled through her willingness. If you''ve been told your confidence is "too much," consider the source. Deborah''s leadership saved a nation. Your voice, your vision, your decisions — they carry weight. Stop handing your authority to people who are too afraid to carry their own.',
  'Where have you been waiting for permission to lead — at work, in your family, in your faith community? What would it look like to simply arise, like Deborah, and step into the role God has already given you?',
  'Lord, You gave Deborah authority and she didn''t apologise for it. Forgive me for the times I''ve handed back what You placed in my hands because someone else was uncomfortable with it. I will lead where You''ve called me. Not with arrogance, but without apology. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Letting God redefine you after failure',
  'When they had finished eating, Jesus said to Simon Peter, "Simon son of John, do you love me more than these?" "Yes, Lord," he said, "you know that I love you." Jesus said, "Feed my lambs."', 'John 21:15 (NIV)',
  'Peter denied Jesus three times. Not in a moment of confusion — in a moment of raw cowardice. He swore he didn''t know the man he''d followed for three years. If anyone had reason to disqualify himself permanently, it was Peter. And yet.

Jesus didn''t lecture him. He made breakfast. He sat with Peter on a beach and asked three questions — one for each denial — not to punish, but to restore. "Do you love me? Then feed my lambs." Jesus handed Peter back his calling while the ashes of his failure were still warm. Weeks later, that same Peter stood before thousands at Pentecost and preached with a boldness that shook a city. Your failure does not get the final word. Not because you pretend it didn''t happen, but because the God who restores is more creative than the shame that accuses.',
  'What failure or mistake have you been carrying as a permanent identity marker — "I''m the person who..."? Write it down, then write beside it: "Jesus asked Peter to feed His lambs after the worst night of Peter''s life. What is He asking me to do next?"',
  'Jesus, like Peter, I have failed in ways that still burn. But You didn''t disqualify him and You haven''t disqualified me. I bring my shame to the beach this morning. Ask me the question again. I love You. Show me what''s next. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'God uses unlikely people from unlikely places',
  'By faith the prostitute Rahab, because she welcomed the spies, was not killed with those who were disobedient.', 'Hebrews 11:31 (NIV)',
  'Rahab was a prostitute in a pagan city. She had no theological training. No respectable reputation. No seat at any table that mattered. And yet she is listed in Hebrews 11 alongside Abraham, Moses, and David — the "Hall of Faith" — because she acted on what she believed when it cost her everything.

She hid the Israelite spies because she recognised something true about their God, and she gambled her life on it. She didn''t wait until her past was cleaned up. She didn''t wait until she was "worthy." She acted from where she was, with what she had. And God wove her into the genealogy of Jesus. Rahab is in the bloodline of the Messiah. If God can do that with her story, what makes you think yours is too messy for Him? Your background is not your disqualification. It might be the very thing that makes your faith extraordinary.',
  'What part of your past or background do you believe disqualifies you from being used by God — your upbringing, your mistakes, your career, your reputation? Write it down. Then read Rahab''s story again and ask: does God agree with that assessment?',
  'God, Rahab came from the margins and You placed her in the lineage of Your Son. I bring You the parts of my story I''ve been hiding — the chapters I thought disqualified me. Use all of it. Nothing in my past surprises You, and nothing is wasted. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'Being bold enough to show up fully, even under criticism',
  'Then he turned toward the woman and said to Simon, "Do you see this woman? I tell you, her many sins have been forgiven — as her great love has shown. But whoever has been forgiven little loves little."', 'Luke 7:44,47 (NIV)',
  'She walked into a room full of men who despised her. A known sinner in the home of a Pharisee — every eye in the room calculated her unworthiness. She didn''t care. She broke open expensive perfume, wept at Jesus'' feet, and wiped them with her hair. It was excessive. It was public. It was the most vulnerable thing anyone in that room had ever witnessed.

The host sneered. The disciples were uncomfortable. And Jesus turned the entire room on its head: "Do you see this woman?" He didn''t defend her reputation. He elevated her devotion. She didn''t wait until she was respectable enough to worship. She brought her whole self — mess, tears, perfume, and all — and Jesus called it love. Stop waiting until you''re cleaned up enough to show up. The critics in the room are not your audience. He is.',
  'Where have you been holding back — in worship, in vulnerability, in expressing love — because you''re afraid of what people will think? What would it look like to break open the perfume anyway?',
  'Jesus, I want the courage of the woman who walked into a hostile room and worshipped You anyway. I''m tired of editing myself for an audience that isn''t You. I bring my unfiltered heart. Let the critics talk. I came for You. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Trusting God with what you cannot control',
  '"I am the Lord''s servant," Mary answered. "May your word to me be fulfilled." Then the angel left her.', 'Luke 1:38 (NIV)',
  'Mary was young, unmarried, and living in a culture where her "yes" to God could get her stoned. The angel''s announcement wasn''t just miraculous — it was socially devastating. She would be misunderstood. Judged. Potentially abandoned by Joseph. And yet her response was not panic or negotiation. It was surrender.

"Let it be to me according to your word." That is not passivity. That is the most radical confidence imaginable — the confidence that God''s plan, even when it wrecks yours, is worth trusting completely. Mary''s strength wasn''t in controlling her circumstances. It was in releasing them. Sometimes the boldest thing you can do is stop white-knuckling the outcome and open your hands. Surrender is not weakness dressed in spiritual language. It is confidence that has graduated from self-reliance to God-reliance.',
  'What are you gripping tightly right now — a relationship, a timeline, a career plan, an outcome? What would your own "let it be" prayer sound like? Write it, even if your hands are still shaking.',
  'Lord, like Mary, I say yes — even to the things I don''t understand. I release my grip on the outcomes I''ve been trying to control. Your plan is better than my anxiety. May it be to me according to Your word. I trust You with what I cannot manage. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Finding God-confidence in your most constrained season',
  'I can do all this through him who gives me strength.', 'Philippians 4:13 (NIV)',
  'This verse gets printed on coffee mugs and gym walls, but Paul wrote it from a Roman prison cell. He was chained. Beaten. Abandoned by people he''d poured into. And from that place of total constraint, he wrote the most confident sentence in Scripture — not about his own ability, but about the strength flowing through him.

"I can do all this" didn''t mean "I can achieve anything I dream of." It meant: in plenty or in want, in freedom or in chains, I have access to a strength that does not depend on my circumstances. That is the confidence this week has been building toward. Not the kind that needs everything to go right. The kind that holds steady when everything goes wrong. You don''t need a better situation to be confident. You need the God who met Paul in prison, Peter on the beach, Esther in the throne room, and Rahab on the wall. He is with you here. Walk like you know it.',
  'Write your confidence declaration — a 3-5 sentence statement drawn from what you''ve learned this week. Include the character whose story spoke to you most. Start each sentence with "I am" or "I can." Read it aloud. Mean it.',
  'God, Paul found strength in chains. Esther found courage in danger. Deborah found authority in chaos. Peter found restoration in failure. Rahab found purpose in the margins. I find You in all of it. I can do all things through You. From this day forward, I stop shrinking. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

-- ============================================================
-- DISCIPLINE WITH GRACE (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Daniel — faithful habits in a hostile culture',
  'Now when Daniel learned that the decree had been published, he went home to his upstairs room where the windows opened toward Jerusalem. Three times a day he got down on his knees and prayed, giving thanks to his God, just as he had done before.', 'Daniel 6:10 (NIV)',
  'Daniel was surrounded by a culture that worshipped everything except his God. He served a foreign king in a foreign land with foreign rules. And when the law said praying could cost him his life, Daniel went upstairs, opened the window, and did exactly what he had always done.

Notice: it says "just as he had done before." Daniel''s faithfulness in the crisis was built long before the crisis arrived. He didn''t suddenly become disciplined under pressure. His daily rhythm of prayer had already formed the shape of his life. That is what quiet, consistent devotion does — it prepares you for the moments you cannot prepare for.

You are also living in a culture that pulls your attention in a thousand directions. You don''t need to be dramatic about it. You just need to open the window and pray — just as you have done before.',
  'What are the "hostile" distractions in your daily life that pull you away from time with God? What would your version of Daniel''s three-times-a-day rhythm look like — something small, sustainable, and already woven into your existing routine?',
  'Lord, give me Daniel''s steadiness. Not his perfection — his consistency. Help me build habits now that will hold me later. When the world gets loud, let my rhythm with You be the thing I return to without thinking. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Mary of Bethany — stillness as holy discipline',
  '"Martha, Martha," the Lord answered, "you are worried and upset about many things, but few things are needed — or indeed only one. Mary has chosen what is better, and it will not be taken away from her."', 'Luke 10:41-42 (NIV)',
  'Martha gets a bad reputation, but let''s be honest — most of us are her. We equate busyness with faithfulness. We believe that doing more for God means being closer to God. And we quietly resent the people who seem to sit still while we run ourselves ragged.

But Jesus didn''t rebuke Martha for serving. He gently named the real issue: she was worried and upset about many things. Her discipline of service had become a source of anxiety rather than worship. Meanwhile, Mary chose to sit. To listen. To be present. And Jesus called that "the better thing."

Sometimes the most disciplined choice you can make is to stop doing and start being. Not because your work doesn''t matter, but because your presence with Jesus is the one thing that won''t be taken from you.',
  'Are you more like Martha or Mary right now? What would it look like to choose "the better thing" today — not abandoning your responsibilities, but pausing long enough to sit with Jesus before you serve?',
  'Jesus, I confess I have been Martha — busy, anxious, measuring my worth by my output. Teach me Mary''s discipline of presence. Help me believe that sitting at Your feet is not laziness. It is the better thing. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'The early church — daily devoted rhythms',
  'They devoted themselves to the apostles'' teaching and to fellowship, to the breaking of bread and to prayer. Everyone was filled with awe at the many wonders and signs performed by the apostles.', 'Acts 2:42-43 (NIV)',
  'The early church didn''t have a ten-step discipleship programme or a morning routine optimised for spiritual productivity. They had four things: teaching, fellowship, breaking bread, and prayer. And they devoted themselves to these daily — not perfectly, but consistently.

The word "devoted" here doesn''t mean they white-knuckled their way through spiritual disciplines. It means they kept returning. They showed up to the table, to the teaching, to each other. And something remarkable happened: awe filled the room. Wonders followed.

Discipline in isolation is exhausting. But discipline in community — a friend who texts "did you pray today?", a small group that shares honestly, a table where bread is broken — that is sustainable. You were never meant to build holy habits alone. The early church knew this. They grew together, not just individually.',
  'Which of the four devotions — teaching, fellowship, breaking bread, prayer — is most present in your life right now? Which is most absent? Who could you invite into a shared rhythm of faith?',
  'Father, I don''t want to do this alone. Lead me to community that is honest, consistent, and devoted — not perfect, but faithful. Help me be the kind of friend who shows up and invites others to show up too. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'Jesus — withdrawing to pray as a regular practice',
  'But Jesus often withdrew to lonely places and prayed.', 'Luke 5:16 (NIV)',
  'The word "often" changes everything. Jesus didn''t withdraw to pray once, in a moment of desperation. He did it regularly, as a rhythm. The crowds were pressing in. The needs were endless. The ministry was growing. And in the middle of it all, Jesus left.

This was not avoidance. It was the most important discipline of His ministry. He withdrew so He could return whole. He stepped away from the urgent so He could stay connected to the eternal. If the Son of God needed regular solitude to sustain His calling, what makes us think we can run on empty and call it faithfulness?

Withdrawing is not selfish. It is how you protect the well that everyone else is drawing from. You cannot pour out what you have not first received in quiet.',
  'When was the last time you truly withdrew — not collapsed from exhaustion, but intentionally stepped away to be with God? What keeps you from making solitude a regular rhythm instead of an emergency measure?',
  'Jesus, You modelled what I struggle to do — stepping away when there was still more to give. Teach me to withdraw without guilt. Help me see that solitude is not abandoning my responsibilities. It is what makes me faithful to them. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'The Proverbs 31 woman — not perfection but purposeful living',
  'She is clothed with strength and dignity; she can laugh at the days to come. She speaks with wisdom, and faithful instruction is on her tongue. Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised.', 'Proverbs 31:25-26, 30 (NIV)',
  'The Proverbs 31 woman has been used as a weapon against women for centuries — an impossible standard of domestic perfection that leaves you feeling like you will never be enough. But read her again, slowly. She laughs at the days to come. She is not anxious about tomorrow. Her strength is not frantic productivity — it is the quiet confidence of a woman who fears the Lord.

This passage was never meant to be a checklist. It is a portrait of a woman who lives with purpose, not perfection. She makes decisions rooted in wisdom, not approval. She works hard, yes — but notice what is praised at the end: not her output, not her efficiency, not her spotless home. Her fear of the Lord.

You do not need to do everything she did. You need the posture she held: purposeful, steady, unafraid of the future because she knows who holds it.',
  'How has the Proverbs 31 woman been presented to you — as inspiration or as pressure? What shifts when you read her not as a to-do list but as a woman at peace with her purpose?',
  'Lord, free me from the lie that discipline means doing everything perfectly. Clothe me with strength and dignity — not performance and anxiety. I want to laugh at the days to come because I trust the One who holds them. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Nehemiah — building with one hand, resting with the other',
  'Those who carried materials did their work with one hand and held a weapon in the other, and each of the builders wore his sword at his side as he built.', 'Nehemiah 4:17-18 (NIV)',
  'Nehemiah''s people were rebuilding the wall of Jerusalem while enemies threatened to attack from every side. The work was urgent. The opposition was real. And Nehemiah''s solution was not to work harder or sleep less. He stationed guards. He organised shifts. He told the people: work with one hand, and hold your defence with the other.

There is profound wisdom here for every woman in a building season. You may be rebuilding your health, your habits, your spiritual life, your career — and the opposition is real. Discouragement, exhaustion, comparison, shame. The temptation is to pour everything into the building and leave nothing for your own protection.

But Nehemiah knew that the wall would never be finished if the builders were destroyed in the process. Protect yourself while you build. Rest is not the opposite of progress. It is what makes progress survivable.',
  'What are you building right now? And what is threatening it — not externally, but internally? Where have you been so focused on the work that you have forgotten to guard your own soul?',
  'God, I am in a building season. The work feels urgent and the opposition feels constant. Help me build with one hand and rest with the other. I don''t want to finish the wall and lose myself in the process. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Paul — running the race with endurance',
  'Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith.', 'Hebrews 12:1-2 (NIV)',
  'The writer of Hebrews does not say "sprint the race." He says "run with perseverance." This is a long-distance word. A marathon word. A pace-yourself word. And the instruction that follows is not about running harder — it is about running lighter. Throw off what hinders. Release what entangles. Fix your eyes on Jesus.

As you finish this pathway, here is the truth you need most: discipline is not about intensity. It is about direction. The question is not "how hard am I running?" but "who am I running toward?" When your eyes are on Jesus — the one who started your faith and will finish it — you can afford to run at a sustainable pace.

You do not need to sprint into next week with a perfect plan. You need to keep going, keep looking at Him, and keep releasing what weighs you down. That is grace-held endurance. That is discipline that lasts.',
  'What do you need to throw off — not a sin, but a weight? A standard, an expectation, a comparison, a pace that was never yours to run? What would your race look like if you ran it at the pace of grace?',
  'Jesus, You are the pioneer and perfecter of my faith — not me. I fix my eyes on You. Help me throw off what hinders, release what entangles, and run the race You marked out for me, not anyone else''s. I will run with perseverance, not perfection. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

-- ============================================================
-- CAREER AND CALLING (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Ruth — loyalty, risk, and a new path in a foreign land',
  'But Ruth replied, "Don''t urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God."', 'Ruth 1:16 (NIV)',
  'Ruth had every reason to go back to what was familiar. She was a widow with no income, no children, no status. The safe choice was obvious: return to Moab, remarry, rebuild on known ground. Instead she walked into a foreign country with nothing but loyalty and a willingness to work.

Sometimes calling doesn''t begin with a vision. It begins with a step into the unknown because something in your spirit says "this is the way." Ruth didn''t have a five-year plan. She had faithfulness — to Naomi, to God, to the next right thing. She gleaned in fields that weren''t hers and trusted that provision would meet her there. Your new beginning doesn''t need to be glamorous. It just needs to be honest.',
  'Where in your career or calling are you being asked to leave something familiar behind? What would it look like to take one faithful step forward, even without a clear destination?',
  'God, give me Ruth''s courage — the willingness to start over without a guarantee. I don''t need to see the whole field. I just need to trust that You are in the land where You''re leading me. Help me glean faithfully wherever I am. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Nehemiah — a burden that became a calling',
  'They said to me, "Those who survived the exile and are back in the province are in great trouble and disgrace. The wall of Jerusalem is broken down, and its gates have been burned with fire." When I heard these things, I sat down and wept.', 'Nehemiah 1:3-4 (NIV)',
  'Nehemiah had a comfortable position — cupbearer to the king. Good title, good access, good life. Then he heard about the broken walls of Jerusalem, and something cracked open inside him. He wept. He fasted. He prayed for days. The burden wouldn''t leave.

Pay attention to what makes you weep. Not what annoys you or mildly bothers you — what wrecks you. Nehemiah didn''t go looking for a calling. The calling found him through a burden he couldn''t shake. He didn''t quit his job the next morning. He prayed, he planned, and when the time was right, he asked for permission to go and rebuild. Calling often starts not with excitement but with a holy heartbreak that refuses to stay quiet.',
  'What breaks your heart in a way you can''t seem to move past? A problem in your community, your industry, your world? Could that burden be the beginning of a calling?',
  'Lord, show me the walls that are broken down — the ones You want me to notice. If this burden I carry is from You, give me the courage of Nehemiah: to pray first, plan wisely, and move when You say go. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Lydia — business and faith working together',
  'One of those listening was a woman from the city of Thyatira named Lydia, a dealer in purple cloth. She was a worshiper of God. The Lord opened her heart to respond to Paul''s message.', 'Acts 16:14 (NIV)',
  'Lydia was a businesswoman before she met Paul and a businesswoman after. Her conversion didn''t pull her out of the marketplace — it infused it with new purpose. She sold luxury fabric, managed trade networks, and ran a household large enough to host traveling missionaries. None of that stopped when she was baptized.

Somewhere we absorbed the lie that sacred work happens in churches and secular work happens everywhere else. Lydia demolishes that. She worshiped God and dealt in purple cloth — in the same life, on the same days. Your career is not a distraction from your faith. It is one of the primary places your faith gets lived out. The boardroom, the studio, the classroom — these are not waiting rooms for your real calling. They are your calling.',
  'Do you tend to separate your faith life from your work life? Where could you let them overlap more naturally, the way Lydia seemed to?',
  'God, I don''t want a divided life — spiritual on Sundays and secular on Mondays. Like Lydia, let me be both a worshiper and a worker, fully integrated. Open my heart the way You opened hers, right in the middle of her ordinary workday. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'Jeremiah — called before being born, reluctant prophet',
  '"Before I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations." "Alas, Sovereign Lord," I said, "I do not know how to speak; I am too young."', 'Jeremiah 1:5-6 (NIV)',
  'God told Jeremiah he was set apart before he existed, and Jeremiah''s immediate response was "I''m too young." It''s almost funny — God speaks eternal purpose, and Jeremiah answers with a résumé gap. We do the same thing. God stirs something in us and we respond with a list of reasons we''re not qualified yet.

But notice: God didn''t wait for Jeremiah to feel ready. Readiness was never the requirement — willingness was. You may feel too young, too inexperienced, too uncertain. That''s not disqualifying. God''s calling was established before your doubts existed. He is not pacing heaven, worried about your imposter syndrome. He knew you before you were formed and appointed you anyway.',
  'What is your version of "I am too young" — the thing you tell yourself that makes you feel unqualified for what God might be calling you to? Write it down, then write Jeremiah 1:5 underneath it.',
  'Lord, You knew me before I was born and You set me apart. I don''t feel ready. I don''t feel qualified. But You didn''t ask me to feel ready — You asked me to be willing. Here I am. Speak, and help me stop disqualifying myself. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'The Parable of the Talents — stewardship of what you''re given',
  '"His master replied, ''Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things. Come and share your master''s happiness!''"', 'Matthew 25:21 (NIV)',
  'The parable of the talents is not a productivity sermon. It''s a story about trust. The master gave each servant a different amount — not equally, but intentionally. The issue was never how much they had. It was whether they did something with it or buried it in the ground out of fear.

The servant who buried his talent didn''t lose it to laziness. He lost it to fear. He was so afraid of getting it wrong that he did nothing at all. That is the real enemy of calling — not failure, but the paralysis that comes from being afraid to try. God is not asking you to produce a spectacular return. He is asking you to be faithful with what is already in your hands. Start there. That is enough.',
  'What has God already placed in your hands — a skill, a relationship, an opportunity, a resource? Are you investing it or burying it? Be honest about what fear might be holding you back.',
  'Father, I don''t want to bury what You''ve given me because I''m afraid of getting it wrong. Show me what''s already in my hands. Give me the courage to invest it faithfully, even imperfectly. I would rather try and stumble than hide and waste. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Bezalel — called to create, gifted by the Spirit for craft',
  '"See, I have chosen Bezalel son of Uri... and I have filled him with the Spirit of God, with wisdom, with understanding, with knowledge and with all kinds of skills — to make artistic designs for work in gold, silver and bronze, to cut and set stones, to work in wood, and to engage in all kinds of crafts."', 'Exodus 31:2-5 (NIV)',
  'Bezalel is the first person in Scripture described as being filled with the Spirit of God. Not a prophet. Not a priest. A craftsman. God filled him with His Spirit specifically so he could make beautiful things with his hands — metalwork, stonework, woodwork. Skill and artistry as divine gifts.

This reframes everything. Your talent for design, your eye for detail, your ability to build or write or organize or code — these are not lesser gifts because they''re not "ministry." The Spirit of God fills people for craft, not just for preaching. Whatever your skilled work is, it can be Spirit-led. You don''t need a pulpit to be anointed. You might just need your desk, your tools, and a willing heart.',
  'What is your craft — the thing you do with skill that you might have dismissed as "not spiritual enough"? How does it change things to know that the first Spirit-filled person in the Bible was an artisan?',
  'God, fill me with Your Spirit the way You filled Bezalel — not just for prayer, but for my craft. Give me wisdom, understanding, and skill in the work of my hands. Let my creativity and competence be an act of worship. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Jesus at 12 — "I must be about my Father''s business"',
  '"Why were you searching for me?" he asked. "Didn''t you know I had to be in my Father''s house?"', 'Luke 2:49 (NIV)',
  'Jesus was twelve years old — not yet in public ministry, not yet performing miracles. He was a boy in a temple, and when His parents found Him after days of searching, He said something extraordinary: "I had to be in my Father''s house." Even before His career began, He knew whose business He was about.

This is the anchor for every question about calling. Before the title, before the paycheck, before the platform — whose business are you about? When your career is rooted in your Father''s purposes, you can hold the specifics loosely. Jobs will change. Industries will shift. Roles will evolve. But if the foundation is "I am about my Father''s business," you will never be without a calling. The form changes. The foundation doesn''t.',
  'If someone asked you today, "Whose business are you about?" — what would your honest answer be? Your own? Your employer''s? Your Father''s? What would need to shift for that answer to feel truer?',
  'Father, I want to be about Your business — not my ambition, not my anxiety, not the world''s definition of success. Root my calling in You so deeply that when the specifics change, my foundation doesn''t. I am Yours. My work is Yours. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

