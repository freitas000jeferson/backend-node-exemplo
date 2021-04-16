const { StatusCodes } = require('http-status-codes');

const { directorRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const director = await directorRepository.getById(id);
  if (!director) {
    throw new ApplicationError(
      messages.notFound('director'),
      StatusCodes.NOT_FOUND
    );
  }

  return directorRepository.destroy(id);
};
