import express from 'express'
const MongoClient = require('mongodb').MongoClient

import { red, yellow } from '../logger'
const router = express.Router()

const database = 'EventsDev'
const collection = 'cities'

const executeFind = async (query, project) => {
  // yellow('query', query)
  // yellow('project', project)
  const url = 'mongodb://localhost:27017'
  const client = await MongoClient.connect(url, { useNewUrlParser: true })
  const db = await client.db(database)
  const ret = await db.collection(collection).find(query).project(project).toArray()
  return ret
}


router.get('/:startsWith', async (req, res) => {
  const startsWith = req.params.startsWith
  yellow('startsWith', startsWith)
  const re = new RegExp(`^${startsWith}`)
  const q = { cityName: { $regex: re , $options: 'im' }}
  const p = { cityName: 1, _id: 0 }
  const ret = await executeFind(q, p)
  res.send(JSON.stringify({ret}))
})

export default router

