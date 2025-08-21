"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

export function AuthButton({ session }: { session: Session | null }) {
  if (session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size={"icon"}
            className="hover:bg-transparent hover:brightness-90"
          >
            <Avatar>
              <AvatarImage src={session.user?.image ?? ""} />
              <AvatarFallback>{session.user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link href="/settings">
            <DropdownMenuItem tabIndex={-1}>Account settings</DropdownMenuItem>
          </Link>
          <DropdownMenuItem onClick={() => signOut()} tabIndex={-1}>
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <a href="/signin">
      <Button>Sign in</Button>
    </a>
  );
}
