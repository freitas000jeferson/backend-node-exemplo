const { StatusCodes } = require('http-status-codes');

const { movieRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

const actorMovieService = require('../actor_movie');
const actorsService = require('../actors');
const writerMovieService = require('../writer_movie');
const writersService = require('../writers');
const directorMovieService = require('../director_movie');
const directorsService = require('../directors');
const categoryMovieService = require('../category_movie');
const categoriesService = require('../categories');

module.exports.create = async (params) => {
  const movieExists = await movieRepository.get({ title: params.title });
  if (movieExists) {
    throw new ApplicationError(
      messages.alreadyExists('title'),
      StatusCodes.CONFLICT
    );
  }
  if (params.actors) {
    for await (const id of params.actors) {
      await actorsService.get(id);
    }
  }
  if (params.directors) {
    for await (const id of params.directors) {
      await directorsService.get(id);
    }
  }
  if (params.writers) {
    for await (const id of params.writers) {
      await writersService.get(id);
    }
  }
  if (params.categories) {
    for await (const id of params.categories) {
      await categoriesService.get(id);
    }
  }
  // console.log('aqui - 0');
  const movie = await movieRepository.create(params);
  // console.log('aqui - 1');
  if (params.actors) {
    for await (const key of params.actors) {
      await actorMovieService.create({ movieId: movie.id, actorId: key });
    }
  }
  // console.log('aqui - 2');
  if (params.directors) {
    for await (const key of params.directors) {
      await directorMovieService.create({ movieId: movie.id, directorId: key });
    }
  }
  // console.log('aqui - 3');
  if (params.writers) {
    for await (const key of params.writers) {
      await writerMovieService.create({ movieId: movie.id, writerId: key });
    }
  }
  // console.log('aqui - 4');
  if (params.categories) {
    for await (const key of params.categories) {
      await categoryMovieService.create({ movieId: movie.id, categoryId: key });
    }
  }
  // console.log('aqui - 5');
  return movie;
};
