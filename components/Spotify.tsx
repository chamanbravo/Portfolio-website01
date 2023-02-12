import Image from 'next/image'
import { SiSpotify } from 'react-icons/si'

export default function Spotify({
  isPlaying,
  song,
  album_art_url,
}: {
  isPlaying: boolean
  song: string
  album_art_url: String
}) {
  if (!isPlaying)
    return (
      <p className="text-[#F5F5F5] text-opacity-60 text-[1.2rem] hidden sm:flex gap-[0.5rem] items-center">
        not playing anything <SiSpotify />
      </p>
    )
  return (
    <div className="hidden sm:flex gap-[0.8rem] items-center relative">
      <a
        href={`https://open.spotify.com/search/${song}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-[#F5F5F5] text-opacity-60 text-[1.2rem] hidden sm:flex gap-[0.5rem] items-center">
          <Image
            width={60}
            height={60}
            src="https://media1.giphy.com/media/mXbQ2IU02cGRhBO2ye/giphy.gif?cid=790b761125d79c0fffc7d6075698d0584a1b8456d2d7cc2c&rid=giphy.gif&ct=s"
            alt="visualizer"
            className="opacity-[0.7]"
          />
          {song.slice(0, 10) + '...'}
          <Image
            width={24}
            height={24}
            src={`${album_art_url}`}
            alt="album art"
            className="opacity-[0.7]"
          />
        </p>
      </a>
      <p className="text-[#F5F5F5] text-opacity-60 text-[1.2rem]">
        <SiSpotify />
      </p>
    </div>
  )
}
