const { StatusCodes } = require('http-status-codes');

const { categoryMoviesRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const categoryMovies = await categoryMoviesRepository.getById(id);
  if (!categoryMovies) {
    throw new ApplicationError(
      messages.notFound('categoryMovies'),
      StatusCodes.NOT_FOUND
    );
  }

  return categoryMovies;
};
