'use client'

import { signOut } from "next-auth/react"
import styles from "./SignIn.module.css"

export default function SignOut() {
  return (
    <button
      onClick={() => signOut()}
      className={styles.button}
    >
      Sign Out
    </button>
  )
}
