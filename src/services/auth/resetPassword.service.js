const { StatusCodes } = require('http-status-codes');

const { usersRepository } = require('../../repositories');
const { ApplicationError, jwt } = require('../../utils');
const { messages } = require('../../helpers');
const userService = require('../users/update.service');

module.exports.resetPassword = async (token, newPassword) => {
  const user = await usersRepository.get({ passwordResetToken: token });
  if (!user) {
    throw new ApplicationError(
      messages.notFound('users'),
      StatusCodes.NOT_FOUND
    );
  }

  jwt.verify(token, (err) => {
    if (err) {
      throw new ApplicationError(
        messages.expiredToken,
        StatusCodes.UNAUTHORIZED
      );
    }
  });

  await userService.update(user.id, {
    password: newPassword,
    passwordResetToken: null,
  });
};
