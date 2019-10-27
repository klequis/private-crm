import 'babel-polyfill'
import request from 'supertest'
import { expect } from 'chai'
import app from '../../../server/server'
import {yellow, blue, green, red, greenf, redf} from '../../../logger/'
import { findOneAndUpdate, dropCollection, find, insertOne, insertMany } from '../../../db'
// import { fiveEvents } from './fixtures/fiveEvents'
import { fiveEvents } from './fixture'
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
  before(async () => {
    await dropCollection('events')
    await insertMany('events', fiveEvents)
  })
  it('should get ...',  async () => {
    expect(eventBefore.organization).to.equal('BRIIA')
    const ret = await request(app).patch(`/events/${eventBefore_id}`).send(eventAfter)
    expect(200)

  })

})

