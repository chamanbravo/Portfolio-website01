import { connect, connection } from 'mongoose'

const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

export const connectToDatabase = async () => {
  if (!connection.readyState) {
    connect('mongodb://localhost:27017/www', options)
  }
}
