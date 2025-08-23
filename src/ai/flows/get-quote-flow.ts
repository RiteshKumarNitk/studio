'use server';
/**
 * @fileOverview A flow for generating a car wash quote.
 *
 * - getQuote - A function that handles the quote generation process.
 * - GetQuoteInput - The input type for the getQuote function.
 * - GetQuoteOutput - The return type for the getQuote function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GetQuoteInputSchema = z.object({
  carType: z.string().describe('The type of the car (e.g., Hatchback, Sedan, SUV, Luxury).'),
  serviceType: z.string().describe('The type of service requested (e.g., Quick Sparkle, Super Shine, Ultimate Glow).'),
});
export type GetQuoteInput = z.infer<typeof GetQuoteInputSchema>;

const GetQuoteOutputSchema = z.object({
  quote: z.string().describe('The calculated quote for the service in Indian Rupees (e.g., ₹599).'),
});
export type GetQuoteOutput = z.infer<typeof GetQuoteOutputSchema>;

const pricing = {
    'hatchback': {
        'quick-sparkle': 499,
        'super-shine': 999,
        'ultimate-glow': 1499,
    },
    'sedan': {
        'quick-sparkle': 599,
        'super-shine': 1199,
        'ultimate-glow': 1799,
    },
    'suv': {
        'quick-sparkle': 699,
        'super-shine': 1399,
        'ultimate-glow': 1999,
    },
    'luxury': {
        'quick-sparkle': 999,
        'super-shine': 1999,
        'ultimate-glow': 2999,
    }
} as const;


export async function getQuote(input: GetQuoteInput): Promise<GetQuoteOutput> {
  return getQuoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getQuotePrompt',
  input: { schema: GetQuoteInputSchema },
  output: { schema: GetQuoteOutputSchema },
  prompt: `You are a customer service assistant for Bubble Drive, a car wash company in India.
Your task is to provide a price quote based on the car type and service type requested by the user.

Here is the pricing table. All prices are in INR.
- Hatchback: Quick Sparkle (₹499), Super Shine (₹999), Ultimate Glow (₹1499)
- Sedan: Quick Sparkle (₹599), Super Shine (₹1199), Ultimate Glow (₹1799)
- SUV: Quick Sparkle (₹699), Super Shine (₹1399), Ultimate Glow (₹1999)
- Luxury: Quick Sparkle (₹999), Super Shine (₹1999), Ultimate Glow (₹2999)

User requested:
Car Type: {{{carType}}}
Service Type: {{{serviceType}}}

Based on this, determine the price and return it in the format "₹PRICE". For example: "₹999".
`,
});

const getQuoteFlow = ai.defineFlow(
  {
    name: 'getQuoteFlow',
    inputSchema: GetQuoteInputSchema,
    outputSchema: GetQuoteOutputSchema,
  },
  async (input) => {
    const { carType, serviceType } = input;
    
    // Basic validation
    if (! (carType in pricing) || ! (serviceType in pricing[carType as keyof typeof pricing])) {
        // Fallback to LLM if direct lookup fails, though the UI should prevent this.
        const { output } = await prompt(input);
        return output!;
    }
    
    const carPricing = pricing[carType as keyof typeof pricing];
    const price = carPricing[serviceType as keyof typeof carPricing];

    return {
        quote: `₹${price}`
    };
  }
);
