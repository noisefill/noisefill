"use client";

import { SelectAudio } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function AudioViewer({ audioList }: { audioList: SelectAudio[] }) {
  const [audioTitle, setAudioTitle] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = document.getElementById("audio") as HTMLAudioElement;
    // get attributes while still loading
    audioElement.addEventListener("loadstart", () => {
      setAudioTitle("Loading");
    });
    audioElement.addEventListener("loadedmetadata", () => {
      setAudioTitle(audioElement.title);
    });
    audioElement.addEventListener("play", () => {
      setIsPlaying(true);
    });
    audioElement.addEventListener("pause", () => {
      setIsPlaying(false);
    });
  }, []);

  return (
    <div className="flex items-center gap-0.5">
      <span className="text-sm font-medium select-none">{audioTitle}</span>

      <Button
        variant="ghost"
        className="p-0.5 hover:bg-transparent hover:opacity-80"
        onClick={() => {
          const audioElement = document.getElementById(
            "audio"
          ) as HTMLAudioElement;
          if (audioElement.paused) {
            if (audioElement.src === "") {
              const randomAudio =
                audioList[Math.floor(Math.random() * audioList.length)];
              audioElement.src = randomAudio.audioURL ?? "";
              audioElement.title = randomAudio.name ?? "";
              audioElement.play();
              return;
            } else {
              audioElement.play();
            }
          } else {
            audioElement.pause();
          }
        }}
      >
        {isPlaying ? (
          <PauseIcon fill="currentColor" className="w-4 h-4" />
        ) : (
          <PlayIcon fill="currentColor" className="w-4 h-4" />
        )}
      </Button>
    </div>
  );
}
