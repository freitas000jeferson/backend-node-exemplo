const usersService = require('./users');
const authService = require('./auth');
const accessTokenService = require('./accessToken');
const actorsService = require('./actors');
const categoriesService = require('./categories');
const directorsService = require('./directors');
const midiasService = require('./midias');
const moviesService = require('./movies');
const notesService = require('./notes');
const ratesService = require('./rates');
const typemidiasService = require('./typemidias');
const writersService = require('./writers');

const writerMovieService = require('./writer_movie');
const actorMovieService = require('./actor_movie');
const directorMovieService = require('./director_movie');
const categoryMovieService = require('./category_movie');

module.exports = {
  usersService,
  authService,
  accessTokenService,
  actorsService,
  categoriesService,
  directorsService,
  midiasService,
  moviesService,
  notesService,
  ratesService,
  typemidiasService,
  writersService,
  writerMovieService,
  actorMovieService,
  directorMovieService,
  categoryMovieService,
};
