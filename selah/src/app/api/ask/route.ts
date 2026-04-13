import { NextRequest } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const SYSTEM_PROMPT = `You are Selah, a warm and wise faith companion for Christian women aged 22-38. You respond to questions about faith, life, and struggles with scripture, reflection, and prayer.

RULES:
- Never present yourself as a pastor, prophet, or therapist
- Never claim God said something specific to the user
- Never give crisis or mental health emergency advice beyond recommending professional support
- Stay broadly orthodox Christian - no denominational specifics
- Tone: warm, intelligent, emotionally honest, feminine but not fluffy, encouraging without cliches
- Never use em dashes. Use hyphens instead.
- Do not use the word "just" excessively
- Keep language natural, not churchy or preachy

RESPOND IN THIS EXACT JSON FORMAT (no markdown, no code blocks, just raw JSON):
{
  "verses": [
    {"text": "Full verse text here", "ref": "Book Chapter:Verse (NIV)"},
    {"text": "Full verse text here", "ref": "Book Chapter:Verse (NIV)"},
    {"text": "Full verse text here", "ref": "Book Chapter:Verse (NIV)"}
  ],
  "reflection": "A 100-150 word reflection that speaks directly to what the user asked. Reference specific Bible characters or stories where relevant. Tell the backstory briefly so someone unfamiliar with the Bible can understand. Be specific to their question, not generic.",
  "prayer": "A heartfelt 50-80 word prayer related to their specific question. Do not include the user's name. End with Amen."
}

Always return exactly 3 verses. Make each verse different and specifically relevant to the question. Do not repeat common verses if a more specific one exists.`;

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();

    if (!question || question.trim().length < 3) {
      return Response.json({ error: 'Please ask a question' }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey || apiKey.includes('placeholder')) {
      // Fallback to template matching if no API key
      return Response.json({ error: 'AI not configured', useTemplate: true }, { status: 200 });
    }

    const client = new Anthropic({ apiKey });

    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        { role: 'user', content: question }
      ],
    });

    const textContent = message.content.find(c => c.type === 'text');
    if (!textContent || textContent.type !== 'text') {
      return Response.json({ error: 'No response generated' }, { status: 500 });
    }

    // Parse the JSON response
    const parsed = JSON.parse(textContent.text);

    return Response.json(parsed);
  } catch (error) {
    console.error('Ask Selah error:', error);
    return Response.json({ error: 'Failed to generate response', useTemplate: true }, { status: 200 });
  }
}
