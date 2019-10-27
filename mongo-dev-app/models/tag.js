import mongoose from 'mongoose'

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
  },
})

let Tag = mongoose.model('Tag', tagSchema)


export default Tag
