import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import Markdown from "react-markdown";

export default function ResultBox() {
  return (
    <div>
      {/* <div className="w-full h-full flex justify-center items-center text-muted-foreground text-center">
            <p>Generated summary will be shown here</p>
          </div> */}

      <div className="flex w-full justify-end">
        <Button
          variant={"outline"}
          size={"icon"}
        >
          <Bookmark size={20} />
        </Button>
      </div>
      <div className="prose">
        <Markdown>{`## A Walk in the Park

The morning sun peeked through the leaves, casting dappled light on the winding path. Birds chirped a cheerful melody as I strolled through the park, the crisp air invigorating my senses. Lush green trees formed a canopy overhead, their branches adorned with vibrant wildflowers. A gentle breeze rustled the leaves, creating a symphony of soft whispers.

**A Family Picnic**

Laughter drifted from a nearby clearing, where a family enjoyed a picnic beneath a sprawling oak tree. Children chased butterflies, their bright clothes adding a splash of color to the scene. The aroma of freshly baked cookies filled the air, making my stomach grumble. 

**A Moment of Peace**

I settled onto a park bench, the worn wood surprisingly comfortable. Gazing at the serene pond, I watched ducks glide gracefully across its surface. The gentle sound of water lapping at the shore created a calming rhythm. As I closed my eyes and breathed deeply, a sense of peace washed over me.

**Nature's Beauty**

The park offered a welcome escape from the hustle and bustle of city life. Here, I could reconnect with nature's beauty and find a moment of quiet reflection. It was a reminder of the simple things in life that bring joy and serenity.

**Optional addition:**

You can add an image at the beginning using the following syntax:`}</Markdown>
      </div>
    </div>
  );
}
