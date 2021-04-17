const { StatusCodes } = require('http-status-codes');
const { catchAsync } = require('../utils');
const { usersService } = require('../services');

module.exports = {
  change: catchAsync(async (req, res) => {
    const { id } = req.params;
    await usersService.changeAdmin(id);
    return res.status(StatusCodes.NO_CONTENT).end();
  }),

  disableUser: catchAsync(async (req, res) => {
    const {
      params: { id },
    } = req;
    const response = await usersService.update(id, {
      isActive: false,
    });
    return res.status(StatusCodes.OK).json(response);
  }),

  enableUser: catchAsync(async (req, res) => {
    const {
      params: { id },
    } = req;
    const response = await usersService.update(id, {
      isActive: true,
    });
    return res.status(StatusCodes.OK).json(response);
  }),
};
