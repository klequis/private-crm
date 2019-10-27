/* Possible solutions to the repeated db code
   - last two examples: https://stackoverflow.com/questions/24621940/how-to-properly-reuse-connection-to-mongodb-across-nodejs-application-and-module/24634454#24634454
   - another solution but radically differnet approach: https://thecodebarbarian.com/managing-connections-with-the-mongodb-node-driver.html
   - must read: https://www.mongodb.com/blog/post/the-modern-application-stack-part-2-using-mongodb-with-nodejs
   - ** looks like a good answer: https://techsparx.com/nodejs/async/asynchronous-mongodb.html

*/

import { dbName, mongoUrl } from './config'
import { objectIdFromHexString, removeIdProp, getObjectId } from './helpers'
/* Dev */
import { yellow, redf } from '../logger'

const MongoClient = require('mongodb').MongoClient

const returnError = (e) => {
  return { data: [], meta: { error: e.message }}

}

export const dropCollection = async (collection) => {
  try {
    const client = await MongoClient.connect(mongoUrl)
    const db = await client.db(dbName)
    const ret = await db.collection(collection).drop()
    return ret
  }
  catch (e) {
    if (e.message = 'ns not found') {
      return true
    } else {
      redf('ERROR: dbFunctions.dropCollection', e.message)
      return returnError(e)
    }

  }
}

export const find = async (collection, query = {}, project = {}) => {
  try {
    const client = await MongoClient.connect(mongoUrl)
    const db = await client.db(dbName)
    const ret = await db.collection(collection).find(query).project(project).toArray()
    return { data: ret, meta: {} }
  }
  catch (e) {
    redf('ERROR: dbFunctions.find', e.message)
    return returnError(e)
  }
}

export const search = async (collection, searchTerm, project) => {
  try {
    const client = await MongoClient.connect(mongoUrl)
    const db = await client.db(dbName)
    const ret = await db.collection(collection).find({ $text: { $search: searchTerm }}).project(project).sort({ score: { $meta: 'textScore' } }).toArray()
    return { data: ret, meta: {} }
  }
  catch (e) {
    redf('ERROR: dbFunctions.search', e.message)
    return returnError(e)
  }
}


export const findById = async (collection, id, project = {}) => {
  try {
    const objId = getObjectId(id)
    const client = await MongoClient.connect(mongoUrl)
    const db = await client.db(dbName)
    const ret = await db.collection(collection).find({ _id: objId }).project(project).toArray()
    return { data: ret, meta: {} }
  }
  catch (e) {
    redf('ERROR: dbFunctions.findById', e.message)
    return returnError(e)
  }

}

export const findOneAndDelete = async (collection, id) => {
  try {
    const objId = getObjectId(id)
    const client = await MongoClient.connect(mongoUrl)
    const db = await client.db(dbName)
    const ret = await db.collection(collection).findOneAndDelete({ _id: objId })
    return { data: [ret.value], meta: {} }
  }
  catch (e) {
    redf('ERROR: dbFunctions.findOneAndDelete', e.message)
    return returnError(e)
  }
}

export const findOneAndUpdate = async ( collection, id, filter, returnOriginal = false ) => {
  try {
    // if the filter has the _id prop, remove it
    const cleanFilter = removeIdProp(filter)
    const objId = getObjectId(id)
    const client = await MongoClient.connect(mongoUrl)
    const db = await client.db(dbName)
    const ret = await db.collection(collection).findOneAndUpdate(
      { _id: objId},
      { $set: cleanFilter },
      { returnOriginal: returnOriginal }
    )
    return { data: [ret.value], meta: {} }
  }
  catch (e) {
    redf('ERROR: dbFunctions.findOneAndUpdate', e)
    return returnError(e)
  }
}

export const insertOne = async (collection, data) => {
  try {
    const client = await MongoClient.connect(mongoUrl)
    const db = await client.db(dbName)
    const ret = await db.collection(collection).insertOne(data)
    return { data: ret.ops, meta: { n: 1 } }
  }
  catch (e) {
    redf('ERROR: dbFunctions.insert', e.message)
    return returnError(e)
  }

}

export const insertMany = async (collection, data) => {
  try {
    const client = await MongoClient.connect(mongoUrl)
    const db = await client.db(dbName)
    const ret = await db.collection(collection).insertMany(data)
    return { data: ret.ops, meta: { n: 1 } }
  }
  catch (e) {
    redf('ERROR: dbFunctions.insertMany', e.message)
    return returnError(e)
  }
}