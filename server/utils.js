const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const secret = require('./config').secret

export const validPassword = (password, user) => {
  const hash = crypto.pbkdf2Sync(password, user.salt, 10000, 512, 'sha512').toString('hex')
  return hash === user.hash
}

export const setPassword = (password) => {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
  return { hash, salt }
}

export const generateJWT = (id, email) => {
  const today = new Date()
  let exp = new Date(today)
  exp.setDate(today.getDate() + 60)

  return jwt.sign({
    id,
    email,
    exp: parseInt(exp.getTime() / 1000),
  }, secret)
}