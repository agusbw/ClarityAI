import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Key, Upload, Loader } from "lucide-react";
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
import * as React from "react";
import { type ConfigFormType } from "@/lib/types";
import extractTextFromPDF from "pdf-parser-client-side";
import { toast } from "sonner";
import { generatePrompt, generateSummary } from "@/lib/utils";

type ConfigFormProps = {
  handleSummaryChange: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function ConfigForm({ handleSummaryChange }: ConfigFormProps) {
  const [form, setForm] = React.useState<ConfigFormType>({
    apiKey: null,
    domain: null,
    format: "ai",
    lang: null,
    textContent: null,
    tone: null,
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleGenerateSummary = async () => {
    if (
      !form.apiKey ||
      !form.domain ||
      !form.format ||
      !form.lang ||
      !form.lang ||
      !form.textContent ||
      !form.tone
    ) {
      toast.error("Provide all the configuration before generate summary!");
      return;
    }
    const prompt = generatePrompt(form);
    try {
      setIsLoading(true);
      const result = await generateSummary(form.apiKey, prompt);
      handleSummaryChange(result);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

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
          value={form.apiKey ? form.apiKey : ""}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              apiKey: e.target.value,
            }))
          }
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
        multiple={false}
        accept=".pdf"
        Icon={<Upload />}
        onChange={(e) => {
          if (e.target.files) {
            const file = e.target.files[0];
            if (file) {
              extractTextFromPDF(file).then((data: string) => {
                setForm((prev) => ({
                  ...prev,
                  textContent: data,
                }));
              });
            }
          }
        }}
      />
      <div className="space-y-2">
        <p>Choose summary format</p>
        <RadioGroup
          onValueChange={(v: "ai" | "Paragraph" | "Bullet Point") =>
            setForm((prev) => ({
              ...prev,
              format: v,
            }))
          }
          value={form.format}
        >
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
          value={form.domain ? form.domain : ""}
          onChange={(e) => {
            setForm((prev) => ({
              ...prev,
              domain: e.target.value,
            }));
          }}
        />
      </div>
      <div className="flex gap-x-2">
        <Select
          value={form.tone ? form.tone : ""}
          onValueChange={(v: "Formal" | "Informal") => {
            setForm((prev) => ({
              ...prev,
              tone: v,
            }));
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Tone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="formal">Formal</SelectItem>
            <SelectItem value="informal">Informal</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={form.lang ? form.lang : ""}
          onValueChange={(v: "Bahasa Indonesia" | "English") => {
            setForm((prev) => ({
              ...prev,
              lang: v,
            }));
          }}
        >
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
        disabled={isLoading}
        onClick={handleGenerateSummary}
      >
        {isLoading ? <Loader className="animate-spin" /> : "Generate 🚀"}
      </Button>
    </div>
  );
}
