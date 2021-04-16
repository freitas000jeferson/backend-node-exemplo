const { StatusCodes } = require('http-status-codes');

const { typemidiaRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const typemidiaExists = await typemidiaRepository.get({
    type: params.type,
  });
  if (typemidiaExists) {
    throw new ApplicationError(
      messages.alreadyExists('type'),
      StatusCodes.CONFLICT
    );
  }

  return typemidiaRepository.create(params);
};
