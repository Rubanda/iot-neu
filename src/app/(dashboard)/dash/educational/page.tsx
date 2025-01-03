
"use client";
import EducationInfo from '@/components/education/education-info'
import { Shell } from '@/components/shell/shell'

import { Button } from "@/components/ui/button";
import { streamTextAction } from "./action";
import { useState } from "react";
import { readStreamableValue } from "ai/rsc";

export default function Page() {
    const [generation, setGeneration] = useState("");
    console.log(generation)
    return (
        <Shell variant="sidebar" className="flex-1 space-y-6 p-4 pt-6 md:p-8">
            <EducationInfo />
            {/* <Button
        onClick={async () => {
          const result = await streamTextAction();
          for await (const delta of readStreamableValue(result))
            setGeneration(delta ?? "");
        }}
      >
        Tell me a joke
      </Button>
      <pre>{JSON.stringify(generation, null, 2)}</pre> */}
        </Shell>
    )
}

