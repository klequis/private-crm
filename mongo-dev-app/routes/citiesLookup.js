import express from 'express'
import { red, yellow } from '../logger'

const router = express.Router()
const MongoClient = require('mongodb').MongoClient
const database = 'EventsDev'
const collection = 'cities'

const executeAggregate = async (query) => {
  const url = 'mongodb://localhost:27017'
  const client = await MongoClient.connect(url, { useNewUrlParser: true })
  const db = await client.db(database)
  const ret = await db.collection(collection).aggregate(query).toArray()
  return ret
}


router.get('/:startsWith', async (req, res) => {
  const startsWith = req.params.startsWith
  yellow('startsWith', startsWith)
  
  const re = new RegExp(`^${startsWith}`)
  const match1 = {
    $match: { 'cityName': { $regex: re , $options: 'im' } }
  }
  const project1 = {
    $project: {
      _id: 1,
      postalString: 1,
      searchString: { $concat: [ '$cityName', ', ', '$stateName', ' ', '$postalCode']}    
    }
  }
  const q = [
    match1,
    project1,
  ]
  const ret = await executeAggregate(q)
  res.send(JSON.stringify({ret}))
})

export default router
