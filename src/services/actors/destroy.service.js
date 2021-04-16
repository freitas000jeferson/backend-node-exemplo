const { StatusCodes } = require('http-status-codes');

const { actorRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const actor = await actorRepository.getById(id);
  if (!actor) {
    throw new ApplicationError(
      messages.notFound('actor'),
      StatusCodes.NOT_FOUND
    );
  }

  return actorRepository.destroy(id);
};
