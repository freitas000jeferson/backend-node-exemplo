const { StatusCodes } = require('http-status-codes');

const { categoryRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const category = await categoryRepository.getById(id);
  if (!category) {
    throw new ApplicationError(
      messages.notFound('categorie'),
      StatusCodes.NOT_FOUND
    );
  }

  return categoryRepository.destroy(id);
};
