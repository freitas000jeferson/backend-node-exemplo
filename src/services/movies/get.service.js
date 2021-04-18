const { StatusCodes } = require('http-status-codes');

const { movieRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const movie = await movieRepository.getById(id);
  // const movie = await movieRepository.findAll(id);

  if (!movie) {
    throw new ApplicationError(
      messages.notFound('movie'),
      StatusCodes.NOT_FOUND
    );
  }

  return movie;
};
