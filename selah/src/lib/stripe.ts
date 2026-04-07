import Stripe from 'stripe';

let stripeInstance: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripeInstance) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error('STRIPE_SECRET_KEY is not set. Add it to your .env.local file.');
    }
    stripeInstance = new Stripe(key, { typescript: true });
  }
  return stripeInstance;
}

export const PLANS = {
  monthly: {
    priceId: process.env.STRIPE_MONTHLY_PRICE_ID || '',
    name: 'Monthly',
    price: 9.99,
    interval: 'month' as const,
  },
  yearly: {
    priceId: process.env.STRIPE_YEARLY_PRICE_ID || '',
    name: 'Yearly',
    price: 79.99,
    interval: 'year' as const,
    savings: '33%',
  },
};
