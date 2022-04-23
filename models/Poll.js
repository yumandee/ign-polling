const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title required!'],
    trim: true,
    maxlength: [50, 'Title cannot be longer than 50 characters!']
  },
  description: {
    type: String,
    required: [true, 'Please provide a description!'],
    maxlength: [200, 'Please keep your desciprtion to 200 characters!']

  }
})

module.exports = mongoose.models.Poll || mongoose.model('Note', PollSchema)