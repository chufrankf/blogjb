const express = require('express');
const comments = require('../controllers/commentController');

const router = express.Router();

router.post('/post/:postId', (req, res, next) => {
  const comment = req.body;
  comment.author = req.user;

  comments.createComment(req.params.postId, comment, (error, data) => {
    if (error) next(error);
    else res.json(data);
  });
});

router.put('/:id', (req, res, next) => {
  const comment = req.body;
  comment.updatedAt = Date.now();
  comment.author = req.user;

  comments.updateComment(req.params.id, req.body, (error, data) => {
    if (error) next(error);
    else res.json(data);
  });
});

router.delete('/:id', (req, res, next) => {
  comments.deleteComment(req.params.id, (error, data) => {
    if (error) next(error);
    else res.json(data);
  });
});

module.exports = router;
