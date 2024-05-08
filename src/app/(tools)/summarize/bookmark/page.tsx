"use client";

import { BookmarkLocalStorageType } from "@/lib/types";
import { useReadLocalStorage } from "usehooks-ts";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import * as React from "react";
import { trimPDFExtension } from "@/lib/utils";

export default function BookmarkPage() {
  // consuming this data directly will cause error, local storage itu browser only API, jadi pas next.js prerender di server bakal kena hydration error
  const data: BookmarkLocalStorageType | null = useReadLocalStorage("bookmark");

  const [summaries, setSummaries] =
    React.useState<BookmarkLocalStorageType | null>(null);

  React.useEffect(() => {
    setSummaries(data);
  }, [data]);

  return (
    <div className="max-h-full overflow-hidden pt-6">
      <h2 className="text-3xl font-bold">Your bookmarked summary</h2>
      <ScrollArea
        type="always"
        className="mt-3 flex h-full flex-col gap-y-2 overflow-y-auto pe-4"
      >
        {summaries
          ? summaries.map((sum) => (
              <>
                <Link
                  key={sum.fileName}
                  href={{
                    pathname: "/summarize/bookmark/summary",
                    query: { fileName: trimPDFExtension(sum.fileName) },
                  }}
                  className="flex justify-between border p-4"
                >
                  <p>{sum.fileName}</p>
                  <p>
                    {new Date(sum.createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </Link>
              </>
            ))
          : null}
      </ScrollArea>
    </div>
  );
}
