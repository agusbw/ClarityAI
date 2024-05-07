import { Badge } from "@/components/ui/badge";
import Summarizer from "./_components/summarizer";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-5 lg:px-0">
      <Badge className="animate-bounce">Currently in Beta ⌛</Badge>
      <Alert className="bg-teal-500/10 my-4 lg:max-w-lg">
        <AlertTitle className="text-teal-500">Why Beta?</AlertTitle>
        <AlertDescription className="text-teal-500">
          The app might have occasional bugs or limitations as we continue
          development. Currently only provides basic summarization.
        </AlertDescription>
      </Alert>
      <div className="lg:px-80 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold  lg:pt-4">
          Introducing Clarity<span className="text-teal-500">AI</span>
        </h1>
        <p className="text-center text-muted-foreground mt-4">
          Reading PDFs sometimes are just pain in the{" "}
          <span className="text-destructive">ass</span>.{" "}
          <span className="font-semibold text-primary">
            Clarity<span className="text-teal-500">AI</span>{" "}
          </span>{" "}
          revolutionize your document digestion process. With{" "}
          <span className="font-semibold text-primary">
            Clarity<span className="text-teal-500">AI</span>
          </span>
          , summarizing PDFs is as easy as a click of a button.
        </p>
      </div>
      <Summarizer />
    </div>
  );
}
