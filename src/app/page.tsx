import { auth } from "@/auth";
import { db } from "@/db/index";
import { audios } from "@/db/schema";
import { AuthButton } from "@/components/AuthButton";
import { SoundButton } from "./SoundButton";
import { AudioViewer } from "./AudioViewer";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import Link from "next/link";
import FeaturebaseMessenger from "@/components/Featurebase";

export async function generateMetadata() {
  const session = await auth();

  if (!session) {
    return {
      title: "Noisefill - Soundscapes & Lo-fi Music",
      description:
        "Noisefill is a platform that lets you listen to curated soundscapes & lofi music in one place.",
    };
  }

  return {
    title: `Home - Noisefill`,
    description:
      "Noisefill is a platform that lets you listen to curated soundscapes & lofi music in one place.",
  };
}

export default async function Page() {
  const audioList = await db.select().from(audios).orderBy(audios.name);
  const session = await auth();

  return (
    <div className="w-full max-w-2xl mx-auto py-9 p-6">
      <div className="w-full flex justify-between gap-2 items-center h-10">
        <h1 className="text-2xl font-bold">Noisefill</h1>
        <div className="flex items-center gap-2">
          <AudioViewer audioList={audioList} />
          <form
            action={async (formData: FormData) => {
              "use server";
              const query = formData.get("query");
              redirect(`/search?q=${query}`);
            }}
          >
            <Input type="text" placeholder="Search" name="query" />
          </form>
          {/* <AuthButton session={session ?? null} /> */}
        </div>
      </div>
      <div className="w-full flex flex-col gap-1 pt-1">
        <h3 className="text-lg font-semibold">Lo-fi beats</h3>
        <div className="flex flex-wrap gap-2">
          {audioList
            .filter((audio) => audio.type === "lofi")
            .map((audio) => (
              <SoundButton key={audio.id} {...audio} />
            ))}
        </div>
      </div>
      <br />
      <div className="w-full flex flex-col gap-1 pt-1">
        <h3 className="text-lg font-semibold">Soundscapes</h3>
        <div className="flex flex-wrap gap-2">
          {audioList
            .filter((audio) => audio.type === "soundscape")
            .map((audio) => (
              <SoundButton key={audio.id} {...audio} />
            ))}
        </div>
      </div>
      <br />
      <p className="text-sm text-muted-foreground">
        Soundscapes on Noisefill are created by various authors on{" "}
        <a
          href="https://freesound.org"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          freesound.org
        </a>{" "}
        who have released their work into the public domain. To view
        attribution,{" "}
        <Link href="/credits" className="text-blue-500 hover:underline">
          click here
        </Link>
        .
      </p>
      <footer className="text-sm text-muted-foreground pt-2 flex gap-1.25">
        <Link href="/privacy" className="hover:text-foreground">
          Privacy
        </Link>
        <span>•</span>
        <a
          href="mailto:hi@noisefill.com"
          target="_blank"
          className="hover:text-foreground"
        >
          Contact us
        </a>
        <span>•</span>
        <a
          href="https://github.com/noisefill/noisefill"
          target="_blank"
          className="hover:text-foreground"
        >
          GitHub repo
        </a>
      </footer>
      <FeaturebaseMessenger />
    </div>
  );
}
