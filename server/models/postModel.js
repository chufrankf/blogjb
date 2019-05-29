const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  visibility: {
    type: String,
    required: true,
    enum: ['Public', 'Friends', 'Private'],
    default: 'Public',
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: false,
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  }],
});

module.exports = model('Post', postSchema);
