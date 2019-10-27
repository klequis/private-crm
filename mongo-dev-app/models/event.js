import mongoose from 'mongoose'

let phoneSchema = new mongoose.Schema({
  phoneType: {
    type: String,
    enum: ['Home', 'Work', 'Mobile']
  },
  phoneNumber: {
    type: String
  }
})

const eventSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  free: {
    type: Boolean,
  },
  endDateTime: {
    type: Date,
  },
  imageUrl: {
    type: String,
  },
  linkToUrl: {
    type: String,
  },
  organization: {
    type: String,
  },
  price: {
    type: Number,
  },
  startDateTime: {
    type: Date,
  },
  tags: [],
  title: {
    type: String,
  },
  venue: {
    type: String,
  },
})

let Event = mongoose.model('Event', eventSchema)


export default Event
