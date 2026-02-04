import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'

const app = express()

/* ===============================
   CORS Configuration
   =============================== */
app.use(
  cors({
    origin: process.env.CLIENT_URL, // REQUIRED
    credentials: true,
  })
)

app.use(express.json())

/* ===============================
   Health Check
   =============================== */
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Bug Tracker API running 🚀',
  })
})

/* ===============================
   Server Start (LOCAL ONLY)
   =============================== */
const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
  })
}

/* ===============================
   Export for Vercel
   =============================== */
export default app
