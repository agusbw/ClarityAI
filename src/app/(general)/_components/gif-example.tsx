import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GIFExample() {
  return (
    <section className="mb-8 space-y-5">
      <div>
        <h3 className="text-center text-3xl font-bold">
          Clarity<span className="text-teal-500">AI</span> in Action
        </h3>
        <p className="text-center text-muted-foreground">
          Summarize your PDF with ClarityAI.
        </p>
      </div>
      <Image
        src={"/example.gif"}
        width={510}
        height={247.2}
        className="border"
        alt="ClarityAI example gif"
      />
      <div className="flex w-full flex-col items-center justify-center text-center">
        <Button
          asChild
          variant={"accent"}
          className="w-fit"
        >
          <Link href={"/summarize"}>I want to try</Link>
        </Button>
      </div>
    </section>
  );
}
