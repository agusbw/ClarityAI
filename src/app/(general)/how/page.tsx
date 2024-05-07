import Image from "next/image";
import systemDesignImage from "@/../public/system-design.png";

export default function HowPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-5 lg:px-0">
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
        <div className="max-w-[100vw] space-y-4 prose lg:px-80">
          <p>
            Above diagram illustrates the inner workings of{" "}
            <span className="font-semibold text-primary">
              Clarity<span className="text-teal-500">AI</span>
            </span>{" "}
            , our AI-powered summarization tool. Here&apos;s a breakdown of how
            it operates:
          </p>
          <ol>
            <li className="list-item">
              <span className="font-bold text-gradient">
                Direct Client-to-API Communication:
              </span>{" "}
              Requests from your browser are directly processed through the
              Gemini API, bypassing any intermediary servers. This streamlined
              approach ensures data security as{" "}
              <span className="text-destructive font-medium">
                we do not retain any information, including your Gemini API Key.
              </span>{" "}
              <i>(See network tab)</i>
            </li>
            <li>
              <span className="font-bold text-gradient">
                Utilization of Gemini Pro:
              </span>{" "}
              <span className="font-semibold text-primary">
                Clarity<span className="text-teal-500">AI</span>
              </span>{" "}
              harnesses the advanced capabilities of{" "}
              <span className="font-semibold">Gemini Pro</span> model, accessed
              through the API interface provided by Google Gemini. This
              cutting-edge technology enables efficient and accurate
              summarization.
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
    </div>
  );
}
