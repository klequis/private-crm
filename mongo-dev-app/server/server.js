import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import 'babel-polyfill'
import {greenf, redf, yellow} from '../logger'
// import cities from '../routes/cities'
import citiesLookup from '../routes/citiesLookup'
import distinctCities from '../routes/distinceCities'
import convertZipToString from '../routes/convertZipToString'
import updateCityData from '../routes/update-city-data'
import findOneAndUpdate from '../routes/findOneAndUpdate'
import insertOneTest from '../routes/insertOneTest'
import allEventsFromDev from '../routes/getAllEventsFromDev'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

// green('node env=', process.env.NODE_ENV)
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))

// routes
// app.use('/cities', cities)
app.use('/all-events-from-dev', allEventsFromDev)
app.use('/cities-lookup', citiesLookup)
app.use('/convert-zip', convertZipToString)
app.use('/distinct-cities', distinctCities)
app.use('/update-city-data', updateCityData)
app.use('/findoneandupdate', findOneAndUpdate)
app.use('/insert-one-test', insertOneTest)
app.get('/', (req, res) => {
  redf('Invalid endpoint!')
  res.send('Invalid endpoint!')
})

app.listen(port, () => {
  greenf('server started - ', port)
})

export default app
