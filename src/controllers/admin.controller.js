const { StatusCodes } = require('http-status-codes');
const { catchAsync } = require('../utils');
const { usersService } = require('../services');

module.exports = {
  change: catchAsync(async (req, res) => {
    const { id } = req.params;
    await usersService.changeAdmin(id);
    return res.status(StatusCodes.NO_CONTENT).end();
  }),
};
