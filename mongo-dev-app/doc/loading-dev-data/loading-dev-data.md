# Events Project
## Preparing the Dev Database

> Everything is case sensitive!

The easiest way to load data into the project is using MongoDB Compass. If you don't have Compass installed, here is a link: [MongoDB Compass](https://docs.mongodb.com/compass/master/install/)


## Get the collections

- Get the collections as JSON files
- Clone the [document-and-admin project](https://github.com/trivalleycoders-org/event-doc-and-admin)

The collection data is in /data-collections.

## Start MongoDB
- Start MongoDB from the terminal. The Linux command for this is below. If you are using Windows or Mac, consult the MongoDB documentation.
```js
$ sudo service mongod start
```

## Launch Compass
- When you launch Compass the connections settings should be as below.
- Adjust them as needed and then click CONNECT.

<img src='https://github.com/trivalleycoders-org/event-doc-and-admin/blob/master/doc/loading-dev-data/connect.png?raw=true' width="700" />


## Setting up the database


> You must create a database named 'EventsDev'. However, the screenshots will say EventsDev2 since I already have an EventsDev db.

- At the bottom of the left-hand nav, click the + sign

<img src='https://github.com/trivalleycoders-org/event-doc-and-admin/blob/master/doc/loading-dev-data/new-db.png?raw=true' />

- Fill-in the form as shown and press CREATE DATABASE

<img src='https://github.com/trivalleycoders-org/event-doc-and-admin/blob/master/doc/loading-dev-data/create-db-form.png?raw=true' />

- Click on the new database in the left-hand nav to open it.

> Remember, you will click on 'EventsDev', not 'EventsDev2'

<img src="https://github.com/trivalleycoders-org/event-doc-and-admin/blob/master/doc/loading-dev-data/click-on-new-db.png?raw=true" />

Your screen should look like this:

<img src="https://github.com/trivalleycoders-org/event-doc-and-admin/blob/master/doc/loading-dev-data/db-created.png?raw=true" />>

- Click the green CREATE COLLECTION button
- Fill in the form as shown

Your screen should now look like this

<img src='https://github.com/trivalleycoders-org/event-doc-and-admin/blob/master/doc/loading-dev-data/users-collection.png?raw=true' />

- Click CREATE COLLECTION

- Repeat the above step except this time the collection name is 'postalCodes'.

## Loading data
- Click on the events collection
- From the top menu, select Collection > Import data
- Use the Browse button to find the file /data-collections/events-collection.json
- Make sure the JSON button is selected and then click IMPORT

<img src="https://github.com/trivalleycoders-org/event-doc-and-admin/blob/master/doc/loading-dev-data/import-events.png?raw=true" />

- Repeat the above process for postalCodes using the file /data-collections/postalCodes.json
- Repeat the above process for users with the file /data-collections/users.json

> The postalCodes file is 41,000+ records and may take a while to import.

** Your done!**











