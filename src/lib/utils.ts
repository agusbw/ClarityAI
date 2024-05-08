import { type ClassValue, clsx } from "clsx";
import getModel from "./gemini";
import { twMerge } from "tailwind-merge";
import { type ConfigFormType, type BreadcrumbItem } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const trimPDFExtension = (fileName: string) => {
  if (fileName.toLowerCase().endsWith(".pdf")) {
    return fileName.slice(0, -4);
  } else {
    return fileName;
  }
};

export const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      path: "/",
      label: "Home",
    },
  ];
  let currentPath = "";

  pathname.split("/").forEach((pathSegment) => {
    if (pathSegment) {
      currentPath += `/${pathSegment}`;
      breadcrumbs.push({
        path: currentPath,
        label: pathSegment[0].toUpperCase() + pathSegment.slice(1),
      });
    }
  });

  return breadcrumbs;
};

export const generatePrompt = (data: ConfigFormType) => {
  let prompt;

  prompt = `You will be given text and your job is to summarize it for better readability and understanding. 
  Predict the type or the title of text, for example a curriculum vitae, scientific journal, etc. Write your summary according to the predicted type, following these rules:
  - Use beautiful markdown syntax.
  - Do not write with any other format except in the markdown syntax.
  - The domain of this text is ${data.domain}.
  - Summarize the text in ${data.lang} even if it's in a different language.
  ${data.format ? ` - Write the summary in ${data.format} format` : ""} 
  - Maintain a ${data.tone} tone

  This is the text:

  ${data.textContent}
  `;

  return prompt;
};

export const generateSummary = async (apiKey: string, prompt: string) => {
  const parts = [
    {
      text: prompt,
    },
  ];

  try {
    const model = getModel(apiKey);
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig: {
        maxOutputTokens: 3000,
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
