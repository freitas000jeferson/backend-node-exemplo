const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');
const { writerMoviesRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const writerMoviesExists = await writerMoviesRepository.get({
    movie_id: { [Op.eq]: params.movieId },
    writer_id: { [Op.eq]: params.writerId },
  });
  if (writerMoviesExists) {
    throw new ApplicationError(
      messages.alreadyExists('movie_id, writer_id,'),
      StatusCodes.CONFLICT
    );
  }

  return writerMoviesRepository.create(params);
};
