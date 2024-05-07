import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Key, Upload } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function ConfigForm() {
  return (
    <div className="flex flex-col gap-y-3 p-5">
      <div>
        <h3 className="text-2xl font-bold">Configuration</h3>
        <p className="text-sm text-muted-foreground">
          Add more context to make the summary better
        </p>
      </div>
      <div>
        <Input
          type="password"
          Icon={<Key />}
          placeholder="Enter Gemini API Key"
        />
        <Link
          href="https://ai.google.dev/gemini-api/docs/api-key"
          rel="noopener noreferrer"
          className="text-xs font-medium hover:underline"
          target="_blank"
        >
          Get your API Key
        </Link>
      </div>
      <Input
        type="file"
        Icon={<Upload />}
        placeholder="Enter Gemini API Key"
      />
      <div className="space-y-2">
        <p>Choose summary format</p>
        <RadioGroup defaultValue="ai">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="ai"
              id="ai"
            />
            <Label
              htmlFor="ai"
              className="font-normal"
            >
              Let AI Decide
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="Paragraph"
              id="paragraph"
            />
            <Label
              htmlFor="paragraph"
              className="font-normal"
            >
              Paragraph
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="Bullet Point"
              id="bullet-point"
            />
            <Label
              htmlFor="bullet-point"
              className="font-normal"
            >
              Bullet Point
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <Input
          type="text"
          placeholder="Specify domain (e.g., Medicine, Law, Technology)"
        />
      </div>
      <div className="flex gap-x-2">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Tone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="formal">Formal</SelectItem>
            <SelectItem value="informal">Informal</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Summary language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Bahasa Indonesia">Indonesia 🇮🇩</SelectItem>
            <SelectItem value="English">English 🇬🇧</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        variant={"accent"}
        className="mt-4"
      >
        Generate 🚀
      </Button>
    </div>
  );
}
