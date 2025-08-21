import { AuthButton } from "@/components/AuthButton";

export const metadata = {
  title: "Check your email - Noisefill",
  description: "A sign in link has been sent to your email address.",
};

export default function VerifyRequest() {
  return (
    <div className="w-full max-w-lg mx-auto py-12">
      <div className="w-full flex justify-between gap-2 items-center h-10">
        <h1 className="text-3xl font-bold">Check your email</h1>
      </div>
      <p className="text-lg text-muted-foreground pt-1 font-medium">
        A sign in link has been sent to your email address.
      </p>
    </div>
  );
}
