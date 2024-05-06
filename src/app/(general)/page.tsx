import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Key } from "lucide-react";

export default function Home() {
  return (
    <main>
      <div className="w-full flex flex-col justify-center items-center lg:pt-16 lg:px-60">
        <Badge className="animate-bounce">Currently in Beta ⌛</Badge>
        <h1 className="text-5xl font-bold text-gradient lg:pt-4">
          Introducing SummareaseAI: <br />{" "}
          <span className="text-3xl">Your Ultimate PDF Summarizer!</span>
        </h1>
        <p className="text-center text-muted-foreground mt-4">
          Say goodbye to hours of tedious reading and let{" "}
          <span className="text-gradient font-semibold">SummareaseAI</span>{" "}
          revolutionize your document digestion process. <br /> With{" "}
          <span className="text-gradient font-semibold"> SummareaseAI</span>,
          summarizing PDFs is as easy as a click of a button.
        </p>
        <div className="flex flex-col pt-4 gap-y-3">
          <Input
            type="password"
            Icon={<Key />}
            placeholder="Enter OpenAI API Key"
          />
          <Input
            type="file"
            accept=".pdf"
            placeholder="Select your PDF file"
          />
          <div className="flex gap-x-3 items-center">
            <p className="font-medium text-sm">Languages: </p>
            <Select>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Choose target languages" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="indonesia">Bahasa Indonesia 🇮🇩</SelectItem>
                <SelectItem value="english">English 🇬🇧</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <p className="font-medium text-sm">Result Format:</p>
            <RadioGroup
              defaultValue="paragraph"
              className="flex gap-x-3"
            >
              <div className="flex items-center space-x-1">
                <RadioGroupItem
                  value="paragraph"
                  id="paragraph"
                />
                <Label
                  htmlFor="paragraph"
                  className="font-normal"
                >
                  Paragraph
                </Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem
                  value="bulletpoint"
                  id="bulletpoint"
                />
                <Label
                  htmlFor="bulletpoint"
                  className="font-normal"
                >
                  Bulletpoint
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex"></div>
          <Button className="w-fit mx-auto rounded-full">Summarize 🚀</Button>
        </div>
      </div>
    </main>
  );
}
