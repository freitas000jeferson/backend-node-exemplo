const { StatusCodes } = require('http-status-codes');

const { rateRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const rate = await rateRepository.getById(id);
  if (!rate) {
    throw new ApplicationError(
      messages.notFound('rate'),
      StatusCodes.NOT_FOUND
    );
  }

  return rateRepository.destroy(id);
};
