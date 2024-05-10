import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Hero from "./_components/hero";
import Feature from "./_components/feature";
import GIFExample from "./_components/gif-example";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-4 pt-8 lg:px-40 lg:pt-16 xl:px-80">
      <section className="mb-4 flex flex-col items-center gap-4">
        <Badge className="animate-bounce">Under development 🔨</Badge>
        <Alert className="bg-accent/10 lg:max-w-lg">
          <AlertTitle className="text-accent">Beta phase</AlertTitle>
          <AlertDescription className="text-accent">
            The app might have occasional bugs or limitations as we continue
            development. Currently only provides basic summarization.
          </AlertDescription>
        </Alert>
      </section>
      <Hero />
      <Feature />
      <GIFExample />
    </div>
  );
}
