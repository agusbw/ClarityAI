import { GoogleGenerativeAI } from "@google/generative-ai";

const getModel = (apiKey: string) => {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  return model;
};

export default getModel;
