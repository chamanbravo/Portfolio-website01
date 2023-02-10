import Head from 'next/head'
import Navbar from '../../components/Navbar'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#171717]">
        <Navbar />
        <h1 className="text-3xl text-teal-500 font-bold">Haha</h1>
      </main>
    </>
  )
}
