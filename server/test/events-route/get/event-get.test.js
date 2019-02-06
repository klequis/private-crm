import 'babel-polyfill'
import request from 'supertest'
import { expect } from 'chai'
import app from '../../../server/server'
import {yellow, blue, green, red, greenf, redf} from '../../../logger/'
import { findOneAndUpdate, dropCollection, find, insertOne } from '../../../db'
// import { fiveEvents } from './fixtures/fiveEvents'
import { newEventData , addedEvent } from './fixture'
import { omit, clone } from 'ramda'

require('dotenv').config()

const util = require('util')
const setTimeoutPromise = util.promisify(setTimeout)

after(async () => {
  if (!process.env.WATCH) {
    setTimeoutPromise(1900).then((value) => {
      process.exit(0)
    })
  }
})

describe.skip('GET /events', async () => {
  let eventBefore
  let eventBefore_id
  let eventAfter
  before(async () => {
    await dropCollection('events')
    const ret = await insertOne('events', addedEvent)
    eventBefore = ret.data[0]
    eventBefore_id = addedEvent._id
    eventAfter = clone(eventBefore)
    eventAfter.organization = 'new org'

  })
  it('dummy',  async () => {
    expect(eventBefore.organization).to.equal('BRIIA')
    const ret = await request(app).patch(`/events/${eventBefore_id}`).send(eventAfter)
    expect(200)

  })

})

