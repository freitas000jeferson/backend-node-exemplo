const { StatusCodes } = require('http-status-codes');

const { actorMoviesRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const actorMovies = await actorMoviesRepository.getById(id);
  if (!actorMovies) {
    throw new ApplicationError(
      messages.notFound('actorMovies'),
      StatusCodes.NOT_FOUND
    );
  }

  return actorMovies;
};
