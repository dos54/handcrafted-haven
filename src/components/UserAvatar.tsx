'use client'

import Image from "next/image"
import { useSession } from "next-auth/react"

export default function UserAvatar() {
  const { data: session } = useSession()
  const image = session?.user?.image ?? "/images/handcrafted_haven_logo_black.png"

  return (
    <div>
      <Image
        src={image}
        alt="User Avatar"
        width={20}
        height={20}
        className="w-20 h-20 rounded-full object-cover mx-auto"
      />
    </div>
  )
}
