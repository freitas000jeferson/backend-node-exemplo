const { StatusCodes } = require('http-status-codes');

const { writerRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const writer = await writerRepository.getById(id);
  if (!writer) {
    throw new ApplicationError(
      messages.notFound('writers'),
      StatusCodes.NOT_FOUND
    );
  }

  Object.assign(writer, body);

  return writerRepository.update(writer);
};
