import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-5 lg:px-0">
      <Badge className="animate-bounce">Under development 🔨</Badge>
      <Alert className="bg-accent/10 my-4 lg:max-w-lg">
        <AlertTitle className="text-accent">Beta phase</AlertTitle>
        <AlertDescription className="text-accent">
          The app might have occasional bugs or limitations as we continue
          development. Currently only provides basic summarization.
        </AlertDescription>
      </Alert>
      <div className="lg:px-80 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold  lg:pt-4">
          Introducing Clarity<span className="text-accent">AI</span>
        </h1>
        <p className="text-center text-muted-foreground mt-4">
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
      <div className="flex gap-x-2 mt-4">
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
    </div>
  );
}
