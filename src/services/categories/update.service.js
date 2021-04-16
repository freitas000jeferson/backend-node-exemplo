const { StatusCodes } = require('http-status-codes');

const { categoryRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const category = await categoryRepository.getById(id);
  if (!category) {
    throw new ApplicationError(
      messages.notFound('category'),
      StatusCodes.NOT_FOUND
    );
  }

  Object.assign(category, body);

  return categoryRepository.update(category);
};
