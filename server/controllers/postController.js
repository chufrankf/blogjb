const Posts = require('../models/postModel');

function getPost(id, callback) {
  return Posts
    .findById(id)
    .populate('Comment')
    .exec(callback);
}

function getPosts(callback) {
  return Posts
    .find({})
    .populate('Comment')
    .exec(callback);
}

function deletePost(id, callback) {
  return Posts
    .findByIdAndDelete(id)
    .exec(callback);
}

function createPost(body, callback) {
  return Posts
    .create(body, callback);
}

function updatePost(id, body, user, callback) {
  return Posts
    .updateOne({ _id: id }, body, { runValidators: true }, callback);
}

module.exports = {
  getPost,
  getPosts,
  deletePost,
  createPost,
  updatePost,
};
