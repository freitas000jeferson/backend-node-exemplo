const { StatusCodes } = require('http-status-codes');

const { movieRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const movieExists = await movieRepository.get({ title: params.title });
  if (movieExists) {
    throw new ApplicationError(
      messages.alreadyExists('title'),
      StatusCodes.CONFLICT
    );
  }

  return movieRepository.create(params);
};
