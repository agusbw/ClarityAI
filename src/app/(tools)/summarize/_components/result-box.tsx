"use client";

import { Button } from "@/components/ui/button";
import {
  type BookmarkLocalStorageType,
  type SummaryDataType,
} from "@/lib/types";
import { Bookmark } from "lucide-react";
import Markdown from "react-markdown";
import { toast } from "sonner";
import { useLocalStorage } from "usehooks-ts";

type ResultBoxProps = {
  data: SummaryDataType;
};

export default function ResultBox({ data }: ResultBoxProps) {
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
    <div>
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
        <div className="mt-20 text-center text-muted-foreground">
          <p>Generated summary will be shown here.</p>
        </div>
      )}
    </div>
  );
}
