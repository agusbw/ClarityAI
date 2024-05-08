import { ScrollArea } from "@/components/ui/scroll-area";
import { Suspense } from "react";
import DeleteBookmark from "./_components/delete-bookmark";
import MarkdownRenderer from "./_components/markdown-renderer";

export default function BookmarkPage() {
  return (
    <div className="overflow-y-auto pt-6">
      <ScrollArea
        type="always"
        className="h-full overflow-y-auto rounded-lg border p-5"
      >
        <div className="flex w-full justify-end">
          <Suspense>
            <DeleteBookmark />
          </Suspense>
        </div>
        <Suspense>
          <MarkdownRenderer />
        </Suspense>
      </ScrollArea>
    </div>
  );
}
