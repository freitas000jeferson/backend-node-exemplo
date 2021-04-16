const { StatusCodes } = require('http-status-codes');

const { rateRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const rateExists = await rateRepository.get({
    movieId: params.movieId,
    userId: params.userId,
  });
  if (rateExists) {
    throw new ApplicationError(
      messages.alreadyExists('rate'),
      StatusCodes.CONFLICT
    );
  }

  return rateRepository.create(params);
};
