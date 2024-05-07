import Image from "next/image";
import systemDesignImage from "@/../public/system-design.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HowPage() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <div className="flex justify-between items-center flex-col gap-5">
        <div className="border p-5">
          <Image
            src={systemDesignImage}
            alt="SummariseAI's system design"
            width={500}
            height={151}
            placeholder="blur"
          />
        </div>
        <div className="max-w-[100vw] space-y-4 text-justify">
          <p>
            Above diagram illustrates the inner workings of{" "}
            <span className="font-bold text-gradient">SummareaseAI</span> , our
            AI-powered summarization tool. Here&apos;s a breakdown of how it
            operates:
          </p>
          <ol className="list-disc ms-10">
            <li className="list-item">
              <span className="font-bold text-gradient">
                Direct Client-to-API Communication:
              </span>{" "}
              Requests from your browser are directly processed through the
              OpenAI API, bypassing any intermediary servers. This streamlined
              approach ensures data security as{" "}
              <span className="text-destructive font-medium">
                we do not retain any information, including your OpenAI API Key.
              </span>
            </li>
            <li>
              <span className="font-bold text-gradient">
                Utilization of GPT-3.5 Turbo:
              </span>{" "}
              SummareaseAI harnesses the advanced capabilities of{" "}
              <span className="font-semibold">GPT-3.5 Turbo</span>, accessed
              through the API interface provided by OpenAI. This cutting-edge
              technology enables efficient and accurate summarization.
            </li>
            <li>
              <span className="font-bold text-gradient">Billing Process:</span>{" "}
              Each time you generate a summary, billing occurs directly through
              your account. The billing amount is determined by factors such as
              the length of the text in your PDF and the extent of the
              AI-generated summary.
            </li>
          </ol>
          <p>
            We appreciate your interest in understanding our tool&apos;s
            functionality! <i>Warm regards, @agus_bw</i>
          </p>
        </div>
      </div>
    </main>
  );
}