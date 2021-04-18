const { StatusCodes } = require('http-status-codes');

const { directorMoviesRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (params) => {
  const directorMovie = await directorMoviesRepository.get(params);
  if (!directorMovie) {
    throw new ApplicationError(
      messages.notFound('director'),
      StatusCodes.NOT_FOUND
    );
  }

  return directorMoviesRepository.destroy(directorMovie.id);
};
