import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import 'babel-polyfill'

// import users from '../routes/user-route'
// import search from '../routes/search-route'
import people from '../routes/people-route'

/* Dev */
import { greenf, redf, yellow } from '../logger'


const app = express()
const path = require('path')

const port = process.env.PORT

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

require('../config/passport')
// app.use('/api', users)
// app.use('/api/search', search)
app.use('/api/people', people)
app.get('/api', (req, res) => {
  redf('Invalid endpoint!')
  res.send('Invalid endpoint!')
})

if (!module.parent) {
  app.listen(port, () => {
    console.log(`Events API server is listening on port ${port}`)
  })
}

module.exports = { app, port }
