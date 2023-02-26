import Markdown from 'markdown-to-jsx'
import Head from 'next/head'

export default function Note({ data }: { data: any }) {
  const note = data.list[0]

  return (
    <>
      <Head>
        <title>{note.title}</title>
        <meta name="description" content="Chaman's notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <p className="text-[#fff] text-3xl font-bold text-opacity-90">
          {note.title}
        </p>
        <div className="text-[#fff] text-opacity-70 text-[0.9rem] inline-flex gap-[1rem]">
          <p>{(note.content.length / 200).toFixed(0)} mins Read</p>
          <p>{note.date.slice(0, 10).split('-').join('/')}</p>
        </div>
        <div className="mt-[2rem]">
          <Markdown
            options={{
              wrapper: 'article',
              overrides: {
                h1: {
                  props: { className: 'text-[#fff] text-3xl mb-[0.5rem]' },
                },
                h2: {
                  props: { className: 'text-[#fff] text-2xl mb-[0.5rem]' },
                },
                h3: { props: { className: 'text-[#fff] text-xl mb-[0.5rem]' } },
                ul: { props: { className: 'list-disc list-inside' } },
                li: { props: { className: 'text-[#fff] text-opacity-70' } },
                p: { props: { className: 'text-[#fff] text-opacity-70' } },
              },
            }}
          >
            {note.content}
          </Markdown>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ params }: { params: any }) {
  const res = await fetch(`http://localhost:3000/api/note?id=${params.id}`, {
    method: 'GET',
  })
  const data = await res.json()

  return { props: { data } }
}
