"use client";

import { BookmarkLocalStorageType, SummaryDataType } from "@/lib/types";
import { useReadLocalStorage } from "usehooks-ts";
import Markdown from "react-markdown";
import { redirect, useSearchParams } from "next/navigation";
import * as React from "react";

export default function MarkdownRenderer() {
  // consuming this data directly will cause error, local storage itu browser only API, jadi pas next.js prerender di server bakal kena hydration error
  const bookmark: BookmarkLocalStorageType | null =
    useReadLocalStorage("bookmark");
  const searchParams = useSearchParams();
  const fileName = searchParams.get("fileName");

  const [data, setData] = React.useState<
    | (SummaryDataType & {
        createdAt: Date;
      })
    | null
  >(null);

  React.useEffect(() => {
    const s = bookmark?.find((v) => {
      return v.fileName === fileName + ".pdf";
    });

    if (!s) {
      redirect("/summarize/bookmark");
    }

    setData(() => {
      return s ? s : null;
    });
  }, [bookmark, fileName]);

  return <Markdown className={"prose"}>{data?.summary}</Markdown>;
}
