import { Badge } from "@/components/ui/badge";
import Summarizer from "./_components/summarizer";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <Badge className="animate-bounce">Currently in Beta ⌛</Badge>
      <h1 className="text-3xl lg:text-5xl font-bold text-gradient lg:pt-4">
        Introducing SummareaseAI
      </h1>
      <p className="text-center text-muted-foreground mt-4">
        Say goodbye to hours of tedious reading and let{" "}
        <span className="text-gradient font-semibold">SummareaseAI</span>{" "}
        revolutionize your document digestion process. With{" "}
        <span className="text-gradient font-semibold"> SummareaseAI</span>,
        summarizing PDFs is as easy as a click of a button.
      </p>
      <Summarizer />
    </div>
  );
}
