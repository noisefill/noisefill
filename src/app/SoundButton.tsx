"use client";

import { SelectAudio } from "@/db/schema";
import { Button } from "@/components/ui/button";
import posthog from "posthog-js";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export function SoundButton(audio: SelectAudio) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === `#${audio.name?.toLowerCase()}`) {
      const audioElement = document.getElementById("audio") as HTMLAudioElement;
      audioElement.src = audio.audioURL ?? "";
      audioElement.play();
      buttonRef.current!.classList.add("bg-muted");
      buttonRef.current!.style.borderColor = "black";
      buttonRef.current!.style.borderWidth = "2px";
    }
  }, []);
  return (
    <Button
      ref={buttonRef}
      variant="outline"
      onClick={() => {
        const audioElement = document.getElementById(
          "audio"
        ) as HTMLAudioElement;
        audioElement.src = audio.audioURL ?? "";
        audioElement.title = audio.name ?? "";
        audioElement.play();
        posthog.capture("play_audio", {
          audio_id: audio.id,
          audio_name: audio.name,
        });
      }}
    >
      {audio.emoji} {audio.name}
    </Button>
  );
}
