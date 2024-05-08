export type ConfigFormType = {
  apiKey: string | null;
  textContent: string | null;
  lang: "Bahasa Indonesia" | "English" | null;
  domain: string | null;
  tone: "Formal" | "Informal" | null;
  format: "ai" | "Bullet Point" | "Paragraph";
  fileName: string | null;
};
