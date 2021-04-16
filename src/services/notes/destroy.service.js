const { StatusCodes } = require('http-status-codes');

const { noteRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const note = await noteRepository.getById(id);
  if (!note) {
    throw new ApplicationError(
      messages.notFound('note'),
      StatusCodes.NOT_FOUND
    );
  }

  return noteRepository.destroy(id);
};
