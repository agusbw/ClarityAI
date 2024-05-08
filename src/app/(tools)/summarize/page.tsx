"use client";

import Header from "./_components/header";
import Footer from "./_components/footer";
import ResultBox from "./_components/result-box";
import ConfigForm from "./_components/config-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import * as React from "react";
import { type ResultBoxDataType } from "./_components/result-box";

function SummarizePage() {
  const [data, setData] = React.useState<ResultBoxDataType>({
    fileName: null,
    summary: null,
  });

  return (
    <div className="p-4 md:h-screen md:max-h-screen md:overflow-hidden md:p-5 lg:px-16 lg:pt-20 xl:px-44">
      <Header />
      <div className="flex flex-col gap-8 pt-10 md:h-[78%] md:flex-row">
        <ScrollArea className="h-full max-h-[100%] overflow-y-auto rounded-lg border shadow-md md:w-1/3">
          <ConfigForm handleSummaryChange={setData} />
        </ScrollArea>
        <ScrollArea className="h-full max-h-[100%] overflow-y-auto rounded-lg border p-5 shadow-md md:w-2/3">
          <ResultBox data={data} />
        </ScrollArea>
      </div>
      <Footer />
    </div>
  );
}

export default SummarizePage;
