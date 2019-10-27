import express from 'express'
/* User */
import characterNames from './starwars-names'
/* Dev */
import { red, yellow } from '../logger'

const router = express.Router()

router.get('/:startsWith', (req, res) => {
  const startsWith = req.params.startsWith.toLowerCase()

  try {
    const ret = characterNames.filter(n => {
        return n.toLowerCase().startsWith(startsWith)
      }
    )
    res.send({ data: ret, error: {}})
  } catch (e) {
    res.status(400).send(e)
  }
})


export default router
