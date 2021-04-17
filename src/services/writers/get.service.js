const { StatusCodes } = require('http-status-codes');

const { writerRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const writer = await writerRepository.getById(id);
  if (!writer) {
    throw new ApplicationError(
      messages.notFound('writers'),
      StatusCodes.NOT_FOUND
    );
  }

  return writer;
};
