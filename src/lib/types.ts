import React from "react";
import { LucideProps } from "lucide-react";

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

export type NavItem = {
  href: string;
  title: string;
};

export type FeatureCard = {
  title: string;
  text: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};
