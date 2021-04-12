module.exports = {
  development: {
 
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '12345',
      database: 'postgres',
    }
  },
  test: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '12345',
      database: 'postgres'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '12345',
      database: 'postgres'
    }
  },
};
