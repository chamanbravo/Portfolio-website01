import Head from 'next/head'

interface INote {
  _id: string
  title: string
  date: string
  content: string
}

export default function Notes({ data }: { data: any }) {
  const { list } = data
  return (
    <>
      <Head>
        <title>Notes</title>
        <meta name="description" content="Chaman's notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sm:flex gap-[3rem] my-[4rem]">
        <div className="flex flex-col gap-[10px] mb-[2rem] sm:w-[200px]">
          <p className="text-xl text-[#fff] font-thin text-opacity-95">
            My notes
          </p>
          <p className="text-[#fff] text-opacity-70">Learning things</p>
        </div>

        <div className="flex flex-col gap-[1rem] sm:pl-[2rem] sm:border-l-[1px] sm:border-[#666666] w-[100%] cursor-pointer">
          {list.map((note: INote) => {
            return (
              <div
                key={note?._id}
                className="hover:bg-[#ddd] hover:bg-opacity-5 w-[100%] p-[10px]"
              >
                <a href={`/notes/${note._id}`}>
                  <p className="text-[#fff] text-xl text-opacity-90">
                    {note.title}
                  </p>
                  <div className="text-[#fff] text-opacity-70 text-[0.9rem] inline-flex gap-[1rem]">
                    <p>{(note.content.length / 200).toFixed(0)} mins Read</p>
                    <p>{note.date.slice(0, 10).split('-').join('/')}</p>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/note', { method: 'GET' })
  const data = await res.json()

  return { props: { data } }
}
