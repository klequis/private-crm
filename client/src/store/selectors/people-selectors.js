// eslint-disable-next-line
import { yellow } from 'logger'

export const getAllPeople = (state) => {
  const r = state.people || []
  return r
}

export const getPersonById = (state, personId) => {
  return state.people.find(e => e._id === personId)
}

export const getPeopleForUserId = (state, id) => {
  const r = state.people.filter(e => e.userId === id)
  return r[0]
}


// export const getOneEvent = (state, _id) => {
//   const event = state.events.filter(e => e._id === _id)
//   return event[0]
// }
