const { StatusCodes } = require('http-status-codes');
const { catchAsync } = require('../utils');
const { moviesService } = require('../services');

module.exports = {
  list: catchAsync(async (req, res) => {
    const { page, perPage, sortBy } = req.query;
    const response = await moviesService.list({ page, perPage, sortBy });

    if (!response || response.data.length === 0) {
      return res.status(StatusCodes.NO_CONTENT).end();
    }

    return res.status(StatusCodes.OK).json(response);
  }),

  get: catchAsync(async (req, res) => {
    const { id } = req.params;
    const response = await moviesService.get(id);
    return res.status(StatusCodes.OK).json(response);
  }),

  create: catchAsync(async (req, res) => {
    const { body } = req;

    const response = await moviesService.create(body);

    return res.status(StatusCodes.CREATED).json(response);
  }),

  update: catchAsync(async (req, res) => {
    const {
      params: { id },
      body,
    } = req;
    const response = await moviesService.update(id, body);
    return res.status(StatusCodes.OK).json(response);
  }),

  enable: catchAsync(async (req, res) => {
    const {
      params: { id },
    } = req;
    const response = await moviesService.enable(id);
    return res.status(StatusCodes.OK).json(response);
  }),

  disable: catchAsync(async (req, res) => {
    const {
      params: { id },
    } = req;
    const response = await moviesService.disable(id);
    return res.status(StatusCodes.OK).json(response);
  }),

  destroy: catchAsync(async (req, res) => {
    const { id } = req.params;
    await moviesService.destroy(id);
    return res.status(StatusCodes.NO_CONTENT).end();
  }),
};
