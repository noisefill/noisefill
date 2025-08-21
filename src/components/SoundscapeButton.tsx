"use client";

import { SelectAudio } from "@/db/schema";
import { Button } from "./ui/button";

export function SoundscapeButton({ audio }: { audio: SelectAudio }) {
  return (
    <Button variant="outline" onClick={() => {}}>
      {audio.emoji} {audio.name}
    </Button>
  );
}
