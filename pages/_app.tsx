import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-4 sm:mx-[auto] max-w-[1000px] ">
      <Component {...pageProps} />
    </div>
  )
}
