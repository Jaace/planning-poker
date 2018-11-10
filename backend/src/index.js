'use strict';

require('dotenv').config();
const createServer = require('./create-server');

const server = createServer();
server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  info => {
    // eslint-disable-next-line no-console
    console.info(`Server is now running on http://localhost:${info.port}`);
  }
);
