const { StatusCodes } = require('http-status-codes');

const { actorMoviesRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (params) => {
  const actorMovie = await actorMoviesRepository.get(params);
  if (!actorMovie) {
    throw new ApplicationError(
      messages.notFound('actor'),
      StatusCodes.NOT_FOUND
    );
  }

  return actorMoviesRepository.destroy(actorMovie.id);
};
