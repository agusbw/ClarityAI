import { Sparkles, FileHeart, GlobeLock } from "lucide-react";
import { FeatureCard, NavItem } from "./types";

export const navItems: ReadonlyArray<NavItem> = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/summarize",
    title: "Tools",
  },
  {
    href: "/how",
    title: "How?",
  },
];

export const featureList: ReadonlyArray<FeatureCard> = [
  {
    title: "Summarization",
    text: "Summarize your PDF content into concise and easy-to-read text.",
    Icon: Sparkles,
  },
  {
    title: "Bookmark",
    text: "Bookmark your summary results for future reference.",
    Icon: FileHeart,
  },
  {
    title: "Privacy",
    text: "This site is fully static; we don't store any data.",
    Icon: GlobeLock,
  },
];
