'use strict';

const { forwardTo } = require('prisma-binding');

const Query = {
  sessions: forwardTo('db')
};

module.exports = Query;
