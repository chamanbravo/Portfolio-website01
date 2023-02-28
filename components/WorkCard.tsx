import Image from 'next/image'
import chaman from '../public/images/chaman.png'

export default function WorkCard() {
  return (
    <div className="group/item flex flex-col mb-[4rem] gap-[2rem] sm:justify-between sm:flex-row sm:mb-[8rem]">
      <div className="relative">
        <p className="text-[#9C9C9C] mb-[1rem]">Web Development</p>
        <p className="text-[#E9E9E9] text-lg max-w-[40ch] tracking-wide text-opacity-90">
          A leading player in the sleep tech space, Snooze is reimagining the
          importance of sleep in the 21st century.
        </p>
        <h1 className="text-[#fff] mt-[1rem] text-[2rem] sm:absolute sm:left-[10rem] sm:bottom-[1rem] sm:text-8xl z-10">
          living memories
        </h1>
      </div>
      <div className="bg-[#D9D9D9] opacity-30 group-hover/item:opacity-100 transition-all duration-75 ease-in w-[auto] h-[300px] sm:w-[500px] sm:h-[400px] overflow-hidden">
        <Image
          src={chaman}
          alt="chaman"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
    </div>
  )
}
