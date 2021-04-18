const { StatusCodes } = require('http-status-codes');
const { catchAsync } = require('../utils');
const {
  moviesService,
  actorMovieService,
  directorMovieService,
  writerMovieService,
  categoryMovieService,
} = require('../services');

module.exports = {
  list: catchAsync(async (req, res) => {
    const {
      page,
      perPage,
      sortBy,
      title,
      synopsis,
      beginDate,
      endDate,
      ageRating,
      duration,
      isActive,
    } = req.query;
    const response = await moviesService.list({
      page,
      perPage,
      sortBy,
      title,
      synopsis,
      beginDate,
      endDate,
      ageRating,
      duration,
      isActive,
    });

    if (!response || response.data.length === 0) {
      return res.status(StatusCodes.NO_CONTENT).end();
    }

    return res.status(StatusCodes.OK).json(response);
  }),

  listquery: catchAsync(async (req, res) => {
    const {
      page,
      perPage,
      sortBy,
      title,
      synopsis,
      beginDate,
      endDate,
      ageRating,
      duration,
      isActive,
      director,
      category,
      writer,
      actor,
    } = req.query;
    const response = await moviesService.listQuery({
      page,
      perPage,
      sortBy,
      title,
      synopsis,
      beginDate,
      endDate,
      ageRating,
      duration,
      isActive,
      director,
      category,
      writer,
      actor,
    });

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

  add_actor: catchAsync(async (req, res) => {
    const {
      params: { id },
      body,
    } = req;
    const response = await actorMovieService.create({
      movieId: id,
      actorId: body.id,
    });
    return res.status(StatusCodes.OK).json(response);
  }),

  remove_actor: catchAsync(async (req, res) => {
    const {
      params: { id, removeId },
    } = req;
    console.log(id, removeId);
    const response = await actorMovieService.destroy({
      movieId: id,
      actorId: removeId,
    });
    return res.status(StatusCodes.OK).json(response);
  }),
  add_director: catchAsync(async (req, res) => {
    const {
      params: { id },
      body,
    } = req;
    const response = await directorMovieService.create({
      movieId: id,
      directorId: body.id,
    });
    return res.status(StatusCodes.OK).json(response);
  }),

  remove_director: catchAsync(async (req, res) => {
    const {
      params: { id, removeId },
    } = req;
    console.log(id, removeId);
    const response = await directorMovieService.destroy({
      movieId: id,
      directorId: removeId,
    });
    return res.status(StatusCodes.OK).json(response);
  }),
  add_writer: catchAsync(async (req, res) => {
    const {
      params: { id },
      body,
    } = req;
    const response = await writerMovieService.create({
      movieId: id,
      writerId: body.id,
    });
    return res.status(StatusCodes.OK).json(response);
  }),

  remove_writer: catchAsync(async (req, res) => {
    const {
      params: { id, removeId },
    } = req;
    console.log(id, removeId);
    const response = await writerMovieService.destroy({
      movieId: id,
      writerId: removeId,
    });
    return res.status(StatusCodes.OK).json(response);
  }),

  add_category: catchAsync(async (req, res) => {
    const {
      params: { id },
      body,
    } = req;
    const response = await categoryMovieService.create({
      movieId: id,
      categoryId: body.id,
    });
    return res.status(StatusCodes.OK).json(response);
  }),

  remove_category: catchAsync(async (req, res) => {
    const {
      params: { id, removeId },
    } = req;
    console.log(id, removeId);
    const response = await categoryMovieService.destroy({
      movieId: id,
      categoryId: removeId,
    });
    return res.status(StatusCodes.OK).json(response);
  }),
};
