const { StatusCodes } = require('http-status-codes');

const { midiaRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const midiaExists = await midiaRepository.get({ url: params.url });
  if (midiaExists) {
    throw new ApplicationError(
      messages.alreadyExists('url'),
      StatusCodes.CONFLICT
    );
  }

  return midiaRepository.create(params);
};
