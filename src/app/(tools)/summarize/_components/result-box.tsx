"use client";

import { Button } from "@/components/ui/button";
import {
  type BookmarkLocalStorageType,
  type SummaryDataType,
} from "@/lib/types";
import { Bookmark } from "lucide-react";
import Markdown from "react-markdown";
import { toast } from "sonner";
import { useLocalStorage, useMediaQuery } from "usehooks-ts";
import * as React from "react";

type ResultBoxProps = {
  data: SummaryDataType;
};

export default function ResultBox({ data }: ResultBoxProps) {
  const resultBoxRef = React.useRef<HTMLDivElement>(null);
  const mobile = useMediaQuery("(max-width: 768px)");

  React.useEffect(() => {
    if (data.fileName && data.summary && mobile) {
      resultBoxRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [data, mobile]);

  const [value, setValue] = useLocalStorage<BookmarkLocalStorageType>(
    "bookmark",
    [],
  );

  const isBookmarked = (fileName: string): boolean => {
    if (!fileName) return false;

    const isExist = value.find((v) => {
      return v.fileName === fileName;
    });
    return isExist ? true : false;
  };

  const handleBookmarkToggle = () => {
    if (!data.fileName || !data.summary) {
      return;
    }

    if (isBookmarked(data.fileName)) {
      const newVal = value.filter((v) => {
        return v.fileName !== data.fileName;
      });
      setValue(newVal);
      toast.success("Summary is removed from bookmark");
    } else {
      setValue((prev) => [
        ...prev,
        {
          fileName: data.fileName,
          summary: data.summary,
          createdAt: new Date(),
        },
      ]);
      toast.success("Summary is added to bookmark");
    }
  };

  return (
    <div ref={resultBoxRef}>
      {data.summary ? (
        <>
          <div className="flex h-full w-full justify-end">
            <Button
              variant={isBookmarked(data.fileName) ? "accent" : "outline"}
              size={"icon"}
              onClick={handleBookmarkToggle}
            >
              <Bookmark size={20} />
            </Button>
          </div>
          <div className="prose">
            <Markdown>{data.summary}</Markdown>
          </div>
        </>
      ) : (
        <div className="text-center text-muted-foreground md:mt-20">
          <p>Generated summary will be shown here.</p>
        </div>
      )}
    </div>
  );
}
