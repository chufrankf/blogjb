const express = require('express');
const routePosts = require('./routePosts');
const routeComments = require('./routeComments');
const logger = require('../helpers/logger');

const router = express.Router();

// Log all requests
router.use((req, res, next) => {
  logger.info(`(routes/index.js line 10) API router hit with ${req.method} - ${req.url}`);
  next();
});

// Handle errors
router.use((err, req, res, next) => {
  logger.error(`(routes/index.js line 16) Exception thrown running request ${req.method} - ${req.url}. ${err}`);
  res.status(500).send(err);
  next();
});

// Attach endpoints
router.use('/post', routePosts);
router.use('/comment', routeComments);

module.exports = router;
