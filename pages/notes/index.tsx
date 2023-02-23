import Head from 'next/head'

export default function Notes() {
  const notes = [
    {
      title: 'Self hosted',
      date: '2023/01/02',
      timeToRead: '2mins',
    },
    {
      title: 'Self hosted',
      date: '2023/01/02',
      timeToRead: '2mins',
    },
  ]
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
          {notes.map((note, i) => {
            return (
              <div
                key={i}
                className="hover:bg-[#ddd] hover:bg-opacity-5 w-[100%] p-[10px]"
              >
                <p className="text-[#fff] text-xl text-opacity-90">
                  {note.title}
                </p>
                <div className="text-[#fff] text-opacity-70 text-[0.9rem] inline-flex gap-[1rem]">
                  <p>{note.timeToRead}</p> <p>{note.date}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
