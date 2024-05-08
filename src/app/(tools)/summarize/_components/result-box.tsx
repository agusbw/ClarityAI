import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import Markdown from "react-markdown";

type ResultBoxProps = {
  summary: string | null;
};

export default function ResultBox({ summary }: ResultBoxProps) {
  return (
    <div>
      <div className="flex h-full w-full justify-end">
        <Button
          variant={"outline"}
          size={"icon"}
        >
          <Bookmark size={20} />
        </Button>
      </div>
      {summary ? (
        <div className="prose">
          <Markdown>{summary}</Markdown>
        </div>
      ) : (
        <div className="mt-10 text-center text-muted-foreground">
          <p>Generated summary will be shown here.</p>
        </div>
      )}
    </div>
  );
}
