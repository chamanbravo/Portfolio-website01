import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="my-[2rem] flex justify-between">
      <div className="flex gap-[2rem] sm:gap-[4rem]">
        <Link href="/" className="text-[#fff] text-xl">
          /
        </Link>
        <Link href="#" className="text-[#fff] text-xl">
          /guestbook
        </Link>
        <Link href="#" className="text-[#fff] text-xl">
          /notes
        </Link>
        <Link href="/about" className="text-[#fff] text-xl">
          /about
        </Link>
      </div>
      <p className="text-[#F5F5F5] text-opacity-60 text-xl hidden sm:block">
        spotify
      </p>
    </nav>
  )
}
