const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const config = require('./config');
const apiRoutes = require('./routes');
const swaggerDocument = require('./swagger.json');
const logger = require('./helpers/logger');


// Setup Express
const server = express();

// Setup API routes
server.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.use('/api', apiRoutes);

// Setup DB
mongoose.connect(config.mongo.url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', error => logger.error(`(server.js line 21) MongoDB connection for url ${config.mongo.url} error ${error}`));
db.once('open', () => logger.info(`Successfully connected to ${config.mongo.url}`));

// Setup Next
const dev = config.env !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  server.get('*', (req, res) => handle(req, res));

  server.listen(9001, (error) => {
    if (error) throw error;
    logger.info(`App ready on http://localhost:${9001}`);
    logger.info(`Swagger ready on http://localhost:${9001}/swagger`);
  });
});
