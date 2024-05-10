import Image from "next/image";
import systemDesignImage from "@/../public/system-design.png";

export default function HowPage() {
  return (
    <div className="mt-12 flex w-full flex-col items-center justify-center px-5 lg:px-0">
      <div className="flex flex-col items-center justify-between gap-5 ">
        <h2 className="text-center text-3xl font-bold">
          Clarity<span className="text-accent">AI</span> - Behind the scene
        </h2>
        <div className="border">
          <Image
            src={systemDesignImage}
            alt="SummariseAI's system design"
            width={500}
            height={151}
            placeholder="blur"
          />
        </div>
        <section className="prose max-w-[100vw] space-y-4 lg:px-80">
          <p>
            Above diagram illustrates the inner workings of{" "}
            <span className="font-semibold text-primary">
              Clarity<span className="text-accent">AI</span>
            </span>
          </p>
          <ol>
            <li className="list-item">
              <span className="text-gradient font-bold">
                Direct Client-to-API:
              </span>{" "}
              Requests from your browser are directly processed through the
              Gemini API, bypassing any intermediary servers.{" "}
              <span className="font-medium text-destructive">
                We do not retain any information, including your Gemini API Key.
              </span>
              <i>(See network tab)</i>
            </li>
            <li>
              <span className="text-gradient font-bold">
                Utilization of Gemini Pro:
              </span>{" "}
              <span className="font-semibold text-primary">
                Clarity<span className="text-accent">AI</span>
              </span>{" "}
              This app uses <span className="font-semibold">Gemini Pro</span>{" "}
              model, accessed through the API interface provided by Google
              Gemini. This enables efficient and accurate summarization.
            </li>
          </ol>
          <p>
            Appreciate your interest in understanding tool&apos;s functionality!{" "}
            <i>@agus_bw</i>
          </p>
        </section>
      </div>
    </div>
  );
}
