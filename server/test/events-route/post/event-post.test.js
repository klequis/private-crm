import 'babel-polyfill'
import request from 'supertest'
import { expect } from 'chai'
import app from '../../../server/server'
import {yellow, blue, green, red, greenf, redf} from '../../../logger/'
import {
  dropCollection,
  insertMany
} from '../../../db'
import { eventToPost, eventAfter, postalCodes } from './fixture'
import { omit } from 'ramda'

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

describe.skip('POST /events', async () => {
  before(async () => {
      await dropCollection('events')
      await dropCollection('postalCodes')

  })
  it('add 1 event', async () => {
    const insertedData = await insertMany('postalCodes', postalCodes)
    const postalData = insertedData.data
    expect(postalData.length).to.equal(5)
    // get postalCode _id for San Ramon 94582
    const sanRamon = postalData.find((c => c.postalCode === '94582'))
    const postal_id = sanRamon._id
    // mod data to have a _id that actually exists
    eventToPost.postalCode_id = postal_id
    const res = await request(app).post('/events').send(eventToPost)
    expect(200)
    const data = res.body.data
    expect(data.length).to.equal(1)
    const returnedEvent = data[0]
    // remove _id so can compare
    const eventToCompare = omit(['_id'], returnedEvent)
    expect(eventAfter).to.deep.equal(eventToCompare)
  })

})



