require("dotenv").config();
const createServer = require("./createServer");

const server = createServer();
server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  info => {
    console.log(`Server is now running on http://localhost:${info.port}`);
  }
);
