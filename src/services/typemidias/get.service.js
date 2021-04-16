const { StatusCodes } = require('http-status-codes');

const { typemidiaRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const typemidia = await typemidiaRepository.getById(id);
  if (!typemidia) {
    throw new ApplicationError(
      messages.notFound('typemidia'),
      StatusCodes.NOT_FOUND
    );
  }

  return typemidia;
};
