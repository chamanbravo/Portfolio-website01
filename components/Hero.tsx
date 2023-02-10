import Image from 'next/image'
import chaman from '../public/images/chaman.png'

export default function Hero() {
  return (
    <div className="flex flex-col gap-[1rem] sm:flex-row sm:justify-between sm:my-[7rem] items-end">
      <h1 className="text-[#fff] sm:text-7xl font-medium tracking-wider sm:max-w-[9ch]">
        I develop interfaces
      </h1>
      <div className="w-[200px] max-h-[150px]">
        <Image src={chaman} alt="chaman" width={200} height={150} />
      </div>
      <p className="text-[#E9E9E9] sm:max-w-[27ch] text-lg">
        A developer with love for code, craft and overall visual wellness.
      </p>
    </div>
  )
}
