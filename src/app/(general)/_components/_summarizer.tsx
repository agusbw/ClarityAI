"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Key, LoaderCircle } from "lucide-react";
import extractTextFromPDF from "pdf-parser-client-side";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Markdown from "react-markdown";
import { type FormType } from "@/lib/types";
import * as React from "react";
import { generateSummary } from "@/lib/utils";

export default function Summarizer() {
  const [form, setForm] = React.useState<FormType>({
    apiKey: "",
    textContent: "",
    lang: undefined,
  });
  const [error, setError] = React.useState<string | null>(null);
  const [summary, setSummary] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSubmit = async () => {
    if (!form.apiKey || !form.textContent || !form.lang) {
      setError("Please provide all the required data!");
      return;
    }

    try {
      setError(null);
      setIsLoading(true);
      const summary = await generateSummary(form);
      setSummary(summary);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        console.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex max-w-sm flex-col gap-y-3 pt-4">
        <div>
          <Input
            type="password"
            Icon={<Key />}
            onChange={(e) =>
              setForm((prev) => {
                return {
                  ...prev,
                  apiKey: e.target.value,
                };
              })
            }
            placeholder="Enter Gemini API Key"
          />
          <Button
            asChild
            variant={"link"}
            className="p-0 text-xs"
          >
            <Link
              href="https://ai.google.dev/gemini-api/docs/api-key"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get your API Key
            </Link>
          </Button>
        </div>
        <Input
          type="file"
          accept=".pdf"
          placeholder="Select your PDF file"
          onChange={(e) => {
            if (e.target.files) {
              const file = e.target.files[0];
              if (file) {
                extractTextFromPDF(file).then((data: string) => {
                  setForm((prev) => {
                    return {
                      ...prev,
                      textContent: data,
                    };
                  });
                });
              }
            }
          }}
        />
        <div className="flex items-center gap-x-3">
          <p className="text-sm font-medium">Language: </p>
          <Select
            onValueChange={(v: "id" | "en") => {
              setForm((prev) => {
                return {
                  ...prev,
                  lang: v,
                };
              });
            }}
          >
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Choose target languages" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="id">Bahasa Indonesia 🇮🇩</SelectItem>
              <SelectItem value="en">English 🇬🇧</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          className="mx-auto w-fit rounded-full bg-accent/10 font-semibold text-accent hover:bg-accent/20"
          onClick={handleSubmit}
          disabled={isLoading}
          size={"lg"}
        >
          Summarize 🚀
        </Button>
      </div>

      {!isLoading && error ? (
        <Alert className="my-10 w-[550px] max-w-[100vw] bg-destructive/10">
          <AlertTitle className="text-destructive">
            Failed to produce summary
          </AlertTitle>
          <AlertDescription className="text-destructive">
            {error}
          </AlertDescription>
        </Alert>
      ) : null}

      {isLoading ? (
        <LoaderCircle
          size={40}
          className="my-12 animate-spin"
        />
      ) : summary ? (
        <div className="prose my-12 w-full justify-center rounded-md border bg-background p-5 shadow-lg">
          <Markdown>{summary}</Markdown>
        </div>
      ) : null}
    </div>
  );
}
