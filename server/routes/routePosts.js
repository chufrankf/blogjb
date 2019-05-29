const express = require('express');
const posts = require('../controllers/postController');

const router = express.Router();

router.get('/', (req, res, next) => {
  posts.getPosts((error, data) => {
    if (error) next(error);
    else res.json(data);
  });
});

router.get('/:id', (req, res, next) => {
  posts.getPost(req.params.id, (error, data) => {
    if (error) next(error);
    else res.json(data);
  });
});

router.post('/', (req, res, next) => {
  const post = req.body;
  post.author = req.user;

  posts.createPost(post, (error, data) => {
    if (error) next(error);
    else res.json(data);
  });
});

router.put('/:id', (req, res, next) => {
  const post = req.body;
  post.updatedAt = Date.now();
  post.author = req.user;

  posts.updatePost(req.params.id, post, (error, data) => {
    if (error) next(error);
    else res.json(data);
  });
});

router.delete('/:id', (req, res, next) => {
  posts.deletePost(req.params.id, (error, data) => {
    if (error) next(error);
    else res.json(data);
  });
});

module.exports = router;
