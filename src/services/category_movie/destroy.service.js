const { StatusCodes } = require('http-status-codes');

const { categoryMoviesRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (params) => {
  const categoryMovie = await categoryMoviesRepository.get(params);
  if (!categoryMovie) {
    throw new ApplicationError(
      messages.notFound('category'),
      StatusCodes.NOT_FOUND
    );
  }

  return categoryMoviesRepository.destroy(categoryMovie.id);
};
