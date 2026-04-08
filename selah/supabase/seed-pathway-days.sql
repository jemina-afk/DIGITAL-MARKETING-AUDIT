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
SELECT p.id, 1, 'Martha - worried about many things',
  'Martha, Martha, you are worried and upset about many things, but few things are needed - or indeed only one. Mary has chosen what is better, and it will not be taken away from her.', 'Luke 10:41-42 (NIV)',
  'Martha and Mary were sisters - close friends of Jesus. One day, Jesus came to their home for a meal. Mary sat at His feet listening, completely still. Martha, meanwhile, was rushing around the kitchen, preparing food, setting the table, doing everything a good host should do.

Finally, Martha snapped. She marched up to Jesus and said, essentially, "Don''t You care that my sister left me to do all the work? Tell her to help me!" She wasn''t being lazy - she was being responsible. She was serving. But Jesus'' response was gentle and surprising: "Martha, Martha. You are worried and upset about many things, but only one thing is needed."

He wasn''t criticising her serving. He was naming what was underneath it: worry. She was so consumed by getting everything right that she missed the one thing that mattered - being present with Him. Many of us are Martha. We carry the mental load of everything - work, relationships, health, the future - and call it responsibility. But Jesus invites us to stop, sit, and let Him carry what we were never meant to hold.',
  'Where are you being Martha right now - so busy managing, worrying, or striving that you''ve forgotten to simply be with God? What is the "one thing needed" for you today?',
  'Jesus, I''m Martha today. Worried about many things, running from task to task, carrying more than I should. Slow me down. Help me choose the better thing - Your presence over my productivity. I don''t want to miss You while I''m busy working for You. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Elijah - collapsed after his greatest victory',
  'Elijah was afraid and ran for his life... He came to a broom bush, sat down under it and prayed that he might die. "I have had enough, Lord," he said.', '1 Kings 19:3-4 (NIV)',
  'Elijah was a prophet - one of the most powerful in the entire Bible. In one of the most dramatic scenes in Scripture, he stood alone on a mountain against 450 prophets who served a false god called Baal. He challenged them to a contest: both sides would set up an altar, and whichever god answered by sending fire from heaven was the real God.

The 450 prophets prayed, danced, and screamed for hours. Nothing happened. Then Elijah prayed a simple prayer - and fire fell from the sky, consuming the altar, the water around it, even the stones. It was an undeniable miracle. Elijah was on top of the world.

And then, almost immediately, a queen named Jezebel sent him a death threat. And this man - who had just called down fire from heaven - ran. He collapsed under a desert bush and said, "I''ve had enough, Lord. Take my life."

This is one of the most honest portraits of anxiety and burnout in the Bible. It shows us that faithfulness doesn''t make you immune to fear. You can have a powerful week and still fall apart on Friday. You can know God is real and still feel terrified.

And here''s what God did next: He didn''t lecture Elijah. He didn''t quote Scripture at him. He sent an angel with bread and water, and let him sleep. He met Elijah''s collapse with tenderness, not theology. He will do the same for you.',
  'Have you ever had an "Elijah moment" - felt spiritually strong one day and completely overwhelmed the next? What happened? How did God meet you (or how do you wish He had)?',
  'Lord, I feel like Elijah under the broom tree. Tired. Afraid. Done. You didn''t scold him - You fed him and let him rest. Do the same for me. I don''t need a sermon right now. I need Your gentle care. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Hagar - alone in the desert, seen by God',
  'She gave this name to the Lord who spoke to her: "You are the God who sees me," for she said, "I have now seen the One who sees me."', 'Genesis 16:13 (NIV)',
  'Hagar''s story is one of the most overlooked in the Bible, and one of the most powerful. She was an Egyptian slave who belonged to a woman named Sarah - the wife of Abraham, the father of the Jewish nation. Sarah couldn''t have children, so she gave Hagar to Abraham to have a child through her (a common but painful practice in that culture). Hagar became pregnant.

Once pregnant, tensions between the two women exploded. Sarah treated Hagar so harshly that Hagar ran away - pregnant, alone, with nothing, into the desert. She was heading toward certain death.

And that''s where God found her. Not in a temple. Not in a palace. In a wilderness, by a spring of water, running from everything. An angel spoke to her, called her by name, and made her a promise about her future. Hagar''s response was astonishment: "You are the God who sees me." She was the first person in the Bible to give God a name.

This matters for your anxiety because so much of it comes from feeling invisible - like no one truly understands the weight you carry, the thoughts you can''t shut off, the fear you hide behind a functioning exterior. But the God who found a pregnant slave in the desert sees you, too. He is El Roi - the God who sees. Not just your situation. You. The real, messy, frightened, struggling you. And He doesn''t look away.',
  'Where do you feel unseen right now - in your anxiety, your struggles, your real feelings? Write honestly to the God who sees you. What do you want Him to know?',
  'El Roi, God who sees me - You see the anxiety I hide from everyone else. You see the panic behind the calm face. You see me in my desert. I don''t need to pretend with You. See me. Stay with me. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'David - raw, unfiltered prayers to God',
  'How long, Lord? Will you forget me forever? How long will you hide your face from me? How long must I wrestle with my thoughts and day after day have sorrow in my heart?', 'Psalm 13:1-2 (NIV)',
  'David was the greatest king of Israel - a warrior, a poet, a leader. He killed a giant named Goliath as a teenager. He united a nation. God called him "a man after my own heart." He wrote most of the Psalms, the songbook of the Bible.

And yet, read what he actually wrote: "How long will you forget me? Will it be forever? How long must I wrestle with my own thoughts? Day after day, sorrow fills my heart." This is the king. The hero. The man after God''s heart. And he was anxious, sad, angry, and scared. Regularly.

The Psalms are not polished prayers. They''re raw, messy, emotional outbursts directed at God. David screamed at Him. Questioned Him. Accused Him of hiding. Begged Him to show up. And God never once withdrew His presence. Not once.

This gives you permission. Your honest, unfiltered prayers are not disrespectful. They are the deepest form of trust - believing God can handle the real you. He doesn''t need your prayers cleaned up. He needs them honest.',
  'Write your own psalm today. Start with how you honestly feel (even if it''s messy, angry, or afraid). End with one thing you know to be true about God, even if you don''t feel it right now.',
  'God, like David, I come to You unfiltered. I''m wrestling with my own thoughts. Some days feel endless. But I choose to trust that You hear every word - the desperate ones and the doubting ones. You are still God, even when I am still afraid. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'The Israelites - daily bread in the wilderness',
  'Then the Lord said to Moses, "I will rain down bread from heaven for you. The people are to go out each day and gather enough for that day."', 'Exodus 16:4 (NIV)',
  'After God freed the Israelites from slavery in Egypt (through dramatic plagues and the parting of the Red Sea), they found themselves in a desert with no food. They panicked. They complained. They said they''d rather go back to being slaves than starve.

So God did something remarkable: every morning, He covered the ground with a bread-like substance called manna. But He gave a specific instruction - gather only enough for today. Not tomorrow. Not the week. Just today. Some people tried to stockpile extra, and by morning it was full of worms and smelled terrible.

This wasn''t cruelty. It was training. God was teaching an entire nation to trust Him daily - not weekly, not yearly, not once-and-for-all, but one day at a time.

Anxiety is often the attempt to stockpile grace for tomorrow. You try to solve next week''s problems with today''s energy. You rehearse conversations that haven''t happened. You plan for worst-case scenarios that may never arrive. But God''s economy works differently: today''s grace is enough for today. Tomorrow''s grace will arrive tomorrow. You cannot carry both, and you were never asked to.',
  'What "tomorrow problem" are you trying to solve with today''s energy? Name it. Can you consciously place it in God''s hands and trust that tomorrow''s provision will be there when you need it?',
  'Father, teach me the manna lesson. I''ve been hoarding worry, trying to prepare for every possible future. But You only give grace for today. Help me gather just enough for now - and trust that tomorrow''s bread will be there when I wake. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Jesus - asleep in a sinking boat',
  'Jesus was in the stern, sleeping on a cushion. The disciples woke him and said to him, "Teacher, don''t you care if we drown?" He got up, rebuked the wind and said to the waves, "Quiet! Be still."', 'Mark 4:38-39 (NIV)',
  'Picture this scene: Jesus and His closest followers are in a small fishing boat on a large lake. A violent storm hits - so violent that waves are breaking over the boat and filling it with water. These aren''t nervous tourists. Several of them are professional fishermen who grew up on this lake. They know storms. And they are terrified.

Meanwhile, Jesus is asleep. In the back of the boat. On a cushion. In the middle of a storm that seasoned sailors think will kill them.

The disciples wake Him with a question that reveals the deepest fear behind every anxious thought: "Don''t You care?" That''s what anxiety whispers. Don''t You see what''s happening? Don''t You care that I''m drowning? Are You even paying attention?

Jesus stood up and spoke three words to the storm: "Quiet. Be still." And the wind stopped. The water went flat. Instant calm.

Then He turned to them and asked, "Why are you so afraid? Do you still have no faith?" He wasn''t angry. He was inviting them to see what they''d missed: they were in a boat with the God who made the sea. The storm was real. The danger felt real. But so was the person sleeping beside them. He speaks the same words over your storm today.',
  'When have you asked God, "Don''t You care?" What was the situation? Looking back, can you see evidence that He was in the boat with you, even when it felt like He was sleeping?',
  'Jesus, I feel like the disciples - waves crashing, panicking, wondering if You''re even awake. Speak to my storm today. Not necessarily to remove it, but to remind me You are in this boat with me. Be still in me. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Paul - writing about peace from a prison cell',
  'And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.', 'Philippians 4:7 (NIV)',
  'The man who wrote these words about peace was named Paul. He was one of the earliest and most influential followers of Jesus - responsible for planting churches across the ancient world and writing nearly half the New Testament. He was also beaten, shipwrecked, stoned, imprisoned, and eventually executed for his faith.

When he wrote "the peace of God will guard your hearts," he wasn''t in a comfortable home. He was in a Roman prison - chained, awaiting trial, uncertain whether he would live or die. And from that cell, he wrote one of the most joy-filled, peace-saturated letters in the Bible.

That detail matters, because it means this peace is not dependent on good circumstances. It "transcends understanding" - meaning the people around you won''t understand how you''re calm. You might not even understand it yourself. It doesn''t come from having answers. It comes from knowing the One who does.

As you close this pathway, carry this: the peace God offers is not a feeling you generate. It is a guard - posted at the door of your heart by God Himself. When anxiety knocks - and it will - the guard is already there. You don''t have to fight alone. You never did.',
  'Reflect on this entire week. What has shifted in how you relate to your anxiety? Which character''s story resonated most? What truth will you carry forward when worry returns?',
  'God, I don''t fully understand this peace - and that''s the point. It transcends my understanding. Post it as a guard over my heart and my mind. When anxiety returns, let this peace meet it at the door. Thank You for Martha, Elijah, Hagar, David, the Israelites, the disciples, and Paul - for showing me I''m not alone in this. Amen.'
FROM public.pathways p WHERE p.slug = 'anxiety-and-peace';

-- ============================================================
-- IDENTITY IN CHRIST (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Gideon - the insecure hero',
  'The Lord turned to him and said, "Go in the strength you have and save Israel out of Midian''s hand. Am I not sending you?" "Pardon me, my lord," Gideon replied, "but how can I save Israel? My clan is the weakest in Manasseh, and I am the least in my family."', 'Judges 6:14-15 (NIV)',
  'Gideon lived during one of the darkest periods in ancient Israel''s history. A brutal enemy nation called the Midianites had been terrorising his people for seven years - raiding their land every harvest season, stealing their crops and livestock, leaving them starving and hiding in caves. The people of Israel were so beaten down that they had lost all sense of who they were supposed to be.

This is the scene when an angel shows up and finds Gideon - not standing tall, not leading troops, but hiding in a wine press, secretly threshing wheat so the Midianites wouldn''t find it and take it. He was doing a field job in a cramped hole in the ground, driven by fear. And the angel''s first words to him were stunning: "The Lord is with you, mighty warrior."

Gideon must have looked around to see who the angel was talking to. Mighty warrior? Him? He immediately protested: "My clan is the weakest. I am the least in my family." He had a whole identity built around his smallness. But God wasn''t describing Gideon''s present circumstances - He was declaring Gideon''s true identity. God saw something in that frightened man that Gideon couldn''t see in himself.

God does the same thing with you. He doesn''t name you by your fears, your track record, or what other people have said about you. He calls you by what He placed inside you before the world had a say. Your smallness is not disqualifying - it''s the exact canvas God chooses to paint His strength on.',
  'What is your version of "I am the least"? What do you tell yourself that disqualifies you? Now write what God might be calling you instead.',
  'God, like Gideon, I feel small. Unqualified. The least likely. But You called him "mighty warrior" when he was hiding in a hole, threshing wheat in fear. What are You calling me that I haven''t believed yet? Open my ears to hear my real name - the one You gave me before I ever had a chance to fail. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Leah - the unwanted wife God saw',
  'When the Lord saw that Leah was not loved, he enabled her to conceive.', 'Genesis 29:31 (NIV)',
  'To understand Leah''s story, you need to know what happened to her. A man named Jacob fell deeply in love with Leah''s younger sister, Rachel. Rachel was described as beautiful in form and appearance. Leah was described as having "weak eyes" - which scholars believe meant she was plain-looking, or perhaps had a condition that made her less attractive by the standards of her culture. Jacob wanted Rachel so badly that he agreed to work for their father, Laban, for seven full years just to marry her.

But on the wedding night, Laban pulled a devastating trick. He swapped Rachel for Leah under the veil. When Jacob woke up the next morning and realised he had married the wrong sister, he was furious. He confronted Laban and agreed to work another seven years just to also marry Rachel. The text says it plainly: "He loved Rachel more than Leah."

Imagine living in that house. Every single day, Leah knew she was the wife her husband never wanted. She was a consolation prize. When she had children, she named them out of her desperation - her first son''s name meant "See, a son," because she said, "Surely my husband will love me now." Her second son''s name meant "One who hears," because she said, "The Lord heard that I am not loved."

But here is what most people miss: Leah - the rejected, overlooked, second-choice wife - is in the direct ancestral line of Jesus Christ. God didn''t just see Leah. He placed her at the centre of the most important story ever told. If you have ever felt like the one not picked, the one people settle for - God sees you the way He saw Leah.',
  'Where have you felt like Leah - unchosen, second place, not preferred? How does it change things to know God saw her and placed her in the lineage of Christ?',
  'Lord, I have felt like Leah - unseen, not the first choice, living in someone else''s shadow. But You saw her when no one else did. You wove her into the most important story ever told. See me the same way. My worth is not determined by who chooses me. It is determined by the God who already has. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Moses - "I am slow of speech"',
  'Moses said to the Lord, "Pardon your servant, Lord. I have never been eloquent... I am slow of speech and tongue." The Lord said to him, "Who gave human beings their mouths?... Now go; I will help you speak."', 'Exodus 4:10-12 (NIV)',
  'Moses had one of the most dramatic backstories of anyone in the Bible. He was born as a Hebrew baby during a time when the Egyptian Pharaoh had ordered every newborn Hebrew boy to be killed - thrown into the Nile River to drown. His mother, desperate to save him, placed him in a waterproof basket and set him floating on the river. By an extraordinary turn of events, Pharaoh''s own daughter found the basket, felt compassion for the baby, and raised Moses as her own grandson in the Egyptian royal palace.

So Moses grew up with two identities: an Egyptian prince on the outside, a Hebrew on the inside. One day, as an adult, he saw an Egyptian beating a Hebrew slave and killed the Egyptian in a rage. When word got out, he had to flee for his life. He ended up in the middle of the desert, working as a shepherd for forty years - a fallen prince, a fugitive, a man with blood on his hands.

Then God appeared to him in a burning bush and told him to go back to Egypt and demand that the most powerful ruler on earth release an entire nation of slaves. Moses'' response was a flood of excuses: "Who am I to do this? They won''t believe me. I''m not a good speaker - I''m slow of speech." He had a stutter, or some kind of speech difficulty, and he was sure that disqualified him.

God''s answer was not to fix the stutter. It was to ask a question: "Who made your mouth?" Your weaknesses don''t surprise God. He designed you - all of you, including the parts you wish were different. He doesn''t work despite your limitations. He works through them.',
  'What is your "I am slow of speech" - the thing you believe disqualifies you? Write God''s response to Moses and apply it to yourself.',
  'God, I have my own list of disqualifications - reasons I''m not good enough, not ready enough, not the right person. But You didn''t accept Moses'' excuses, and You don''t accept mine. You made me, every part of me. Help me trust that You knew what You were doing. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'The Samaritan woman - shame into testimony',
  'Then, leaving her water jar, the woman went back to the town and said to the people, "Come, see a man who told me everything I ever did. Could this be the Messiah?"', 'John 4:28-29 (NIV)',
  'In the ancient world, women went to the community well in the early morning - it was cooler, and it was a social event, a time to talk and connect. But this woman came at noon, the hottest part of the day, when no one else would be there. She came alone. That tells you everything about her social standing.

She was a Samaritan, which already made her an outsider - the Jewish people and Samaritans had a bitter, centuries-old ethnic hatred between them and refused to even share drinking cups. On top of that, she had been married five times and was now living with a man who wasn''t her husband. In her culture, that kind of history didn''t just mean personal pain - it meant public shame. She was the woman people whispered about. The one mothers told their daughters not to become.

So when Jesus - a Jewish rabbi - sat down at that well and asked her for a drink of water, it broke every social rule that existed. Jews didn''t talk to Samaritans. Men didn''t approach women alone. Rabbis didn''t associate with people like her. But Jesus didn''t just talk to her - He had the longest one-on-one conversation recorded anywhere in the four Gospels with her.

He didn''t pretend her past didn''t exist. He named it gently: "You''ve had five husbands." And in that naming, something broke open. She wasn''t exposed - she was known. She left her water jar at the well - the very thing she came for - and ran back to the town she had been hiding from, saying, "Come see a man who told me everything I ever did." Her worst chapter became her testimony. Your past is not your identity. It is the backdrop against which God writes your redemption story.',
  'What "water jar" are you still carrying - what old identity or shame do you keep returning to? What would it look like to leave it at the well?',
  'Jesus, You met the Samaritan woman at her lowest and gave her a completely new story. You didn''t avoid her past - You walked right into it and freed her from it. Meet me at my well today. I''m tired of being defined by my worst chapters. Speak my real name - the one that has nothing to do with my mistakes. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'David''s wonder at being known by God',
  'For you created my inmost being; you knit me together in my mother''s womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.', 'Psalm 139:13-14 (NIV)',
  'David was the youngest of eight brothers, a shepherd boy in a small town called Bethlehem. When the prophet Samuel came to his father''s house to anoint the next king of Israel, David''s own father didn''t even bother to call him in from the fields. He was so overlooked in his own family that his dad essentially forgot about him. Yet God chose David - not the tall, impressive older brothers, but the ruddy teenager watching sheep.

David went on to become Israel''s greatest king, but his life was anything but clean. He committed adultery, arranged for a man''s murder to cover it up, failed as a father, and spent years running for his life in caves and deserts. He knew the heights of worship and the depths of shame. He was intimately familiar with his own brokenness.

That is the context in which David wrote Psalm 139. This is not a man puffing himself up with self-confidence. This is a man who has seen the worst of himself and is overwhelmed that the God who knows every thought in his head - every dark one, every anxious one - still calls him a masterpiece. "You knit me together," David wrote. The Hebrew word for "knit" is the same word used for weaving a tapestry. It implies intention, artistry, care.

"Fearfully and wonderfully made" is not a motivational poster. It is a theological declaration from a deeply flawed man who discovered that the God who engineered the nervous system, who designed the way light bends through water, who encoded DNA - that same God gave the same creative attention to him. And to you. Your body, your mind, your personality, your specific combination of gifts and quirks - none of it is accidental. Comparison says "I should be like them." God says "I already made you, and I don''t repeat My work."',
  'What part of yourself do you struggle to call "wonderful"? Write a thank-you letter to God for that specific thing.',
  'Creator, You knit me together on purpose. The things I criticise about myself - You designed them. Help me stop arguing with Your craftsmanship. I am fearfully and wonderfully made. Teach me to know that full well. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Paul''s unshakeable declaration from prison',
  'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.', 'Romans 8:38-39 (NIV)',
  'Before Paul wrote these words, he was a man named Saul - and he was the last person anyone would expect to write about the love of God. Saul was a religious extremist who made it his personal mission to hunt down and destroy the early Christians. He went house to house, dragging men and women to prison. He stood and watched approvingly as a man named Stephen - the first Christian martyr - was stoned to death. He was on his way to arrest more Christians in a city called Damascus when something shattered his entire world: a blinding light from heaven knocked him to the ground, and the voice of Jesus spoke directly to him. Saul, the persecutor, became Paul, the apostle.

But his conversion didn''t make his life easier - it made it harder. The people he used to persecute didn''t trust him. The people he used to work with now wanted him dead. Over the course of his ministry, Paul was shipwrecked three times, beaten with rods, whipped thirty-nine lashes on five separate occasions, stoned and left for dead, and spent years in prison cells. He wrote much of what would become the New Testament from behind bars.

So when Paul wrote "I am convinced that nothing can separate us from the love of God," he wasn''t philosophising from a comfortable armchair. He was declaring it from the battlefield of a life that had thrown everything at him. Read his list again: not death, not life, not angels, not demons, not the present, not the future, not any power in existence. He covered every category of threat imaginable and said: none of it is enough. This is not a love that comes and goes based on your performance. This is an anchor-love, a covenant-love, tested by a cross and proven unbreakable. You are held. Permanently.',
  'What do you fear could separate you from God''s love? Your sin? Your doubt? Write it down. Then read Romans 8:38-39 aloud over it.',
  'God, nothing can separate me from Your love. Not my worst day, not my darkest thought, not my biggest failure. This love is unbreakable because it depends on You, not me. If Paul could believe this from a prison cell after everything he went through, I can believe it too. I rest in that today. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Jesus'' baptism - beloved before doing anything',
  'And a voice from heaven said, "This is my Son, whom I love; with him I am well pleased."', 'Matthew 3:17 (NIV)',
  'To understand why this moment matters so much, you need to know what had not happened yet. Jesus was about thirty years old. He had spent his entire adult life working as a carpenter in a small, unremarkable town called Nazareth. He had not yet performed a single miracle. He had not healed anyone. He had not walked on water. He had not fed thousands of people with a boy''s lunch. He had not preached a single public sermon. He had not called a single disciple. His public ministry - everything people would come to know him for - had not started.

He walked into the Jordan River where a prophet named John the Baptist was baptising people. John was reluctant - he said Jesus should be baptising him, not the other way around. But Jesus insisted. And when he came up out of the water, the sky opened, the Spirit of God descended like a dove, and a voice from heaven - God the Father''s voice - spoke these words: "This is my Son, whom I love. With him I am well pleased."

Before one accomplishment. Before one sermon. Before one miracle. Before he proved anything to anyone. The Father''s declaration of love and delight came first.

This is God''s order, and it changes everything: identity comes before action, not after it. The world tells you to perform, achieve, hustle, prove yourself, and then maybe - maybe - you''ll be enough. God reverses it completely. He says, "You are loved. You are mine. I am pleased with you. Now go." You don''t work for love. You work from love. You don''t earn your identity. You receive it, and then you live from it. That is the foundation everything else is built on.',
  'What is one identity truth from this week that you want to carry forward? How will you remind yourself when the old voices return?',
  'Father, like You spoke over Jesus before he did a single remarkable thing, speak over me: "You are My child. I love you. I am pleased with you." Not because of what I''ve done - because of who I am to You. I will live from this identity, not for it. Amen.'
FROM public.pathways p WHERE p.slug = 'identity-in-christ';

-- ============================================================
-- WAITING WELL (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Bringing your desperation to God without apology',
  'In her deep anguish Hannah prayed to the Lord, weeping bitterly.', '1 Samuel 1:10 (NIV)',
  'Hannah was a woman living in ancient Israel who was married to a man named Elkanah. Here is the thing that made her life quietly unbearable: Elkanah had two wives, which was culturally normal at the time. The other wife, Peninnah, had children. Hannah had none. Year after year, the whole family would travel to the temple at Shiloh for a religious festival, and year after year, Peninnah would taunt Hannah about her empty womb - rubbing her face in it, making sure everyone noticed. The Bible says Peninnah provoked her "till she wept and would not eat." This was not a private grief. It was a recurring public humiliation.

Elkanah loved Hannah and tried to comfort her - "Don''t I mean more to you than ten sons?" - but his kindness could not touch the specific ache she carried. He could not give her the thing she wanted most. So one year at the temple, Hannah did something radical. She stopped performing composure. She stopped swallowing the pain. She went to the entrance of the temple and poured out her soul to God with such raw intensity that the priest Eli saw her lips moving with no sound coming out and assumed she was drunk. She had to defend herself: "I am not drunk. I am a woman deeply troubled. I have been pouring out my soul before the Lord."

God heard that prayer. He gave her a son - Samuel, who would become one of the most important prophets in Israel''s history. But the miracle is not just the answer. The miracle is that Hannah brought God the unedited, ugly, desperate version of her heart, and He received every syllable. If you are waiting for something that aches too much to say politely, Hannah gives you permission to stop being composed about it. God is not offended by desperation. He is moved by it.',
  'What are you waiting for that feels almost too painful to say out loud? Write it here - unfiltered, unedited, the way Hannah would have prayed it. Let this page hold what your composure cannot.',
  'Lord, like Hannah, I am bringing You the ache I''ve been carrying quietly. I''m done editing my prayers to sound more together than I am. Here is the real request, the raw one. Receive it. I trust You with the mess of my wanting. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Holding a promise that feels impossible',
  'He took him outside and said, "Look up at the sky and count the stars - if indeed you can count them." Then he said to him, "So shall your offspring be."', 'Genesis 15:5 (NIV)',
  'Abraham - originally named Abram - was a man living in Mesopotamia (modern-day Iraq) around 2,000 BC when God spoke to him out of nowhere and made an extraordinary promise: leave your homeland, and I will make you the father of a great nation. Your descendants will be as countless as the stars. There was just one problem. Abraham was seventy-five years old. His wife Sarah was sixty-five. And Sarah was barren - she had never been able to have children. So God was essentially promising a legacy of millions to an elderly, childless couple. They believed Him anyway and left everything they knew.

Then the waiting began. Not months. Not a few years. Twenty-five years of silence on the one promise that mattered most. During that quarter-century, Abraham and Sarah tried to force the promise themselves - Sarah gave Abraham her servant Hagar as a surrogate, which produced a son named Ishmael but also produced heartbreak, jealousy, and family fracture. They stumbled. They schemed. At one point, when God reaffirmed the promise, Abraham literally fell on his face laughing. Sarah, overhearing the same promise from behind a tent flap, laughed too. The idea of a ninety-year-old woman having a baby was absurd.

But God was not kidding. Isaac was born when Abraham was one hundred and Sarah was ninety. The name Isaac actually means "he laughs" - as if God wanted the child''s very name to remind them that what looked ridiculous was always the plan. If your promise feels laughable by now - if the timeline makes no human sense - you are standing in the exact territory where God has always done His most unmistakable work. He specialises in answers so late they could only be Him.',
  'What promise or deep hope have you been holding so long it''s starting to feel ridiculous? Write it down. Then ask yourself honestly: have I stopped believing, or have I just stopped understanding?',
  'Father, like Abraham and Sarah, I am holding something that doesn''t make sense anymore. The math doesn''t work. The window feels closed. But You are the God of impossible timelines. Help me hold the promise without demanding the schedule. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Trusting God when life keeps getting worse before it gets better',
  'The Lord was with Joseph so that he prospered, and he lived in the house of his Egyptian master.', 'Genesis 39:2 (NIV)',
  'Joseph was the eleventh of twelve sons born to a man named Jacob in ancient Israel. His father loved him more than the others - and made no secret of it, even giving Joseph an elaborate, expensive coat that became a symbol of favouritism. Joseph also had dreams in which his entire family bowed down to him, and being seventeen and unwise, he told his brothers about those dreams. They already resented him. Now they hated him enough to kill him.

One day, when they were far from home tending sheep, the brothers seized Joseph, threw him into an empty pit, and then sold him to a passing caravan of slave traders headed to Egypt. They smeared animal blood on his coat and told their father he had been killed by a wild animal. Joseph was around seventeen. He went from beloved son to foreign slave in a single afternoon.

In Egypt, Joseph served in the household of a powerful official named Potiphar. He worked hard, earned trust, and was put in charge of the entire household - until Potiphar''s wife falsely accused him of assault. Joseph was thrown into prison. He had done nothing wrong. In prison, he interpreted dreams for two of Pharaoh''s officials and asked one of them to remember him when he was released. The man forgot about Joseph for two full years.

Thirteen years passed between the pit and the moment Pharaoh finally called Joseph out of prison to interpret a dream - and then, in a single day, Joseph went from prisoner to the second most powerful man in Egypt. But here is what the Bible keeps repeating through every terrible chapter: "The Lord was with Joseph." Not after the pit. Not once he reached the palace. In the pit. In the false accusation. In the forgotten prison cell. God''s presence was not contingent on Joseph''s circumstances improving. If your life feels like it is getting worse, not better, that does not mean God has left the room. He may be closest in the chapter you would most like to skip.',
  'Where in your life does it feel like things are getting worse, not better? Write about that honestly. Then ask: is it possible God is with me here, even though "here" is not where I want to be?',
  'God, I feel more like I''m in the pit than the palace right now. The dream You placed in me feels further away than ever. But if You were with Joseph in every terrible chapter, I choose to believe You are with me in mine. Don''t let me lose heart. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'When God leads you through the wilderness on purpose',
  'Remember how the Lord your God led you all the way in the wilderness these forty years, to humble and test you in order to know what was in your heart.', 'Deuteronomy 8:2 (NIV)',
  'Here is the backstory: the Israelites - the entire nation descended from Abraham - had been enslaved in Egypt for over four hundred years. They were forced labourers, building cities for Pharaoh under brutal conditions. God raised up a leader named Moses, sent a series of devastating plagues against Egypt, and finally Pharaoh let them go. They crossed the Red Sea on dry ground while the waters held back like walls on either side. It was the most dramatic rescue in the Bible.

Now here is the part that makes no sense. The distance from Egypt to the Promised Land - the territory God had set aside for them - was roughly an eleven-day walk. Eleven days. God took them on a forty-year detour through the desert instead. An entire generation grew old and died in the wilderness without ever reaching the destination. Why?

The Bible says it plainly: God led them through the wilderness on purpose. Not because He was lost. Not because they had done something unforgivable (though they grumbled constantly). Because there was something they needed to learn that comfort could never teach them. In the desert, they had no grocery stores, no wells, no infrastructure. God fed them with manna - a mysterious bread-like substance that appeared on the ground each morning and could not be stockpiled. He gave them water from rocks. Their sandals never wore out. Every single day they had to depend on God for that day''s provision. No safety net. No backup plan.

The wilderness was not a punishment. It was a classroom. It stripped away every illusion of self-sufficiency and taught them that their survival depended on God alone. If you are on what feels like a senseless detour - if you could swear the direct route was right there and God walked you past it - consider that He is not wasting your time. He is building something in you that the shortcut would have skipped.',
  'What is your wilderness teaching you that comfort never could? Be specific. Where is God stripping away self-sufficiency and building something sturdier in its place?',
  'Lord, I wanted the short road. You chose the long one - and I don''t always understand why. But if the wilderness is where You teach me to depend on You daily, then let me learn well. Don''t let me waste this detour. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'Faithfulness that outlasts your timeline',
  'Sovereign Lord, as you have promised, you may now dismiss your servant in peace. For my eyes have seen your salvation.', 'Luke 2:29-30 (NIV)',
  'To understand Simeon, you need to understand what Israel had been waiting for. For centuries - literally hundreds of years - the Jewish people had been living under the weight of a promise. Their prophets had foretold that God would send a Messiah, a chosen deliverer who would rescue and restore Israel. Generation after generation was born, lived, and died without seeing it happen. By the time we meet Simeon, Israel had been under Roman occupation, politically oppressed, and the prophetic voices had gone silent for roughly four hundred years. Most people had either given up or turned the promise into an abstract theological idea rather than something they actually expected to witness.

Simeon was different. The Bible describes him as "righteous and devout" and says the Holy Spirit had personally revealed to him that he would not die before he had seen the Messiah with his own eyes. So picture this elderly man, showing up at the temple in Jerusalem day after day, year after year, watching every young family walk through those doors with their newborn. Not this one. Not yet. People probably thought he was losing his mind. How many decades did he do this? We do not know. The Bible does not tell us his age. It just tells us he waited.

Then one ordinary day, a young couple from the backwater town of Nazareth walked in carrying a six-week-old baby for a routine dedication ceremony. Mary and Joseph - poor, unremarkable, nobody special by any outward measure. And Simeon knew. He walked up, took the infant Jesus in his arms, and spoke words that have echoed for two thousand years: "Sovereign Lord, you may now dismiss your servant in peace. My eyes have seen your salvation." He was saying: I can die now. This - this moment, this child - is what my whole life was for.

Some promises take a lifetime of faithful showing up. That is not a failure. It is the deepest expression of faith the Bible records.',
  'If your waiting lasted longer than you ever imagined - even a lifetime - would you still trust that God is faithful? What would it take for you to say, like Simeon, "It was worth it"?',
  'Father, give me Simeon-faith. The kind that shows up every single day expecting You to move, even when decades pass. Keep my heart soft and my eyes open. I don''t want to miss what You''re doing because I got tired of looking. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'The God who sees the woman the world has written off',
  'But the angel said to him: "Do not be afraid, Zechariah; your prayer has been heard. Your wife Elizabeth will bear you a son, and you are to call him John."', 'Luke 1:13 (NIV)',
  'Elizabeth and her husband Zechariah were both from priestly families in Israel, meaning their entire lives revolved around serving God in the temple. The Bible goes out of its way to say they were "righteous in the sight of God, observing all the Lord''s commands and decrees blamelessly." These were not people who had wandered from God. They had done everything right. And yet Elizabeth was barren - she could not have children.

In first-century Jewish culture, that was not just a private heartbreak. Infertility was widely interpreted as a sign of God''s displeasure. Neighbours would have whispered. Relatives would have wondered what secret sin she was hiding. Elizabeth carried not only the grief of an empty womb but the social stigma of a community that assumed God was punishing her. She and Zechariah were now both described as "very old." The biological window had not just closed - it had been bricked shut. Whatever prayers they once prayed for a child, they had almost certainly stopped praying them years ago. Hope had quietly been packed away.

Then one day, Zechariah was chosen by lot to enter the inner sanctuary of the temple and burn incense - a once-in-a-lifetime honour for a priest. While he was inside, an angel appeared and said something that knocked him speechless (literally - God struck him mute for months because he did not believe it): "Your prayer has been heard. Elizabeth will bear a son." Notice the tense. Not "your prayer is being heard right now." Your prayer has been heard - past tense. The prayer they stopped praying years ago had been held in God''s hands the entire time. He never set it down.

Elizabeth conceived and gave birth to John - later known as John the Baptist - who would become the prophet who prepared the way for Jesus. The woman the world had written off became the mother of one of the most important figures in history. If you have a prayer you gave up on, it may still be alive in the hands of a God who does not forget what you stopped asking for.',
  'Is there a prayer you stopped praying - not because you stopped wanting it, but because you stopped believing it was possible? Write it down again. You are not too late, and neither is God.',
  'God, like Elizabeth, I have prayers I set down because the wait became too heavy. But You heard them then and You remember them now. If it is Your will, breathe life into what I assumed was finished. I open my hands again. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Surrendering the outcome while staying honest about the cost',
  'Father, if you are willing, take this cup from me; yet not my will, but yours be done.', 'Luke 22:42 (NIV)',
  'This is the night before Jesus died, and to understand the weight of this moment, you need to know what was coming. Jesus of Nazareth - believed by Christians to be God in human form - had spent roughly three years travelling through Israel, teaching, healing the sick, and gathering followers. He knew from the beginning how His story would end. He had told His disciples multiple times: I am going to be handed over, tortured, and killed. They never fully understood what He meant until it happened.

On this final night, Jesus shared a last meal with His closest friends, washed their feet like a servant, and then walked to a garden called Gethsemane on the Mount of Olives outside Jerusalem. He asked His disciples to stay awake and pray with Him. They fell asleep. And alone in the dark, Jesus began to pray with an intensity the Bible describes in physical terms - Luke, who was a physician, records that His sweat fell like drops of blood, a real medical phenomenon caused by extreme anguish.

His prayer was not serene. It was not a calm acceptance speech. He asked His Father directly: "If there is any other way - if this cup can pass from me - please take it." He was honest about the cost. He did not want to be crucified. He did not want to carry the weight of every broken thing humanity had ever done. He was fully human in that moment, and every cell in His body was saying no.

And then He said the words that hold every waiting season, every surrender, every unanswered prayer together: "Yet not my will, but yours be done." Not with detached calm. With agonised, sweating, bleeding trust. This is not a prayer of resignation. It is the hardest prayer a person can pray - I want this to go differently, and I trust You more than I trust my own preference.

As you close this pathway, you may still be waiting. The answer may not have come. But you are not the same woman who started seven days ago. You have walked with Hannah, Abraham and Sarah, Joseph, the Israelites, Simeon, and Elizabeth. You are held by the same God who held every one of them. And He has never once looked away.',
  'Write your own Gethsemane prayer. Name what you want. Name what it costs to wait. And then - only if you mean it - write: "Not my will, but yours." Let this be the most honest prayer you have ever prayed.',
  'Jesus, You understand what it costs to surrender. You didn''t bypass the pain - You prayed through it. Give me the courage to want what I want and still release it into Your hands. Not my will, but Yours. I trust You with the outcome. Amen.'
FROM public.pathways p WHERE p.slug = 'waiting-well';

-- ============================================================
-- HEALING AFTER HEARTBREAK (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Giving yourself permission to name the pain honestly',
  'Don''t call me Naomi. Call me Mara, because the Almighty has made my life very bitter. I went away full, but the Lord has brought me back empty.', 'Ruth 1:20-21 (NIV)',
  'Naomi was a woman from Bethlehem who had once had a full life - a husband named Elimelech, two sons, a place in her community. But when famine struck the land, the family left everything familiar and moved to Moab, a foreign country, just to survive. And then, one by one, everything fell apart. Her husband died first. Then her two sons - both of them - died as well, leaving Naomi alone in a foreign land with nothing but two daughters-in-law and a grief so heavy it bent her in half.

When Naomi finally made the long journey back to Bethlehem, the women who had known her years ago barely recognized her. They whispered her name - Naomi? Is that you? And this is where she did something that Scripture records without flinching. She said: don''t call me Naomi anymore. Naomi means "pleasant," and there is nothing pleasant left. Call me Mara - Bitter - because that is what God has made my life. I left here full. I came back with nothing.

She didn''t try to package her devastation into a tidy testimony. She didn''t add "but God is good" at the end. She stood in front of her old neighbors and told the raw, unfiltered truth about what loss had done to her. And here is what matters: God did not strike her down for it. Scripture did not correct her. Her bitterness was recorded, held, and honored as part of a story that was far from over.

Your pain deserves that same honesty. Before healing can begin, the wound has to be named - not explained, not spiritualized, not minimized. Just named. God is not threatened by your bitterness. He is close enough to hear every syllable of it.',
  'If you renamed yourself based on how you actually feel right now - the way Naomi renamed herself Mara - what would your name be? Write it down. Then tell God why.',
  'God, I''m not going to pretend this is fine. Like Naomi, I went away full and came back empty. I''m naming the pain today - not to push You away, but because You already see it. Meet me in the honesty. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'God finds you in the place of rejection',
  'Then God opened her eyes and she saw a well of water. So she went and filled the skin with water and gave the boy a drink.', 'Genesis 21:19 (NIV)',
  'Hagar was an Egyptian slave who belonged to a wealthy woman named Sarah. Sarah and her husband Abraham had been promised by God that they would have a child, but years passed and no baby came. So Sarah, growing impatient, did what was culturally common but deeply painful - she gave Hagar to Abraham so that Hagar could bear a child on Sarah''s behalf. Hagar had no say in any of it. She was a servant. Her body was not her own.

Hagar became pregnant, and the tension between her and Sarah turned toxic. Sarah treated her so harshly that Hagar ran away into the desert the first time - and God met her there and sent her back with a promise. She returned. She gave birth to a son named Ishmael. And for a while, there was an uneasy peace. But then Sarah finally had her own son, Isaac, and everything Hagar feared came true. Sarah demanded that Abraham send Hagar and Ishmael away - permanently. And Abraham, the man God had chosen, the father of nations, gave Hagar some bread and a single skin of water and sent her into the desert with their son.

When the water ran out, Hagar placed her boy under a bush and walked away because she could not bear to watch him die. She sat down at a distance and sobbed. That is the geography of rejection - a place so desolate you cannot even look at your own future.

But God heard the boy crying. And God spoke to Hagar and opened her eyes, and she saw a well of water that had been there all along. The God who had found her in the desert the first time found her again. He did not explain why Abraham failed her. He did not undo the rejection. He sustained her inside of it.

If you feel cast out today - discarded by someone who should have fought for you - know this: the God who named Himself "El Roi," the God who sees me, has not lost sight of you.',
  'Where do you feel cast out or discarded - like someone made a decision about your life without your consent? Tell God about the wilderness you''re sitting in right now.',
  'God who sees me, I feel like Hagar - sent away, not chosen, wandering without a clear path. Open my eyes to the well You''ve already placed in this wilderness. I trust that rejection by people is not rejection by You. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'The strange grace of choosing to live after loss',
  'Then David got up from the ground. After he had washed, put on lotions and changed his clothes, he went into the house of the Lord and worshiped.', '2 Samuel 12:20 (NIV)',
  'David was the king of Israel - the one the Bible calls "a man after God''s own heart." But David made a devastating choice. He saw a woman named Bathsheba bathing on a rooftop, sent for her even though she was married to one of his soldiers, and slept with her. When she became pregnant, David tried to cover it up. When the cover-up failed, he arranged for her husband Uriah to be killed in battle. It was a terrible abuse of power, and God sent a prophet named Nathan to confront David directly.

Nathan told David that because of what he had done, the child Bathsheba was carrying would die. David was shattered. When the baby was born and became ill, David threw himself on the ground and refused to eat. For seven days he lay on the floor, fasting, weeping, begging God to spare his son. His servants were terrified. They didn''t know how to tell him when the child finally died - they feared what he might do to himself.

But when David realized the boy was gone, he did something no one expected. He got up. He washed his face. He changed his clothes. And he went to the house of the Lord and worshiped. His servants were confused - you grieved while the child was alive, but now you''re calm? David said: while the child was alive, I fasted and wept because I thought God might be gracious to me. But now he is gone. I cannot bring him back.

This was not denial. It was not moving on. It was a man who had done all his agonizing on the floor deciding that the floor would not be his permanent address. Sometimes getting up is the bravest thing you will ever do. Not because the pain has ended, but because you have decided it will not be the final word. Worship after loss is not pretending the loss didn''t happen. It is telling God: You are still God, even here.',
  'What does "getting up from the ground" look like for you in this season? It doesn''t have to be dramatic. What is one small act of choosing to keep living?',
  'Lord, like David, I have been on the ground. I''ve pleaded. I''ve wept. And what I feared still happened. Give me the grace to rise - not because I''m over it, but because You are still worthy of worship even in this. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'When the pain has lasted so long you''ve almost stopped hoping',
  'She had suffered a great deal under the care of many doctors and had spent all she had, yet instead of getting better she grew worse. When she heard about Jesus, she came up behind him in the crowd and touched his cloak.', 'Mark 5:26-27 (NIV)',
  'In the Gospels, there is a woman whose name we never learn. All we know is what defined her life for over a decade: she had a condition that caused constant bleeding. In her culture, this was not just a medical problem - it was a social death sentence. Under Jewish law, a woman who was bleeding was considered ritually "unclean." Anyone who touched her became unclean too. That meant she could not enter the temple. She could not be held. Every chair she sat in, every bed she lay on, was considered contaminated. For twelve years, she lived in forced isolation - untouchable, unwelcome, slowly disappearing from the life she once knew.

She spent everything she had on doctors. The text says she "suffered a great deal" under their care - meaning the treatments themselves were painful, and none of them worked. She was broke, she was worse than when she started, and she had exhausted every option available to her. Twelve years of diminishing hope is enough to make anyone stop reaching.

But then she heard about Jesus. And something inside her that should have been dead by now - the stubborn, irrational capacity to hope one more time - flickered to life. She didn''t ask for an audience. She didn''t announce herself. She pushed through a crowd that she was technically forbidden to touch and reached for the edge of His clothing. One trembling, desperate reach.

And Jesus stopped. In the middle of a pressing crowd, He felt that single touch and asked, "Who touched me?" He did not just heal her - He turned around, found her, and called her "daughter." After twelve years of being untouchable, she was named as family.

If your heartbreak has been a long one - months, years, the kind that people have stopped asking about - hear this: you are not too far gone. One more reach toward Jesus is not foolish. It is the kind of faith that stops Him in His tracks.',
  'Where have you grown tired of hoping? What is the prayer you stopped praying because it hurt too much to keep asking? Write it one more time today.',
  'Jesus, like the woman who bled for twelve years, I''m exhausted. I''ve tried so many things and nothing has worked. But I''m reaching for You one more time. I''m not asking You to explain the delay. I''m asking You to heal what no one else could. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'Holding onto God when nothing makes sense',
  'Though he slay me, yet will I hope in him.', 'Job 13:15 (NIV)',
  'Job was a man the Bible describes as blameless and upright - someone who genuinely feared God and lived with integrity. He was also wealthy, with a large family, thousands of livestock, and a reputation as the greatest man in the East. And then, in what reads like the worst day in human history, messengers arrived one after another with news that destroyed his entire world. Raiders stole his oxen and donkeys and killed his servants. Fire fell from the sky and burned up his sheep and more servants. Another raiding party took his camels. And then - the worst - a windstorm collapsed the house where all ten of his children were eating together. Every single one of them died.

Job tore his robe. He shaved his head. He fell to the ground. And somehow, impossibly, he worshiped. But the suffering wasn''t over. Painful sores broke out across his entire body, from the soles of his feet to the top of his head. He sat in ashes, scraping his skin with broken pottery. His wife looked at him and said the only thing she could think of: "Curse God and die." Then his three closest friends arrived and spent the majority of the book insisting that Job must have done something terrible to deserve this - that God doesn''t punish the innocent, so Job should just confess.

But Job had done nothing wrong. And he knew it. And that is what made the pain unbearable - it was senseless. There was no lesson, no karma, no equation that balanced. He screamed at God. He demanded a hearing. He cursed the day he was born. But he never let go. "Though he slay me, yet will I hope in him." That word "yet" carries the weight of the entire book. It is the hinge between despair and defiance.

In the end, God did not explain Himself to Job. He never told him about the cosmic wager. He simply showed up - in a whirlwind - and revealed Himself. Job never got the "why." He got the "Who." Sometimes that is what faithfulness looks like: not understanding a single thing but refusing to release the only One who does.',
  'What is your "yet"? Finish this sentence honestly: "Though __________, yet I will hope in God." Let the first blank hold your real pain. Let the second half hold your real defiance.',
  'God, I don''t understand what happened. I may never understand. But like Job, I am choosing You anyway - not because it makes sense, but because You are the only solid ground I have left. You don''t owe me an explanation. But I need Your presence. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Opening your heart after it has been broken',
  'Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.', 'Ruth 1:16 (NIV)',
  'Ruth was a young Moabite woman - which means she was from a neighboring country that the Israelites generally looked down on. She had married one of Naomi''s sons, who had come to Moab with his family during a famine. For a time, there was something like normalcy - a husband, a household, a mother-in-law she had grown to love. But then Ruth''s husband died. And his brother died. And their father had already died years before. Three women - Naomi, Ruth, and Orpah (the other daughter-in-law) - were left alone in a culture where women without husbands had almost no legal protection, no income, and no social standing.

Naomi decided to go back to Bethlehem. She had nothing left in Moab and nothing waiting for her at home either, but at least it was home. She told both daughters-in-law to go back to their own mothers'' houses. She released them. She said, essentially: I have nothing to offer you. No more sons. No more future. Go find new husbands. Have the life I can''t give you. Orpah wept, kissed Naomi, and turned back. It was the reasonable choice. No one faulted her for it.

But Ruth refused to leave. She clung to Naomi - the Hebrew word suggests she physically held on - and spoke words that have echoed through three thousand years: "Where you go I will go. Where you stay I will stay. Your people will be my people and your God my God." This was not a romantic declaration. It was something arguably braver. Ruth chose to bind her future to a bitter, grieving, empty-handed old woman heading into uncertainty. She chose covenant loyalty in a hopeless situation.

And in doing so, she walked into a story she could never have written for herself - gleaning grain in the field of a kind man named Boaz, who noticed her, protected her, and eventually married her. Ruth became the great-grandmother of King David and an ancestor of Jesus Himself.

Choosing to love again after loss is terrifying. Your heart knows the cost now. But Ruth''s story whispers that the heart willing to risk again is the one God tends to surprise.',
  'What has heartbreak made you afraid to try again - a relationship, a friendship, vulnerability, trust? What would it look like to take one small step back toward openness?',
  'Lord, my heart is guarded for good reason. It knows what it costs to love and lose. But I don''t want to live behind walls forever. Give me Ruth''s courage - not reckless, but resolute. Teach me to love again without guarantees. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'The tears of Jesus and the tenderness of God',
  'When Jesus saw her weeping, and the Jews who had come along with her also weeping, he was deeply moved in spirit and troubled. Jesus wept.', 'John 11:33,35 (NIV)',
  'Lazarus was one of Jesus'' closest friends. He lived in a small town called Bethany with his two sisters, Mary and Martha, and their home was one of the few places where Jesus could just be - no crowds, no demands, just a meal with people who loved Him. So when Lazarus became gravely ill, his sisters sent an urgent message to Jesus: "Lord, the one you love is sick." They expected Him to come immediately.

But Jesus didn''t come. He stayed where He was for two more days. By the time He arrived in Bethany, Lazarus had been in the tomb for four days. Martha met Him on the road, and her greeting carried the weight of every unanswered prayer you''ve ever prayed: "Lord, if you had been here, my brother would not have died." Mary came next and said the exact same words. If you had been here. Where were you?

And then something happened that theologians have been writing about for two thousand years. Jesus - who knew He was about to raise Lazarus from the dead, who knew the miracle was minutes away, who held the power of resurrection in His own hands - looked at Mary weeping, looked at the mourners surrounding her, and He broke. The original Greek says He was "deeply moved in spirit and troubled," language that suggests something closer to a shudder, a groan of grief that moved through His entire body. And then the shortest and perhaps most important verse in all of Scripture: Jesus wept.

He did not weep because He was helpless. He wept because He loved them, and their pain was real, and love does not stand at a clinical distance while the people it cherishes are falling apart. He wept at a tomb He was about to open.

This changes everything about how God relates to your pain. He is not waiting at the end of your grief with a lesson plan. He is not folding His arms until you reach the right conclusion. He is here, in the middle of it, and He is weeping too. Your tears are not falling alone. Your sorrow does not exhaust His compassion. The God of the universe is not ashamed to cry beside you - even while He holds the resurrection in His hands.',
  'Picture Jesus standing beside you in your specific grief - not fixing it yet, just present, just weeping with you. What do you want to say to Him? What do you imagine He says back?',
  'Jesus, thank You for weeping. Thank You for not being above my pain. You could have rushed to the miracle, but You stopped to grieve first. Be that close to me now. I don''t need answers today. I just need to know You''re crying with me. Amen.'
FROM public.pathways p WHERE p.slug = 'healing-after-heartbreak';

-- ============================================================
-- CONFIDENCE AND SELF WORTH (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Stepping into purpose when everything in you wants to hide',
  'For if you remain silent at this time, relief and deliverance for the Jews will arise from another place, but you and your father''s family will perish. And who knows but that you have come to your royal position for such a time as this?', 'Esther 4:14 (NIV)',
  'Esther was a young Jewish woman living in ancient Persia - modern-day Iran - during a time when her people were a conquered minority with no political power. She was an orphan, raised by her older cousin Mordecai, and she had no status, no connections, and no safety net. Then the Persian king decided he wanted a new wife and held what was essentially a beauty pageant across the empire. Esther was taken into the palace, and against all odds, the king chose her. But here is the critical detail: nobody in the palace knew she was Jewish. Mordecai told her to hide it.

For a while, that secret didn''t matter. Then a powerful court official named Haman convinced the king to sign a decree ordering the extermination of every Jewish person in the empire - men, women, and children. Genocide, signed into law. Mordecai sent word to Esther: you are the only person with access to the king. You have to speak up. But approaching the king uninvited was a death sentence - even for the queen. She could be executed just for walking into the throne room without permission.

Esther was terrified. She fasted for three days, asked her people to fast with her, and then said the words that still echo through history: "If I perish, I perish." She walked in anyway. She risked execution, exposed her identity, and saved an entire nation. Confidence is not the absence of fear. It is the decision that your calling matters more than your safety. You are not here by accident. The room you are afraid to walk into might be the exact room God prepared you for.',
  'What situation in your life right now feels like a "for such a time as this" moment - something you''re being called to step into but fear is holding you back? What would Esther-level courage look like in that specific situation?',
  'God, like Esther, I feel the weight of the moment and my own smallness in it. But You don''t place people by accident. If I am here for such a time as this, give me the courage to stop hiding and start speaking. I choose purpose over self-protection. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Owning authority without apology',
  'Village life in Israel ceased, it ceased, until I, Deborah, arose, a mother in Israel.', 'Judges 5:7 (ESV)',
  'To understand Deborah, you need to understand the chaos she walked into. After the Israelites settled in the Promised Land, they had no king, no central government - just a series of "judges" who rose up in times of crisis to lead the people. These judges were almost always military men. The nation was being brutally oppressed by a Canaanite king named Jabin, whose army commander, Sisera, had nine hundred iron chariots - the ancient equivalent of tanks. For twenty years, the Israelites lived in terror. Villages emptied. Roads became too dangerous to travel. The entire nation was paralysed.

Into this collapse stepped Deborah. She was a prophet and a judge - the only woman in the entire book of Judges to hold that role. People came from across the nation to sit under a palm tree where she settled disputes and spoke God''s direction. When it was time to fight back, she summoned a military commander named Barak and told him God''s battle plan. Barak''s response is stunning: "I will not go unless you go with me." The general refused to go to war without her in the room.

Deborah did not flinch. She did not say, "Oh, I couldn''t possibly - find a man for that." She went. She led. And after the victory, she wrote a song about it, and in that song she named herself without apology: "Until I, Deborah, arose." No false humility. No deflecting credit. She understood that the authority she carried was not hers to give back - it was God''s, flowing through her willingness to use it. If you have been told your confidence is "too much," consider whether the people saying that are simply too afraid to carry their own.',
  'Where have you been waiting for permission to lead - at work, in your family, in your faith community? What would it look like to simply arise, like Deborah, and step into the role God has already given you?',
  'Lord, You gave Deborah authority and she didn''t apologise for it. Forgive me for the times I''ve handed back what You placed in my hands because someone else was uncomfortable with it. I will lead where You''ve called me. Not with arrogance, but without apology. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Letting God redefine you after failure',
  'When they had finished eating, Jesus said to Simon Peter, "Simon son of John, do you love me more than these?" "Yes, Lord," he said, "you know that I love you." Jesus said, "Feed my lambs."', 'John 21:15 (NIV)',
  'Peter was a fisherman - rough-handed, loud, impulsive, and fiercely loyal. He was one of the first people Jesus invited to follow Him, and for three years Peter was part of Jesus'' closest inner circle. He walked on water. He was the first disciple to declare that Jesus was the Messiah. He swore, with absolute conviction, that even if every other follower abandoned Jesus, he never would. He meant it with everything in him.

Then came the worst night of his life. Jesus was arrested, dragged into a sham trial, and beaten. Peter followed at a distance and stood by a fire in the courtyard while it happened. Three different people recognised him and asked if he was one of Jesus'' followers. Three times, Peter denied it. The third time, he swore an oath: "I do not know the man." At that exact moment, a rooster crowed - just as Jesus had predicted - and Peter went outside and wept bitterly. He had become the very thing he swore he would never be.

After Jesus rose from the dead, He found Peter by the Sea of Galilee and did something breathtaking. He didn''t deliver a lecture. He made breakfast. He sat with Peter on the beach and asked three questions - one for every denial. "Do you love me?" Three chances to replace the three failures. And with each answer, Jesus handed Peter back his calling: "Feed my lambs. Tend my sheep. Feed my sheep." Weeks later, that same broken man stood before thousands at Pentecost and preached with a boldness that launched the early church. Your worst moment is not your final chapter. The God who restored Peter on a beach is the same God sitting with you right now, asking: do you love me? Then let''s get back to work.',
  'What failure or mistake have you been carrying as a permanent identity marker - "I''m the person who..."? Write it down, then write beside it: "Jesus asked Peter to feed His lambs after the worst night of Peter''s life. What is He asking me to do next?"',
  'Jesus, like Peter, I have failed in ways that still burn. But You didn''t disqualify him and You haven''t disqualified me. I bring my shame to the beach this morning. Ask me the question again. I love You. Show me what''s next. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'God uses unlikely people from unlikely places',
  'By faith the prostitute Rahab, because she welcomed the spies, was not killed with those who were disobedient.', 'Hebrews 11:31 (NIV)',
  'Rahab lived in the city of Jericho, a heavily fortified Canaanite city that sat directly in the path of the Israelite army. She was a prostitute - a woman living on the absolute margins of an already-pagan society. She had no education in the God of Israel, no religious training, no respectable reputation, and no reason to believe her life would ever be anything other than what it was. She was, by every measure her culture used, disposable.

But Rahab had heard rumours. Stories had reached Jericho about the Israelites - how their God had parted a sea, how He had crushed armies, how He was leading them toward Canaan. Everyone in Jericho heard those same stories and responded with fear. Rahab heard them and responded with faith. When two Israelite spies came into the city to scout it before the invasion, Rahab hid them on her roof under stalks of flax. She lied to the soldiers who came searching. She risked execution for treason. And she told the spies something remarkable: "I know that the Lord has given you this land. The Lord your God is God in heaven above and on the earth below."

She made a deal - protect my family when you take this city - and they agreed. When Jericho fell, Rahab and her entire household were spared. She married into the Israelite community. And here is the part that should stop you in your tracks: Rahab is listed in the genealogy of Jesus Christ. She is in the direct bloodline of the Messiah. She is also named in Hebrews 11, the "Hall of Faith," alongside Abraham and Moses. A prostitute from a pagan city, standing shoulder to shoulder with the patriarchs. Your past does not disqualify you. It might be the very backdrop against which your faith shines brightest.',
  'What part of your past or background do you believe disqualifies you from being used by God - your upbringing, your mistakes, your career, your reputation? Write it down. Then read Rahab''s story again and ask: does God agree with that assessment?',
  'God, Rahab came from the margins and You placed her in the lineage of Your Son. I bring You the parts of my story I''ve been hiding - the chapters I thought disqualified me. Use all of it. Nothing in my past surprises You, and nothing is wasted. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'Being bold enough to show up fully, even under criticism',
  'Then he turned toward the woman and said to Simon, "Do you see this woman? I tell you, her many sins have been forgiven - as her great love has shown. But whoever has been forgiven little loves little."', 'Luke 7:44,47 (NIV)',
  'In first-century Jewish culture, dinner parties at the home of a religious leader were semi-public events. People could enter the room and stand along the walls to listen to the conversation. But there were rules about who belonged and who did not. A Pharisee named Simon - a religious elite, deeply concerned with moral purity and social hierarchy - had invited Jesus to dinner. It was a prestigious gathering, and everyone in the room knew their place.

Then she walked in. The text calls her "a woman in that city who was a sinner" - which was the ancient world''s way of saying everyone knew her reputation and none of it was good. She may have been a prostitute. She may have simply been a woman with a known, messy, public past. What matters is that she had absolutely no business being in that room. Every person present knew it. She knew it.

But she came anyway. She stood behind Jesus, weeping so hard that her tears fell on his feet. She knelt down and wiped his feet with her hair - an act of astonishing intimacy and humility. Then she broke open an alabaster jar of expensive perfume and poured it over his feet. The room went rigid. Simon thought to himself: "If this man were really a prophet, he would know what kind of woman is touching him."

Jesus read his mind. He turned to Simon and told a parable about two people who owed debts - one large, one small - and both were forgiven. "Who will love more?" he asked. Then he turned to the woman and said the words that shattered every hierarchy in the room: "Do you see this woman? Her many sins have been forgiven - as her great love has shown." He did not defend her past. He elevated her present. She brought her whole, unedited self into a room full of critics, and Jesus called it the most beautiful thing happening in that house. Stop waiting until you are respectable enough to show up. The critics are not your audience. He is.',
  'Where have you been holding back - in worship, in vulnerability, in expressing love - because you''re afraid of what people will think? What would it look like to break open the perfume anyway?',
  'Jesus, I want the courage of the woman who walked into a hostile room and worshipped You anyway. I''m tired of editing myself for an audience that isn''t You. I bring my unfiltered heart. Let the critics talk. I came for You. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Trusting God with what you cannot control',
  '"I am the Lord''s servant," Mary answered. "May your word to me be fulfilled." Then the angel left her.', 'Luke 1:38 (NIV)',
  'Mary was likely a teenager - historians estimate she was between thirteen and sixteen years old - living in Nazareth, a tiny, insignificant village in the Galilee region. Nazareth was so unremarkable that later in the Gospels, someone asks, "Can anything good come from Nazareth?" She was engaged to a carpenter named Joseph. In that culture, engagement was a legally binding contract - breaking it required a formal divorce. Her life had a predictable, safe trajectory: marry Joseph, raise a family, live quietly.

Then an angel appeared and told her she would become pregnant by the Holy Spirit and give birth to the Son of God. Stop and feel the weight of that for a moment. She was unmarried. In her culture, pregnancy outside of marriage was not just shameful - it was potentially fatal. Women could be stoned for it. Even if she escaped that punishment, she would be publicly humiliated. Joseph would have every right to divorce her. Her family could disown her. Her neighbours would talk for the rest of her life. And there was absolutely no way to explain this that anyone would believe. "An angel told me" is not a defence that holds up in a first-century village.

Mary understood all of this. She was not naive. She asked the angel one practical question - "How will this be, since I am a virgin?" - and then, having received an answer she could not fully comprehend, she said the most courageous sentence in the New Testament: "I am the Lord''s servant. May your word to me be fulfilled." That is not passivity. That is a young woman looking at the complete destruction of her reputation, her safety, and her plans, and choosing to trust God anyway. Sometimes the boldest thing you can do is stop white-knuckling the outcome and open your hands. Surrender is not weakness. It is confidence that has graduated from self-reliance to God-reliance.',
  'What are you gripping tightly right now - a relationship, a timeline, a career plan, an outcome? What would your own "let it be" prayer sound like? Write it, even if your hands are still shaking.',
  'Lord, like Mary, I say yes - even to the things I don''t understand. I release my grip on the outcomes I''ve been trying to control. Your plan is better than my anxiety. May it be to me according to Your word. I trust You with what I cannot manage. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Finding God-confidence in your most constrained season',
  'I can do all this through him who gives me strength.', 'Philippians 4:13 (NIV)',
  'This verse gets printed on coffee mugs, gym walls, and Instagram bios, but the man who wrote it was chained to a Roman soldier in a prison cell when he penned those words. His name was Paul, and his story is one of the most dramatic reversals in history. Before he followed Jesus, Paul - then known as Saul - was a religious terrorist. He hunted down early Christians, dragged them from their homes, and had them imprisoned or killed. He was present and approving when Stephen, the first Christian martyr, was stoned to death. He was zealous, violent, and absolutely certain he was doing God''s work.

Then, on a road to Damascus, Jesus appeared to him in a blinding light and asked, "Why are you persecuting me?" Paul was struck blind for three days. When his sight returned, so did his entire understanding of reality. The man who had destroyed churches became the man who built them. He spent the rest of his life travelling across the Roman Empire, planting communities of faith, writing letters that would become most of the New Testament, and being beaten, shipwrecked, stoned, imprisoned, and abandoned for it.

By the time he wrote Philippians, Paul was in a Roman prison - likely chained to a guard around the clock. Many of his friends had deserted him. His body bore the scars of years of persecution. And from that place of total constraint, he wrote: "I have learned the secret of being content in any and every situation, whether well fed or hungry, whether living in plenty or in want. I can do all this through him who gives me strength." That is not a motivational poster. That is a man who found an unshakeable confidence that had nothing to do with his circumstances and everything to do with the God who met him in every one of them. This is the confidence this entire week has been building toward. Not the kind that needs everything to go right. The kind that holds steady when everything falls apart. You do not need a better situation to walk boldly. You need the God who met Paul in chains, Peter on the beach, Esther in the throne room, and Rahab on the wall. He is with you here.',
  'Write your confidence declaration - a 3-5 sentence statement drawn from what you''ve learned this week. Include the character whose story spoke to you most. Start each sentence with "I am" or "I can." Read it aloud. Mean it.',
  'God, Paul found strength in chains. Esther found courage in danger. Deborah found authority in chaos. Peter found restoration in failure. Rahab found purpose in the margins. Mary found surrender in uncertainty. I find You in all of it. I can do all things through You. From this day forward, I stop shrinking. Amen.'
FROM public.pathways p WHERE p.slug = 'confidence-and-self-worth';

-- ============================================================
-- DISCIPLINE WITH GRACE (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Daniel - faithful habits in a hostile culture',
  'Now when Daniel learned that the decree had been published, he went home to his upstairs room where the windows opened toward Jerusalem. Three times a day he got down on his knees and prayed, giving thanks to his God, just as he had done before.', 'Daniel 6:10 (NIV)',
  'Daniel was a Jewish teenager when the Babylonian empire invaded his homeland, destroyed his city, and carried him hundreds of miles away to serve a foreign king. He was ripped from everything familiar - his family, his faith community, his language, his food, his entire way of life. The Babylonians even changed his name, trying to erase his identity and reshape him into someone useful for their empire. He spent the rest of his life serving rulers who did not worship his God.

But Daniel never stopped praying. For decades - through regime changes, political schemes, and constant pressure to conform - he kept the same quiet rhythm. Three times a day, he went to his upstairs room, opened the window toward Jerusalem (the home he had lost), and prayed. When his enemies convinced the king to sign a law making prayer punishable by death in a den of lions, Daniel did not flinch. He went upstairs and prayed, "just as he had done before."

That phrase is everything. His faithfulness in the crisis was not manufactured in the moment. It was the overflow of years of quiet, unglamorous consistency. Daniel did not wake up one morning and decide to be brave. He had been practising faithfulness in small, invisible ways for so long that when the test came, his hands already knew what to do.

You are also living in a culture that pulls your attention in a thousand directions. You do not need to be dramatic about your devotion. You just need to open the window and pray - just as you have done before. Discipline rooted in love looks like this: not a heroic moment, but a thousand small ones.',
  'What are the "hostile" distractions in your daily life that pull you away from time with God? What would your version of Daniel''s three-times-a-day rhythm look like - something small, sustainable, and already woven into your existing routine?',
  'Lord, give me Daniel''s steadiness. Not his perfection - his consistency. Help me build habits now that will hold me later. When the world gets loud, let my rhythm with You be the thing I return to without thinking. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Mary of Bethany - stillness as holy discipline',
  '"Martha, Martha," the Lord answered, "you are worried and upset about many things, but few things are needed - or indeed only one. Mary has chosen what is better, and it will not be taken away from her."', 'Luke 10:41-42 (NIV)',
  'Mary and Martha were sisters who lived together in the village of Bethany, just outside Jerusalem. They were close friends of Jesus - their home was one of the places He could come and simply be welcomed. One day, Jesus arrived with His disciples, and Martha immediately went into hosting mode. In that culture, hospitality was sacred. Welcoming guests well was not a small thing - it was a deeply honoured responsibility. So Martha cooked, she served, she bustled around the house making sure everything was right.

Meanwhile, her sister Mary did something almost scandalous. She sat down at Jesus'' feet and listened to Him teach. In that era, sitting at a rabbi''s feet was a posture reserved for disciples - typically men. Mary was claiming a place at the table of learning that most people would have said was not hers to take. And she did it while her sister worked alone.

Martha, understandably frustrated, asked Jesus to tell Mary to help. But Jesus'' response was tender, not harsh: "Martha, Martha, you are worried and upset about many things, but few things are needed - or indeed only one. Mary has chosen what is better, and it will not be taken away from her."

He was not shaming Martha''s service. He was naming a deeper truth: her busyness had become a source of anxiety rather than worship. She had let the doing crowd out the being. Mary, by contrast, chose presence - and Jesus honoured that as the most disciplined choice in the room.

Sometimes the most radical act of discipline is to stop producing and start receiving. To sit down when everything in you says you should be doing more. That is not laziness. That is the discipline of trust.',
  'Are you more like Martha or Mary right now? What would it look like to choose "the better thing" today - not abandoning your responsibilities, but pausing long enough to sit with Jesus before you serve?',
  'Jesus, I confess I have been Martha - busy, anxious, measuring my worth by my output. Teach me Mary''s discipline of presence. Help me believe that sitting at Your feet is not laziness. It is the better thing. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'The early church - daily devoted rhythms',
  'They devoted themselves to the apostles'' teaching and to fellowship, to the breaking of bread and to prayer. Everyone was filled with awe at the many wonders and signs performed by the apostles.', 'Acts 2:42-43 (NIV)',
  'After Jesus was crucified, rose from the dead, and ascended to heaven, His followers were left in Jerusalem - a small, scared group of ordinary people with an extraordinary story nobody believed yet. Then, during the Jewish festival of Pentecost, God''s Spirit fell on them in a dramatic, unmistakable way, and Peter - a fisherman who had denied even knowing Jesus just weeks earlier - stood up and preached with a boldness that shocked everyone, including himself. About three thousand people believed that day.

Suddenly there was a community that had never existed before: Jews from different regions, former strangers, people with nothing in common except that they had been shattered open by the same good news. They had no church buildings, no programmes, no worship team, no small group curriculum. They had each other and four simple practices: they listened to the apostles'' teaching, they shared meals together, they prayed, and they stayed in fellowship - meaning they kept showing up for one another.

The word "devoted" in the original language does not mean they gritted their teeth and forced themselves to be spiritual. It means they were continually returning. They kept coming back to the table, to the teaching, to each other. And something remarkable happened: awe filled the room. Wonders followed. Not because they had a perfect system, but because they had a faithful rhythm held together by real relationships.

Discipline in isolation is exhausting. But discipline in community - a friend who checks in, a group that shares honestly, a table where bread is broken - that is sustainable. You were never meant to build holy habits alone.',
  'Which of the four devotions - teaching, fellowship, breaking bread, prayer - is most present in your life right now? Which is most absent? Who could you invite into a shared rhythm of faith?',
  'Father, I don''t want to do this alone. Lead me to community that is honest, consistent, and devoted - not perfect, but faithful. Help me be the kind of friend who shows up and invites others to show up too. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'Jesus - withdrawing to pray as a regular practice',
  'But Jesus often withdrew to lonely places and prayed.', 'Luke 5:16 (NIV)',
  'To understand why this verse matters, you need to know what was happening around it. Jesus had just healed a man with leprosy - a disease that made a person untouchable in that culture, cut off from family, community, and worship. When Jesus healed him, word spread like wildfire. Crowds surged toward Jesus from every direction. People brought their sick, their broken, their desperate. The need was overwhelming and relentless. There was always one more person to heal, one more question to answer, one more crowd pressing in.

And right in the middle of the highest demand, the greatest momentum, the most urgent need - Jesus left. He walked away from the crowds, found a lonely place, and prayed. Not once, in a moment of crisis. The Gospel writer Luke tells us He did this "often." It was a pattern, a rhythm, a non-negotiable part of how He lived.

This is staggering when you think about it. Jesus was God in human flesh. If anyone could have powered through without rest, it was Him. If anyone had a reason to skip the quiet and keep serving, it was the man with the power to heal every disease in the room. But He did not. He withdrew. Regularly. Intentionally. Without apology.

He was showing us something we desperately need to learn: withdrawal is not the opposite of faithfulness. It is the engine of it. Jesus stepped away from the urgent so He could stay connected to the eternal. He protected His inner life so that what flowed out of Him was not depletion, but wholeness.

If the Son of God needed regular solitude, you are not weak for needing it too. You are not selfish for stepping away. You are following His example.',
  'When was the last time you truly withdrew - not collapsed from exhaustion, but intentionally stepped away to be with God? What keeps you from making solitude a regular rhythm instead of an emergency measure?',
  'Jesus, You modelled what I struggle to do - stepping away when there was still more to give. Teach me to withdraw without guilt. Help me see that solitude is not abandoning my responsibilities. It is what makes me faithful to them. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'The Proverbs 31 woman - not perfection but purposeful living',
  'She is clothed with strength and dignity; she can laugh at the days to come. She speaks with wisdom, and faithful instruction is on her tongue. Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised.', 'Proverbs 31:25-26, 30 (NIV)',
  'Proverbs 31 is one of the most misunderstood passages in the entire Bible. Here is what most people miss: it was originally written as a poem - an acrostic where each line starts with the next letter of the Hebrew alphabet. It was composed by a king''s mother as advice to her son about what kind of woman to honour. It was never meant to be a job description for one woman to fulfil by next Tuesday.

The poem describes a woman who runs a business, makes real estate decisions, provides for her household, extends generosity to the poor, and speaks with wisdom. She is, frankly, extraordinary. But the passage has been weaponised for centuries - turned into a checklist that leaves women feeling like failures because they cannot do all of it at once. If you have ever felt crushed by the Proverbs 31 woman, please hear this: you were handed a distortion of the text.

Look at what the poem actually celebrates at its climax: "Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised." After listing everything this woman does, the poet says the thing that matters most is not her output. It is her orientation. She fears the Lord - meaning she lives in awe and trust of God. That is the root. Everything else is fruit.

And notice this line: "She can laugh at the days to come." This is not a woman grinding her teeth through life. She is at peace. She is not anxious about tomorrow because she knows who holds it. Her discipline is not driven by fear of falling short. It is the natural overflow of a life anchored in purpose and trust.

You do not need to do everything she did. You need the posture she held: purposeful, steady, and unafraid.',
  'How has the Proverbs 31 woman been presented to you - as inspiration or as pressure? What shifts when you read her not as a to-do list but as a woman at peace with her purpose?',
  'Lord, free me from the lie that discipline means doing everything perfectly. Clothe me with strength and dignity - not performance and anxiety. I want to laugh at the days to come because I trust the One who holds them. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Nehemiah - building with one hand, resting with the other',
  'Those who carried materials did their work with one hand and held a weapon in the other, and each of the builders wore his sword at his side as he built.', 'Nehemiah 4:17-18 (NIV)',
  'Nehemiah was a Jewish man living in exile in the Persian empire, working as a cupbearer to King Artaxerxes - a trusted but essentially powerless position. One day, he received devastating news from home: Jerusalem, the holy city of his ancestors, still lay in ruins. Its walls were broken down and its gates had been burned. For the Jewish people, this was not just a construction problem. The walls represented their identity, their safety, their dignity as a people. Without walls, they were exposed and humiliated.

Nehemiah wept. Then he prayed. Then he did something audacious - he asked the most powerful king in the world for permission to leave, for supplies, and for letters of safe passage. And the king said yes. Nehemiah travelled to Jerusalem and rallied the people to rebuild the wall together.

But the moment the work began, enemies showed up. Neighbouring leaders mocked them, threatened violence, and plotted to attack before the wall could be finished. The opposition was not hypothetical - it was active and relentless. Nehemiah could have pushed the people to work day and night, sacrificing sleep and rest to finish before the attack came. Instead, he did something remarkable: he organised them to build with one hand and hold a weapon in the other. He stationed guards. He created shifts. He protected the builders while they built.

This is a picture of what wise discipline looks like in a season of hard work and real opposition. Nehemiah did not choose between building and protecting. He held both. He knew the wall would never be finished if the workers were destroyed in the process.

You may be rebuilding something right now - your health, your habits, your spiritual life. And the opposition is real: exhaustion, discouragement, shame. Build with one hand. Guard your soul with the other. Both matter.',
  'What are you building right now? And what is threatening it - not externally, but internally? Where have you been so focused on the work that you have forgotten to guard your own soul?',
  'God, I am in a building season. The work feels urgent and the opposition feels constant. Help me build with one hand and rest with the other. I don''t want to finish the wall and lose myself in the process. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Paul - running the race with endurance',
  'Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith.', 'Hebrews 12:1-2 (NIV)',
  'The letter to the Hebrews was written to a community of early Jewish Christians who were exhausted. They had faced persecution, lost property, been publicly humiliated for their faith, and many were tempted to give up entirely. The author - traditionally associated with Paul''s circle of influence - had just spent an entire chapter (Hebrews 11) recounting the stories of people who had walked by faith before them: Abraham, who left everything for a promise. Moses, who chose suffering over comfort. Rahab, who risked her life for a God she barely knew. Ordinary people who held on when holding on made no earthly sense.

Then comes this passage, and the image is vivid: a stadium filled with all those faithful people from history, watching and cheering as these tired believers prepare to run. "Since we are surrounded by such a great cloud of witnesses," the author says, "let us run." But notice the word: not sprint. Run with perseverance. This is a marathon word. A long-haul word. A pace-yourself word.

And the instruction that follows is not about running harder. It is about running lighter. Throw off what hinders. Release what entangles. These are not necessarily sins - they might be unrealistic expectations, comparison, the need to be perfect, the weight of other people''s opinions. Anything that makes you heavier than you need to be for the road ahead.

Then the final instruction: fix your eyes on Jesus, the pioneer and perfecter of faith. He started it. He will finish it. The pressure is not on you to complete this race through sheer willpower. Your job is to keep looking at Him and keep putting one foot in front of the other.

As you finish this pathway, carry this truth: discipline is not about intensity. It is about direction. Run toward Him, at a pace you can sustain, and trust that grace will carry what your effort cannot.',
  'What do you need to throw off - not a sin, but a weight? A standard, an expectation, a comparison, a pace that was never yours to run? What would your race look like if you ran it at the pace of grace?',
  'Jesus, You are the pioneer and perfecter of my faith - not me. I fix my eyes on You. Help me throw off what hinders, release what entangles, and run the race You marked out for me, not anyone else''s. I will run with perseverance, not perfection. Amen.'
FROM public.pathways p WHERE p.slug = 'discipline-with-grace';

-- ============================================================
-- CAREER AND CALLING (7 days)
-- ============================================================
INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 1, 'Ruth - loyalty, risk, and a new path in a foreign land',
  'But Ruth replied, "Don''t urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God."', 'Ruth 1:16 (NIV)',
  'Ruth was a young woman from Moab - a neighboring country that Israelites looked down on. She married into an Israelite family that had moved to her homeland to escape a famine. For a while, life was good. But then her father-in-law died. Then her husband died. Then her brother-in-law died too. Three women - Ruth, her sister-in-law Orpah, and her mother-in-law Naomi - were left with nothing. No income, no male protector in a world that required one, no safety net.

Naomi decided to go back to Israel and told both daughters-in-law to return to their own families and start over. Orpah kissed Naomi goodbye and left. The sensible choice. But Ruth refused to go. She clung to Naomi and spoke those famous words: "Where you go, I will go." She chose to walk into a foreign country where she would be an outsider, a widow, and poor - all at once.

When Ruth arrived in Bethlehem, she didn''t wait for a miracle. She went to the fields and picked up leftover grain behind the harvesters, which was back-breaking, humbling work that the poorest of the poor did to survive. She didn''t have a five-year plan. She had today''s faithfulness.

Sometimes calling doesn''t start with a vision board. It starts with choosing the harder, braver road when the easy one is right there. Ruth had no idea she would eventually marry a man named Boaz, become the great-grandmother of King David, or land in the genealogy of Jesus. She just took the next step. Your next chapter doesn''t need to be glamorous. It needs to be honest.',
  'Where in your career or calling are you being asked to leave something familiar behind? What would it look like to take one faithful step forward, even without a clear destination?',
  'God, give me Ruth''s courage - the willingness to start over without a guarantee. I don''t need to see the whole field. I just need to trust that You are in the land where You''re leading me. Help me glean faithfully wherever I am. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 2, 'Nehemiah - a burden that became a calling',
  'They said to me, "Those who survived the exile and are back in the province are in great trouble and disgrace. The wall of Jerusalem is broken down, and its gates have been burned with fire." When I heard these things, I sat down and wept.', 'Nehemiah 1:3-4 (NIV)',
  'Nehemiah lived about 450 years before Jesus, during a period when the Jewish people were scattered and defeated. Decades earlier, the Babylonian empire had destroyed Jerusalem - burned the temple, tore down the city walls, and dragged most of the population into exile. Some Jews eventually returned to rebuild, but progress was painfully slow. The city was still in ruins.

Nehemiah, meanwhile, was living hundreds of miles away in Persia, working as the personal cupbearer to King Artaxerxes. This was not a servant role - it was a position of enormous trust. He tasted the king''s wine to ensure it wasn''t poisoned. He had access, comfort, and security. By every external measure, he had made it.

Then one day his brother arrived with news from Jerusalem: the people were in disgrace, the walls were rubble, and the gates were ashes. Nehemiah sat down and wept. Not politely. He mourned for days. He fasted. He prayed. The ache would not go away.

Pay attention to what wrecks you. Not what mildly irritates you on social media, but what makes your chest tight and your eyes sting. Nehemiah didn''t go looking for a calling - it found him through grief he couldn''t shake. And notice: he didn''t rage-quit his job the next morning. He prayed for four months before he said a word to the king. When the moment came, he asked for permission, resources, and letters of safe passage. He moved with both urgency and wisdom.

Calling often starts not with excitement but with a holy heartbreak that refuses to stay quiet. If something keeps breaking your heart, don''t numb it. It might be your assignment.',
  'What breaks your heart in a way you can''t seem to move past? A problem in your community, your industry, your world? Could that burden be the beginning of a calling?',
  'Lord, show me the walls that are broken down - the ones You want me to notice. If this burden I carry is from You, give me the courage of Nehemiah: to pray first, plan wisely, and move when You say go. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 3, 'Lydia - business and faith working together',
  'One of those listening was a woman from the city of Thyatira named Lydia, a dealer in purple cloth. She was a worshiper of God. The Lord opened her heart to respond to Paul''s message.', 'Acts 16:14 (NIV)',
  'Lydia shows up in the book of Acts almost casually - just a few verses - but she was a remarkable woman. She lived in the city of Philippi in ancient Greece, far from her hometown of Thyatira in modern-day Turkey. She was a dealer in purple cloth, which was one of the most expensive luxury goods in the ancient world. Purple dye was extracted drop by drop from sea snails, and only the wealthy could afford it. Lydia was essentially running a high-end import business in a male-dominated trade economy. She had money, influence, and a household large enough to host guests.

One Sabbath day, she was gathered with a group of women by a river outside the city for prayer. The apostle Paul came and spoke to them, and the text says something beautiful: "The Lord opened her heart." Lydia believed, was baptized, and immediately opened her home to Paul and his companions. Her house became the first church in all of Europe.

Here is what matters: Lydia was a businesswoman before she met Paul and a businesswoman after. Her faith didn''t pull her out of the marketplace - it gave her marketplace new meaning. She didn''t quit selling purple cloth to "go into ministry." She used the resources, networks, and home that her work had built to advance the gospel.

Somewhere along the way, we absorbed the lie that sacred work happens in churches and secular work happens everywhere else. Lydia demolishes that wall. She worshiped God and negotiated trade deals - in the same life, on the same days. Your career is not a distraction from your faith. It is one of the primary arenas where your faith gets lived out. The office, the studio, the classroom, the kitchen - these are not waiting rooms for your real calling. They might already be it.',
  'Do you tend to separate your faith life from your work life? Where could you let them overlap more naturally, the way Lydia seemed to?',
  'God, I don''t want a divided life - spiritual on Sundays and secular on Mondays. Like Lydia, let me be both a worshiper and a worker, fully integrated. Open my heart the way You opened hers, right in the middle of her ordinary workday. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 4, 'Jeremiah - called before being born, reluctant prophet',
  '"Before I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations." "Alas, Sovereign Lord," I said, "I do not know how to speak; I am too young."', 'Jeremiah 1:5-6 (NIV)',
  'Jeremiah was a young man - probably a teenager or barely into his twenties - living in a small village just outside Jerusalem, around 626 BC. His father was a priest, so he grew up around religious life, but nothing about his background was remarkable. He was not powerful. He was not well-connected. He was not a confident public speaker. He was, by his own description, too young.

Then God spoke to him and said something staggering: "Before I formed you in the womb, I knew you. Before you were born, I set you apart." God was telling Jeremiah that his calling was not a reaction to his talents or his readiness. It preceded his existence. It was woven into the plan before Jeremiah had a body, a name, or a single doubt about himself.

Jeremiah''s first response was essentially, "You have the wrong person." He protested. He pointed out his age, his lack of speaking ability. And God did not argue with any of it. He didn''t say, "Actually, you''re very qualified." He said, "Do not say you are too young. I am with you." The answer to Jeremiah''s inadequacy was not competence - it was presence.

Jeremiah went on to become one of the most important prophets in Jewish history, but his life was not easy. He was rejected, imprisoned, thrown into a cistern, and wept so much he is called "the weeping prophet." His calling was not comfortable. But it was real.

You may feel too young, too old, too inexperienced, too behind. That is not disqualifying. God''s calling was established before your doubts existed. He is not pacing heaven, worried about your imposter syndrome. He knew you before you were formed and appointed you anyway.',
  'What is your version of "I am too young" - the thing you tell yourself that makes you feel unqualified for what God might be calling you to? Write it down, then write Jeremiah 1:5 underneath it.',
  'Lord, You knew me before I was born and You set me apart. I don''t feel ready. I don''t feel qualified. But You didn''t ask me to feel ready - You asked me to be willing. Here I am. Speak, and help me stop disqualifying myself. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 5, 'The Parable of the Talents - stewardship of what you''re given',
  '"His master replied, ''Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things. Come and share your master''s happiness!''"', 'Matthew 25:21 (NIV)',
  'Jesus told this story: A wealthy man was leaving on a long journey, so he entrusted his money to three servants. To one he gave five "talents" (a talent was a unit of money worth about twenty years of wages - this was a fortune). To another he gave two talents. To the last, he gave one. Then he left.

The first servant invested his five talents and earned five more. The second invested his two and earned two more. But the third servant - the one with just one talent - dug a hole in the ground and buried it. He didn''t lose it. He didn''t spend it foolishly. He hid it, because he was afraid.

When the master returned, he celebrated the first two servants with identical words: "Well done, good and faithful servant." Notice - he didn''t say "well done, most productive servant." The one who made five and the one who made two received the same praise, because faithfulness was the measure, not output.

But to the third servant, the master was harsh. Not because the servant failed, but because he never tried. He was so paralyzed by fear of getting it wrong that he buried his potential in the dirt and called it caution.

This is not a hustle parable. It is not about grinding harder or optimizing your productivity. It is about refusing to let fear make your decisions. The real enemy of calling is not failure - it is the paralysis that comes from being terrified to try. God is not comparing your results to someone else''s five talents. He is asking: did you do something with what I gave you, or did you bury it?

Start with what is already in your hands. That is enough.',
  'What has God already placed in your hands - a skill, a relationship, an opportunity, a resource? Are you investing it or burying it? Be honest about what fear might be holding you back.',
  'Father, I don''t want to bury what You''ve given me because I''m afraid of getting it wrong. Show me what''s already in my hands. Give me the courage to invest it faithfully, even imperfectly. I would rather try and stumble than hide and waste. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 6, 'Bezalel - called to create, gifted by the Spirit for craft',
  '"See, I have chosen Bezalel son of Uri... and I have filled him with the Spirit of God, with wisdom, with understanding, with knowledge and with all kinds of skills - to make artistic designs for work in gold, silver and bronze, to cut and set stones, to work in wood, and to engage in all kinds of crafts."', 'Exodus 31:2-5 (NIV)',
  'After the Israelites escaped slavery in Egypt - the famous story of Moses and the parting of the Red Sea - they spent years wandering in the desert. During this time, God told Moses to build a "tabernacle," a portable, elaborate tent that would serve as the place where God''s presence dwelled among His people. This was not a simple tent. It required gold-plated walls, hand-woven curtains in blue, purple, and scarlet yarn, a gold-covered wooden chest called the Ark of the Covenant, lampstands, altars, and intricate carvings. It was a masterwork.

And who did God choose for this enormous creative project? A man named Bezalel. We know almost nothing about him except this: he is the first person in all of Scripture described as being "filled with the Spirit of God." Not a prophet. Not a priest. Not a king. A craftsman. God poured His Spirit into Bezalel specifically for metalwork, stonecutting, woodcarving, and artistic design.

Let that land. The very first time the Bible says the Spirit of God filled a human being, it was so that person could make beautiful things with their hands. Not so he could preach a sermon or perform a miracle - so he could create.

This reframes everything. Your talent for design, your eye for detail, your ability to build or write or organize or photograph or code - these are not lesser gifts because they don''t happen behind a pulpit. The Spirit of God fills people for craft, not just for preaching. Whatever your skilled work is, it can be Spirit-led. You don''t need a church stage to be anointed. You might just need your desk, your kitchen, your studio, and a willing heart.',
  'What is your craft - the thing you do with skill that you might have dismissed as "not spiritual enough"? How does it change things to know that the first Spirit-filled person in the Bible was an artisan?',
  'God, fill me with Your Spirit the way You filled Bezalel - not just for prayer, but for my craft. Give me wisdom, understanding, and skill in the work of my hands. Let my creativity and competence be an act of worship. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

INSERT INTO public.pathway_days (pathway_id, day_number, theme, scripture_text, scripture_reference, reflection, journal_prompt, prayer_prompt)
SELECT p.id, 7, 'Jesus at 12 - "I must be about my Father''s business"',
  '"Why were you searching for me?" he asked. "Didn''t you know I had to be in my Father''s house?"', 'Luke 2:49 (NIV)',
  'Every year, Jesus''s family made a long trip from their small town of Nazareth to Jerusalem for the Passover festival - a major Jewish holiday celebrating God''s deliverance of Israel from slavery in Egypt. The journey was about 65 miles on foot, usually traveled in large groups of extended family and neighbors for safety. When Jesus was twelve years old, the family made the trip as usual. When the festival ended, the caravan headed home.

A full day into the return journey, Mary and Joseph realized Jesus was not with them. They had assumed He was somewhere in the group - walking with cousins, perhaps, the way kids do. But He wasn''t. Panicked, they turned around and rushed back to Jerusalem. They searched for three days.

They found Him in the temple, sitting among the religious teachers, listening, asking questions, and astonishing everyone with His understanding. Mary, frantic and relieved and probably furious the way only a mother can be, said: "Son, why have You treated us like this? Your father and I have been anxiously searching for You." And this twelve-year-old boy answered with quiet certainty: "Didn''t you know I had to be in my Father''s house?"

Jesus was not yet in public ministry. He had not yet healed anyone, preached a sermon, or called a single disciple. He was a kid. But even at twelve, before His career began, He knew whose business He was about. Not His own. His Father''s.

This is the anchor for every question about calling. Before the title, before the paycheck, before the platform - whose business are you about? When your career is rooted in your Father''s purposes, you can hold the specifics loosely. Jobs will change. Industries will shift. Roles will evolve. But if the foundation is "I am about my Father''s business," you will never be without a calling. The form changes. The foundation doesn''t.',
  'If someone asked you today, "Whose business are you about?" - what would your honest answer be? Your own? Your employer''s? Your Father''s? What would need to shift for that answer to feel truer?',
  'Father, I want to be about Your business - not my ambition, not my anxiety, not the world''s definition of success. Root my calling in You so deeply that when the specifics change, my foundation doesn''t. I am Yours. My work is Yours. Amen.'
FROM public.pathways p WHERE p.slug = 'career-and-calling';

