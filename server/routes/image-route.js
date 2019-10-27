import express from 'express'
import { pick } from 'ramda'
import formidable from 'formidable'
import path from 'path'
import fs from 'fs'
import S3 from 'aws-sdk/clients/s3'
import { red, blue, yellow } from '../logger'
import {
  addTimestampToFileName,
  dirExists,
  makeDir,
  readFile,
  renameFile,
  unlinkFile,
} from '../lib/fileSys'
import {
  isUrl,
} from '../lib/isUrl'
import {
  hasProp,
} from '../lib/hasProp'

const router = express.Router()
require('dotenv').config()
const bucketName = process.env.BUCKET_NAME
const bucketRegion = process.env.BUCKET_REGION
const s3 = new S3({ apiVersion: '2006-03-01', region: bucketRegion })
const errorTag = 'Error (image-route: form.on): '


const dummy = {
  Key: 'foal-02-03-2019-1549217663163.jpg',
  Location: 'https://photo-app-tvc.s3.amazonaws.com/foal-02-03-2019-1549217663163.jpg',
}

const checkData = (obj) => {
  if (hasProp('Key', obj) && hasProp('Location', obj)) {
    if ((obj.Key.length > 0) && isUrl(obj.Location)) {
      return true
    }
  } else {
    return false
  }
}

router.post('/', async (req, res) => {
  try {
    const form = new formidable.IncomingForm()
    let newFileName = undefined
    let dirName = 'uploads'
    form.multiples = true
    form.uploadDir = path.join(__dirname, `../${dirName}`)
    form.parse(req)
    if (!await dirExists(dirName)) {
      await makeDir(dirName)
    }
    form.on('file', async (field, file) => {
      const fname = file.name // white-horse.jpg
      const newName = addTimestampToFileName(fname)
      newFileName = path.join(form.uploadDir, newName)
      await renameFile(file.path, newFileName)
      const data = await readFile(newFileName)
      const params = { Bucket: bucketName, Key: newName, Body: data }
      const upload = await s3.upload(params).promise()
      if (!checkData) {
        res.status(400).send({ error: `${errorTag} Unknown returned data ${upload}`})
      }
      const ret = pick(['Location', 'Key'], upload)
      unlinkFile(newFileName)
      res.send(ret)
    })
    form.on('error', function (err) {
      red('Error (image-route: form.on)', err)
    })

  } catch (e) {
    // eslint-disable-next-line
    red("ERROR (image-route.router.post('/')", e)
    res.status(400).send(e)
  }
})

export default router
