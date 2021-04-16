const { StatusCodes } = require('http-status-codes');

const { directorRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const user = await directorRepository.getById(id);
  if (!user) {
    throw new ApplicationError(
      messages.notFound('director'),
      StatusCodes.NOT_FOUND
    );
  }

  return user;
};
