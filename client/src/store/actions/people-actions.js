import { createRequestThunk, logError } from './action-helpers'
import api from 'api'
import { snackbarSet } from './snackbar-actions'
import { pageMessage } from './page-message-actions'

/* Dev */
// eslint-disable-next-line
import { orange, red } from 'logger'

// Create
export const peopleCreateOneKey = 'peopleCreateOneKey'
export const peopleCreateOneRequestKey = 'peopleCreateOneRequestKey'

export const peopleCreateOne = (person) => {
  return ({
    type: peopleCreateOneKey,
    payload: { person },
  })
}

export const peopleCreateOneRequest = createRequestThunk({
  request: api.people.createOne,
  key: peopleCreateOneRequestKey,
  success: [peopleCreateOne, () => snackbarSet('Person added', 'success')],
  failure: [() => snackbarSet('Couldn\'t add person', 'warn')],
})

// Read
export const peopleForUserReadKey = 'peopleForUserReadKey'
export const peopleForUserReadRequestKey = 'peopleForUserReadRequestKey'

export const peopleForUserRead = (people) => {
  return ({
    type: peopleForUserReadKey,
    payload: { people },
  })
}

export const peopleForUserReadRequest = createRequestThunk({
  request: api.people.forUserRead,
  key: peopleForUserReadRequestKey,
  success: [peopleForUserRead, () => snackbarSet('People for user retrieved.', 'success'), () => pageMessage('')],
  failure: [(error) => snackbarSet('Could not get people', 'error')]
})

// Read
export const peopleReadKey = 'peopleReadKey'
export const peopleReadRequestKey = 'peopleReadRequestKey'

export const peopleRead = (people) => {
  return ({
    type: peopleReadKey,
    payload: { people },
  })
}

export const peopleReadRequest = createRequestThunk({
  request: api.people.read,
  key: peopleReadRequestKey,
  success: [peopleRead, () => snackbarSet('People loaded', 'success'), () => pageMessage('')],
  failure: [(error) => snackbarSet('Could not get people', 'error'), (error) => red('request failed', error)]
})

// Patch
export const peopleUpdateOneKey = 'peopleUpdateOneKey'
export const peopleUpdateOneRequestKey = 'peopleUpdateOneRequestKey'

const peopleUpdateOne = (person) => {
  return ({
    type: peopleUpdateOneKey,
    payload: { person },
  })
}

export const peopleUpdateOneRequest = createRequestThunk({
  request: api.people.patch,
  key: peopleUpdateOneRequestKey,
  success: [peopleUpdateOne, peopleReadRequest, () => snackbarSet('People updated', 'success')],
  failure: [error => logError(`Could not update person: ${error}`, 'error')]
})

// Delete
export const peopleDeleteOneKey = 'peopleDeleteOneKey'
export const peopleDeleteOneRequestKey = 'peopleDeleteOneRequestKey'

const peopleDeleteOne = (person) => {
  return ({
    type: peopleDeleteOneKey,
    payload: { person },
  })
}

export const peopleDeleteOneRequest = createRequestThunk({
  request: api.people.delete,
  key: peopleDeleteOneRequestKey,
  success: [peopleDeleteOne, () => snackbarSet('Person deleted', 'success')],
  failure: [error => snackbarSet(`Could not delete person: ${error}`)]
})

// PeopleUi
export const editPersonIdSetKey = 'editPersonIdSetKey'
export const editPersonIdUnsetKey = 'editPersonIdUnsetKey'

export const editPersonIdSet = (_id) => {
  return ({
    type: editPersonIdSetKey,
    payload: { _id }
  })
}

export const editPersonIdUnset = () => {
  return ({
    type: editPersonIdUnsetKey,
  })
}