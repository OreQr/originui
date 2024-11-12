"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { VolumeX, Volume2 } from "lucide-react";

export default function Slider08() {
  const [value, setValue] = useState([25]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <Label>Volume</Label>
        <output className="text-sm text-muted-foreground tabular-nums">{value[0]}</output>
      </div>
      <div className="flex items-center gap-2">
        <VolumeX className="shrink-0 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        <Slider value={value} onValueChange={setValue} aria-label="Volume slider" />
        <Volume2 className="shrink-0 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      </div>
    </div>
  );
}