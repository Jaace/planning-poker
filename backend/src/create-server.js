'use strict';

const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/mutation');
const Query = require('./resolvers/query');
const db = require('./db');

// Create the GraphQL Yoga Server
const createServer = () =>
  new GraphQLServer({
    typeDefs: process.env.GRAPHQL_SCHEMA,
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });

module.exports = createServer;
