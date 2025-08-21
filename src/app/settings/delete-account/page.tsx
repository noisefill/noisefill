import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function DeleteAccount() {
  const session = await auth();

  if (!session?.user) {
    redirect("/signin");
  }
  return (
    <div className="w-full max-w-lg mx-auto py-12">
      <p className="text-lg pt-1 font-medium">
        Are you sure you want to delete your account? This action is
        irreversible.
      </p>
      <div className="flex gap-2 pt-1">
        <form
          action={async () => {
            "use server";
            if (!session?.user?.id) return;
            await db
              .delete(users)
              .where(eq(users.id, session.user.id))
              .execute();
            await signOut({ redirectTo: "/signin" });
          }}
        >
          <Button variant="destructive">Delete account</Button>
        </form>
        <form
          action={async () => {
            "use server";
            redirect("/settings");
          }}
        >
          <Button variant="outline">Cancel</Button>
        </form>
      </div>
    </div>
  );
}
