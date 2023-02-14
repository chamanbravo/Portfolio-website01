import Link from 'next/link'

export default function Navbar({ children }: { children: any }) {
  return (
    <nav className="my-[2rem] flex justify-between items-center">
      <div className="flex gap-[2rem] sm:gap-[4rem]">
        <Link
          href="/"
          className="text-[#fff] text-[1.2rem] hover:text-opacity-60"
        >
          /
        </Link>
        <Link
          href="/notes"
          className="text-[#fff] text-[1.2rem] hover:text-opacity-60"
        >
          /notes
        </Link>
        <Link
          href="/about"
          className="text-[#fff] text-[1.2rem] hover:text-opacity-60"
        >
          /about
        </Link>
      </div>
      {children}
    </nav>
  )
}
