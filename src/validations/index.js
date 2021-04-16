const { users } = require('./users.validation');
const { auth } = require('./auth.validation');
const { admin } = require('./admin.validation');
const { person } = require('./person.validation');
const { type } = require('./type.validation');
const { note } = require('./note.validation');
const { movies } = require('./movies.validation');
const { rates } = require('./rates.validation');

module.exports.validationSchemas = {
  users,
  auth,
  admin,
  person,
  type,
  note,
  movies,
  rates,
};
