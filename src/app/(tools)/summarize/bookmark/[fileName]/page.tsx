"use client";

import { BookmarkLocalStorageType, SummaryDataType } from "@/lib/types";
import { useReadLocalStorage } from "usehooks-ts";
import Markdown from "react-markdown";
import { ScrollArea } from "@/components/ui/scroll-area";
import * as React from "react";

export default function BookmarkPage({
  params,
}: {
  params: {
    fileName: string;
  };
}) {
  // consuming this data directly will cause error, local storage itu browser only API, jadi pas next.js prerender di server bakal kena hydration error
  const bookmark: BookmarkLocalStorageType | null =
    useReadLocalStorage("bookmark");

  const [data, setData] = React.useState<
    | (SummaryDataType & {
        createdAt: Date;
      })
    | null
  >(null);

  React.useEffect(() => {
    setData(() => {
      const s = bookmark?.find((v) => {
        return v.fileName === params.fileName + ".pdf";
      });

      return s ? s : null;
    });
  }, [bookmark, params.fileName]);

  return (
    <div className="pt-10 md:h-[78%]">
      <ScrollArea className="h-full overflow-y-auto rounded-lg border p-5">
        <Markdown className={"prose"}>{data?.summary}</Markdown>
      </ScrollArea>
    </div>
  );
}
