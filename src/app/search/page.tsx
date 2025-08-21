import { Search } from "@upstash/search";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import Link from "next/link";

const client = new Search({
  url: "https://learning-shiner-12476-gcp-usc1-search.upstash.io",
  token: process.env.UPSTASH_TOKEN,
});

const index = client.index("audios");

export const metadata = {
  title: "Search - Noisefill",
  description: "Search for audio",
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>; // ✅ searchParams as a Promise
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const results = await index.search({ query: q ?? "" });
  return (
    <div className="w-full max-w-lg mx-auto py-12">
      <form
        action={async (formData: FormData) => {
          "use server";
          const query = formData.get("query");
          redirect(`/search?q=${query}`);
        }}
      >
        <label
          htmlFor="query"
          className="text-sm font-medium w-[350px] pb-0.75 text-left block"
        >
          Search
        </label>{" "}
        <Input
          id="query"
          type="text"
          defaultValue={q}
          placeholder="Search"
          name="query"
        />
      </form>
      <div className="flex flex-col gap-2 pt-3">
        {results.map((hit) => (
          <Link
            href={`/#${(hit.content.name as string).toLowerCase()}`}
            key={hit.id}
            className="flex items-center gap-2"
          >
            <h3 className="text-lg font-medium">
              {hit.content.name as string}
            </h3>
            <span className="text-lg text-muted-foreground">
              {hit.content.type === "lofi" ? "Lo-fi" : "Soundscape"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
