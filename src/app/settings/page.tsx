import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function Settings() {
  const session = await auth();

  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <div className="w-full max-w-lg mx-auto py-12">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="flex flex-col gap-2 pt-1">
        <div className="flex items-center gap-2">
          <p className="text-sm">Name</p>{" "}
          <p className="text-sm text-muted-foreground">{session?.user?.name}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm">Email address</p>{" "}
          <p className="text-sm text-muted-foreground">
            {session?.user?.email}
          </p>
        </div>
        <br />
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/signin" });
          }}
        >
          <Button variant="outline">Log out</Button>
        </form>
        <form
          action={async () => {
            "use server";
            redirect("/settings/delete-account");
          }}
        >
          <Button variant="outline">Delete account</Button>
        </form>
      </div>
    </div>
  );
}
