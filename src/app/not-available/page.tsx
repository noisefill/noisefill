export const metadata = {
  title: "Feature not available",
  description: "Accounts are currently only available in the United States.",
  robots: {
    index: "noindex",
    follow: "noindex",
  },
};

export default function Tos() {
  return (
    <div className="w-full max-w-lg mx-auto py-12">
      <h1 className="text-2xl font-bold">Feature not available</h1>
      <p className="text-sm text-muted-foreground pt-1 font-medium">
        Accounts are a beta feature and are currently only available in the
        United States. If you are in the United States and are getting this
        message, you might not have access yet. We want to expand to other
        countries in the future.
      </p>
    </div>
  );
}
