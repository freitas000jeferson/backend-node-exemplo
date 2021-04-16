const { users } = require('./users.routes');
const { auth } = require('./auth.routes');
const { admin } = require('./admin.routes');
const { actors } = require('./actors.routes');

module.exports = {
  users,
  auth,
  admin,
  actors,
};
