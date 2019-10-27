/*
    Takes a javascript object or array of objects
    and writes to a file in JSON format.
*/

const fs = require('fs')

const data = [
  {
    _id: 0,
    items: [
      { item_id: 43, quantity: 2, price: 10 },
      { item_id: 2, quantity: 1, price: 240 }
    ]
  },
  {
    _id: 1,
    items: [
      { item_id: 23, quantity: 3, price: 110 },
      { item_id: 103, quantity: 4, price: 5 },
      { item_id: 38, quantity: 1, price: 300 }
    ]
  },
  {
     _id: 2,
     items: [
        { item_id: 4, quantity: 1, price: 23 }
     ]
  }
]

const jsonData = JSON.stringify(data)

fs.writeFile('filter-date.json', jsonData, function(err) {
  if (err) {
    console.log('ERROR writing file: ', err)
  }
})

