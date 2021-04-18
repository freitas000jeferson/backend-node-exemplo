const { StatusCodes } = require('http-status-codes');

const { writerMoviesRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (params) => {
  const writerMovie = await writerMoviesRepository.get(params);
  if (!writerMovie) {
    throw new ApplicationError(
      messages.notFound('writer'),
      StatusCodes.NOT_FOUND
    );
  }

  return writerMoviesRepository.destroy(writerMovie.id);
};
