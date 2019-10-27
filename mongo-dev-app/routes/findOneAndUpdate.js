import express from 'express'
import { red, yellow, redf } from '../logger'
import { findOneAndUpdate } from '../db'
const router = express.Router()

const eventBefore = {
  _id: '5b673573d63a2d4c54bb7351',
  category: 'startup',
  cityName: 'San Ramon',
  endDateTime: '2018-06-12T17:00:00.000Z',
  imageUrl: 'https://s3-us-west-2.amazonaws.com/photo-app-tvc/briia.jpg',
  linkToUrl: 'http://briia.io',
  organization: 'BRIIA',
  postalCode: '94582',
  price: 75,
  startDateTime: '2018-06-12T16:00:00.000Z',
  stateCode: 'CA',
  tags: [ 'health' ],
  title: 'BRIIA Investor Demo Day',
  venueName: 'Dublin Concert Hall',
}

const eventAfter = {
  // _id: '5b673573d63a2d4c54bb7351',
  category: 'startup',
  cityName: 'San Ramon',
  endDateTime: '2018-06-12T17:00:00.000Z',
  imageUrl: 'https://s3-us-west-2.amazonaws.com/photo-app-tvc/briia.jpg',
  linkToUrl: 'http://briia.io',
  organization: 'new org',
  postalCode: '94582',
  price: 75,
  startDateTime: '2018-06-12T16:00:00.000Z',
  stateCode: 'CA',
  tags: [ 'health' ],
  title: 'BRIIA Investor Demo Day',
  venueName: 'Dublin Concert Hall',
}

router.get('/', async (req, res) => {
  const id = '5b673573d63a2d4c54bb7351'
  const filter = { organization: 'changed-org-8' }
  const ret = await findOneAndUpdate('events', id, filter)
  res.send(JSON.stringify(ret))
})

export default router
