import Head from 'next/head'
import { Hero, WorkCard } from '../components'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chaman</title>
        <meta
          name="description"
          content="A developer with love for code, craft and overall visual wellness."
        />
        <meta property="og:image" content="../public/og-chaman.jpg" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Hero />

      <p className="text-[#9C9C9C] text-center mb-[3rem]">Featured works</p>
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />

      <Footer />
    </>
  )
}
