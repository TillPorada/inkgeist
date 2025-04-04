import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Testendpunkt
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from backend!' })
})

mongoose.connect(process.env.MONGO_URI || '')
  .then(() => {
    console.log('✅ MongoDB connected')
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`))
  })
  .catch(err => console.error('❌ MongoDB connection error:', err))
