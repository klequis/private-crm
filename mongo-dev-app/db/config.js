import { red, yellow, redf, greenf } from '../logger'
require('dotenv').load()

const nodeEnv = process.env.NODE_ENV
greenf('NODE_ENV', nodeEnv)

export const dbName = (() => {
  if (nodeEnv === 'development') {
    return process.env.DB_NAME_DEV
  } else if (nodeEnv === 'test') {
    return process.env.DB_NAME_TEST
  } else if (nodeEnv === 'production') {
    return process.env.DB_NAME_PROD
  }
})()
greenf('database', dbName)

export const mongoUrl = (() => {
  if (nodeEnv === 'development') {
    return process.env.MONGODB_URL_DEV
  } else if (nodeEnv === 'test') {
    return process.env.MONGODB_URL_TEST
  } else if (nodeEnv === 'production') {
    return process.env.MONGODB_URL_PROD
  }
})()
greenf('mongoUrl', mongoUrl)

