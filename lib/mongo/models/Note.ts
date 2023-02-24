import mongoose, { Document, model, Model, Schema } from 'mongoose'

export interface INote extends Document {
  title: string
  date: string
  content: string
}

const NoteSchema: Schema = new Schema({
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  content: {
    type: String,
  },
})

export const Note = (mongoose.models.Note ||
  model('Note', NoteSchema)) as Model<INote>
