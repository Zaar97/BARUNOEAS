import express from 'express'
import payload from 'payload'
import cors from 'cors';

require('dotenv').config()
const app = express()

app.use(cors({
  origin: 'http://localhost:5173', // allow only this origin to access the server
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH'], // allow only these methods
  credentials: true,
}));

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(3000)
}

start()