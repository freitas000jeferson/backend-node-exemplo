const yup = require('yup');

const create = {
  body: yup.object().shape({
    title: yup.string().required(),
    synopsis: yup.string().required(),
    releaseDate: yup.date().required(),
    ageRating: yup.number().integer().required(),
    duration: yup.number().integer().required(),
    isActive: yup.boolean().default(() => true),
    actors: yup.array().of(yup.number().required()).strict(),
    writers: yup.array().of(yup.number().required()).strict(),
    directors: yup.array().of(yup.number().required()).strict(),
    categories: yup.array().of(yup.number().required()).strict(),
  }),
};

const list = {
  query: yup.object().shape({
    title: yup.string().default(''),
    synopsis: yup.string().default(''),
    beginDate: yup.date(),
    endDate: yup.date(),
    ageRating: yup.number().integer().default(0),
    duration: yup.number().integer().default(0),
    isActive: yup.boolean().default(() => true),

    page: yup.number().integer().default(1),
    perPage: yup.number().integer().default(10),
    sortBy: yup
      .string()
      .default('createdAt:desc')
      .matches(
        /[:](asc|desc)/i,
        "sorting order must be one of the following: 'asc' or 'desc'"
      ),
  }),
};

const listQuery = {
  query: yup.object().shape({
    title: yup.string().default(''),
    synopsis: yup.string().default(''),
    beginDate: yup.date(),
    endDate: yup.date(),
    ageRating: yup.number().integer().default(0),
    duration: yup.number().integer().default(0),
    isActive: yup.boolean().default(() => true),

    director: yup.string(),
    writer: yup.string(),
    category: yup.string(),
    actor: yup.string(),

    page: yup.number().integer().default(1),
    perPage: yup.number().integer().default(10),
    sortBy: yup
      .string()
      .default('createdAt:desc')
      .matches(
        /[:](asc|desc)/i,
        "sorting order must be one of the following: 'asc' or 'desc'"
      ),
  }),
};

const get = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    title: yup.string().required(),
    synopsis: yup.string().required(),
    releaseDate: yup.date().required(),
    ageRating: yup.number().integer().required(),
    duration: yup.number().integer().required(),
    isActive: yup.boolean().default(() => true),
  }),
};

const addId = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    id: yup.number().integer().required(),
  }),
};
const removeId = {
  params: yup.object().shape({
    id: yup.number().integer(),
    removeId: yup.number().integer(),
  }),
};

const destroy = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

module.exports.movies = {
  create,
  list,
  get,
  update,
  destroy,
  addId,
  removeId,
  listQuery,
};
