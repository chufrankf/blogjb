require('dotenv').config();

module.exports = {
  mongo: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/blogjbdev',
  },
  port: process.env.PORT || 9001,
  env: process.env.NODE_ENV || 'development',
};
