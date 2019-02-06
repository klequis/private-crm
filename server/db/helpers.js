import { ObjectID } from  'mongodb'
import { omit } from 'ramda'
import { yellow, redf } from '../logger'

export const isValidObjectID = (id) => {
  return  ObjectID.isValid(id)
}

export const objectIdFromHexString = (hexId) => {
  try {
    return ObjectID.createFromHexString(hexId)
  }
  catch (e) {
    redf('ERROR /db/helpers.js.objectidFromHexString', e)
  }
}

export const getObjectId = (id) => {
  return typeof id === 'object' ? id : objectIdFromHexString(id)
}

export const removeIdProp = (obj) => {
  return omit(['_id'], obj)
}

export default { objectIdFromHexString }
