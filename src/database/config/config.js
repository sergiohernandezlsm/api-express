const environments = ['development', 'staging', 'production', 'test'];

module.exports = environments.reduce((result, value) => {
  return Object.assign({}, result, {
    [value]: {
      username: 'root',
      password: '',
      database: 'hello',
      host: '127.0.0.1',
      port: '3306',
      dialect: 'mysql',
    },
  });
}, {});
