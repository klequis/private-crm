ch# Events data


```js
$ mongo
$ use EventsDEv
$ db.events.drop()
```
ctrl+c to exit the mongo shell
```js
$ cd yourDir/events/doc-and-admin/data-collections
$ mongoimport --db EventsDev --collection events --file events-collection.json
```
```js
$ mongo
$ use EventsDEv
$ db.events.createIndex( {title: "text", category: "text", tags: "text", venueName: "text", organization: "text", cityName: "text", stateCode: "text"});
```
