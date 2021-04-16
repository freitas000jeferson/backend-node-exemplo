const { StatusCodes } = require('http-status-codes');

const { movieRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.enable = async (id) => {
  const movie = await movieRepository.getById(id);
  if (!movie) {
    throw new ApplicationError(
      messages.notFound('movie'),
      StatusCodes.NOT_FOUND
    );
  }

  Object.assign(movie, { isActive: true });

  return movieRepository.update(movie);
};
