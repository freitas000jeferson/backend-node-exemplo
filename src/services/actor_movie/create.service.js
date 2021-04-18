const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');

const { actorMoviesRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const actorMoviesExists = await actorMoviesRepository.get({
    movie_id: { [Op.eq]: params.movieId },
    actor_id: { [Op.eq]: params.actorId },
  });

  if (actorMoviesExists) {
    // return false;
    throw new ApplicationError(
      messages.alreadyExists('movie_id, actor_id,'),
      StatusCodes.CONFLICT
    );
  }

  return actorMoviesRepository.create(params);
};
