const { StatusCodes } = require('http-status-codes');

const { writerRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const writer = await writerRepository.getById(id);
  if (!writer) {
    throw new ApplicationError(
      messages.notFound('writer'),
      StatusCodes.NOT_FOUND
    );
  }

  return writerRepository.destroy(id);
};
