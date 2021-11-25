require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const sendEmail = require('./controllers/sendEmail')

const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')

app.use(express.json())


app.get('/', (req, res) => {
  res.send('<h1>EMAIL PROJECT</h1><a href="/send">SEND EMAIL</a>')
})

app.get('/send', sendEmail)

app.use(errorHandler)
app.use(notFound)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    app.listen(port, console.log(`Server listening on port: ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()