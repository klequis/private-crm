import { append, insert, merge, remove } from 'ramda'
import {
  peopleCreateOneKey,
  peopleDeleteOneKey,
  peopleForUserReadKey,
  peopleReadKey,
  peopleUpdateOneKey,
  editPersonIdSetKey,
  editPersonIdUnsetKey,
} from '../actions/people-actions'

/* Dev */
// eslint-disable-next-line
import { blue, red } from 'logger'

const indexOfObjectInArray = (arr, _id) => {
  return arr.findIndex(i => i._id === _id)
}

const updatePerson = (state, newPerson) => {
  const idx = indexOfObjectInArray(state, newPerson._id)
  const oldPerson = state[idx]
  const updatedPerson = merge(oldPerson, newPerson)
  const stateRemoved = remove(idx, 1, state)
  const newState = insert(idx, updatedPerson, stateRemoved)
  return newState
}

const deletePerson = (state, payload) => {
  const _id = payload[0]._id
  const idx = indexOfObjectInArray(state, _id)
  const newState = remove(idx, 1, state)
  return newState
}

export const people = (state = [], { type, payload }) => {

  try {
    switch (type) {
      case peopleCreateOneKey:
        return append(payload.person[0], state)
      case peopleForUserReadKey:
      case peopleReadKey:
        return payload.people
      case peopleUpdateOneKey:
        return updatePerson(state, payload.person[0])
      case peopleDeleteOneKey:
        return deletePerson(state, payload.person)
      default:
        return state
    }
  }
  catch (e) {
    red(`reducers.people ${type}`, e)
  }
}

export const peopleUi = (state = {}, { type, payload }) => {
  switch (type) {
    case editPersonIdSetKey:
      return merge(state, { edit_id: payload._id })
    case editPersonIdUnsetKey:
      return ''
    default:
      return state
  }
}

