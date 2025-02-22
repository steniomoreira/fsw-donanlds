import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ConsumptionMethodOptionsProps {
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
}

function ConsumptionMethodOptions({
  imageAlt,
  imageUrl,
  buttonText,
}: ConsumptionMethodOptionsProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="relative h-[80px] w-[80px]">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-contain"
          />
        </div>
        <Button variant="secondary" className="rounded-full">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}

export default ConsumptionMethodOptions;
