import express from 'express'
import { omit, merge } from 'ramda'
/* User */
import { find, findById, insertOne, findOneAndDelete, findOneAndUpdate } from '../db'
/* Dev */
import { red, yellow } from '../logger'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const event = req.body
    const postalCode_id = event.postalCode_id
    const postalData = await findById(
      'postalCodes',
      postalCode_id,
      { cityName: 1, postalCode: 1, stateCode: 1, _id: 0 }
    )
    // Remove existing postCode and and merge
    const a = omit(['postalCode_id'], event)
    const b = merge(a, postalData.data[0])
    const inserted = await insertOne(
      'events',
      b
    )
    res.send(inserted)
  } catch (e) {
    red('error', e)
    res.status(400).send(e)
  }
})

router.get('/', async (req, res) => {
  try {
    const events = await find('events', {})
    res.send(events)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    let event = await findById('events', id)
    if (!event) {
      return res.status(404).send()
    }
    res.send(event)

  } catch (e) {
    res.status(400).send(e)
  }
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id

  try {
    let event = await findOneAndDelete('events', id)
    if (!event) {
      return res.status(404).send()
    }
    res.send(event)
  } catch (e) {
    res.status(400).send()
  }
})

router.patch('/:id', async (req, res) => {

  try {
    const id = req.params.id
    const eventSent = req.body
    const eventToReturn = await findOneAndUpdate(
      'events',
      id,
      eventSent,
    )
    if (!eventToReturn) {
      return res.status(404).send()
    }
    res.send(eventToReturn)
  } catch (e) {
    red('catch', e)
    res.status(400).send()
  }

})

export default router
