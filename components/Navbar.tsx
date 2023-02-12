import Link from 'next/link'

export default function Navbar({ children }: { children: any }) {
  return (
    <nav className="my-[2rem] flex justify-between items-center">
      <div className="flex gap-[2rem] sm:gap-[4rem]">
        <Link href="/" className="text-[#fff] text-[1.2rem]">
          /
        </Link>
        <Link href="#" className="text-[#fff] text-[1.2rem]">
          /guestbook
        </Link>
        <Link href="#" className="text-[#fff] text-[1.2rem]">
          /notes
        </Link>
        <Link href="/about" className="text-[#fff] text-[1.2rem]">
          /about
        </Link>
      </div>
      {children}
    </nav>
  )
}
