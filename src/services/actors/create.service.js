const { StatusCodes } = require('http-status-codes');

const { actorRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const actorExists = await actorRepository.get({ name: params.name });
  if (actorExists) {
    throw new ApplicationError(
      messages.alreadyExists('actor'),
      StatusCodes.CONFLICT
    );
  }

  return actorRepository.create(params);
};
