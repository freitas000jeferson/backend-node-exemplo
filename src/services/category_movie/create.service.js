const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');

const { categoryMoviesRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const categoryMoviesExists = await categoryMoviesRepository.get({
    movie_id: { [Op.eq]: params.movieId },
    category_id: { [Op.eq]: params.categoryId },
  });
  if (categoryMoviesExists) {
    throw new ApplicationError(
      messages.alreadyExists('movie_id, category_id,'),
      StatusCodes.CONFLICT
    );
  }

  return categoryMoviesRepository.create(params);
};
