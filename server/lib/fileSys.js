import { red } from '../logger'
const fs = require('fs')
const pify = require('pify')
const fsp = pify(fs)
// const path = require('path')

export const fileExists = async (fullFileName) => {
  try {
    await fsp.stat(fullFileName)
    return true
  }
  catch (err) {
    red('ERROR (fileSys.fileExists)', err)
    return false
  }
}

export const renameFile = async (oldName, newName) => {
  try {
    const d = await fsp.rename(oldName, newName)
    // console.log('data', d)
    return true
  }
  catch (err) {
    red('ERROR (fileSys.renameFile)', err)
    throw err
  }
}

export const dirExists = async (dirPath) => {
  try {
    await fsp.stat(dirPath)
    return true
  }
  catch (err) {
    // do not log an error
    // red('ERROR (fileSys.dirExists)', err)
    return false
  }
}

export const makeDir = async (dirName) => {
  try {
    const data = await fsp.mkdir(dirName)
    return true
  }
  catch (err) {
    red('ERROR (fileSys.makeDir)', err)
    return false
  }
}

const getFileExtension = (fullName) => {
  const len = fullName.length
  const lastDot = fullName.lastIndexOf('.')
  const extension = fullName.slice(lastDot + 1, len)
  return extension
}

const getFilePath = (fullName) => {
  const lastSlash = fullName.lastIndexOf('/')
  if (lastSlash === -1) {
    return ''
  }
  const path = fullName.slice(0, lastSlash)
  return path
}

const getFileName = (fullName) => {
  const lastSlash = fullName.lastIndexOf('/')
  const lastDot = fullName.lastIndexOf('.')

  const name = fullName.slice(lastSlash + 1, lastDot)
  return name
}

export const getFileParts = (fullName) => {
 try {
    return {
      path: getFilePath(fullName),
      name: getFileName(fullName),
      extension: getFileExtension(fullName)
    }
  }
  catch (err) {
    red('ERROR (fileSys.getFileParts)', err)
  }
}

export const addTimestampToFileName = (fullName) => {
  try {
    const a = getFileParts(fullName)
    if (a.path === '') {
      return `${a.name}-${Date.now()}.${a.extension}`
    } else {
      return `${a.path}/${a.name}-${Date.now()}.${a.extension}`
    }
  }
  catch (err) {
    red('ERROR (fileSys.addTimestampToFileName)', err)
  }
}

export const readFile = async (fullFileName) => {
  try {
    return await fsp.readFile(fullFileName)
  }
  catch (err) {
    red('ERROR (fileSys.readFile)', err)
  }
}

export const unlinkFile = async (fullFileName) => {
  try {
    return await fsp.unlink(fullFileName)
  }
  catch (err) {
    red('ERROR (fileSys.unlinkFile)', err)
  }
}