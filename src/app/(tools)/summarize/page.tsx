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
    <div className="flex flex-col gap-8 overflow-y-auto pt-6 md:flex-row">
      <ScrollArea className="rounded-lg border shadow-md md:max-w-sm md:flex-1">
        <ConfigForm handleSummaryChange={setData} />
      </ScrollArea>
      <ScrollArea className="rounded-lg border p-5 shadow-md md:flex-1">
        <ResultBox data={data} />
      </ScrollArea>
    </div>
  );
}

export default SummarizePage;
