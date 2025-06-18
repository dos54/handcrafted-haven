
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { getOrCreateUserByEmail } from "./database/services/userService"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
})