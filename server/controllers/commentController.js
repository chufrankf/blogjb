const Comments = require('../models/commentModel');
const Posts = require('../models/postModel');

function createComment(postId, body, callback) {
  const comment = new Comments(body);
  return comment
    .save()
    .then(() => {
      Posts
        .updateOne(
          { _id: postId },
          { $push: { comments: comment } },
          callback,
        );
    })
    .catch((error) => {
      callback(error, null);
    });
}

function deleteComment(id, callback) {
  return Comments
    .findByIdAndDelete(id)
    .exec(callback);
}

function updateComment(id, body, callback) {
  return Comments
    .updateOne({ _id: id }, body, { runValidators: true }, callback);
}

module.exports = {
  createComment,
  updateComment,
  deleteComment,
};
