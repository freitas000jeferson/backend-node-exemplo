const { StatusCodes } = require('http-status-codes');

const { noteRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const noteExists = await noteRepository.get({ note: params.note });
  if (noteExists) {
    throw new ApplicationError(
      messages.alreadyExists('note'),
      StatusCodes.CONFLICT
    );
  }

  return noteRepository.create(params);
};
