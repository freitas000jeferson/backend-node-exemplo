const { StatusCodes } = require('http-status-codes');

const { rateRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const user = await rateRepository.getById(id);
  if (!user) {
    throw new ApplicationError(
      messages.notFound('rate'),
      StatusCodes.NOT_FOUND
    );
  }

  Object.assign(user, body);

  return rateRepository.update(user);
};
