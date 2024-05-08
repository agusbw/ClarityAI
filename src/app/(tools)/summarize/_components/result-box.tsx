import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import Markdown from "react-markdown";
import { useLocalStorage } from "usehooks-ts";

export type ResultBoxDataType = {
  summary: string | null;
  fileName: string | null;
};

type ResultBoxProps = {
  data: ResultBoxDataType;
};

export default function ResultBox({ data }: ResultBoxProps) {
  const [value, setValue, removeValue] = useLocalStorage("bookmark", {});

  console.log(data);

  return (
    <div>
      {data.summary ? (
        <>
          <div className="flex h-full w-full justify-end">
            <Button
              variant={"outline"}
              size={"icon"}
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
