import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";
import { accounts, sessions, users, verificationTokens } from "@/db/schema";
import GitHub from "next-auth/providers/github";
import Figma from "next-auth/providers/figma";
import Google from "next-auth/providers/google";
import Loops from "next-auth/providers/loops";
import Discord from "next-auth/providers/discord";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    accountsTable: accounts,
    sessionsTable: sessions,
    usersTable: users,
    verificationTokensTable: verificationTokens,
  }),
  providers: [
    Loops({
      apiKey: process.env.AUTH_LOOPS_KEY!,
      transactionalId: process.env.AUTH_LOOPS_TRANSACTIONAL_ID!,
    }) as any,
    GitHub,
    Figma,
    Google,
    Discord,
  ],
  pages: {
    signIn: "/signin",
    newUser: "/signin",
    verifyRequest: "/verify-request",
  },
});
