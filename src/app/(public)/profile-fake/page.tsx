import type { Metadata } from "next"
import Profile from "./Profile"

export const metadata: Metadata = {
  title: 'Profile page',
  description: 'Profile page',
}

export default function ProfilePage() {
  return (
    <Profile />
  )
}