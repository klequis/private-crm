import express from 'express'
import { pick } from 'ramda'
import formidable from 'formidable'
import path from 'path'
import fs from 'fs'
import S3 from 'aws-sdk/clients/s3'
import { red, blue, yellow } from '../logger'
import {
  renameFile,
  readFile,
} from '../lib/fileSys'

const router = express.Router()
require('dotenv').config()
const bucketName = process.env.BUCKET_NAME
const bucketRegion = process.env.BUCKET_REGION
const s3 = new S3({ apiVersion: '2006-03-01', region: bucketRegion })

const getDateAndTime = () => {
  var today = new Date()
  var dd = today.getDate()
  var mm = today.getMonth() + 1 // January is 0!
  var yyyy = today.getFullYear()

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  today = mm + '-' + dd + '-' + yyyy + '-' + today.getTime()
  return today
}

const checkDirectoryExists = (dir) => {
  try {
    fs.statSync(dir)
  } catch (e) {
    fs.mkdirSync(dir)
  }
}

const dummy = {
  Key: 'foal-02-03-2019-1549217663163.jpg',
  Location: 'https://photo-app-tvc.s3.amazonaws.com/foal-02-03-2019-1549217663163.jpg',
}

router.post('/', async (req, res) => {
  try {
    const form = new formidable.IncomingForm()

    let newFileName = undefined
    let dirName = 'uploads'

    form.multiples = true
    form.uploadDir = path.join(__dirname, `../${dirName}`)
    checkDirectoryExists(dirName)
    // yellow('form', form)

    form.on('file', async (field, file) => {

      const fname = file.name // white-horse.jpg
      yellow('fname', fname)

      const newName = fname.substring(0, fname.lastIndexOf('.')) + '-' + getDateAndTime() + fname.substring(fname.lastIndexOf('.')) // white-horse-02-03-2019-1549211227387.jpg
      yellow('newName', newName)

      newFileName = path.join(form.uploadDir, newName) // /home/klequis/dev/wk/events/server/uploads/white-horse-02-03-2019-1549211281177.jpg
      yellow('newFileName', newFileName)

      await renameFile(file.path, newFileName)
      // res.send(dummy)



      const data = await readFile(newFileName)
      yellow('data', data)

      //fs.rename(file.path, newFileName, function () {
        // fs.readFile(newFileName, (err, data) => {
          // if (err) throw err



          // const s3 = new S3()
          const params = { Bucket: bucketName, Key: newName, Body: data }
          s3.upload(params, function (err, data) {
            console.log('done', err, data)
            const ret = pick(['Location', 'Key'], data)
            res.send(ret)
          })
        }) // form.on




        // fs.unlink(newFileName, (err) => {
        //   if (err) {
        //     red('error while deleting', err)
        //   }
        //   // console.log('Successfully deleted ', newFileName)
        //   // })
        //   // })
        // })




    form.on('error', function (err) {
      red('** form.on.error', err)
      // console.log('An error has occured: \n' + err)
    })
    form.on('end', function () {
      // red('** form.on.end')
      // res.status(200).send({"message": "done"})
    })
    form.parse(req)
  } catch (e) {
    // red('events.route: post', e)
    red('error', e)
    res.status(400).send(e)
  }
})

export default router
