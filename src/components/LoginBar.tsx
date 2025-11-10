import Link from "next/link"

const LoginBar = () => {
  return (
    <div className="flex items-center gap-4">
      <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
        Tweet
      </button>
      <Link href="/profile" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
          <span className="text-sm">IH</span>
        </div>
      </Link>
    </div>
  )
}

export default LoginBar
