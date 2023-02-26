import Head from 'next/head'
import { useEffect, useState } from 'react'

interface INote {
  _id: string
  title: string
  date: string
  content: string
}

export default function Dashboard() {
  const [list, setList] = useState<INote[] | []>([])
  const fetchList = async () => {
    const res = await fetch(`http://${window.location.host}/api/note`, {
      method: 'GET',
    })
    const data = await res.json()
    setList(data?.list)
  }

  const deleteNote = async (id: string) => {
    const res = await fetch(`http://${window.location.host}/api/note`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    })
    const data = await res.json()
    if (data.success) {
      fetchList()
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col gap-[1rem] w-[100%] cursor-pointer">
        <a
          href={`/admin/dashboard/newNote`}
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none"
        >
          Add New
        </a>
        {list.map((note, i) => {
          return (
            <div
              key={i}
              className="hover:bg-[#ddd] hover:bg-opacity-5 w-[100%] p-[10px]"
            >
              <div className="flex justify-between items-center">
                <p className="text-[#fff] text-xl text-opacity-90">
                  {note.title}
                </p>
                <p className="text-[red]" onClick={() => deleteNote(note?._id)}>
                  X
                </p>
              </div>
              <div className="text-[#fff] text-opacity-70 text-[0.9rem] inline-flex gap-[1rem]">
                <p>{(note.content.length / 200).toFixed(0)} mins Read</p>
                <p>{note.date.slice(0, 10).split('-').join('/')}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
