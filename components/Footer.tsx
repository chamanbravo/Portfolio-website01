import Link from 'next/link'

export default function Footer() {
  return (
    <div className="flex flex-col gap-[1.5rem] py-[2rem] border-t-[1px] border-[#9C9C9C]">
      <div className="flex flex-col justify-between gap-[1rem] sm:flex-row">
        <h1 className="text-[#fff] text-4xl text-medium">{`Let's connect :)`}</h1>
        <div className="flex flex-col gap-[1rem] items-end">
          <div className="flex gap-[2rem]">
            <Link
              href="https://twitter.com/bravo_chaman"
              className="text-[#fff] text-lg hover:text-opacity-60"
            >
              twitter
            </Link>
            <Link
              href="https://github.com/chamanbravo"
              className="text-[#fff] text-lg hover:text-opacity-60"
            >
              github
            </Link>
          </div>
          <Link
            href="mailto:chamanpro9@gmail.com"
            className="text-[#fff] text-lg hover:text-opacity-60"
          >
            chamanpro9@gmail.com
          </Link>
        </div>
      </div>
      <div className="flex gap-[2rem]">
        <Link href="#" className="text-[#fff] text-lg hover:text-opacity-60">
          /guestbook
        </Link>
        <Link href="#" className="text-[#fff] text-lg hover:text-opacity-60">
          /notes
        </Link>
        <Link
          href="/about"
          className="text-[#fff] text-lg hover:text-opacity-60"
        >
          /about
        </Link>
      </div>
    </div>
  )
}
