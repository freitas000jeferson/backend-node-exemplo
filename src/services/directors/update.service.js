const { StatusCodes } = require('http-status-codes');

const { directorRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const director = await directorRepository.getById(id);
  if (!director) {
    throw new ApplicationError(
      messages.notFound('director'),
      StatusCodes.NOT_FOUND
    );
  }

  Object.assign(director, body);

  return directorRepository.update(director);
};
