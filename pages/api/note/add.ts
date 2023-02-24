import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../lib/mongo/index'
import { INote, Note } from '../../../lib/mongo/models'

connectToDatabase()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body: INote = req.body
    const newNote = new Note(body)
    const saved = await newNote.save()
    res.send(saved)
  } catch (e) {
    res.status(500).send('error')
  }
}
