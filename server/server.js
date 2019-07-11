const express = require('express');
const nextjs = require('next');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const apiRoutes = require('./routes');
const swaggerDocument = require('./swagger.json');
const logger = require('./helpers/logger');

// Setup Express
const server = express();

// TODO: Remove when connected to authentication
server.use('/', (req, res, next) => {
  req.user = 'tempuser';
  next();
});

// Setup API routes
server.use(bodyParser.json());
server.use(cors());
server.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.use('/api', apiRoutes);

// Setup DB
mongoose.connect(config.mongo.url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', error => logger.error(`(server.js line 21) MongoDB connection for url ${config.mongo.url} error ${error}`));
db.once('open', () => logger.info(`Successfully connected to ${config.mongo.url}`));

// Setup Next
const dev = config.env !== 'production';
const app = nextjs({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  server.get('/newpost', (req, res) => app.render(req, res, '/newpost'));
  server.get('*', (req, res) => handle(req, res));

  server.listen(9001, (error) => {
    if (error) throw error;
    logger.info(`App ready on http://localhost:${9001}`);
    logger.info(`Swagger ready on http://localhost:${9001}/swagger`);
  });
});
