import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

export default function EditNote() {
  const router = useRouter()
  const { id } = router.query
  const [formData, setFormData] = useState({ title: '', content: '' })

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/note?id=${id}`, {
        method: 'GET',
      })
      const data = await res.json()
      setFormData({
        title: data.list[0].title,
        content: data.list[0].content,
      })
    }
    fetchData().catch(console.error)
  }, [id])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const editNote = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      title: { value: string }
      content: { value: string }
    }
    if (!target.title.value || !target.content.value) {
      return alert('Empty field')
    }
    try {
      const res = await fetch(`http://${window.location.host}/api/note`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: id,
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
        <title>Edit Note</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <form
        className="flex flex-col gap-[2rem] mb-[2rem]"
        onSubmit={(e) => editNote(e)}
      >
        <input
          placeholder="title"
          name="title"
          value={formData?.title}
          onChange={(e) => handleChange(e)}
          className="relative block w-full appearance-none rounded-[10px] border border-gray-300 px-3 py-2 text-white bg-[transparent] placeholder-white focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        <textarea
          placeholder="content"
          name="content"
          value={formData?.content}
          onChange={(e) => handleChange(e)}
          className="relative block w-full h-[600px] appearance-none rounded-[10px] border border-gray-300 px-3 py-2 text-white bg-[transparent] placeholder-white focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none">
          Update
        </button>
      </form>
    </>
  )
}
