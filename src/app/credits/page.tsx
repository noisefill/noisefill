import { db } from "@/db";
import { audios } from "@/db/schema";

export const metadata = {
  title: "Terms of Service - Noisefill",
  description: "We don't have one.",
};

export default async function Credits() {
  const audioList = await db.select().from(audios).orderBy(audios.name);
  return (
    <div className="w-full max-w-lg mx-auto py-12">
      <h1 className="text-2xl font-bold">Credits</h1>
      <p className="text-lg pt-1 font-medium">
        Soundscapes on Noisefill are created by various authors who have
        released their work into the public domain. Noisefill would not be
        possible without their generous work. Noisefill does not imply
        endorsement or affiliation with any of the authors.
      </p>
      <br />
      <div className="flex flex-col gap-2">
        {audioList.map((audio) => (
          <div key={audio.id} className="flex flex-col items-start">
            <p className="text-lg font-medium">{audio.name}</p>
            <p className="text-sm text-muted-foreground">{audio.attribution}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
