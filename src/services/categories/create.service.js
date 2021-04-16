const { StatusCodes } = require('http-status-codes');

const { categoryRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const categoryExists = await categoryRepository.get({
    name: params.name,
  });
  if (categoryExists) {
    throw new ApplicationError(
      messages.alreadyExists('name'),
      StatusCodes.CONFLICT
    );
  }

  return categoryRepository.create(params);
};
