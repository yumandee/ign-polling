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
    maxlength: [200, 'Please keep your description to 200 characters!']
  },
  options: {
    type: [{}],
    required: [true, 'A poll is not a poll without choices!']
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  expires: {
    type: Date,
  }

})

module.exports = mongoose.models.Poll || mongoose.model('Poll', PollSchema)