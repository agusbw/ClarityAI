"use client";

import ResultBox from "./_components/result-box";
import ConfigForm from "./_components/config-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import * as React from "react";
import { type SummaryDataType } from "@/lib/types";

function SummarizePage() {
  const [data, setData] = React.useState<SummaryDataType>({
    fileName: "",
    summary: "",
  });

  return (
    <div className="flex flex-col gap-8 pt-6 md:h-[77%] md:flex-row">
      <ScrollArea className="h-full max-h-[100%] overflow-y-auto rounded-lg border shadow-md md:w-1/3">
        <ConfigForm handleSummaryChange={setData} />
      </ScrollArea>
      <ScrollArea className="h-full max-h-[100%] overflow-y-auto rounded-lg border p-5 shadow-md md:w-2/3">
        <ResultBox data={data} />
      </ScrollArea>
    </div>
  );
}

export default SummarizePage;
