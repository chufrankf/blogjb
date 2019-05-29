const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const commentSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
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
});

module.exports = model('Comment', commentSchema);
