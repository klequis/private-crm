import express from 'express'
// import fetch from 'node-fetch'
/* Dev */

import { dbName, mongoUrl } from '../db/config'
import { red, yellow } from '../logger'

const router = express.Router()
const MongoClient = require('mongodb').MongoClient
// const db = 'EventsDev'
const collection = 'postalCodes'
// const url = 'mongodb://localhost:27017'


const executeAggregate = async (query) => {
  console.log('mongourl: ', mongoUrl)
  const client = await MongoClient.connect(mongoUrl, { useNewUrlParser: true })
  const db = await client.db(dbName)
  const ret = await db.collection(collection).aggregate(query).toArray()
  return { data: ret, meta: {} }
}


router.get('/postal-code/:startsWith', async (req, res) => {
  const startsWith = req.params.startsWith
  const re = new RegExp(`^${startsWith}`)
  const match1 = {
    $match: { 'postalCode': { $regex: re , $options: 'im' } }
  }

  const project1 = {
    $project: {
      postalCode: 1,
      cityName: 1,
      stateCode: 1,
      searchString: {
        $cond: { if: { $ifNull: ['$stateName', false] },
          then: { $concat: [ '$postalCode', ' ', '$cityName', ' ', '$stateName' ] },
          else: { $concat: [ '$postalCode', ' ', '$cityName' ] } }
      }
    }
  }

  const q = [
    match1,
    project1,
  ]
  const ret = await executeAggregate(q)
  console.log('ret: ', ret)

  res.send(JSON.stringify(ret))
})

/* Cities
    - not in use but may be in future
router.get('/cities/:startsWith', async (req, res) => {
  const startsWith = req.params.startsWith
  // yellow('startsWith', startsWith)

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
  // yellow('ret', ret)
  res.send(JSON.stringify(ret))
})
*/
export default router
