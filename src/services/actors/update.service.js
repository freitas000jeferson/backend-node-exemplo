const { StatusCodes } = require('http-status-codes');

const { actorRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const actor = await actorRepository.getById(id);
  if (!actor) {
    throw new ApplicationError(
      messages.notFound('actor'),
      StatusCodes.NOT_FOUND
    );
  }

  Object.assign(actor, body);

  return actorRepository.update(actor);
};
