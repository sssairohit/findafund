import { GoogleGenAI, Type } from "@google/genai";
import { Grant } from '../types';

// Define the structure of the AI's response
export interface AIRecommendation {
  id: string;
  reason: string;
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      id: {
        type: Type.STRING,
        description: 'The unique ID of the recommended grant.',
      },
      reason: {
        type: Type.STRING,
        description: 'A brief, user-friendly explanation of why this grant is a good match for the user\'s query.',
      },
    },
    required: ['id', 'reason'],
  },
};

/**
 * Uses the Gemini API to find grants matching a user's query.
 * @param query The user's natural language query.
 * @param grants The full list of available grants.
 * @returns A promise that resolves to an array of AI recommendations.
 */
export async function findMatchingGrants(query: string, grants: Grant[]): Promise<AIRecommendation[]> {
  const model = "gemini-2.5-flash";

  // We only need essential grant info for the prompt to save tokens
  const simplifiedGrants = grants.map(({ id, title, description, eligibility, tags }) => ({
    id,
    title,
    description,
    eligibility,
    tags,
  }));

  const systemInstruction = `You are an expert AI assistant for "findafund". Your task is to help users find the most relevant government grants from a provided list based on their natural language query.

  Instructions:
  1. Analyze the user's query to understand their profile, needs, and project type (e.g., student, woman entrepreneur, tech startup, farmer, etc.).
  2. Carefully review the provided JSON list of grants.
  3. Identify the top 3-5 most suitable grants that match the user's query.
  4. For each recommended grant, provide a concise, one-sentence reason explaining why it's a good match.
  5. You MUST return your response as a JSON array that strictly follows the provided schema. Do not return markdown or any other text. If no grants match, return an empty array [].`;

  const prompt = `
    User Query: "${query}"

    Available Grants (JSON):
    ${JSON.stringify(simplifiedGrants)}
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema,
      },
    });

    const jsonText = response.text.trim();
    if (!jsonText) {
        console.warn("Gemini API returned an empty response.");
        return [];
    }
    
    const recommendations = JSON.parse(jsonText) as AIRecommendation[];
    return recommendations;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get recommendations from AI. Please try again.");
  }
}