import express from 'express'
import { red, yellow, redf } from '../logger'
import { insertOne } from '../db'
const router = express.Router()

const newEvent = {
  title: 'e2',
  organization: 'o',
  venueName: 'v',
  linkToUrl: 'l',
  price: '9',
  category: 'octocopter',
  tags: [ 'lll' ],
  endDateTime: '2018-08-06T19:28:27.270Z',
  startDateTime: '2018-08-06T19:28:27.246Z',
  postalCode: '94582',
  cityName: 'San Ramon',
  stateCode: 'CA'
}


router.get('/', async (req, res) => {
  yellow('GET')
  const filter = newEvent
  const ret = await insertOne('events',filter)
  res.send(JSON.stringify(ret))
})

export default router
