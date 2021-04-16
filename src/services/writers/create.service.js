const { StatusCodes } = require('http-status-codes');

const { writerRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const writerExists = await writerRepository.get({ name: params.name });
  if (writerExists) {
    throw new ApplicationError(
      messages.alreadyExists('name'),
      StatusCodes.CONFLICT
    );
  }

  return writerRepository.create(params);
};
