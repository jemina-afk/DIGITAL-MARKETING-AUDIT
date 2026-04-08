// ============================================================
// COMPREHENSIVE VERSE DATABASE
// 10-15 verses per mood/need category to prevent repeats
// ============================================================

export interface TaggedVerse {
  text: string;
  reference: string;
  moods: string[];    // which feelings this verse addresses
  needs: string[];    // which needs this verse meets
  struggles: string[]; // which struggles this resonates with
}

export const VERSE_DATABASE: TaggedVerse[] = [
  // ===== ANXIETY & WORRY =====
  { text: 'Cast all your anxiety on him because he cares for you.', reference: '1 Peter 5:7 (NIV)', moods: ['anxious', 'overwhelmed'], needs: ['peace', 'comfort'], struggles: ['anxiety'] },
  { text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.', reference: 'Philippians 4:6-7 (NIV)', moods: ['anxious', 'restless'], needs: ['peace'], struggles: ['anxiety'] },
  { text: 'When anxiety was great within me, your consolation brought me joy.', reference: 'Psalm 94:19 (NIV)', moods: ['anxious'], needs: ['comfort', 'joy'], struggles: ['anxiety'] },
  { text: 'God is our refuge and strength, an ever-present help in trouble.', reference: 'Psalm 46:1 (NIV)', moods: ['anxious', 'overwhelmed'], needs: ['strength', 'peace'], struggles: ['anxiety'] },
  { text: 'Say to those with fearful hearts, "Be strong, do not fear; your God will come."', reference: 'Isaiah 35:4 (NIV)', moods: ['anxious'], needs: ['courage', 'strength'], struggles: ['anxiety', 'confidence'] },
  { text: 'I sought the Lord, and he answered me; he delivered me from all my fears.', reference: 'Psalm 34:4 (NIV)', moods: ['anxious', 'restless'], needs: ['peace', 'courage'], struggles: ['anxiety'] },
  { text: 'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.', reference: 'Isaiah 41:10 (NIV)', moods: ['anxious', 'lonely'], needs: ['strength', 'comfort'], struggles: ['anxiety', 'loneliness'] },
  { text: 'The Lord is my light and my salvation - whom shall I fear? The Lord is the stronghold of my life - of whom shall I be afraid?', reference: 'Psalm 27:1 (NIV)', moods: ['anxious'], needs: ['courage', 'peace'], struggles: ['anxiety', 'confidence'] },
  { text: 'Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.', reference: 'Psalm 23:4 (NIV)', moods: ['anxious', 'hurt'], needs: ['comfort', 'courage'], struggles: ['anxiety', 'heartbreak'] },
  { text: 'For God has not given us a spirit of fear, but of power and of love and of a sound mind.', reference: '2 Timothy 1:7 (NKJV)', moods: ['anxious', 'restless'], needs: ['courage', 'clarity'], struggles: ['anxiety', 'confidence'] },
  { text: 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.', reference: 'Isaiah 26:3 (NIV)', moods: ['anxious', 'restless'], needs: ['peace'], struggles: ['anxiety'] },
  { text: 'In the multitude of my anxieties within me, your comforts delight my soul.', reference: 'Psalm 94:19 (NKJV)', moods: ['anxious', 'overwhelmed'], needs: ['comfort'], struggles: ['anxiety', 'burnout'] },

  // ===== PEACE & REST =====
  { text: 'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.', reference: 'John 14:27 (NIV)', moods: ['peaceful', 'anxious'], needs: ['peace'], struggles: ['anxiety'] },
  { text: 'Come to me, all you who are weary and burdened, and I will give you rest.', reference: 'Matthew 11:28 (NIV)', moods: ['weary', 'overwhelmed'], needs: ['rest'], struggles: ['burnout', 'anxiety'] },
  { text: 'The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.', reference: 'Psalm 23:1-3 (NIV)', moods: ['peaceful', 'weary'], needs: ['rest', 'peace'], struggles: ['burnout'] },
  { text: 'Be still, and know that I am God.', reference: 'Psalm 46:10 (NIV)', moods: ['restless', 'anxious'], needs: ['peace', 'rest'], struggles: ['anxiety', 'burnout'] },
  { text: 'In repentance and rest is your salvation, in quietness and trust is your strength.', reference: 'Isaiah 30:15 (NIV)', moods: ['restless', 'weary'], needs: ['rest', 'strength'], struggles: ['burnout', 'discipline'] },

  // ===== IDENTITY & SELF-WORTH =====
  { text: 'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.', reference: 'Psalm 139:14 (NIV)', moods: ['hurt', 'lonely'], needs: ['identity'], struggles: ['identity', 'confidence'] },
  { text: 'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!', reference: '1 John 3:1 (NIV)', moods: ['lonely', 'hurt'], needs: ['identity', 'comfort'], struggles: ['identity'] },
  { text: 'For we are God\'s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.', reference: 'Ephesians 2:10 (NIV)', moods: ['restless', 'confident'], needs: ['direction', 'identity'], struggles: ['identity', 'calling'] },
  { text: 'Before I formed you in the womb I knew you, before you were born I set you apart.', reference: 'Jeremiah 1:5 (NIV)', moods: ['lonely', 'hurt'], needs: ['identity'], struggles: ['identity', 'calling'] },
  { text: 'But you are a chosen people, a royal priesthood, a holy nation, God\'s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.', reference: '1 Peter 2:9 (NIV)', moods: ['lonely'], needs: ['identity'], struggles: ['identity', 'confidence'] },
  { text: 'The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.', reference: 'Zephaniah 3:17 (NIV)', moods: ['lonely', 'hurt'], needs: ['identity', 'comfort'], struggles: ['identity', 'heartbreak'] },
  { text: 'My grace is sufficient for you, for my power is made perfect in weakness.', reference: '2 Corinthians 12:9 (NIV)', moods: ['weary', 'hurt'], needs: ['strength', 'identity'], struggles: ['identity', 'confidence'] },
  { text: 'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.', reference: 'Romans 8:38-39 (NIV)', moods: ['lonely', 'anxious'], needs: ['comfort', 'identity'], struggles: ['identity', 'heartbreak'] },

  // ===== WAITING & PATIENCE =====
  { text: 'Wait for the Lord; be strong and take heart and wait for the Lord.', reference: 'Psalm 27:14 (NIV)', moods: ['restless', 'weary'], needs: ['patience', 'strength'], struggles: ['waiting'] },
  { text: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.', reference: 'Isaiah 40:31 (NIV)', moods: ['weary', 'hopeful'], needs: ['strength', 'hope'], struggles: ['waiting', 'burnout'] },
  { text: 'For the revelation awaits an appointed time; it speaks of the end and will not prove false. Though it linger, wait for it; it will certainly come and will not delay.', reference: 'Habakkuk 2:3 (NIV)', moods: ['restless'], needs: ['patience', 'hope'], struggles: ['waiting'] },
  { text: 'The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you.', reference: '2 Peter 3:9 (NIV)', moods: ['restless', 'anxious'], needs: ['patience'], struggles: ['waiting'] },
  { text: 'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.', reference: 'Galatians 6:9 (NIV)', moods: ['weary', 'restless'], needs: ['patience', 'hope'], struggles: ['waiting', 'discipline'] },
  { text: 'I waited patiently for the Lord; he turned to me and heard my cry.', reference: 'Psalm 40:1 (NIV)', moods: ['restless', 'lonely'], needs: ['patience', 'comfort'], struggles: ['waiting'] },
  { text: 'Be patient, then, brothers and sisters, until the Lord\'s coming. See how the farmer waits for the land to yield its valuable crop, patiently waiting for the autumn and spring rains.', reference: 'James 5:7 (NIV)', moods: ['restless'], needs: ['patience'], struggles: ['waiting'] },

  // ===== HEARTBREAK & HEALING =====
  { text: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.', reference: 'Psalm 34:18 (NIV)', moods: ['hurt'], needs: ['comfort', 'healing'], struggles: ['heartbreak'] },
  { text: 'He heals the brokenhearted and binds up their wounds.', reference: 'Psalm 147:3 (NIV)', moods: ['hurt'], needs: ['healing', 'comfort'], struggles: ['heartbreak'] },
  { text: 'He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners.', reference: 'Isaiah 61:1 (NIV)', moods: ['hurt', 'lonely'], needs: ['healing'], struggles: ['heartbreak'] },
  { text: 'Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it?', reference: 'Isaiah 43:18-19 (NIV)', moods: ['hurt', 'hopeful'], needs: ['hope', 'healing'], struggles: ['heartbreak'] },
  { text: 'He has sent me to bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair.', reference: 'Isaiah 61:3 (NIV)', moods: ['hurt', 'weary'], needs: ['hope', 'healing'], struggles: ['heartbreak'] },
  { text: 'Weeping may stay for the night, but rejoicing comes in the morning.', reference: 'Psalm 30:5 (NIV)', moods: ['hurt'], needs: ['hope', 'comfort'], struggles: ['heartbreak'] },
  { text: 'God is our refuge and strength, an ever-present help in trouble. Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea.', reference: 'Psalm 46:1-2 (NIV)', moods: ['hurt', 'anxious'], needs: ['strength', 'comfort'], struggles: ['heartbreak', 'anxiety'] },

  // ===== GRATITUDE & JOY =====
  { text: 'Give thanks in all circumstances; for this is God\'s will for you in Christ Jesus.', reference: '1 Thessalonians 5:18 (NIV)', moods: ['grateful', 'peaceful'], needs: ['joy'], struggles: [] },
  { text: 'Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows.', reference: 'James 1:17 (NIV)', moods: ['grateful', 'joyful'], needs: ['joy'], struggles: [] },
  { text: 'The joy of the Lord is your strength.', reference: 'Nehemiah 8:10 (NIV)', moods: ['joyful', 'grateful'], needs: ['joy', 'strength'], struggles: [] },
  { text: 'You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand.', reference: 'Psalm 16:11 (NIV)', moods: ['joyful', 'peaceful'], needs: ['joy', 'direction'], struggles: [] },
  { text: 'Rejoice in the Lord always. I will say it again: Rejoice!', reference: 'Philippians 4:4 (NIV)', moods: ['joyful', 'grateful'], needs: ['joy'], struggles: [] },
  { text: 'This is the day that the Lord has made; let us rejoice and be glad in it.', reference: 'Psalm 118:24 (ESV)', moods: ['joyful', 'grateful', 'peaceful'], needs: ['joy'], struggles: [] },

  // ===== LONELINESS & CONNECTION =====
  { text: 'The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.', reference: 'Deuteronomy 31:8 (NIV)', moods: ['lonely', 'anxious'], needs: ['comfort'], struggles: ['loneliness'] },
  { text: 'Turn to me and be gracious to me, for I am lonely and afflicted.', reference: 'Psalm 25:16 (NIV)', moods: ['lonely'], needs: ['comfort'], struggles: ['loneliness'] },
  { text: 'A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families.', reference: 'Psalm 68:5-6 (NIV)', moods: ['lonely'], needs: ['comfort', 'identity'], struggles: ['loneliness'] },
  { text: 'Where can I go from your Spirit? Where can I flee from your presence? If I go up to the heavens, you are there; if I make my bed in the depths, you are there.', reference: 'Psalm 139:7-8 (NIV)', moods: ['lonely'], needs: ['comfort'], struggles: ['loneliness'] },
  { text: 'And surely I am with you always, to the very end of the age.', reference: 'Matthew 28:20 (NIV)', moods: ['lonely', 'anxious'], needs: ['comfort'], struggles: ['loneliness'] },

  // ===== CONFIDENCE & COURAGE =====
  { text: 'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.', reference: 'Joshua 1:9 (NIV)', moods: ['anxious', 'restless'], needs: ['courage', 'strength'], struggles: ['confidence'] },
  { text: 'I can do all this through him who gives me strength.', reference: 'Philippians 4:13 (NIV)', moods: ['weary', 'confident'], needs: ['strength', 'courage'], struggles: ['confidence'] },
  { text: 'The Lord is with me; I will not be afraid. What can mere mortals do to me?', reference: 'Psalm 118:6 (NIV)', moods: ['anxious'], needs: ['courage'], struggles: ['confidence'] },
  { text: 'When I am afraid, I put my trust in you. In God, whose word I praise - in God I trust and am not afraid.', reference: 'Psalm 56:3-4 (NIV)', moods: ['anxious'], needs: ['courage', 'peace'], struggles: ['confidence', 'anxiety'] },

  // ===== PURPOSE & CALLING =====
  { text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.', reference: 'Jeremiah 29:11 (NIV)', moods: ['restless', 'hopeful'], needs: ['direction', 'hope'], struggles: ['calling', 'waiting'] },
  { text: 'Your word is a lamp for my feet, a light on my path.', reference: 'Psalm 119:105 (NIV)', moods: ['restless'], needs: ['direction', 'clarity'], struggles: ['calling'] },
  { text: 'Commit to the Lord whatever you do, and he will establish your plans.', reference: 'Proverbs 16:3 (NIV)', moods: ['restless', 'anxious'], needs: ['direction'], struggles: ['calling'] },
  { text: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.', reference: 'Proverbs 3:5-6 (NIV)', moods: ['restless', 'anxious'], needs: ['direction', 'clarity'], struggles: ['calling', 'anxiety'] },
  { text: 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.', reference: 'Colossians 3:23 (NIV)', moods: ['weary', 'restless'], needs: ['direction', 'strength'], struggles: ['calling', 'discipline'] },

  // ===== DISCIPLINE & GROWTH =====
  { text: 'The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.', reference: 'Lamentations 3:22-23 (ESV)', moods: ['weary', 'grateful'], needs: ['hope'], struggles: ['discipline'] },
  { text: 'No discipline seems pleasant at the time, but painful. Later on, however, it produces a harvest of righteousness and peace for those who have been trained by it.', reference: 'Hebrews 12:11 (NIV)', moods: ['weary'], needs: ['patience', 'strength'], struggles: ['discipline'] },
  { text: 'Whoever can be trusted with very little can also be trusted with much.', reference: 'Luke 16:10 (NIV)', moods: ['restless'], needs: ['direction'], struggles: ['discipline', 'calling'] },
  { text: 'But grow in the grace and knowledge of our Lord and Savior Jesus Christ.', reference: '2 Peter 3:18 (NIV)', moods: ['hopeful', 'peaceful'], needs: ['hope'], struggles: ['discipline'] },

  // ===== COMPARISON & CONTENTMENT =====
  { text: 'Each one should test their own actions. Then they can take pride in themselves alone, without comparing themselves to someone else.', reference: 'Galatians 6:4 (NIV)', moods: ['restless', 'hurt'], needs: ['identity'], struggles: ['comparison', 'identity'] },
  { text: 'I have learned to be content whatever the circumstances.', reference: 'Philippians 4:11 (NIV)', moods: ['restless', 'anxious'], needs: ['peace'], struggles: ['comparison'] },
  { text: 'Am I now trying to win the approval of human beings, or of God? If I were still trying to please people, I would not be a servant of Christ.', reference: 'Galatians 1:10 (NIV)', moods: ['restless', 'anxious'], needs: ['identity', 'courage'], struggles: ['comparison', 'confidence'] },

  // ===== SURRENDER & TRUST =====
  { text: 'The Lord will fight for you; you need only to be still.', reference: 'Exodus 14:14 (NIV)', moods: ['anxious', 'overwhelmed', 'surrendered'], needs: ['peace', 'rest'], struggles: ['anxiety'] },
  { text: 'Many are the plans in a person\'s heart, but it is the Lord\'s purpose that prevails.', reference: 'Proverbs 19:21 (NIV)', moods: ['restless', 'surrendered'], needs: ['direction', 'peace'], struggles: ['calling', 'waiting'] },
  { text: 'Consider it pure joy, my brothers and sisters, whenever you face trials of various kinds, because you know that the testing of your faith produces perseverance.', reference: 'James 1:2-3 (NIV)', moods: ['weary', 'hurt'], needs: ['strength', 'hope'], struggles: ['waiting', 'heartbreak'] },
  { text: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.', reference: 'Romans 8:28 (NIV)', moods: ['hurt', 'hopeful', 'surrendered'], needs: ['hope', 'comfort'], struggles: ['heartbreak', 'waiting'] },

  // ===== HOPE & FUTURE =====
  { text: 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.', reference: 'Romans 15:13 (NIV)', moods: ['hopeful', 'peaceful'], needs: ['hope', 'joy'], struggles: [] },
  { text: '"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."', reference: 'Jeremiah 29:11 (NIV)', moods: ['hopeful', 'restless'], needs: ['hope', 'direction'], struggles: ['waiting', 'calling'] },
  { text: 'Now faith is confidence in what we hope for and assurance about what we do not see.', reference: 'Hebrews 11:1 (NIV)', moods: ['hopeful', 'restless'], needs: ['hope'], struggles: ['waiting'] },
  { text: 'Those who sow with tears will reap with songs of joy. Those who go out weeping, carrying seed to sow, will return with songs of joy, carrying sheaves with them.', reference: 'Psalm 126:5-6 (NIV)', moods: ['hurt', 'hopeful'], needs: ['hope'], struggles: ['heartbreak', 'waiting'] },

  // ===== BURNOUT & EXHAUSTION =====
  { text: 'He gives strength to the weary and increases the power of the weak.', reference: 'Isaiah 40:29 (NIV)', moods: ['weary', 'overwhelmed'], needs: ['strength', 'rest'], struggles: ['burnout'] },
  { text: 'By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work.', reference: 'Genesis 2:2 (NIV)', moods: ['weary'], needs: ['rest'], struggles: ['burnout', 'discipline'] },
  { text: 'He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.', reference: 'Psalm 23:2-3 (NIV)', moods: ['weary', 'overwhelmed'], needs: ['rest', 'peace'], struggles: ['burnout'] },
  { text: 'My flesh and my heart may fail, but God is the strength of my heart and my portion forever.', reference: 'Psalm 73:26 (NIV)', moods: ['weary', 'overwhelmed'], needs: ['strength'], struggles: ['burnout'] },
];

// ============================================================
// VERSE SELECTION WITH DEDUPLICATION
// ============================================================

// Find best matching verses for a given mood + need + struggle combo
export function findMatchingVerses(
  moods: string[],
  needs: string[],
  struggle: string | null,
): TaggedVerse[] {
  return VERSE_DATABASE
    .map(verse => {
      let score = 0;
      // Score based on mood match
      moods.forEach(m => { if (verse.moods.includes(m)) score += 3; });
      // Score based on need match
      needs.forEach(n => { if (verse.needs.includes(n)) score += 2; });
      // Score based on struggle match
      if (struggle && verse.struggles.includes(struggle)) score += 4;
      return { verse, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ verse }) => verse);
}

// Pick a verse that hasn't been shown recently
export function pickDiverseVerse(
  matches: TaggedVerse[],
  recentReferences: string[], // references shown in the last 7 days
): TaggedVerse {
  // Try to find one not recently shown
  const fresh = matches.filter(v => !recentReferences.includes(v.reference));
  if (fresh.length > 0) {
    // Pick randomly from top 5 matches to add variety
    const pool = fresh.slice(0, Math.min(5, fresh.length));
    return pool[Math.floor(Math.random() * pool.length)];
  }
  // If all have been shown, just pick a random one
  return matches[Math.floor(Math.random() * matches.length)] || VERSE_DATABASE[0];
}
