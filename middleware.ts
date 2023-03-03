import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const verify = req.cookies.get('loggedIn') ?? false
  const path = req.url

  if (!verify && path?.includes('/dashboard')) {
    return NextResponse.redirect(`${process.env.URL}`)
  }
}
