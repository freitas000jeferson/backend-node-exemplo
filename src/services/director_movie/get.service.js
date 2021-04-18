const { StatusCodes } = require('http-status-codes');

const { directorMoviesRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const directorMovies = await directorMoviesRepository.getById(id);
  if (!directorMovies) {
    throw new ApplicationError(
      messages.notFound('directorMovies'),
      StatusCodes.NOT_FOUND
    );
  }

  return directorMovies;
};
