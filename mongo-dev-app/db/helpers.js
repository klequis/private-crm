import { ObjectID } from  'mongodb'
import { omit } from 'ramda'
import { yellow, redf } from '../logger';

const isValidObjectID = (id) => {
  // yellow('id', id)
  const isValid = ObjectID.isValid(id)
  // yellow('isValid', isValid)

  return isValid
}

export const objectIdFromHexString = (hexId) => {
  // yellow('hexId', hexId)
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
