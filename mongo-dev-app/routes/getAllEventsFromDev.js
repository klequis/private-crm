import express from 'express'
const MongoClient = require('mongodb').MongoClient

import { red, yellow } from '../logger'
const router = express.Router()

const database = 'EventsDev'
const collection = 'events'

const executeFind = async () => {
  // yellow('query', query)
  // yellow('project', project)
  const url = 'mongodb://localhost:27017'
  const client = await MongoClient.connect(url, { useNewUrlParser: true })
  const db = await client.db('EventsDev')
  const ret = await db.collection('events').find({}).toArray()
  return ret
}


router.get('/', async (req, res) => {
  const ret = await executeFind()
  res.send(JSON.stringify({ret}))
})

export default router

