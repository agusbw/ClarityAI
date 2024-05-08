import { ScrollArea } from "@/components/ui/scroll-area";
import { Suspense } from "react";
import MarkdownRenderer from "./_components/markdown-renderer";

export default function BookmarkPage() {
  return (
    <div className="pt-10 md:h-[78%]">
      <ScrollArea className="h-full overflow-y-auto rounded-lg border p-5">
        <Suspense>
          <MarkdownRenderer />
        </Suspense>
      </ScrollArea>
    </div>
  );
}
