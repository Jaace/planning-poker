const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: process.env.PRISMA_GENERATED,
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;
