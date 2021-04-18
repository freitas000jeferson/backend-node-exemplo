const { StatusCodes } = require('http-status-codes');

const { writerMoviesRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const writerMovies = await writerMoviesRepository.getById(id);
  if (!writerMovies) {
    throw new ApplicationError(
      messages.notFound('writerMovies'),
      StatusCodes.NOT_FOUND
    );
  }

  return writerMovies;
};
