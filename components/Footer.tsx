import Link from 'next/link'

export default function Footer() {
  return (
    <div className="flex flex-col gap-[1.5rem] py-[2rem] border-t-[1px] border-[#9C9C9C]">
      <div className="flex justify-between">
        <h1 className="text-[#fff] text-4xl text-medium">{`Let's connect :)`}</h1>
        <div className="flex flex-col gap-[1rem] items-end">
          <div className="flex gap-[2rem]">
            <Link href="#" className="text-[#fff] text-lg">
              twitter
            </Link>
            <Link href="#" className="text-[#fff] text-lg">
              github
            </Link>
          </div>
          <Link href="#" className="text-[#fff] text-lg">
            chamanpro9@gmail.com
          </Link>
        </div>
      </div>
      <div className="flex gap-[2rem]">
        <Link href="#" className="text-[#fff] text-lg">
          /guestbook
        </Link>
        <Link href="#" className="text-[#fff] text-lg">
          /notes
        </Link>
        <Link href="/about" className="text-[#fff] text-lg">
          /about
        </Link>
      </div>
    </div>
  )
}
