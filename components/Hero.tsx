import Image from 'next/image'
import chaman from '../public/images/chaman.png'

export default function Hero() {
  return (
    <div className="flex flex-wrap text-4xl my-[4rem] sm:justify-between sm:my-[6rem] items-end">
      <h1 className="text-[#fff] text-6xl sm:max-w-[8ch] sm:text-7xl">
        I develop interfaces
      </h1>
      <div className="hidden w-[200px] max-h-[150px] sm:block overflow-hidden">
        <Image src={chaman} alt="chaman" className="w-[100%] h-[100%]" />
      </div>
      <p className="text-[#E9E9E9] sm:max-w-[27ch] text-lg text-opacity-80">
        A developer with love for code, craft and overall visual wellness.
      </p>
    </div>
  )
}
