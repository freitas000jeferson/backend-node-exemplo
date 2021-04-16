const { StatusCodes } = require('http-status-codes');

const { actorRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const actor = await actorRepository.getById(id);
  if (!actor) {
    throw new ApplicationError(
      messages.notFound('actors'),
      StatusCodes.NOT_FOUND
    );
  }

  return actor;
};
