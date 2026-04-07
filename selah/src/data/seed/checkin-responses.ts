// 50 daily check-in response templates
// These are the compassionate "openers" that appear after a user checks in
// before the scripture and prayer. They validate the user's feelings and
// create a bridge to the devotional content.

export const CHECKIN_RESPONSE_TEMPLATES = {
  // Keyed by primary feeling tag
  peaceful: [
    'There\'s something sacred about noticing peace when it arrives. God wants you to savour this — not rush past it. Let this peace anchor you for whatever comes next.',
    'Peace doesn\'t always mean everything is resolved. Sometimes it means you\'ve stopped fighting what you can\'t control. That\'s a beautiful place to be.',
    'This calm you feel is a gift. Not earned, not manufactured — given. Let it seep deeper today.',
    'When peace comes, receive it fully. Don\'t wait for the other shoe to drop. God\'s peace is not a setup for disappointment. It\'s a foretaste of His goodness.',
  ],
  anxious: [
    'Anxiety doesn\'t make you faithless. It makes you human. God meets you in the racing heartbeat, not just the quiet prayer room. He is here now.',
    'You don\'t need to fix the anxiety before coming to God. Bring it — messy, spiralling, and all. He\'s not waiting for you to calm down. He\'s waiting to calm you.',
    'The knot in your chest is real. And so is the God who holds you. Both things can be true at the same time. Let\'s breathe with Him today.',
    'What if the worry you\'re carrying is actually an invitation to pray? Not a sign of failure — a door to His presence.',
    'Anxiety lies about the future using your voice. God speaks truth about the future using His. Let\'s listen to the right voice today.',
  ],
  grateful: [
    'A grateful heart is rare and beautiful. You\'re not pretending life is perfect — you\'re choosing to notice God in the middle of it. That\'s faith.',
    'Gratitude doesn\'t erase difficulty. It expands your vision to include the good that exists alongside the hard. Both are real. Today, let the good be louder.',
    'The fact that you can name gratitude today is itself a gift. Hold this feeling. Return to it when the harder days come.',
  ],
  weary: [
    'Weariness is not weakness. It\'s the honest state of a woman who has been carrying more than she was designed to carry alone. God sees your tired — and He is not disappointed.',
    'You don\'t have to earn rest. You don\'t have to finish everything first. Rest is not a reward — it\'s a rhythm. God built it into creation because He knew you\'d need it.',
    'Today, the bravest thing you can do is admit you\'re running on empty. God doesn\'t need you at full capacity. He needs you honest.',
    'Bone-tired faith is still faith. Maybe the most genuine kind. God honours the woman who shows up exhausted and says, "I\'m here anyway."',
  ],
  hopeful: [
    'Hope is not naivety. It\'s the stubborn belief that God is working even when you can\'t see the evidence yet. That takes courage.',
    'Something is shifting inside you. Hope doesn\'t arrive by accident — it\'s planted by a God who has plans you haven\'t seen yet. Water this seed.',
    'Hold this hope gently but firmly. It\'s not wishful thinking — it\'s rooted in the character of a faithful God.',
  ],
  lonely: [
    'Loneliness is one of the most painful human experiences — and one of the most common. You are not the only one feeling alone. And you are not actually alone, even when it feels that way.',
    'God doesn\'t just tolerate your loneliness. He enters it. He is Emmanuel — God with us. Even in the silence. Even in the empty room.',
    'Loneliness sometimes reveals what we really need — not just more people, but deeper connection. Today, let God meet that ache directly.',
    'The ache of loneliness is not evidence that you\'re unlovable. It\'s evidence that you were made for connection. And the deepest connection available to you is right here.',
  ],
  joyful: [
    'Joy is a gift — receive it without guilt. You don\'t need to justify feeling good. God delights in your delight.',
    'This joy is worth protecting. Savour it. Share it. Let it remind you that God is good — not eventually, but right now.',
    'Joy doesn\'t mean everything is perfect. It means your soul has caught a glimpse of something beautiful. Enjoy the view.',
  ],
  overwhelmed: [
    'You are carrying too much. Not because you\'re weak — because the load exceeds what one person was designed to bear. God never asked you to carry it all.',
    'Overwhelm is not a character flaw. It\'s a signal that something needs to be released, delegated, or surrendered. Today, let\'s start with surrender.',
    'When everything feels urgent, nothing feels manageable. Let\'s slow down together. God can handle the things you set down.',
    'The world demands everything from you. God asks for one thing: your trust. Start there. The rest will sort itself.',
  ],
  restless: [
    'Restlessness can be the soul\'s way of saying: something needs to change. Not always externally — sometimes internally. Let\'s explore that with God today.',
    'The agitation you feel may not be anxiety. It might be holy discontent — God stirring something new in you. Pay attention to it rather than numbing it.',
    'A restless heart often signals a hungry one. What are you hungry for that the world hasn\'t satisfied? God wants to meet you there.',
  ],
  confident: [
    'Confidence rooted in God is one of the most beautiful things a woman can carry. It\'s not arrogance — it\'s assurance. Walk in it today.',
    'You know whose you are. Today, let that knowing inform every decision, conversation, and challenge. You belong here.',
  ],
  hurt: [
    'Your pain is real. God doesn\'t minimise it or tell you to move on faster. He draws near to the brokenhearted. He is drawing near to you right now.',
    'Hurt doesn\'t disqualify you from faith. Some of the most honest prayers in Scripture came from wounded people. Your pain is welcome here.',
    'You don\'t have to be over it. Healing has its own timeline, and God is patient with every layer. Today, just let yourself be held.',
    'Whatever happened — you didn\'t deserve the pain. And the God who sees all things is closer to you now than He has ever been.',
  ],
  surrendered: [
    'Surrender is not giving up. It\'s giving over. And it takes more strength than fighting ever did. God receives what you release.',
    'Open hands are the bravest posture. What you\'ve surrendered is now in the safest hands in the universe.',
    'The peace that follows surrender is evidence that you were carrying something God never asked you to hold. Well done for letting go.',
  ],
};

// Default responses for when feelings don't match a specific category
export const DEFAULT_CHECKIN_RESPONSES = [
  'Wherever you find yourself today, God is already there. He doesn\'t wait for you to have the right words or the right feelings. He simply asks you to come as you are.',
  'Today is a new invitation to walk with God — not perfectly, but honestly. He meets you in the mess, the mundane, and the miraculous alike.',
  'You showed up. That matters more than you think. God honours the woman who comes to Him without pretence.',
  'Whatever this day holds, you don\'t face it alone. The God who numbers the stars also knows the number of hairs on your head. You are intimately known.',
  'Right here, right now — this is enough. You are enough. God\'s grace for today is enough. Breathe that in.',
];
