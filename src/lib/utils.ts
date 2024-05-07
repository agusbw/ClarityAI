import { type ClassValue, clsx } from "clsx";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { twMerge } from "tailwind-merge";
import { type FormType } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateSummary = async (data: FormType) => {
  const genAI = new GoogleGenerativeAI(data.apiKey);

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `You will be given text and your job is to summarize the text so that the text is easier to read and easier to understand. Please predict the type of text, for example a curriculum vitae, scientific journal, etc. Based on your prediction you can format your summary according to the type of text, for example if it is a scientific journal you can summarize the important parts of the scientific journal into several sections. You can also write as long as you can to cover all the important parts of the text. Use markdown syntax to present the summary created, take advantage of markdown syntax to make the summary easier to read. Do not write any additional text except the summary results in markdown syntax. You have to translate and write the summary in ${
    data.lang === "id" ? "Bahasa Indonesia" : "English"
  } language. This is the text:
      
  ${data.textContent}
  `;

  const parts = [
    {
      text: prompt,
    },
  ];

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig: {
        maxOutputTokens: 2133,
        temperature: 0.5,
      },
    });
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (err) {
    console.error(err);
    throw new Error(
      "Failed to produce summary, please check your API KEY and usage limit.",
    );
  }
};
