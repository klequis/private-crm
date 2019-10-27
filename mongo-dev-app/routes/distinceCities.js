import express from 'express'
import { red, yellow } from '../logger'

const router = express.Router()
const MongoClient = require('mongodb').MongoClient
const database = 'EventsDev'
const collection = 'cities'
const url = 'mongodb://localhost:27017'

const executeAggregate = async (query) => {
  yellow('query', query)
  const client = await MongoClient.connect(url, { useNewUrlParser: true })
  const db = await client.db(database)
  const ret = await db.collection(collection).aggregate(query).toArray()
  return ret
}

const executeFind = async (query) => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true })
  const db = await client.db(database)
  const ret = await db.collection(collection).find(query).toArray()
  return ret
}
// 18580 : cityName
// 29546 : cityName, stateCode

router.get('/', async (req, res) => {
  const group1 = {
    $group: {
      '_id': { city: '$cityName', state: '$stateCode' },
      count: {$sum: 1},
    }
  }

  const project1 = {
    $project: {
      cityName: 1,
      stateCode: 1,
    }
  }
  
  const q = [
    group1
  ]
  const ret = await executeAggregate(q)
  // res.send(JSON.stringify({rows: ret.length}))
  res.send(JSON.stringify(ret))
  // res.send('done')
})

export default router
