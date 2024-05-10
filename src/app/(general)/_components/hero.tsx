import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section>
      <div className="text-center">
        <h1 className="text-4xl font-bold lg:pt-4 lg:text-5xl">
          Introducing Clarity<span className="text-accent">AI</span>
        </h1>
        <p className="mt-4 text-center text-muted-foreground">
          Reading PDFs sometimes are just pain in the{" "}
          <span className="text-destructive">ass</span>.{" "}
          <span className="font-semibold text-primary">
            Clarity<span className="text-accent">AI</span>{" "}
          </span>{" "}
          revolutionize your document digestion process. With{" "}
          <span className="font-semibold text-primary">
            Clarity<span className="text-accent">AI</span>
          </span>
          , summarizing PDFs is as easy as a click of a button.
        </p>
      </div>
      <div className="mt-4 flex w-full justify-center gap-x-2">
        <Button
          variant={"outline"}
          asChild
        >
          <Link href="/how">How it Works</Link>
        </Button>
        <Button
          variant={"accent"}
          asChild
        >
          <Link href="/summarize">
            Getting Started
            <ArrowRight
              size={16}
              className="ml-2"
            />
          </Link>
        </Button>
      </div>
    </section>
  );
}
