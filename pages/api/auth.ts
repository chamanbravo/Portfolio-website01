import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  loggedIn: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { password } = req.body
  if (password === '123456') {
    res.status(200).json({ loggedIn: true })
  } else {
    res.status(200).json({ loggedIn: false })
  }
}
