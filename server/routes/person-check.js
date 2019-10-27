import { hasProp } from '../lib/hasProp'
import { reject } from 'ramda'
/*
must exist

must be of type
- string
- number
- date
- url

one of
[this, that, other]

*/


// error { fieldName: string, message: string }
// const addressIsEmpty = (email) => {
//   return email.address === '' ? true: false
// }

// const removeEmptyAddresses = (email) => {
//   reject(addressIsEmpty, email)
// }

// const checkEmail = (person) => {
//   const { email } = person
//   if (email.length === 0) {
//     // delete it
//   }
//   // remove if address === ''
//   removeEmptyAddresses
// }

const areAllFieldsEmpty = (obj) => {

}

const validatePerson = (person) => {
  const errors = []
  if (!hasProp('firstName', person)) {
    errors.push({ field: 'firstName', message: 'A firstName is required'})
  }
  if (!hasProp('lastName', person)) {
    errors.push({ field: 'lastName', message: 'A firstName is required'})
  }
  if (!hasProp('lastName', person)) {
    errors.push({ field: 'lastName', message: 'A firstName is required'})
  }
  if (hasProp('email', person)) {
    if (person.email[0].address === '') {
      errors.push({ field: 'email', message: 'Email address should not be empty' })
    }
  }
  if (hasProp('phone', person)) {
    if (person.phone[0].number === '') {
      errors.push({ field: 'email', message: 'Email address should not be empty' })
    }
  }
  // if all address fields are empty then delete
  if (hasProp('address', person)) {
    if (person.address[0].streetAddress)
  }

}



/* maybe do this in the future */

const FieldTypes = {
  Text: 'text',
  Number: 'number',
  Date: 'date'
}

// Type 'text' is default and does not need to be specified
// Field 'required=false' is default

// const fields = [
//   {
//     name: 'firstName',
//     required: true,
//   },
//   {
//     name: 'lastName',
//     required: true,
//   },
//   {
//     name: 'company',
//   },
//   {
//     name: 'jobTitle'
//   }

// ]