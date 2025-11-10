import Link from "next/link"
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/window.svg"
        alt="Twitter Logo"
        width={32}
        height={32}
        className="text-white"
        priority
      />
      <span className="text-xl font-bold text-white hidden sm:inline">
        Twitter
      </span>
    </Link>
  )
}

export default Logo
