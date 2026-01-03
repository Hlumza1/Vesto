
import { GoogleGenAI, Type } from "@google/genai";
import { ProjectEstimate } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getProjectEstimate = async (description: string): Promise<ProjectEstimate> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Estimate this construction project: ${description}`,
    config: {
      systemInstruction: "You are an expert construction project estimator. Provide a professional cost estimate and timeline based on the user's description. Use current market rates. Ensure the JSON is well-structured and accurate.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          projectName: { type: Type.STRING },
          estimatedCostLow: { type: Type.NUMBER },
          estimatedCostHigh: { type: Type.NUMBER },
          timelineMonths: { type: Type.NUMBER },
          breakdown: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                category: { type: Type.STRING },
                percentage: { type: Type.NUMBER },
                amount: { type: Type.NUMBER }
              },
              required: ["category", "percentage", "amount"]
            }
          },
          recommendations: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["projectName", "estimatedCostLow", "estimatedCostHigh", "timelineMonths", "breakdown", "recommendations"]
      }
    }
  });

  return JSON.parse(response.text);
};
