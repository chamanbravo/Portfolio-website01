import Markdown from 'markdown-to-jsx'
import Head from 'next/head'

interface NoteProps {
  data: {
    list: {
      id: string
      title: string
      content: string
      date: string
    }[]
  }
}

export default function Note({ data }: NoteProps) {
  const note = data.list[0]

  return (
    <>
      <Head>
        <title>{note.title}</title>
        <meta name="description" content="Chaman's notes" />
        <link rel="icon" href="/favicon.png" />
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
                  props: { className: 'text-[#fff] text-3xl my-[0.5rem]' },
                },
                h2: {
                  props: { className: 'text-[#fff] text-2xl my-[0.5rem]' },
                },
                h3: { props: { className: 'text-[#fff] text-xl my-[0.5rem]' } },
                ul: {
                  props: { className: 'list-disc list-inside my-[0.5rem]' },
                },
                li: { props: { className: 'text-[#fff] text-opacity-70' } },
                p: {
                  props: {
                    className: 'text-[#fff] text-opacity-70 my-[0.5rem]',
                  },
                },
                a: {
                  props: {
                    className: 'text-[#3fa9da] text-opacity-70 underline',
                  },
                },
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
  const res = await fetch(
    `https://chadman.vercel.app/api/note?id=${params.id}`,
    {
      method: 'GET',
    }
  )
  const data = await res.json()

  return { props: { data } }
}
