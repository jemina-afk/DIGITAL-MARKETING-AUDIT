// 30 premium journaling prompts for Selah
// Designed to be thoughtful, healing, and emotionally specific
// Each prompt should feel like it came from a wise friend, not a workbook

export const JOURNAL_PROMPTS_FULL = [
  // Identity & Self-Knowledge
  { prompt_text: 'What is God teaching you in this season that you couldn\'t learn in any other?', category: 'reflection', mood_context: ['reflective', 'peaceful', 'hopeful'], sort_order: 1 },
  { prompt_text: 'Write a letter to God about what you\'re carrying today. Don\'t edit it. Don\'t make it sound spiritual. Just tell the truth.', category: 'prayer', mood_context: ['overwhelmed', 'anxious', 'weary', 'hurt'], sort_order: 2 },
  { prompt_text: 'What lie about yourself have you been treating as fact? Where did it originate? What does God say instead?', category: 'identity', mood_context: ['anxious', 'hurt', 'lonely'], sort_order: 3 },
  { prompt_text: 'If God wrote you a personal letter today, what do you think the first line would be?', category: 'identity', mood_context: ['lonely', 'hurt', 'reflective'], sort_order: 4 },
  { prompt_text: 'Describe the version of yourself you\'re becoming. Not the version the world wants - the one God is shaping.', category: 'identity', mood_context: ['hopeful', 'reflective', 'confident'], sort_order: 5 },

  // Gratitude & Noticing
  { prompt_text: 'Name 5 "invisible mercies" from this week - things that could have gone wrong but didn\'t, or small gifts you almost overlooked.', category: 'gratitude', mood_context: ['grateful', 'peaceful', 'joyful'], sort_order: 6 },
  { prompt_text: 'What are you grateful for that you didn\'t ask for? Sometimes the best gifts are the ones we didn\'t know to request.', category: 'gratitude', mood_context: ['grateful', 'reflective'], sort_order: 7 },
  { prompt_text: 'Write about a person who has shown you God\'s love - even if they didn\'t know they were doing it.', category: 'gratitude', mood_context: ['grateful', 'peaceful', 'hopeful'], sort_order: 8 },

  // Processing Pain
  { prompt_text: 'What are you grieving that you haven\'t given yourself permission to grieve? Write the loss honestly. Give it its real name.', category: 'healing', mood_context: ['hurt', 'weary', 'lonely'], sort_order: 9 },
  { prompt_text: 'Write about a wound that still surfaces. What does it need from you? What does it need from God?', category: 'healing', mood_context: ['hurt', 'reflective'], sort_order: 10 },
  { prompt_text: 'If your pain could speak, what would it say? And if God responded directly, what would He say back?', category: 'healing', mood_context: ['hurt', 'overwhelmed', 'lonely'], sort_order: 11 },

  // Surrender & Trust
  { prompt_text: 'What are you trying to control that belongs to God? Name it. Then write what it would feel like to genuinely release it.', category: 'surrender', mood_context: ['anxious', 'overwhelmed', 'restless'], sort_order: 12 },
  { prompt_text: 'Where in your life is God asking you to trust Him without evidence? What makes it hard? What makes it possible?', category: 'surrender', mood_context: ['anxious', 'restless'], sort_order: 13 },
  { prompt_text: 'Write about a time God\'s plan turned out better than yours. What did you learn about His character?', category: 'surrender', mood_context: ['reflective', 'grateful', 'hopeful'], sort_order: 14 },

  // Calling & Purpose
  { prompt_text: 'What breaks your heart about the world? There may be a calling hidden inside that ache.', category: 'calling', mood_context: ['reflective', 'restless'], sort_order: 15 },
  { prompt_text: 'If money and opinions were irrelevant, what would you spend your days doing? Be honest. Be wild. Be real.', category: 'calling', mood_context: ['reflective', 'hopeful', 'restless'], sort_order: 16 },
  { prompt_text: 'What is one thing you\'re good at that you\'ve been dismissing as "not spiritual enough" for God to use?', category: 'calling', mood_context: ['reflective', 'confident'], sort_order: 17 },

  // Relationships
  { prompt_text: 'Write about someone you need to forgive. You don\'t have to forgive them today. Just tell God how the hurt feels.', category: 'relationships', mood_context: ['hurt', 'reflective'], sort_order: 18 },
  { prompt_text: 'What kind of friend, partner, or community member do you want to become? What\'s one step toward that this week?', category: 'relationships', mood_context: ['reflective', 'hopeful'], sort_order: 19 },
  { prompt_text: 'Who has God placed in your life right now that you might be taking for granted? Write them a thank-you note in your journal.', category: 'relationships', mood_context: ['grateful', 'peaceful'], sort_order: 20 },

  // Rest & Rhythms
  { prompt_text: 'What does your soul actually need today? Not what your to-do list demands - what your soul needs. Be specific.', category: 'rest', mood_context: ['weary', 'overwhelmed'], sort_order: 21 },
  { prompt_text: 'When was the last time you truly rested - not scrolled, not numbed, but rested? What was it like? How can you do it again?', category: 'rest', mood_context: ['weary', 'overwhelmed', 'restless'], sort_order: 22 },

  // Courage & Growth
  { prompt_text: 'What are you afraid of right now? Write the fear in its fullness. Then write: "Even here, God is with me."', category: 'courage', mood_context: ['anxious', 'restless'], sort_order: 23 },
  { prompt_text: 'Where are you playing it safe because you\'re afraid of failure? What would holy boldness look like in that area?', category: 'courage', mood_context: ['restless', 'reflective'], sort_order: 24 },
  { prompt_text: 'Write about a time you did something brave. What gave you courage then? Can you draw from the same source now?', category: 'courage', mood_context: ['confident', 'hopeful'], sort_order: 25 },

  // Deep Reflection
  { prompt_text: 'What does "Be still, and know that I am God" mean for your specific life today - not in theory, but in practice?', category: 'reflection', mood_context: ['anxious', 'restless', 'overwhelmed'], sort_order: 26 },
  { prompt_text: 'What would you tell your 18-year-old self about God\'s faithfulness? Write the letter.', category: 'reflection', mood_context: ['reflective', 'peaceful', 'grateful'], sort_order: 27 },
  { prompt_text: 'Where have you been performing spirituality instead of practising it? What would authenticity look like?', category: 'reflection', mood_context: ['reflective', 'weary'], sort_order: 28 },
  { prompt_text: 'What verse or phrase from God has been following you this season? Why do you think it keeps coming back?', category: 'reflection', mood_context: ['reflective', 'peaceful', 'hopeful'], sort_order: 29 },
  { prompt_text: 'If you could sit with Jesus for 10 minutes and ask Him one question, what would it be? Write His likely response based on what Scripture reveals about His character.', category: 'reflection', mood_context: ['reflective', 'lonely', 'hopeful'], sort_order: 30 },
];
