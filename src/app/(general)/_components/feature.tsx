import { type FeatureCard } from "@/lib/types";
import { featureList } from "@/lib/site-config";

function FeatureCard({ Icon, title, text }: FeatureCard) {
  return (
    <div className="space-y-1">
      <div className="w-fit rounded-md bg-teal-500 p-2">
        <Icon
          size={20}
          className="text-accent-foreground"
        />
      </div>
      <p className="font-semibold">{title}</p>
      <p className="text-sm">{text}</p>
    </div>
  );
}

import React from "react";

export default function Feature() {
  return (
    <section className="my-24">
      <div className="grid grid-cols-1 space-y-6 md:max-w-none md:grid-cols-3 md:space-x-4 md:space-y-0">
        {featureList.map((feat) => (
          <FeatureCard
            Icon={feat.Icon}
            text={feat.text}
            title={feat.title}
            key={feat.title}
          />
        ))}
      </div>
    </section>
  );
}
