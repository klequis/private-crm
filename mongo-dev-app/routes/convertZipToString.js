import express from 'express'
import { red, yellow } from '../logger'

const MongoClient = require('mongodb').MongoClient

const router = express.Router()

const database = 'EventsDev'
const collection = 'cities'
const url = 'mongodb://localhost:27017'

router.get('/', async (req, res) => {
  let updated = 0
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
    const db = await client.db(database)
    const ret = await db.collection(collection).find({}).forEach(x => {
      db.collection(collection).update(
        { _id: x._id },
        { $set: { postalCode: x.postalCode.toString() } }
      )
      updated++
      console.log('updated', updated)
    })
    res.send(`${updated} records updated`)
  }
  catch (e) {
    red('convertZipToString', e)
  }
  
})

export default router