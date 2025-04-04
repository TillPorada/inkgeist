import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('Inkgeist Backend läuft 🎉')
})

mongoose.connect(process.env.MONGO_URI || '')
  .then(() => {
    console.log('✅ MongoDB verbunden')
    app.listen(PORT, () => console.log(`🚀 Server läuft auf http://localhost:${PORT}`))
  })
  .catch(err => console.error('❌ Fehler bei MongoDB Verbindung:', err))
