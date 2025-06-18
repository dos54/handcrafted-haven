'use client'

import { signIn } from "next-auth/react"
import styles from "./SignIn.module.css"

export default function SignIn() {
  return (
    <button
      onClick={() => signIn()}
      className={styles.button}
    >
      Sign In
    </button>
  )
}
