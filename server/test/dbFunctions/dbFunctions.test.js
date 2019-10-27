import 'babel-polyfill'
import { expect } from 'chai'
import { yellow, blue, green, red, greenf, redf } from '../../logger/'
import { people, person } from './fixture'
import {
  find,
  findById,
  findOneAndDelete,
  findOneAndUpdate,
  dropCollection,
  insertMany,
  insertOne,
} from '../../db'
require('dotenv').config()

const util = require('util')
const setTimeoutPromise = util.promisify(setTimeout)

const dropPeopleCollection = () => {
  try {
    dropCollection('people')
  }
  catch (e) {
    redf('ERROR: before', e)
  }
}
const dropAllCollections = () => {
  try {
    dropCollection('people')
    dropCollection('events')
    dropCollection('postalCodes')
  }
  catch (e) {
    redf('ERROR: before', e)
  }
}

before(() => {
  dropAllCollections()
})

after(() => {
  // dropAllCollections()
  if (!process.env.WATCH) {
    setTimeoutPromise(1900).then((value) => {
      process.exit(0)
    })
  }
})

describe.skip('dbFunctions', () => {
  before(() => {
    dropPeopleCollection()
  })

  // person id
  let pid

  it('should add more than one person', async () => {
    const insert = await insertMany('people', people)
    const data = insert.data
    expect(data.length).to.equal(4)
  })

  it('should find 4 people', async () => {
    const f = await find('people')
    const fdata = f.data
    expect(f.data.length).to.equal(4)
  })

  it('should add one person', async () => {
    const insert = await insertOne('people', person)
    const data = insert.data
    expect(data.length).to.equal(1)
    const p = data[0]
    pid = data[0]._id
    expect(p.first).to.equal('John')
  })

  it('should find by id', async () => {
    const f = await findById('people', pid)
    const data = f.data
    expect(data.length).to.equal(1)
    const p = data[0]
    expect(p.first).to.equal('John')
  })

  it('should find by id and update', async () => {
    const newData3 = { first: 'Bob', last: 'Bradcliff' }
    const update3 = await findOneAndUpdate('people', pid, newData3)
    const data3 = update3.data
    expect(data3.length).to.equal(1)
    const person3 = data3[0]
    expect(person3.first).to.equal('Bob')
    expect(person3.last).to.equal('Bradcliff')
  })

  it('should find by id and delete', async () => {
    const f = await findOneAndDelete('people', pid)
    const data = f.data
    expect(data.length).to.equal(1)
    const p = data[0]
    expect(p.first).to.equal('Bob')
  })
})
