import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Spotify from './Spotify'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [lanyard, setLanyard] = useState({
    isPlaying: false,
    song: '',
    album_art_url: '',
  })

  useEffect(() => {
    fetch('https://api.lanyard.rest/v1/users/957804843198717992')
      .then((res) => res.json())
      .then((data: any) => {
        setLanyard({
          isPlaying: data.data.listening_to_spotify,
          ...data.data.spotify,
        })
      })
  }, [])

  return (
    <div className="mx-4 sm:mx-[auto] max-w-[1000px] ">
      <Navbar>
        <Spotify {...lanyard} />
      </Navbar>
      {children}
    </div>
  )
}
