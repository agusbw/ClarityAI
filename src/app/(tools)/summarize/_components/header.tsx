"use client";

import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";

export default function Header() {
  return (
    <div className="flex w-full flex-col gap-y-4 md:flex-row md:items-center md:justify-between md:gap-y-0">
      <div>
        <h2 className="text-4xl font-bold">
          Clarity<span className="text-accent">AI</span>
        </h2>
        <p>
          Upload your <span className="font-semibold">PDF</span> and let{" "}
          <span className="font-semibold">AI</span> make your life{" "}
          <span className="font-semibold">easier</span>.
        </p>
      </div>
      <Button
        variant={"accent"}
        className="w-fit"
      >
        See Bookmarks{" "}
        <Bookmark
          size={20}
          className="ml-2"
        />
      </Button>
    </div>
  );
}
