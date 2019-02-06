import express from 'express'
import { find } from '../db'
import { yellow } from '../logger'

const router = express.Router()

router.get('/', async (req, res) => {
  const searchTerm = req.query.searchTerm.substr(1).slice(0, -1)
  let events=undefined

  try {
    if (req.query.searchTerm.trim() === '""') {
      events = await find('events',
      {
        'dates.endDateTime': { $gt: new Date().toISOString() }
      })
    } else {
      events = await find('events',
      {
        $text: { $search: searchTerm, $caseSensitive: false },
        'dates.endDateTime': { $gt: new Date().toISOString() }
      })
    }
    res.send(events)
  } catch (e) {
    res.status(400).send(e)
  }
  
})

export default router
