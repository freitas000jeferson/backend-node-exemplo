const { users } = require('./users.routes');
const { auth } = require('./auth.routes');
const { admin } = require('./admin.routes');
const { actors } = require('./actors.routes');
const { categories } = require('./categories.routes');
const { directors } = require('./directors.routes');
const { movies } = require('./movies.routes');
const { notes } = require('./notes.routes');
const { rates } = require('./rates.routes');
const { typemidias } = require('./typemidias.routes');
const { writers } = require('./writers.routes');

module.exports = {
  users,
  auth,
  admin,
  actors,
  categories,
  directors,
  movies,
  notes,
  rates,
  typemidias,
  writers,
};
