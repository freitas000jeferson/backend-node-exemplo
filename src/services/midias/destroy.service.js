const { StatusCodes } = require('http-status-codes');

const { midiaRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const midia = await midiaRepository.getById(id);
  if (!midia) {
    throw new ApplicationError(
      messages.notFound('midia'),
      StatusCodes.NOT_FOUND
    );
  }

  return midiaRepository.destroy(id);
};
