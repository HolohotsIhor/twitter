import { PAGES } from "@/config/pages.config"
import Link from "next/link"

const Menu = () => {
  const linkClasses = "text-white/90 hover:text-white transition-colors"

  return (
    <nav className="hidden md:flex items-center gap-6">
      <Link href={PAGES.HOME} className={linkClasses}>
        Home
      </Link>
      <Link href={PAGES.EXPLORE} className={linkClasses}>
        Explore
      </Link>
      <Link href={PAGES.PROFILE_FAKE} className={linkClasses}>
        Profile
      </Link>
    </nav>
  )
}

export default Menu
