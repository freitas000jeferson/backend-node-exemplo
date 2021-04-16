const { StatusCodes } = require('http-status-codes');

const { directorRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const directorExists = await directorRepository.get({ name: params.name });
  if (directorExists) {
    throw new ApplicationError(
      messages.alreadyExists('name'),
      StatusCodes.CONFLICT
    );
  }

  return directorRepository.create(params);
};
