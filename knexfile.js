'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/dog_stuff'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
