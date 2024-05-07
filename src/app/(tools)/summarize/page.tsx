"use client";

import Header from "./_components/header";
import Footer from "./_components/footer";
import ResultBox from "./_components/result-box";
import ConfigForm from "./_components/config-form";
import { ScrollArea } from "@/components/ui/scroll-area";

function SummarizePage() {
  return (
    <div className="md:p-5 lg:px-16 xl:px-44 lg:pt-20 md:h-screen md:max-h-screen md:overflow-hidden p-4">
      <Header />
      <div className="pt-10 md:h-[78%] flex gap-8 flex-col md:flex-row">
        <ScrollArea className="h-full max-h-[100%] border shadow-md rounded-lg lg:w-1/3 overflow-y-auto">
          <ConfigForm />
        </ScrollArea>
        <ScrollArea className="h-full max-h-[100%] border shadow-md rounded-lg lg:w-2/3 p-5 overflow-y-auto">
          <ResultBox />
        </ScrollArea>
      </div>
      <Footer />
    </div>
  );
}

export default SummarizePage;
