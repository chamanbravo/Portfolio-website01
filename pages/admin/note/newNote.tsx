import Head from 'next/head'
import { FormEvent } from 'react'

export default function NewNote() {
  const addNote = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      title: { value: string }
      content: { value: string }
    }
    if (!target.title.value || !target.content.value) {
      return alert('Empty field')
    }
    try {
      const res = await fetch(`${location.origin}/api/note`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: target.title.value,
          content: target.content.value,
          date: new Date(),
        }),
      })
      const data = await res.json()
      if (data.success) {
        window.location.replace('/admin/dashboard')
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Head>
        <title>New Note</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <form
        className="flex flex-col gap-[2rem] mb-[2rem]"
        onSubmit={(e) => addNote(e)}
      >
        <input
          placeholder="title"
          name="title"
          className="relative block w-full appearance-none rounded-[10px] border border-gray-300 px-3 py-2 text-white bg-[transparent] placeholder-white focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        <textarea
          placeholder="content"
          name="content"
          className="relative block w-full h-[600px] appearance-none rounded-[10px] border border-gray-300 px-3 py-2 text-white bg-[transparent] placeholder-white focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none">
          Add
        </button>
      </form>
    </>
  )
}
