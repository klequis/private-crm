/*
    To run from command line
    $ mongo filter-data-01.js
*/

db = new Mongo().getDB('docExamples');

db.aggFilter.remove({});

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

db.aggFilter.insert(data);
// db.issues.createIndex({ status: 1 });
// db.issues.createIndex({ owner: 1 });
// db.issues.createIndex({ created: 1 });