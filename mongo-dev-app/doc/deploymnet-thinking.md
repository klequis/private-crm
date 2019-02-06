# Cloud Provider
Choices are
- Amazon (out images are already in S3)
- Azure
- Google

Difference seems to be on which parts of the world are served. I don't think this is an issue for us as I'm guessing/assuming they all have excellent converage in the US. Cost is more important.

**do a cost calc**
Per server hourly cost: approx $9.34/hour
Number of servers
Total hours
Backup data ? 2.50/GB/mo




# Pricing
# Free level



# Instance Sizes
Name    RAM     Storage Backup Hourly
M0      shared  512MB   No     free
M2      shared  2GB     No     0.012/h4
M5      Shared  5GB     No       0.035/hr
M10     Shared  10GB    Yes
Notes
- Form M10 & up you get 1GB backup free and then #2.50/GB/mo
Many more levels but we are hopfully in M0


Security
IP address must be white listed
Need a MongoDB user login

username: events
passord: z9AjZQTOCjLQZIJn


# Use

## Connect (ubuntu)
mongo "mongodb+srv://eventscluster-00-xpo0c.mongodb.net/test" --username events

## Import Data
### Events
mongoimport --host EventsCluster-00-shard-0/eventscluster-00-shard-00-00-xpo0c.mongodb.net:27017,eventscluster-00-shard-00-01-xpo0c.mongodb.net:27017,eventscluster-00-shard-00-02-xpo0c.mongodb.net:27017 --ssl --username events --password z9AjZQTOCjLQZIJn --authenticationDatabase admin --db Events --collection events --type json --file 20180914.events-collection.json

### Users
mongoimport --host EventsCluster-00-shard-0/eventscluster-00-shard-00-00-xpo0c.mongodb.net:27017,eventscluster-00-shard-00-01-xpo0c.mongodb.net:27017,eventscluster-00-shard-00-02-xpo0c.mongodb.net:27017 --ssl --username events --password z9AjZQTOCjLQZIJn --authenticationDatabase admin --db Events --collection users --type json --file users.json

### Postal Codes
mongoimport --host EventsCluster-00-shard-0/eventscluster-00-shard-00-00-xpo0c.mongodb.net:27017,eventscluster-00-shard-00-01-xpo0c.mongodb.net:27017,eventscluster-00-shard-00-02-xpo0c.mongodb.net:27017 --ssl --username events --password z9AjZQTOCjLQZIJn --authenticationDatabase admin --db Events --collection postalCodes --type json --file postalCodes.json






# To Do List
- rename bucket for user images from photo-app-tvc to events-images-tvc
- create bucket for images/media that are part of the application events-media-tvc



# Layout
- max width 1100px
