export type ConfigFormType = {
  apiKey: string | null;
  textContent: string | null;
  lang: "Bahasa Indonesia" | "English" | null;
  domain: string | null;
  tone: "Formal" | "Informal" | null;
  format: "ai" | "Bullet Point" | "Paragraph";
  fileName: string | null;
};

export type BookmarkLocalStorageType = (SummaryDataType & {
  createdAt: Date;
})[];

export type SummaryDataType = {
  summary: string;
  fileName: string;
};

export type BreadcrumbItem = {
  path: string;
  label: string;
};
