import { setCookie } from 'cookies-next'
import Head from 'next/head'
import { FormEvent } from 'react'

export default function Admin() {
  const logIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      password: { value: string }
    }
    const password = target.password.value
    const res = await fetch(`https://${window.location.host}/api/auth`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({ password }),
    })
    const data = await res.json()
    if (data.loggedIn) {
      setCookie('loggedIn', 'true')
      window.location.replace('/admin/dashboard')
    }
  }

  return (
    <>
      <Head>
        <title>Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center items-center h-[80vh]">
        <form className="flex flex-col gap-[1rem]" onSubmit={(e) => logIn(e)}>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="relative block w-full appearance-none rounded-[10px] border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Sign in
          </button>
        </form>
      </div>
    </>
  )
}
