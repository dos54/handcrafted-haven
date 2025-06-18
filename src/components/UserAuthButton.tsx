'use client'

import { useSession } from "next-auth/react"
import SignIn from "./SignIn"
import SignOut from "./SignOut"

export default function UserAuthButton() {
  const { data: session, status } = useSession()

  if (status === "loading") return null

  return session?.user ? <SignOut /> : <SignIn />
}
