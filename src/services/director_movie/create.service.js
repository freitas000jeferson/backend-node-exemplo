const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');

const { directorMoviesRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const directorMoviesExists = await directorMoviesRepository.get({
    movie_id: { [Op.eq]: params.movieId },
    director_id: { [Op.eq]: params.directorId },
  });
  if (directorMoviesExists) {
    throw new ApplicationError(
      messages.alreadyExists('movie_id, director_id,'),
      StatusCodes.CONFLICT
    );
  }

  return directorMoviesRepository.create(params);
};
